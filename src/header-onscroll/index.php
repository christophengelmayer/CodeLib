<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Header Onscroll</title>
        <style type="text/css"><?= include('_components.header-onscroll.scss') ?></style>
    </head>
    <body>
        <div class="header-onscroll" style="backgorund-color:#ccc;padding:20px;">
            <strong>Header Content</strong>
        </div>
        <div style="height:120vh"></div>

        <script type="text/javascript">
            <?= include('../classhelper/classhelper.js') ?>
        </script>
        <script type="text/javascript">
            <?= include('header-onscroll.js') ?>
        </script>
    </body>
</html>
