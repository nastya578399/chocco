const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();

    container.addcClass("active")
    contentBlock.height(reqHeight);
}


const closeEveryItem = container => {
    const items = container.find('.team__content');
    const ItemContainer = container.find(".team__item");

    ItemContainer.removeClass("active");
    items.height(0);
}

$('.team__item-text').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest(".team__item");
    
    if(elemContainer.hasClass("active")){
    closeEveryItem(container);
        //close
    } else {
    closeEveryItem(container);
    openItem($this);
    }

    

})