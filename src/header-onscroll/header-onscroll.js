var fixedNavi = document.querySelector('.header-onscroll');
window.onscroll = function(){
    if(window.pageYOffset > 20 && ! hasClass(fixedNavi,'header-onscroll--visible')){
        addClass(fixedNavi,'header-onscroll--visible');
    } else if(window.pageYOffset <= 20 &&hasClass(fixedNavi,'header-onscroll--visible')){
        removeClass(fixedNavi,'header-onscroll--visible');
    }
};
