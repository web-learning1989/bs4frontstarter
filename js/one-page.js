(function($) {
    'use strict';
    $(function() {
        $(document).ready(function() {
            //sticky header

            var headerOffset = $('.header').offset().top;
            var stickyHeader = $(".header").outerHeight();
            $(window).scroll(function() {
                var topPos = $(this).scrollTop() - stickyHeader;
                if (topPos >= stickyHeader) {
                    $('.header').addClass('is-sticky');
                } else {
                    $('.header').removeClass('is-sticky');
                }
            })
            //toggle navigation

            var toggle = $('#btnToggle');
            toggle.click(function() {
                $('#mainNav').slideToggle();
                $('.nav__right').toggleClass('open');
            })
            $(window).resize(function() {
                if ($(window).width() > 768) {
                    $('#mainNav').removeAttr('style', '');
                }
            })
            // scroll

            var scrollLink = $('.scroll');
            scrollLink.click(function(e) {
                e.preventDefault;
                var hashGet = $(this.hash).offset().top;
                console.log(hashGet);
                $('html,body').animate({
                    scrollTop: hashGet
                })
            })
            // active class
            $(window).scroll(function() {
                var scrollPos = $(window).scrollTop();
                console.log(scrollPos);
                scrollLink.each(function() {
                    var scrollOffset = $(this.hash).offset().top;
                    if (scrollOffset <= scrollPos) {
                        $(this).parent().addClass('active');
                        $(this).parent().siblings().removeClass('active');
                    }
                })
            })
            //hero slider
            var $carouselObject = $('.hero-slideshow');
            $carouselObject.owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                nav: false,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                autoplay: true,
                dots: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                freeDrag: false,
                lazyLoad: true
            });
            var $carouselWorks = $('.work-slideshow');
            $carouselWorks.owlCarousel({
                items: 3,
                loop: true,
                margin: 10,
                nav: true,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                autoplay: true,
                dots: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
            });

            var $carouselBlog = $('.blog-slideshow');
            $carouselBlog.owlCarousel({
                items: 2,
                loop: true,
                margin: 10,
                nav: true,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                autoplay: true,
                dots: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                lazyLoad: true
            });

        });
        // document ready function
    });

})(jQuery);


// //initialize swiper when document ready
// let options = {};
// if ($('swiper-container .swipe-slide').length > 1) {
//     options = {
//         direction: 'horizontal',
//         loop: false,
//         autoplayDisableOnInteraction: false,
//         keyboardControl: true,
//         mousewheelControl: true,
//         pagination: { el: '.swiper-pagination' },
//         paginationClickable: true,
//         navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
//         watchOverflow: true
//     }
//     console.log(options);
// } else {
//     options = {
//         loop: false,
//         autoplay: false,
//         pagination: false,
//         navigation: false,
//         watchOverflow: false,
//         draggable: false
//     }
//     console.log(options);
// }
// var slider = new Swiper('.swiper-container', options);

// <script src="js/components/parallax/parallax.min.js"></script>

// $('.hero-parallax').parallax({
//     naturalHeight: 'auto',
//     speed: .2,
//     imageSrc: 'https://destinationsmagazine.com/wp-content/uploads/2018/12/Porto-City-iStock-994363464-KisaMarkiza.jpg',
//     iosFix: true,
//     androidFix: true

// });

// if (settings.touchDrag === false && settings.mouseDrag === false) {
//     addSwipeEventsForAnimation(element, $carouselObject);
// }

// function addSwipeEventsForAnimation(node, $carouselObject) {
//     var hamEvents = new Hammer(node, {});

//     hamEvents.on("swiperight", function() {
//         $carouselObject.trigger('prev.owl.carousel');
//     });
//     hamEvents.on("swipeleft", function() {
//         $carouselObject.trigger('next.owl.carousel');
//     });

//     // Hack as even though touchDrag and mouseDrag are disabled, the drag event is still fired when a user swipes.
//     // The drag event is listened to by owl.animate plugin and sets swapping to false (CSS3 animation).
//     // By triggering the translated event it resets swapping to true.
//     $carouselObject.on('drag.owl.carousel', function() {
//         $carouselObject.trigger('translated.owl.carousel');
//     });
// }