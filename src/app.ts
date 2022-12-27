import {Formattable} from "./interfaces/Formattable";
import {Invoice} from "./classes/Invoice";
import {Payment} from "./classes/Payment";

let doc1: Formattable;
let doc2: Formattable;

doc1 = new Invoice("tom", "tom's website", 250);
doc2 = new Payment("bob", "bob's website", 300);

console.log(doc1.format(), doc2.format());

