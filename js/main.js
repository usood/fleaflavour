var dp = jQuery;
dp.noConflict();
dp(document).ready(function() {
    //Featured Slider
    dp("#featured-slider").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigation: true,
        pagination: false

    });
    dp(".slide-recent-blog").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        navigation: true,
        pagination: false
    });
    dp(".slide-about-people").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        navigation: true,
        pagination: false
    });
    // TOOTLTIP
    dp("[data-toggle='tooltip']").tooltip();
    if (dp.fn.fitVids) {
        dp(".responsive-video").fitVids();
    }
    //HTML 5 Audio Player
    if (dp.fn.mediaelementplayer) {
        dp('audio , video').mediaelementplayer({

            loop: false,
            enableAutosize: false,
            features: ['playpause', 'progress', 'current', 'volume'],
            audioHeight: 40,
            alwaysShowHours: false

        });
    }
    //COUNT DOWN COMING SOON
    if (dp.fn.countdown) {
        var endDate = "December 31, 2014  15:03:25"; // <-- Change to your date launch.
        dp('.countdown.styled').countdown({
            date: endDate,
            render: function(data) {
                dp(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
            }
        });
    }

    //MAP
    if (dp.fn.gmap3) {
        var lats = dp("#map").attr('data-lat');
        var lngs = dp("#map").attr('data-lng');
        var data_address = dp("#map").attr('data-address');
        var color = dp("#map").attr('data-color');
        var saturation = 100;
        dp("#map").gmap3({
            map: {
                options: {
                    center: [lats, lngs],
                    zoom: 15,
                    mapTypeId: "style1",
                    navigationControl: 0,
                    scrollwheel: false,
                    zoomControl: 0,
                    disableDefaultUI: true,
                    streetViewControl: 0,
                    draggable: 0,
                }
            },
            styledmaptype: {
                id: "style1",
                options: {
                    name: "Style 1"
                },
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        hue: "#000"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        hue: color
                    }, {
                        saturation: saturation
                    }, {
                        lightness: 20
                    }, {
                        gamma: 1
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                        hue: color
                    }, {
                        saturation: saturation
                    }, {
                        lightness: 20
                    }, {
                        gamma: 1
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        hue: color
                    }, {
                        saturation: saturation
                    }, {
                        lightness: 50
                    }, {
                        gamma: 1
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        hue: "#000"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 15
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        hue: "#000"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 25
                    }, {
                        gamma: 1
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }]
            },
            marker: {
                values: [{
                    latLng: [lats, lngs],
                    data: data_address,
                    options: {
                        icon: "images/map-marker.png"
                    }
                }],
                options: {
                    draggable: false
                },
                events: {
                    click: function(marker, event, context) {
                        var map = dp(this).gmap3("get"),
                            infowindow = dp(this).gmap3({
                                get: {
                                    name: "infowindow"
                                }
                            });
                        if (infowindow) {
                            infowindow.open(map, marker);
                            infowindow.setContent(context.data);
                        } else {
                            dp(this).gmap3({
                                infowindow: {
                                    anchor: marker,
                                    options: {
                                        content: context.data
                                    }
                                }
                            });
                        }
                    }

                }
            }
        });
    }
    if (dp.fn.sequence) {
        var options = {
            autoPlay: true,
            nextButton: true,
            prevButton: true,
            preloader: true,
            navigationSkip: false
        };
        var sequence = dp("#sequence").sequence(options).data("sequence");
        sequence.afterLoaded = function() {
            dp(".sequence-prev, .sequence-next").fadeIn(500);
        }

        //dp('.subtitle').css('background', databg);
    }
});
dp(window).load(function() {
    // SMOOTH PRODUCT
    if (dp.fn.smoothproducts) {
        dp('.sp-wrap').smoothproducts();
    }
    if (dp.fn.selectbox) {
        dp(".country_id").selectbox();
    }
});
