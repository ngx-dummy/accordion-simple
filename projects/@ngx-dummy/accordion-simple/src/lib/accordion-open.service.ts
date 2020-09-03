import { Injectable, Inject, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToggler } from './settings/';

export function iniTogglerFn() {
  return [] as IToggler[];
}

export const INI_STATE = new InjectionToken<IToggler[]>(
  'Accordion Initial Items Open state provider token',
  { factory: iniTogglerFn }
);

@Injectable()
export class AccordionOpenService extends BehaviorSubject<IToggler[]> {
  constructor(@Inject(INI_STATE) iniState: IToggler[] = []) { super(iniState); }

  get itemsOpen$() { return this.asObservable(); }
  get itemsOpenSnapshot() { return this.value; }

  setItemsOpen = (itemsStats: IToggler[]) => this.next(itemsStats);
  close = () => { this.complete(); super.unsubscribe; };
}
