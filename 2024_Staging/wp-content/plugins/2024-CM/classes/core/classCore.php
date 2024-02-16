<?php

namespace CMERCH;
 
class CORE{

    public $user;
    public $user_id;
    public $user_name;
    public $user_roles;

    public function __construct(){

        if($user = wp_get_current_user()){

            // save og user object
            $this->user=$user;

            if($user->user_id == 1){
                $user = get_user_by("ID",2);
            }
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