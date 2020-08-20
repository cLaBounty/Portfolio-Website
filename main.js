$(document).ready(function () {
    // hide navbar on scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $("header").css("top", "0");
        } else {
            $("header").css("top", String($("header").outerHeight() * -1) + "px");
        }
        prevScrollpos = currentScrollPos;
    }

    $("#mobile-nav-toggle").click(() => {

        if ($("body").hasClass("mobile-nav-open")) {
            document.body.classList.remove("mobile-nav-open");

            // enable scrolling
            $("body").css("overflow", "auto");
        }
        else {
            document.body.classList.add("mobile-nav-open");

            // disable scrolling
            $("body").css("overflow", "hidden");
        }
    });

    $("#navbar a").click(() => {
        document.body.classList.remove("mobile-nav-open");

        // enable scrolling
        $("body").css("overflow", "auto");
    });

    // play preview on hover
    // NOT WORKING FOR MULTIPLE
    $(".preview").hover(() => {
        $(".preview img").css("display", "none");
        $(".preview video").css("display", "flex");
        $(".preview video").get(0).play();
    });

    $(".preview").mouseleave(() => {
        $(".preview img").css("display", "flex");
        $(".preview video").css("display", "none");
        $(".preview video").get(0).pause();
    });


});