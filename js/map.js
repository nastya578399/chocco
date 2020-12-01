let myMap;

const init = () => {
    myMap = new ymaps.Map("map",{
        center: [59.953871, 30.336684],
        zoom: 11,
        controls: []
    });

    const coords = [
    [59.957511, 30.325503],
    [59.9302565,30.3352877],
    [59.9403613,30.3794047]
    ];

    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/icons/market.png",
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);