<?php

namespace CMERCH\CARD_MANAGER;

use App\Entity\Task;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DASH{


    function __construct($user,$formName){

        if(!user_can($user,"manage_options")){
            return new \WP_Error(401, "Admin only, sorry");
        }



    }

    function load_form($formName){



    }


}