import {bindable, EventAggregator, IDisposable} from "aurelia";

export class TodoInput {

    @bindable public placeholder = "Default"
    public description = '';

    private subscriptions: IDisposable[] = [];

    constructor(private eventAggregator: EventAggregator) {
    }

    detached(): void {
        this.subscriptions.forEach(subscription => subscription.dispose())
        this.subscriptions = [];
    }

    addNewTodo(): void {
        this.eventAggregator.publish('new-todo', this.description);

        setTimeout(() => {
            this.description = "";
        }, 100);
    }

    /*
    This is not nice method
    @bindable public addnewCallback: (description: string) => void = null;

    addNewTodo() {

        this.addnewCallback(this.description);

        setTimeout(() => {
            this.description = "";
        }, 100);
    }*/

}