<?php
require('inc/session.php');

if (isset($_SESSION['key'])) {
    $params = array();

    if (isset($_GET['method'])) {
        switch ($_GET['method']) {
            case 'artist.getSetlist':
                $endpoint = 'artist/' . $_GET['mbid'] . '/setlists';
                break;
            default:
                require('inc/error.php');
                raiseOWSError('Invalid method', 400, 603);
        }
        unset($_GET['method']);
    } else {
        require('inc/error.php');
        raiseOWSError('Invalid method', 400, 602);
    }

    $setlistfmrq = curl_init();
    curl_setopt($setlistfmrq, CURLOPT_URL, 'https://api.setlist.fm/rest/1.0/' . $endpoint);
    curl_setopt($setlistfmrq, CURLOPT_HTTPHEADER, ["x-api-key:" . getenv('SETLISTFM_KEY'), "ACCEPT: application/json"]);
    curl_setopt($setlistfmrq, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($setlistfmrq);
    header('Content-Type: ' . curl_getinfo($setlistfmrq, CURLINFO_CONTENT_TYPE));

    curl_close($setlistfmrq);
    echo $response;
} else {
    require('inc/error.php');
    raiseOWSError('Invalid session key', 401, 601);
}
