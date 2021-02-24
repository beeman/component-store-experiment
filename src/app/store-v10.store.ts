import { ComponentStoreV10 } from './libs/component-store-v10';

interface Item {
  name: string;
}

interface StoreV10State {
  loading?: boolean;
  items?: Item[];
}

export class StoreV10Store extends ComponentStoreV10<StoreV10State> {
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
