<?php

add_action('admin_menu',function(){
       
    if(current_user_can('edit_pages')){
        $user = wp_get_current_user();
    
        add_menu_page(
    
        "CM Admin Manager", //Page title
        "CM Admin Manager", // Menu Title
        "manage_options", // Capability
        "cm-admin", // slug
        "cm_admin", //callback
        "",//Icon
        2 //position
        );

        add_submenu_page(
            'cm-admin',// parent slug
            "Data Manager", // page title
            "Data Manager", // menu Title
            'manage_options', //capability
            'data-manager', // slug
            'data_manager',// callback
             2//position
        );   

    }
});

function cm_admin(){

    include_once __DIR__ . '/dashHead.html';
    
}

function data_manager(){

}