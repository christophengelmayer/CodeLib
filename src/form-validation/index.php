<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Form Validation</title>
        <style type="text/css">
            input:valid { 
                border-color: green; 
            }
            input.input--error{
                border-color: red;
            }
            .error{
                color: red;
            }
            form div, 
            form button { 
                margin: 1em 0.5em; 
            }
        </style>
    </head>
    <body>
        <form>  
            <div>
                <label for="requiredinput"> Required Input</label>
                <input id="requiredinput" type="text" name="requiredinput" required />
            </div>
            <div>
                <label for="emailinput">E-Mail</label>
                <input id="emailinput" type="email" name="emailinput" required />
            </div>
            <button type="submit">Submit</button>
        </form>  

        <script>
            <?php include('form-validation.js') ?>
            var formValidation = FormValidation();
        </script>
    </body>
</html>
