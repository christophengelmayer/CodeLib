var scrollnavigation = (function () {
    var elements = [],
        links = [];
    //
    // function scrollToTop(scrollDuration) {
    //     const   scrollHeight = window.scrollY,
    //         scrollStep = Math.PI / ( scrollDuration / 15 ),
    //         cosParameter = scrollHeight / 2;
    //     var     scrollCount = 0,
    //         scrollMargin,
    //     scrollInterval = setInterval( function() {
    //         if ( window.scrollY != 0 ) {
    //             scrollCount = scrollCount + 1;  
    //             scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
    //             window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
    //         } 
    //         else clearInterval(scrollInterval); 
    //     }, 15 );
    // }

    function isVisible(element) {
        var rect = element.getBoundingClientRect();
        return (rect.top <= window.innerHeight) && (rect.bottom >= 0);
    }

    var scrollHandler = function scrollHandler(){
        Array.prototype.forEach.call(elements, function(element) {
            if(isVisible(element)){
                console.log(element.id);
                // element.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(- window.pageYOffset/speed )+"px";
                return false;
            }
        });
    };

    return {
        init: function() {
            links = document.querySelectorAll('.scrollnavigation a[href^="#"]');
 
            if(links.length > 0){
                var selector = "";
                Array.prototype.forEach.call(links, function(element) {
                    selector += element.hash + ',';
                });
                elements = document.querySelectorAll(selector.substr(0, selector.length-1));
                window.onscroll = scrollHandler;
            }

            return this;
        }
    };
})();

