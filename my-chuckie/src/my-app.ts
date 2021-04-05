import {EventAggregator, IDisposable} from "aurelia";

export class MyApp {

  private subscriptions: IDisposable[] = [];

  constructor(private eventAggregator: EventAggregator) {
  }

  detached(): void {
    this.subscriptions.forEach(subscription => subscription.dispose());
    this.subscriptions = [];
  }
}
