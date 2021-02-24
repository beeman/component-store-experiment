import { Component } from '@angular/core'
import { StoreV11Store } from './store-v11.store'

@Component({
  selector: 'store-v11',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <pre>{{ vm.loading }}</pre>
      <pre>{{ vm.items }}</pre>
    </ng-container>
  `,
  providers: [StoreV11Store],
})
export class StoreV11Component {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: StoreV11Store) {}
}
