import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { AccordionModule } from './accordion.module';
import { IToggleer } from './settings/';

@Injectable()
export class AccordionOpenService {
  private _itemsOpen$$: Subject<IToggleer[]> = new Subject();

  constructor() { }

  setItemsOpen(itemStat: IToggleer[]) {
    this._itemsOpen$$.next(itemStat);
  }

  get itemOpen$() {
    return this._itemsOpen$$.asObservable();
  }
}
