(function(r,c){var e,o,a,n,i;(function(e,o,a,s){var t=o.createElement("script");function n(){dataLayer.push(arguments)}t.async=1,t.src="https://www.googletagmanager.com/gtag/js?id=G-0G4LK2LFGZ",e.dataLayer=e.dataLayer||[],n("js",new Date),n("config","G-0G4LK2LFGZ"),n("config","G-EWVJVMTQHK")})(r=r||window,c=c||document),o=c,a="script",(e=r).ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,n=o.createElement(a),i=o.getElementsByTagName(a)[0],n.async=1,n.src="https://mc.yandex.ru/metrika/tag.js",i.parentNode.insertBefore(n,i),ym(67019512,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})})(window,document),function(){function r(e){e.open=!e.open}window.addEventListener("DOMContentLoaded",function(e){const o=new Swiper(".swiper-container",{effect:"flip",grabCursor:!0,allowTouchMove:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),a=window.mdc.topAppBar.MDCTopAppBar,s=window.mdc.drawer.MDCDrawer,t=window.mdc.list.MDCList,n=window.mdc.menu.MDCMenu,i=document.getElementById("forward"),m=document.getElementById("nav-to-docs"),w=document.getElementById("back"),p=s.attachTo(document.querySelector(".mdc-drawer")),u=new n(document.querySelector(".mdc-menu"));u.setFixedPosition(!0),u.setAnchorElement(vert_menu_opener),vert_menu_opener.addEventListener("click",d=>{u.open=!u.open}),i.addEventListener("click",d=>{d.preventDefault(),o.slideNext(),r(p)}),w.addEventListener("click",d=>{d.preventDefault(),o.slidePrev(),r(p)}),m.addEventListener("click",d=>{o.slideTo(o.slides.length-1,2e3)});const l=a.attachTo(document.getElementById("app-bar"));l.setScrollTarget(document.getElementById("main-content")),t.attachTo(document.querySelector(".mdc-list")).wrapFocus=!0,l.listen("MDCTopAppBar:nav",()=>{r(p)})})}();
//# sourceMappingURL=scripts.99b81ef0cc4f5a4a.js.map