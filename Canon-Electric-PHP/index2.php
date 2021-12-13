<!DOCTYPE html>
<html lang="en">

<head>
    <title>Template</title>
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
    <link rel="stylesheet" href="reset.css" type="text/css">
    <link rel="stylesheet" href="styles.css" type="text/css">
</head>

<body>
    <!-- ///// Top 'banner' section ////////////////////////////-->
    <section id="banner">
        <header>
         <img id="small-logo" src="./images/cannon-electric-logo.png">   
        <h1>CANNON Electric</h1>
            <h2>Services</h2>
        </header>
        <nav id="globalnav" class="">
            <a href="#navigate" id="menu">Menu</a>
           <ul id="menu-list">               

                <li><a href="#">SERVICES</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">DISCOUNTS</a></li>
            </ul>
        </nav>
    </section>

    <!-- /////////// Section ONE ////////////////////////////// -->
    <section>
        <article>
            <header>
                <h1>Cannon Electric</h1>
                <h2>Get a Quote</h2>
            </header>
            <p>"To schedule a service visit, call 619-555-5555. We will get back to you right away. We are happy to help you with all your electrical services!</p>
            <img id="img1" src="./images/tool-on-instructions.jpg" alt="tool on instructions image">
            <p>Pellentesque gravida malesuada purus et mollis. Integer rhoncus odio vel ligula dictum congue. Praesent luctus magna mattis ultrices porttitor. Ut vitae libero est. Donec sit amet leo turpis. Sed laoreet accumsan urna, sodales ultrices nunc
                vehicula id. Praesent nibh tortor, euismod a ante nec, malesuada pharetra erat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rutrum quis neque vitae tempor. </p>
            <ul>
                <li>Unordered list item one</li>
                <li>Unordered list item two</li>
                <li>Unordered list item three</li>
            </ul>
            <ol>
                <li>Ordered list item one</li>
                <li>Ordered list item two</li>
                <li>Ordered list item three</li>
            </ol>
        </article>
    </section>
    <!--End section ONE-->

    <!-- /////////// Section TWO ////////////////////////////// -->
    <section>
        <article>
            <header>
                <h1>H1 Heading</h1>
                <h2>H2 Subheading</h2>
            </header>
            <p>Ut vitae libero est. Donec sit amet leo turpis. Sed laoreet accumsan urna, sodales ultrices nunc vehicula id. Praesent nibh tortor, euismod a ante nec, malesuada pharetra erat. </p>
            <blockquote>
                This is a blockquote. Aenean interdum nibh in ipsum fringilla accumsan. Morbi bibendum nisl felis, a luctus sapien suscipit nec. Morbi arcu justo, laoreet non quam semper, cursus sagittis nibh. Duis consectetur bibendum rhoncus.
            </blockquote>
            <p>Ut vitae libero est. <code>Here is an example of the CODE element.</code>Donec sit amet leo turpis. Sed laoreet accumsan urna, sodales ultrices nunc vehicula id. Praesent nibh tortor, euismod a ante nec, malesuada pharetra erat. </p>
            <pre>This is an example of the PRE tag.
            
                    Wonky, wonky, wonky whitespace.
            </pre>

        </article>
    </section>
    <!--End section TWO-->

    <!-- /////////// Section THREE ////////////////////////////// -->
    <section>
        <article>
            <header>
                <h1>H1 Heading</h1>
                <h2>H2 Subheading</h2>
            </header>

            <aside>This is an Aside element.Pellentesque gravida malesuada purus et mollis. Integer rhoncus odio vel ligula dictum congue. Praesent luctus magna mattis ultrices porttitor. Ut vitae libero est. Donec sit amet leo turpis.</aside>

            <dl>
                <dt>Definition Term One</dt>
                <dd>This is the definition data ONE.</dd>

                <dt>Definition Term TWO</dt>
                <dd>This is the definition data ONE.</dd>

                <dt>Definition Term THREE</dt>
                <dd>This is the definition data ONE.</dd>
            </dl>
            <img id="tree2" src="images/tree2.jpg">
        </article>
    </section>
    <!--End section THREE-->
    <footer>
        <article>
            <header>
                <h1>Footer 1</h1>
            </header>
            <ul>
                <li><a href="#">UL External link 1</a></li>
                <li><a href="#">UL External link 2</a></li>
                <li><a href="#">UL External link 3</a></li>
            </ul>
        </article>

        <article>
            <header>
                <h1>Footer 2</h1>
            </header>
            <ul>
                <li><a href="#">UL External link 1</a></li>
                <li><a href="#">UL External link 2</a></li>
                <li><a href="#">UL External link 3</a></li>
            </ul>
        </article>

        <article>
            <header>
                <h1>Footer 3</h1>
            </header>
            <ul>
                <li><a href="#">UL External link 1</a></li>
                <li><a href="#">UL External link 2</a></li>
                <li><a href="#">UL External link 3</a></li>
            </ul>
        </article>
    </footer>
<!-- JS Script to hide/show mobile menu -->
<script>
    const menuList = document.getElementById("menu-list");
    const menuBtn = document.getElementById("menu").addEventListener("click", () => menuList.classList.toggle("navToggle"));
</script>
<!-- No script for mobile menu -->
<noscript>
<nav id="navigate">
<ul>               

<li><a href="#">Page 1</a></li>
<li><a href="#">Page 2</a></li>
<li><a href="#">Page 3</a></li>
<li><a href="#">Page 4</a></li>
</ul>
</nav>
</noscript>
</body>

</html>
