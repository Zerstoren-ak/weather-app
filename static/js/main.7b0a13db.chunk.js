(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{51:function(e,t,a){e.exports=a.p+"static/media/Sun.ae0becdc.mp4"},52:function(e,t,a){e.exports=a.p+"static/media/Clouds-day.cc38b2a2.mp4"},53:function(e,t,a){e.exports=a.p+"static/media/Rain-day.de58e629.mp4"},54:function(e,t,a){e.exports=a.p+"static/media/Thunderstorm-day.b0b97a7c.mp4"},55:function(e,t,a){e.exports=a.p+"static/media/Snowfall.bf29e321.mp4"},56:function(e,t,a){e.exports=a.p+"static/media/Drizzle-day.6f2e858e.mp4"},57:function(e,t,a){e.exports=a.p+"static/media/Fog-day.62f5a769.mp4"},68:function(e,t,a){e.exports=a(91)},73:function(e,t,a){},75:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),l=(a(73),a(48)),o=a(49),s=a(60),u=a(59),m=a(22),d=a.n(m),p=a(32),f=a(31),h=a(13),E=a(19),v=(a(75),a(122)),w=a(120);var b=function(e){var t=e.handleForm;return r.a.createElement("form",{className:"search-form",onSubmit:t},r.a.createElement("div",null,r.a.createElement(v.a,{className:"data-input",required:!0,type:"text",name:"city",id:"outlined-basic",label:"City...",variant:"outlined"}),r.a.createElement(v.a,{className:"data-input",type:"text",name:"country",id:"outlined-basic",label:"Country code...",variant:"outlined"})),r.a.createElement(w.a,{className:"data-submit",type:onsubmit,variant:"outlined",size:"medium",color:"primary"},"Get Weather"))};var y=function(e){var t=e.addCity,a=e.apiKey,i=e.toastSettings,c=Object(n.useState)({}),l=Object(h.a)(c,2),o=l[0],s=l[1];function u(){return(u=Object(p.a)(d.a.mark((function e(t){var n,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=t.target.city.value,r=t.target.country.value,t.target.city.value="",t.target.country.value="",e.next=8,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r||"","&appid=").concat(a,"&units=metric"));case 8:return c=e.sent,e.next=11,c.json();case 11:if(!((l=e.sent).cod>=400&&l.cod<=499)){e.next=14;break}throw l.message;case 14:s({id:l.id,city:l.name,country:l.sys.country}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0),E.b.error(e.t0,i);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){0!==Object.entries(o).length&&(console.log("FormCitySearch API data:",o),t([o]))}),[o]),r.a.createElement(b,{handleForm:function(e){return u.apply(this,arguments)}})};function g(e){return Math.round(e)+"\xb0C"}function D(e){return new Intl.DateTimeFormat("ru-RU",{hour:"2-digit",minute:"2-digit"}).format(e)}var x=function(e){var t=Object(n.useState)(0),a=Object(h.a)(t,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){var t=null;if(e.weatherData.timezone){var a=new Date,n=a.getTime()+6e4*a.getTimezoneOffset();c(n+1e3*e.weatherData.timezone),t=setInterval((function(){c((function(e){return e+1e3}))}),1e3)}return function(){clearInterval(t)}}),[e]),r.a.createElement("p",{className:"Clock"},D(i))},O=a(121),k=a(50),j=a.n(k);a(79);var S=function(e){return r.a.createElement("div",{className:"WeatherShort"},r.a.createElement("div",null,r.a.createElement(x,{weatherData:e.weatherData}),r.a.createElement("div",{className:"location"},r.a.createElement("h2",null,e.cityData.city),r.a.createElement("p",null,", ",e.cityData.country))),e.weatherData?r.a.createElement("h3",null,g(e.weatherData.temperature)):r.a.createElement("h3",null,"t\xb0C"),r.a.createElement(O.a,{className:"weather-remove","aria-label":"delete",onClick:e.removeCity},r.a.createElement(j.a,{fontSize:"small"})),r.a.createElement(w.a,{className:"weather-expand-minify",onClick:e.clickHandlerExpand,variant:"outlined",size:"small",color:"primary"},"expand"))};a(82);var C=function(e){return r.a.createElement("div",{className:"location-detailed"},r.a.createElement("h2",null,e.cityData.city),r.a.createElement("h3",null,e.cityData.country),r.a.createElement("p",{className:"temperature"},g(e.weatherData.temperature)),r.a.createElement("p",{className:"weather-description"},e.weatherData.description))};a(83);var N=function(e){var t=6e4*(new Date).getTimezoneOffset()+1e3*e.weatherData.timezone,a=1e3*e.weatherData.sunrise+t,n=1e3*e.weatherData.sunset+t;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,"Sunrise"),r.a.createElement("p",null,D(a))),r.a.createElement("li",null,r.a.createElement("h4",null,"Sunset"),r.a.createElement("p",null,D(n))),r.a.createElement("li",null,r.a.createElement("h4",null,"Feels like"),r.a.createElement("p",null,g(e.weatherData.feelsLike))),r.a.createElement("li",null,r.a.createElement("h4",null,"Clouds"),r.a.createElement("p",null,e.weatherData.clouds," %")),r.a.createElement("li",null,r.a.createElement("h4",null,"Temp. min"),r.a.createElement("p",null,g(e.weatherData.temperatureMin))),r.a.createElement("li",null,r.a.createElement("h4",null,"Temp. max"),r.a.createElement("p",null,g(e.weatherData.temperatureMax))),r.a.createElement("li",null,r.a.createElement("h4",null,"Pressure"),r.a.createElement("p",null,e.weatherData.pressure," hPa")),r.a.createElement("li",null,r.a.createElement("h4",null,"Humidity"),r.a.createElement("p",null,e.weatherData.humidity," %")),r.a.createElement("li",null,r.a.createElement("h4",null,"Wind speed"),r.a.createElement("p",null,e.weatherData.windSpeed," mtr/sec")))};a(84);var W=function(e){return r.a.createElement("div",{className:"WeatherDetailed"},r.a.createElement(w.a,{className:"weather-expand-minify",onClick:e.clickHandlerMinify,variant:"outlined",size:"small",color:"primary"},"minify"),r.a.createElement(C,{cityData:e.cityData,weatherData:e.weatherData}),r.a.createElement(N,{weatherData:e.weatherData}))},z=a(29),I=(a(85),a(51)),H=a.n(I),P=a(52),R=a.n(P),T=a(53),F=a.n(T),L=a(54),M=a.n(L),A=a(55),G=a.n(A),J=a(56),U=a.n(J),B=a(57),_=a.n(B);var q=function(e){var t=Object(n.useState)(!0),a=Object(h.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(null),o=Object(h.a)(l,2),s=o[0],u=o[1];function m(){c(!i)}return Object(n.useEffect)((function(){if(e.weatherData.description){var t=e.weatherData.description;"Rain"===t&&u(F.a),"Clear"===t&&u(H.a),"Clouds"===t&&u(R.a),"Thunderstorm"===t&&u(M.a),"Drizzle"===t&&u(U.a),"Snow"===t&&u(G.a),"Fog"!==t&&"Haze"!==t&&"Mist"!==t||u(_.a)}}),[e]),r.a.createElement(z.b,{draggableId:function(e){if(e)return e.toString()}(e.cityData.id),index:e.index},(function(t){return r.a.createElement("div",Object.assign({className:"WeatherWrapper",ref:t.innerRef},t.draggableProps,t.dragHandleProps),r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s}),i?r.a.createElement(S,{cityData:e.cityData,weatherData:e.weatherData,clickHandlerExpand:m,removeCity:e.clickHandlerRemove}):r.a.createElement(W,{cityData:e.cityData,weatherData:e.weatherData,clickHandlerMinify:m}))}))},K=a(124),$=a(123);a(88);localStorage.citiesList||(localStorage.citiesList=JSON.stringify([]));var Q="30c1cbeda422363611d8892955df2a7a",V={position:"bottom-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0};var X=function(){var e=Object(n.useState)(JSON.parse(localStorage.citiesList)),t=Object(h.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)([]),l=Object(h.a)(c,2),o=l[0],s=l[1],u=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t,n,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.map((function(e){return e.id})).join(","),!a.length){e.next=21;break}return e.prev=2,e.next=5,fetch("https://api.openweathermap.org/data/2.5/group?id=".concat(t,"&units=metric&appid=").concat(Q,"&lang=ru"));case 5:return n=e.sent,e.next=8,n.json();case 8:if(r=e.sent,console.log("WeatherGlobal fetch result:",r),n.ok){e.next=12;break}throw r.message;case 12:i=r.list.map((function(e){return{temperature:e.main.temp,timezone:e.sys.timezone,description:e.weather[0].main,sunrise:e.sys.sunrise,sunset:e.sys.sunset,feelsLike:e.main.feels_like,clouds:e.clouds.all,temperatureMin:e.main.temp_min,temperatureMax:e.main.temp_max,pressure:e.main.pressure,humidity:e.main.humidity,windSpeed:e.wind.speed}})),console.log("WeatherGlobal prepared data form fetch",i),s(i),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),E.b.error(e.t0,V);case 21:case"end":return e.stop()}}),e,null,[[2,17]])}))),[a]);return Object(n.useEffect)((function(){u()}),[u]),Object(n.useEffect)((function(){localStorage.citiesList=JSON.stringify(a)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{addCity:function(e){console.log("WeatherGlobal func addCity(props):",e),a.find((function(t){return t.id===e[0].id}))?E.b.error("city already exist",V):i((function(t){return[].concat(Object(f.a)(t),[e[0]])}))},apiKey:Q,toastSettings:V}),r.a.createElement(z.a,{onDragEnd:function(e){var t=e.destination,n=e.source,r=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var c=Object(f.a)(a),l=c.filter((function(e){return e.id===+r}));c.splice(n.index,1),c.splice.apply(c,[t.index,0].concat(Object(f.a)(l))),i(c)}}},r.a.createElement(z.c,{droppableId:"main-order"},(function(e){return r.a.createElement("div",Object.assign({className:"WeatherGlobal"},e.droppableProps,{ref:e.innerRef}),r.a.createElement(K.a,null,a.map((function(e,t){return r.a.createElement($.a,{key:a[t].id,timeout:500,classNames:"transition-item-global"},r.a.createElement(q,{index:t,cityData:a[t],weatherData:o[t]||!1,clickHandlerRemove:function(e){return function(e,t){var n=Object(f.a)(a);n.splice(t,1),i(n)}(0,t)}}))})),e.placeholder))}))))},Y=(a(89),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hello, I'm weather app"),r.a.createElement(X,null))}}]),a}(n.Component)),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(90);c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(E.a,{className:"toast-error"})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weather-app","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(t,e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.7b0a13db.chunk.js.map