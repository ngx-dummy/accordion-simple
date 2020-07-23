import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToggleer } from './settings/';

@Injectable()
export class AccordionOpenService {
  private _itemsOpen$$: BehaviorSubject<IToggleer[]> = new BehaviorSubject([]);

  constructor() { }

  setItemsOpen = (itemsStats: IToggleer[]) => this._itemsOpen$$.next(itemsStats);

  get itemsOpen$() {
    return this._itemsOpen$$.asObservable();
  }

  get itemsOpenSnapshot() {
    return this._itemsOpen$$.value;
  }
}
