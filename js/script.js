$(document).on('ready', function() {
    $(".banner-sec .banner-cntr").slick({
        dots: true,
        prevArrow: "<div class='arrow-lft slider-arrow'><img class='slick-prev' src='./gallery/slider-arrow.svg'></div>",
        nextArrow: "<div class='arrow-rgt slider-arrow'><img class='slick-next' src='./gallery/slider-arrow.svg'></div>",
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(".catagory-sec .cat-row .indi img , .banner-sec .banner-cntr .indiv-child .brf-dspn").on('click', function() {
        if ($(this).attr("data-cat") != "") {
            window.location.href = "./catagories.html?cat=" + $(this).attr("data-cat");
        }
    })

})

document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == "interactive") {
        //  document.getElementById('contents').style.visibility="hidden";
    } else if (state == "complete") {
        setTimeout(function() {
            document.getElementById("preloader").style.display = "none";
        }, 1000);
    }
};