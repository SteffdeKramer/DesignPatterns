/// <reference path="ExtraFactory.ts"/>
/// <reference path="Factory.ts"/>
/// <reference path="Iterator.ts"/>
/// <reference path="Ketchup.ts"/>
/// <reference path="Mosterd.ts"/>
/// <reference path="NormaleTosti.ts"/>
/// <reference path="Tosti_Iterator.ts"/>
/// <reference path="Tosti-Ei.ts"/>
/// <reference path="Tosti-Hawaii.ts"/>
/// <reference path="Tosti-Zalm.ts"/>
/// <reference path="Tosti.ts"/>
/// <reference path="TostiDecorator.ts"/>
/// <reference path="TostiFactory.ts"/>

let setOrder: any;
let placeOrder: any;
let orderContent: any;
let orderList: Array<Object> = [];
let placeOrderHandler: void;

let tostiFactory = new TostiFactory();
let extraFactory = new ExtraFactory();

let menu: Array<String> = ['normaal, hawaii, ei, zalm'];
let iterator: Iterator<any> = new Tosti_Iterator(menu);

setOrder = (() => {
    const menuContainer: HTMLElement = document.getElementById('choosetosti');

    while (iterator.hasNext()) {
        const number: Number = iterator.next();

        let option = document.createElement('option');
        option.value = number.valueOf().toString().toLowerCase();
        option.appendChild(document.createTextNode(number.valueOf().toString()));

        menuContainer.appendChild(option);
    }
})();

placeOrder = (() => {
    let tostiType = (document.querySelector('#type') as HTMLSelectElement).value;
    let tostiExtra = (document.querySelector('#extra') as HTMLSelectElement).value;

    let tosti = tostiFactory.Order(tostiType);
    let extra = extraFactory.Order(tosti, tostiExtra);

    this.orderList.push(extra);
    orderContent();
});

orderContent = (() => {
    let orderContainer = document.querySelector('.order-content');
    console.log(this.orderList[0].cost());

    for (let i = 0; i < orderList.length; ++i) {
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(this.orderList.splice(-1)[0].getName()));

        orderContainer.appendChild(li);
    }
});

placeOrderHandler = (() => {
    let orderButton = document.querySelector('.place-order');
    orderButton.addEventListener('click', placeOrder);
})();