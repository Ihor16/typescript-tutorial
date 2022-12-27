import {Formattable} from "../interfaces/Formattable.js";

export class Payment implements Formattable {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) {
    }

    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
