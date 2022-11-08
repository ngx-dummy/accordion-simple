//** Sample Loading */

(function (window, document) {
	window.addEventListener('DOMContentLoaded', function (e) {
		const swiper = initSwiper();
		// setTimeout(function() {
		//   let app = document.getElementById('app1');
		//   let app2Container = document.getElementById('app2Container');
		//   let app3Container = document.getElementById('app3Container');
		//   let clone = app.cloneNode(true);
		//   let clone2 = app.cloneNode(true);

		//   clone.id = 'app2'
		//   clone2.id = 'app3'
		//   app2Container.appendChild(clone);
		//   app3Container.appendChild(clone2);
		// }, 2000);
		const MDCTopAppBar = window.mdc.topAppBar?.MDCTopAppBar;
		const MDCDrawer = window.mdc.drawer.MDCDrawer;
		const MDCList = window.mdc.list.MDCList;
		const MDCMenu = window.mdc.menu.MDCMenu;

		// const vert_menu_opener = document.getElementById('vert_menu_opener');`
		const forwardBtn = document.getElementById('forward');
		const navToDocs = document.querySelector('#nav-to-docs > a.mdc-list-item__text');
		const backBtn = document.getElementById('back');
		const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
		const menu = new MDCMenu(document.querySelector('.mdc-menu'));
		menu.setFixedPosition(true);
		menu.setAnchorElement(vert_menu_opener);
		vert_menu_opener.addEventListener('click', (e) => {
			menu.open = !!!menu.open;
		});
		forwardBtn.addEventListener('click', (e) => {
			e.preventDefault();
			swiper.slideNext();
			toggleDrawer(drawer);
		});
		backBtn.addEventListener('click', (e) => {
			e.preventDefault();
			swiper.slidePrev();
			toggleDrawer(drawer);
		});
		navToDocs.addEventListener('click', (e) => {
			e.preventDefault();
			swiper.slideTo(swiper.slides.length - 1, 2000);
		});

		const topAppBar = MDCTopAppBar?.attachTo(document.getElementById('app-bar'));
		topAppBar?.setScrollTarget(document.getElementById('main-content'));
		const list = MDCList.attachTo(document.querySelector('.mdc-list'));
		list.wrapFocus = true;
		topAppBar?.listen('MDCTopAppBar:nav', () => {
			toggleDrawer(drawer);
		});
	});
	function toggleDrawer(drawer) {
		drawer.open = !drawer.open;
	}
	function initSwiper() {
		return new Swiper('.swiper-container', {
			effect: 'flip',
			grabCursor: true,
			allowTouchMove: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
})(window, document);
