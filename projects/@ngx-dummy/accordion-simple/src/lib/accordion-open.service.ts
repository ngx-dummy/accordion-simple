import { Injectable, Inject, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToggleer } from './settings/';

export function iniTogglerFn() {
  const resp = <IToggleer[]>[];
  return resp;
};

export const INI_STATE = new InjectionToken<IToggleer[]>(
  'Accordion Initial Items Open state provider token',
  { factory: iniTogglerFn }
);

@Injectable()
export class AccordionOpenService extends BehaviorSubject<IToggleer[]> {
  constructor(@Inject(INI_STATE) iniState: IToggleer[] = []) {
    super(iniState);
  }

  setItemsOpen = (itemsStats: IToggleer[]) => this.next(itemsStats);
  get itemsOpen$() { return this.asObservable(); }
  get itemsOpenSnapshot() { return this.value; }

  close = () => { this.complete(); super.unsubscribe; };
}