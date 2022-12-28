import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListRenderer } from "./classes/ListRenderer.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const list = new ListRenderer(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let heading = type.value;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (heading === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, heading);
});
