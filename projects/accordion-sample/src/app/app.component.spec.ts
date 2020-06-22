import { TestBed, async } from '@angular/core/testing';

import { AccordionModule } from '@ngx-dummy/accordion-simple/index';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  const testTitle = 'Test Sample';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule],
      declarations: [
        AppComponent
      ],
    });
    let fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    app.title = testTitle;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
    expect(app.title).toEqual(testTitle);
  });
});
