import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'test-host',
  template: `
    <header><h4 style="color: #9fa;">Test component</h4></header>
    <main>
      <div id="container"></div>
    </main>
    <footer><small>end of test</small></footer>
  `
})
export class TestHostComponent{
  constructor() { }
}

@NgModule({
  imports: [CommonModule],
  declarations: [TestHostComponent],
  exports: [TestHostComponent]
})
export class TestHostModule { }