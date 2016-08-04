<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Header Onscroll</title>
        <style type="text/css">
            .scrollnavigation .active a{
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <ul class="scrollnavigation" style="position:fixed;top:0;">
            <li>
                <a href="#content1">Content 1</a>
            </li>
            <li>
                <a href="#content2">Content 2</a>
            </li>
            <li>
                <a href="#content3">Content 3</a>
            </li>
            <li>
                <a href="#content4">Content 4</a>
            </li>
        </ul>
        <div id="content1" style="background-color:#aaa;padding:20px;margin-bottom:10px;height:40vh;">
            <h1>Content 1</h1>
        </div>

        <div id="content2" style="background-color:#bbb;padding:20px;margin-bottom:10px;height:40vh;">
            <h1>Content 2</h1>
        </div>

        <div id="content3" style="background-color:#ccc;padding:20px;margin-bottom:10px;height:40vh;">
            <h1>Content 3</h1>
        </div>

        <div id="content4" style="background-color:#ddd;padding:20px;height:40vh;">
            <h1>Content 4</h1>
        </div>

        <script type="text/javascript">
            <?= include('scrollnavigation.js') ?>
            
            scrollnavigation.init();
        </script>
    </body>
</html>

