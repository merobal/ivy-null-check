import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-handler-a',
  templateUrl: './handler-a.component.html',
  styleUrls: ['./handler-a.component.scss']
})
export class HandlerAComponent {
  @Input()
  resetOn: Observable<any>;

  @Output()
  triggerChange = new EventEmitter();

  _value = "Initial";

  private _sub: Subscription;

  ngOnInit(): void {
    this._sub = this.resetOn.subscribe(() => (this._value = "Reset"));
  }

  ngOnDestroy() {
    if (this._sub) this._sub.unsubscribe();
  }
}
