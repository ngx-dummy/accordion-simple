import { trigger, query, stagger, transition, animate, style, keyframes, animation, AnimationMetadataType } from '@angular/animations';

const accordItemsIn = trigger('accordItemsIn', [
  transition('* => *', [
    query(':leave', [
      stagger(-25, [
        animate('.3s', style({ opacity: 0, transform: 'scale(0.7, 0.7) translateY(-3rem)' }))
      ])
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.7, 0.7) translateY(-3rem)' }),
      stagger(25, [
        animate('.3s ease-out', keyframes([
          style({ offset: 0, opacity: 0 }),
          style({ offset: 0.2, opacity: 0.1, transform: 'scale(0.85, 0.85) translateY(-4rem)' }),
          style({ offset: 0.5, opacity: 0.8, transform: 'scale(0.9, 0.9) translateY(3rem)' }),
          style({ offset: 1, opacity: 1, transform: 'none' })
        ])
        )
      ])
    ], { optional: true })
  ])
]);

const spinnerIn = trigger('spinnerIn', [
  transition('void => *', [
    query('.loader', animate('.5s ease-out', keyframes([
      style({ offset: 0, opacity: 0, transformOrigin: 'bottom right', height: 0, transform: 'translateY(-100px) scale(0, 0)' }),
      style({ offset: .8, opacity: 0.6, height: 0, transform: 'translateY(40px) scale(0.5, 0.5)' }),
      style({ offset: 1, opacity: 1, height: '*', transform: 'translateY(0) scale(1, 1)' })
    ])
    ), { optional: true })
  ])
]);

// const itemsTransition = (items: HTMLElement[], timing: string, easingFn: string, direction: 'open' | 'close', dist: number) => {
//   return items.forEach(item => {
//     item.style.transition = `translateY ${timing}, ${easingFn}`;
//     item.style.transform = `translateY(${(direction === 'open') ? dist : '-' + dist}px)`;
//     item.addEventListener('transitionend', e => {
//       item.style.transition = 'none';
//       item.style.transform = '';
//     });
//   });
// };

export const accordionAnims = [accordItemsIn, spinnerIn];