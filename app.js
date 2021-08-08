var slideIndex = 1;
showSlides(slideIndex);

// controls
function plusSlides(n) {
    'use strict';
    showSlides(slideIndex += n);

}

// image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




(function($) {
    $.fn.slideshow = function(options) {
        options = $.extend({
            slides: ".slide",
            speed: 3000,
            easing: "linear"

        }, options);

        var timer = null;
        var index = 0;

        var slideTo = function(slide, element) {
            var $currentSlide = $(options.slides, element).eq(slide);

            $currentSlide.stop(true, true).
            animate({
                opacity: 1
            }, options.speed, options.easing).
            siblings(options.slides).
            css("opacity", 0);

        };

        var autoSlide = function(element) {
            timer = setInterval(function() {
                index++;
                if (index == $(options.slides, element).length) {
                    index = 0;
                }
                slideTo(index, element);
            }, options.speed);
        };

        var startStop = function(element) {
            element.hover(function() {
                clearInterval(timer);
                timer = null;
            }, function() {
                autoSlide(element);
            });
        };

        return this.each(function() {
            var $element = $(this),
                $previous = $(options.previous, $element),
                $next = $(options.next, $element),
                index = 0,
                total = $(options.slides).length;

            $(options.slides, $element).each(function() {
                var $slide = $(this);
                var image = $slide.data("image");
                $slide.css("backgroundImage", "url(" + image + ")");
            });

            autoSlide($element);
            startStop($element);

        });
    };

    $(function() {
        $("#main-slider").slideshow();

    });

})(jQuery);

// Newsletter form 

function validateForm() {
    if (isEmpty(document.getElementById('email').value.trim())) {
        alert('Email address is required!');
        return false;
    }
    return true;
}

function isEmpty(str) {
    return (str.length === 0 || !str.trim());
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
}