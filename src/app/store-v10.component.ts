import { Component } from '@angular/core'
import { StoreV10Store } from './store-v10.store'

@Component({
  selector: 'store-v10',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <pre>{{ vm.loading }}</pre>
      <pre>{{ vm.items }}</pre>
    </ng-container>
  `,
  providers: [StoreV10Store],
})
export class StoreV10Component {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: StoreV10Store) {}
}
