(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{503:function(r,t,i){},588:function(r,t,i){"use strict";i(503)},623:function(r,t,i){"use strict";i.r(t);var s={name:"InfoCard",props:["title","subTitle","airport_collection","airport_ids","airports"],methods:{colorType:function(r){switch(r){case"Civil Airports":return"primary";case"Military Airports":return"danger";case"Proposed Airports":return"info";case"Former Airports":return"success";default:return""}}}},e=(i(588),i(46)),o=Object(e.a)(s,(function(){var r=this,t=r.$createElement,i=r._self._c||t;return i("div",{staticClass:"info-card"},[i("div",{staticClass:"title"},[r._v(r._s(r.title))]),r._v(" "),i("div",{staticClass:"info-card-body"},[r.airport_collection?i("div",{staticClass:"sub-title"},[r._v(" Airports: "+r._s(r.airport_collection.length))]):r._e(),r._v(" "),r.airport_collection?i("div",{staticClass:"flex flex-wrap"},r._l(r.airport_collection,(function(r){return i("ColorBadge",{attrs:{type:{primary:"Civil Airports"===r.type,danger:"Military Airports"===r.type,info:"Proposed Airports"===r.type,success:"Former Airports"===r.type},text:r.airport_name}})})),1):r._e(),r._v(" "),r._l(r.airport_ids,(function(t){return r.airport_ids?i("div",{staticClass:"airport-detail",class:r.colorType(r.airports[t].type)},[i("span",{staticClass:"airport-name"},[r._v(r._s(r.airports[t].airport_name))]),r._v(" "),i("ColorBadge",{attrs:{type:{primary:"Civil Airports"===r.airports[t].type,danger:"Military Airports"===r.airports[t].type,info:"Proposed Airports"===r.airports[t].type,success:"Former Airports"===r.airports[t].type},text:r.airports[t].type}}),r._v(" "),r.airports[t].subtype?i("ColorBadge",{attrs:{type:"secondary",text:r.airports[t].subtype}}):r._e(),r._v(" "),r.airports[t].ICAO?i("ColorBadge",{attrs:{type:"white",text:r.airports[t].ICAO}}):r._e(),r._v(" "),r.airports[t].IATA?i("ColorBadge",{attrs:{type:"white",text:r.airports[t].IATA}}):r._e()],1):r._e()}))],2)])}),[],!1,null,null,null);t.default=o.exports}}]);