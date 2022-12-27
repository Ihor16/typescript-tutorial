import {Formattable} from "./interfaces/Formattable.js";
import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {ListTemplate} from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let doc: Formattable;
    let heading = type.value;
    if (heading === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, heading);
});

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