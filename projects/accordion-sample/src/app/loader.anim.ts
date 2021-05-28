/*!
 * @ngx-dummy/Accordion-Simple library
 * Simple accordion created for angular / ionic projects.
 * https://github.com/ngx-dummy/accordion-simple
 *
 * Copyright  Vladimir Ovsyukov <ovsyukov@yandex.com>
 * Published under GNU GPLv3 License
 */
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const loaderIn = trigger('moveIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-3rem)' }),
    animate(
      '1s ease-in-out',
      keyframes([
        style({ offset: 0.2, opacity: 0.1, transform: 'translateY(-1rem)' }),
        style({ offset: 0.6, opacity: 0.4, transform: 'translateY(-0.1rem)' }),
        style({ offset: 1, opacity: 1, transform: 'none' }),
      ])
    ),
  ]),
]);
