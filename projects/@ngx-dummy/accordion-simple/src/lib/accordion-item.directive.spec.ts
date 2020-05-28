import { AccordionItemDirective } from './accordion-item.directive';
import { ElementRef } from '@angular/core';
import { AccordionItemComponent, AccordionModule } from 'dist/@ngx-dummy/accordion-simple/public-api';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

describe('AccordionItemDirective', () => {
	let testEl: HTMLElement;
	let elRef: ElementRef<HTMLElement>;
	let accordionItemDir: AccordionItemDirective;
	let accordionItemCmp: AccordionItemComponent;
	let accordionItemCmpFixture: ComponentFixture<AccordionItemComponent>;

	beforeEach(async () => {
		let module = await TestBed.configureTestingModule({
			imports: [CommonModule, AccordionModule]
		}).compileComponents();
		module.
	});

	it('should create an instance', () => {
		const directive = new AccordionItemDirective(elRef);
		expect(directive).toBeTruthy();
	});
});
