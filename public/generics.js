"use strict";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let d1 = addUID({ name: "tom", age: 40 });
console.log(d1.name);
let d2 = {
    uid: 2,
    resourceName: "person",
    data: { name: "tom", age: 123 }
};
let d3 = {
    uid: 3,
    resourceName: "shoppingList",
    data: ["bread", "milk"]
};
console.log(d2, d3);
