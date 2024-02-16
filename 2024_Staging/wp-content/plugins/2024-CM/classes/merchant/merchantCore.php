<?php

namespace CMERCH;

use CMERCH\CORE;
class MERCHANT extends CORE{

    public $store_settings;

    function __construct($user_id){

        if($user_id == 0 || $user_id == null || !wcfm_is_vendor()){
            return false;
        }

        Parent::__construct();

        return $this->get_store_settings($user_id);

    }

    function get_store_settings($vendor_id){
        
        if($vend = get_user_meta( $vendor_id, 'wcfmmp_profile_settings', true )){
            $this->store_settings = $vend;
            return true;
        }

        return false;

    }

}