import { Component } from '@angular/core'
import { StoreV11Store } from './store-v11.store'

@Component({
  selector: 'store-v11',
  templateUrl: './store-v11.component.html',
  providers: [StoreV11Store],
})
export class StoreV11Component {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: StoreV11Store) {}
}
