(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(t,e,a){t.exports={block:"Block_block__303xe",temp:"Block_temp__3Dkqy",name:"Block_name__tm4N7",info_weather:"Block_info_weather__296RX"}},37:function(t,e,a){t.exports={blocks:"Blocks_blocks__2A2IV"}},43:function(t,e,a){},5:function(t,e,a){t.exports={container_block_page:"BlockPage_container_block_page__ZyEZB",back:"BlockPage_back__3BFlz",block_page:"BlockPage_block_page__1oqek",intro_info:"BlockPage_intro_info__3rPO4",temp:"BlockPage_temp__3Fisp",precipitation:"BlockPage_precipitation__33fQR",icon:"BlockPage_icon__2Y6CA",name:"BlockPage_name__26HWg"}},69:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a(19),i=a.n(c),s=(a(43),a(13)),r=a(7),o=a(11),d=a.n(o),p=a(15),l=a(21),b=a.n(l),u=a.p+"static/media/sun.7ca5d59a.png",j=a.p+"static/media/cloud.98fede43.png",h=a.p+"static/media/Overcast.7c643984.png",m=a.p+"static/media/overcast_sun.8e2761b2.png",f=a.p+"static/media/shower.fd719316.png",x=a.p+"static/media/rain.da9720f2.png",_=a.p+"static/media/thunderstorm.1577905d.png",g=a.p+"static/media/snow.8de876cd.png",O=a.p+"static/media/mist.f905bb00.png",w=a(14),k=a(1),N=function(t){var e=t.temp,a=t.precipitation,n=t.name,c=t.id,i=t.link;return Object(k.jsxs)(w.b,{to:"/"+i,className:"p-3 "+b.a.block,children:[Object(k.jsx)("h1",{className:b.a.name,children:1512165===c?"\u0410\u0447\u0438\u043d\u0441\u043a":1502026===c?"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a":524901===c?"\u041c\u043e\u0441\u043a\u0432\u0430":498817===c?"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433":551487===c?"\u041a\u0430\u0437\u0430\u043d\u044c":n}),Object(k.jsxs)("div",{className:b.a.temp,children:[Object(k.jsxs)("h1",{children:[e,"\xb0C"]}),Object(k.jsx)("img",{src:"01"===a.substring(0,2)?u:"02"===a.substring(0,2)?m:"03"===a.substring(0,2)?j:"04"===a.substring(0,2)?h:"09"===a.substring(0,2)?f:"10"===a.substring(0,2)?x:"11"===a.substring(0,2)?_:"13"===a.substring(0,2)?g:O})]})]})},v=a(37),y=a.n(v),B=a(12),q=a.n(B),P="ADD_CITIES",C="ADD_CURRENT_CITY",E="LOAD_CHANGE",A=function(t){return{type:P,payload:t}},D=function(t){return{type:C,payload:t}},I=function(t){return{type:E,payload:t}},R=function(){var t=Object(p.a)(d.a.mark((function t(e,a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=[],a(I(!0)),"486148"!==e){t.next=10;break}return t.t0=n,t.next=6,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=\u043a\u0440\u0430\u0441\u043d\u044b\u0439+\u0437\u0430\u0432\u043e\u0434&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 6:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=15;break;case 10:return t.t2=n,t.next=13,q.a.get("https://api.openweathermap.org/data/2.5/weather?id=".concat(e,"&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032"));case 13:t.t3=t.sent,t.t2.push.call(t.t2,t.t3);case 15:a(I(!1)),a(D(n));case 17:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),M=function(){var t=Object(p.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],e(I(!0)),t.t0=a,t.next=5,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=\u043a\u0440\u0430\u0441\u043d\u044b\u0439+\u0437\u0430\u0432\u043e\u0434&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 5:return t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.t2=a,t.next=10,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=achinsk&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 10:return t.t3=t.sent,t.t2.push.call(t.t2,t.t3),t.t4=a,t.next=15,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=krasnoyarsk&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 15:return t.t5=t.sent,t.t4.push.call(t.t4,t.t5),t.t6=a,t.next=20,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 20:return t.t7=t.sent,t.t6.push.call(t.t6,t.t7),t.t8=a,t.next=25,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=saint+petersburg&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 25:return t.t9=t.sent,t.t8.push.call(t.t8,t.t9),t.t10=a,t.next=30,q.a.get("https://api.openweathermap.org/data/2.5/weather?q=kazan&units=metric&appid=f534cacaa34a99ca60d68ac2b5db7032");case 30:t.t11=t.sent,t.t10.push.call(t.t10,t.t11),e(I(!1)),e(A(a));case 34:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){return Object(r.c)((function(t){return t.app.on_load}))?Object(k.jsx)("div",{className:"spinner-border text-info loading",role:"status",children:Object(k.jsx)("span",{className:"sr-only"})}):null},z=function(){var t=Object(r.c)((function(t){return t.app.cities})),e=Object(r.b)();return Object(n.useEffect)(Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:case"end":return t.stop()}}),t)}))),[]),Object(k.jsxs)("div",{className:"container mt-5",children:[Object(k.jsx)(T,{}),Object(k.jsx)("div",{className:"wrapper "+y.a.blocks,children:t.map((function(t){return Object(k.jsx)(N,{id:t.data.id,temp:Math.round(t.data.main.temp),precipitation:t.data.weather[0].icon,name:t.data.name,link:t.data.id},t.data.id)}))})]})},F=a(3),H=a(5),J=a.n(H),Y=function(t){t.link;var e=window.location.href.split("/"),a=Object(r.c)((function(t){return t.app.current_city})),c=Object(r.b)();if(Object(n.useEffect)(Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e[e.length-1],c);case 2:case"end":return t.stop()}}),t)}))),[]),"undefined"!==typeof a[0]){var i=a[0].data.weather[0].icon.substring(0,2),s=a[0].data;return Object(k.jsxs)("div",{className:J.a.container_block_page,children:[Object(k.jsx)(T,{}),Object(k.jsxs)("div",{className:J.a.container_block_page,children:[Object(k.jsx)("div",{className:J.a.back,children:Object(k.jsx)(w.b,{to:"/",children:Object(k.jsx)("button",{className:"btn btn-info",children:"\u041d\u0430\u0437\u0430\u0434"})})}),Object(k.jsxs)("div",{className:J.a.block_page,children:[Object(k.jsxs)("div",{className:J.a.intro_info,children:[Object(k.jsx)("h1",{className:"text-light "+J.a.name,children:1512165===s.id?"\u0410\u0447\u0438\u043d\u0441\u043a":1502026===s.id?"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a":524901===s.id?"\u041c\u043e\u0441\u043a\u0432\u0430":498817===s.id?"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433":551487===s.id?"\u041a\u0430\u0437\u0430\u043d\u044c":s.name}),Object(k.jsxs)("h1",{className:J.a.temp,children:[Math.round(s.main.temp),"\xb0C"]}),Object(k.jsxs)("h5",{className:"text-secondary",children:["\u041f\u043e \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044e: ",Math.round(s.main.feels_like),"\xb0C"]})]}),Object(k.jsx)("img",{className:J.a.icon,src:"01"===i?u:"02"===i?m:"03"===i?j:"04"===i?h:"09"===i?f:"10"===i?x:"11"===i?_:"13"===i?g:O}),Object(k.jsxs)("div",{className:J.a.intro_info,children:[Object(k.jsxs)("p",{className:"text-secondary",children:[Object(k.jsx)("span",{className:J.a.intro_info__text+" text-light",children:"\u0412\u0435\u0442\u0435\u0440: "}),s.wind.deg>=0&s.wind.deg<=45||s.wind.deg>=315&s.wind.deg<=360?"\u0421\u0435\u0432\u0435\u0440\u043d\u044b\u0439":s.wind.deg>=45&s.wind.deg<=135?"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":s.wind.deg>=135&s.wind.deg<=225?"\u042e\u0436\u043d\u044b\u0439":"\u0417\u0430\u043f\u0430\u0434\u043d\u044b\u0439"," - ",s.wind.speed," \u043c/\u0447"]}),Object(k.jsxs)("p",{className:"text-secondary",children:[Object(k.jsx)("span",{className:J.a.intro_info__text+" text-light",children:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: "}),s.main.humidity,"%"]}),Object(k.jsxs)("p",{className:"text-secondary",children:[Object(k.jsx)("span",{className:J.a.intro_info__text+" text-light",children:"\u0414\u0432\u0430\u043b\u0435\u043d\u0438\u0435: "}),s.main.pressure,"\u043c\u043c \u0440\u0442. \u0441\u0442."]})]}),Object(k.jsx)("div",{className:J.a.precipitation,children:Object(k.jsx)("h1",{className:"text-secondary",children:"01"===i?"\u0421\u043e\u043b\u043d\u0446\u0435":"02"===i?"\u041c\u0430\u043b\u043e\u043e\u0431\u043b\u0430\u0447\u043d\u043e":"03"===i?"\u0420\u0430\u0441\u0441\u0435\u044f\u043d\u043d\u044b\u0435 \u043e\u0431\u043b\u0430\u043a\u0430":"04"===i?"\u041e\u0431\u043b\u0430\u0447\u043d\u043e":"09"===i?"\u0413\u0440\u0430\u0434/\u043b\u0438\u0432\u0435\u043d\u044c":"10"===i?"\u0414\u043e\u0436\u0434\u044c":"11"===i?"\u0413\u0440\u043e\u0437\u0430":"13"===i?"\u0421\u043d\u0435\u0433":"\u0422\u0443\u043c\u0430\u043d"})})]})]})]})}return Object(k.jsx)(T,{})},Z=function(){Object(r.c)((function(t){return t.app}));function t(){new Notification("\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u0410\u0447\u0438\u043d\u0441\u043a\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f",{tag:"ache-mail",body:"24 \u0433\u0440\u0430\u0434\u0443\u0441\u0430",icon:"https://www.meteoservice.ru/img/weather_icons/material/svg/clouds_light.svg?v=2"})}return Object(k.jsx)(w.a,{basename:"/weather",children:Object(k.jsxs)("div",{className:"container mt-5",children:[Object(k.jsxs)(F.d,{children:[Object(k.jsx)(F.b,{path:"/",render:function(){return Object(k.jsx)(z,{})},exact:!0}),Object(k.jsx)(F.b,{path:"/:link",render:function(){return Object(k.jsx)(Y,{})},exact:!0}),Object(k.jsx)(F.a,{to:"/"})]}),Object(k.jsx)("div",{className:"subscribe",children:Object(k.jsx)("button",{onClick:function(){"Notification"in window?"granted"===Notification.permission?setInterval(t,6e4):"denied"!==Notification.permission&&Notification.requestPermission((function(t){"permission"in Notification||(Notification.permission=t),"permission"in Notification||(Notification.permission=t)})):alert("\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")},className:"btn btn-info",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]})})},G=a(16),L={cities:[],current_city:[],on_load:!1},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case P:return Object(G.a)(Object(G.a)({},t),{},{cities:e.payload,current_city:[]});case C:return Object(G.a)(Object(G.a)({},t),{},{current_city:e.payload,cities:[]});case E:return Object(G.a)(Object(G.a)({},t),{},{on_load:e.payload});default:return t}},S=Object(s.c)({app:Q}),U=a(38),V=Object(s.e)(S,Object(s.d)(Object(s.a)(U.a)));i.a.render(Object(k.jsx)(r.a,{store:V,children:Object(k.jsx)(Z,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a84f14d5.chunk.js.map