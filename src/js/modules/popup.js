$("[data-open-popup]").click(function(){
    let popup = $(this).attr("data-open-popup")
    $(`.popup[data-popup=${popup}]`).show()
    $("body, html").addClass("lock")
})

$(".popup__close, [data-popup-close]").click(function() {
    $(this).parents(".popup").hide()
    $("body, html").removeClass("lock")
})


$(window).click(function() {
    $(".popup").hide()
    $("body, html").removeClass("lock")
});
$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        $(".popup").hide()
        $("body, html").removeClass("lock")
    }
});
$('[data-open-popup], [data-popup-close], .popup__close, .popup__inner').click(function(event){
    event.stopPropagation();
});