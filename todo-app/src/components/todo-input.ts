import {bindable} from "aurelia";

export class TodoInput {

    @bindable public placeholder = "Default"

    public description = '';

    @bindable public addnewCallback: (description: string) => void = null;

    addNewTodo() {
        console.log()

        this.addnewCallback(this.description);

        setTimeout(() => {
            this.description = "";
        }, 100);
    }

}