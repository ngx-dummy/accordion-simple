import { Directive, Renderer2, Inject, ElementRef, OnInit } from '@angular/core';
import { svgToBase64src } from './settings';
import { arrow_down, logo_svg } from './theming';

@Directive({
  selector: '.accord-item__header-img',
  host: {
    '(load)': 'onLoad($event)',
    '(error)': 'onError($event)',
  }
})
export class AccordionItemImgDirective implements OnInit {

  constructor(@Inject(ElementRef) private imgEl: ElementRef<HTMLImageElement>, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.imgEl.nativeElement.classList.contains('accord-item__header--start-img'))
      this.renderer.setAttribute(this.imgEl.nativeElement, 'data-altsrc', logo_svg);
    else if (this.imgEl.nativeElement.classList.contains('accord-item__header--end-img'))
      this.renderer.setAttribute(this.imgEl.nativeElement, 'data-altsrc', arrow_down);
  }

  onLoad = ({ target }) => (<HTMLImageElement>target).classList.add('img-loaded__success');
  onError = ({ target }) => this.renderer.setAttribute((<HTMLImageElement>target), 'src', svgToBase64src((<HTMLImageElement>target).dataset['altsrc']));

}