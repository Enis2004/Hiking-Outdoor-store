<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $commentName = isset($_POST['commentName']) ? $_POST['commentName'] : '';
    $commentText = isset($_POST['commentText']) ? $_POST['commentText'] : '';


    if (!empty($commentName) && !empty($commentText)){
    $response = [
        'status' => 'success',
        'commentName' => htmlspecialchars($commentName),
        'commentText' => htmlspecialchars($commentText)
    ];
    }else{
         $response = [
        'status' => 'error',
        'message' => 'Please provide both name and comment'
        ];
    }
    echo json_encode($response);
}
?>

