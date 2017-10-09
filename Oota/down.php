<?php
header('Content-Type: application/json');

/*$dirname = getcwd()."\uploads";
$images = glob($dirname."\*.png");
echo sizeof($images);
echo $dirname;

foreach($images as $image) {
    echo '<img src="'.$image.'" /><br />';
    echo $image;
}
*/

$handle = opendir(dirname(realpath(__FILE__)).'/uploads/');
        while($file = readdir($handle)){
            if($file !== '.' && $file !== '..'){
                echo '<img src="uploads/'.$file.'" border="0" height="400" width="400" />';
            }
        }
?>