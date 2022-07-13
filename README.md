<center>
  <a href="https://www.npmjs.com/package/@ngx-dummy/accordion-simple" target="_blank">
    <p align="center">
      <img src="https://avatars3.githubusercontent.com/u/62136587?s=400&u=4580be0183d1496d982253d3a0d803de82465626&v=4" width="200" height="200" />
    </p>
  </a>
  <h2 align="center"><b style="color: teal;"><a href="https://www.npmjs.com/package/@ngx-dummy/accordion-simple" target="_blank">@Ngx-dummy/Accordion-simple</a></b> <i>library</i></h2>

[![npm version](https://badge.fury.io/js/%40ngx-dummy%2Faccordion-simple.png)](https://www.npmjs.com/package/@ngx-dummy/accordion-simple)

</center>

[![License: LGPL v3](https://img.shields.io/badge/License-LGPLv3-blue.svg)](LICENSE)

<!-- ![NPM Deploy](https://github.com/VovanSuper/accordion-simple/workflows/npm-deploy/badge.svg)
![Github Pages Deploy](https://github.com/VovanSuper/accordion-simple/workflows/ghp-deploy/badge.svg) -->

![CI](https://github.com/VovanSuper/accordion-simple/workflows/CI/badge.svg)
![RELEASE](https://github.com/VovanSuper/accordion-simple/workflows/RELEASE/badge.svg)

[![bundle size](https://badgen.net/bundlephobia/minzip/@ngx-dummy/accordion-simple)](https://bundlephobia.com/result?p=ngx-dummy/accordion-simple)
[![bundle size](https://badgen.net/bundlephobia/min/@ngx-dummy/accordion-simple)](https://bundlephobia.com/result?p=ngx-dummy/accordion-simple)
[![size](https://badgen.net/packagephobia/publish/@ngx-dummy/accordion-simple)](https://bundlephobia.com/result?p=ngx-dummy/accordion-simple)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f5233cc1-3156-4033-9d43-5db2b6cd351b/deploy-status)](https://accordion-simple-tester.netlify.app/)
[![Issues](https://img.shields.io/github/issues/vovansuper/accordion-simple)](https://github.com/VovanSuper/accordion-simple/issues)
[![GitHub forks](https://img.shields.io/github/forks/ngx-dummy/accordion-simple.svg?style=social&label=Fork)](https://github.com/ngx-dummy/accordion-simple/fork)
[![GitHub stars](https://img.shields.io/github/stars/ngx-dummy/accordion-simple.svg?style=social&label=Star)](https://github.com/ngx-dummy/accordion-simple)
[![downloads](https://data.jsdelivr.com/v1/package/npm/@ngx-dummy/accordion-simple/badge)](https://www.jsdelivr.com/package/npm/@ngx-dummy/accordion-simple)

[![Donations](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/ovsyukov)
[![Twitter Follow](https://img.shields.io/twitter/follow/OvsyukovV.svg?style=social)](https://twitter.com/OvsyukovV)

---

##### https://vovansuper.github.io/accordion-simple

### Installation:

##### get the script to your _index.html_:

```html
<script src="https://cdn.jsdelivr.net/npm/@ngx-dummy/accordion-simple@latest/bundles/ngx-dummy-accordion-simple.umd.js"></script>
```

##### install using **npm**:

```shell
npm install --save @ngx-dummy/accordion-simple
```

##### [use (_in your Angular/Ionic app_)](https://stackblitz.com/edit/ngx-dummy-accordion-sample?devtoolsheight=33&file=src/main.ts):

```typescript
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AccordionModule, Accordion, IAccordionStyling } from 'https://cdn.jsdelivr.net/npm/@ngx-dummy/accordion-simple@latest/bundles/ngx-dummy-accordion-simple.umd.min.js';

@Component({
	selector: 'my-app',
	template: '<ngxd-accordion [accordionList]="sampleAccordionData" [accordionStyling]="styling"></ngxd-accordion>',
})
class AppCmp {
	sampleAccordionData: Accordion = {
		name: 'sample_accordion',
		items: [
			{
				title: 'Card 1',
				body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas. Veritatis doloremque optio dignissimos enim voluptatum voluptas nemo suscipit commodi. Adipisci, ratione',
			},
			{
				title: 'Card 2',
				body: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero quo, veritatis ex atque voluptate dolore unde quas.
        `,
			},
		],
	};
	styling: IAccordionStyling = {
		itemsGuts: '1px',
		maxWidth: '99%',
		itemStyling: {
			headBgColor: '#ccc',
			headColor: 'black',
			bodyBgColor: '#f9f9f9',
			bodyPadding: '1rem',
			bodyMargin: '.1rem',
		},
	};
}

@NgModule({
	imports: [BrowserAnimationsModule, AccordionModule],
	declarations: [AppCmp],
	bootstrap: [AppCmp],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
// ... "enableIvy": false, in tsconfig.json
```

### or check the sibling [_sample_ app](https://github.com/VovanSuper/accordion-simple/tree/master/projects/accordion-sample) :

##### clone _(and deps install)_ and run Sample app :

```shell
$~> git clone https://github.com/ngx-dummy/accordion-simple.git
$~> cd accordion-simple
$~> npm install -g @angular/cli@latest && npm i
$~> npm run sample
```

##### **or .. Try _directly_:**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/vovansuper/accordion-simple)

**Make sure in install `BrowserAnimationsModule` or `NoopAnimationsModule` in the `AppModule` of Your application**

---

## Main idea

Simple Angular accordion component and a simple demostrator app; the app is a simple demonstrator project - showcasing the integration of the accordion library and applying basic setting of it.

Any suggestions for improvement are welcome. Please [setup a new issue](https://github.com/VovanSuper/accordion-simple/issues/new) if you have any problems using this package or find ways in which it could be improved.
To ask for features / report on a bug follow the guide in : [Issue Report](./.github/ISSUE_TEMPLATE/bug_report.md)

<br />

<details closed>
<summary>TODO:</summary>

- [ x ] Dynamic styling of accordion and accordion items (headers, bodies...)

</details>

<br />

---

## Documentation

- General typeDoc generated types of the Accordion-simple library are available in [[docs](./docs/typedocs/index.html)]

- Base element is [`<ngxd-accordion>`](./projects/@ngx-dummy/accordion-simple/src/lib/accordion.component.ts)

- [`Accordion`](./projects/@ngx-dummy/accordion-simple/src/lib/accordion.component.ts) should have `@Input` on type [ [IAccordion ](./projects/@ngx-dummy/accordion-simple/src/lib/settings/IAccordion.ts)]

- Sample usage vovansuper.github.io/accordion-simple

---

<br/>

<details closed>
<summary>Other projects:</summary>

|     Name      |                          URL                           |
| :-----------: | :----------------------------------------------------: |
| Select Simple | https://www.npmjs.com/package/@ngx-dummy/select-simple |

</details>

<br/>

---

##### Redistribution

Licensed under the GNU GPLv3 License - see the [LICENSE](LICENSE) file for details.

[![License: LGPL v3](https://img.shields.io/badge/License-LGPLv3-blue.svg)](LICENSE)

Licensed under the GNU LGPLv3 License - see the [LICENSE](LICENSE) file for details.
_Copyright (c) belongs to Vladimir Ovsyukov <<ovsyukov@yandex.com>>; Please, freely use **AS_IS** (under conditions defined within the [LICENSE](LICENSE))_
