<?php

/**
 * Plugin Name:     Collector's Merchant 2024
 * Plugin URI:      -
 * Description:     This is core to the site running, DO NOT DISABLE
 * Author:          Collector's Merchant Ltd   
 * Author URI:      https://collectorsmerchant.com
 * Version:         0.0.2
 */

// Die if no abspath
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define plugin base path
define("CM_BASE",__DIR__);


add_action("before_woocommerce_init", function(){

    // init vendor
    require_once CM_BASE . '/vendor/autoload.php';

    // Init Classes
    require_once CM_BASE . '/classes/loadClasses.php';

    // Init Views
    require_once CM_BASE . '/views/loadViews.php';

});
