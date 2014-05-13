<?php
$noie='<!--[if lt IE 8]><link href="'.base_path().libraries_get_path("noie").'/noie.css" media="all" rel="stylesheet" type="text/css" /><script src="'.base_path().libraries_get_path("noie").'/noie.js"></script><![endif]-->';
drupal_add_js("document.write('$noie')","inline");