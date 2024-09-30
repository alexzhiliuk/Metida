$(".product-tabs").each(function(i, el) {
    
    $(el).find(".product-tabs__tab").each(function(index, tab) {
        $(tab).attr("data-tab-id", index)
    })
    $(el).find(".product-tabs__content").each(function(index, tab) {
        $(tab).attr("data-tab-id", index)
    })

});

$(".product-tabs__tab").click(function() {
    let tabId = $(this).attr("data-tab-id")
    $(this).parents(".product-tabs__header").find(".product-tabs__tab").removeClass("product-tabs__tab_active")
    $(this).addClass("product-tabs__tab_active")

    $(this).parents(".product-tabs").find(`.product-tabs__content`).hide()
    $(this).parents(".product-tabs").find(`.product-tabs__content[data-tab-id=${tabId}]`).show()
})