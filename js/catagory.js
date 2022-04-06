$(document).on('ready', function() {
    // let url = new URL(window.location.href);
    // let catagory = url.searchParams.get("cat");
    let title;
    let totalImages;

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    let catagory = getParameterByName('cat');

    switch (catagory) {
        case "chairs":
            {
                title = "Chairs";
                totalImages = 10;
                break;
            }
        case "cots":
            {
                title = "Cots";
                totalImages = 10;
                break;
            }
        case "diningtables":
            {
                title = "Dining Tables";
                totalImages = 6;
                break;
            }
        case "diwans":
            {
                title = "Diwans";
                totalImages = 10;
                break;
            }
        case "royalchairs":
            {
                title = "Royal Chairs";
                totalImages = 6;
                break;
            }
        case "teapoys":
            {
                title = "Teapoys";
                totalImages = 10;
                break;
            }
        case "cornerstands":
            {
                title = "Corner Stands";
                totalImages = 6;
                break;
            }
        case "dressingtables":
            {
                title = "Dressing Tables";
                totalImages = 6;
                break;
            }
        case "showcase":
            {
                title = "Showcases";
                totalImages = 6;
                break;
            }
        case "cupboards":
            {
                title = "CupBoards";
                totalImages = 4;
                break;
            }
        case "sofas":
            {
                title = "Sofas";
                totalImages = 10;
                break;
            }
        case "mirrorframes":
            {
                title = "Mirror Frames";
                totalImages = 6;
                break;
            }
        case "swings":
            {
                title = "Swings";
                totalImages = 6;
                break;
            }
        default:
            {
                alert("oops Something went wrong")
            }
    }
    $(".cat-ttl").text(title);

    for (i = 1; i <= totalImages; i++) {
        $(".cat-container").append('<div class="each-img"><img src="./gallery/' + catagory + '/' + catagory + '-0' + i + '.jpg" alt=""></div>');
    }

})


$(document).on("click", ".cat-container .each-img img", function() {
    if ($(window).width() > 1240) {
        $(".img-popup .img-cntr img").attr("src", $(this).attr("src"));
        $(".img-popup").addClass("show");
    }
})


$(document).on("click", ".img-popup .cls-btn", function() {
    $(this).parents(".img-popup").removeClass("show");
})