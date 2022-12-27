const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let d1 = addUID({name: "tom", age: 40});
console.log(d1.name);

interface Resource<T> {
    uid: number,
    resourceName: string,
    data: T
}

let d2: Resource<object> = {
    uid: 2,
    resourceName: "person",
    data: {name: "tom", age: 123}
}

let d3: Resource<string[]> = {
    uid: 3,
    resourceName: "shoppingList",
    data: ["bread", "milk"]
}
console.log(d2, d3);
