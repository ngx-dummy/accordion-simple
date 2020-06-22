//** Sample Loading */

(function () {

  window.addEventListener('DOMContentLoaded', function (e) {
    initSwiper();
    let swiperContainer = document.querySelector('.swiper-container');
    let swiper = swiperContainer.swiper;

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

    let swiperContObserver = new MutationObserver(changes => {
      console.log(changes);
    });
    swiperContObserver.observe(swiperContainer, { childList: true });

    console.log(swiper);

    let MDCTopAppBar = window.mdc.topAppBar.MDCTopAppBar;
    let MDCDrawer = window.mdc.drawer.MDCDrawer;
    let MDCList = window.mdc.list.MDCList;
    let MDCMenu = window.mdc.menu.MDCMenu;

    const vert_menu_opener = document.getElementById('vert_menu_opener');
    const forwardBtn = document.getElementById('forward');
    const backBtn = document.getElementById('back');
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const menu = new MDCMenu(document.querySelector('.mdc-menu'));
    menu.setFixedPosition(true);
    menu.setAnchorElement(vert_menu_opener);
    vert_menu_opener.addEventListener('click', e => {
      menu.open = !!!menu.open;
    });
    forwardBtn.addEventListener('click', e => {
      e.preventDefault();
      swiper.slideNext();
    });
    backBtn.addEventListener('click', e => {
      e.preventDefault();
      swiper.slidePrev();
    });


    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    const list = MDCList.attachTo(document.querySelector('.mdc-list'));
    // list.wrapFocus = true;
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  });
  function initSwiper() {
    let swiper = new Swiper('.swiper-container', {
      effect: 'flip',
      grabCursor: true,
      allowTouchMove: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})();