<?php include("includes/head.inc.php"); ?>
<?php include("includes/faq.inc.php"); ?>
<!-- /////////// Section ONE ////////////////////////////// -->
<section>
    <article>
        <header>
            <img id="red-logo" src="./images/logo-red.svg">
            <h1>FAQs</h1>
            <h2>Frequently Asked Questions</h2>
        </header>
            <ul id="faq">
                <!-- This calls the FAQ generating function -->
                <?php faqQuestions($faq); ?>
        </ul>
        </article>
</section>
<script src="js/script.js"></script>
<?php include("includes/footer.inc.php"); ?>