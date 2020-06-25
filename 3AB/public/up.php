<?php
// $filename = $_POST["file_name"];
// $folder = $_POST["folder"];



if($_FILES["botFile"]["name"] != ''){
    //$test = explode(".", $_FILES["botFile"],["name"]);
    $location = './assets/' . basename($_FILES["botFile"]["name"]);
    move_uploaded_file($_FILES["botFile"]["tmp_name"], $location);
    // echo "Added";
    $zip = new ZipArchive;
if ($zip->open($location) === TRUE) {
    $zip->extractTo('./assets/');
    $zip->close();
    echo 'Your .zip file was uploaded and unpacked.';
} else {
    echo 'There was a problem with the upload. Please try again.';
}

}

// $files = scandir('./assets/', SCANDIR_SORT_DESCENDING);
// $newest_file = $files[0];

// echo $newest_file;

?>