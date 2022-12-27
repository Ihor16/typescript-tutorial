import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let doc1;
let doc2;
doc1 = new Invoice("tom", "website", 250);
doc2 = new Payment("bob", "music", 300);
let docs = [];
docs.push(doc1);
docs.push(doc2);
docs.forEach(d => {
    console.log(d.format());
});
