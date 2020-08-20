$(document).ready(function () {
    // hide navbar on scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $("header").css("top", "0");
        } else {
            $("header").css("top", String($("header").height() * -1) + "px");
        }
        prevScrollpos = currentScrollPos;
    }

    // mobile nav toggle
    $('#mobile-nav-toggle').click(() => {
        document.body.classList.toggle("mobile-nav-open");
    });

    $("#navbar a").click(() => {
        console.log("yo");
        document.body.classList.remove("mobile-nav-open");
    });
});