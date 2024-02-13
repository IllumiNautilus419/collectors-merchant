<?php

namespace CMERCH;

use CMERCH\CORE;

class MERCHANT extends CORE{

    function __construct($user_id){

        if($user_id == 0 || $user_id == null){
            new \WP_Error("Cannot Launch Merchant Class, Invalid User");
        }

    }

}