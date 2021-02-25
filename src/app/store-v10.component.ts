import { Component } from '@angular/core'
import { StoreV10Store } from './store-v10.store'

@Component({
  selector: 'store-v10',
  templateUrl: './store-v10.component.html',
  providers: [StoreV10Store],
})
export class StoreV10Component {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: StoreV10Store) {}
}
