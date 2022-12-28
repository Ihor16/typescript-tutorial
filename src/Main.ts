import {Formattable} from "./interfaces/Formattable.js";
import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {ListRenderer} from "./classes/ListRenderer.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListRenderer(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let doc: Formattable;
    let heading = type.value;
    let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber];
    if (heading === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    list.render(doc, heading);
});