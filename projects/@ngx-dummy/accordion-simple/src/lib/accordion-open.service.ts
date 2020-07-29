import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToggleer } from './settings/';

@Injectable()
export class AccordionOpenService {
  private _itemsOpen$$: BehaviorSubject<IToggleer[]> = new BehaviorSubject([]);

  setItemsOpen = (itemsStats: IToggleer[]) => this._itemsOpen$$.next(itemsStats);

  get itemsOpen$() {
    return this._itemsOpen$$.asObservable();
  }

  get itemsOpenSnapshot() {
    return this._itemsOpen$$.value;
  }
}

// @Injectable()
// export class AccoirdionOpenService2 extends BehaviorSubject<IToggleer[]> {
//   constructor(iniState: IToggleer[] = []) {
//     super(iniState);
//   }

//   setItemsOpn = (itemsStats: IToggleer[]) => this.next(itemsStats);

//   get itemsOpen$() {
//     return this.asObservable();
//   }

//   get itemsOpenSnapshot() {
//     return this.value;
//   }

//   finalize = () => !this.closed && !!!this.observers.length && this.unsubscribe();
// }