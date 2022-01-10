window.onload = screenWidth;
window.onresize = screenWidth;

function screenWidth() {
    width = window.innerWidth
    var widthpx = width + "px"

    if (width > 600) {
        $(".box-2").text("B")
        $(".box-5").text(widthpx);
    } else if (width < 600) {
        $(".box-5").text("E")
        $(".box-2").text(widthpx);
    }
}