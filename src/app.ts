import {Formattable} from "./interfaces/Formattable.js";
import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";

let doc1: Formattable;
let doc2: Formattable;

doc1 = new Invoice("tom", "website", 250);
doc2 = new Payment("bob", "music", 300);

let docs: Formattable[] = [];
docs.push(doc1);
docs.push(doc2);

docs.forEach(d => {
    console.log(d.format());
});

