<?php include('function2s.php'); ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>displayImages function</title>

<link href="styles.css" rel="stylesheet">
<?php displayImages("galleries", "random", "background") ?>
</head>

<body>
 <section id="content">   
 <?php displayImages("galleries", "random", "slideshow") ?>
 <?php displayImages("galleries", "random", "img") ?>
 <?php displayImages("galleries", "random", "slideshow") ?>
</section>

</body>
</html>