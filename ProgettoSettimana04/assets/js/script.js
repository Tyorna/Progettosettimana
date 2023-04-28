var myNav = document.getElementById('head');
window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 400 ) {
        myNav.classList.add("new-head");
    } else {
        myNav.classList.remove("new-head");
    }
};


let invisible = document.querySelectorAll('g[stroke-linecap="butt"]')
setInterval(() => {
    var random= Math.round(Math.random()*(invisible.length -1));
    invisible[random].classList.toggle('emme');
}, 40);