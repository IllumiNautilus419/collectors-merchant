<?php

# from remote
# and from server
use CMERCH\CORE;
use CMERCH\MERCHANT;
use Nesk\Puphpeteer\Puppeteer;
use Nesk\Rialto\Data\JsFunction;

$puppeteer = new Puppeteer;

$browser = $puppeteer->launch([]);

$page = $browser->newPage();
$page->setViewport(["height"=>1080, "width"=>1920,"deviceScaleFactor"=>1]);
// navigate to initial site
$page->goto('https://www.tcgplayer.com/categories/trading-and-collectible-card-games/magic-the-gathering/price-guides/murders-at-karlov-manor', ["waitUntil"=> 'load', "timeout"=> 0]);

/* $page->waitForFunction("window.addEventListener('load', (event) => {
        return true;
  })"); */
$page->waitForSelector(".tcg-table-body");
$page->waitForNetworkIdle();
$page->evaluate("window.scrollTo(0, document.body.scrollHeight)");

$r = $page->querySelectorAll(".tcg-table-body tr");
print_r(
    $page->evaluate(
        JsFunction::createWithParameters(["r"=>$r])->body(
            "return r.length"
        )
    )
);

$page->screenshot(["path"=>__DIR__ ."/bottomPage.png"]);



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
$browser->close();
 
$c = new CORE();

# FOR DEBUGGING ONLY
# IF USER ID = 1 (ADMIN)
# Set USER ID to test store
global $WCFM, $WCFMmp;
if($c->user != null){
    $m = new MERCHANT($c->user_id);
    //var_dump($m->store_settings);
}
