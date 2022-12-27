let me = {
    name: "tom",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("spent:", amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("tom", "work on the website", 123);
const invTwo = new Invoice("bob", "work on the music", 34);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(i => {
    console.log(i.client, i.amount, "|", i.format());
});
// inputs
{
    const anchor = document.querySelector("a");
    if (anchor) {
        console.log(anchor.href);
    }
    const form = document.querySelector(".new-item-form");
    console.log(form.children);
    // inputs
    const type = document.querySelector("#type");
    const tofrom = document.querySelector("#tofrom");
    const details = document.querySelector("#details");
    const amount = document.querySelector("#amount");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    });
}
