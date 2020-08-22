$(document).ready(function () {

    if ($(document).width() < 1250) {
        console.log("Mobile");
        $("#test").insertBefore("test2");

    }


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
    $(".preview video").hover((event) => {
        $(event.target).get(0).play();
    });

    $(".preview video").mouseleave((event) => {
        $(event.target)[0].currentTime = 0;
        $(event.target).get(0).pause();
    });

    // auto resize message text area
    $(document).on('input', 'textarea', function () {
        $(this).outerHeight("3em").outerHeight(this.scrollHeight);
    });

});