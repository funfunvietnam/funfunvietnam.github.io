/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar hn = window.location.hostname;\nvar INAPP = 0,\n    URI = 1;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ValentinesdayCard',\n  props: ['editingMsg'],\n  created: function created() {\n    if (this.editingMsg !== undefined) {\n      this.source = INAPP;\n    } else {\n      this.source = URI;\n    }\n  },\n  data: function data() {\n    return {\n      v: hn == \"localhost\" || hn == \"funfunvietnam.com\",\n      source: INAPP\n    };\n  },\n  computed: {\n    parsedMsg: function parsedMsg() {\n      if (this.source == URI) {\n        var uri = window.location.href;\n        var msg = uri.substring(uri.split(\"?m=\")[0].length + 3);\n        return msg.split(\"%0A\");\n      } else {\n        return encodeURI(this.editingMsg).split(\"%0A\");\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCardGenerator.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ValentinesdayCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValentinesdayCard */ \"./src/components/ValentinesdayCard.vue\");\n/* harmony import */ var _libraries_MobileAndTabletCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libraries/MobileAndTabletCheck.js */ \"./src/libraries/MobileAndTabletCheck.js\");\n/* harmony import */ var _libraries_MobileAndTabletCheck_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libraries_MobileAndTabletCheck_js__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar FBAPPID = '264150771164419';\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ValentinesdayCardGenerator',\n  components: {\n    ValentinesdayCard: _ValentinesdayCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      message: \"\",\n      finalURL: \"\",\n      isMobile: window.MobileAndTabletCheck()\n    };\n  },\n  computed: {\n    previewURL: function previewURL() {\n      return \"/apps/valentinesday-card.html?m=\".concat(encodeURI(this.message));\n    }\n  },\n  methods: {\n    openPreview: function openPreview() {\n      this.copyToClipboard();\n      window.open(this.finalURL);\n    },\n    generateURL: function generateURL() {\n      $(\".loader-icon\").show();\n      var site = window.location.protocol + '//' + window.location.host;\n      var login = \"o_7nond7edpv\";\n      var api_key = \"R_abaf829dce69444e968cefd0f943cd5c\";\n      var long_url = \"https://funfunvietnam.com/\".concat(this.previewURL);\n      this.get_short_url(long_url, login, api_key, function (short_url) {\n        setTimeout(function () {\n          $(\"#qrcode\").attr(\"src\", \"https://chart.apis.google.com/chart?cht=qr&chl=\" + short_url + \"&chs=180x180\");\n        }, 500);\n        this.finalURL = short_url;\n        $(\".loader-icon\").hide();\n      }.bind(this));\n    },\n    get_short_url: function get_short_url(long_url, login, api_key, func) {\n      $.getJSON(\"https://api-ssl.bitly.com/v3/shorten?callback=?\", {\n        \"format\": \"json\",\n        \"apiKey\": api_key,\n        \"login\": login,\n        \"longUrl\": long_url\n      }, function (response) {\n        func(response.data.url);\n      });\n    },\n    copyToClipboard: function copyToClipboard() {\n      var el = document.createElement('textarea');\n      el.value = this.finalURL;\n      document.body.appendChild(el);\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n      $(\"#alertmsg\").show();\n      setTimeout(function () {\n        $(\"#alertmsg\").hide();\n      }, 3000);\n    },\n    shareToMessenger: function shareToMessenger() {\n      window.open(\"fb-messenger://share?link=\".concat(this.finalURL, \"&app_id=\").concat(FBAPPID));\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"@media (min-width: 76px) and (max-width: 578px) {\\nimg[data-v-fe163622] {\\n    max-width: 5rem;\\n}\\n}\\n@media (min-width: 577px) and (max-width: 768px) {\\nimg[data-v-fe163622] {\\n    max-width: 8rem;\\n}\\n}\\n@media (min-width: 769px) and (max-width: 992px) {\\nimg[data-v-fe163622] {\\n    max-width: 15rem;\\n}\\n}\\n@media (min-width: 993px) {\\nimg[data-v-fe163622] {\\n    max-width: 20rem;\\n}\\n}\\nimg.heart[data-v-fe163622] {\\n  animation: 1s pulse-data-v-fe163622 infinite;\\n}\\n@keyframes pulse-data-v-fe163622 {\\n80% {\\n    transform: scale(0.9);\\n}\\n}\\n.valentines-card[data-v-fe163622] {\\n  background-color: #E04F5F;\\n  color: #fff;\\n  background-image: url(/assets/apps/valentinesday-card/images/hue.png);\\n  background-size: cover;\\n}\\n.valentines-card h1[data-v-fe163622] {\\n  font-family: 'Tangerine', cursive;\\n}\\n.valentines-card p[data-v-fe163622] {\\n  font-family: 'Merienda', cursive;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container\" }, [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\n        \"div\",\n        {\n          directives: [\n            { name: \"show\", rawName: \"v-show\", value: _vm.v, expression: \"v\" }\n          ],\n          staticClass: \"valentines-card col-12 text-center py-5\"\n        },\n        [\n          _c(\"div\", { staticClass: \"py-5\" }),\n          _vm._v(\" \"),\n          _c(\"h1\", { staticClass: \"my-3\" }, [_vm._v(\"Happy Valentine's Day\")]),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"my-5\" },\n            _vm._l(_vm.parsedMsg, function(msg) {\n              return _c(\"p\", [_vm._v(_vm._s(decodeURI(msg)))])\n            }),\n            0\n          )\n        ]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"d-flex justify-content-center\" }, [\n      _c(\"img\", {\n        attrs: {\n          src: \"/assets/apps/valentinesday-card/svg/vietnamese-female.svg\",\n          alt: \"\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"img\", {\n        staticClass: \"heart\",\n        attrs: { src: \"/assets/apps/valentinesday-card/svg/heart.svg\", alt: \"\" }\n      }),\n      _vm._v(\" \"),\n      _c(\"img\", {\n        attrs: {\n          src: \"/assets/apps/valentinesday-card/svg/vietnamese-male.svg\",\n          alt: \"\"\n        }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container\" }, [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-12 col-md-6 col-lg-6 col-xl-6\" }, [\n        _c(\"h2\", { staticClass: \"text-center\" }, [_vm._v(\"Editor\")]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"editor\" }, [\n          _c(\"form\", [\n            _c(\"div\", { staticClass: \"form-group\" }, [\n              _c(\"label\", { attrs: { for: \"formControlTextarea1\" } }, [\n                _vm._v(\"Message\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"textarea\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.message,\n                    expression: \"message\"\n                  }\n                ],\n                staticClass: \"form-control\",\n                attrs: { id: \"formControlTextarea1\", rows: \"8\" },\n                domProps: { value: _vm.message },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.message = $event.target.value\n                  }\n                }\n              })\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              staticClass: \"btn btn-primary text-light mb-2\",\n              on: { click: _vm.generateURL }\n            },\n            [_vm._v(\"Generate URL\")]\n          ),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _vm.finalURL\n            ? _c(\"div\", { staticClass: \"card mt-4\" }, [\n                _c(\"div\", { staticClass: \"card-body\" }, [\n                  _c(\"h5\", { staticClass: \"card-title\" }, [\n                    _vm._v(\"Valentine's Card URL:\")\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"d-flex justify-content-between\" }, [\n                    _c(\"input\", {\n                      staticClass: \"form-control-plaintext\",\n                      attrs: { type: \"text\", readonly: \"\" },\n                      domProps: { value: _vm.finalURL }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\n                      \"div\",\n                      {\n                        staticClass: \"btn btn-sm btn-outline-primary\",\n                        on: { click: _vm.copyToClipboard }\n                      },\n                      [_vm._v(\"copy\")]\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"img\", { attrs: { id: \"qrcode\", src: \"#\" } }),\n                  _vm._v(\" \"),\n                  _c(\n                    \"a\",\n                    {\n                      staticClass: \"btn btn-primary text-light mb-2\",\n                      attrs: { target: \"_blank\" },\n                      on: { click: _vm.openPreview }\n                    },\n                    [_vm._v(\"On Site Preview\")]\n                  ),\n                  _vm._v(\" \"),\n                  _vm.isMobile\n                    ? _c(\n                        \"button\",\n                        {\n                          staticClass: \"btn btn-outline-success\",\n                          on: { click: _vm.shareToMessenger }\n                        },\n                        [_vm._v(\"Share via Messenger\")]\n                      )\n                    : _vm._e()\n                ])\n              ])\n            : _vm._e()\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"col-12 col-md-6 col-lg-6 col-xl-6\" },\n        [\n          _c(\"h2\", { staticClass: \"text-center\" }, [_vm._v(\"Preview\")]),\n          _vm._v(\" \"),\n          _c(\"valentinesday-card\", { attrs: { \"editing-msg\": _vm.message } })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"alert alert-success shadow fixed-top\",\n        staticStyle: { display: \"none\" },\n        attrs: { id: \"alertmsg\", role: \"alert\" }\n      },\n      [_vm._v(\"\\n    URL Copied\\n  \")]\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass: \"loader-icon w-100 text-center\",\n        staticStyle: { display: \"none\" }\n      },\n      [_c(\"i\", { staticClass: \"fa fa-2x fa-refresh fa-spin\" })]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"bd2dd60e\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7fb2580d\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/ValentinesdayCard.vue":
/*!**********************************************!*\
  !*** ./src/components/ValentinesdayCard.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ValentinesdayCard_vue_vue_type_template_id_fe163622_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true& */ \"./src/components/ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true&\");\n/* harmony import */ var _ValentinesdayCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValentinesdayCard.vue?vue&type=script&lang=js& */ \"./src/components/ValentinesdayCard.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true& */ \"./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ValentinesdayCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ValentinesdayCard_vue_vue_type_template_id_fe163622_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ValentinesdayCard_vue_vue_type_template_id_fe163622_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"fe163622\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ValentinesdayCard.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/ValentinesdayCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCard.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=style&index=0&id=fe163622&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_style_index_0_id_fe163622_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/components/ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_template_id_fe163622_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCard.vue?vue&type=template&id=fe163622&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_template_id_fe163622_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCard_vue_vue_type_template_id_fe163622_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCard.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCardGenerator.vue":
/*!*******************************************************!*\
  !*** ./src/components/ValentinesdayCardGenerator.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ValentinesdayCardGenerator_vue_vue_type_template_id_c0ff4958_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true& */ \"./src/components/ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true&\");\n/* harmony import */ var _ValentinesdayCardGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValentinesdayCardGenerator.vue?vue&type=script&lang=js& */ \"./src/components/ValentinesdayCardGenerator.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true& */ \"./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ValentinesdayCardGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ValentinesdayCardGenerator_vue_vue_type_template_id_c0ff4958_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ValentinesdayCardGenerator_vue_vue_type_template_id_c0ff4958_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"c0ff4958\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ValentinesdayCardGenerator.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCardGenerator.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/components/ValentinesdayCardGenerator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCardGenerator.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=style&index=0&id=c0ff4958&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_style_index_0_id_c0ff4958_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?");

/***/ }),

