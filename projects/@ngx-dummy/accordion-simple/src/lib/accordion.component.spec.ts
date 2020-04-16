import { TestBed, TestModuleMetadata, ComponentFixture } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';
import { AccordionModule } from './accordion.module';


describe('Accordion component', () => {
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    let testingBed = TestBed.configureTestingModule({
      imports: [AccordionModule]
    });
    await testingBed.compileComponents();
    fixture = testingBed.createComponent<AccordionComponent>(AccordionComponent);
  });

  it('should exist in the dom', () => {
    fixture.detectChanges();
    let cmp = fixture.nativeElement;
    expect(cmp).toBeTruthy();
  });
});