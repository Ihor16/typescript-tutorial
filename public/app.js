import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
let doc1;
let doc2;
doc1 = new Invoice("tom", "tom's website", 250);
doc2 = new Payment("bob", "bob's website", 300);
console.log(doc1.format(), doc2.format());
