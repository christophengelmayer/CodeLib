// From: http://developer.telerik.com/featured/building-html5-form-validation-bubble-replacements/

function FormValidation( selector, errorHtmlTemplate ) {
    this.selector = typeof selector !== 'undefined' ? selector : 'form';
    this.errorHtmlTemplate = typeof errorHtmlTemplate  !== 'undefined' ? errorHtmlTemplate : "<div class='error'>{{}}</div>";
    this.forms = document.querySelectorAll( this.selector );

    var self = this,
        form;

    // Replace the validation UI for all forms
    for ( var i = 0; i < self.forms.length; i++ ) {
        form = forms[ i ];
        // Suppress the default bubbles
        form.addEventListener( "invalid", handleInvalidEvent, true );

        // Support Safari, iOS Safari, and the Android browser—each of which do not prevent
        // form submissions by default
        form.addEventListener( "submit", handleSubmitEvent);

        form.querySelector( "*[type=submit]" ).addEventListener( "click", validate);
    }

    function handleInvalidEvent (event){
        event.preventDefault();
    }

    function handleSubmitEvent (event) {
        if ( !this.checkValidity() ) {
            event.preventDefault();
        }
    }

    function validate(event){
        var invalidFields = form.querySelectorAll( ":invalid" ),
            errorInputs = form.querySelectorAll(".input--error"),
            errorMessages = form.querySelectorAll( ".error" ),
            i;

        // Remove any existing messages
        for ( i = 0; i < errorMessages.length; i++ ) {
            errorMessages[ i ].parentNode.removeChild( errorMessages[ i ] );
        }
        for ( i = 0; i < errorInputs.length; i++ ) {
        errorInputs[ i ].classList.remove('input--error');
        }

        for ( i = 0; i < invalidFields.length; i++ ) {
            invalidFields[ i ].classList.add("input--error");
            invalidFields[ i ].insertAdjacentHTML( 
                "afterend", 
                self.errorHtmlTemplate.replace(/{{}}/i, invalidFields[ i ].validationMessage)
            );
        }

        // If there are errors, give focus to the first invalid field
        if ( invalidFields.length > 0 ) {
            invalidFields[ 0 ].focus();
        }
    }
}

