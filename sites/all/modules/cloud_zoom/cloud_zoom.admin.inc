<?php
// $Id: cloud_zoom.admin.inc,v 1 2011/09/26 19:59:43 sas Exp $
/**
 * admin functions.
 */
function cloud_zoom_settings() {
	$form['cloud_zoom_zoom_width'] = array(
	'#type' => 'textfield',
	'#default_value' => variable_get('cloud_zoom_zoom_width', 'auto'),
	'#title' => t('zoomWidth'),
	'#size' => 4,
	'#description' => t("The width of the zoom window in pixels. If 'auto' is specified, the width will be the same as the small image. Examples: 240"),
	);
	$form['cloud_zoom_zoom_height'] = array(
	'#type' => 'textfield',
	'#default_value' => variable_get('cloud_zoom_zoom_height', 'auto'),
	'#title' => t('zoomHeight'),
	'#size' => 4,
	'#description' => t("The height of the zoom window in pixels. If 'auto' is specified, the height will be the same as the small image. Examples: 165"),
	);
	$form['cloud_zoom_tint'] = array(
	'#type' => 'textfield',
	'#default_value' => variable_get('cloud_zoom_tint', false),
	'#title' => t('tint'),
	'#size' => 4,
	'#description' => t("Specifies a tint colour which will cover the small image. Colours should be specified in hex format, e.g. '#aa00aa'. Does not work with softFocus."),
	);
	$styles = image_styles();
	foreach($styles as $style_name => $style){
		$styles_opt[$style_name] = $style_name;
	}
//	$form['cloud_zoom_image_style_small'] = array(
//	'#type' => 'select',
//	'#title' => t('Small image style.'),
//	'#default_value' => variable_get('cloud_zoom_image_style_small', 'medium'),
//	'#options' => $styles_opt
//	);
	$form['cloud_zoom_image_style_tiny'] = array(
	'#type' => 'select',
	'#title' => t('Tiny image style.'),
	'#default_value' => variable_get('cloud_zoom_image_style_tiny', 'thumbnail'),
	'#options' => $styles_opt
	);
	
	return system_settings_form($form);
}