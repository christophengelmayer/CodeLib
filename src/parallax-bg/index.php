<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Parallax Background</title>
        <style type="text/css"><?= include('objects.parallax-bg.scss') ?></style>
    </head>
    <body>

        <div class="parallax" style="background-image:url('https://unsplash.it/800/800')">
            <div>
                <h1>Simple background parallax scrolling in JavaScript</h1>
                <a href="#">Test</a>
            </div>
        </div>
        <div style="height:80vh"></div>
        <div class="parallax" style="background-image:url('https://unsplash.it/g/800/800')">
            <h1>Simple background parallax scrolling in JavaScript</h1>
        </div>
        <div style="height:120vh"></div>

        <script type="text/javascript">
            <?= include('parallax-bg.js') ?>

            parallax.init();
        </script>
    </body>
</html>
