$(".product__image").on("mousemove", function(e) {
    let zoom = 1.5,
        wrapperHeight = $(this).height(),		
        wrapperWidth = $(this).width(),
        maxXPos = wrapperWidth * zoom - wrapperWidth,
        maxYPos = wrapperHeight * zoom - wrapperHeight,
        parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top,
        XPos = maxXPos * (relX / wrapperWidth) * -1,
        YPos = maxYPos * (relY / wrapperHeight) * -1

       $(this).find("img").css("width", `${100 * zoom}%`).css("height", `${100 * zoom}%`).css("object-position", `${XPos}px ${YPos}px`)


})

$(".product__image").on("mouseleave", function() {
    $(this).find("img").css("width", "100%").css("height", "100%").css("object-position", "")
})
