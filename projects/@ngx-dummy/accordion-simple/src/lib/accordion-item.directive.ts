import { Directive, ElementRef, OnInit, HostListener, Output, EventEmitter, AfterViewInit, Input, SimpleChanges, ViewContainerRef, ComponentRef, Type, Renderer2 } from '@angular/core';
import { IToggleer, IAccordionItemStyling } from './settings/';
import { AccordionItemComponent } from './accordion-item.component';
import { ComponentFixture } from '@angular/core/testing';

const l = console.log;
let idx = 0;

@Directive({
  selector: '[ngxdAccordionItem]',
  host: {
    '[class.item-opened]': 'hostCmp.isOpen',
    '(click)': 'onClick($event.currentTarget)'
  }
})
export class AccordionItemDirective implements AfterViewInit {
  @Output() toggled: EventEmitter<IToggleer> = new EventEmitter();
  @Input('styling') stylingObj: IAccordionItemStyling = {
    headHeight: '50px',
    headBgColor: '#ccc',
    headColor: '#fff',
    bodyBgColor: '#fff',
    bodyColor: '#000',
    // logo: this.hostCmp.logo,
    bodyPadding: '0'
  };
  logoEl: HTMLDivElement;
  titleEl: HTMLDivElement;
  collapseEl: HTMLDivElement;

  constructor(
    private hostCmp: AccordionItemComponent,
    private el: ElementRef<HTMLElement>,
    private render: Renderer2
  ) {
    l(this.hostCmp.isOpen);
  }

  onClick({ dataset }) {
    const { idx } = dataset;
    this.toggle(+idx);
  }


  ngAfterViewInit() {
    const itemEl: HTMLDivElement = this.el.nativeElement.getElementsByClassName('accord-item').item(0) as HTMLDivElement;
    const headEl: HTMLDivElement = this.el.nativeElement.getElementsByClassName('accord-item__header').item(0) as HTMLDivElement;
    const bodyEl: HTMLDivElement = this.el.nativeElement.getElementsByClassName('accord-item__body').item(0) as HTMLDivElement;

    this.stylingObj?.margin && this.render.setStyle(itemEl, 'margin', this.stylingObj?.margin);
    this.stylingObj?.padding && this.render.setStyle(itemEl, 'padding', this.stylingObj?.padding);
    this.stylingObj?.FontStyles && this.render.setStyle(itemEl, 'font', this.stylingObj.FontStyles);
    this.stylingObj?.marginBottom && this.render.setStyle(itemEl, 'margin-bottom', this.stylingObj.marginBottom || '1rem');

    this.stylingObj?.headHeight && this.render.setStyle(headEl, 'height', this.stylingObj?.headHeight);
    this.stylingObj?.headBgColor && this.render.setStyle(headEl, 'background-color', this.stylingObj?.headBgColor ?? this.hostCmp.headBg);
    this.stylingObj?.headColor && this.render.setStyle(headEl, 'color', this.stylingObj?.headColor);

    // this.stylingObj?.bodyBgColor && this.render.setStyle(bodyEl, 'transition', 'all .1s ease');
    this.stylingObj?.bodyBgColor && this.render.setStyle(bodyEl, 'background-color', this.stylingObj?.bodyBgColor);
    this.stylingObj?.bodyColor && this.render.setStyle(bodyEl, 'color', this.stylingObj?.bodyColor);
    this.stylingObj?.bodyPadding && this.render.setStyle(bodyEl, 'padding', '1rem');
    this.stylingObj?.bodyMargin && this.render.setStyle(bodyEl, 'margin', this.stylingObj.bodyMargin || '0');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (let change in changes) {
  //     if (changes[change].isFirstChange()) return;
  //     l(this.hostEl.classList.contains('item-opened'));
  //   }
  // }

  toggle(itemId = 0) {
    this.hostCmp.isOpen = !this.hostCmp.isOpen;
    this.toggled.emit({ itemId, isOpen: this.hostCmp.isOpen });

  }

  stopclick($event: MouseEvent) {
    !!!$event.defaultPrevented && $event.preventDefault();
    return;
  }

}
