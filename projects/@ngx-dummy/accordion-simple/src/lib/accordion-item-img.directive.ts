import { Directive, Renderer2 } from '@angular/core';
import { svgToBase64src } from './settings/';
import { arrow_down, logo_svg } from './theming/';

@Directive({
  selector: '.accord-item__header-img',
  host: {
    '(load)': 'onLoad($event)',
    '(error)': 'onError($event)',
  }
})
export class AccordionItemImgDirective {
  constructor(private renderer: Renderer2) { }

  onLoad = ({ target }) => (<HTMLImageElement>target).classList.add('img-loaded__success');
  onError = ({ target }) => {
    if (target.classList.contains('accord-item__header--start-img'))
      this.renderer.setAttribute(target, 'src', svgToBase64src(logo_svg));
    else if (target.classList.contains('accord-item__header--end-img'))
      this.renderer.setAttribute(target, 'src', svgToBase64src(arrow_down));
  };

}