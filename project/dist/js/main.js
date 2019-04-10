var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ExtraFactory = (function () {
    function ExtraFactory() {
    }
    ExtraFactory.prototype.Order = function (tosti, name) {
        switch (name) {
            case 'none':
                return new Tosti_Extra_Decorator(tosti);
            case 'mosterd':
                return new Mosterd(tosti);
            case 'ketchup':
                return new Ketchup(tosti);
            default:
                return null;
        }
    };
    return ExtraFactory;
}());
var Ketchup = (function (_super) {
    __extends(Ketchup, _super);
    function Ketchup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ketchup.prototype.getName = function () {
        return _super.prototype.getName.call(this) + "met Ketchup!";
    };
    return Ketchup;
}(Tosti_Extra_Decorator));
var Mosterd = (function (_super) {
    __extends(Mosterd, _super);
    function Mosterd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mosterd.prototype.getName = function () {
        return _super.prototype.getName.call(this) + "met Mosterd!";
    };
    return Mosterd;
}(Tosti_Extra_Decorator));
var Normale_Tosti = (function () {
    function Normale_Tosti() {
    }
    Normale_Tosti.prototype.getName = function () {
        return "Tosti:  Ham en kaas";
    };
    return Normale_Tosti;
}());
var Tosti_Ei = (function () {
    function Tosti_Ei() {
    }
    Tosti_Ei.prototype.getName = function () {
        return "Tosti Ei:  Ham, Kaas en een spiegelei";
    };
    return Tosti_Ei;
}());
var Tosti_Hawaii = (function () {
    function Tosti_Hawaii() {
    }
    Tosti_Hawaii.prototype.getName = function () {
        return "Tosti Hawaii: Ham, Kaas en Ananas";
    };
    return Tosti_Hawaii;
}());
var Tosti_Zalm = (function () {
    function Tosti_Zalm() {
    }
    Tosti_Zalm.prototype.getName = function () {
        return "Tosti Zalm:  roomkaas, zalm (snippers) en rode ui";
    };
    return Tosti_Zalm;
}());
var Tosti_Extra_Decorator = (function () {
    function Tosti_Extra_Decorator(Tosti) {
        this._tosti = Tosti;
    }
    Tosti_Extra_Decorator.prototype.getName = function () {
        return this._tosti.getName();
    };
    return Tosti_Extra_Decorator;
}());
var TostiFactory = (function () {
    function TostiFactory() {
    }
    TostiFactory.prototype.Order = function (name) {
        switch (name) {
            case 'hawaii':
                return new Tosti_Hawaii();
            case 'ei':
                return new Tosti_Ei();
            case 'zalm':
                return new Tosti_Zalm();
            default:
                return new Normale_Tosti();
        }
    };
    return TostiFactory;
}());
var Tosti_Iterator = (function () {
    function Tosti_Iterator(newCollection) {
        this._index = 0;
        this._collection = newCollection;
    }
    Tosti_Iterator.prototype.next = function () {
        var result = this._collection[this._index];
        this._index += 1;
        return result;
    };
    Tosti_Iterator.prototype.hasNext = function () {
        return this._index < this._collection.length;
    };
    return Tosti_Iterator;
}());
var _this = this;
var setOrder;
var placeOrder;
var orderContent;
var orderList = [];
var placeOrderHandler;
var tostiFactory = new TostiFactory();
var extraFactory = new ExtraFactory();
var menu = ['normaal, hawaii, ei, zalm'];
var iterator = new Tosti_Iterator(menu);
setOrder = (function () {
    var menuContainer = document.getElementById('choosetosti');
    while (iterator.hasNext()) {
        var number = iterator.next();
        var option = document.createElement('option');
        option.value = number.valueOf().toString().toLowerCase();
        option.appendChild(document.createTextNode(number.valueOf().toString()));
        menuContainer.appendChild(option);
    }
})();
placeOrder = (function () {
    var tostiType = document.querySelector('#type').value;
    var tostiExtra = document.querySelector('#extra').value;
    var tosti = tostiFactory.Order(tostiType);
    var extra = extraFactory.Order(tosti, tostiExtra);
    _this.orderList.push(extra);
    orderContent();
});
orderContent = (function () {
    var orderContainer = document.querySelector('.order-content');
    console.log(_this.orderList[0].cost());
    for (var i = 0; i < orderList.length; ++i) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(_this.orderList.splice(-1)[0].getName()));
        orderContainer.appendChild(li);
    }
});
placeOrderHandler = (function () {
    var orderButton = document.querySelector('.place-order');
    orderButton.addEventListener('click', placeOrder);
})();
//# sourceMappingURL=main.js.map