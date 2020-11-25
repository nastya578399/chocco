const findBlockByAlias = alias => {
    return $(".reviews__display").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias
    })
}

$(".reviews__switcher-link").click(e => {
    e.preventDefault();
    
    const $this = $(e.currentTarget);
    
    const target = $this.attr("data-open");
    
    const itemToShow = findBlockByAlias(target); 

    const curItem = $this.closest(".reviews__switcher-item");

    itemToShow.addClass("reviews__display--active").siblings().removeClass("reviews__display--active");
    curItem.addClass("reviews__switcher-item--active").siblings().removeClass("reviews__switcher-item--active");
});

