import {Formattable} from "../interfaces/Formattable.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(item: Formattable, heading: string): void {
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);

        this.container.append(li);
    }
}