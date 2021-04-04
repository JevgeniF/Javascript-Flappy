import {EventAggregator, IDisposable} from "aurelia";
import {AppState} from "../state/app-state";

export class TodoView {
    //private placeholder = "What do you need to do today?"

    //private description = '';

    //private userName = 'foobar';

    private subscriptions: IDisposable[] = [];

    constructor(private eventAggregator: EventAggregator,
                private appState: AppState) {

        this.subscriptions.push(
            this.eventAggregator.subscribe('new-todo', (description: string) => this.addNewTodo(description))
        );
    }

    addNewTodo = (description: string): void => {
        this.appState.addTodo({description: description.trim(), done: false})
    }

    removeTodo = (index: number): void => {
        this.appState.removeTodo(index);
    }

    detached(): void {
        this.subscriptions.forEach(subscription => subscription.dispose());
        this.subscriptions = [];
    }
}
