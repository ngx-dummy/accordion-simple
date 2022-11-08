//** Sample Loading */

(function (window, document) {
	window.addEventListener('DOMContentLoaded', function (e) {
		const template = document.createElement('template');
		template.innerHTML = `
		<embed
							src="https://htmlpreview.github.io/?https://raw.githubusercontent.com/ngx-dummy/accordion-simple/master/docs/typedocs/index.html"
							width="100%"
							height="100%"
							type="text/html"
						/>`;
		template.style.width = '100%';
		template.style.height = '100%';
		template.autofocus = false;

		class SearchResult extends HTMLElement {
			constructor() {
				super();
				this.attachShadow({ mode: 'open' });
				this.shadowRoot.appendChild(template.content.cloneNode(true));
			}
		}

		window.customElements.define('embedded-docs', SearchResult);	
	});
})(window, document);
