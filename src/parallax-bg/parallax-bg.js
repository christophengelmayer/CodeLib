var parallax = (function () {
    var elements = [],
        selector = '.parallax',
        speed = 5.0;

    function isVisible(element) {
        var rect = element.getBoundingClientRect();
        return (rect.top <= window.innerHeight) && (rect.bottom >= 0);
    }

    var scrollHandler = function scrollHandler(){
        Array.prototype.forEach.call(elements, function(element) {
            if(isVisible(element)){
                element.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(- window.pageYOffset/speed )+"px";
            }
        });
    };

    return {
        init: function(selectorInput, speedInput) {
            if (typeof selectorInput !== 'undefined') { selector = selectorInput; }
            if (typeof speedInput !== 'undefined') { speed = speedInput; }
            elements = document.querySelectorAll(selector);

            if(elements.length > 0){
                window.onscroll = scrollHandler;
            }
            return this;
        }
    }
})();
