import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `
    <section class="container" style="background-color: #ccc">
      <header><h4 style="text-align: center"> --- Test component start --- </h4></header>
      <main>
        <div id="container"></div>
      </main>
      <footer style="text-align: center"><small>--- Test component end ---</small></footer>
    </section>
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
