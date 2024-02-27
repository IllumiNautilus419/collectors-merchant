<?php

namespace CMERCH;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Path;

include_once ABSPATH . 'wp-admin/includes/image.php';

class FILE_SYS{

    public $upload_path;
    public $tcg_path;
    public $set_path;
    public $user;

    function __construct(){
        if(!current_user_can( 'manage_options' )){
            return "nty";
        }
    }


    function checkIfExists($game, $set, $name){

        $path = $this->upload_path['basedir'] . "/cards/$game/$set/$name.jpeg";
        return file_exists($path);
        
    }

    function getTCGDir($game){
        return $this->checkTCGDir($game);
    }

    function getSetDir($set){
        return $this->checkSetDir($set);
    }

    function saveFromUrl($name,$url){

        if(!$this->tcg_path){
            return new \WP_Error("TCG Path not set");
        }

        if(!$this->set_path){
            return new \WP_Error("Set Path not found");
        }

        $type = getimagesize($url)['mime'];
        $type = explode('/', $type)[1];
        $file_name = strtolower(str_replace(" ","-",$name)).".$type";

        $upload_file = $this->set_path . "/$file_name";
        
        if(file_exists($upload_file)){
            return new \WP_Error("Image File Already Exists!");
        }

        $contents= file_get_contents($url);

        $savefile = fopen($upload_file, 'w+');

        fwrite($savefile, $contents);
        fclose($savefile);

        $wp_filetype = wp_check_filetype(basename($file_name), null );
        $attachment = array(
            'post_mime_type' => $wp_filetype['type'],
            'post_title' => $file_name,
            'post_content' => '',
            'post_status' => 'inherit'
        );

        $attach_id = wp_insert_attachment( $attachment, $upload_file );
        $imagenew = get_post( $attach_id );
        $fullsizepath = get_attached_file( $imagenew->ID );
        $attach_data = wp_generate_attachment_metadata( $attach_id, $fullsizepath );
        wp_update_attachment_metadata( $attach_id, $attach_data ); 
        return $attach_id;


        //$new_path = mkdir($this->set_path."/$name.jpg");
        $imagetype = end(explode('/', getimagesize($url)['mime']));
        return $imagetype;
        
      //  $new = wp_handle_upload( $original, $overrides:array|false, $time:string|null );
    }

    private function checkTCGDir($game){

        if ( isset( $this->user ) && ! empty( $this->upload_path['basedir'] ) ) {

            $tcg_path = $this->upload_path['basedir'].'/cards/'.$game;

            if ( ! file_exists( $tcg_path ) ) {
                wp_mkdir_p( $tcg_path );
            }

            $this->tcg_path = $tcg_path;
            return $tcg_path;

        }

        return new \WP_Error("error initialising tcg path");

    }

    private function checkSetDir($set){

        if ( isset( $this->user ) && ! empty( $this->tcg_path ) ) {

            $set_path = $this->tcg_path.'/'.$set;

            if ( ! file_exists( $set_path ) ) {
                wp_mkdir_p( $set_path );
            }

            $this->set_path = $set_path;
            return $set_path;

        }

        return new \WP_Error("error initialising set path");

    }
}