/***/ "./src/components/ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_template_id_c0ff4958_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ValentinesdayCardGenerator.vue?vue&type=template&id=c0ff4958&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_template_id_c0ff4958_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValentinesdayCardGenerator_vue_vue_type_template_id_c0ff4958_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ValentinesdayCardGenerator.vue?");

/***/ }),

/***/ "./src/libraries/MobileAndTabletCheck.js":
/*!***********************************************!*\
  !*** ./src/libraries/MobileAndTabletCheck.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.MobileAndTabletCheck = function () {\n  var check = false;\n\n  (function (a) {\n    if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;\n  })(navigator.userAgent || navigator.vendor || window.opera);\n\n  return check;\n};\n\n//# sourceURL=webpack:///./src/libraries/MobileAndTabletCheck.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _components_ValentinesdayCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ValentinesdayCard */ \"./src/components/ValentinesdayCard.vue\");\n/* harmony import */ var _components_ValentinesdayCardGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ValentinesdayCardGenerator */ \"./src/components/ValentinesdayCardGenerator.vue\");\n // import HelloWorld from './components/HelloWorld'\n\n\n // Vue.component('helloWorld', HelloWorld)\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('valentinesdayCard', _components_ValentinesdayCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('valentinesdayCardGenerator', _components_ValentinesdayCardGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* eslint-disable no-new */\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#app'\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });