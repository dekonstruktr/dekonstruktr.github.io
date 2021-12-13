<?php
// -----------------------End Page naming function -------------------//
function pageName(){

    $page = basename($_SERVER['PHP_SELF'],'.php');
    global $pageTitle;
    global $pageClass;

switch($page){
    case 'index':
        $pageTitle = 'Electrical Services';
        $pageClass = $page;
        break;
        case 'FAQs':
            $pageTitle = 'FAQs';
            $pageClass = $page;
            break;
        default: 
        $pageTitle = $page;
        $pageClass = $page;
        break;
}


$pageTitle = ucwords(str_replace('_', ' ', $pageTitle));

}

// -----------------------End Page naming function -------------------//


function displayImages($albumDir, $whichGallery, $displayMode)
{
    $album = $albumDir . "/"; //pulled from function arg1
    $targetGallery = $whichGallery . "/"; //pulled from function arg2

    $currentGalleryPath = $album . $targetGallery;
    $large = "large/"; //original size
    $medium = "medium/"; //1100px
    $small = "small/"; //200x200 px thumbnails

    if (
        file_exists($currentGalleryPath . $large) &&
        file_exists($currentGalleryPath . $medium) &&
        file_exists($currentGalleryPath . $small)
    ) {

        //scandir capable of scanning relative paths
        $imageList = scandir($currentGalleryPath . $large);
        //initiate empty array
        $acceptable = [1, 2, 3, 6, 9];
        $unwanted = [];
        //loop removes unwanted items
        foreach ($imageList as $filename) {
            if (strpos($filename, ".") == 0 || is_dir($filename)) {
                array_push($unwanted, $filename);
                //remove unwanted items
                $imageList = array_diff($imageList, $unwanted);
            } else {
                $size = getimagesize($currentGalleryPath . $large . $filename);
                if (
                    isset($size[2]) === false ||
                    !in_array($size[2], $acceptable)
                ) {
                    array_push($unwanted, $filename);
                    //remove unwanted items
                    $imageList = array_diff($imageList, $unwanted);
                }
            }
        }
        ?>

<?php // random image generator
$image = $imageList[array_rand($imageList)]; 
?>

<?php
$fileExt = [".jpg", ".jpeg", ".png", ".bmp", ".gif"];
$characters = ["-", "_", "/", "."];
//create alt text for images
$alt = str_replace($fileExt, "", $image);
$alt = ucwords(str_replace($characters, " ", $alt));

$title = ucwords(str_replace($characters, " ", $whichGallery));
?>
<?php switch ($displayMode) { case "img": 
?>

<p class="random-image images"><img src="<?php echo $currentGalleryPath .
    $medium .
    rawurlencode($image); ?>"
        alt="<?php echo $alt; ?>"></p><br>

<hr>
<?php break; ?>
<!--    grab random image for background-->
<?php case "background":
        $image = $imageList[array_rand($imageList)]; ?>
<style>
body {
    background: url(<?php echo $currentGalleryPath .
        $large .
        rawurlencode($image); ?>) ;
    background-size: auto;
}
</style>

<?php break; ?>
<?php
    case "lightbox":
        //call out globals for lightbox switch case

        global $jquery, $lightbox;
        if (!isset($jquery)) {
            echo '<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="crossorigin="anonymous"></script>' .
                "\n";
            $jquery = true;
        }
        if (!isset($lightbox)) {
            echo '<script src="js/lightbox.js"></script>' . "\n";
            echo '<link href="css/lightbox.css" rel="stylesheet">' . "\n";
            $lightbox = true;
        }
//   thumbnail  lightbox gallery ////
        ?>

<h2 class="gallery"><?php echo $title; ?></h2>
<ul class="gallery">
    <?php foreach ($imageList as $image) {

        //create alt text for images
        $alt = str_replace($fileExt, "", $image);
        $alt = ucwords(str_replace($characters, " ", $alt));
        ?>
    <li><a href="<?php echo $currentGalleryPath .
        $medium .
        rawurlencode($image); ?>"
            data-lightbox="<?php echo $title; ?>" title="<?php echo $alt; ?>">
            <img src="<?php echo $currentGalleryPath .
                $small .
                rawurlencode($image); ?>" alt="<?php echo $alt; ?>"></a>
    </li><?php
    } ?>

</ul> <?php break; ?>

<?php
    case "slideshow":

        global $jquery, $cycle2;
        if (!isset($jquery)) {
            echo '<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="crossorigin="anonymous"></script>' .
                "\n";
            $jquery = true;
            
        }
        if (!isset($cycle2)) {
            echo '<script src="js/cycle2.js"></script>' . "\n";
            echo '<link href="css/cycle2.css" rel="stylesheet">' . "\n";
            $cycle2 = true;
        }
        ?>

<div class="cycle-slideshow" data-cycle-fx="fadeout" data-cycle-speed=1500 data-cycle-timeout=4000>
    <!-- <div class="cycle-caption"></div>
    <div class="cycle-overlay"></div> -->
    <?php foreach ($imageList as $image) { ?>
    <?php
    $alt = str_replace($fileExt, "", $image);
    $alt = ucwords(str_replace($characters, " ", $alt));
    ?>
    <img src="<?php echo $currentGalleryPath .
        $medium .
        rawurlencode($image); ?>" alt="<?php echo $alt; ?>"
        data-cycle-title="<?php echo $title; ?>" data-cycle-desc="<?php echo $alt; ?>"><?php } ?>
</div>
<?php break; ?>
<?php
} // end switch display mode
    } else {
        //prints if dir cannot be found
        echo "This gallery cannot be found";
    } //end files exist
} //----------------------------------end display images function-----------------------------//


//-----------------------------------Copyright date function ------------------------------//
function copyright(){

echo "Copyright &copy ". date('Y'). " Cannon Electric";

}
//-----------------------------------End Copyright date function ------------------------------//

// -------------------------------- FAQ Generator Function that generates markup for FAQs --------------------//
function faqQuestions($faqArray){
    foreach ($faqArray as $questions => $answers){
        echo '<li><div class="question">'.$questions.'</div><div class="answer">'.$answers.'</div></li>';
    }
    }
// -------------------------------- End FAQ Generator Function that generates markup for FAQs --------------------//
?>
