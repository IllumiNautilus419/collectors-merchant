<?php

namespace CMERCH;
 
class CORE{

    protected $user;
    protected $user_id;
    public $user_name;
    protected $user_roles;

    public function __construct(){

        if($user = wp_get_current_user()){

            // save og user object
            $this->user=$user;

            // pull useful values
            $this->user_values($user);

        }else{
            $user = null;
        }

    } 

    // get user property values
    private function user_values($user){

        $this->user_id = $user->ID;
        $this->user_name = $user->display_name;
        $this->user_roles = $user->roles;

    }

    // Testing function to make sure class has init correctly
    public function ping($message = "Pong!"){
            echo $message;
    }

}