<?php

# from remote
# and from server
use CMERCH\CORE;
use CMERCH\MERCHANT;
use CMERCH\FILE_SYS;
use Nesk\Puphpeteer\Puppeteer;
use Nesk\Rialto\Data\JsFunction;

$f = "";

if(isset($_GET['url']) && $_GET['type']){

    $url = $_GET['url'];


}

// Set File Path
$files = new FILE_SYS();
$files->user = get_current_user_id();
$files->upload_path = wp_upload_dir();
$tcgDir = $files->getTCGDir("mtg");
$setDir = $files->getSetDir("test"); 

//var_dump($files->saveFromUrl("test","https://product-images.tcgplayer.com/fit-in/537434.jpg"));
$puppeteer = new Puppeteer;

$browser = $puppeteer->launch([]);

$page = $browser->newPage();
$page->setViewport(["height"=>1080, "width"=>1920,"deviceScaleFactor"=>1]);
// navigate to initial site
$page->goto('https://www.tcgplayer.com/categories/trading-and-collectible-card-games/magic-the-gathering/price-guides/murders-at-karlov-manor', ["waitUntil"=> 'load', "timeout"=> 0]);

$page->waitForSelector(".tcg-table-body");
$page->waitForNetworkIdle();
$page->evaluate("window.scrollTo(0, document.body.scrollHeight)");

$r = $page->querySelectorAll(".tcg-table-body tr");

print_r(
    $page->evaluate(
        JsFunction::createWithParameters(['rows'=>$r])->body(" 
            var result = [];
                for(let i = 0; i < rows.length ; i++){
                    result.push(rows[i].innerHTML);
                }
            return result;
        ")
    )
);

$browser->close();
//$page->screenshot(["path"=>__DIR__ ."/bottomPage.png"]);


// var_dump($page->evaluate(
//     JsFunction::createWithParameters(['rows'=>$table])->body(" 
//         var result = [];
//             for(let i = 0; i < rows.length ; i++){
//                 result.push(rows[i].innerHTML);
//             }
//         return result;
//         ")
//     )
// );

 /* 
$c = new CORE();

# FOR DEBUGGING ONLY
# IF USER ID = 1 (ADMIN)
# Set USER ID to test store
global $WCFM, $WCFMmp;
if($c->user != null){
    $m = new MERCHANT($c->user_id);
    //var_dump($m->store_settings);
} */
