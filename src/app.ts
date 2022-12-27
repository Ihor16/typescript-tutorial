// interfaces
interface IsPerson {
    name: string;
    age: number;

    speak(text: string): void;

    spend(amount: number): number;
}

let me: IsPerson = {
    name: "tom",
    age: 20,
    speak(text: string) {
        console.log(text);
    },
    spend(amount: number): number {
        console.log("spent:", amount);
        return amount;
    }
}
console.log(me);

const greetPerson = (person: IsPerson) => {
    console.log("hello", person.name);
}

greetPerson(me);

import {Invoice} from "./classes/Invoice.js";

const invOne = new Invoice("tom", "work on the website", 123);
const invTwo = new Invoice("bob", "work on the music", 34);
console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(i => {
    console.log(i.client, i.amount, "|", i.format());
})

// inputs
{
    const anchor = document.querySelector("a");

    if (anchor) {
        console.log(anchor.href);
    }

    const form = document.querySelector(".new-item-form") as HTMLFormElement;
    console.log(form.children);

// inputs
    const type = document.querySelector("#type") as HTMLSelectElement;
    const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
    const details = document.querySelector("#details") as HTMLInputElement;
    const amount = document.querySelector("#amount") as HTMLInputElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        console.log(
            type.value,
            tofrom.value,
            details.value,
            amount.valueAsNumber
        );
    })
}
