<?php 
$copy = $_POST['copy'];
mkdir("../../test");

if ($copy == "copy"){
    function custom_copy($src, $dst) {  
  
        // open the source directory 
        $dir = opendir($src);  
      
        // Make the destination directory if not exist 
        @mkdir($dst);  
      
        // Loop through the files in source directory 
        while( $file = readdir($dir) ) {  
      
            if (( $file != '.' ) && ( $file != '..' )) {  
                if ( is_dir($src . '/' . $file) )  
                {  
      
                    // Recursively calling custom copy function 
                    // for sub directory  
                    custom_copy($src . '/' . $file, $dst . '/' . $file);  
      
                }  
                else {  
                    copy($src . '/' . $file, $dst . '/' . $file);  
                }  
            }  
        }  
      
        closedir($dir); 
    }  

    function custom_copy2($src2, $dst2) {  
  
        // open the source directory 
        $dir = opendir($src2);  
      
        // Make the destination directory if not exist 
        @mkdir($dst2);  
      
        // Loop through the files in source directory 
        while( $file = readdir($dir) ) {  
      
            if (( $file != '.' ) && ( $file != '..' )) {  
                if ( is_dir($src2 . '/' . $file) )  
                {  
      
                    // Recursively calling custom copy function 
                    // for sub directory  
                    custom_copy($src2 . '/' . $file, $dst2 . '/' . $file);  
      
                }  
                else {  
                    copy($src2 . '/' . $file, $dst2 . '/' . $file);  
                }  
            }  
        }  
      
        closedir($dir); 
    }  

    function custom_copy3($src3, $dst3) {  
  
        // open the source directory 
        $dir = opendir($src3);  
      
        // Make the destination directory if not exist 
        @mkdir($dst3);  
      
        // Loop through the files in source directory 
        while( $file = readdir($dir) ) {  
      
            if (( $file != '.' ) && ( $file != '..' )) {  
                if ( is_dir($src3 . '/' . $file) )  
                {  
      
                    // Recursively calling custom copy function 
                    // for sub directory  
                    custom_copy($src3 . '/' . $file, $dst3 . '/' . $file);  
      
                }  
                else {  
                    copy($src3 . '/' . $file, $dst3 . '/' . $file);  
                }  
            }  
        }  
      
        closedir($dir); 
    } 
      
    // $src = "C:/xampp/htdocs/VerkoMarketing/skeliton/assets/js"; 
      
    // $dst = "C:/xampp/htdocs/VerkoMarketing/Copy/js"; 

    $src = "../../skeliton/assets/js"; 
      
    $dst = "../../Copy/js"; 

    $src2 = "../../skeliton/assets/css"; 
      
    $dst2 = "../../Copy/css"; 

    $src3 = "../../skeliton/assets/html"; 
      
    $dst3 = "../../Copy/html"; 
      
    custom_copy($src, $dst); 
    custom_copy2($src2, $dst2); 
    custom_copy3($src3, $dst3);
   }
  

  
?> 