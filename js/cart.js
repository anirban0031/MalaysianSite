// store data in session
var cart = {
    "user_id" : null,
    "cart_token" : "",
    "items" : [
        {
            "id" : 12,
            "price" : 0,
            "qty" : 1,
            "total" : 0,
            "meta" : {
                "title" : "Colorblock Scub",
                "SKU" : "1089772",
                "img" : "three.png"
            }
        },
        {
            "id" : 23,
            "price" : 0,
            "qty" : 1,
            "total" : 0,
            "meta" : {
                "title" : "Colorblock Scub",
                "SKU" : "1089772",
                "img" : "two.png"
            }
        }
    ],
    "sub_total": 0,
    "tax" : 0,
    "shipping" : 0,
    "discount" : 0,
    "total" : 0,
    "total_items" : 2
};

function get_cart_token(){
    
}

function get_cart(){
    return cart;
}

function get_total_items_in_cart(){

}

function get_shipping_cost(){

}

function add_to_cart(){

}

function update_cart(){

}

function del_from_cart(){

}
