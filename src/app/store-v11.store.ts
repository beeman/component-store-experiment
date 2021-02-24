import { ComponentStoreV11 } from './libs/component-store-v11';

interface Item {
  name: string;
}

interface StoreV11State {
  loading?: boolean;
  items?: Item[];
}

export class StoreV11Store extends ComponentStoreV11<StoreV11State> {
  constructor() {
    super({});
  }

  readonly loading$ = this.select((s) => s.loading);
  readonly items$ = this.select((s) => s.items);
  readonly vm$ = this.select(
    //
    this.loading$,
    this.items$,
    (loading, items) => ({ loading, items }),
  );
}
