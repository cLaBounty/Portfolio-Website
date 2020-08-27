$(document).ready(function () {
    // set autoplay on videos if user is on iPhone or iPod
    var agent = navigator.userAgent;
    var isIphone = ((agent.indexOf('iPhone') != -1) || (agent.indexOf('iPod') != -1));

    if (isIphone) {
        $("video").each(function () {
            $(this).attr("autoplay", true);
        });
    }

    // hide navbar on scroll
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos >= currentScrollPos) {
            $("header").css("top", "0");
        }
        else {
            $("header").css("top", String($("header").outerHeight() * -1) + "px");
        }

        prevScrollpos = currentScrollPos;
    }

    // mobile navbar functionality
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

    // play video preview on hover
    $("video").on("mouseover click", function () {
        $(this).get(0).play();
        $(this).css("box-shadow", "0 0 1.75em var(--clr-accent)");

    });

    $("video").on("mouseleave ended", function () {
        $(this)[0].currentTime = 0;
        $(this).get(0).pause();
        $(this).css("box-shadow", "0 0 1.75em rgba(0, 0, 0, 0.5)");
    });

    // auto resize message text area
    $(document).on('input', 'textarea', function () {
        $(this).outerHeight("3em").outerHeight(this.scrollHeight);
    });
});