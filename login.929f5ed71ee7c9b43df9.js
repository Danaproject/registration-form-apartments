(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Blcu:function(t,e,n){"use strict";var r={getItem:function(t){var e=localStorage.getItem(t);return e?JSON.parse(e):void 0},setItem:function(t,e){var n=JSON.stringify(e);localStorage.setItem(t,n)}};e.a=r},OPH6:function(t,e,n){},Udtg:function(t,e,n){"use strict";n.r(e);n("RtS0"),n("JBxO"),n("FdtR"),n("3dw1"),n("wcNg");var r=n("xyg5"),o=n("Blcu"),i=n("QJ3N");n("bzha"),n("zrP5");function a(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}var s=function(){function t(t){this.form=document.querySelector(t),this.submitHandler=this.submitHandler.bind(this)}var e=t.prototype;return e.submitHandler=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){var n,a,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=new FormData(this.form),a={},n.forEach((function(t,e){a[e]=t})),t.prev=4,t.next=7,r.a.login(a);case 7:if((s=t.sent).ok){t.next=10;break}throw s;case 10:return t.next=12,s.json();case 12:u=t.sent,o.a.setItem("session",u),this.form.reset(),window.location="/",t.next=22;break;case 18:t.prev=18,t.t0=t.catch(4),console.error(t.t0),Object(i.alert)({text:t.t0.statusText});case 22:case"end":return t.stop()}}),t,this,[[4,18]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,u,"next",t)}function u(t){a(i,r,o,s,u,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),e.addListeners=function(){this.form.addEventListener("submit",this.submitHandler)},e.init=function(){this.addListeners()},t}();n("OPH6");new s(".login-form").init()},YdOs:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={BASE_URL:"https://apt-booking-api.herokuapp.com"}},xyg5:function(t,e,n){"use strict";n("D/wG"),n("JBxO"),n("FdtR"),n("wcNg");function r(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,u,"next",t)}function u(t){r(a,o,i,s,u,"throw",t)}s(void 0)}))}}var i=n("YdOs").a.BASE_URL,a={register:function(t){return o(regeneratorRuntime.mark((function e(){var n,r,o,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.email,o=t.password,a=JSON.stringify({name:n,email:r,password:o}),e.next=4,fetch(i+"/users/register",{body:a,method:"POST",headers:{"Content-Type":"application/json"}});case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})))()},login:function(t){return o(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,o=JSON.stringify({email:n,password:r}),e.next=4,fetch(i+"/users/login",{body:o,method:"POST",headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}};e.a=a}},[["Udtg",0,1]]]);
//# sourceMappingURL=login.929f5ed71ee7c9b43df9.js.map