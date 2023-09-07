jQuery(document).ready(function(){

    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        });

        $("#team-members").owlCarousel({
            items: 3,
            autoplay: true,
            smartspeed: 750,
            loop: true,
            autoplayHoverPause: true,
            responsive:{
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            768:{
                items: 3
            },
        }
        });


});