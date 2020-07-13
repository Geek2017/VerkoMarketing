<?php
$file = "./A/a.txt";
$newfile = "./B/a.txt";
if(!copy($file,$newfile)){
    echo "failed to copy $file";
}
else{
    echo "copied $file into $newfile\n";
}
?>