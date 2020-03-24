import { Component } from '@angular/core';
import { MDCRipple,  } from "@material/ripple";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accordion-sample';
  rippler;

  constructor() {
    this.rippler = document.querySelector('#rippler');
    
    // MDCRipple.attachTo(this.rippler).initialize();
  }

  click($event) {
    console.log($event)
  }
}
