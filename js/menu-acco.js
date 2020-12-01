const mesureWidth = () => {
    return 500;
}

const openItems = item =>{
    const hiddenContent = item.find(".products-menu__conten");
    // Метод find() возвращает значение 
    // первого найденного в массиве элемента, 
    // которое удовлетворяет условию переданному в callback функции.
    //   В противном случае возвращается undefined.
    const reqWidth = mesureWidth();

    hiddenContent.width(reqWidth);
}

$(".products-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");

    openItems(item);
})
