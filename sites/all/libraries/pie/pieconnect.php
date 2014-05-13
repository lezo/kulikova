<?php
drupal_add_js("jQuery.extend(Drupal.settings, ".drupal_json_encode(array("piePath"=>base_path().libraries_get_path("pie"))).");",array('type' => "inline", 'weight' => -50, "group"=>JS_LIBRARY));