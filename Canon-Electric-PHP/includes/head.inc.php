<?php 
include('includes/functions.php');
pageName();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title><?php echo $pageTitle ?></title>
    <!--Sets viewport to the device's native width at 100%. 
    	Prevents phones from showing tiny, 'desktop' views.-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Google Font link goes here.-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">  
    <!--External stylesheets go here. Use 'reset' and custom stylesheets.-->
    <link rel="stylesheet" href="css/reset.css" type="text/css">
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <link rel="stylesheet" href="css/function_styles.css" type="text/css">
</head>

<body id="<?php echo $pageClass; ?>">
<?php displayImages("galleries", "background", "background") ?>      

<!-- ///// Top 'banner' section ////////////////////////////-->
    <section id="banner">
        <header>
         <img id="small-logo" src="./images/cannon-electric-logo.png">   
        <h1>Cannon Electric</h1>
            <h2><?php echo $pageTitle;?></h2>
        </header>
        <nav id="globalnav" class="">
            <a href="#navigate" id="menu">Menu</a>
           <ul id="menu-list">               

                <li><a href="index.php">SERVICES</a></li>
                <li><a href="about_us.php">ABOUT US</a></li>
                <li><a href="FAQs.php">FAQ</a></li>
                <li><a href="discounts.php">DISCOUNTS</a></li>
            </ul>
        </nav>
    </section>
