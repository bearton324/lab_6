let objects = [];
function createProduct(obj, callback){
    obj.id = objects.length + 1;
    callback(obj);
}

function logProduct(product){
    console.log(product);
}
function logPrice(product){
    product.hasOwnProperty("price") ? console.log(product.price) : console.log(`${product.name} has no price`);
}

createProduct({name: 'book', price: 30}, logPrice);
createProduct({name: 'apple'}, logPrice);
createProduct({name: 'milk', price: 10}, logProduct);
createProduct({name: 'boots'}, logProduct);