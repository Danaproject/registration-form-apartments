(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Blcu:function(t,n,e){"use strict";var r={getItem:function(t){var n=localStorage.getItem(t);return n?JSON.parse(n):void 0},setItem:function(t,n){var e=JSON.stringify(n);localStorage.setItem(t,e)}};n.a=r},G6cU:function(t,n,e){var r=e("mp5j");t.exports=(r.default||r).template({1:function(t,n,e,r,o){var a,i=null!=n?n:t.nullContext||{},l=t.hooks.helperMissing,c=t.escapeExpression,u=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'  <div class="apartment">\n    <img class="apartment__img" src="'+c("function"==typeof(a=null!=(a=u(e,"imgUrl")||(null!=n?u(n,"imgUrl"):n))?a:l)?a.call(i,{name:"imgUrl",hash:{},data:o,loc:{start:{line:4,column:37},end:{line:4,column:47}}}):a)+'" alt="">\n    <h2 class="apartment__title">'+c("function"==typeof(a=null!=(a=u(e,"title")||(null!=n?u(n,"title"):n))?a:l)?a.call(i,{name:"title",hash:{},data:o,loc:{start:{line:5,column:33},end:{line:5,column:42}}}):a)+"</h2>\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(t,n,e,r,o){var a;return'<div class="apartments">\n'+(null!=(a=(t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]})(e,"each").call(null!=n?n:t.nullContext||{},n,{name:"each",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:2,column:2},end:{line:7,column:11}}}))?a:"")+"</div>"},useData:!0})},OPH6:function(t,n,e){},QfWi:function(t,n,e){"use strict";e.r(n);e("JBxO"),e("FdtR"),e("wcNg");var r=e("Blcu"),o=e("YdOs").a.BASE_URL,a={getApartments:function(){return fetch(o+"/apartments").then((function(t){return t.json()}))}},i=e("G6cU"),l=e.n(i);e("OPH6");function c(t,n,e,r,o,a,i){try{var l=t[a](i),c=l.value}catch(t){return void e(t)}l.done?n(c):Promise.resolve(c).then(r,o)}var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector(".apartments-wrapper"),t.next=3,a.getApartments();case 3:e=t.sent,n.innerHTML=l()(e);case 5:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){c(a,r,o,i,l,"next",t)}function l(t){c(a,r,o,i,l,"throw",t)}i(void 0)}))});return function(){return n.apply(this,arguments)}}(),s=r.a.getItem("session");(null==s?void 0:s.token)?u():window.location="./login.html",document.querySelector('button[data-action="log-out"]').addEventListener("click",(function(){localStorage.removeItem("session"),window.location="./login.html"}))},YdOs:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={BASE_URL:"https://apt-booking-api.herokuapp.com"}}},[["QfWi",0,1]]]);
//# sourceMappingURL=main.d2b26625b94367bfbfd4.js.map