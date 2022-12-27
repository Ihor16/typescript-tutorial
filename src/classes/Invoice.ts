import {Formattable} from "../interfaces/Formattable.js";

export class Invoice implements Formattable {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) {
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}