parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g9iE":[function(require,module,exports) {
"use strict";function e(e){console.log("a",e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"vIYI":[function(require,module,exports) {
module.exports=function(o){console.log("b",o)};
},{}],"m4PQ":[function(require,module,exports) {
"use strict";var e=l(require("./es6/loga"));function l(e){return e&&e.__esModule?e:{default:e}}var o=require("./cjs/logb");console.log("mix web"),(0,e.default)("mix loga"),o("mix logb");
},{"./es6/loga":"g9iE","./cjs/logb":"vIYI"}]},{},["m4PQ"], null)
//# sourceMappingURL=/mix-index.2a081b7b.js.map