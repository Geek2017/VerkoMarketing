<?php
$file = './A/a.txt';
$newfile = './B/A.txt';
if(!copy($file,$newfile)){
    echo "failed to copy $file";
}
else{
    echo "copied $file into $newfile\n";
}
?>