// ***************************************************
// Shopping Cart functions

var shoppingCart = (function () {
    // Private methods and properties
    // var billing_address = {};
    // var shipping_address = {};
    

    var cart = [];
    
    var shipping_cost = 0.00;

    function Item(id, name, price, count, image) {
        this.id = id
        this.name = name
        this.price = price
        this.count = count
        this.image = image
    }

    function saveCart() {
        var shop_cart = {"cart":cart,"shipping":shipping_cost};
        localStorage.setItem("shoppingCart", JSON.stringify(shop_cart));
    }

    function loadCart() {
        var jcart = JSON.parse(localStorage.getItem("shoppingCart"));
        // alert(JSON.stringify(jcart));
        if (jcart === null || jcart.cart === undefined) {
            cart = [];
        }else{
            cart = jcart.cart;
        }
    }

    loadCart();

    

    // Public methods and properties
    var obj = {};

    obj.addItemToCart = function (id, name, price, count, image) {
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", id, name, price, count, image);

        var item = new Item(id, name, price, count, image);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (id, count) {
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };

    obj.addCountForItem = function (id) {
        for (var i in cart) {
            if (cart[i].id === id) {
                cart[i].count = cart[i].count + 1;
                
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (id) { // Removes one item
        for (var i in cart) {
            if (cart[i].id === id) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (id) { // removes all item name
        for (var i in cart) {
            if (cart[i].id === id) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };

    obj.setShippingCost = function (cost) {
        shipping_cost = cost;
        saveCart();
    };

    obj.shippingCost = function () {
        return shipping_cost;
    };

    obj.clearCart = function () {
        cart = [];
        saveCart();
    };


    obj.countCart = function () { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    


    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.grandTotalCart = function () { // -> return total cost
        return this.totalCart() + this.shippingCost();
    };

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------

    obj.setBillingAddress = function(bill_to){
        localStorage.setItem("bill_to", JSON.stringify(bill_to));
    };
    obj.getBillingAddress = function(){
        var bill_to = JSON.parse(localStorage.getItem("bill_to"));
        return bill_to;
    };
    obj.setShipingAddress = function(ship_to){
        localStorage.setItem("ship_to", JSON.stringify(ship_to));
    };
    obj.getShipingAddress = function(){
        var ship_to = JSON.parse(localStorage.getItem("ship_to"));
        return ship_to;
    };
    
    obj.getCartPaymentShipment = function(){
        var jcart = JSON.parse(localStorage.getItem("shoppingCart"));
        // jcart["shipping"] = jcart["shipping"];
        jcart["total"] = parseFloat(this.totalCart());
        jcart["grand_total"] = parseFloat(this.grandTotalCart());

        var bill_to = JSON.parse(localStorage.getItem("bill_to"));
        var ship_to = JSON.parse(localStorage.getItem("ship_to"));
       
        return {"cart":jcart,"bill_to":bill_to,"ship_to":ship_to};
    };
    return obj;
})();




