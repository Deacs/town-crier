/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b="length"in a&&a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ha.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=oa[a]={};return _.each(a.match(na)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+h.uid++}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ua,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:ta.test(c)?_.parseJSON(c):c}catch(e){}sa.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Ka.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)ra.set(a[c],"globalEval",!b||ra.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(ra.hasData(a)&&(f=ra.access(a),g=ra.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sa.hasData(a)&&(h=sa.access(a),i=_.extend({},h),sa.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ya.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Oa[a];return c||(c=t(a,b),"none"!==c&&c||(Na=(Na||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Na[0].contentDocument,b.write(),b.close(),c=t(a,b),Na.detach()),Oa[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qa.test(g)&&Pa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xa.length;e--;)if(b=Xa[e]+c,b in a)return b;return d}function y(a,b,c){var d=Ta.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wa[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wa[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wa[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wa[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wa[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qa.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ra.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xa(d)&&(f[g]=ra.access(d,"olddisplay",u(d.nodeName)))):(e=xa(d),"none"===c&&e||ra.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Ya=void 0}),Ya=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cb[b]||[]).concat(cb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xa(a),p=ra.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?ra.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$a.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=ra.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;ra.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bb.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Ya||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bb[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(na)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===tb;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||yb.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.4",_=function(a,b){return new _.fn.init(a,b)},aa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ba=/^-ms-/,ca=/-([\da-z])/gi,da=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(ba,"ms-").replace(ca,da)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(aa,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var ea=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],h=b.nodeType,"string"!=typeof a||!a||1!==h&&9!==h&&11!==h)return c;if(!d&&I){if(11!==h&&(e=sa.exec(a)))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return $.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName)return $.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=1!==h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ua,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=ta.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return $.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ia,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));r=q(r)}$.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V=1<<31,W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ea=da.replace("w","w#"),fa="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ea+"))|)"+ca+"*\\]",ga=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+fa+")*)|.*)\\)|)",ha=new RegExp(ca+"+","g"),ia=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ja=new RegExp("^"+ca+"*,"+ca+"*"),ka=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),la=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),ma=new RegExp(ga),na=new RegExp("^"+ea+"$"),oa={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da.replace("w","w*")+")"),ATTR:new RegExp("^"+fa),PSEUDO:new RegExp("^"+ga),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},pa=/^(?:input|select|textarea|button)$/i,qa=/^h\d$/i,ra=/^[^{]+\{\s*\[native \w/,sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,ua=/'|\\/g,va=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},xa=function(){F()};try{$.apply(X=_.call(O.childNodes),O.childNodes),X[O.childNodes.length].nodeType}catch(ya){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=d.documentElement,c=d.defaultView,c&&c!==c.top&&(c.addEventListener?c.addEventListener("unload",xa,!1):c.attachEvent&&c.attachEvent("onunload",xa)),I=!y(d),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(d.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=ra.test(d.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!d.getElementsByName||!d.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=ra.test(d.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=d.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=ra.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",ga)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=ra.test(H.compareDocumentPosition),M=b||ra.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===d||a.ownerDocument===O&&M(O,a)?-1:b===d||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===d?-1:b===d?1:f?-1:h?1:D?aa(D,a)-aa(D,b):0;if(f===h)return g(a,b);for(c=a;c=c.parentNode;)i.unshift(c);for(c=b;c=c.parentNode;)j.unshift(c);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},d):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(la,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(va,wa),a[3]=(a[3]||a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return oa.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ha," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ia,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(va,wa),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qa.test(a.nodeName)},input:function(a){return pa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=ja.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ia," ")}),h=h.slice(d.length));for(g in w.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(va,wa),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=oa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(va,wa),ta.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,ta.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=ea,_.expr=ea.selectors,_.expr[":"]=_.expr.pseudos,_.unique=ea.uniqueSort,_.text=ea.getText,_.isXMLDoc=ea.isXML,_.contains=ea.contains;var fa=_.expr.match.needsContext,ga=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ha=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fa.test(a)?_(a):a||[],!1).length}});var ia,ja=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ka=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:ja.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ia).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),ga.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ia.ready?ia.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};ka.prototype=_.fn,ia=_(Z);var la=/^(?:parents|prev(?:Until|All))/,ma={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fa.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(ma[a]||_.unique(e),la.test(a)&&e.reverse()),this.pushStack(e)}});var na=/\S+/g,oa={};_.Callbacks=function(a){a="string"==typeof a?oa[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pa;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pa.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pa||(pa=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pa.promise(b)},_.ready.promise();var qa=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(na)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var ra=new h,sa=new h,ta=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ua=/([A-Z])/g;_.extend({hasData:function(a){return sa.hasData(a)||ra.hasData(a)},data:function(a,b,c){return sa.access(a,b,c)},removeData:function(a,b){sa.remove(a,b)},_data:function(a,b,c){return ra.access(a,b,c)},_removeData:function(a,b){ra.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sa.get(f),1===f.nodeType&&!ra.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));ra.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sa.set(this,a)}):qa(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sa.get(f,a),void 0!==c)return c;if(c=sa.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sa.get(this,d);sa.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sa.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sa.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=ra.get(a,b),c&&(!d||_.isArray(c)?d=ra.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return ra.get(a,c)||ra.access(a,c,{empty:_.Callbacks("once memory").add(function(){ra.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=ra.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var va=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wa=["Top","Right","Bottom","Left"],xa=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},ya=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var za="undefined";Y.focusinBubbles="onfocusin"in a;var Aa=/^key/,Ba=/^(?:mouse|pointer|contextmenu)|click/,Ca=/^(?:focusinfocus|focusoutblur)$/,Da=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==za&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(na)||[""],j=b.length;j--;)h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.hasData(a)&&ra.get(a);if(q&&(i=q.events)){for(b=(b||"").match(na)||[""],j=b.length;j--;)if(h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,ra.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Ca.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),
c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Ca.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(ra.get(g,"events")||{})[b.type]&&ra.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(ra.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ba.test(e)?this.mouseHooks:Aa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ra.access(d,b);e||d.addEventListener(a,c,!0),ra.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ra.access(d,b)-1;e?ra.access(d,b,e):(d.removeEventListener(a,c,!0),ra.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Ea=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fa=/<([\w:]+)/,Ga=/<|&#?\w+;/,Ha=/<(?:script|style|link)/i,Ia=/checked\s*(?:[^=]|=\s*.checked.)/i,Ja=/^$|\/(?:java|ecma)script/i,Ka=/^true\/(.*)/,La=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ma.optgroup=Ma.option,Ma.tbody=Ma.tfoot=Ma.colgroup=Ma.caption=Ma.thead,Ma.th=Ma.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Ga.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fa.exec(e)||["",""])[1].toLowerCase(),h=Ma[g]||Ma._default,f.innerHTML=h[1]+e.replace(Ea,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Ja.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[ra.expando],e&&(b=ra.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);ra.cache[e]&&delete ra.cache[e]}delete sa.cache[c[sa.expando]]}}}),_.fn.extend({text:function(a){return qa(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qa(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Ha.test(a)&&!Ma[(Fa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ea,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ia.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Ja.test(g.type||"")&&!ra.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(La,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Na,Oa={},Pa=/^margin/,Qa=new RegExp("^("+va+")(?!px)[a-z%]+$","i"),Ra=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.removeChild(c),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sa=/^(none|table(?!-c[ea]).+)/,Ta=new RegExp("^("+va+")(.*)$","i"),Ua=new RegExp("^([+-])=("+va+")","i"),Va={position:"absolute",visibility:"hidden",display:"block"},Wa={letterSpacing:"0",fontWeight:"400"},Xa=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ua.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wa&&(e=Wa[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sa.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Va,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wa[d]+b]=f[d]||f[d-2]||f[0];return e}},Pa.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qa(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xa(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.options.duration?this.pos=b=_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=new RegExp("^(?:([+-])=|)("+va+")([a-z%]*)$","i"),ab=/queueHooks$/,bb=[G],cb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_a.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_a.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cb[c]=cb[c]||[],cb[c].unshift(b)},prefilter:function(a,b){b?bb.unshift(a):bb.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||ra.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=ra.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ra.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Ya=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Ya=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Za||(Za=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Za),Za=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var db,eb,fb=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qa(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===za?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?eb:db)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(na);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),eb={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fb[b]||_.find.attr;fb[b]=function(a,b,d){var e,f;return d||(f=fb[b],fb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fb[b]=f),e}});var gb=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qa(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gb.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hb=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(na)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(na)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(na)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===za||"boolean"===c)&&(this.className&&ra.set(this,"__className__",this.className),this.className=this.className||a===!1?"":ra.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hb," ").indexOf(b)>=0)return!0;return!1}});var ib=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ib,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jb=_.now(),kb=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,sb={},tb={},ub="*/".concat("*"),vb=a.location.href,wb=rb.exec(vb.toLowerCase())||[];_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vb,type:"GET",isLocal:ob.test(wb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(sb),ajaxTransport:J(tb),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=nb.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||vb)+"").replace(lb,"").replace(qb,wb[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(na)||[""],null==l.crossDomain&&(i=rb.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===wb[1]&&i[2]===wb[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(wb[3]||("http:"===wb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(sb,l,b,v),2===t)return v;j=_.event&&l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!pb.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kb.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=mb.test(e)?e.replace(mb,"$1_="+jb++):e+(kb.test(e)?"&":"?")+"_="+jb++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+ub+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(tb,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var xb=/%20/g,yb=/\[\]$/,zb=/\r?\n/g,Ab=/^(?:submit|button|image|reset|file)$/i,Bb=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b);

};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(xb,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Bb.test(this.nodeName)&&!Ab.test(a)&&(this.checked||!ya.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(zb,"\r\n")}}):{name:b.name,value:c.replace(zb,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cb=0,Db={},Eb={0:200,1223:204},Fb=_.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Db)Db[a]()}),Y.cors=!!Fb&&"withCredentials"in Fb,Y.ajax=Fb=!!Fb,_.ajaxTransport(function(a){var b;return Y.cors||Fb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Db[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Eb[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Db[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gb=[],Hb=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gb.pop()||_.expando+"_"+jb++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gb.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=ga.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Ib=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Ib)return Ib.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Jb=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==za&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Jb;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Jb})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qa(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qa.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qa(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Kb=a.jQuery,Lb=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Lb),b&&a.jQuery===_&&(a.jQuery=Kb),_},typeof b===za&&(a.jQuery=a.$=_),_});

/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);

;(function(window, document, undefined) {
  "use strict";
  
  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = require('./modules/handle-dom');

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = require('./modules/utils');

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = require('./modules/handle-swal-dom');

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = require('./modules/handle-click');

var _handleKeyDown = require('./modules/handle-key');

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = require('./modules/default-params');

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = require('./modules/set-params');

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

exports['default'] = sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = require('./utils');

var _getModal = require('./handle-swal-dom');

var _hasClass$isDescendant = require('./handle-dom');

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = require('./handle-dom');

var _setFocusStyle = require('./handle-swal-dom');

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = require('./utils');

var _removeClass$getTopMargin$fadeIn$show$addClass = require('./handle-dom');

var _defaultParams = require('./default-params');

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = require('./injected-html');

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = require('./utils');

var _getModal$getInput$setFocusStyle = require('./handle-swal-dom');

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = require('./handle-dom');

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvc3dlZXRhbGVydC5lczYuanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvbW9kdWxlcy9kZWZhdWx0LXBhcmFtcy5qcyIsIi9Vc2Vycy9UcmlzdGFuL2Rldi9Td2VldEFsZXJ0L2Rldi9tb2R1bGVzL2hhbmRsZS1jbGljay5qcyIsIi9Vc2Vycy9UcmlzdGFuL2Rldi9Td2VldEFsZXJ0L2Rldi9tb2R1bGVzL2hhbmRsZS1kb20uanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvbW9kdWxlcy9oYW5kbGUta2V5LmpzIiwiL1VzZXJzL1RyaXN0YW4vZGV2L1N3ZWV0QWxlcnQvZGV2L21vZHVsZXMvaGFuZGxlLXN3YWwtZG9tLmpzIiwiL1VzZXJzL1RyaXN0YW4vZGV2L1N3ZWV0QWxlcnQvZGV2L21vZHVsZXMvaW5qZWN0ZWQtaHRtbC5qcyIsIi9Vc2Vycy9UcmlzdGFuL2Rldi9Td2VldEFsZXJ0L2Rldi9tb2R1bGVzL3NldC1wYXJhbXMuanMiLCIvVXNlcnMvVHJpc3Rhbi9kZXYvU3dlZXRBbGVydC9kZXYvbW9kdWxlcy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztzSkNnQk8sc0JBQXNCOzs7Ozs7MkRBV3RCLGlCQUFpQjs7Ozs7O3dIQWNqQiwyQkFBMkI7Ozs7dURBSXdCLHdCQUF3Qjs7NkJBQ3hELHNCQUFzQjs7Ozs7OzZCQUl0QiwwQkFBMEI7Ozs7NkJBQzFCLHNCQUFzQjs7Ozs7Ozs7QUFNaEQsSUFBSSxxQkFBcUIsQ0FBQztBQUMxQixJQUFJLGlCQUFpQixDQUFDOzs7Ozs7QUFPdEIsSUFBSSxVQUFVLEVBQUUsSUFBSSxDQUFDOztxQkFFTixVQUFVLEdBQUcsSUFBSSxHQUFHLFlBQVc7QUFDNUMsTUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVsQywwSUE5RFUsUUFBUSxDQThEVCxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDMUMsNEdBaENBLFVBQVUsRUFnQ0UsQ0FBQzs7Ozs7OztBQU9iLFdBQVMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO0FBQzlCLFFBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQztBQUMxQixXQUFPLEFBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsR0FBSywyQkFBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDcEU7O0FBRUQsTUFBSSxjQUFjLEtBQUssU0FBUyxFQUFFO0FBQ2hDLGlEQTNERixNQUFNLENBMkRHLDBDQUEwQyxDQUFDLENBQUM7QUFDbkQsV0FBTyxLQUFLLENBQUM7R0FDZDs7QUFFRCxNQUFJLE1BQU0sR0FBRyw2Q0FsRWIsTUFBTSxDQWtFYyxFQUFFLDZCQUFnQixDQUFDOztBQUV2QyxVQUFRLE9BQU8sY0FBYzs7O0FBRzNCLFNBQUssUUFBUTtBQUNYLFlBQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0FBQzlCLFlBQU0sQ0FBQyxJQUFJLEdBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxZQUFNLENBQUMsSUFBSSxHQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEMsWUFBTTs7QUFBQTtBQUdSLFNBQUssUUFBUTtBQUNYLFVBQUksY0FBYyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDdEMscURBN0VOLE1BQU0sQ0E2RU8sMkJBQTJCLENBQUMsQ0FBQztBQUNwQyxlQUFPLEtBQUssQ0FBQztPQUNkOztBQUVELFlBQU0sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQzs7QUFFcEMsV0FBSyxJQUFJLFVBQVUsZ0NBQW1CO0FBQ3BDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUNwRDs7O0FBR0QsWUFBTSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsMkJBQWMsaUJBQWlCLENBQUM7QUFDakcsWUFBTSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7OztBQUdsRSxZQUFNLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7O0FBRTNDLFlBQU07O0FBQUEsQUFFUjtBQUNFLG1EQWpHSixNQUFNLENBaUdLLGtFQUFrRSxHQUFHLE9BQU8sY0FBYyxDQUFDLENBQUM7QUFDbkcsYUFBTyxLQUFLLENBQUM7O0FBQUEsR0FFaEI7O0FBRUQsNkJBQWMsTUFBTSxDQUFDLENBQUM7QUFDdEIsNEdBeEZBLG1CQUFtQixFQXdGRSxDQUFDO0FBQ3RCLDRHQTNGQSxTQUFTLENBMkZDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUFHeEIsTUFBSSxLQUFLLEdBQUcsMEdBbEdaLFFBQVEsRUFrR2MsQ0FBQzs7Ozs7QUFNdkIsTUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELE1BQUksWUFBWSxHQUFHLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRyxNQUFJLGFBQWEsR0FBRyx1QkFBQyxDQUFDO1dBQUsseUNBL0ZwQixZQUFZLENBK0ZxQixDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztHQUFBLENBQUM7O0FBRTFELE9BQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzdELFNBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO0FBQ2pFLFVBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxjQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDO0tBQzVDO0dBQ0Y7OztBQUdELDRHQW5IQSxVQUFVLEVBbUhFLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQzs7QUFFckMsdUJBQXFCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7QUFFekMsTUFBSSxVQUFVLEdBQUcsb0JBQUMsQ0FBQztXQUFLLDJCQUFjLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDO0dBQUEsQ0FBQztBQUN4RCxRQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQzs7QUFFOUIsUUFBTSxDQUFDLE9BQU8sR0FBRyxZQUFZOztBQUUzQixjQUFVLENBQUMsWUFBWTs7O0FBR3JCLFVBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO0FBQ25DLHlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzFCLHlCQUFpQixHQUFHLFNBQVMsQ0FBQztPQUMvQjtLQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUM7R0FDUCxDQUFDOzs7QUFHRixNQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Q0FDdEI7Ozs7OztBQVFELFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFTLFVBQVUsRUFBRTtBQUMvRCxNQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsVUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0dBQzNDO0FBQ0QsTUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDbEMsVUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0dBQ2xEOztBQUVELCtDQXJLQSxNQUFNLDZCQXFLZ0IsVUFBVSxDQUFDLENBQUM7Q0FDbkMsQ0FBQzs7Ozs7QUFNRixVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBVztBQUN6QyxNQUFJLEtBQUssR0FBRywwR0FqS1osUUFBUSxFQWlLYyxDQUFDOztBQUV2QiwwSUF4TFEsT0FBTyxDQXdMUCwwR0FsS1IsVUFBVSxFQWtLVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLDBJQXpMUSxPQUFPLENBeUxQLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQiwwSUEvTG9CLFdBQVcsQ0ErTG5CLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3JDLDBJQWhNVSxRQUFRLENBZ01ULEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xDLDBJQWpNb0IsV0FBVyxDQWlNbkIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7OztBQUs5QixNQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDOUQsMElBdk1vQixXQUFXLENBdU1uQixZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckMsMElBeE1vQixXQUFXLENBd01uQixZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDeEUsMElBek1vQixXQUFXLENBeU1uQixZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7O0FBRTFFLE1BQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMxRCwwSUE1TW9CLFdBQVcsQ0E0TW5CLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVDLDBJQTdNb0IsV0FBVyxDQTZNbkIsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQzs7QUFFcEUsTUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlELDBJQWhOb0IsV0FBVyxDQWdObkIsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzFDLDBJQWpOb0IsV0FBVyxDQWlObkIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZFLDBJQWxOb0IsV0FBVyxDQWtObkIsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOzs7QUFHdEUsWUFBVSxDQUFDLFlBQVc7QUFDcEIsUUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFELDRJQXZOa0IsV0FBVyxDQXVOakIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0dBQ2pDLEVBQUUsR0FBRyxDQUFDLENBQUM7OztBQUdSLDBJQTNOb0IsV0FBVyxDQTJObkIsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOzs7QUFHN0MsUUFBTSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztBQUN6QyxNQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtBQUNoQyxVQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7R0FDdEM7QUFDRCxtQkFBaUIsR0FBRyxTQUFTLENBQUM7QUFDOUIsY0FBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFNUIsU0FBTyxJQUFJLENBQUM7Q0FDYixDQUFDOzs7Ozs7QUFPRixVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBUyxZQUFZLEVBQUU7QUFDdkUsTUFBSSxLQUFLLEdBQUcsMEdBcE5aLFFBQVEsRUFvTmMsQ0FBQzs7QUFFdkIsTUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3hELDBJQWpQVSxRQUFRLENBaVBULFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFN0IsTUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2pFLDBJQXBQVSxRQUFRLENBb1BULGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFbEMsaUJBQWUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzs7QUFFNUQsWUFBVSxDQUFDLFlBQVc7QUFDcEIsY0FBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO0dBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRU4sT0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztDQUN0QyxDQUFDOzs7OztBQU1GLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFTLEtBQUssRUFBRTs7QUFFbEUsTUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7QUFDakMsV0FBTyxLQUFLLENBQUM7R0FDZDs7QUFFRCxNQUFJLE1BQU0sR0FBRywwR0EvT2IsUUFBUSxFQStPZSxDQUFDOztBQUV4QixNQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekQsMElBNVFvQixXQUFXLENBNFFuQixVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRWhDLE1BQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsRSwwSUEvUW9CLFdBQVcsQ0ErUW5CLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUN0QyxDQUFDOzs7OztBQUtGLFVBQVUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFTLEtBQUssRUFBRTtBQUNoRSxNQUFJLEtBQUssR0FBRywwR0E1UFosUUFBUSxFQTRQYyxDQUFDO0FBQ3ZCLE1BQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzRCxNQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELGdCQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMvQixlQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztDQUMvQixDQUFDOzs7OztBQUtGLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFTLEtBQUssRUFBRTtBQUM5RCxNQUFJLEtBQUssR0FBRywwR0F2UVosUUFBUSxFQXVRYyxDQUFDO0FBQ3ZCLE1BQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzRCxNQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pELGdCQUFjLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUNoQyxlQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztDQUNoQyxDQUFDOztBQUVGLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFOzs7QUFHakMsUUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztDQUM5QyxNQUFNO0FBQ0wsK0NBNVJBLE1BQU0sQ0E0UkMsa0NBQWtDLENBQUMsQ0FBQztDQUM1Qzs7Ozs7Ozs7O0FDdFRELElBQUksYUFBYSxHQUFHO0FBQ2xCLE9BQUssRUFBRSxFQUFFO0FBQ1QsTUFBSSxFQUFFLEVBQUU7QUFDUixNQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFpQixFQUFFLEtBQUs7QUFDeEIsbUJBQWlCLEVBQUUsSUFBSTtBQUN2QixrQkFBZ0IsRUFBRSxLQUFLO0FBQ3ZCLGdCQUFjLEVBQUUsSUFBSTtBQUNwQixlQUFhLEVBQUUsSUFBSTtBQUNuQixtQkFBaUIsRUFBRSxJQUFJO0FBQ3ZCLG9CQUFrQixFQUFFLFNBQVM7QUFDN0Isa0JBQWdCLEVBQUUsUUFBUTtBQUMxQixVQUFRLEVBQUUsSUFBSTtBQUNkLFdBQVMsRUFBRSxJQUFJO0FBQ2YsT0FBSyxFQUFFLElBQUk7QUFDWCxhQUFXLEVBQUUsRUFBRTtBQUNmLE1BQUksRUFBRSxLQUFLO0FBQ1gsV0FBUyxFQUFFLElBQUk7QUFDZixnQkFBYyxFQUFFLElBQUk7QUFDcEIsV0FBUyxFQUFFLE1BQU07QUFDakIsa0JBQWdCLEVBQUUsRUFBRTtBQUNwQixZQUFVLEVBQUUsRUFBRTtBQUNkLHFCQUFtQixFQUFFLEtBQUs7Q0FDM0IsQ0FBQzs7cUJBRWEsYUFBYTs7Ozs7Ozs7Ozs4QkN6QkcsU0FBUzs7d0JBQ2YsbUJBQW1COztxQ0FDTCxjQUFjOzs7OztBQU1yRCxJQUFJLFlBQVksR0FBRyxzQkFBUyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNoRCxNQUFJLENBQUMsR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM5QixNQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7O0FBRXRDLE1BQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLE1BQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLE1BQUksY0FBYyxHQUFJLHVCQVpmLFFBQVEsQ0FZZ0IsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELE1BQUksa0JBQWtCLEdBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLEtBQUssTUFBTSxBQUFDLENBQUM7Ozs7QUFJMUcsTUFBSSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztBQUN6QyxNQUFJLGVBQWUsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUU7QUFDaEQsZUFBVyxHQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztBQUN6QyxjQUFVLEdBQUssZ0JBdEJWLGNBQWMsQ0FzQlcsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsZUFBVyxHQUFJLGdCQXZCVixjQUFjLENBdUJXLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQ25EOztBQUVELFdBQVMsMkJBQTJCLENBQUMsS0FBSyxFQUFFO0FBQzFDLFFBQUksZUFBZSxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtBQUNoRCxZQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7S0FDdEM7R0FDRjs7QUFFRCxVQUFRLENBQUMsQ0FBQyxJQUFJO0FBQ1osU0FBSyxXQUFXO0FBQ2QsaUNBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsWUFBTTs7QUFBQSxBQUVSLFNBQUssVUFBVTtBQUNiLGlDQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLFlBQU07O0FBQUEsQUFFUixTQUFLLFdBQVc7QUFDZCxpQ0FBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QyxZQUFNOztBQUFBLEFBRVIsU0FBSyxTQUFTO0FBQ1osaUNBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEMsWUFBTTs7QUFBQSxBQUVSLFNBQUssT0FBTztBQUNWLFVBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzRCxVQUFJLGFBQWEsR0FBSSxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUUxRCxVQUFJLGVBQWUsRUFBRTtBQUNuQixxQkFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO09BQ3hDLE1BQU07QUFDTCxzQkFBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO09BQ3pDO0FBQ0QsWUFBTTs7QUFBQSxBQUVSLFNBQUssT0FBTztBQUNWLFVBQUksY0FBYyxHQUFJLEtBQUssS0FBSyxNQUFNLEFBQUMsQ0FBQztBQUN4QyxVQUFJLG1CQUFtQixHQUFHLHVCQTVEYixZQUFZLENBNERjLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzs7O0FBR3RELFVBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxjQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7QUFDMUYsY0FBTTtPQUNQOztBQUVELFVBQUksZUFBZSxJQUFJLGtCQUFrQixJQUFJLGNBQWMsRUFBRTtBQUMzRCxxQkFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztPQUM5QixNQUFNLElBQUksa0JBQWtCLElBQUksY0FBYyxJQUFJLGVBQWUsRUFBRTtBQUNsRSxvQkFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztPQUM3QixNQUFNLElBQUksdUJBdkVFLFlBQVksQ0F1RUQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ3JFLGtCQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDcEI7QUFDRCxZQUFNO0FBQUEsR0FDVDtDQUNGLENBQUM7Ozs7O0FBS0YsSUFBSSxhQUFhLEdBQUcsdUJBQVMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUMxQyxNQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7O0FBRXpCLE1BQUksdUJBcEZHLFFBQVEsQ0FvRkYsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO0FBQ2pDLGlCQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7O0FBRW5ELFFBQUksQ0FBQyxhQUFhLEVBQUU7QUFDbEIsbUJBQWEsR0FBRyxFQUFFLENBQUM7S0FDcEI7R0FDRjs7QUFFRCxRQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUVuQyxNQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7QUFDekIsY0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0dBQ3BCOztBQUVELE1BQUksTUFBTSxDQUFDLG1CQUFtQixFQUFFO0FBQzlCLGNBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztHQUM3QjtDQUNGLENBQUM7Ozs7O0FBS0YsSUFBSSxZQUFZLEdBQUcsc0JBQVMsS0FBSyxFQUFFLE1BQU0sRUFBRTs7QUFFekMsTUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLE1BQUkscUJBQXFCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssV0FBVyxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQzs7QUFFcEgsTUFBSSxxQkFBcUIsRUFBRTtBQUN6QixVQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzVCOztBQUVELE1BQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtBQUN4QixjQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7R0FDcEI7Q0FDRixDQUFDOztxQkFHYTtBQUNiLGNBQVksRUFBWixZQUFZO0FBQ1osZUFBYSxFQUFiLGFBQWE7QUFDYixjQUFZLEVBQVosWUFBWTtDQUNiOzs7Ozs7Ozs7QUMvSEQsSUFBSSxRQUFRLEdBQUcsa0JBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUN2QyxTQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQzNFLENBQUM7O0FBRUYsSUFBSSxRQUFRLEdBQUcsa0JBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUN2QyxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtBQUM5QixRQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7R0FDbkM7Q0FDRixDQUFDOztBQUVGLElBQUksV0FBVyxHQUFHLHFCQUFTLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDMUMsTUFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDcEUsTUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO0FBQzdCLFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuRCxjQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RDtBQUNELFFBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDckQ7Q0FDRixDQUFDOztBQUVGLElBQUksVUFBVSxHQUFHLG9CQUFTLEdBQUcsRUFBRTtBQUM3QixNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLEtBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzlDLFNBQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQztDQUN0QixDQUFDOztBQUVGLElBQUksS0FBSyxHQUFHLGVBQVMsSUFBSSxFQUFFO0FBQ3pCLE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN4QixNQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDOUIsQ0FBQzs7QUFFRixJQUFJLElBQUksR0FBRyxjQUFTLEtBQUssRUFBRTtBQUN6QixNQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDMUIsV0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDckI7QUFDRCxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNyQyxTQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDakI7Q0FDRixDQUFDOztBQUVGLElBQUksS0FBSyxHQUFHLGVBQVMsSUFBSSxFQUFFO0FBQ3pCLE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUN4QixNQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Q0FDN0IsQ0FBQzs7QUFFRixJQUFJLElBQUksR0FBRyxjQUFTLEtBQUssRUFBRTtBQUN6QixNQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDMUIsV0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDckI7QUFDRCxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtBQUNyQyxTQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDakI7Q0FDRixDQUFDOztBQUVGLElBQUksWUFBWSxHQUFHLHNCQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDekMsTUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztBQUM1QixTQUFPLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDcEIsUUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO0FBQ25CLGFBQU8sSUFBSSxDQUFDO0tBQ2I7QUFDRCxRQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUN4QjtBQUNELFNBQU8sS0FBSyxDQUFDO0NBQ2QsQ0FBQzs7QUFFRixJQUFJLFlBQVksR0FBRyxzQkFBUyxJQUFJLEVBQUU7QUFDaEMsTUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQzVCLE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFFN0IsTUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVk7TUFDMUIsT0FBTyxDQUFDO0FBQ1osTUFBSSxPQUFPLGdCQUFnQixLQUFLLFdBQVcsRUFBRTs7QUFDM0MsV0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztHQUNoRixNQUFNO0FBQ0wsV0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQy9DOztBQUVELE1BQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDNUIsU0FBUSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQSxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBRTtDQUN4RCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLGdCQUFTLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDcEMsTUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtBQUMzQixZQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMxQixRQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDdkIsUUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzdCLFFBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN2QixRQUFJLElBQUk7Ozs7Ozs7Ozs7T0FBRyxZQUFXO0FBQ3BCLFVBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQSxHQUFJLEdBQUcsQ0FBQztBQUNyRSxVQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVuQixVQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGtCQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO09BQzVCO0tBQ0YsQ0FBQSxDQUFDO0FBQ0YsUUFBSSxFQUFFLENBQUM7R0FDUjtBQUNELE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM5QixDQUFDOztBQUVGLElBQUksT0FBTyxHQUFHLGlCQUFTLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDckMsVUFBUSxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUM7QUFDMUIsTUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLE1BQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN2QixNQUFJLElBQUk7Ozs7Ozs7Ozs7S0FBRyxZQUFXO0FBQ3BCLFFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQSxHQUFJLEdBQUcsQ0FBQztBQUNyRSxRQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVuQixRQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGdCQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7S0FDN0I7R0FDRixDQUFBLENBQUM7QUFDRixNQUFJLEVBQUUsQ0FBQztDQUNSLENBQUM7O0FBRUYsSUFBSSxTQUFTLEdBQUcsbUJBQVMsSUFBSSxFQUFFOzs7QUFHN0IsTUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7O0FBRXBDLFFBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRTtBQUNqQyxVQUFJLEVBQUUsTUFBTTtBQUNaLGFBQU8sRUFBRSxLQUFLO0FBQ2QsZ0JBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztBQUNILFFBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDMUIsTUFBTSxJQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUc7O0FBRWpDLFFBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDOUMsT0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDekIsTUFBTSxJQUFJLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtBQUNyQyxRQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFFO0dBQzVCLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFHO0FBQzlDLFFBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNoQjtDQUNGLENBQUM7O0FBRUYsSUFBSSxvQkFBb0IsR0FBRyw4QkFBUyxDQUFDLEVBQUU7O0FBRXJDLE1BQUksT0FBTyxDQUFDLENBQUMsZUFBZSxLQUFLLFVBQVUsRUFBRTtBQUMzQyxLQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDcEIsS0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQ3BCLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQ3RFLFVBQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztHQUNsQztDQUNGLENBQUM7O1FBR0EsUUFBUSxHQUFSLFFBQVE7UUFBRSxRQUFRLEdBQVIsUUFBUTtRQUFFLFdBQVcsR0FBWCxXQUFXO1FBQy9CLFVBQVUsR0FBVixVQUFVO1FBQ1YsS0FBSyxHQUFMLEtBQUs7UUFBRSxJQUFJLEdBQUosSUFBSTtRQUFFLEtBQUssR0FBTCxLQUFLO1FBQUUsSUFBSSxHQUFKLElBQUk7UUFDeEIsWUFBWSxHQUFaLFlBQVk7UUFDWixZQUFZLEdBQVosWUFBWTtRQUNaLE1BQU0sR0FBTixNQUFNO1FBQUUsT0FBTyxHQUFQLE9BQU87UUFDZixTQUFTLEdBQVQsU0FBUztRQUNULG9CQUFvQixHQUFwQixvQkFBb0I7Ozs7Ozs7Ozs4Q0MvSjBCLGNBQWM7OzZCQUNoQyxtQkFBbUI7O0FBR2pELElBQUksYUFBYSxHQUFHLHVCQUFTLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ2pELE1BQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQzlCLE1BQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQzs7QUFFbkMsTUFBSSxTQUFTLEdBQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFELE1BQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekQsTUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBRy9ELE1BQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O0FBRTNDLFdBQU87R0FDUjs7QUFFRCxNQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7O0FBRTlDLE1BQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdDLFFBQUksY0FBYyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN2QyxjQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsWUFBTTtLQUNQO0dBQ0Y7O0FBRUQsTUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFOztBQUVqQixRQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTs7QUFFbkIsb0JBQWMsR0FBRyxTQUFTLENBQUM7S0FDNUIsTUFBTTs7QUFFTCxVQUFJLFFBQVEsS0FBSyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN6QyxzQkFBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNuQyxNQUFNO0FBQ0wsc0JBQWMsR0FBRyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO09BQzlDO0tBQ0Y7O0FBRUQsb0NBMUNLLG9CQUFvQixDQTBDSixDQUFDLENBQUMsQ0FBQztBQUN4QixrQkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUV2QixRQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtBQUM3QixxQkE3Q0csYUFBYSxDQTZDRixjQUFjLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDMUQ7R0FDRixNQUFNO0FBQ0wsUUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO0FBQ2xCLFVBQUksY0FBYyxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7QUFDdEMsc0JBQWMsR0FBRyxTQUFTLENBQUM7QUFDM0IsaUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUNuQjs7QUFFRCxVQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTs7QUFFbkIsc0JBQWMsR0FBRyxTQUFTLENBQUM7T0FDNUIsTUFBTTs7QUFFTCxzQkFBYyxHQUFHLFNBQVMsQ0FBQztPQUM1QjtLQUNGLE1BQU0sSUFBSSxPQUFPLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO0FBQzNELG9CQUFjLEdBQUcsYUFBYSxDQUFDO0FBQy9CLHNDQWhFeUIsU0FBUyxDQWdFeEIsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzlCLE1BQU07O0FBRUwsb0JBQWMsR0FBRyxTQUFTLENBQUM7S0FDNUI7R0FDRjtDQUNGLENBQUM7O3FCQUVhLGFBQWE7Ozs7Ozs7Ozs7Ozt3QkN4RUgsU0FBUzs7NkRBQ2dDLGNBQWM7OzZCQUN0RCxrQkFBa0I7Ozs7Ozs7OzRCQVFuQixpQkFBaUI7Ozs7QUFOMUMsSUFBSSxVQUFVLEdBQUssY0FBYyxDQUFDO0FBQ2xDLElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDOztBQU9wQyxJQUFJLG9CQUFvQixHQUFHLGdDQUFXO0FBQ3BDLE1BQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsV0FBUyxDQUFDLFNBQVMsNEJBQWUsQ0FBQzs7O0FBR25DLFNBQU8sU0FBUyxDQUFDLFVBQVUsRUFBRTtBQUMzQixZQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7R0FDakQ7Q0FDRixDQUFDOzs7OztBQUtGLElBQUksUUFBUTs7Ozs7Ozs7OztHQUFHLFlBQVc7QUFDeEIsTUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFaEQsTUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNYLHdCQUFvQixFQUFFLENBQUM7QUFDdkIsVUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO0dBQ3JCOztBQUVELFNBQU8sTUFBTSxDQUFDO0NBQ2YsQ0FBQSxDQUFDOzs7OztBQUtGLElBQUksUUFBUSxHQUFHLG9CQUFXO0FBQ3hCLE1BQUksTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLE1BQUksTUFBTSxFQUFFO0FBQ1YsV0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0dBQ3RDO0NBQ0YsQ0FBQzs7Ozs7QUFLRixJQUFJLFVBQVUsR0FBRyxzQkFBVztBQUMxQixTQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDN0MsQ0FBQzs7Ozs7QUFLRixJQUFJLGFBQWEsR0FBRyx1QkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQzdDLE1BQUksUUFBUSxHQUFHLFVBekRSLFFBQVEsQ0F5RFMsT0FBTyxDQUFDLENBQUM7QUFDakMsU0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLFFBQVEsR0FBRyw2Q0FBNkMsQ0FBQztDQUN0RyxDQUFDOzs7OztBQUtGLElBQUksU0FBUyxHQUFHLG1CQUFTLFFBQVEsRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUUsQ0FBQztBQUN4QixpREFqRWtDLE1BQU0sQ0FpRWpDLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLGlEQWxFMEMsSUFBSSxDQWtFekMsTUFBTSxDQUFDLENBQUM7QUFDYixpREFuRWdELFFBQVEsQ0FtRS9DLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25DLGlEQXBFTyxXQUFXLENBb0VOLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOztBQUV0QyxRQUFNLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztBQUN0RCxNQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdkQsV0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUVsQixZQUFVLENBQUMsWUFBWTtBQUNyQixtREEzRThDLFFBQVEsQ0EyRTdDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztHQUM3QixFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUVSLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRTlDLE1BQUksS0FBSyxLQUFLLE1BQU0sSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQ3BDLFFBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQztBQUM3QixVQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxZQUFXO0FBQ3JDLFVBQUksa0JBQWtCLEdBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFBLElBQUssTUFBTSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLE1BQU0sQUFBQyxDQUFDO0FBQy9HLFVBQUksa0JBQWtCLEVBQUU7QUFDdEIscUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNyQixNQUNJO0FBQ0gsa0JBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUNwQjtLQUNGLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDWDtDQUNGLENBQUM7Ozs7OztBQU1GLElBQUksVUFBVSxHQUFHLHNCQUFXO0FBQzFCLE1BQUksTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLE1BQUksTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDOztBQUV4QixpREF0R08sV0FBVyxDQXNHTixNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbEMsUUFBTSxDQUFDLEtBQUssR0FBRywyQkFBYyxVQUFVLENBQUM7QUFDeEMsUUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsMkJBQWMsU0FBUyxDQUFDLENBQUM7QUFDckQsUUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsMkJBQWMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFbkUsaUJBQWUsRUFBRSxDQUFDO0NBQ25CLENBQUM7O0FBR0YsSUFBSSxlQUFlLEdBQUcseUJBQVMsS0FBSyxFQUFFOztBQUVwQyxNQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtBQUNqQyxXQUFPLEtBQUssQ0FBQztHQUNkOztBQUVELE1BQUksTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDOztBQUV4QixNQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekQsaURBeEhPLFdBQVcsQ0F3SE4sVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUVoQyxNQUFJLGVBQWUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDbEUsaURBM0hPLFdBQVcsQ0EySE4sZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3RDLENBQUM7Ozs7O0FBTUYsSUFBSSxtQkFBbUIsR0FBRywrQkFBVztBQUNuQyxNQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUUsQ0FBQztBQUN4QixRQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRywrQ0FwSUwsWUFBWSxDQW9JTSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0NBQ25ELENBQUM7O1FBSUEsb0JBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixRQUFRLEdBQVIsUUFBUTtRQUNSLFVBQVUsR0FBVixVQUFVO1FBQ1YsUUFBUSxHQUFSLFFBQVE7UUFDUixhQUFhLEdBQWIsYUFBYTtRQUNiLFNBQVMsR0FBVCxTQUFTO1FBQ1QsVUFBVSxHQUFWLFVBQVU7UUFDVixlQUFlLEdBQWYsZUFBZTtRQUNmLG1CQUFtQixHQUFuQixtQkFBbUI7Ozs7Ozs7O0FDbEpyQixJQUFJLFlBQVk7OztBQUdkOzs7NkJBRzJCOzs7a01BUWxCOzs7NkhBTUE7Ozt1Q0FHOEI7OzsrTkFTOUIsNENBRWdDOzs7NEpBUTNCOzs7NEdBTUw7OztxTkFNOEM7Ozs2SUFTOUM7OztRQUdELENBQUM7O3FCQUVJLFlBQVk7Ozs7Ozs7Ozs7cUJDaEVwQixTQUFTOzsrQ0FNVCxtQkFBbUI7OzhFQU1uQixjQUFjOztBQWhCckIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7OztBQXNCNUUsSUFBSSxhQUFhLEdBQUcsdUJBQVMsTUFBTSxFQUFFO0FBQ25DLE1BQUksS0FBSyxHQUFHLGlDQWhCWixRQUFRLEVBZ0JjLENBQUM7O0FBRXZCLE1BQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsTUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxNQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RELE1BQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7QUFLeEQsUUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsZ0VBbkJoRCxVQUFVLENBbUJpRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7QUFLbEcsT0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZ0VBeEI5QyxVQUFVLENBd0IrQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckcsTUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLGdFQXhCVixJQUFJLENBd0JXLEtBQUssQ0FBQyxDQUFDOzs7OztBQUs3QixNQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7QUFDdEIsb0VBaENRLFFBQVEsQ0FnQ1AsS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxTQUFLLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUM3RCxNQUFNOztBQUVMLFFBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMxRCxvRUFyQ2tCLFdBQVcsQ0FxQ2pCLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoQyxTQUFLLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0dBQzdDOzs7OztBQUtELGtFQTFDb0IsSUFBSSxDQTBDbkIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7O0FBRXpDLE1BQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BeERwQixLQUFLLEVBd0RzQixFQUFFOzs7QUFFM0IsVUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDOztBQUV0QixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxZQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2pDLG1CQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGdCQUFNO1NBQ1A7T0FDRjs7QUFFRCxVQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2QsY0FBTSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QzthQUFPLEtBQUs7VUFBQztPQUNkOztBQUVELFVBQUksY0FBYyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0QsVUFBSSxLQUFLLFlBQUEsQ0FBQzs7QUFFVixVQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzlDLGFBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9ELHdFQWpFRyxJQUFJLENBaUVGLEtBQUssQ0FBQyxDQUFDO09BQ2I7O0FBRUQsVUFBSSxNQUFNLEdBQUcsaUNBM0VmLFFBQVEsRUEyRWlCLENBQUM7OztBQUd4QixjQUFRLE1BQU0sQ0FBQyxJQUFJOztBQUVqQixhQUFLLFNBQVM7QUFDWiwwRUE1RUksUUFBUSxDQTRFSCxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0IsMEVBN0VJLFFBQVEsQ0E2RUgsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQzlELDBFQTlFSSxRQUFRLENBOEVILEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUNoRSxnQkFBTTs7QUFBQSxBQUVSLGFBQUssT0FBTztBQUNWLDBFQWxGSSxRQUFRLENBa0ZILEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BDLDBFQW5GSSxRQUFRLENBbUZILEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDNUQsZ0JBQU07O0FBQUEsQUFFUixhQUFLLFNBQVM7QUFDWiwwRUF2RkksUUFBUSxDQXVGSCxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDaEMsMEVBeEZJLFFBQVEsQ0F3RkgsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdELDBFQXpGSSxRQUFRLENBeUZILEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM1RCxnQkFBTTs7QUFBQSxBQUVSLGFBQUssT0FBTyxDQUFDO0FBQ2IsYUFBSyxRQUFRO0FBQ1gsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxnQkFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ2pDLGdCQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM1RCwwRUFqR0ksUUFBUSxDQWlHSCxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDOUIsb0JBQVUsQ0FBQyxZQUFZO0FBQ3JCLGtCQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDZixrQkFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7V0FDeEQsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNSLGdCQUFNO0FBQUEsT0FDVDs7Ozs7O0dBQ0Y7Ozs7O0FBS0QsTUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ25CLFFBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7QUFFNUQsZUFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ25FLG9FQS9HSyxJQUFJLENBK0dKLFdBQVcsQ0FBQyxDQUFDOztBQUVsQixRQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDbkIsUUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixRQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7QUFDcEIsVUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEQsVUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFVBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFOUIsVUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUMzQixjQUFNLENBQUMsa0VBQWtFLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO09BQy9GLE1BQU07QUFDTCxpQkFBUyxHQUFHLFFBQVEsQ0FBQztBQUNyQixrQkFBVSxHQUFHLFNBQVMsQ0FBQztPQUN4QjtLQUNGOztBQUVELGVBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxHQUFHLFNBQVMsR0FBRyxhQUFhLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO0dBQ2pJOzs7OztBQUtELE9BQUssQ0FBQyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDdEUsTUFBSSxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7QUFDM0IsY0FBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0dBQzNDLE1BQU07QUFDTCxvRUEzSWtCLElBQUksQ0EySWpCLFVBQVUsQ0FBQyxDQUFDO0dBQ2xCOzs7OztBQUtELE9BQUssQ0FBQyxZQUFZLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEUsTUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7QUFDNUIsZUFBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0dBQzVDLE1BQU07QUFDTCxvRUFySmtCLElBQUksQ0FxSmpCLFdBQVcsQ0FBQyxDQUFDO0dBQ25COzs7OztBQUtELE1BQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFO0FBQzNCLGNBQVUsQ0FBQyxTQUFTLEdBQUcsZ0VBN0p6QixVQUFVLENBNkowQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztHQUM1RDtBQUNELE1BQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFO0FBQzVCLGVBQVcsQ0FBQyxTQUFTLEdBQUcsZ0VBaEsxQixVQUFVLENBZ0syQixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztHQUM5RDs7Ozs7QUFLRCxNQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTs7QUFFN0IsZUFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDOzs7QUFHOUQsZUFBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDO0FBQ3JFLGVBQVcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDOzs7QUFHdEUscUNBcExGLGFBQWEsQ0FvTEcsV0FBVyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0dBQ3ZEOzs7OztBQUtELE9BQUssQ0FBQyxZQUFZLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7O0FBS3pFLE1BQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN6RCxPQUFLLENBQUMsWUFBWSxDQUFDLHdCQUF3QixFQUFFLGVBQWUsQ0FBQyxDQUFDOzs7OztBQUs5RCxNQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtBQUNyQixTQUFLLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0dBQzlDLE1BQU0sSUFBSSxPQUFPLE1BQU0sQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO0FBQy9DLFNBQUssQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ3hELE1BQU07QUFDTCxTQUFLLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzdDOzs7OztBQUtELE9BQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUNoRCxDQUFDOztxQkFFYSxhQUFhOzs7Ozs7Ozs7Ozs7QUN6TjVCLElBQUksTUFBTSxHQUFHLGdCQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDMUIsT0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7QUFDakIsUUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3pCLE9BQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7R0FDRjtBQUNELFNBQU8sQ0FBQyxDQUFDO0NBQ1YsQ0FBQzs7Ozs7QUFLRixJQUFJLFFBQVEsR0FBRyxrQkFBUyxHQUFHLEVBQUU7QUFDM0IsTUFBSSxNQUFNLEdBQUcsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25FLFNBQU8sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0NBQ2xILENBQUM7Ozs7O0FBS0YsSUFBSSxLQUFLLEdBQUcsaUJBQVc7QUFDckIsU0FBUSxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFFO0NBQ3pELENBQUM7Ozs7O0FBS0YsSUFBSSxNQUFNLEdBQUcsZ0JBQVMsTUFBTSxFQUFFO0FBQzVCLE1BQUksTUFBTSxDQUFDLE9BQU8sRUFBRTs7QUFFbEIsVUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0dBQzdDO0NBQ0YsQ0FBQzs7Ozs7O0FBTUYsSUFBSSxjQUFjLEdBQUcsd0JBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRTs7QUFFdEMsS0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLE1BQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDbEIsT0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQzNEO0FBQ0QsS0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7OztBQUdmLE1BQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNkLE1BQUksQ0FBQyxDQUFDO0FBQ04sTUFBSSxDQUFDLENBQUM7O0FBRU4sT0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdEIsS0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkMsS0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLE9BQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQ3BDOztBQUVELFNBQU8sR0FBRyxDQUFDO0NBQ1osQ0FBQzs7UUFJQSxNQUFNLEdBQU4sTUFBTTtRQUNOLFFBQVEsR0FBUixRQUFRO1FBQ1IsS0FBSyxHQUFMLEtBQUs7UUFDTCxNQUFNLEdBQU4sTUFBTTtRQUNOLGNBQWMsR0FBZCxjQUFjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFN3ZWV0QWxlcnRcbi8vIDIwMTQtMjAxNSAoYykgLSBUcmlzdGFuIEVkd2FyZHNcbi8vIGdpdGh1Yi5jb20vdDR0NS9zd2VldGFsZXJ0XG5cbi8qXG4gKiBqUXVlcnktbGlrZSBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyB0aGUgRE9NXG4gKi9cbmltcG9ydCB7XG4gIGhhc0NsYXNzLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsXG4gIGVzY2FwZUh0bWwsXG4gIF9zaG93LCBzaG93LCBfaGlkZSwgaGlkZSxcbiAgaXNEZXNjZW5kYW50LFxuICBnZXRUb3BNYXJnaW4sXG4gIGZhZGVJbiwgZmFkZU91dCxcbiAgZmlyZUNsaWNrLFxuICBzdG9wRXZlbnRQcm9wYWdhdGlvblxufSBmcm9tICcuL21vZHVsZXMvaGFuZGxlLWRvbSc7XG5cbi8qXG4gKiBIYW5keSB1dGlsaXRpZXNcbiAqL1xuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBoZXhUb1JnYixcbiAgaXNJRTgsXG4gIGxvZ1N0cixcbiAgY29sb3JMdW1pbmFuY2Vcbn0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcblxuLypcbiAqICBIYW5kbGUgc3dlZXRBbGVydCdzIERPTSBlbGVtZW50c1xuICovXG5pbXBvcnQge1xuICBzd2VldEFsZXJ0SW5pdGlhbGl6ZSxcbiAgZ2V0TW9kYWwsXG4gIGdldE92ZXJsYXksXG4gIGdldElucHV0LFxuICBzZXRGb2N1c1N0eWxlLFxuICBvcGVuTW9kYWwsXG4gIHJlc2V0SW5wdXQsXG4gIGZpeFZlcnRpY2FsUG9zaXRpb25cbn0gZnJvbSAnLi9tb2R1bGVzL2hhbmRsZS1zd2FsLWRvbSc7XG5cblxuLy8gSGFuZGxlIGJ1dHRvbiBldmVudHMgYW5kIGtleWJvYXJkIGV2ZW50c1xuaW1wb3J0IHsgaGFuZGxlQnV0dG9uLCBoYW5kbGVDb25maXJtLCBoYW5kbGVDYW5jZWwgfSBmcm9tICcuL21vZHVsZXMvaGFuZGxlLWNsaWNrJztcbmltcG9ydCBoYW5kbGVLZXlEb3duIGZyb20gJy4vbW9kdWxlcy9oYW5kbGUta2V5JztcblxuXG4vLyBEZWZhdWx0IHZhbHVlc1xuaW1wb3J0IGRlZmF1bHRQYXJhbXMgZnJvbSAnLi9tb2R1bGVzL2RlZmF1bHQtcGFyYW1zJztcbmltcG9ydCBzZXRQYXJhbWV0ZXJzIGZyb20gJy4vbW9kdWxlcy9zZXQtcGFyYW1zJztcblxuLypcbiAqIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbiAqIChXZSBhbHNvIHVzZSB3aW5kb3cucHJldmlvdXNBY3RpdmVFbGVtZW50IGFzIGEgZ2xvYmFsIHZhcmlhYmxlKVxuICovXG52YXIgcHJldmlvdXNXaW5kb3dLZXlEb3duO1xudmFyIGxhc3RGb2N1c2VkQnV0dG9uO1xuXG5cbi8qXG4gKiBHbG9iYWwgc3dlZXRBbGVydCBmdW5jdGlvblxuICogKHRoaXMgaXMgd2hhdCB0aGUgdXNlciBjYWxscylcbiAqL1xudmFyIHN3ZWV0QWxlcnQsIHN3YWw7XG5cbmV4cG9ydCBkZWZhdWx0IHN3ZWV0QWxlcnQgPSBzd2FsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjdXN0b21pemF0aW9ucyA9IGFyZ3VtZW50c1swXTtcblxuICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnc3RvcC1zY3JvbGxpbmcnKTtcbiAgcmVzZXRJbnB1dCgpO1xuXG4gIC8qXG4gICAqIFVzZSBhcmd1bWVudCBpZiBkZWZpbmVkIG9yIGRlZmF1bHQgdmFsdWUgZnJvbSBwYXJhbXMgb2JqZWN0IG90aGVyd2lzZS5cbiAgICogU3VwcG9ydHMgdGhlIGNhc2Ugd2hlcmUgYSBkZWZhdWx0IHZhbHVlIGlzIGJvb2xlYW4gdHJ1ZSBhbmQgc2hvdWxkIGJlXG4gICAqIG92ZXJyaWRkZW4gYnkgYSBjb3JyZXNwb25kaW5nIGV4cGxpY2l0IGFyZ3VtZW50IHdoaWNoIGlzIGJvb2xlYW4gZmFsc2UuXG4gICAqL1xuICBmdW5jdGlvbiBhcmd1bWVudE9yRGVmYXVsdChrZXkpIHtcbiAgICB2YXIgYXJncyA9IGN1c3RvbWl6YXRpb25zO1xuICAgIHJldHVybiAoYXJnc1trZXldID09PSB1bmRlZmluZWQpID8gIGRlZmF1bHRQYXJhbXNba2V5XSA6IGFyZ3Nba2V5XTtcbiAgfVxuXG4gIGlmIChjdXN0b21pemF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbG9nU3RyKCdTd2VldEFsZXJ0IGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IGV4dGVuZCh7fSwgZGVmYXVsdFBhcmFtcyk7XG5cbiAgc3dpdGNoICh0eXBlb2YgY3VzdG9taXphdGlvbnMpIHtcblxuICAgIC8vIEV4OiBzd2FsKFwiSGVsbG9cIiwgXCJKdXN0IHRlc3RpbmdcIiwgXCJpbmZvXCIpO1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBwYXJhbXMudGl0bGUgPSBjdXN0b21pemF0aW9ucztcbiAgICAgIHBhcmFtcy50ZXh0ICA9IGFyZ3VtZW50c1sxXSB8fCAnJztcbiAgICAgIHBhcmFtcy50eXBlICA9IGFyZ3VtZW50c1syXSB8fCAnJztcbiAgICAgIGJyZWFrO1xuXG4gICAgLy8gRXg6IHN3YWwoeyB0aXRsZTpcIkhlbGxvXCIsIHRleHQ6IFwiSnVzdCB0ZXN0aW5nXCIsIHR5cGU6IFwiaW5mb1wiIH0pO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoY3VzdG9taXphdGlvbnMudGl0bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsb2dTdHIoJ01pc3NpbmcgXCJ0aXRsZVwiIGFyZ3VtZW50IScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy50aXRsZSA9IGN1c3RvbWl6YXRpb25zLnRpdGxlO1xuXG4gICAgICBmb3IgKGxldCBjdXN0b21OYW1lIGluIGRlZmF1bHRQYXJhbXMpIHtcbiAgICAgICAgcGFyYW1zW2N1c3RvbU5hbWVdID0gYXJndW1lbnRPckRlZmF1bHQoY3VzdG9tTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cgXCJDb25maXJtXCIgaW5zdGVhZCBvZiBcIk9LXCIgaWYgY2FuY2VsIGJ1dHRvbiBpcyB2aXNpYmxlXG4gICAgICBwYXJhbXMuY29uZmlybUJ1dHRvblRleHQgPSBwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiA/ICdDb25maXJtJyA6IGRlZmF1bHRQYXJhbXMuY29uZmlybUJ1dHRvblRleHQ7XG4gICAgICBwYXJhbXMuY29uZmlybUJ1dHRvblRleHQgPSBhcmd1bWVudE9yRGVmYXVsdCgnY29uZmlybUJ1dHRvblRleHQnKTtcblxuICAgICAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gd2hlbiBjbGlja2luZyBvbiBcIk9LXCIvXCJDYW5jZWxcIlxuICAgICAgcGFyYW1zLmRvbmVGdW5jdGlvbiA9IGFyZ3VtZW50c1sxXSB8fCBudWxsO1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBsb2dTdHIoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBhcmd1bWVudCEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIm9iamVjdFwiLCBnb3QgJyArIHR5cGVvZiBjdXN0b21pemF0aW9ucyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIHNldFBhcmFtZXRlcnMocGFyYW1zKTtcbiAgZml4VmVydGljYWxQb3NpdGlvbigpO1xuICBvcGVuTW9kYWwoYXJndW1lbnRzWzFdKTtcblxuICAvLyBNb2RhbCBpbnRlcmFjdGlvbnNcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcblxuXG4gIC8qXG4gICAqIE1ha2Ugc3VyZSBhbGwgbW9kYWwgYnV0dG9ucyByZXNwb25kIHRvIGFsbCBldmVudHNcbiAgICovXG4gIHZhciAkYnV0dG9ucyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICB2YXIgYnV0dG9uRXZlbnRzID0gWydvbmNsaWNrJywgJ29ubW91c2VvdmVyJywgJ29ubW91c2VvdXQnLCAnb25tb3VzZWRvd24nLCAnb25tb3VzZXVwJywgJ29uZm9jdXMnXTtcbiAgdmFyIG9uQnV0dG9uRXZlbnQgPSAoZSkgPT4gaGFuZGxlQnV0dG9uKGUsIHBhcmFtcywgbW9kYWwpO1xuXG4gIGZvciAobGV0IGJ0bkluZGV4ID0gMDsgYnRuSW5kZXggPCAkYnV0dG9ucy5sZW5ndGg7IGJ0bkluZGV4KyspIHtcbiAgICBmb3IgKGxldCBldnRJbmRleCA9IDA7IGV2dEluZGV4IDwgYnV0dG9uRXZlbnRzLmxlbmd0aDsgZXZ0SW5kZXgrKykge1xuICAgICAgbGV0IGJ0bkV2dCA9IGJ1dHRvbkV2ZW50c1tldnRJbmRleF07XG4gICAgICAkYnV0dG9uc1tidG5JbmRleF1bYnRuRXZ0XSA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xpY2tpbmcgb3V0c2lkZSB0aGUgbW9kYWwgZGlzbWlzc2VzIGl0IChpZiBhbGxvd2VkIGJ5IHVzZXIpXG4gIGdldE92ZXJsYXkoKS5vbmNsaWNrID0gb25CdXR0b25FdmVudDtcblxuICBwcmV2aW91c1dpbmRvd0tleURvd24gPSB3aW5kb3cub25rZXlkb3duO1xuXG4gIHZhciBvbktleUV2ZW50ID0gKGUpID0+IGhhbmRsZUtleURvd24oZSwgcGFyYW1zLCBtb2RhbCk7XG4gIHdpbmRvdy5vbmtleWRvd24gPSBvbktleUV2ZW50O1xuXG4gIHdpbmRvdy5vbmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgaGFzIGZvY3VzZWQgYXdheSBhbmQgZm9jdXNlZCBiYWNrIGZyb20gdGhlIHdob2xlIHdpbmRvdy5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFB1dCBpbiBhIHRpbWVvdXQgdG8ganVtcCBvdXQgb2YgdGhlIGV2ZW50IHNlcXVlbmNlLlxuICAgICAgLy8gQ2FsbGluZyBmb2N1cygpIGluIHRoZSBldmVudCBzZXF1ZW5jZSBjb25mdXNlcyB0aGluZ3MuXG4gICAgICBpZiAobGFzdEZvY3VzZWRCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXN0Rm9jdXNlZEJ1dHRvbi5mb2N1cygpO1xuICAgICAgICBsYXN0Rm9jdXNlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfTtcbiAgXG4gIC8vIFNob3cgYWxlcnQgd2l0aCBlbmFibGVkIGJ1dHRvbnMgYWx3YXlzXG4gIHN3YWwuZW5hYmxlQnV0dG9ucygpO1xufTtcblxuXG5cbi8qXG4gKiBTZXQgZGVmYXVsdCBwYXJhbXMgZm9yIGVhY2ggcG9wdXBcbiAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyUGFyYW1zXG4gKi9cbnN3ZWV0QWxlcnQuc2V0RGVmYXVsdHMgPSBzd2FsLnNldERlZmF1bHRzID0gZnVuY3Rpb24odXNlclBhcmFtcykge1xuICBpZiAoIXVzZXJQYXJhbXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJQYXJhbXMgaXMgcmVxdWlyZWQnKTtcbiAgfVxuICBpZiAodHlwZW9mIHVzZXJQYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VyUGFyYW1zIGhhcyB0byBiZSBhIG9iamVjdCcpO1xuICB9XG5cbiAgZXh0ZW5kKGRlZmF1bHRQYXJhbXMsIHVzZXJQYXJhbXMpO1xufTtcblxuXG4vKlxuICogQW5pbWF0aW9uIHdoZW4gY2xvc2luZyBtb2RhbFxuICovXG5zd2VldEFsZXJ0LmNsb3NlID0gc3dhbC5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIGZhZGVPdXQoZ2V0T3ZlcmxheSgpLCA1KTtcbiAgZmFkZU91dChtb2RhbCwgNSk7XG4gIHJlbW92ZUNsYXNzKG1vZGFsLCAnc2hvd1N3ZWV0QWxlcnQnKTtcbiAgYWRkQ2xhc3MobW9kYWwsICdoaWRlU3dlZXRBbGVydCcpO1xuICByZW1vdmVDbGFzcyhtb2RhbCwgJ3Zpc2libGUnKTtcblxuICAvKlxuICAgKiBSZXNldCBpY29uIGFuaW1hdGlvbnNcbiAgICovXG4gIHZhciAkc3VjY2Vzc0ljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi5zYS1zdWNjZXNzJyk7XG4gIHJlbW92ZUNsYXNzKCRzdWNjZXNzSWNvbiwgJ2FuaW1hdGUnKTtcbiAgcmVtb3ZlQ2xhc3MoJHN1Y2Nlc3NJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS10aXAnKSwgJ2FuaW1hdGVTdWNjZXNzVGlwJyk7XG4gIHJlbW92ZUNsYXNzKCRzdWNjZXNzSWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtbG9uZycpLCAnYW5pbWF0ZVN1Y2Nlc3NMb25nJyk7XG5cbiAgdmFyICRlcnJvckljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi5zYS1lcnJvcicpO1xuICByZW1vdmVDbGFzcygkZXJyb3JJY29uLCAnYW5pbWF0ZUVycm9ySWNvbicpO1xuICByZW1vdmVDbGFzcygkZXJyb3JJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS14LW1hcmsnKSwgJ2FuaW1hdGVYTWFyaycpO1xuXG4gIHZhciAkd2FybmluZ0ljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi5zYS13YXJuaW5nJyk7XG4gIHJlbW92ZUNsYXNzKCR3YXJuaW5nSWNvbiwgJ3B1bHNlV2FybmluZycpO1xuICByZW1vdmVDbGFzcygkd2FybmluZ0ljb24ucXVlcnlTZWxlY3RvcignLnNhLWJvZHknKSwgJ3B1bHNlV2FybmluZ0lucycpO1xuICByZW1vdmVDbGFzcygkd2FybmluZ0ljb24ucXVlcnlTZWxlY3RvcignLnNhLWRvdCcpLCAncHVsc2VXYXJuaW5nSW5zJyk7XG5cbiAgLy8gUmVzZXQgY3VzdG9tIGNsYXNzIChkZWxheSBzbyB0aGF0IFVJIGNoYW5nZXMgYXJlbid0IHZpc2libGUpXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1c3RvbUNsYXNzID0gbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1jbGFzcycpO1xuICAgIHJlbW92ZUNsYXNzKG1vZGFsLCBjdXN0b21DbGFzcyk7XG4gIH0sIDMwMCk7XG5cbiAgLy8gTWFrZSBwYWdlIHNjcm9sbGFibGUgYWdhaW5cbiAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3N0b3Atc2Nyb2xsaW5nJyk7XG5cbiAgLy8gUmVzZXQgdGhlIHBhZ2UgdG8gaXRzIHByZXZpb3VzIHN0YXRlXG4gIHdpbmRvdy5vbmtleWRvd24gPSBwcmV2aW91c1dpbmRvd0tleURvd247XG4gIGlmICh3aW5kb3cucHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgd2luZG93LnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG4gIGxhc3RGb2N1c2VkQnV0dG9uID0gdW5kZWZpbmVkO1xuICBjbGVhclRpbWVvdXQobW9kYWwudGltZW91dCk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qXG4gKiBWYWxpZGF0aW9uIG9mIHRoZSBpbnB1dCBmaWVsZCBpcyBkb25lIGJ5IHVzZXJcbiAqIElmIHNvbWV0aGluZyBpcyB3cm9uZyA9PiBjYWxsIHNob3dJbnB1dEVycm9yIHdpdGggZXJyb3JNZXNzYWdlXG4gKi9cbnN3ZWV0QWxlcnQuc2hvd0lucHV0RXJyb3IgPSBzd2FsLnNob3dJbnB1dEVycm9yID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlKSB7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgdmFyICRlcnJvckljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaW5wdXQtZXJyb3InKTtcbiAgYWRkQ2xhc3MoJGVycm9ySWNvbiwgJ3Nob3cnKTtcblxuICB2YXIgJGVycm9yQ29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWVycm9yLWNvbnRhaW5lcicpO1xuICBhZGRDbGFzcygkZXJyb3JDb250YWluZXIsICdzaG93Jyk7XG5cbiAgJGVycm9yQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzd2VldEFsZXJ0LmVuYWJsZUJ1dHRvbnMoKTtcbiAgfSwgMSk7XG5cbiAgbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xufTtcblxuXG4vKlxuICogUmVzZXQgaW5wdXQgZXJyb3IgRE9NIGVsZW1lbnRzXG4gKi9cbnN3ZWV0QWxlcnQucmVzZXRJbnB1dEVycm9yID0gc3dhbC5yZXNldElucHV0RXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAvLyBJZiBwcmVzcyBlbnRlciA9PiBpZ25vcmVcbiAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgdmFyICRlcnJvckljb24gPSAkbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWlucHV0LWVycm9yJyk7XG4gIHJlbW92ZUNsYXNzKCRlcnJvckljb24sICdzaG93Jyk7XG5cbiAgdmFyICRlcnJvckNvbnRhaW5lciA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtZXJyb3ItY29udGFpbmVyJyk7XG4gIHJlbW92ZUNsYXNzKCRlcnJvckNvbnRhaW5lciwgJ3Nob3cnKTtcbn07XG5cbi8qXG4gKiBEaXNhYmxlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gKi9cbnN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMgPSBzd2FsLmRpc2FibGVCdXR0b25zID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgdmFyIG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgdmFyICRjb25maXJtQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbmZpcm0nKTtcbiAgdmFyICRjYW5jZWxCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gICRjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgJGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59O1xuXG4vKlxuICogRW5hYmxlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gKi9cbnN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucyA9IHN3YWwuZW5hYmxlQnV0dG9ucyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG4gIHZhciAkY29uZmlybUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gIHZhciAkY2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNhbmNlbCcpO1xuICAkY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAkY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gVGhlICdoYW5kbGUtY2xpY2snIG1vZHVsZSByZXF1aXJlc1xuICAvLyB0aGF0ICdzd2VldEFsZXJ0JyB3YXMgc2V0IGFzIGdsb2JhbC5cbiAgd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuc3dhbCA9IHN3ZWV0QWxlcnQ7XG59IGVsc2Uge1xuICBsb2dTdHIoJ1N3ZWV0QWxlcnQgaXMgYSBmcm9udGVuZCBtb2R1bGUhJyk7XG59XG4iLCJ2YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0ZXh0OiAnJyxcbiAgdHlwZTogbnVsbCxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlT25Db25maXJtOiB0cnVlLFxuICBjbG9zZU9uQ2FuY2VsOiB0cnVlLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzhDRDRGNScsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VTaXplOiBudWxsLFxuICB0aW1lcjogbnVsbCxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBodG1sOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgaW5wdXRUeXBlOiAndGV4dCcsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRQYXJhbXM7XG4iLCJpbXBvcnQgeyBjb2xvckx1bWluYW5jZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0TW9kYWwgfSBmcm9tICcuL2hhbmRsZS1zd2FsLWRvbSc7XG5pbXBvcnQgeyBoYXNDbGFzcywgaXNEZXNjZW5kYW50IH0gZnJvbSAnLi9oYW5kbGUtZG9tJztcblxuXG4vKlxuICogVXNlciBjbGlja2VkIG9uIFwiQ29uZmlybVwiL1wiT0tcIiBvciBcIkNhbmNlbFwiXG4gKi9cbnZhciBoYW5kbGVCdXR0b24gPSBmdW5jdGlvbihldmVudCwgcGFyYW1zLCBtb2RhbCkge1xuICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdjb25maXJtJykgIT09IC0xO1xuICB2YXIgdGFyZ2V0ZWRPdmVybGF5ID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdzd2VldC1vdmVybGF5JykgIT09IC0xO1xuICB2YXIgbW9kYWxJc1Zpc2libGUgID0gaGFzQ2xhc3MobW9kYWwsICd2aXNpYmxlJyk7XG4gIHZhciBkb25lRnVuY3Rpb25FeGlzdHMgPSAocGFyYW1zLmRvbmVGdW5jdGlvbiAmJiBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nKSA9PT0gJ3RydWUnKTtcblxuICAvLyBTaW5jZSB0aGUgdXNlciBjYW4gY2hhbmdlIHRoZSBiYWNrZ3JvdW5kLWNvbG9yIG9mIHRoZSBjb25maXJtIGJ1dHRvbiBwcm9ncmFtbWF0aWNhbGx5LFxuICAvLyB3ZSBtdXN0IGNhbGN1bGF0ZSB3aGF0IHRoZSBjb2xvciBzaG91bGQgYmUgb24gaG92ZXIvYWN0aXZlXG4gIHZhciBub3JtYWxDb2xvciwgaG92ZXJDb2xvciwgYWN0aXZlQ29sb3I7XG4gIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgIG5vcm1hbENvbG9yICA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgaG92ZXJDb2xvciAgID0gY29sb3JMdW1pbmFuY2Uobm9ybWFsQ29sb3IsIC0wLjA0KTtcbiAgICBhY3RpdmVDb2xvciAgPSBjb2xvckx1bWluYW5jZShub3JtYWxDb2xvciwgLTAuMTQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGNvbG9yKSB7XG4gICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGhvdmVyQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICBzaG91bGRTZXRDb25maXJtQnV0dG9uQ29sb3Iobm9ybWFsQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGFjdGl2ZUNvbG9yKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICBzaG91bGRTZXRDb25maXJtQnV0dG9uQ29sb3IoaG92ZXJDb2xvcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgIGxldCAkY29uZmlybUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gICAgICBsZXQgJGNhbmNlbEJ1dHRvbiAgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG5cbiAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgJGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkY29uZmlybUJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgIGxldCBjbGlja2VkT25Nb2RhbCA9IChtb2RhbCA9PT0gdGFyZ2V0KTtcbiAgICAgIGxldCBjbGlja2VkT25Nb2RhbENoaWxkID0gaXNEZXNjZW5kYW50KG1vZGFsLCB0YXJnZXQpO1xuXG4gICAgICAvLyBJZ25vcmUgY2xpY2sgb3V0c2lkZSBpZiBhbGxvd091dHNpZGVDbGljayBpcyBmYWxzZVxuICAgICAgaWYgKCFjbGlja2VkT25Nb2RhbCAmJiAhY2xpY2tlZE9uTW9kYWxDaGlsZCAmJiBtb2RhbElzVmlzaWJsZSAmJiAhcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIGRvbmVGdW5jdGlvbkV4aXN0cyAmJiBtb2RhbElzVmlzaWJsZSkge1xuICAgICAgICBoYW5kbGVDb25maXJtKG1vZGFsLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChkb25lRnVuY3Rpb25FeGlzdHMgJiYgbW9kYWxJc1Zpc2libGUgfHwgdGFyZ2V0ZWRPdmVybGF5KSB7XG4gICAgICAgIGhhbmRsZUNhbmNlbChtb2RhbCwgcGFyYW1zKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNEZXNjZW5kYW50KG1vZGFsLCB0YXJnZXQpICYmIHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgICAgICBzd2VldEFsZXJ0LmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLypcbiAqICBVc2VyIGNsaWNrZWQgb24gXCJDb25maXJtXCIvXCJPS1wiXG4gKi9cbnZhciBoYW5kbGVDb25maXJtID0gZnVuY3Rpb24obW9kYWwsIHBhcmFtcykge1xuICB2YXIgY2FsbGJhY2tWYWx1ZSA9IHRydWU7XG5cbiAgaWYgKGhhc0NsYXNzKG1vZGFsLCAnc2hvdy1pbnB1dCcpKSB7XG4gICAgY2FsbGJhY2tWYWx1ZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG5cbiAgICBpZiAoIWNhbGxiYWNrVmFsdWUpIHtcbiAgICAgIGNhbGxiYWNrVmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBwYXJhbXMuZG9uZUZ1bmN0aW9uKGNhbGxiYWNrVmFsdWUpO1xuXG4gIGlmIChwYXJhbXMuY2xvc2VPbkNvbmZpcm0pIHtcbiAgICBzd2VldEFsZXJ0LmNsb3NlKCk7XG4gIH1cbiAgLy8gRGlzYWJsZSBjYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uIGlmIHRoZSBwYXJhbWV0ZXIgaXMgdHJ1ZVxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICBzd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zKCk7XG4gIH1cbn07XG5cbi8qXG4gKiAgVXNlciBjbGlja2VkIG9uIFwiQ2FuY2VsXCJcbiAqL1xudmFyIGhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uKG1vZGFsLCBwYXJhbXMpIHtcbiAgLy8gQ2hlY2sgaWYgY2FsbGJhY2sgZnVuY3Rpb24gZXhwZWN0cyBhIHBhcmFtZXRlciAodG8gdHJhY2sgY2FuY2VsIGFjdGlvbnMpXG4gIHZhciBmdW5jdGlvbkFzU3RyID0gU3RyaW5nKHBhcmFtcy5kb25lRnVuY3Rpb24pLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIHZhciBmdW5jdGlvbkhhbmRsZXNDYW5jZWwgPSBmdW5jdGlvbkFzU3RyLnN1YnN0cmluZygwLCA5KSA9PT0gJ2Z1bmN0aW9uKCcgJiYgZnVuY3Rpb25Bc1N0ci5zdWJzdHJpbmcoOSwgMTApICE9PSAnKSc7XG5cbiAgaWYgKGZ1bmN0aW9uSGFuZGxlc0NhbmNlbCkge1xuICAgIHBhcmFtcy5kb25lRnVuY3Rpb24oZmFsc2UpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jbG9zZU9uQ2FuY2VsKSB7XG4gICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaGFuZGxlQnV0dG9uLFxuICBoYW5kbGVDb25maXJtLFxuICBoYW5kbGVDYW5jZWxcbn07XG4iLCJ2YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJyAnICsgY2xhc3NOYW1lICsgJyAnKS50ZXN0KCcgJyArIGVsZW0uY2xhc3NOYW1lICsgJyAnKTtcbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoIWhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkpIHtcbiAgICBlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gIH1cbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuICB2YXIgbmV3Q2xhc3MgPSAnICcgKyBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKC9bXFx0XFxyXFxuXS9nLCAnICcpICsgJyAnO1xuICBpZiAoaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSkge1xuICAgIHdoaWxlIChuZXdDbGFzcy5pbmRleE9mKCcgJyArIGNsYXNzTmFtZSArICcgJykgPj0gMCkge1xuICAgICAgbmV3Q2xhc3MgPSBuZXdDbGFzcy5yZXBsYWNlKCcgJyArIGNsYXNzTmFtZSArICcgJywgJyAnKTtcbiAgICB9XG4gICAgZWxlbS5jbGFzc05hbWUgPSBuZXdDbGFzcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIH1cbn07XG5cbnZhciBlc2NhcGVIdG1sID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cikpO1xuICByZXR1cm4gZGl2LmlubmVySFRNTDtcbn07XG5cbnZhciBfc2hvdyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG52YXIgc2hvdyA9IGZ1bmN0aW9uKGVsZW1zKSB7XG4gIGlmIChlbGVtcyAmJiAhZWxlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIF9zaG93KGVsZW1zKTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgX3Nob3coZWxlbXNbaV0pO1xuICB9XG59O1xuXG52YXIgX2hpZGUgPSBmdW5jdGlvbihlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG52YXIgaGlkZSA9IGZ1bmN0aW9uKGVsZW1zKSB7XG4gIGlmIChlbGVtcyAmJiAhZWxlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIF9oaWRlKGVsZW1zKTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgX2hpZGUoZWxlbXNbaV0pO1xuICB9XG59O1xuXG52YXIgaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24ocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGdldFRvcE1hcmdpbiA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHZhciBoZWlnaHQgPSBlbGVtLmNsaWVudEhlaWdodCxcbiAgICAgIHBhZGRpbmc7XG4gIGlmICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSAhPT0gXCJ1bmRlZmluZWRcIikgeyAvLyBJRSA4XG4gICAgcGFkZGluZyA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZWxlbSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHBhZGRpbmcgPSBwYXJzZUludChlbGVtLmN1cnJlbnRTdHlsZS5wYWRkaW5nKTtcbiAgfVxuXG4gIGVsZW0uc3R5bGUubGVmdCA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJldHVybiAoJy0nICsgcGFyc2VJbnQoKGhlaWdodCArIHBhZGRpbmcpIC8gMikgKyAncHgnKTtcbn07XG5cbnZhciBmYWRlSW4gPSBmdW5jdGlvbihlbGVtLCBpbnRlcnZhbCkge1xuICBpZiAoK2VsZW0uc3R5bGUub3BhY2l0eSA8IDEpIHtcbiAgICBpbnRlcnZhbCA9IGludGVydmFsIHx8IDE2O1xuICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB2YXIgbGFzdCA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciB0aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSArZWxlbS5zdHlsZS5vcGFjaXR5ICsgKG5ldyBEYXRlKCkgLSBsYXN0KSAvIDEwMDtcbiAgICAgIGxhc3QgPSArbmV3IERhdGUoKTtcblxuICAgICAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPCAxKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGljaywgaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGljaygpO1xuICB9XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vZmFsbGJhY2sgSUU4XG59O1xuXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uKGVsZW0sIGludGVydmFsKSB7XG4gIGludGVydmFsID0gaW50ZXJ2YWwgfHwgMTY7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XG4gIHZhciBsYXN0ID0gK25ldyBEYXRlKCk7XG4gIHZhciB0aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gK2VsZW0uc3R5bGUub3BhY2l0eSAtIChuZXcgRGF0ZSgpIC0gbGFzdCkgLyAxMDA7XG4gICAgbGFzdCA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KHRpY2ssIGludGVydmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfTtcbiAgdGljaygpO1xufTtcblxudmFyIGZpcmVDbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgLy8gVGFrZW4gZnJvbSBodHRwOi8vd3d3Lm5vbm9idHJ1c2l2ZS5jb20vMjAxMS8xMS8yOS9wcm9ncmFtYXRpY2FsbHktZmlyZS1jcm9zc2Jyb3dzZXItY2xpY2stZXZlbnQtd2l0aC1qYXZhc2NyaXB0L1xuICAvLyBUaGVuIGZpeGVkIGZvciB0b2RheSdzIENocm9tZSBicm93c2VyLlxuICBpZiAodHlwZW9mIE1vdXNlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVcC10by1kYXRlIGFwcHJvYWNoXG4gICAgdmFyIG1ldnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICB2aWV3OiB3aW5kb3csXG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQobWV2dCk7XG4gIH0gZWxzZSBpZiAoIGRvY3VtZW50LmNyZWF0ZUV2ZW50ICkge1xuICAgIC8vIEZhbGxiYWNrXG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgIGV2dC5pbml0RXZlbnQoJ2NsaWNrJywgZmFsc2UsIGZhbHNlKTtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCkge1xuICAgIG5vZGUuZmlyZUV2ZW50KCdvbmNsaWNrJykgO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlLm9uY2xpY2sgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgbm9kZS5vbmNsaWNrKCk7XG4gIH1cbn07XG5cbnZhciBzdG9wRXZlbnRQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uKGUpIHtcbiAgLy8gSW4gcGFydGljdWxhciwgbWFrZSBzdXJlIHRoZSBzcGFjZSBiYXIgZG9lc24ndCBzY3JvbGwgdGhlIG1haW4gd2luZG93LlxuICBpZiAodHlwZW9mIGUuc3RvcFByb3BhZ2F0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0gZWxzZSBpZiAod2luZG93LmV2ZW50ICYmIHdpbmRvdy5ldmVudC5oYXNPd25Qcm9wZXJ0eSgnY2FuY2VsQnViYmxlJykpIHtcbiAgICB3aW5kb3cuZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IHsgXG4gIGhhc0NsYXNzLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIFxuICBlc2NhcGVIdG1sLCBcbiAgX3Nob3csIHNob3csIF9oaWRlLCBoaWRlLCBcbiAgaXNEZXNjZW5kYW50LCBcbiAgZ2V0VG9wTWFyZ2luLFxuICBmYWRlSW4sIGZhZGVPdXQsXG4gIGZpcmVDbGljayxcbiAgc3RvcEV2ZW50UHJvcGFnYXRpb25cbn07XG4iLCJpbXBvcnQgeyBzdG9wRXZlbnRQcm9wYWdhdGlvbiwgZmlyZUNsaWNrIH0gZnJvbSAnLi9oYW5kbGUtZG9tJztcbmltcG9ydCB7IHNldEZvY3VzU3R5bGUgfSBmcm9tICcuL2hhbmRsZS1zd2FsLWRvbSc7XG5cblxudmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbihldmVudCwgcGFyYW1zLCBtb2RhbCkge1xuICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcblxuICB2YXIgJG9rQnV0dG9uICAgICA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gIHZhciAkY2FuY2VsQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNhbmNlbCcpO1xuICB2YXIgJG1vZGFsQnV0dG9ucyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvblt0YWJpbmRleF0nKTtcblxuXG4gIGlmIChbOSwgMTMsIDMyLCAyN10uaW5kZXhPZihrZXlDb2RlKSA9PT0gLTEpIHtcbiAgICAvLyBEb24ndCBkbyB3b3JrIG9uIGtleXMgd2UgZG9uJ3QgY2FyZSBhYm91dC5cbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgJHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgdmFyIGJ0bkluZGV4ID0gLTE7IC8vIEZpbmQgdGhlIGJ1dHRvbiAtIG5vdGUsIHRoaXMgaXMgYSBub2RlbGlzdCwgbm90IGFuIGFycmF5LlxuICBmb3IgKHZhciBpID0gMDsgaSA8ICRtb2RhbEJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoJHRhcmdldEVsZW1lbnQgPT09ICRtb2RhbEJ1dHRvbnNbaV0pIHtcbiAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXlDb2RlID09PSA5KSB7XG4gICAgLy8gVEFCXG4gICAgaWYgKGJ0bkluZGV4ID09PSAtMSkge1xuICAgICAgLy8gTm8gYnV0dG9uIGZvY3VzZWQuIEp1bXAgdG8gdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgICAgJHRhcmdldEVsZW1lbnQgPSAkb2tCdXR0b247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgICAgaWYgKGJ0bkluZGV4ID09PSAkbW9kYWxCdXR0b25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkbW9kYWxCdXR0b25zWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkbW9kYWxCdXR0b25zW2J0bkluZGV4ICsgMV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RvcEV2ZW50UHJvcGFnYXRpb24oZSk7XG4gICAgJHRhcmdldEVsZW1lbnQuZm9jdXMoKTtcblxuICAgIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICBzZXRGb2N1c1N0eWxlKCR0YXJnZXRFbGVtZW50LCBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGtleUNvZGUgPT09IDEzKSB7XG4gICAgICBpZiAoJHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAkdGFyZ2V0RWxlbWVudCA9ICRva0J1dHRvbjtcbiAgICAgICAgJG9rQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChidG5JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgLy8gRU5URVIvU1BBQ0UgY2xpY2tlZCBvdXRzaWRlIG9mIGEgYnV0dG9uLlxuICAgICAgICAkdGFyZ2V0RWxlbWVudCA9ICRva0J1dHRvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERvIG5vdGhpbmcgLSBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0LlxuICAgICAgICAkdGFyZ2V0RWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IDI3ICYmIHBhcmFtcy5hbGxvd0VzY2FwZUtleSA9PT0gdHJ1ZSkge1xuICAgICAgJHRhcmdldEVsZW1lbnQgPSAkY2FuY2VsQnV0dG9uO1xuICAgICAgZmlyZUNsaWNrKCR0YXJnZXRFbGVtZW50LCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbGJhY2sgLSBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0LlxuICAgICAgJHRhcmdldEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVLZXlEb3duO1xuIiwiaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IHJlbW92ZUNsYXNzLCBnZXRUb3BNYXJnaW4sIGZhZGVJbiwgc2hvdywgYWRkQ2xhc3MgfSBmcm9tICcuL2hhbmRsZS1kb20nO1xuaW1wb3J0IGRlZmF1bHRQYXJhbXMgZnJvbSAnLi9kZWZhdWx0LXBhcmFtcyc7XG5cbnZhciBtb2RhbENsYXNzICAgPSAnLnN3ZWV0LWFsZXJ0JztcbnZhciBvdmVybGF5Q2xhc3MgPSAnLnN3ZWV0LW92ZXJsYXknO1xuXG4vKlxuICogQWRkIG1vZGFsICsgb3ZlcmxheSB0byBET01cbiAqL1xuaW1wb3J0IGluamVjdGVkSFRNTCBmcm9tICcuL2luamVjdGVkLWh0bWwnO1xuXG52YXIgc3dlZXRBbGVydEluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN3ZWV0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzd2VldFdyYXAuaW5uZXJIVE1MID0gaW5qZWN0ZWRIVE1MO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cyB0byBib2R5XG4gIHdoaWxlIChzd2VldFdyYXAuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3dlZXRXcmFwLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG4vKlxuICogR2V0IERPTSBlbGVtZW50IG9mIG1vZGFsXG4gKi9cbnZhciBnZXRNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgJG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbENsYXNzKTtcblxuICBpZiAoISRtb2RhbCkge1xuICAgIHN3ZWV0QWxlcnRJbml0aWFsaXplKCk7XG4gICAgJG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgfVxuXG4gIHJldHVybiAkbW9kYWw7XG59O1xuXG4vKlxuICogR2V0IERPTSBlbGVtZW50IG9mIGlucHV0IChpbiBtb2RhbClcbiAqL1xudmFyIGdldElucHV0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICBpZiAoJG1vZGFsKSB7XG4gICAgcmV0dXJuICRtb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICB9XG59O1xuXG4vKlxuICogR2V0IERPTSBlbGVtZW50IG9mIG92ZXJsYXlcbiAqL1xudmFyIGdldE92ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmxheUNsYXNzKTtcbn07XG5cbi8qXG4gKiBBZGQgYm94LXNoYWRvdyBzdHlsZSB0byBidXR0b24gKGRlcGVuZGluZyBvbiBpdHMgY2hvc2VuIGJnLWNvbG9yKVxuICovXG52YXIgc2V0Rm9jdXNTdHlsZSA9IGZ1bmN0aW9uKCRidXR0b24sIGJnQ29sb3IpIHtcbiAgdmFyIHJnYkNvbG9yID0gaGV4VG9SZ2IoYmdDb2xvcik7XG4gICRidXR0b24uc3R5bGUuYm94U2hhZG93ID0gJzAgMCAycHggcmdiYSgnICsgcmdiQ29sb3IgKyAnLCAwLjgpLCBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KSc7XG59O1xuXG4vKlxuICogQW5pbWF0aW9uIHdoZW4gb3BlbmluZyBtb2RhbFxuICovXG52YXIgb3Blbk1vZGFsID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gIGZhZGVJbihnZXRPdmVybGF5KCksIDEwKTtcbiAgc2hvdygkbW9kYWwpO1xuICBhZGRDbGFzcygkbW9kYWwsICdzaG93U3dlZXRBbGVydCcpO1xuICByZW1vdmVDbGFzcygkbW9kYWwsICdoaWRlU3dlZXRBbGVydCcpO1xuXG4gIHdpbmRvdy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB2YXIgJG9rQnV0dG9uID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gICRva0J1dHRvbi5mb2N1cygpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGFkZENsYXNzKCRtb2RhbCwgJ3Zpc2libGUnKTtcbiAgfSwgNTAwKTtcblxuICB2YXIgdGltZXIgPSAkbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbWVyJyk7XG5cbiAgaWYgKHRpbWVyICE9PSAnbnVsbCcgJiYgdGltZXIgIT09ICcnKSB7XG4gICAgdmFyIHRpbWVyQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAkbW9kYWwudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZG9uZUZ1bmN0aW9uRXhpc3RzID0gKCh0aW1lckNhbGxiYWNrIHx8IG51bGwpICYmICRtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nKSA9PT0gJ3RydWUnKTtcbiAgICAgIGlmIChkb25lRnVuY3Rpb25FeGlzdHMpIHsgXG4gICAgICAgIHRpbWVyQ2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sIHRpbWVyKTtcbiAgfVxufTtcblxuLypcbiAqIFJlc2V0IHRoZSBzdHlsaW5nIG9mIHRoZSBpbnB1dFxuICogKGZvciBleGFtcGxlIGlmIGVycm9ycyBoYXZlIGJlZW4gc2hvd24pXG4gKi9cbnZhciByZXNldElucHV0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICB2YXIgJGlucHV0ID0gZ2V0SW5wdXQoKTtcblxuICByZW1vdmVDbGFzcygkbW9kYWwsICdzaG93LWlucHV0Jyk7XG4gICRpbnB1dC52YWx1ZSA9IGRlZmF1bHRQYXJhbXMuaW5wdXRWYWx1ZTtcbiAgJGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGRlZmF1bHRQYXJhbXMuaW5wdXRUeXBlKTtcbiAgJGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBkZWZhdWx0UGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpO1xuXG4gIHJlc2V0SW5wdXRFcnJvcigpO1xufTtcblxuXG52YXIgcmVzZXRJbnB1dEVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgLy8gSWYgcHJlc3MgZW50ZXIgPT4gaWdub3JlXG4gIGlmIChldmVudCAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuXG4gIHZhciAkZXJyb3JJY29uID0gJG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pbnB1dC1lcnJvcicpO1xuICByZW1vdmVDbGFzcygkZXJyb3JJY29uLCAnc2hvdycpO1xuXG4gIHZhciAkZXJyb3JDb250YWluZXIgPSAkbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWVycm9yLWNvbnRhaW5lcicpO1xuICByZW1vdmVDbGFzcygkZXJyb3JDb250YWluZXIsICdzaG93Jyk7XG59O1xuXG5cbi8qXG4gKiBTZXQgXCJtYXJnaW4tdG9wXCItcHJvcGVydHkgb24gbW9kYWwgYmFzZWQgb24gaXRzIGNvbXB1dGVkIGhlaWdodFxuICovXG52YXIgZml4VmVydGljYWxQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgJG1vZGFsID0gZ2V0TW9kYWwoKTtcbiAgJG1vZGFsLnN0eWxlLm1hcmdpblRvcCA9IGdldFRvcE1hcmdpbihnZXRNb2RhbCgpKTtcbn07XG5cblxuZXhwb3J0IHsgXG4gIHN3ZWV0QWxlcnRJbml0aWFsaXplLFxuICBnZXRNb2RhbCxcbiAgZ2V0T3ZlcmxheSxcbiAgZ2V0SW5wdXQsXG4gIHNldEZvY3VzU3R5bGUsXG4gIG9wZW5Nb2RhbCxcbiAgcmVzZXRJbnB1dCxcbiAgcmVzZXRJbnB1dEVycm9yLFxuICBmaXhWZXJ0aWNhbFBvc2l0aW9uXG59O1xuIiwidmFyIGluamVjdGVkSFRNTCA9IFxuXG4gIC8vIERhcmsgb3ZlcmxheVxuICBgPGRpdiBjbGFzcz1cInN3ZWV0LW92ZXJsYXlcIiB0YWJJbmRleD1cIi0xXCI+PC9kaXY+YCArXG5cbiAgLy8gTW9kYWxcbiAgYDxkaXYgY2xhc3M9XCJzd2VldC1hbGVydFwiPmAgK1xuXG4gICAgLy8gRXJyb3IgaWNvblxuICAgIGA8ZGl2IGNsYXNzPVwic2EtaWNvbiBzYS1lcnJvclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzYS14LW1hcmtcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzYS1saW5lIHNhLWxlZnRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2EtbGluZSBzYS1yaWdodFwiPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5gICtcblxuICAgIC8vIFdhcm5pbmcgaWNvblxuICAgIGA8ZGl2IGNsYXNzPVwic2EtaWNvbiBzYS13YXJuaW5nXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNhLWJvZHlcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cInNhLWRvdFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5gICtcblxuICAgIC8vIEluZm8gaWNvblxuICAgIGA8ZGl2IGNsYXNzPVwic2EtaWNvbiBzYS1pbmZvXCI+PC9kaXY+YCArXG5cbiAgICAvLyBTdWNjZXNzIGljb25cbiAgICBgPGRpdiBjbGFzcz1cInNhLWljb24gc2Etc3VjY2Vzc1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzYS1saW5lIHNhLXRpcFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2EtbGluZSBzYS1sb25nXCI+PC9zcGFuPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2EtcGxhY2Vob2xkZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzYS1maXhcIj48L2Rpdj5cbiAgICA8L2Rpdj5gICtcblxuICAgIGA8ZGl2IGNsYXNzPVwic2EtaWNvbiBzYS1jdXN0b21cIj48L2Rpdj5gICtcblxuICAgIC8vIFRpdGxlLCB0ZXh0IGFuZCBpbnB1dFxuICAgIGA8aDI+VGl0bGU8L2gyPlxuICAgIDxwPlRleHQ8L3A+XG4gICAgPGZpZWxkc2V0PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdGFiSW5kZXg9XCIzXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJzYS1pbnB1dC1lcnJvclwiPjwvZGl2PlxuICAgIDwvZmllbGRzZXQ+YCArXG5cbiAgICAvLyBJbnB1dCBlcnJvcnNcbiAgICBgPGRpdiBjbGFzcz1cInNhLWVycm9yLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj4hPC9kaXY+XG4gICAgICA8cD5Ob3QgdmFsaWQhPC9wPlxuICAgIDwvZGl2PmAgK1xuXG4gICAgLy8gQ2FuY2VsIGFuZCBjb25maXJtIGJ1dHRvbnNcbiAgICBgPGRpdiBjbGFzcz1cInNhLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxcIiB0YWJJbmRleD1cIjJcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzYS1jb25maXJtLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbmZpcm1cIiB0YWJJbmRleD1cIjFcIj5PSzwvYnV0dG9uPmAgKyBcblxuICAgICAgICAvLyBMb2FkaW5nIGFuaW1hdGlvblxuICAgICAgICBgPGRpdiBjbGFzcz1cImxhLWJhbGwtZmFsbFwiPlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmAgK1xuXG4gIC8vIEVuZCBvZiBtb2RhbFxuICBgPC9kaXY+YDtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0ZWRIVE1MO1xuIiwidmFyIGFsZXJ0VHlwZXMgPSBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnaW5mbycsICdzdWNjZXNzJywgJ2lucHV0JywgJ3Byb21wdCddO1xuXG5pbXBvcnQge1xuICBpc0lFOFxufSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgZ2V0TW9kYWwsXG4gIGdldElucHV0LFxuICBzZXRGb2N1c1N0eWxlXG59IGZyb20gJy4vaGFuZGxlLXN3YWwtZG9tJztcblxuaW1wb3J0IHtcbiAgaGFzQ2xhc3MsIGFkZENsYXNzLCByZW1vdmVDbGFzcyxcbiAgZXNjYXBlSHRtbCxcbiAgX3Nob3csIHNob3csIF9oaWRlLCBoaWRlXG59IGZyb20gJy4vaGFuZGxlLWRvbSc7XG5cblxuLypcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIG1vZGFsXG4gKi9cbnZhciBzZXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHZhciBtb2RhbCA9IGdldE1vZGFsKCk7XG5cbiAgdmFyICR0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gIHZhciAkdGV4dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgdmFyICRjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gIHZhciAkY29uZmlybUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG5cbiAgLypcbiAgICogVGl0bGVcbiAgICovXG4gICR0aXRsZS5pbm5lckhUTUwgPSBwYXJhbXMuaHRtbCA/IHBhcmFtcy50aXRsZSA6IGVzY2FwZUh0bWwocGFyYW1zLnRpdGxlKS5zcGxpdCgnXFxuJykuam9pbignPGJyPicpO1xuXG4gIC8qXG4gICAqIFRleHRcbiAgICovXG4gICR0ZXh0LmlubmVySFRNTCA9IHBhcmFtcy5odG1sID8gcGFyYW1zLnRleHQgOiBlc2NhcGVIdG1sKHBhcmFtcy50ZXh0IHx8ICcnKS5zcGxpdCgnXFxuJykuam9pbignPGJyPicpO1xuICBpZiAocGFyYW1zLnRleHQpIHNob3coJHRleHQpO1xuXG4gIC8qXG4gICAqIEN1c3RvbSBjbGFzc1xuICAgKi9cbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgIGFkZENsYXNzKG1vZGFsLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1jdXN0b20tY2xhc3MnLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZpbmQgcHJldmlvdXNseSBzZXQgY2xhc3NlcyBhbmQgcmVtb3ZlIHRoZW1cbiAgICBsZXQgY3VzdG9tQ2xhc3MgPSBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLWNsYXNzJyk7XG4gICAgcmVtb3ZlQ2xhc3MobW9kYWwsIGN1c3RvbUNsYXNzKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLWNsYXNzJywgJycpO1xuICB9XG5cbiAgLypcbiAgICogSWNvblxuICAgKi9cbiAgaGlkZShtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2EtaWNvbicpKTtcblxuICBpZiAocGFyYW1zLnR5cGUgJiYgIWlzSUU4KCkpIHtcblxuICAgIGxldCB2YWxpZFR5cGUgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxlcnRUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSBhbGVydFR5cGVzW2ldKSB7XG4gICAgICAgIHZhbGlkVHlwZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICBsb2dTdHIoJ1Vua25vd24gYWxlcnQgdHlwZTogJyArIHBhcmFtcy50eXBlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgdHlwZXNXaXRoSWNvbnMgPSBbJ3N1Y2Nlc3MnLCAnZXJyb3InLCAnd2FybmluZycsICdpbmZvJ107XG4gICAgbGV0ICRpY29uO1xuXG4gICAgaWYgKHR5cGVzV2l0aEljb25zLmluZGV4T2YocGFyYW1zLnR5cGUpICE9PSAtMSkge1xuICAgICAgJGljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi4nICsgJ3NhLScgKyBwYXJhbXMudHlwZSk7XG4gICAgICBzaG93KCRpY29uKTtcbiAgICB9XG5cbiAgICBsZXQgJGlucHV0ID0gZ2V0SW5wdXQoKTtcblxuICAgIC8vIEFuaW1hdGUgaWNvblxuICAgIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcblxuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIGFkZENsYXNzKCRpY29uLCAnYW5pbWF0ZScpO1xuICAgICAgICBhZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtdGlwJyksICdhbmltYXRlU3VjY2Vzc1RpcCcpO1xuICAgICAgICBhZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtbG9uZycpLCAnYW5pbWF0ZVN1Y2Nlc3NMb25nJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGFkZENsYXNzKCRpY29uLCAnYW5pbWF0ZUVycm9ySWNvbicpO1xuICAgICAgICBhZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EteC1tYXJrJyksICdhbmltYXRlWE1hcmsnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICBhZGRDbGFzcygkaWNvbiwgJ3B1bHNlV2FybmluZycpO1xuICAgICAgICBhZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtYm9keScpLCAncHVsc2VXYXJuaW5nSW5zJyk7XG4gICAgICAgIGFkZENsYXNzKCRpY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1kb3QnKSwgJ3B1bHNlV2FybmluZ0lucycpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgY2FzZSAncHJvbXB0JzpcbiAgICAgICAgJGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHBhcmFtcy5pbnB1dFR5cGUpO1xuICAgICAgICAkaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgJGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICAgIGFkZENsYXNzKG1vZGFsLCAnc2hvdy1pbnB1dCcpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAkaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzd2FsLnJlc2V0SW5wdXRFcnJvcik7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEN1c3RvbSBpbWFnZVxuICAgKi9cbiAgaWYgKHBhcmFtcy5pbWFnZVVybCkge1xuICAgIGxldCAkY3VzdG9tSWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLnNhLWN1c3RvbScpO1xuXG4gICAgJGN1c3RvbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcGFyYW1zLmltYWdlVXJsICsgJyknO1xuICAgIHNob3coJGN1c3RvbUljb24pO1xuXG4gICAgbGV0IF9pbWdXaWR0aCA9IDgwO1xuICAgIGxldCBfaW1nSGVpZ2h0ID0gODA7XG5cbiAgICBpZiAocGFyYW1zLmltYWdlU2l6ZSkge1xuICAgICAgbGV0IGRpbWVuc2lvbnMgPSBwYXJhbXMuaW1hZ2VTaXplLnRvU3RyaW5nKCkuc3BsaXQoJ3gnKTtcbiAgICAgIGxldCBpbWdXaWR0aCA9IGRpbWVuc2lvbnNbMF07XG4gICAgICBsZXQgaW1nSGVpZ2h0ID0gZGltZW5zaW9uc1sxXTtcblxuICAgICAgaWYgKCFpbWdXaWR0aCB8fCAhaW1nSGVpZ2h0KSB7XG4gICAgICAgIGxvZ1N0cignUGFyYW1ldGVyIGltYWdlU2l6ZSBleHBlY3RzIHZhbHVlIHdpdGggZm9ybWF0IFdJRFRIeEhFSUdIVCwgZ290ICcgKyBwYXJhbXMuaW1hZ2VTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pbWdXaWR0aCA9IGltZ1dpZHRoO1xuICAgICAgICBfaW1nSGVpZ2h0ID0gaW1nSGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgICRjdXN0b21JY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAkY3VzdG9tSWNvbi5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgKyAnd2lkdGg6JyArIF9pbWdXaWR0aCArICdweDsgaGVpZ2h0OicgKyBfaW1nSGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cblxuICAvKlxuICAgKiBTaG93IGNhbmNlbCBidXR0b24/XG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWNhbmNlbC1idXR0b24nLCBwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbik7XG4gIGlmIChwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICRjYW5jZWxCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoJGNhbmNlbEJ0bik7XG4gIH1cblxuICAvKlxuICAgKiBTaG93IGNvbmZpcm0gYnV0dG9uP1xuICAgKi9cbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy1jb25maXJtLWJ1dHRvbicsIHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbik7XG4gIGlmIChwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICAkY29uZmlybUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgaGlkZSgkY29uZmlybUJ0bik7XG4gIH1cblxuICAvKlxuICAgKiBDdXN0b20gdGV4dCBvbiBjYW5jZWwvY29uZmlybSBidXR0b25zXG4gICAqL1xuICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvblRleHQpIHtcbiAgICAkY2FuY2VsQnRuLmlubmVySFRNTCA9IGVzY2FwZUh0bWwocGFyYW1zLmNhbmNlbEJ1dHRvblRleHQpO1xuICB9XG4gIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvblRleHQpIHtcbiAgICAkY29uZmlybUJ0bi5pbm5lckhUTUwgPSBlc2NhcGVIdG1sKHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dCk7XG4gIH1cblxuICAvKlxuICAgKiBDdXN0b20gY29sb3Igb24gY29uZmlybSBidXR0b25cbiAgICovXG4gIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgLy8gU2V0IGNvbmZpcm0gYnV0dG9uIHRvIHNlbGVjdGVkIGJhY2tncm91bmQgY29sb3JcbiAgICAkY29uZmlybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuXG4gICAgLy8gU2V0IHRoZSBjb25maXJtIGJ1dHRvbiBjb2xvciB0byB0aGUgbG9hZGluZyByaW5nXG4gICAgJGNvbmZpcm1CdG4uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gcGFyYW1zLmNvbmZpcm1Mb2FkaW5nQnV0dG9uQ29sb3I7XG4gICAgJGNvbmZpcm1CdG4uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IHBhcmFtcy5jb25maXJtTG9hZGluZ0J1dHRvbkNvbG9yO1xuXG4gICAgLy8gU2V0IGJveC1zaGFkb3cgdG8gZGVmYXVsdCBmb2N1c2VkIGJ1dHRvblxuICAgIHNldEZvY3VzU3R5bGUoJGNvbmZpcm1CdG4sIHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpO1xuICB9XG5cbiAgLypcbiAgICogQWxsb3cgb3V0c2lkZSBjbGlja1xuICAgKi9cbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFsbG93LW91dHNpZGUtY2xpY2snLCBwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spO1xuXG4gIC8qXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uXG4gICAqL1xuICB2YXIgaGFzRG9uZUZ1bmN0aW9uID0gcGFyYW1zLmRvbmVGdW5jdGlvbiA/IHRydWUgOiBmYWxzZTtcbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy1kb25lLWZ1bmN0aW9uJywgaGFzRG9uZUZ1bmN0aW9uKTtcblxuICAvKlxuICAgKiBBbmltYXRpb25cbiAgICovXG4gIGlmICghcGFyYW1zLmFuaW1hdGlvbikge1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCAnbm9uZScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMuYW5pbWF0aW9uID09PSAnc3RyaW5nJykge1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCBwYXJhbXMuYW5pbWF0aW9uKTsgLy8gQ3VzdG9tIGFuaW1hdGlvblxuICB9IGVsc2Uge1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCAncG9wJyk7XG4gIH1cblxuICAvKlxuICAgKiBUaW1lclxuICAgKi9cbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLXRpbWVyJywgcGFyYW1zLnRpbWVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNldFBhcmFtZXRlcnM7XG4iLCIvKlxuICogQWxsb3cgdXNlciB0byBwYXNzIHRoZWlyIG93biBwYXJhbXNcbiAqL1xudmFyIGV4dGVuZCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBhO1xufTtcblxuLypcbiAqIENvbnZlcnQgSEVYIGNvZGVzIHRvIFJHQiB2YWx1ZXMgKCMwMDAwMDAgLT4gcmdiKDAsMCwwKSlcbiAqL1xudmFyIGhleFRvUmdiID0gZnVuY3Rpb24oaGV4KSB7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpICsgJywgJyArIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpICsgJywgJyArIHBhcnNlSW50KHJlc3VsdFszXSwgMTYpIDogbnVsbDtcbn07XG5cbi8qXG4gKiBDaGVjayBpZiB0aGUgdXNlciBpcyB1c2luZyBJbnRlcm5ldCBFeHBsb3JlciA4IChmb3IgZmFsbGJhY2tzKVxuICovXG52YXIgaXNJRTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh3aW5kb3cuYXR0YWNoRXZlbnQgJiYgIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKTtcbn07XG5cbi8qXG4gKiBJRSBjb21wYXRpYmxlIGxvZ2dpbmcgZm9yIGRldmVsb3BlcnNcbiAqL1xudmFyIGxvZ1N0ciA9IGZ1bmN0aW9uKHN0cmluZykge1xuICBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAvLyBJRS4uLlxuICAgIHdpbmRvdy5jb25zb2xlLmxvZygnU3dlZXRBbGVydDogJyArIHN0cmluZyk7XG4gIH1cbn07XG5cbi8qXG4gKiBTZXQgaG92ZXIsIGFjdGl2ZSBhbmQgZm9jdXMtc3RhdGVzIGZvciBidXR0b25zIFxuICogKHNvdXJjZTogaHR0cDovL3d3dy5zaXRlcG9pbnQuY29tL2phdmFzY3JpcHQtZ2VuZXJhdGUtbGlnaHRlci1kYXJrZXItY29sb3IpXG4gKi9cbnZhciBjb2xvckx1bWluYW5jZSA9IGZ1bmN0aW9uKGhleCwgbHVtKSB7XG4gIC8vIFZhbGlkYXRlIGhleCBzdHJpbmdcbiAgaGV4ID0gU3RyaW5nKGhleCkucmVwbGFjZSgvW14wLTlhLWZdL2dpLCAnJyk7XG4gIGlmIChoZXgubGVuZ3RoIDwgNikge1xuICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgfVxuICBsdW0gPSBsdW0gfHwgMDtcblxuICAvLyBDb252ZXJ0IHRvIGRlY2ltYWwgYW5kIGNoYW5nZSBsdW1pbm9zaXR5XG4gIHZhciByZ2IgPSAnIyc7XG4gIHZhciBjO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgYyA9IHBhcnNlSW50KGhleC5zdWJzdHIoaSAqIDIsIDIpLCAxNik7XG4gICAgYyA9IE1hdGgucm91bmQoTWF0aC5taW4oTWF0aC5tYXgoMCwgYyArIGMgKiBsdW0pLCAyNTUpKS50b1N0cmluZygxNik7XG4gICAgcmdiICs9ICgnMDAnICsgYykuc3Vic3RyKGMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiByZ2I7XG59O1xuXG5cbmV4cG9ydCB7XG4gIGV4dGVuZCxcbiAgaGV4VG9SZ2IsXG4gIGlzSUU4LFxuICBsb2dTdHIsXG4gIGNvbG9yTHVtaW5hbmNlXG59O1xuIl19

  
  /*
   * Use SweetAlert with RequireJS
   */
  
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return sweetAlert;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = sweetAlert;
  }

})(window, document);
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.io = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

    module.exports =  _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

    module.exports = _dereq_('./socket');

    /**
     * Exports parser
     *
     * @api public
     *
     */
    module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":3,"engine.io-parser":19}],3:[function(_dereq_,module,exports){
    (function (global){
        /**
         * Module dependencies.
         */

        var transports = _dereq_('./transports');
        var Emitter = _dereq_('component-emitter');
        var debug = _dereq_('debug')('engine.io-client:socket');
        var index = _dereq_('indexof');
        var parser = _dereq_('engine.io-parser');
        var parseuri = _dereq_('parseuri');
        var parsejson = _dereq_('parsejson');
        var parseqs = _dereq_('parseqs');

        /**
         * Module exports.
         */

        module.exports = Socket;

        /**
         * Noop function.
         *
         * @api private
         */

        function noop(){}

        /**
         * Socket constructor.
         *
         * @param {String|Object} uri or options
         * @param {Object} options
         * @api public
         */

        function Socket(uri, opts){
            if (!(this instanceof Socket)) return new Socket(uri, opts);

            opts = opts || {};

            if (uri && 'object' == typeof uri) {
                opts = uri;
                uri = null;
            }

            if (uri) {
                uri = parseuri(uri);
                opts.hostname = uri.host;
                opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
                opts.port = uri.port;
                if (uri.query) opts.query = uri.query;
            } else if (opts.host) {
                opts.hostname = parseuri(opts.host).host;
            }

            this.secure = null != opts.secure ? opts.secure :
                (global.location && 'https:' == location.protocol);

            if (opts.hostname && !opts.port) {
                // if no port is specified manually, use the protocol default
                opts.port = this.secure ? '443' : '80';
            }

            this.agent = opts.agent || false;
            this.hostname = opts.hostname ||
                (global.location ? location.hostname : 'localhost');
            this.port = opts.port || (global.location && location.port ?
                    location.port :
                    (this.secure ? 443 : 80));
            this.query = opts.query || {};
            if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
            this.upgrade = false !== opts.upgrade;
            this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
            this.forceJSONP = !!opts.forceJSONP;
            this.jsonp = false !== opts.jsonp;
            this.forceBase64 = !!opts.forceBase64;
            this.enablesXDR = !!opts.enablesXDR;
            this.timestampParam = opts.timestampParam || 't';
            this.timestampRequests = opts.timestampRequests;
            this.transports = opts.transports || ['polling', 'websocket'];
            this.readyState = '';
            this.writeBuffer = [];
            this.policyPort = opts.policyPort || 843;
            this.rememberUpgrade = opts.rememberUpgrade || false;
            this.binaryType = null;
            this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
            this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

            if (true === this.perMessageDeflate) this.perMessageDeflate = {};
            if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
                this.perMessageDeflate.threshold = 1024;
            }

            // SSL options for Node.js client
            this.pfx = opts.pfx || null;
            this.key = opts.key || null;
            this.passphrase = opts.passphrase || null;
            this.cert = opts.cert || null;
            this.ca = opts.ca || null;
            this.ciphers = opts.ciphers || null;
            this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

            // other options for Node.js client
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal) {
                if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
                    this.extraHeaders = opts.extraHeaders;
                }
            }

            this.open();
        }

        Socket.priorWebsocketSuccess = false;

        /**
         * Mix in `Emitter`.
         */

        Emitter(Socket.prototype);

        /**
         * Protocol version.
         *
         * @api public
         */

        Socket.protocol = parser.protocol; // this is an int

        /**
         * Expose deps for legacy compatibility
         * and standalone browser access.
         */

        Socket.Socket = Socket;
        Socket.Transport = _dereq_('./transport');
        Socket.transports = _dereq_('./transports');
        Socket.parser = _dereq_('engine.io-parser');

        /**
         * Creates transport of the given type.
         *
         * @param {String} transport name
         * @return {Transport}
         * @api private
         */

        Socket.prototype.createTransport = function (name) {
            debug('creating transport "%s"', name);
            var query = clone(this.query);

            // append engine.io protocol identifier
            query.EIO = parser.protocol;

            // transport name
            query.transport = name;

            // session id if we already have one
            if (this.id) query.sid = this.id;

            var transport = new transports[name]({
                agent: this.agent,
                hostname: this.hostname,
                port: this.port,
                secure: this.secure,
                path: this.path,
                query: query,
                forceJSONP: this.forceJSONP,
                jsonp: this.jsonp,
                forceBase64: this.forceBase64,
                enablesXDR: this.enablesXDR,
                timestampRequests: this.timestampRequests,
                timestampParam: this.timestampParam,
                policyPort: this.policyPort,
                socket: this,
                pfx: this.pfx,
                key: this.key,
                passphrase: this.passphrase,
                cert: this.cert,
                ca: this.ca,
                ciphers: this.ciphers,
                rejectUnauthorized: this.rejectUnauthorized,
                perMessageDeflate: this.perMessageDeflate,
                extraHeaders: this.extraHeaders
            });

            return transport;
        };

        function clone (obj) {
            var o = {};
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    o[i] = obj[i];
                }
            }
            return o;
        }

        /**
         * Initializes transport to use and starts probe.
         *
         * @api private
         */
        Socket.prototype.open = function () {
            var transport;
            if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
                transport = 'websocket';
            } else if (0 === this.transports.length) {
                // Emit error on next tick so it can be listened to
                var self = this;
                setTimeout(function() {
                    self.emit('error', 'No transports available');
                }, 0);
                return;
            } else {
                transport = this.transports[0];
            }
            this.readyState = 'opening';

            // Retry with the next transport if the transport is disabled (jsonp: false)
            try {
                transport = this.createTransport(transport);
            } catch (e) {
                this.transports.shift();
                this.open();
                return;
            }

            transport.open();
            this.setTransport(transport);
        };

        /**
         * Sets the current transport. Disables the existing one (if any).
         *
         * @api private
         */

        Socket.prototype.setTransport = function(transport){
            debug('setting transport %s', transport.name);
            var self = this;

            if (this.transport) {
                debug('clearing existing transport %s', this.transport.name);
                this.transport.removeAllListeners();
            }

            // set up transport
            this.transport = transport;

            // set up transport listeners
            transport
                .on('drain', function(){
                    self.onDrain();
                })
                .on('packet', function(packet){
                    self.onPacket(packet);
                })
                .on('error', function(e){
                    self.onError(e);
                })
                .on('close', function(){
                    self.onClose('transport close');
                });
        };

        /**
         * Probes a transport.
         *
         * @param {String} transport name
         * @api private
         */

        Socket.prototype.probe = function (name) {
            debug('probing transport "%s"', name);
            var transport = this.createTransport(name, { probe: 1 })
                , failed = false
                , self = this;

            Socket.priorWebsocketSuccess = false;

            function onTransportOpen(){
                if (self.onlyBinaryUpgrades) {
                    var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                    failed = failed || upgradeLosesBinary;
                }
                if (failed) return;

                debug('probe transport "%s" opened', name);
                transport.send([{ type: 'ping', data: 'probe' }]);
                transport.once('packet', function (msg) {
                    if (failed) return;
                    if ('pong' == msg.type && 'probe' == msg.data) {
                        debug('probe transport "%s" pong', name);
                        self.upgrading = true;
                        self.emit('upgrading', transport);
                        if (!transport) return;
                        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

                        debug('pausing current transport "%s"', self.transport.name);
                        self.transport.pause(function () {
                            if (failed) return;
                            if ('closed' == self.readyState) return;
                            debug('changing transport and sending upgrade packet');

                            cleanup();

                            self.setTransport(transport);
                            transport.send([{ type: 'upgrade' }]);
                            self.emit('upgrade', transport);
                            transport = null;
                            self.upgrading = false;
                            self.flush();
                        });
                    } else {
                        debug('probe transport "%s" failed', name);
                        var err = new Error('probe error');
                        err.transport = transport.name;
                        self.emit('upgradeError', err);
                    }
                });
            }

            function freezeTransport() {
                if (failed) return;

                // Any callback called by transport should be ignored since now
                failed = true;

                cleanup();

                transport.close();
                transport = null;
            }

            //Handle any error that happens while probing
            function onerror(err) {
                var error = new Error('probe error: ' + err);
                error.transport = transport.name;

                freezeTransport();

                debug('probe transport "%s" failed because of error: %s', name, err);

                self.emit('upgradeError', error);
            }

            function onTransportClose(){
                onerror("transport closed");
            }

            //When the socket is closed while we're probing
            function onclose(){
                onerror("socket closed");
            }

            //When the socket is upgraded while we're probing
            function onupgrade(to){
                if (transport && to.name != transport.name) {
                    debug('"%s" works - aborting "%s"', to.name, transport.name);
                    freezeTransport();
                }
            }

            //Remove all listeners on the transport and on self
            function cleanup(){
                transport.removeListener('open', onTransportOpen);
                transport.removeListener('error', onerror);
                transport.removeListener('close', onTransportClose);
                self.removeListener('close', onclose);
                self.removeListener('upgrading', onupgrade);
            }

            transport.once('open', onTransportOpen);
            transport.once('error', onerror);
            transport.once('close', onTransportClose);

            this.once('close', onclose);
            this.once('upgrading', onupgrade);

            transport.open();

        };

        /**
         * Called when connection is deemed open.
         *
         * @api public
         */

        Socket.prototype.onOpen = function () {
            debug('socket open');
            this.readyState = 'open';
            Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
            this.emit('open');
            this.flush();

            // we check for `readyState` in case an `open`
            // listener already closed the socket
            if ('open' == this.readyState && this.upgrade && this.transport.pause) {
                debug('starting upgrade probes');
                for (var i = 0, l = this.upgrades.length; i < l; i++) {
                    this.probe(this.upgrades[i]);
                }
            }
        };

        /**
         * Handles a packet.
         *
         * @api private
         */

        Socket.prototype.onPacket = function (packet) {
            if ('opening' == this.readyState || 'open' == this.readyState) {
                debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

                this.emit('packet', packet);

                // Socket is live - any packet counts
                this.emit('heartbeat');

                switch (packet.type) {
                    case 'open':
                        this.onHandshake(parsejson(packet.data));
                        break;

                    case 'pong':
                        this.setPing();
                        this.emit('pong');
                        break;

                    case 'error':
                        var err = new Error('server error');
                        err.code = packet.data;
                        this.onError(err);
                        break;

                    case 'message':
                        this.emit('data', packet.data);
                        this.emit('message', packet.data);
                        break;
                }
            } else {
                debug('packet received with socket readyState "%s"', this.readyState);
            }
        };

        /**
         * Called upon handshake completion.
         *
         * @param {Object} handshake obj
         * @api private
         */

        Socket.prototype.onHandshake = function (data) {
            this.emit('handshake', data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this.upgrades = this.filterUpgrades(data.upgrades);
            this.pingInterval = data.pingInterval;
            this.pingTimeout = data.pingTimeout;
            this.onOpen();
            // In case open handler closes socket
            if  ('closed' == this.readyState) return;
            this.setPing();

            // Prolong liveness of socket on heartbeat
            this.removeListener('heartbeat', this.onHeartbeat);
            this.on('heartbeat', this.onHeartbeat);
        };

        /**
         * Resets ping timeout.
         *
         * @api private
         */

        Socket.prototype.onHeartbeat = function (timeout) {
            clearTimeout(this.pingTimeoutTimer);
            var self = this;
            self.pingTimeoutTimer = setTimeout(function () {
                if ('closed' == self.readyState) return;
                self.onClose('ping timeout');
            }, timeout || (self.pingInterval + self.pingTimeout));
        };

        /**
         * Pings server every `this.pingInterval` and expects response
         * within `this.pingTimeout` or closes connection.
         *
         * @api private
         */

        Socket.prototype.setPing = function () {
            var self = this;
            clearTimeout(self.pingIntervalTimer);
            self.pingIntervalTimer = setTimeout(function () {
                debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
                self.ping();
                self.onHeartbeat(self.pingTimeout);
            }, self.pingInterval);
        };

        /**
         * Sends a ping packet.
         *
         * @api private
         */

        Socket.prototype.ping = function () {
            var self = this;
            this.sendPacket('ping', function(){
                self.emit('ping');
            });
        };

        /**
         * Called on `drain` event
         *
         * @api private
         */

        Socket.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen);

            // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`
            this.prevBufferLen = 0;

            if (0 === this.writeBuffer.length) {
                this.emit('drain');
            } else {
                this.flush();
            }
        };

        /**
         * Flush write buffers.
         *
         * @api private
         */

        Socket.prototype.flush = function () {
            if ('closed' != this.readyState && this.transport.writable &&
                !this.upgrading && this.writeBuffer.length) {
                debug('flushing %d packets in socket', this.writeBuffer.length);
                this.transport.send(this.writeBuffer);
                // keep track of current length of writeBuffer
                // splice writeBuffer and callbackBuffer on `drain`
                this.prevBufferLen = this.writeBuffer.length;
                this.emit('flush');
            }
        };

        /**
         * Sends a message.
         *
         * @param {String} message.
         * @param {Function} callback function.
         * @param {Object} options.
         * @return {Socket} for chaining.
         * @api public
         */

        Socket.prototype.write =
            Socket.prototype.send = function (msg, options, fn) {
                this.sendPacket('message', msg, options, fn);
                return this;
            };

        /**
         * Sends a packet.
         *
         * @param {String} packet type.
         * @param {String} data.
         * @param {Object} options.
         * @param {Function} callback function.
         * @api private
         */

        Socket.prototype.sendPacket = function (type, data, options, fn) {
            if('function' == typeof data) {
                fn = data;
                data = undefined;
            }

            if ('function' == typeof options) {
                fn = options;
                options = null;
            }

            if ('closing' == this.readyState || 'closed' == this.readyState) {
                return;
            }

            options = options || {};
            options.compress = false !== options.compress;

            var packet = {
                type: type,
                data: data,
                options: options
            };
            this.emit('packetCreate', packet);
            this.writeBuffer.push(packet);
            if (fn) this.once('flush', fn);
            this.flush();
        };

        /**
         * Closes the connection.
         *
         * @api private
         */

        Socket.prototype.close = function () {
            if ('opening' == this.readyState || 'open' == this.readyState) {
                this.readyState = 'closing';

                var self = this;

                if (this.writeBuffer.length) {
                    this.once('drain', function() {
                        if (this.upgrading) {
                            waitForUpgrade();
                        } else {
                            close();
                        }
                    });
                } else if (this.upgrading) {
                    waitForUpgrade();
                } else {
                    close();
                }
            }

            function close() {
                self.onClose('forced close');
                debug('socket closing - telling transport to close');
                self.transport.close();
            }

            function cleanupAndClose() {
                self.removeListener('upgrade', cleanupAndClose);
                self.removeListener('upgradeError', cleanupAndClose);
                close();
            }

            function waitForUpgrade() {
                // wait for upgrade to finish since we can't send packets while pausing a transport
                self.once('upgrade', cleanupAndClose);
                self.once('upgradeError', cleanupAndClose);
            }

            return this;
        };

        /**
         * Called upon transport error
         *
         * @api private
         */

        Socket.prototype.onError = function (err) {
            debug('socket error %j', err);
            Socket.priorWebsocketSuccess = false;
            this.emit('error', err);
            this.onClose('transport error', err);
        };

        /**
         * Called upon transport close.
         *
         * @api private
         */

        Socket.prototype.onClose = function (reason, desc) {
            if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
                debug('socket close with reason: "%s"', reason);
                var self = this;

                // clear timers
                clearTimeout(this.pingIntervalTimer);
                clearTimeout(this.pingTimeoutTimer);

                // stop event from firing again for transport
                this.transport.removeAllListeners('close');

                // ensure transport won't stay open
                this.transport.close();

                // ignore further transport communication
                this.transport.removeAllListeners();

                // set ready state
                this.readyState = 'closed';

                // clear session id
                this.id = null;

                // emit close event
                this.emit('close', reason, desc);

                // clean buffers after, so users can still
                // grab the buffers on `close` event
                self.writeBuffer = [];
                self.prevBufferLen = 0;
            }
        };

        /**
         * Filters upgrades, returning only those matching client transports.
         *
         * @param {Array} server upgrades
         * @api private
         *
         */

        Socket.prototype.filterUpgrades = function (upgrades) {
            var filteredUpgrades = [];
            for (var i = 0, j = upgrades.length; i<j; i++) {
                if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
            }
            return filteredUpgrades;
        };

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./transport":4,"./transports":5,"component-emitter":15,"debug":17,"engine.io-parser":19,"indexof":23,"parsejson":26,"parseqs":27,"parseuri":28}],4:[function(_dereq_,module,exports){
    /**
     * Module dependencies.
     */

    var parser = _dereq_('engine.io-parser');
    var Emitter = _dereq_('component-emitter');

    /**
     * Module exports.
     */

    module.exports = Transport;

    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */

    function Transport (opts) {
        this.path = opts.path;
        this.hostname = opts.hostname;
        this.port = opts.port;
        this.secure = opts.secure;
        this.query = opts.query;
        this.timestampParam = opts.timestampParam;
        this.timestampRequests = opts.timestampRequests;
        this.readyState = '';
        this.agent = opts.agent || false;
        this.socket = opts.socket;
        this.enablesXDR = opts.enablesXDR;

        // SSL options for Node.js client
        this.pfx = opts.pfx;
        this.key = opts.key;
        this.passphrase = opts.passphrase;
        this.cert = opts.cert;
        this.ca = opts.ca;
        this.ciphers = opts.ciphers;
        this.rejectUnauthorized = opts.rejectUnauthorized;

        // other options for Node.js client
        this.extraHeaders = opts.extraHeaders;
    }

    /**
     * Mix in `Emitter`.
     */

    Emitter(Transport.prototype);

    /**
     * Emits an error.
     *
     * @param {String} str
     * @return {Transport} for chaining
     * @api public
     */

    Transport.prototype.onError = function (msg, desc) {
        var err = new Error(msg);
        err.type = 'TransportError';
        err.description = desc;
        this.emit('error', err);
        return this;
    };

    /**
     * Opens the transport.
     *
     * @api public
     */

    Transport.prototype.open = function () {
        if ('closed' == this.readyState || '' == this.readyState) {
            this.readyState = 'opening';
            this.doOpen();
        }

        return this;
    };

    /**
     * Closes the transport.
     *
     * @api private
     */

    Transport.prototype.close = function () {
        if ('opening' == this.readyState || 'open' == this.readyState) {
            this.doClose();
            this.onClose();
        }

        return this;
    };

    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api private
     */

    Transport.prototype.send = function(packets){
        if ('open' == this.readyState) {
            this.write(packets);
        } else {
            throw new Error('Transport not open');
        }
    };

    /**
     * Called upon open
     *
     * @api private
     */

    Transport.prototype.onOpen = function () {
        this.readyState = 'open';
        this.writable = true;
        this.emit('open');
    };

    /**
     * Called with data.
     *
     * @param {String} data
     * @api private
     */

    Transport.prototype.onData = function(data){
        var packet = parser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    };

    /**
     * Called with a decoded packet.
     */

    Transport.prototype.onPacket = function (packet) {
        this.emit('packet', packet);
    };

    /**
     * Called upon close.
     *
     * @api private
     */

    Transport.prototype.onClose = function () {
        this.readyState = 'closed';
        this.emit('close');
    };

},{"component-emitter":15,"engine.io-parser":19}],5:[function(_dereq_,module,exports){
    (function (global){
        /**
         * Module dependencies
         */

        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var XHR = _dereq_('./polling-xhr');
        var JSONP = _dereq_('./polling-jsonp');
        var websocket = _dereq_('./websocket');

        /**
         * Export transports.
         */

        exports.polling = polling;
        exports.websocket = websocket;

        /**
         * Polling transport polymorphic constructor.
         * Decides on xhr vs jsonp based on feature detection.
         *
         * @api private
         */

        function polling(opts){
            var xhr;
            var xd = false;
            var xs = false;
            var jsonp = false !== opts.jsonp;

            if (global.location) {
                var isSSL = 'https:' == location.protocol;
                var port = location.port;

                // some user agents have empty `location.port`
                if (!port) {
                    port = isSSL ? 443 : 80;
                }

                xd = opts.hostname != location.hostname || port != opts.port;
                xs = opts.secure != isSSL;
            }

            opts.xdomain = xd;
            opts.xscheme = xs;
            xhr = new XMLHttpRequest(opts);

            if ('open' in xhr && !opts.forceJSONP) {
                return new XHR(opts);
            } else {
                if (!jsonp) throw new Error('JSONP disabled');
                return new JSONP(opts);
            }
        }

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(_dereq_,module,exports){
    (function (global){

        /**
         * Module requirements.
         */

        var Polling = _dereq_('./polling');
        var inherit = _dereq_('component-inherit');

        /**
         * Module exports.
         */

        module.exports = JSONPPolling;

        /**
         * Cached regular expressions.
         */

        var rNewline = /\n/g;
        var rEscapedNewline = /\\n/g;

        /**
         * Global JSONP callbacks.
         */

        var callbacks;

        /**
         * Callbacks count.
         */

        var index = 0;

        /**
         * Noop.
         */

        function empty () { }

        /**
         * JSONP Polling constructor.
         *
         * @param {Object} opts.
         * @api public
         */

        function JSONPPolling (opts) {
            Polling.call(this, opts);

            this.query = this.query || {};

            // define global callbacks array if not present
            // we do this here (lazily) to avoid unneeded global pollution
            if (!callbacks) {
                // we need to consider multiple engines in the same page
                if (!global.___eio) global.___eio = [];
                callbacks = global.___eio;
            }

            // callback identifier
            this.index = callbacks.length;

            // add callback to jsonp global
            var self = this;
            callbacks.push(function (msg) {
                self.onData(msg);
            });

            // append to query string
            this.query.j = this.index;

            // prevent spurious errors from being emitted when the window is unloaded
            if (global.document && global.addEventListener) {
                global.addEventListener('beforeunload', function () {
                    if (self.script) self.script.onerror = empty;
                }, false);
            }
        }

        /**
         * Inherits from Polling.
         */

        inherit(JSONPPolling, Polling);

        /*
         * JSONP only supports binary as base64 encoded strings
         */

        JSONPPolling.prototype.supportsBinary = false;

        /**
         * Closes the socket.
         *
         * @api private
         */

        JSONPPolling.prototype.doClose = function () {
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null;
            }

            if (this.form) {
                this.form.parentNode.removeChild(this.form);
                this.form = null;
                this.iframe = null;
            }

            Polling.prototype.doClose.call(this);
        };

        /**
         * Starts a poll cycle.
         *
         * @api private
         */

        JSONPPolling.prototype.doPoll = function () {
            var self = this;
            var script = document.createElement('script');

            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null;
            }

            script.async = true;
            script.src = this.uri();
            script.onerror = function(e){
                self.onError('jsonp poll error',e);
            };

            var insertAt = document.getElementsByTagName('script')[0];
            if (insertAt) {
                insertAt.parentNode.insertBefore(script, insertAt);
            }
            else {
                (document.head || document.body).appendChild(script);
            }
            this.script = script;

            var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);

            if (isUAgecko) {
                setTimeout(function () {
                    var iframe = document.createElement('iframe');
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe);
                }, 100);
            }
        };

        /**
         * Writes with a hidden iframe.
         *
         * @param {String} data to send
         * @param {Function} called upon flush.
         * @api private
         */

        JSONPPolling.prototype.doWrite = function (data, fn) {
            var self = this;

            if (!this.form) {
                var form = document.createElement('form');
                var area = document.createElement('textarea');
                var id = this.iframeId = 'eio_iframe_' + this.index;
                var iframe;

                form.className = 'socketio';
                form.style.position = 'absolute';
                form.style.top = '-1000px';
                form.style.left = '-1000px';
                form.target = id;
                form.method = 'POST';
                form.setAttribute('accept-charset', 'utf-8');
                area.name = 'd';
                form.appendChild(area);
                document.body.appendChild(form);

                this.form = form;
                this.area = area;
            }

            this.form.action = this.uri();

            function complete () {
                initIframe();
                fn();
            }

            function initIframe () {
                if (self.iframe) {
                    try {
                        self.form.removeChild(self.iframe);
                    } catch (e) {
                        self.onError('jsonp polling iframe removal error', e);
                    }
                }

                try {
                    // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
                    var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
                    iframe = document.createElement(html);
                } catch (e) {
                    iframe = document.createElement('iframe');
                    iframe.name = self.iframeId;
                    iframe.src = 'javascript:0';
                }

                iframe.id = self.iframeId;

                self.form.appendChild(iframe);
                self.iframe = iframe;
            }

            initIframe();

            // escape \n to prevent it from being converted into \r\n by some UAs
            // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
            data = data.replace(rEscapedNewline, '\\\n');
            this.area.value = data.replace(rNewline, '\\n');

            try {
                this.form.submit();
            } catch(e) {}

            if (this.iframe.attachEvent) {
                this.iframe.onreadystatechange = function(){
                    if (self.iframe.readyState == 'complete') {
                        complete();
                    }
                };
            } else {
                this.iframe.onload = complete;
            }
        };

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":8,"component-inherit":16}],7:[function(_dereq_,module,exports){
    (function (global){
        /**
         * Module requirements.
         */

        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var Polling = _dereq_('./polling');
        var Emitter = _dereq_('component-emitter');
        var inherit = _dereq_('component-inherit');
        var debug = _dereq_('debug')('engine.io-client:polling-xhr');

        /**
         * Module exports.
         */

        module.exports = XHR;
        module.exports.Request = Request;

        /**
         * Empty function
         */

        function empty(){}

        /**
         * XHR Polling constructor.
         *
         * @param {Object} opts
         * @api public
         */

        function XHR(opts){
            Polling.call(this, opts);

            if (global.location) {
                var isSSL = 'https:' == location.protocol;
                var port = location.port;

                // some user agents have empty `location.port`
                if (!port) {
                    port = isSSL ? 443 : 80;
                }

                this.xd = opts.hostname != global.location.hostname ||
                    port != opts.port;
                this.xs = opts.secure != isSSL;
            } else {
                this.extraHeaders = opts.extraHeaders;
            }
        }

        /**
         * Inherits from Polling.
         */

        inherit(XHR, Polling);

        /**
         * XHR supports binary
         */

        XHR.prototype.supportsBinary = true;

        /**
         * Creates a request.
         *
         * @param {String} method
         * @api private
         */

        XHR.prototype.request = function(opts){
            opts = opts || {};
            opts.uri = this.uri();
            opts.xd = this.xd;
            opts.xs = this.xs;
            opts.agent = this.agent || false;
            opts.supportsBinary = this.supportsBinary;
            opts.enablesXDR = this.enablesXDR;

            // SSL options for Node.js client
            opts.pfx = this.pfx;
            opts.key = this.key;
            opts.passphrase = this.passphrase;
            opts.cert = this.cert;
            opts.ca = this.ca;
            opts.ciphers = this.ciphers;
            opts.rejectUnauthorized = this.rejectUnauthorized;

            // other options for Node.js client
            opts.extraHeaders = this.extraHeaders;

            return new Request(opts);
        };

        /**
         * Sends data.
         *
         * @param {String} data to send.
         * @param {Function} called upon flush.
         * @api private
         */

        XHR.prototype.doWrite = function(data, fn){
            var isBinary = typeof data !== 'string' && data !== undefined;
            var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
            var self = this;
            req.on('success', fn);
            req.on('error', function(err){
                self.onError('xhr post error', err);
            });
            this.sendXhr = req;
        };

        /**
         * Starts a poll cycle.
         *
         * @api private
         */

        XHR.prototype.doPoll = function(){
            debug('xhr poll');
            var req = this.request();
            var self = this;
            req.on('data', function(data){
                self.onData(data);
            });
            req.on('error', function(err){
                self.onError('xhr poll error', err);
            });
            this.pollXhr = req;
        };

        /**
         * Request constructor
         *
         * @param {Object} options
         * @api public
         */

        function Request(opts){
            this.method = opts.method || 'GET';
            this.uri = opts.uri;
            this.xd = !!opts.xd;
            this.xs = !!opts.xs;
            this.async = false !== opts.async;
            this.data = undefined != opts.data ? opts.data : null;
            this.agent = opts.agent;
            this.isBinary = opts.isBinary;
            this.supportsBinary = opts.supportsBinary;
            this.enablesXDR = opts.enablesXDR;

            // SSL options for Node.js client
            this.pfx = opts.pfx;
            this.key = opts.key;
            this.passphrase = opts.passphrase;
            this.cert = opts.cert;
            this.ca = opts.ca;
            this.ciphers = opts.ciphers;
            this.rejectUnauthorized = opts.rejectUnauthorized;

            // other options for Node.js client
            this.extraHeaders = opts.extraHeaders;

            this.create();
        }

        /**
         * Mix in `Emitter`.
         */

        Emitter(Request.prototype);

        /**
         * Creates the XHR object and sends the request.
         *
         * @api private
         */

        Request.prototype.create = function(){
            var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

            // SSL options for Node.js client
            opts.pfx = this.pfx;
            opts.key = this.key;
            opts.passphrase = this.passphrase;
            opts.cert = this.cert;
            opts.ca = this.ca;
            opts.ciphers = this.ciphers;
            opts.rejectUnauthorized = this.rejectUnauthorized;

            var xhr = this.xhr = new XMLHttpRequest(opts);
            var self = this;

            try {
                debug('xhr open %s: %s', this.method, this.uri);
                xhr.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        xhr.setDisableHeaderCheck(true);
                        for (var i in this.extraHeaders) {
                            if (this.extraHeaders.hasOwnProperty(i)) {
                                xhr.setRequestHeader(i, this.extraHeaders[i]);
                            }
                        }
                    }
                } catch (e) {}
                if (this.supportsBinary) {
                    // This has to be done after open because Firefox is stupid
                    // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
                    xhr.responseType = 'arraybuffer';
                }

                if ('POST' == this.method) {
                    try {
                        if (this.isBinary) {
                            xhr.setRequestHeader('Content-type', 'application/octet-stream');
                        } else {
                            xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                        }
                    } catch (e) {}
                }

                // ie6 check
                if ('withCredentials' in xhr) {
                    xhr.withCredentials = true;
                }

                if (this.hasXDR()) {
                    xhr.onload = function(){
                        self.onLoad();
                    };
                    xhr.onerror = function(){
                        self.onError(xhr.responseText);
                    };
                } else {
                    xhr.onreadystatechange = function(){
                        if (4 != xhr.readyState) return;
                        if (200 == xhr.status || 1223 == xhr.status) {
                            self.onLoad();
                        } else {
                            // make sure the `error` event handler that's user-set
                            // does not throw in the same tick and gets caught here
                            setTimeout(function(){
                                self.onError(xhr.status);
                            }, 0);
                        }
                    };
                }

                debug('xhr data %s', this.data);
                xhr.send(this.data);
            } catch (e) {
                // Need to defer since .create() is called directly fhrom the constructor
                // and thus the 'error' event can only be only bound *after* this exception
                // occurs.  Therefore, also, we cannot throw here at all.
                setTimeout(function() {
                    self.onError(e);
                }, 0);
                return;
            }

            if (global.document) {
                this.index = Request.requestsCount++;
                Request.requests[this.index] = this;
            }
        };

        /**
         * Called upon successful response.
         *
         * @api private
         */

        Request.prototype.onSuccess = function(){
            this.emit('success');
            this.cleanup();
        };

        /**
         * Called if we have data.
         *
         * @api private
         */

        Request.prototype.onData = function(data){
            this.emit('data', data);
            this.onSuccess();
        };

        /**
         * Called upon error.
         *
         * @api private
         */

        Request.prototype.onError = function(err){
            this.emit('error', err);
            this.cleanup(true);
        };

        /**
         * Cleans up house.
         *
         * @api private
         */

        Request.prototype.cleanup = function(fromError){
            if ('undefined' == typeof this.xhr || null === this.xhr) {
                return;
            }
            // xmlhttprequest
            if (this.hasXDR()) {
                this.xhr.onload = this.xhr.onerror = empty;
            } else {
                this.xhr.onreadystatechange = empty;
            }

            if (fromError) {
                try {
                    this.xhr.abort();
                } catch(e) {}
            }

            if (global.document) {
                delete Request.requests[this.index];
            }

            this.xhr = null;
        };

        /**
         * Called upon load.
         *
         * @api private
         */

        Request.prototype.onLoad = function(){
            var data;
            try {
                var contentType;
                try {
                    contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
                } catch (e) {}
                if (contentType === 'application/octet-stream') {
                    data = this.xhr.response;
                } else {
                    if (!this.supportsBinary) {
                        data = this.xhr.responseText;
                    } else {
                        try {
                            data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                        } catch (e) {
                            var ui8Arr = new Uint8Array(this.xhr.response);
                            var dataArray = [];
                            for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
                                dataArray.push(ui8Arr[idx]);
                            }

                            data = String.fromCharCode.apply(null, dataArray);
                        }
                    }
                }
            } catch (e) {
                this.onError(e);
            }
            if (null != data) {
                this.onData(data);
            }
        };

        /**
         * Check if it has XDomainRequest.
         *
         * @api private
         */

        Request.prototype.hasXDR = function(){
            return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
        };

        /**
         * Aborts the request.
         *
         * @api public
         */

        Request.prototype.abort = function(){
            this.cleanup();
        };

        /**
         * Aborts pending requests when unloading the window. This is needed to prevent
         * memory leaks (e.g. when using IE) and to ensure that no spurious error is
         * emitted.
         */

        if (global.document) {
            Request.requestsCount = 0;
            Request.requests = {};
            if (global.attachEvent) {
                global.attachEvent('onunload', unloadHandler);
            } else if (global.addEventListener) {
                global.addEventListener('beforeunload', unloadHandler, false);
            }
        }

        function unloadHandler() {
            for (var i in Request.requests) {
                if (Request.requests.hasOwnProperty(i)) {
                    Request.requests[i].abort();
                }
            }
        }

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":8,"component-emitter":15,"component-inherit":16,"debug":17,"xmlhttprequest-ssl":10}],8:[function(_dereq_,module,exports){
    /**
     * Module dependencies.
     */

    var Transport = _dereq_('../transport');
    var parseqs = _dereq_('parseqs');
    var parser = _dereq_('engine.io-parser');
    var inherit = _dereq_('component-inherit');
    var yeast = _dereq_('yeast');
    var debug = _dereq_('debug')('engine.io-client:polling');

    /**
     * Module exports.
     */

    module.exports = Polling;

    /**
     * Is XHR2 supported?
     */

    var hasXHR2 = (function() {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var xhr = new XMLHttpRequest({ xdomain: false });
        return null != xhr.responseType;
    })();

    /**
     * Polling interface.
     *
     * @param {Object} opts
     * @api private
     */

    function Polling(opts){
        var forceBase64 = (opts && opts.forceBase64);
        if (!hasXHR2 || forceBase64) {
            this.supportsBinary = false;
        }
        Transport.call(this, opts);
    }

    /**
     * Inherits from Transport.
     */

    inherit(Polling, Transport);

    /**
     * Transport name.
     */

    Polling.prototype.name = 'polling';

    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */

    Polling.prototype.doOpen = function(){
        this.poll();
    };

    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */

    Polling.prototype.pause = function(onPause){
        var pending = 0;
        var self = this;

        this.readyState = 'pausing';

        function pause(){
            debug('paused');
            self.readyState = 'paused';
            onPause();
        }

        if (this.polling || !this.writable) {
            var total = 0;

            if (this.polling) {
                debug('we are currently polling - waiting to pause');
                total++;
                this.once('pollComplete', function(){
                    debug('pre-pause polling complete');
                    --total || pause();
                });
            }

            if (!this.writable) {
                debug('we are currently writing - waiting to pause');
                total++;
                this.once('drain', function(){
                    debug('pre-pause writing complete');
                    --total || pause();
                });
            }
        } else {
            pause();
        }
    };

    /**
     * Starts polling cycle.
     *
     * @api public
     */

    Polling.prototype.poll = function(){
        debug('polling');
        this.polling = true;
        this.doPoll();
        this.emit('poll');
    };

    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */

    Polling.prototype.onData = function(data){
        var self = this;
        debug('polling got data %s', data);
        var callback = function(packet, index, total) {
            // if its the first message we consider the transport open
            if ('opening' == self.readyState) {
                self.onOpen();
            }

            // if its a close packet, we close the ongoing requests
            if ('close' == packet.type) {
                self.onClose();
                return false;
            }

            // otherwise bypass onData and handle the message
            self.onPacket(packet);
        };

        // decode payload
        parser.decodePayload(data, this.socket.binaryType, callback);

        // if an event did not trigger closing
        if ('closed' != this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emit('pollComplete');

            if ('open' == this.readyState) {
                this.poll();
            } else {
                debug('ignoring poll - transport state "%s"', this.readyState);
            }
        }
    };

    /**
     * For polling, send a close packet.
     *
     * @api private
     */

    Polling.prototype.doClose = function(){
        var self = this;

        function close(){
            debug('writing close packet');
            self.write([{ type: 'close' }]);
        }

        if ('open' == this.readyState) {
            debug('transport open - closing');
            close();
        } else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            debug('transport not open - deferring close');
            this.once('open', close);
        }
    };

    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */

    Polling.prototype.write = function(packets){
        var self = this;
        this.writable = false;
        var callbackfn = function() {
            self.writable = true;
            self.emit('drain');
        };

        var self = this;
        parser.encodePayload(packets, this.supportsBinary, function(data) {
            self.doWrite(data, callbackfn);
        });
    };

    /**
     * Generates uri for connection.
     *
     * @api private
     */

    Polling.prototype.uri = function(){
        var query = this.query || {};
        var schema = this.secure ? 'https' : 'http';
        var port = '';

        // cache busting is forced
        if (false !== this.timestampRequests) {
            query[this.timestampParam] = yeast();
        }

        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }

        query = parseqs.encode(query);

        // avoid port if default for schema
        if (this.port && (('https' == schema && this.port != 443) ||
            ('http' == schema && this.port != 80))) {
            port = ':' + this.port;
        }

        // prepend ? to query
        if (query.length) {
            query = '?' + query;
        }

        var ipv6 = this.hostname.indexOf(':') !== -1;
        return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
    };

},{"../transport":4,"component-inherit":16,"debug":17,"engine.io-parser":19,"parseqs":27,"xmlhttprequest-ssl":10,"yeast":30}],9:[function(_dereq_,module,exports){
    (function (global){
        /**
         * Module dependencies.
         */

        var Transport = _dereq_('../transport');
        var parser = _dereq_('engine.io-parser');
        var parseqs = _dereq_('parseqs');
        var inherit = _dereq_('component-inherit');
        var yeast = _dereq_('yeast');
        var debug = _dereq_('debug')('engine.io-client:websocket');
        var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

        /**
         * Get either the `WebSocket` or `MozWebSocket` globals
         * in the browser or try to resolve WebSocket-compatible
         * interface exposed by `ws` for Node-like environment.
         */

        var WebSocket = BrowserWebSocket;
        if (!WebSocket && typeof window === 'undefined') {
            try {
                WebSocket = _dereq_('ws');
            } catch (e) { }
        }

        /**
         * Module exports.
         */

        module.exports = WS;

        /**
         * WebSocket transport constructor.
         *
         * @api {Object} connection options
         * @api public
         */

        function WS(opts){
            var forceBase64 = (opts && opts.forceBase64);
            if (forceBase64) {
                this.supportsBinary = false;
            }
            this.perMessageDeflate = opts.perMessageDeflate;
            Transport.call(this, opts);
        }

        /**
         * Inherits from Transport.
         */

        inherit(WS, Transport);

        /**
         * Transport name.
         *
         * @api public
         */

        WS.prototype.name = 'websocket';

        /*
         * WebSockets support binary
         */

        WS.prototype.supportsBinary = true;

        /**
         * Opens socket.
         *
         * @api private
         */

        WS.prototype.doOpen = function(){
            if (!this.check()) {
                // let probe timeout
                return;
            }

            var self = this;
            var uri = this.uri();
            var protocols = void(0);
            var opts = {
                agent: this.agent,
                perMessageDeflate: this.perMessageDeflate
            };

            // SSL options for Node.js client
            opts.pfx = this.pfx;
            opts.key = this.key;
            opts.passphrase = this.passphrase;
            opts.cert = this.cert;
            opts.ca = this.ca;
            opts.ciphers = this.ciphers;
            opts.rejectUnauthorized = this.rejectUnauthorized;
            if (this.extraHeaders) {
                opts.headers = this.extraHeaders;
            }

            this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

            if (this.ws.binaryType === undefined) {
                this.supportsBinary = false;
            }

            if (this.ws.supports && this.ws.supports.binary) {
                this.supportsBinary = true;
                this.ws.binaryType = 'buffer';
            } else {
                this.ws.binaryType = 'arraybuffer';
            }

            this.addEventListeners();
        };

        /**
         * Adds event listeners to the socket
         *
         * @api private
         */

        WS.prototype.addEventListeners = function(){
            var self = this;

            this.ws.onopen = function(){
                self.onOpen();
            };
            this.ws.onclose = function(){
                self.onClose();
            };
            this.ws.onmessage = function(ev){
                self.onData(ev.data);
            };
            this.ws.onerror = function(e){
                self.onError('websocket error', e);
            };
        };

        /**
         * Override `onData` to use a timer on iOS.
         * See: https://gist.github.com/mloughran/2052006
         *
         * @api private
         */

        if ('undefined' != typeof navigator
            && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
            WS.prototype.onData = function(data){
                var self = this;
                setTimeout(function(){
                    Transport.prototype.onData.call(self, data);
                }, 0);
            };
        }

        /**
         * Writes data to socket.
         *
         * @param {Array} array of packets.
         * @api private
         */

        WS.prototype.write = function(packets){
            var self = this;
            this.writable = false;

            // encodePacket efficient as it uses WS framing
            // no need for encodePayload
            var total = packets.length;
            for (var i = 0, l = total; i < l; i++) {
                (function(packet) {
                    parser.encodePacket(packet, self.supportsBinary, function(data) {
                        if (!BrowserWebSocket) {
                            // always create a new object (GH-437)
                            var opts = {};
                            if (packet.options) {
                                opts.compress = packet.options.compress;
                            }

                            if (self.perMessageDeflate) {
                                var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
                                if (len < self.perMessageDeflate.threshold) {
                                    opts.compress = false;
                                }
                            }
                        }

                        //Sometimes the websocket has already been closed but the browser didn't
                        //have a chance of informing us about it yet, in that case send will
                        //throw an error
                        try {
                            if (BrowserWebSocket) {
                                // TypeError is thrown when passing the second argument on Safari
                                self.ws.send(data);
                            } else {
                                self.ws.send(data, opts);
                            }
                        } catch (e){
                            debug('websocket closed before onclose event');
                        }

                        --total || done();
                    });
                })(packets[i]);
            }

            function done(){
                self.emit('flush');

                // fake drain
                // defer to next tick to allow Socket to clear writeBuffer
                setTimeout(function(){
                    self.writable = true;
                    self.emit('drain');
                }, 0);
            }
        };

        /**
         * Called upon close
         *
         * @api private
         */

        WS.prototype.onClose = function(){
            Transport.prototype.onClose.call(this);
        };

        /**
         * Closes socket.
         *
         * @api private
         */

        WS.prototype.doClose = function(){
            if (typeof this.ws !== 'undefined') {
                this.ws.close();
            }
        };

        /**
         * Generates uri for connection.
         *
         * @api private
         */

        WS.prototype.uri = function(){
            var query = this.query || {};
            var schema = this.secure ? 'wss' : 'ws';
            var port = '';

            // avoid port if default for schema
            if (this.port && (('wss' == schema && this.port != 443)
                || ('ws' == schema && this.port != 80))) {
                port = ':' + this.port;
            }

            // append timestamp to URI
            if (this.timestampRequests) {
                query[this.timestampParam] = yeast();
            }

            // communicate binary support capabilities
            if (!this.supportsBinary) {
                query.b64 = 1;
            }

            query = parseqs.encode(query);

            // prepend ? to query
            if (query.length) {
                query = '?' + query;
            }

            var ipv6 = this.hostname.indexOf(':') !== -1;
            return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
        };

        /**
         * Feature detection for WebSocket.
         *
         * @return {Boolean} whether this transport is available.
         * @api public
         */

        WS.prototype.check = function(){
            return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
        };

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"../transport":4,"component-inherit":16,"debug":17,"engine.io-parser":19,"parseqs":27,"ws":undefined,"yeast":30}],10:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
    var hasCORS = _dereq_('has-cors');

    module.exports = function(opts) {
        var xdomain = opts.xdomain;

        // scheme must be same when usign XDomainRequest
        // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
        var xscheme = opts.xscheme;

        // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
        // https://github.com/Automattic/engine.io-client/pull/217
        var enablesXDR = opts.enablesXDR;

        // XMLHttpRequest can be disabled on IE
        try {
            if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
                return new XMLHttpRequest();
            }
        } catch (e) { }

        // Use XDomainRequest for IE8 if enablesXDR is true
        // because loading bar keeps flashing when using jsonp-polling
        // https://github.com/yujiosaka/socke.io-ie8-loading-example
        try {
            if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
                return new XDomainRequest();
            }
        } catch (e) { }

        if (!xdomain) {
            try {
                return new ActiveXObject('Microsoft.XMLHTTP');
            } catch(e) { }
        }
    }

},{"has-cors":22}],11:[function(_dereq_,module,exports){
    module.exports = after

    function after(count, callback, err_cb) {
        var bail = false
        err_cb = err_cb || noop
        proxy.count = count

        return (count === 0) ? callback() : proxy

        function proxy(err, result) {
            if (proxy.count <= 0) {
                throw new Error('after called too many times')
            }
            --proxy.count

            // after first error, rest are passed to err_cb
            if (err) {
                bail = true
                callback(err)
                // future error callbacks will go to error handler
                callback = err_cb
            } else if (proxy.count === 0 && !bail) {
                callback(null, result)
            }
        }
    }

    function noop() {}

},{}],12:[function(_dereq_,module,exports){
    /**
     * An abstraction for slicing an arraybuffer even when
     * ArrayBuffer.prototype.slice is not supported
     *
     * @api public
     */

    module.exports = function(arraybuffer, start, end) {
        var bytes = arraybuffer.byteLength;
        start = start || 0;
        end = end || bytes;

        if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

        if (start < 0) { start += bytes; }
        if (end < 0) { end += bytes; }
        if (end > bytes) { end = bytes; }

        if (start >= bytes || start >= end || bytes === 0) {
            return new ArrayBuffer(0);
        }

        var abv = new Uint8Array(arraybuffer);
        var result = new Uint8Array(end - start);
        for (var i = start, ii = 0; i < end; i++, ii++) {
            result[ii] = abv[i];
        }
        return result.buffer;
    };

},{}],13:[function(_dereq_,module,exports){
    /*
     * base64-arraybuffer
     * https://github.com/niklasvh/base64-arraybuffer
     *
     * Copyright (c) 2012 Niklas von Hertzen
     * Licensed under the MIT license.
     */
    (function(chars){
        "use strict";

        exports.encode = function(arraybuffer) {
            var bytes = new Uint8Array(arraybuffer),
                i, len = bytes.length, base64 = "";

            for (i = 0; i < len; i+=3) {
                base64 += chars[bytes[i] >> 2];
                base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
                base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
                base64 += chars[bytes[i + 2] & 63];
            }

            if ((len % 3) === 2) {
                base64 = base64.substring(0, base64.length - 1) + "=";
            } else if (len % 3 === 1) {
                base64 = base64.substring(0, base64.length - 2) + "==";
            }

            return base64;
        };

        exports.decode =  function(base64) {
            var bufferLength = base64.length * 0.75,
                len = base64.length, i, p = 0,
                encoded1, encoded2, encoded3, encoded4;

            if (base64[base64.length - 1] === "=") {
                bufferLength--;
                if (base64[base64.length - 2] === "=") {
                    bufferLength--;
                }
            }

            var arraybuffer = new ArrayBuffer(bufferLength),
                bytes = new Uint8Array(arraybuffer);

            for (i = 0; i < len; i+=4) {
                encoded1 = chars.indexOf(base64[i]);
                encoded2 = chars.indexOf(base64[i+1]);
                encoded3 = chars.indexOf(base64[i+2]);
                encoded4 = chars.indexOf(base64[i+3]);

                bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
                bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
                bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
            }

            return arraybuffer;
        };
    })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],14:[function(_dereq_,module,exports){
    (function (global){
        /**
         * Create a blob builder even when vendor prefixes exist
         */

        var BlobBuilder = global.BlobBuilder
            || global.WebKitBlobBuilder
            || global.MSBlobBuilder
            || global.MozBlobBuilder;

        /**
         * Check if Blob constructor is supported
         */

        var blobSupported = (function() {
            try {
                var a = new Blob(['hi']);
                return a.size === 2;
            } catch(e) {
                return false;
            }
        })();

        /**
         * Check if Blob constructor supports ArrayBufferViews
         * Fails in Safari 6, so we need to map to ArrayBuffers there.
         */

        var blobSupportsArrayBufferView = blobSupported && (function() {
                try {
                    var b = new Blob([new Uint8Array([1,2])]);
                    return b.size === 2;
                } catch(e) {
                    return false;
                }
            })();

        /**
         * Check if BlobBuilder is supported
         */

        var blobBuilderSupported = BlobBuilder
            && BlobBuilder.prototype.append
            && BlobBuilder.prototype.getBlob;

        /**
         * Helper function that maps ArrayBufferViews to ArrayBuffers
         * Used by BlobBuilder constructor and old browsers that didn't
         * support it in the Blob constructor.
         */

        function mapArrayBufferViews(ary) {
            for (var i = 0; i < ary.length; i++) {
                var chunk = ary[i];
                if (chunk.buffer instanceof ArrayBuffer) {
                    var buf = chunk.buffer;

                    // if this is a subarray, make a copy so we only
                    // include the subarray region from the underlying buffer
                    if (chunk.byteLength !== buf.byteLength) {
                        var copy = new Uint8Array(chunk.byteLength);
                        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                        buf = copy.buffer;
                    }

                    ary[i] = buf;
                }
            }
        }

        function BlobBuilderConstructor(ary, options) {
            options = options || {};

            var bb = new BlobBuilder();
            mapArrayBufferViews(ary);

            for (var i = 0; i < ary.length; i++) {
                bb.append(ary[i]);
            }

            return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
        };

        function BlobConstructor(ary, options) {
            mapArrayBufferViews(ary);
            return new Blob(ary, options || {});
        };

        module.exports = (function() {
            if (blobSupported) {
                return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
            } else if (blobBuilderSupported) {
                return BlobBuilderConstructor;
            } else {
                return undefined;
            }
        })();

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],15:[function(_dereq_,module,exports){

    /**
     * Expose `Emitter`.
     */

    module.exports = Emitter;

    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */

    function Emitter(obj) {
        if (obj) return mixin(obj);
    };

    /**
     * Mixin the emitter properties.
     *
     * @param {Object} obj
     * @return {Object}
     * @api private
     */

    function mixin(obj) {
        for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
        }
        return obj;
    }

    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.on =
        Emitter.prototype.addEventListener = function(event, fn){
            this._callbacks = this._callbacks || {};
            (this._callbacks[event] = this._callbacks[event] || [])
                .push(fn);
            return this;
        };

    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.once = function(event, fn){
        var self = this;
        this._callbacks = this._callbacks || {};

        function on() {
            self.off(event, on);
            fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
    };

    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.off =
        Emitter.prototype.removeListener =
            Emitter.prototype.removeAllListeners =
                Emitter.prototype.removeEventListener = function(event, fn){
                    this._callbacks = this._callbacks || {};

                    // all
                    if (0 == arguments.length) {
                        this._callbacks = {};
                        return this;
                    }

                    // specific event
                    var callbacks = this._callbacks[event];
                    if (!callbacks) return this;

                    // remove all handlers
                    if (1 == arguments.length) {
                        delete this._callbacks[event];
                        return this;
                    }

                    // remove specific handler
                    var cb;
                    for (var i = 0; i < callbacks.length; i++) {
                        cb = callbacks[i];
                        if (cb === fn || cb.fn === fn) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                    return this;
                };

    /**
     * Emit `event` with the given args.
     *
     * @param {String} event
     * @param {Mixed} ...
     * @return {Emitter}
     */

    Emitter.prototype.emit = function(event){
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1)
            , callbacks = this._callbacks[event];

        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].apply(this, args);
            }
        }

        return this;
    };

    /**
     * Return array of callbacks for `event`.
     *
     * @param {String} event
     * @return {Array}
     * @api public
     */

    Emitter.prototype.listeners = function(event){
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
    };

    /**
     * Check if this emitter has `event` handlers.
     *
     * @param {String} event
     * @return {Boolean}
     * @api public
     */

    Emitter.prototype.hasListeners = function(event){
        return !! this.listeners(event).length;
    };

},{}],16:[function(_dereq_,module,exports){

    module.exports = function(a, b){
        var fn = function(){};
        fn.prototype = b.prototype;
        a.prototype = new fn;
        a.prototype.constructor = a;
    };
},{}],17:[function(_dereq_,module,exports){

    /**
     * This is the web browser implementation of `debug()`.
     *
     * Expose `debug()` as the module.
     */

    exports = module.exports = _dereq_('./debug');
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = 'undefined' != typeof chrome
    && 'undefined' != typeof chrome.storage
        ? chrome.storage.local
        : localstorage();

    /**
     * Colors.
     */

    exports.colors = [
        'lightseagreen',
        'forestgreen',
        'goldenrod',
        'dodgerblue',
        'darkorchid',
        'crimson'
    ];

    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    function useColors() {
        // is webkit? http://stackoverflow.com/a/16459606/376773
        return ('WebkitAppearance' in document.documentElement.style) ||
                // is firebug? http://stackoverflow.com/a/398120/376773
            (window.console && (console.firebug || (console.exception && console.table))) ||
                // is firefox >= v31?
                // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
            (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
    }

    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */

    exports.formatters.j = function(v) {
        return JSON.stringify(v);
    };


    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */

    function formatArgs() {
        var args = arguments;
        var useColors = this.useColors;

        args[0] = (useColors ? '%c' : '')
            + this.namespace
            + (useColors ? ' %c' : ' ')
            + args[0]
            + (useColors ? '%c ' : ' ')
            + '+' + exports.humanize(this.diff);

        if (!useColors) return args;

        var c = 'color: ' + this.color;
        args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

        // the final "%c" is somewhat tricky, because there could be other
        // arguments passed either before or after the %c, so we need to
        // figure out the correct index to insert the CSS into
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-z%]/g, function(match) {
            if ('%%' === match) return;
            index++;
            if ('%c' === match) {
                // we only are interested in the *last* %c
                // (the user may have provided their own)
                lastC = index;
            }
        });

        args.splice(lastC, 0, c);
        return args;
    }

    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */

    function log() {
        // this hackery is required for IE8/9, where
        // the `console.log` function doesn't have 'apply'
        return 'object' === typeof console
            && console.log
            && Function.prototype.apply.call(console.log, console, arguments);
    }

    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */

    function save(namespaces) {
        try {
            if (null == namespaces) {
                exports.storage.removeItem('debug');
            } else {
                exports.storage.debug = namespaces;
            }
        } catch(e) {}
    }

    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */

    function load() {
        var r;
        try {
            r = exports.storage.debug;
        } catch(e) {}
        return r;
    }

    /**
     * Enable namespaces listed in `localStorage.debug` initially.
     */

    exports.enable(load());

    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage(){
        try {
            return window.localStorage;
        } catch (e) {}
    }

},{"./debug":18}],18:[function(_dereq_,module,exports){

    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     *
     * Expose `debug()` as the module.
     */

    exports = module.exports = debug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = _dereq_('ms');

    /**
     * The currently active debug mode names, and names to skip.
     */

    exports.names = [];
    exports.skips = [];

    /**
     * Map of special "%n" handling functions, for the debug "format" argument.
     *
     * Valid key names are a single, lowercased letter, i.e. "n".
     */

    exports.formatters = {};

    /**
     * Previously assigned color.
     */

    var prevColor = 0;

    /**
     * Previous log timestamp.
     */

    var prevTime;

    /**
     * Select a color.
     *
     * @return {Number}
     * @api private
     */

    function selectColor() {
        return exports.colors[prevColor++ % exports.colors.length];
    }

    /**
     * Create a debugger with the given `namespace`.
     *
     * @param {String} namespace
     * @return {Function}
     * @api public
     */

    function debug(namespace) {

        // define the `disabled` version
        function disabled() {
        }
        disabled.enabled = false;

        // define the `enabled` version
        function enabled() {

            var self = enabled;

            // set `diff` timestamp
            var curr = +new Date();
            var ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;

            // add the `color` if not set
            if (null == self.useColors) self.useColors = exports.useColors();
            if (null == self.color && self.useColors) self.color = selectColor();

            var args = Array.prototype.slice.call(arguments);

            args[0] = exports.coerce(args[0]);

            if ('string' !== typeof args[0]) {
                // anything else let's inspect with %o
                args = ['%o'].concat(args);
            }

            // apply any `formatters` transformations
            var index = 0;
            args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
                // if we encounter an escaped % then don't increase the array index
                if (match === '%%') return match;
                index++;
                var formatter = exports.formatters[format];
                if ('function' === typeof formatter) {
                    var val = args[index];
                    match = formatter.call(self, val);

                    // now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });

            if ('function' === typeof exports.formatArgs) {
                args = exports.formatArgs.apply(self, args);
            }
            var logFn = enabled.log || exports.log || console.log.bind(console);
            logFn.apply(self, args);
        }
        enabled.enabled = true;

        var fn = exports.enabled(namespace) ? enabled : disabled;

        fn.namespace = namespace;

        return fn;
    }

    /**
     * Enables a debug mode by namespaces. This can include modes
     * separated by a colon and wildcards.
     *
     * @param {String} namespaces
     * @api public
     */

    function enable(namespaces) {
        exports.save(namespaces);

        var split = (namespaces || '').split(/[\s,]+/);
        var len = split.length;

        for (var i = 0; i < len; i++) {
            if (!split[i]) continue; // ignore empty strings
            namespaces = split[i].replace(/\*/g, '.*?');
            if (namespaces[0] === '-') {
                exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
                exports.names.push(new RegExp('^' + namespaces + '$'));
            }
        }
    }

    /**
     * Disable debug output.
     *
     * @api public
     */

    function disable() {
        exports.enable('');
    }

    /**
     * Returns true if the given mode name is enabled, false otherwise.
     *
     * @param {String} name
     * @return {Boolean}
     * @api public
     */

    function enabled(name) {
        var i, len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
            if (exports.skips[i].test(name)) {
                return false;
            }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
            if (exports.names[i].test(name)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Coerce `val`.
     *
     * @param {Mixed} val
     * @return {Mixed}
     * @api private
     */

    function coerce(val) {
        if (val instanceof Error) return val.stack || val.message;
        return val;
    }

},{"ms":25}],19:[function(_dereq_,module,exports){
    (function (global){
        /**
         * Module dependencies.
         */

        var keys = _dereq_('./keys');
        var hasBinary = _dereq_('has-binary');
        var sliceBuffer = _dereq_('arraybuffer.slice');
        var base64encoder = _dereq_('base64-arraybuffer');
        var after = _dereq_('after');
        var utf8 = _dereq_('utf8');

        /**
         * Check if we are running an android browser. That requires us to use
         * ArrayBuffer with polling transports...
         *
         * http://ghinda.net/jpeg-blob-ajax-android/
         */

        var isAndroid = navigator.userAgent.match(/Android/i);

        /**
         * Check if we are running in PhantomJS.
         * Uploading a Blob with PhantomJS does not work correctly, as reported here:
         * https://github.com/ariya/phantomjs/issues/11395
         * @type boolean
         */
        var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

        /**
         * When true, avoids using Blobs to encode payloads.
         * @type boolean
         */
        var dontSendBlobs = isAndroid || isPhantomJS;

        /**
         * Current protocol version.
         */

        exports.protocol = 3;

        /**
         * Packet types.
         */

        var packets = exports.packets = {
            open:     0    // non-ws
            , close:    1    // non-ws
            , ping:     2
            , pong:     3
            , message:  4
            , upgrade:  5
            , noop:     6
        };

        var packetslist = keys(packets);

        /**
         * Premade error packet.
         */

        var err = { type: 'error', data: 'parser error' };

        /**
         * Create a blob api even for blob builder when vendor prefixes exist
         */

        var Blob = _dereq_('blob');

        /**
         * Encodes a packet.
         *
         *     <packet type id> [ <data> ]
         *
         * Example:
         *
         *     5hello world
         *     3
         *     4
         *
         * Binary is encoded in an identical principle
         *
         * @api private
         */

        exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
            if ('function' == typeof supportsBinary) {
                callback = supportsBinary;
                supportsBinary = false;
            }

            if ('function' == typeof utf8encode) {
                callback = utf8encode;
                utf8encode = null;
            }

            var data = (packet.data === undefined)
                ? undefined
                : packet.data.buffer || packet.data;

            if (global.ArrayBuffer && data instanceof ArrayBuffer) {
                return encodeArrayBuffer(packet, supportsBinary, callback);
            } else if (Blob && data instanceof global.Blob) {
                return encodeBlob(packet, supportsBinary, callback);
            }

            // might be an object with { base64: true, data: dataAsBase64String }
            if (data && data.base64) {
                return encodeBase64Object(packet, callback);
            }

            // Sending data as a utf-8 string
            var encoded = packets[packet.type];

            // data fragment is optional
            if (undefined !== packet.data) {
                encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
            }

            return callback('' + encoded);

        };

        function encodeBase64Object(packet, callback) {
            // packet data is an object { base64: true, data: dataAsBase64String }
            var message = 'b' + exports.packets[packet.type] + packet.data.data;
            return callback(message);
        }

        /**
         * Encode packet helpers for binary types
         */

        function encodeArrayBuffer(packet, supportsBinary, callback) {
            if (!supportsBinary) {
                return exports.encodeBase64Packet(packet, callback);
            }

            var data = packet.data;
            var contentArray = new Uint8Array(data);
            var resultBuffer = new Uint8Array(1 + data.byteLength);

            resultBuffer[0] = packets[packet.type];
            for (var i = 0; i < contentArray.length; i++) {
                resultBuffer[i+1] = contentArray[i];
            }

            return callback(resultBuffer.buffer);
        }

        function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
            if (!supportsBinary) {
                return exports.encodeBase64Packet(packet, callback);
            }

            var fr = new FileReader();
            fr.onload = function() {
                packet.data = fr.result;
                exports.encodePacket(packet, supportsBinary, true, callback);
            };
            return fr.readAsArrayBuffer(packet.data);
        }

        function encodeBlob(packet, supportsBinary, callback) {
            if (!supportsBinary) {
                return exports.encodeBase64Packet(packet, callback);
            }

            if (dontSendBlobs) {
                return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
            }

            var length = new Uint8Array(1);
            length[0] = packets[packet.type];
            var blob = new Blob([length.buffer, packet.data]);

            return callback(blob);
        }

        /**
         * Encodes a packet with binary data in a base64 string
         *
         * @param {Object} packet, has `type` and `data`
         * @return {String} base64 encoded message
         */

        exports.encodeBase64Packet = function(packet, callback) {
            var message = 'b' + exports.packets[packet.type];
            if (Blob && packet.data instanceof global.Blob) {
                var fr = new FileReader();
                fr.onload = function() {
                    var b64 = fr.result.split(',')[1];
                    callback(message + b64);
                };
                return fr.readAsDataURL(packet.data);
            }

            var b64data;
            try {
                b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
            } catch (e) {
                // iPhone Safari doesn't let you apply with typed arrays
                var typed = new Uint8Array(packet.data);
                var basic = new Array(typed.length);
                for (var i = 0; i < typed.length; i++) {
                    basic[i] = typed[i];
                }
                b64data = String.fromCharCode.apply(null, basic);
            }
            message += global.btoa(b64data);
            return callback(message);
        };

        /**
         * Decodes a packet. Changes format to Blob if requested.
         *
         * @return {Object} with `type` and `data` (if any)
         * @api private
         */

        exports.decodePacket = function (data, binaryType, utf8decode) {
            // String data
            if (typeof data == 'string' || data === undefined) {
                if (data.charAt(0) == 'b') {
                    return exports.decodeBase64Packet(data.substr(1), binaryType);
                }

                if (utf8decode) {
                    try {
                        data = utf8.decode(data);
                    } catch (e) {
                        return err;
                    }
                }
                var type = data.charAt(0);

                if (Number(type) != type || !packetslist[type]) {
                    return err;
                }

                if (data.length > 1) {
                    return { type: packetslist[type], data: data.substring(1) };
                } else {
                    return { type: packetslist[type] };
                }
            }

            var asArray = new Uint8Array(data);
            var type = asArray[0];
            var rest = sliceBuffer(data, 1);
            if (Blob && binaryType === 'blob') {
                rest = new Blob([rest]);
            }
            return { type: packetslist[type], data: rest };
        };

        /**
         * Decodes a packet encoded in a base64 string
         *
         * @param {String} base64 encoded message
         * @return {Object} with `type` and `data` (if any)
         */

        exports.decodeBase64Packet = function(msg, binaryType) {
            var type = packetslist[msg.charAt(0)];
            if (!global.ArrayBuffer) {
                return { type: type, data: { base64: true, data: msg.substr(1) } };
            }

            var data = base64encoder.decode(msg.substr(1));

            if (binaryType === 'blob' && Blob) {
                data = new Blob([data]);
            }

            return { type: type, data: data };
        };

        /**
         * Encodes multiple messages (payload).
         *
         *     <length>:data
         *
         * Example:
         *
         *     11:hello world2:hi
         *
         * If any contents are binary, they will be encoded as base64 strings. Base64
         * encoded strings are marked with a b before the length specifier
         *
         * @param {Array} packets
         * @api private
         */

        exports.encodePayload = function (packets, supportsBinary, callback) {
            if (typeof supportsBinary == 'function') {
                callback = supportsBinary;
                supportsBinary = null;
            }

            var isBinary = hasBinary(packets);

            if (supportsBinary && isBinary) {
                if (Blob && !dontSendBlobs) {
                    return exports.encodePayloadAsBlob(packets, callback);
                }

                return exports.encodePayloadAsArrayBuffer(packets, callback);
            }

            if (!packets.length) {
                return callback('0:');
            }

            function setLengthHeader(message) {
                return message.length + ':' + message;
            }

            function encodeOne(packet, doneCallback) {
                exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
                    doneCallback(null, setLengthHeader(message));
                });
            }

            map(packets, encodeOne, function(err, results) {
                return callback(results.join(''));
            });
        };

        /**
         * Async array map using after
         */

        function map(ary, each, done) {
            var result = new Array(ary.length);
            var next = after(ary.length, done);

            var eachWithIndex = function(i, el, cb) {
                each(el, function(error, msg) {
                    result[i] = msg;
                    cb(error, result);
                });
            };

            for (var i = 0; i < ary.length; i++) {
                eachWithIndex(i, ary[i], next);
            }
        }

        /*
         * Decodes data when a payload is maybe expected. Possible binary contents are
         * decoded from their base64 representation
         *
         * @param {String} data, callback method
         * @api public
         */

        exports.decodePayload = function (data, binaryType, callback) {
            if (typeof data != 'string') {
                return exports.decodePayloadAsBinary(data, binaryType, callback);
            }

            if (typeof binaryType === 'function') {
                callback = binaryType;
                binaryType = null;
            }

            var packet;
            if (data == '') {
                // parser error - ignoring payload
                return callback(err, 0, 1);
            }

            var length = ''
                , n, msg;

            for (var i = 0, l = data.length; i < l; i++) {
                var chr = data.charAt(i);

                if (':' != chr) {
                    length += chr;
                } else {
                    if ('' == length || (length != (n = Number(length)))) {
                        // parser error - ignoring payload
                        return callback(err, 0, 1);
                    }

                    msg = data.substr(i + 1, n);

                    if (length != msg.length) {
                        // parser error - ignoring payload
                        return callback(err, 0, 1);
                    }

                    if (msg.length) {
                        packet = exports.decodePacket(msg, binaryType, true);

                        if (err.type == packet.type && err.data == packet.data) {
                            // parser error in individual packet - ignoring payload
                            return callback(err, 0, 1);
                        }

                        var ret = callback(packet, i + n, l);
                        if (false === ret) return;
                    }

                    // advance cursor
                    i += n;
                    length = '';
                }
            }

            if (length != '') {
                // parser error - ignoring payload
                return callback(err, 0, 1);
            }

        };

        /**
         * Encodes multiple messages (payload) as binary.
         *
         * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
         * 255><data>
         *
         * Example:
         * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
         *
         * @param {Array} packets
         * @return {ArrayBuffer} encoded payload
         * @api private
         */

        exports.encodePayloadAsArrayBuffer = function(packets, callback) {
            if (!packets.length) {
                return callback(new ArrayBuffer(0));
            }

            function encodeOne(packet, doneCallback) {
                exports.encodePacket(packet, true, true, function(data) {
                    return doneCallback(null, data);
                });
            }

            map(packets, encodeOne, function(err, encodedPackets) {
                var totalLength = encodedPackets.reduce(function(acc, p) {
                    var len;
                    if (typeof p === 'string'){
                        len = p.length;
                    } else {
                        len = p.byteLength;
                    }
                    return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
                }, 0);

                var resultArray = new Uint8Array(totalLength);

                var bufferIndex = 0;
                encodedPackets.forEach(function(p) {
                    var isString = typeof p === 'string';
                    var ab = p;
                    if (isString) {
                        var view = new Uint8Array(p.length);
                        for (var i = 0; i < p.length; i++) {
                            view[i] = p.charCodeAt(i);
                        }
                        ab = view.buffer;
                    }

                    if (isString) { // not true binary
                        resultArray[bufferIndex++] = 0;
                    } else { // true binary
                        resultArray[bufferIndex++] = 1;
                    }

                    var lenStr = ab.byteLength.toString();
                    for (var i = 0; i < lenStr.length; i++) {
                        resultArray[bufferIndex++] = parseInt(lenStr[i]);
                    }
                    resultArray[bufferIndex++] = 255;

                    var view = new Uint8Array(ab);
                    for (var i = 0; i < view.length; i++) {
                        resultArray[bufferIndex++] = view[i];
                    }
                });

                return callback(resultArray.buffer);
            });
        };

        /**
         * Encode as Blob
         */

        exports.encodePayloadAsBlob = function(packets, callback) {
            function encodeOne(packet, doneCallback) {
                exports.encodePacket(packet, true, true, function(encoded) {
                    var binaryIdentifier = new Uint8Array(1);
                    binaryIdentifier[0] = 1;
                    if (typeof encoded === 'string') {
                        var view = new Uint8Array(encoded.length);
                        for (var i = 0; i < encoded.length; i++) {
                            view[i] = encoded.charCodeAt(i);
                        }
                        encoded = view.buffer;
                        binaryIdentifier[0] = 0;
                    }

                    var len = (encoded instanceof ArrayBuffer)
                        ? encoded.byteLength
                        : encoded.size;

                    var lenStr = len.toString();
                    var lengthAry = new Uint8Array(lenStr.length + 1);
                    for (var i = 0; i < lenStr.length; i++) {
                        lengthAry[i] = parseInt(lenStr[i]);
                    }
                    lengthAry[lenStr.length] = 255;

                    if (Blob) {
                        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                        doneCallback(null, blob);
                    }
                });
            }

            map(packets, encodeOne, function(err, results) {
                return callback(new Blob(results));
            });
        };

        /*
         * Decodes data when a payload is maybe expected. Strings are decoded by
         * interpreting each byte as a key code for entries marked to start with 0. See
         * description of encodePayloadAsBinary
         *
         * @param {ArrayBuffer} data, callback method
         * @api public
         */

        exports.decodePayloadAsBinary = function (data, binaryType, callback) {
            if (typeof binaryType === 'function') {
                callback = binaryType;
                binaryType = null;
            }

            var bufferTail = data;
            var buffers = [];

            var numberTooLong = false;
            while (bufferTail.byteLength > 0) {
                var tailArray = new Uint8Array(bufferTail);
                var isString = tailArray[0] === 0;
                var msgLength = '';

                for (var i = 1; ; i++) {
                    if (tailArray[i] == 255) break;

                    if (msgLength.length > 310) {
                        numberTooLong = true;
                        break;
                    }

                    msgLength += tailArray[i];
                }

                if(numberTooLong) return callback(err, 0, 1);

                bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
                msgLength = parseInt(msgLength);

                var msg = sliceBuffer(bufferTail, 0, msgLength);
                if (isString) {
                    try {
                        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
                    } catch (e) {
                        // iPhone Safari doesn't let you apply to typed arrays
                        var typed = new Uint8Array(msg);
                        msg = '';
                        for (var i = 0; i < typed.length; i++) {
                            msg += String.fromCharCode(typed[i]);
                        }
                    }
                }

                buffers.push(msg);
                bufferTail = sliceBuffer(bufferTail, msgLength);
            }

            var total = buffers.length;
            buffers.forEach(function(buffer, i) {
                callback(exports.decodePacket(buffer, binaryType, true), i, total);
            });
        };

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./keys":20,"after":11,"arraybuffer.slice":12,"base64-arraybuffer":13,"blob":14,"has-binary":21,"utf8":29}],20:[function(_dereq_,module,exports){

    /**
     * Gets the keys for an object.
     *
     * @return {Array} keys
     * @api private
     */

    module.exports = Object.keys || function keys (obj){
            var arr = [];
            var has = Object.prototype.hasOwnProperty;

            for (var i in obj) {
                if (has.call(obj, i)) {
                    arr.push(i);
                }
            }
            return arr;
        };

},{}],21:[function(_dereq_,module,exports){
    (function (global){

        /*
         * Module requirements.
         */

        var isArray = _dereq_('isarray');

        /**
         * Module exports.
         */

        module.exports = hasBinary;

        /**
         * Checks for binary data.
         *
         * Right now only Buffer and ArrayBuffer are supported..
         *
         * @param {Object} anything
         * @api public
         */

        function hasBinary(data) {

            function _hasBinary(obj) {
                if (!obj) return false;

                if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
                    (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
                    (global.Blob && obj instanceof Blob) ||
                    (global.File && obj instanceof File)
                ) {
                    return true;
                }

                if (isArray(obj)) {
                    for (var i = 0; i < obj.length; i++) {
                        if (_hasBinary(obj[i])) {
                            return true;
                        }
                    }
                } else if (obj && 'object' == typeof obj) {
                    if (obj.toJSON) {
                        obj = obj.toJSON();
                    }

                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                            return true;
                        }
                    }
                }

                return false;
            }

            return _hasBinary(data);
        }

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":24}],22:[function(_dereq_,module,exports){

    /**
     * Module exports.
     *
     * Logic borrowed from Modernizr:
     *
     *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
     */

    try {
        module.exports = typeof XMLHttpRequest !== 'undefined' &&
            'withCredentials' in new XMLHttpRequest();
    } catch (err) {
        // if XMLHttp support is disabled in IE then it will throw
        // when trying to create
        module.exports = false;
    }

},{}],23:[function(_dereq_,module,exports){

    var indexOf = [].indexOf;

    module.exports = function(arr, obj){
        if (indexOf) return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj) return i;
        }
        return -1;
    };
},{}],24:[function(_dereq_,module,exports){
    module.exports = Array.isArray || function (arr) {
            return Object.prototype.toString.call(arr) == '[object Array]';
        };

},{}],25:[function(_dereq_,module,exports){
    /**
     * Helpers.
     */

    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} options
     * @return {String|Number}
     * @api public
     */

    module.exports = function(val, options){
        options = options || {};
        if ('string' == typeof val) return parse(val);
        return options.long
            ? long(val)
            : short(val);
    };

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse(str) {
        str = '' + str;
        if (str.length > 10000) return;
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match) return;
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
            case 'years':
            case 'year':
            case 'yrs':
            case 'yr':
            case 'y':
                return n * y;
            case 'days':
            case 'day':
            case 'd':
                return n * d;
            case 'hours':
            case 'hour':
            case 'hrs':
            case 'hr':
            case 'h':
                return n * h;
            case 'minutes':
            case 'minute':
            case 'mins':
            case 'min':
            case 'm':
                return n * m;
            case 'seconds':
            case 'second':
            case 'secs':
            case 'sec':
            case 's':
                return n * s;
            case 'milliseconds':
            case 'millisecond':
            case 'msecs':
            case 'msec':
            case 'ms':
                return n;
        }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function short(ms) {
        if (ms >= d) return Math.round(ms / d) + 'd';
        if (ms >= h) return Math.round(ms / h) + 'h';
        if (ms >= m) return Math.round(ms / m) + 'm';
        if (ms >= s) return Math.round(ms / s) + 's';
        return ms + 'ms';
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function long(ms) {
        return plural(ms, d, 'day')
            || plural(ms, h, 'hour')
            || plural(ms, m, 'minute')
            || plural(ms, s, 'second')
            || ms + ' ms';
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, n, name) {
        if (ms < n) return;
        if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
        return Math.ceil(ms / n) + ' ' + name + 's';
    }

},{}],26:[function(_dereq_,module,exports){
    (function (global){
        /**
         * JSON parse.
         *
         * @see Based on jQuery#parseJSON (MIT) and JSON2
         * @api private
         */

        var rvalidchars = /^[\],:{}\s]*$/;
        var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
        var rtrimLeft = /^\s+/;
        var rtrimRight = /\s+$/;

        module.exports = function parsejson(data) {
            if ('string' != typeof data || !data) {
                return null;
            }

            data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

            // Attempt to parse using the native JSON parser first
            if (global.JSON && JSON.parse) {
                return JSON.parse(data);
            }

            if (rvalidchars.test(data.replace(rvalidescape, '@')
                    .replace(rvalidtokens, ']')
                    .replace(rvalidbraces, ''))) {
                return (new Function('return ' + data))();
            }
        };
    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],27:[function(_dereq_,module,exports){
    /**
     * Compiles a querystring
     * Returns string representation of the object
     *
     * @param {Object}
     * @api private
     */

    exports.encode = function (obj) {
        var str = '';

        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (str.length) str += '&';
                str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
            }
        }

        return str;
    };

    /**
     * Parses a simple querystring into an object
     *
     * @param {String} qs
     * @api private
     */

    exports.decode = function(qs){
        var qry = {};
        var pairs = qs.split('&');
        for (var i = 0, l = pairs.length; i < l; i++) {
            var pair = pairs[i].split('=');
            qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
    };

},{}],28:[function(_dereq_,module,exports){
    /**
     * Parses an URI
     *
     * @author Steven Levithan <stevenlevithan.com> (MIT license)
     * @api private
     */

    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

    var parts = [
        'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
    ];

    module.exports = function parseuri(str) {
        var src = str,
            b = str.indexOf('['),
            e = str.indexOf(']');

        if (b != -1 && e != -1) {
            str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }

        var m = re.exec(str || ''),
            uri = {},
            i = 14;

        while (i--) {
            uri[parts[i]] = m[i] || '';
        }

        if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
            uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
            uri.ipv6uri = true;
        }

        return uri;
    };

},{}],29:[function(_dereq_,module,exports){
    (function (global){
        /*! https://mths.be/utf8js v2.0.0 by @mathias */
        ;(function(root) {

            // Detect free variables `exports`
            var freeExports = typeof exports == 'object' && exports;

            // Detect free variable `module`
            var freeModule = typeof module == 'object' && module &&
                module.exports == freeExports && module;

            // Detect free variable `global`, from Node.js or Browserified code,
            // and use it as `root`
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
                root = freeGlobal;
            }

            /*--------------------------------------------------------------------------*/

            var stringFromCharCode = String.fromCharCode;

            // Taken from https://mths.be/punycode
            function ucs2decode(string) {
                var output = [];
                var counter = 0;
                var length = string.length;
                var value;
                var extra;
                while (counter < length) {
                    value = string.charCodeAt(counter++);
                    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                        // high surrogate, and there is a next character
                        extra = string.charCodeAt(counter++);
                        if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                            output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                        } else {
                            // unmatched surrogate; only append this code unit, in case the next
                            // code unit is the high surrogate of a surrogate pair
                            output.push(value);
                            counter--;
                        }
                    } else {
                        output.push(value);
                    }
                }
                return output;
            }

            // Taken from https://mths.be/punycode
            function ucs2encode(array) {
                var length = array.length;
                var index = -1;
                var value;
                var output = '';
                while (++index < length) {
                    value = array[index];
                    if (value > 0xFFFF) {
                        value -= 0x10000;
                        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                        value = 0xDC00 | value & 0x3FF;
                    }
                    output += stringFromCharCode(value);
                }
                return output;
            }

            function checkScalarValue(codePoint) {
                if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
                    throw Error(
                        'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
                        ' is not a scalar value'
                    );
                }
            }
            /*--------------------------------------------------------------------------*/

            function createByte(codePoint, shift) {
                return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
            }

            function encodeCodePoint(codePoint) {
                if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
                    return stringFromCharCode(codePoint);
                }
                var symbol = '';
                if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
                    symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
                }
                else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
                    checkScalarValue(codePoint);
                    symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
                    symbol += createByte(codePoint, 6);
                }
                else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
                    symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
                    symbol += createByte(codePoint, 12);
                    symbol += createByte(codePoint, 6);
                }
                symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
                return symbol;
            }

            function utf8encode(string) {
                var codePoints = ucs2decode(string);
                var length = codePoints.length;
                var index = -1;
                var codePoint;
                var byteString = '';
                while (++index < length) {
                    codePoint = codePoints[index];
                    byteString += encodeCodePoint(codePoint);
                }
                return byteString;
            }

            /*--------------------------------------------------------------------------*/

            function readContinuationByte() {
                if (byteIndex >= byteCount) {
                    throw Error('Invalid byte index');
                }

                var continuationByte = byteArray[byteIndex] & 0xFF;
                byteIndex++;

                if ((continuationByte & 0xC0) == 0x80) {
                    return continuationByte & 0x3F;
                }

                // If we end up here, it’s not a continuation byte
                throw Error('Invalid continuation byte');
            }

            function decodeSymbol() {
                var byte1;
                var byte2;
                var byte3;
                var byte4;
                var codePoint;

                if (byteIndex > byteCount) {
                    throw Error('Invalid byte index');
                }

                if (byteIndex == byteCount) {
                    return false;
                }

                // Read first byte
                byte1 = byteArray[byteIndex] & 0xFF;
                byteIndex++;

                // 1-byte sequence (no continuation bytes)
                if ((byte1 & 0x80) == 0) {
                    return byte1;
                }

                // 2-byte sequence
                if ((byte1 & 0xE0) == 0xC0) {
                    var byte2 = readContinuationByte();
                    codePoint = ((byte1 & 0x1F) << 6) | byte2;
                    if (codePoint >= 0x80) {
                        return codePoint;
                    } else {
                        throw Error('Invalid continuation byte');
                    }
                }

                // 3-byte sequence (may include unpaired surrogates)
                if ((byte1 & 0xF0) == 0xE0) {
                    byte2 = readContinuationByte();
                    byte3 = readContinuationByte();
                    codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
                    if (codePoint >= 0x0800) {
                        checkScalarValue(codePoint);
                        return codePoint;
                    } else {
                        throw Error('Invalid continuation byte');
                    }
                }

                // 4-byte sequence
                if ((byte1 & 0xF8) == 0xF0) {
                    byte2 = readContinuationByte();
                    byte3 = readContinuationByte();
                    byte4 = readContinuationByte();
                    codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
                        (byte3 << 0x06) | byte4;
                    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                        return codePoint;
                    }
                }

                throw Error('Invalid UTF-8 detected');
            }

            var byteArray;
            var byteCount;
            var byteIndex;
            function utf8decode(byteString) {
                byteArray = ucs2decode(byteString);
                byteCount = byteArray.length;
                byteIndex = 0;
                var codePoints = [];
                var tmp;
                while ((tmp = decodeSymbol()) !== false) {
                    codePoints.push(tmp);
                }
                return ucs2encode(codePoints);
            }

            /*--------------------------------------------------------------------------*/

            var utf8 = {
                'version': '2.0.0',
                'encode': utf8encode,
                'decode': utf8decode
            };

            // Some AMD build optimizers, like r.js, check for specific condition patterns
            // like the following:
            if (
                typeof define == 'function' &&
                typeof define.amd == 'object' &&
                define.amd
            ) {
                define(function() {
                    return utf8;
                });
            }	else if (freeExports && !freeExports.nodeType) {
                if (freeModule) { // in Node.js or RingoJS v0.8.0+
                    freeModule.exports = utf8;
                } else { // in Narwhal or RingoJS v0.7.0-
                    var object = {};
                    var hasOwnProperty = object.hasOwnProperty;
                    for (var key in utf8) {
                        hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
                    }
                }
            } else { // in Rhino or a web browser
                root.utf8 = utf8;
            }

        }(this));

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],30:[function(_dereq_,module,exports){
    'use strict';

    var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
        , length = 64
        , map = {}
        , seed = 0
        , i = 0
        , prev;

    /**
     * Return a string representing the specified number.
     *
     * @param {Number} num The number to convert.
     * @returns {String} The string representation of the number.
     * @api public
     */
    function encode(num) {
        var encoded = '';

        do {
            encoded = alphabet[num % length] + encoded;
            num = Math.floor(num / length);
        } while (num > 0);

        return encoded;
    }

    /**
     * Return the integer value specified by the given string.
     *
     * @param {String} str The string to convert.
     * @returns {Number} The integer value represented by the string.
     * @api public
     */
    function decode(str) {
        var decoded = 0;

        for (i = 0; i < str.length; i++) {
            decoded = decoded * length + map[str.charAt(i)];
        }

        return decoded;
    }

    /**
     * Yeast: A tiny growing id generator.
     *
     * @returns {String} A unique id.
     * @api public
     */
    function yeast() {
        var now = encode(+new Date());

        if (now !== prev) return seed = 0, prev = now;
        return now +'.'+ encode(seed++);
    }

//
// Map each character to its index.
//
    for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
    yeast.encode = encode;
    yeast.decode = decode;
    module.exports = yeast;

},{}],31:[function(_dereq_,module,exports){

    /**
     * Module dependencies.
     */

    var url = _dereq_('./url');
    var parser = _dereq_('socket.io-parser');
    var Manager = _dereq_('./manager');
    var debug = _dereq_('debug')('socket.io-client');

    /**
     * Module exports.
     */

    module.exports = exports = lookup;

    /**
     * Managers cache.
     */

    var cache = exports.managers = {};

    /**
     * Looks up an existing `Manager` for multiplexing.
     * If the user summons:
     *
     *   `io('http://localhost/a');`
     *   `io('http://localhost/b');`
     *
     * We reuse the existing instance based on same scheme/port/host,
     * and we initialize sockets for each namespace.
     *
     * @api public
     */

    function lookup(uri, opts) {
        if (typeof uri == 'object') {
            opts = uri;
            uri = undefined;
        }

        opts = opts || {};

        var parsed = url(uri);
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id].nsps;
        var newConnection = opts.forceNew || opts['force new connection'] ||
            false === opts.multiplex || sameNamespace;

        var io;

        if (newConnection) {
            debug('ignoring socket cache for %s', source);
            io = Manager(source, opts);
        } else {
            if (!cache[id]) {
                debug('new io instance for %s', source);
                cache[id] = Manager(source, opts);
            }
            io = cache[id];
        }

        return io.socket(parsed.path);
    }

    /**
     * Protocol version.
     *
     * @api public
     */

    exports.protocol = parser.protocol;

    /**
     * `connect`.
     *
     * @param {String} uri
     * @api public
     */

    exports.connect = lookup;

    /**
     * Expose constructors for standalone build.
     *
     * @api public
     */

    exports.Manager = _dereq_('./manager');
    exports.Socket = _dereq_('./socket');

},{"./manager":32,"./socket":34,"./url":35,"debug":39,"socket.io-parser":47}],32:[function(_dereq_,module,exports){

    /**
     * Module dependencies.
     */

    var eio = _dereq_('engine.io-client');
    var Socket = _dereq_('./socket');
    var Emitter = _dereq_('component-emitter');
    var parser = _dereq_('socket.io-parser');
    var on = _dereq_('./on');
    var bind = _dereq_('component-bind');
    var debug = _dereq_('debug')('socket.io-client:manager');
    var indexOf = _dereq_('indexof');
    var Backoff = _dereq_('backo2');

    /**
     * IE6+ hasOwnProperty
     */

    var has = Object.prototype.hasOwnProperty;

    /**
     * Module exports
     */

    module.exports = Manager;

    /**
     * `Manager` constructor.
     *
     * @param {String} engine instance or engine uri/opts
     * @param {Object} options
     * @api public
     */

    function Manager(uri, opts){
        if (!(this instanceof Manager)) return new Manager(uri, opts);
        if (uri && ('object' == typeof uri)) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};

        opts.path = opts.path || '/socket.io';
        this.nsps = {};
        this.subs = [];
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this.readyState = 'closed';
        this.uri = uri;
        this.connecting = [];
        this.lastPing = null;
        this.encoding = false;
        this.packetBuffer = [];
        this.encoder = new parser.Encoder();
        this.decoder = new parser.Decoder();
        this.autoConnect = opts.autoConnect !== false;
        if (this.autoConnect) this.open();
    }

    /**
     * Propagate given event to sockets and emit on `this`
     *
     * @api private
     */

    Manager.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var nsp in this.nsps) {
            if (has.call(this.nsps, nsp)) {
                this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
            }
        }
    };

    /**
     * Update `socket.id` of all sockets
     *
     * @api private
     */

    Manager.prototype.updateSocketIds = function(){
        for (var nsp in this.nsps) {
            if (has.call(this.nsps, nsp)) {
                this.nsps[nsp].id = this.engine.id;
            }
        }
    };

    /**
     * Mix in `Emitter`.
     */

    Emitter(Manager.prototype);

    /**
     * Sets the `reconnection` config.
     *
     * @param {Boolean} true/false if it should automatically reconnect
     * @return {Manager} self or value
     * @api public
     */

    Manager.prototype.reconnection = function(v){
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        return this;
    };

    /**
     * Sets the reconnection attempts config.
     *
     * @param {Number} max reconnection attempts before giving up
     * @return {Manager} self or value
     * @api public
     */

    Manager.prototype.reconnectionAttempts = function(v){
        if (!arguments.length) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    };

    /**
     * Sets the delay between reconnections.
     *
     * @param {Number} delay
     * @return {Manager} self or value
     * @api public
     */

    Manager.prototype.reconnectionDelay = function(v){
        if (!arguments.length) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        this.backoff && this.backoff.setMin(v);
        return this;
    };

    Manager.prototype.randomizationFactor = function(v){
        if (!arguments.length) return this._randomizationFactor;
        this._randomizationFactor = v;
        this.backoff && this.backoff.setJitter(v);
        return this;
    };

    /**
     * Sets the maximum delay between reconnections.
     *
     * @param {Number} delay
     * @return {Manager} self or value
     * @api public
     */

    Manager.prototype.reconnectionDelayMax = function(v){
        if (!arguments.length) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        this.backoff && this.backoff.setMax(v);
        return this;
    };

    /**
     * Sets the connection timeout. `false` to disable
     *
     * @return {Manager} self or value
     * @api public
     */

    Manager.prototype.timeout = function(v){
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    };

    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @api private
     */

    Manager.prototype.maybeReconnectOnOpen = function() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    };


    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} optional, callback
     * @return {Manager} self
     * @api public
     */

    Manager.prototype.open =
        Manager.prototype.connect = function(fn){
            debug('readyState %s', this.readyState);
            if (~this.readyState.indexOf('open')) return this;

            debug('opening %s', this.uri);
            this.engine = eio(this.uri, this.opts);
            var socket = this.engine;
            var self = this;
            this.readyState = 'opening';
            this.skipReconnect = false;

            // emit `open`
            var openSub = on(socket, 'open', function() {
                self.onopen();
                fn && fn();
            });

            // emit `connect_error`
            var errorSub = on(socket, 'error', function(data){
                debug('connect_error');
                self.cleanup();
                self.readyState = 'closed';
                self.emitAll('connect_error', data);
                if (fn) {
                    var err = new Error('Connection error');
                    err.data = data;
                    fn(err);
                } else {
                    // Only do this if there is no fn to handle the error
                    self.maybeReconnectOnOpen();
                }
            });

            // emit `connect_timeout`
            if (false !== this._timeout) {
                var timeout = this._timeout;
                debug('connect attempt will timeout after %d', timeout);

                // set timer
                var timer = setTimeout(function(){
                    debug('connect attempt timed out after %d', timeout);
                    openSub.destroy();
                    socket.close();
                    socket.emit('error', 'timeout');
                    self.emitAll('connect_timeout', timeout);
                }, timeout);

                this.subs.push({
                    destroy: function(){
                        clearTimeout(timer);
                    }
                });
            }

            this.subs.push(openSub);
            this.subs.push(errorSub);

            return this;
        };

    /**
     * Called upon transport open.
     *
     * @api private
     */

    Manager.prototype.onopen = function(){
        debug('open');

        // clear old subs
        this.cleanup();

        // mark as open
        this.readyState = 'open';
        this.emit('open');

        // add new subs
        var socket = this.engine;
        this.subs.push(on(socket, 'data', bind(this, 'ondata')));
        this.subs.push(on(socket, 'ping', bind(this, 'onping')));
        this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
        this.subs.push(on(socket, 'error', bind(this, 'onerror')));
        this.subs.push(on(socket, 'close', bind(this, 'onclose')));
        this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
    };

    /**
     * Called upon a ping.
     *
     * @api private
     */

    Manager.prototype.onping = function(){
        this.lastPing = new Date;
        this.emitAll('ping');
    };

    /**
     * Called upon a packet.
     *
     * @api private
     */

    Manager.prototype.onpong = function(){
        this.emitAll('pong', new Date - this.lastPing);
    };

    /**
     * Called with data.
     *
     * @api private
     */

    Manager.prototype.ondata = function(data){
        this.decoder.add(data);
    };

    /**
     * Called when parser fully decodes a packet.
     *
     * @api private
     */

    Manager.prototype.ondecoded = function(packet) {
        this.emit('packet', packet);
    };

    /**
     * Called upon socket error.
     *
     * @api private
     */

    Manager.prototype.onerror = function(err){
        debug('error', err);
        this.emitAll('error', err);
    };

    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @api public
     */

    Manager.prototype.socket = function(nsp){
        var socket = this.nsps[nsp];
        if (!socket) {
            socket = new Socket(this, nsp);
            this.nsps[nsp] = socket;
            var self = this;
            socket.on('connecting', onConnecting);
            socket.on('connect', function(){
                socket.id = self.engine.id;
            });

            if (this.autoConnect) {
                // manually call here since connecting evnet is fired before listening
                onConnecting();
            }
        }

        function onConnecting() {
            if (!~indexOf(self.connecting, socket)) {
                self.connecting.push(socket);
            }
        }

        return socket;
    };

    /**
     * Called upon a socket close.
     *
     * @param {Socket} socket
     */

    Manager.prototype.destroy = function(socket){
        var index = indexOf(this.connecting, socket);
        if (~index) this.connecting.splice(index, 1);
        if (this.connecting.length) return;

        this.close();
    };

    /**
     * Writes a packet.
     *
     * @param {Object} packet
     * @api private
     */

    Manager.prototype.packet = function(packet){
        debug('writing packet %j', packet);
        var self = this;

        if (!self.encoding) {
            // encode, then write to engine with result
            self.encoding = true;
            this.encoder.encode(packet, function(encodedPackets) {
                for (var i = 0; i < encodedPackets.length; i++) {
                    self.engine.write(encodedPackets[i], packet.options);
                }
                self.encoding = false;
                self.processPacketQueue();
            });
        } else { // add packet to the queue
            self.packetBuffer.push(packet);
        }
    };

    /**
     * If packet buffer is non-empty, begins encoding the
     * next packet in line.
     *
     * @api private
     */

    Manager.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var pack = this.packetBuffer.shift();
            this.packet(pack);
        }
    };

    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @api private
     */

    Manager.prototype.cleanup = function(){
        debug('cleanup');

        var sub;
        while (sub = this.subs.shift()) sub.destroy();

        this.packetBuffer = [];
        this.encoding = false;
        this.lastPing = null;

        this.decoder.destroy();
    };

    /**
     * Close the current socket.
     *
     * @api private
     */

    Manager.prototype.close =
        Manager.prototype.disconnect = function(){
            debug('disconnect');
            this.skipReconnect = true;
            this.reconnecting = false;
            if ('opening' == this.readyState) {
                // `onclose` will not fire because
                // an open event never happened
                this.cleanup();
            }
            this.backoff.reset();
            this.readyState = 'closed';
            if (this.engine) this.engine.close();
        };

    /**
     * Called upon engine close.
     *
     * @api private
     */

    Manager.prototype.onclose = function(reason){
        debug('onclose');

        this.cleanup();
        this.backoff.reset();
        this.readyState = 'closed';
        this.emit('close', reason);

        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    };

    /**
     * Attempt a reconnection.
     *
     * @api private
     */

    Manager.prototype.reconnect = function(){
        if (this.reconnecting || this.skipReconnect) return this;

        var self = this;

        if (this.backoff.attempts >= this._reconnectionAttempts) {
            debug('reconnect failed');
            this.backoff.reset();
            this.emitAll('reconnect_failed');
            this.reconnecting = false;
        } else {
            var delay = this.backoff.duration();
            debug('will wait %dms before reconnect attempt', delay);

            this.reconnecting = true;
            var timer = setTimeout(function(){
                if (self.skipReconnect) return;

                debug('attempting reconnect');
                self.emitAll('reconnect_attempt', self.backoff.attempts);
                self.emitAll('reconnecting', self.backoff.attempts);

                // check again for the case socket closed in above events
                if (self.skipReconnect) return;

                self.open(function(err){
                    if (err) {
                        debug('reconnect attempt error');
                        self.reconnecting = false;
                        self.reconnect();
                        self.emitAll('reconnect_error', err.data);
                    } else {
                        debug('reconnect success');
                        self.onreconnect();
                    }
                });
            }, delay);

            this.subs.push({
                destroy: function(){
                    clearTimeout(timer);
                }
            });
        }
    };

    /**
     * Called upon successful reconnect.
     *
     * @api private
     */

    Manager.prototype.onreconnect = function(){
        var attempt = this.backoff.attempts;
        this.reconnecting = false;
        this.backoff.reset();
        this.updateSocketIds();
        this.emitAll('reconnect', attempt);
    };

},{"./on":33,"./socket":34,"backo2":36,"component-bind":37,"component-emitter":38,"debug":39,"engine.io-client":1,"indexof":42,"socket.io-parser":47}],33:[function(_dereq_,module,exports){

    /**
     * Module exports.
     */

    module.exports = on;

    /**
     * Helper for subscriptions.
     *
     * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
     * @param {String} event name
     * @param {Function} callback
     * @api public
     */

    function on(obj, ev, fn) {
        obj.on(ev, fn);
        return {
            destroy: function(){
                obj.removeListener(ev, fn);
            }
        };
    }

},{}],34:[function(_dereq_,module,exports){

    /**
     * Module dependencies.
     */

    var parser = _dereq_('socket.io-parser');
    var Emitter = _dereq_('component-emitter');
    var toArray = _dereq_('to-array');
    var on = _dereq_('./on');
    var bind = _dereq_('component-bind');
    var debug = _dereq_('debug')('socket.io-client:socket');
    var hasBin = _dereq_('has-binary');

    /**
     * Module exports.
     */

    module.exports = exports = Socket;

    /**
     * Internal events (blacklisted).
     * These events can't be emitted by the user.
     *
     * @api private
     */

    var events = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
    };

    /**
     * Shortcut to `Emitter#emit`.
     */

    var emit = Emitter.prototype.emit;

    /**
     * `Socket` constructor.
     *
     * @api public
     */

    function Socket(io, nsp){
        this.io = io;
        this.nsp = nsp;
        this.json = this; // compat
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        if (this.io.autoConnect) this.open();
    }

    /**
     * Mix in `Emitter`.
     */

    Emitter(Socket.prototype);

    /**
     * Subscribe to open, close and packet events
     *
     * @api private
     */

    Socket.prototype.subEvents = function() {
        if (this.subs) return;

        var io = this.io;
        this.subs = [
            on(io, 'open', bind(this, 'onopen')),
            on(io, 'packet', bind(this, 'onpacket')),
            on(io, 'close', bind(this, 'onclose'))
        ];
    };

    /**
     * "Opens" the socket.
     *
     * @api public
     */

    Socket.prototype.open =
        Socket.prototype.connect = function(){
            if (this.connected) return this;

            this.subEvents();
            this.io.open(); // ensure open
            if ('open' == this.io.readyState) this.onopen();
            this.emit('connecting');
            return this;
        };

    /**
     * Sends a `message` event.
     *
     * @return {Socket} self
     * @api public
     */

    Socket.prototype.send = function(){
        var args = toArray(arguments);
        args.unshift('message');
        this.emit.apply(this, args);
        return this;
    };

    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @param {String} event name
     * @return {Socket} self
     * @api public
     */

    Socket.prototype.emit = function(ev){
        if (events.hasOwnProperty(ev)) {
            emit.apply(this, arguments);
            return this;
        }

        var args = toArray(arguments);
        var parserType = parser.EVENT; // default
        if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
        var packet = { type: parserType, data: args };

        packet.options = {};
        packet.options.compress = !this.flags || false !== this.flags.compress;

        // event ack callback
        if ('function' == typeof args[args.length - 1]) {
            debug('emitting packet with ack id %d', this.ids);
            this.acks[this.ids] = args.pop();
            packet.id = this.ids++;
        }

        if (this.connected) {
            this.packet(packet);
        } else {
            this.sendBuffer.push(packet);
        }

        delete this.flags;

        return this;
    };

    /**
     * Sends a packet.
     *
     * @param {Object} packet
     * @api private
     */

    Socket.prototype.packet = function(packet){
        packet.nsp = this.nsp;
        this.io.packet(packet);
    };

    /**
     * Called upon engine `open`.
     *
     * @api private
     */

    Socket.prototype.onopen = function(){
        debug('transport is open - connecting');

        // write connect packet if necessary
        if ('/' != this.nsp) {
            this.packet({ type: parser.CONNECT });
        }
    };

    /**
     * Called upon engine `close`.
     *
     * @param {String} reason
     * @api private
     */

    Socket.prototype.onclose = function(reason){
        debug('close (%s)', reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emit('disconnect', reason);
    };

    /**
     * Called with socket packet.
     *
     * @param {Object} packet
     * @api private
     */

    Socket.prototype.onpacket = function(packet){
        if (packet.nsp != this.nsp) return;

        switch (packet.type) {
            case parser.CONNECT:
                this.onconnect();
                break;

            case parser.EVENT:
                this.onevent(packet);
                break;

            case parser.BINARY_EVENT:
                this.onevent(packet);
                break;

            case parser.ACK:
                this.onack(packet);
                break;

            case parser.BINARY_ACK:
                this.onack(packet);
                break;

            case parser.DISCONNECT:
                this.ondisconnect();
                break;

            case parser.ERROR:
                this.emit('error', packet.data);
                break;
        }
    };

    /**
     * Called upon a server event.
     *
     * @param {Object} packet
     * @api private
     */

    Socket.prototype.onevent = function(packet){
        var args = packet.data || [];
        debug('emitting event %j', args);

        if (null != packet.id) {
            debug('attaching ack callback to event');
            args.push(this.ack(packet.id));
        }

        if (this.connected) {
            emit.apply(this, args);
        } else {
            this.receiveBuffer.push(args);
        }
    };

    /**
     * Produces an ack callback to emit with an event.
     *
     * @api private
     */

    Socket.prototype.ack = function(id){
        var self = this;
        var sent = false;
        return function(){
            // prevent double callbacks
            if (sent) return;
            sent = true;
            var args = toArray(arguments);
            debug('sending ack %j', args);

            var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
            self.packet({
                type: type,
                id: id,
                data: args
            });
        };
    };

    /**
     * Called upon a server acknowlegement.
     *
     * @param {Object} packet
     * @api private
     */

    Socket.prototype.onack = function(packet){
        var ack = this.acks[packet.id];
        if ('function' == typeof ack) {
            debug('calling ack %s with %j', packet.id, packet.data);
            ack.apply(this, packet.data);
            delete this.acks[packet.id];
        } else {
            debug('bad ack %s', packet.id);
        }
    };

    /**
     * Called upon server connect.
     *
     * @api private
     */

    Socket.prototype.onconnect = function(){
        this.connected = true;
        this.disconnected = false;
        this.emit('connect');
        this.emitBuffered();
    };

    /**
     * Emit buffered events (received and emitted).
     *
     * @api private
     */

    Socket.prototype.emitBuffered = function(){
        var i;
        for (i = 0; i < this.receiveBuffer.length; i++) {
            emit.apply(this, this.receiveBuffer[i]);
        }
        this.receiveBuffer = [];

        for (i = 0; i < this.sendBuffer.length; i++) {
            this.packet(this.sendBuffer[i]);
        }
        this.sendBuffer = [];
    };

    /**
     * Called upon server disconnect.
     *
     * @api private
     */

    Socket.prototype.ondisconnect = function(){
        debug('server disconnect (%s)', this.nsp);
        this.destroy();
        this.onclose('io server disconnect');
    };

    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @api private.
     */

    Socket.prototype.destroy = function(){
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            for (var i = 0; i < this.subs.length; i++) {
                this.subs[i].destroy();
            }
            this.subs = null;
        }

        this.io.destroy(this);
    };

    /**
     * Disconnects the socket manually.
     *
     * @return {Socket} self
     * @api public
     */

    Socket.prototype.close =
        Socket.prototype.disconnect = function(){
            if (this.connected) {
                debug('performing disconnect (%s)', this.nsp);
                this.packet({ type: parser.DISCONNECT });
            }

            // remove socket from pool
            this.destroy();

            if (this.connected) {
                // fire events
                this.onclose('io client disconnect');
            }
            return this;
        };

    /**
     * Sets the compress flag.
     *
     * @param {Boolean} if `true`, compresses the sending data
     * @return {Socket} self
     * @api public
     */

    Socket.prototype.compress = function(compress){
        this.flags = this.flags || {};
        this.flags.compress = compress;
        return this;
    };

},{"./on":33,"component-bind":37,"component-emitter":38,"debug":39,"has-binary":41,"socket.io-parser":47,"to-array":51}],35:[function(_dereq_,module,exports){
    (function (global){

        /**
         * Module dependencies.
         */

        var parseuri = _dereq_('parseuri');
        var debug = _dereq_('debug')('socket.io-client:url');

        /**
         * Module exports.
         */

        module.exports = url;

        /**
         * URL parser.
         *
         * @param {String} url
         * @param {Object} An object meant to mimic window.location.
         *                 Defaults to window.location.
         * @api public
         */

        function url(uri, loc){
            var obj = uri;

            // default to window.location
            var loc = loc || global.location;
            if (null == uri) uri = loc.protocol + '//' + loc.host;

            // relative path support
            if ('string' == typeof uri) {
                if ('/' == uri.charAt(0)) {
                    if ('/' == uri.charAt(1)) {
                        uri = loc.protocol + uri;
                    } else {
                        uri = loc.host + uri;
                    }
                }

                if (!/^(https?|wss?):\/\//.test(uri)) {
                    debug('protocol-less url %s', uri);
                    if ('undefined' != typeof loc) {
                        uri = loc.protocol + '//' + uri;
                    } else {
                        uri = 'https://' + uri;
                    }
                }

                // parse
                debug('parse %s', uri);
                obj = parseuri(uri);
            }

            // make sure we treat `localhost:80` and `localhost` equally
            if (!obj.port) {
                if (/^(http|ws)$/.test(obj.protocol)) {
                    obj.port = '80';
                }
                else if (/^(http|ws)s$/.test(obj.protocol)) {
                    obj.port = '443';
                }
            }

            obj.path = obj.path || '/';

            var ipv6 = obj.host.indexOf(':') !== -1;
            var host = ipv6 ? '[' + obj.host + ']' : obj.host;

            // define unique id
            obj.id = obj.protocol + '://' + host + ':' + obj.port;
            // define href
            obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

            return obj;
        }

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"debug":39,"parseuri":45}],36:[function(_dereq_,module,exports){

    /**
     * Expose `Backoff`.
     */

    module.exports = Backoff;

    /**
     * Initialize backoff timer with `opts`.
     *
     * - `min` initial timeout in milliseconds [100]
     * - `max` max timeout [10000]
     * - `jitter` [0]
     * - `factor` [2]
     *
     * @param {Object} opts
     * @api public
     */

    function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
    }

    /**
     * Return the backoff duration.
     *
     * @return {Number}
     * @api public
     */

    Backoff.prototype.duration = function(){
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var rand =  Math.random();
            var deviation = Math.floor(rand * this.jitter * ms);
            ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
    };

    /**
     * Reset the number of attempts.
     *
     * @api public
     */

    Backoff.prototype.reset = function(){
        this.attempts = 0;
    };

    /**
     * Set the minimum duration
     *
     * @api public
     */

    Backoff.prototype.setMin = function(min){
        this.ms = min;
    };

    /**
     * Set the maximum duration
     *
     * @api public
     */

    Backoff.prototype.setMax = function(max){
        this.max = max;
    };

    /**
     * Set the jitter
     *
     * @api public
     */

    Backoff.prototype.setJitter = function(jitter){
        this.jitter = jitter;
    };


},{}],37:[function(_dereq_,module,exports){
    /**
     * Slice reference.
     */

    var slice = [].slice;

    /**
     * Bind `obj` to `fn`.
     *
     * @param {Object} obj
     * @param {Function|String} fn or string
     * @return {Function}
     * @api public
     */

    module.exports = function(obj, fn){
        if ('string' == typeof fn) fn = obj[fn];
        if ('function' != typeof fn) throw new Error('bind() requires a function');
        var args = slice.call(arguments, 2);
        return function(){
            return fn.apply(obj, args.concat(slice.call(arguments)));
        }
    };

},{}],38:[function(_dereq_,module,exports){

    /**
     * Expose `Emitter`.
     */

    module.exports = Emitter;

    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */

    function Emitter(obj) {
        if (obj) return mixin(obj);
    };

    /**
     * Mixin the emitter properties.
     *
     * @param {Object} obj
     * @return {Object}
     * @api private
     */

    function mixin(obj) {
        for (var key in Emitter.prototype) {
            obj[key] = Emitter.prototype[key];
        }
        return obj;
    }

    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.on =
        Emitter.prototype.addEventListener = function(event, fn){
            this._callbacks = this._callbacks || {};
            (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
                .push(fn);
            return this;
        };

    /**
     * Adds an `event` listener that will be invoked a single
     * time then automatically removed.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.once = function(event, fn){
        function on() {
            this.off(event, on);
            fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
    };

    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */

    Emitter.prototype.off =
        Emitter.prototype.removeListener =
            Emitter.prototype.removeAllListeners =
                Emitter.prototype.removeEventListener = function(event, fn){
                    this._callbacks = this._callbacks || {};

                    // all
                    if (0 == arguments.length) {
                        this._callbacks = {};
                        return this;
                    }

                    // specific event
                    var callbacks = this._callbacks['$' + event];
                    if (!callbacks) return this;

                    // remove all handlers
                    if (1 == arguments.length) {
                        delete this._callbacks['$' + event];
                        return this;
                    }

                    // remove specific handler
                    var cb;
                    for (var i = 0; i < callbacks.length; i++) {
                        cb = callbacks[i];
                        if (cb === fn || cb.fn === fn) {
                            callbacks.splice(i, 1);
                            break;
                        }
                    }
                    return this;
                };

    /**
     * Emit `event` with the given args.
     *
     * @param {String} event
     * @param {Mixed} ...
     * @return {Emitter}
     */

    Emitter.prototype.emit = function(event){
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1)
            , callbacks = this._callbacks['$' + event];

        if (callbacks) {
            callbacks = callbacks.slice(0);
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                callbacks[i].apply(this, args);
            }
        }

        return this;
    };

    /**
     * Return array of callbacks for `event`.
     *
     * @param {String} event
     * @return {Array}
     * @api public
     */

    Emitter.prototype.listeners = function(event){
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
    };

    /**
     * Check if this emitter has `event` handlers.
     *
     * @param {String} event
     * @return {Boolean}
     * @api public
     */

    Emitter.prototype.hasListeners = function(event){
        return !! this.listeners(event).length;
    };

},{}],39:[function(_dereq_,module,exports){
    arguments[4][17][0].apply(exports,arguments)
},{"./debug":40,"dup":17}],40:[function(_dereq_,module,exports){
    arguments[4][18][0].apply(exports,arguments)
},{"dup":18,"ms":44}],41:[function(_dereq_,module,exports){
    (function (global){

        /*
         * Module requirements.
         */

        var isArray = _dereq_('isarray');

        /**
         * Module exports.
         */

        module.exports = hasBinary;

        /**
         * Checks for binary data.
         *
         * Right now only Buffer and ArrayBuffer are supported..
         *
         * @param {Object} anything
         * @api public
         */

        function hasBinary(data) {

            function _hasBinary(obj) {
                if (!obj) return false;

                if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
                    (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
                    (global.Blob && obj instanceof Blob) ||
                    (global.File && obj instanceof File)
                ) {
                    return true;
                }

                if (isArray(obj)) {
                    for (var i = 0; i < obj.length; i++) {
                        if (_hasBinary(obj[i])) {
                            return true;
                        }
                    }
                } else if (obj && 'object' == typeof obj) {
                    // see: https://github.com/Automattic/has-binary/pull/4
                    if (obj.toJSON && 'function' == typeof obj.toJSON) {
                        obj = obj.toJSON();
                    }

                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                            return true;
                        }
                    }
                }

                return false;
            }

            return _hasBinary(data);
        }

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":43}],42:[function(_dereq_,module,exports){
    arguments[4][23][0].apply(exports,arguments)
},{"dup":23}],43:[function(_dereq_,module,exports){
    arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],44:[function(_dereq_,module,exports){
    arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],45:[function(_dereq_,module,exports){
    arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],46:[function(_dereq_,module,exports){
    (function (global){
        /*global Blob,File*/

        /**
         * Module requirements
         */

        var isArray = _dereq_('isarray');
        var isBuf = _dereq_('./is-buffer');

        /**
         * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
         * Anything with blobs or files should be fed through removeBlobs before coming
         * here.
         *
         * @param {Object} packet - socket.io event packet
         * @return {Object} with deconstructed packet and list of buffers
         * @api public
         */

        exports.deconstructPacket = function(packet){
            var buffers = [];
            var packetData = packet.data;

            function _deconstructPacket(data) {
                if (!data) return data;

                if (isBuf(data)) {
                    var placeholder = { _placeholder: true, num: buffers.length };
                    buffers.push(data);
                    return placeholder;
                } else if (isArray(data)) {
                    var newData = new Array(data.length);
                    for (var i = 0; i < data.length; i++) {
                        newData[i] = _deconstructPacket(data[i]);
                    }
                    return newData;
                } else if ('object' == typeof data && !(data instanceof Date)) {
                    var newData = {};
                    for (var key in data) {
                        newData[key] = _deconstructPacket(data[key]);
                    }
                    return newData;
                }
                return data;
            }

            var pack = packet;
            pack.data = _deconstructPacket(packetData);
            pack.attachments = buffers.length; // number of binary 'attachments'
            return {packet: pack, buffers: buffers};
        };

        /**
         * Reconstructs a binary packet from its placeholder packet and buffers
         *
         * @param {Object} packet - event packet with placeholders
         * @param {Array} buffers - binary buffers to put in placeholder positions
         * @return {Object} reconstructed packet
         * @api public
         */

        exports.reconstructPacket = function(packet, buffers) {
            var curPlaceHolder = 0;

            function _reconstructPacket(data) {
                if (data && data._placeholder) {
                    var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
                    return buf;
                } else if (isArray(data)) {
                    for (var i = 0; i < data.length; i++) {
                        data[i] = _reconstructPacket(data[i]);
                    }
                    return data;
                } else if (data && 'object' == typeof data) {
                    for (var key in data) {
                        data[key] = _reconstructPacket(data[key]);
                    }
                    return data;
                }
                return data;
            }

            packet.data = _reconstructPacket(packet.data);
            packet.attachments = undefined; // no longer useful
            return packet;
        };

        /**
         * Asynchronously removes Blobs or Files from data via
         * FileReader's readAsArrayBuffer method. Used before encoding
         * data as msgpack. Calls callback with the blobless data.
         *
         * @param {Object} data
         * @param {Function} callback
         * @api private
         */

        exports.removeBlobs = function(data, callback) {
            function _removeBlobs(obj, curKey, containingObject) {
                if (!obj) return obj;

                // convert any blob
                if ((global.Blob && obj instanceof Blob) ||
                    (global.File && obj instanceof File)) {
                    pendingBlobs++;

                    // async filereader
                    var fileReader = new FileReader();
                    fileReader.onload = function() { // this.result == arraybuffer
                        if (containingObject) {
                            containingObject[curKey] = this.result;
                        }
                        else {
                            bloblessData = this.result;
                        }

                        // if nothing pending its callback time
                        if(! --pendingBlobs) {
                            callback(bloblessData);
                        }
                    };

                    fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
                } else if (isArray(obj)) { // handle array
                    for (var i = 0; i < obj.length; i++) {
                        _removeBlobs(obj[i], i, obj);
                    }
                } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
                    for (var key in obj) {
                        _removeBlobs(obj[key], key, obj);
                    }
                }
            }

            var pendingBlobs = 0;
            var bloblessData = data;
            _removeBlobs(bloblessData);
            if (!pendingBlobs) {
                callback(bloblessData);
            }
        };

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./is-buffer":48,"isarray":43}],47:[function(_dereq_,module,exports){

    /**
     * Module dependencies.
     */

    var debug = _dereq_('debug')('socket.io-parser');
    var json = _dereq_('json3');
    var isArray = _dereq_('isarray');
    var Emitter = _dereq_('component-emitter');
    var binary = _dereq_('./binary');
    var isBuf = _dereq_('./is-buffer');

    /**
     * Protocol version.
     *
     * @api public
     */

    exports.protocol = 4;

    /**
     * Packet types.
     *
     * @api public
     */

    exports.types = [
        'CONNECT',
        'DISCONNECT',
        'EVENT',
        'BINARY_EVENT',
        'ACK',
        'BINARY_ACK',
        'ERROR'
    ];

    /**
     * Packet type `connect`.
     *
     * @api public
     */

    exports.CONNECT = 0;

    /**
     * Packet type `disconnect`.
     *
     * @api public
     */

    exports.DISCONNECT = 1;

    /**
     * Packet type `event`.
     *
     * @api public
     */

    exports.EVENT = 2;

    /**
     * Packet type `ack`.
     *
     * @api public
     */

    exports.ACK = 3;

    /**
     * Packet type `error`.
     *
     * @api public
     */

    exports.ERROR = 4;

    /**
     * Packet type 'binary event'
     *
     * @api public
     */

    exports.BINARY_EVENT = 5;

    /**
     * Packet type `binary ack`. For acks with binary arguments.
     *
     * @api public
     */

    exports.BINARY_ACK = 6;

    /**
     * Encoder constructor.
     *
     * @api public
     */

    exports.Encoder = Encoder;

    /**
     * Decoder constructor.
     *
     * @api public
     */

    exports.Decoder = Decoder;

    /**
     * A socket.io Encoder instance
     *
     * @api public
     */

    function Encoder() {}

    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     * @param {Function} callback - function to handle encodings (likely engine.write)
     * @return Calls callback with Array of encodings
     * @api public
     */

    Encoder.prototype.encode = function(obj, callback){
        debug('encoding packet %j', obj);

        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
            encodeAsBinary(obj, callback);
        }
        else {
            var encoding = encodeAsString(obj);
            callback([encoding]);
        }
    };

    /**
     * Encode packet as string.
     *
     * @param {Object} packet
     * @return {String} encoded
     * @api private
     */

    function encodeAsString(obj) {
        var str = '';
        var nsp = false;

        // first is type
        str += obj.type;

        // attachments if we have them
        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
            str += obj.attachments;
            str += '-';
        }

        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && '/' != obj.nsp) {
            nsp = true;
            str += obj.nsp;
        }

        // immediately followed by the id
        if (null != obj.id) {
            if (nsp) {
                str += ',';
                nsp = false;
            }
            str += obj.id;
        }

        // json data
        if (null != obj.data) {
            if (nsp) str += ',';
            str += json.stringify(obj.data);
        }

        debug('encoded %j as %s', obj, str);
        return str;
    }

    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     *
     * @param {Object} packet
     * @return {Buffer} encoded
     * @api private
     */

    function encodeAsBinary(obj, callback) {

        function writeEncoding(bloblessData) {
            var deconstruction = binary.deconstructPacket(bloblessData);
            var pack = encodeAsString(deconstruction.packet);
            var buffers = deconstruction.buffers;

            buffers.unshift(pack); // add packet info to beginning of data list
            callback(buffers); // write all the buffers
        }

        binary.removeBlobs(obj, writeEncoding);
    }

    /**
     * A socket.io Decoder instance
     *
     * @return {Object} decoder
     * @api public
     */

    function Decoder() {
        this.reconstructor = null;
    }

    /**
     * Mix in `Emitter` with Decoder.
     */

    Emitter(Decoder.prototype);

    /**
     * Decodes an ecoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     * @return {Object} packet
     * @api public
     */

    Decoder.prototype.add = function(obj) {
        var packet;
        if ('string' == typeof obj) {
            packet = decodeString(obj);
            if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);

                // no attachments, labeled binary but no binary data to follow
                if (this.reconstructor.reconPack.attachments === 0) {
                    this.emit('decoded', packet);
                }
            } else { // non-binary full packet
                this.emit('decoded', packet);
            }
        }
        else if (isBuf(obj) || obj.base64) { // raw binary data
            if (!this.reconstructor) {
                throw new Error('got binary data when not reconstructing a packet');
            } else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) { // received final buffer
                    this.reconstructor = null;
                    this.emit('decoded', packet);
                }
            }
        }
        else {
            throw new Error('Unknown type: ' + obj);
        }
    };

    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     * @api private
     */

    function decodeString(str) {
        var p = {};
        var i = 0;

        // look up type
        p.type = Number(str.charAt(0));
        if (null == exports.types[p.type]) return error();

        // look up attachments if type binary
        if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
            var buf = '';
            while (str.charAt(++i) != '-') {
                buf += str.charAt(i);
                if (i == str.length) break;
            }
            if (buf != Number(buf) || str.charAt(i) != '-') {
                throw new Error('Illegal attachments');
            }
            p.attachments = Number(buf);
        }

        // look up namespace (if any)
        if ('/' == str.charAt(i + 1)) {
            p.nsp = '';
            while (++i) {
                var c = str.charAt(i);
                if (',' == c) break;
                p.nsp += c;
                if (i == str.length) break;
            }
        } else {
            p.nsp = '/';
        }

        // look up id
        var next = str.charAt(i + 1);
        if ('' !== next && Number(next) == next) {
            p.id = '';
            while (++i) {
                var c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                p.id += str.charAt(i);
                if (i == str.length) break;
            }
            p.id = Number(p.id);
        }

        // look up json data
        if (str.charAt(++i)) {
            try {
                p.data = json.parse(str.substr(i));
            } catch(e){
                return error();
            }
        }

        debug('decoded %s as %j', str, p);
        return p;
    }

    /**
     * Deallocates a parser's resources
     *
     * @api public
     */

    Decoder.prototype.destroy = function() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
        }
    };

    /**
     * A manager of a binary event's 'buffer sequence'. Should
     * be constructed whenever a packet of type BINARY_EVENT is
     * decoded.
     *
     * @param {Object} packet
     * @return {BinaryReconstructor} initialized reconstructor
     * @api private
     */

    function BinaryReconstructor(packet) {
        this.reconPack = packet;
        this.buffers = [];
    }

    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     * @api private
     */

    BinaryReconstructor.prototype.takeBinaryData = function(binData) {
        this.buffers.push(binData);
        if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
            var packet = binary.reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    };

    /**
     * Cleans up binary packet reconstruction variables.
     *
     * @api private
     */

    BinaryReconstructor.prototype.finishedReconstruction = function() {
        this.reconPack = null;
        this.buffers = [];
    };

    function error(data){
        return {
            type: exports.ERROR,
            data: 'parser error'
        };
    }

},{"./binary":46,"./is-buffer":48,"component-emitter":49,"debug":39,"isarray":43,"json3":50}],48:[function(_dereq_,module,exports){
    (function (global){

        module.exports = isBuf;

        /**
         * Returns true if obj is a buffer or an arraybuffer.
         *
         * @api private
         */

        function isBuf(obj) {
            return (global.Buffer && global.Buffer.isBuffer(obj)) ||
                (global.ArrayBuffer && obj instanceof ArrayBuffer);
        }

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],49:[function(_dereq_,module,exports){
    arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],50:[function(_dereq_,module,exports){
    (function (global){
        /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
        ;(function () {
            // Detect the `define` function exposed by asynchronous module loaders. The
            // strict `define` check is necessary for compatibility with `r.js`.
            var isLoader = typeof define === "function" && define.amd;

            // A set of types used to distinguish objects from primitives.
            var objectTypes = {
                "function": true,
                "object": true
            };

            // Detect the `exports` object exposed by CommonJS implementations.
            var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

            // Use the `global` object exposed by Node (including Browserify via
            // `insert-module-globals`), Narwhal, and Ringo as the default context,
            // and the `window` object in browsers. Rhino exports a `global` function
            // instead.
            var root = objectTypes[typeof window] && window || this,
                freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

            if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
                root = freeGlobal;
            }

            // Public: Initializes JSON 3 using the given `context` object, attaching the
            // `stringify` and `parse` functions to the specified `exports` object.
            function runInContext(context, exports) {
                context || (context = root["Object"]());
                exports || (exports = root["Object"]());

                // Native constructor aliases.
                var Number = context["Number"] || root["Number"],
                    String = context["String"] || root["String"],
                    Object = context["Object"] || root["Object"],
                    Date = context["Date"] || root["Date"],
                    SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                    TypeError = context["TypeError"] || root["TypeError"],
                    Math = context["Math"] || root["Math"],
                    nativeJSON = context["JSON"] || root["JSON"];

                // Delegate to the native `stringify` and `parse` implementations.
                if (typeof nativeJSON == "object" && nativeJSON) {
                    exports.stringify = nativeJSON.stringify;
                    exports.parse = nativeJSON.parse;
                }

                // Convenience aliases.
                var objectProto = Object.prototype,
                    getClass = objectProto.toString,
                    isProperty, forEach, undef;

                // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
                var isExtended = new Date(-3509827334573292);
                try {
                    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
                    // results for certain dates in Opera >= 10.53.
                    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
                            // Safari < 2.0.2 stores the internal millisecond time value correctly,
                            // but clips the values returned by the date methods to the range of
                            // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
                        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
                } catch (exception) {}

                // Internal: Determines whether the native `JSON.stringify` and `parse`
                // implementations are spec-compliant. Based on work by Ken Snyder.
                function has(name) {
                    if (has[name] !== undef) {
                        // Return cached feature test result.
                        return has[name];
                    }
                    var isSupported;
                    if (name == "bug-string-char-index") {
                        // IE <= 7 doesn't support accessing string characters using square
                        // bracket notation. IE 8 only supports this for primitives.
                        isSupported = "a"[0] != "a";
                    } else if (name == "json") {
                        // Indicates whether both `JSON.stringify` and `JSON.parse` are
                        // supported.
                        isSupported = has("json-stringify") && has("json-parse");
                    } else {
                        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        // Test `JSON.stringify`.
                        if (name == "json-stringify") {
                            var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
                            if (stringifySupported) {
                                // A test function object with a custom `toJSON` method.
                                (value = function () {
                                    return 1;
                                }).toJSON = value;
                                try {
                                    stringifySupported =
                                        // Firefox 3.1b1 and b2 serialize string, number, and boolean
                                        // primitives as object literals.
                                        stringify(0) === "0" &&
                                            // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                                            // literals.
                                        stringify(new Number()) === "0" &&
                                        stringify(new String()) == '""' &&
                                            // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                                            // does not define a canonical JSON representation (this applies to
                                            // objects with `toJSON` properties as well, *unless* they are nested
                                            // within an object or array).
                                        stringify(getClass) === undef &&
                                            // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                                            // FF 3.1b3 pass this test.
                                        stringify(undef) === undef &&
                                            // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                                            // respectively, if the value is omitted entirely.
                                        stringify() === undef &&
                                            // FF 3.1b1, 2 throw an error if the given value is not a number,
                                            // string, array, object, Boolean, or `null` literal. This applies to
                                            // objects with custom `toJSON` methods as well, unless they are nested
                                            // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                                            // methods entirely.
                                        stringify(value) === "1" &&
                                        stringify([value]) == "[1]" &&
                                            // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                                            // `"[null]"`.
                                        stringify([undef]) == "[null]" &&
                                            // YUI 3.0.0b1 fails to serialize `null` literals.
                                        stringify(null) == "null" &&
                                            // FF 3.1b1, 2 halts serialization if an array contains a function:
                                            // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                                            // elides non-JSON values from objects and arrays, unless they
                                            // define custom `toJSON` methods.
                                        stringify([undef, getClass, null]) == "[null,null,null]" &&
                                            // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                                            // where character escape codes are expected (e.g., `\b` => `\u0008`).
                                        stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                                            // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                                        stringify(null, value) === "1" &&
                                        stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                                            // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                                            // serialize extended years.
                                        stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                                            // The milliseconds are optional in ES 5, but required in 5.1.
                                        stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                                            // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                                            // four-digit years instead of six-digit years. Credits: @Yaffle.
                                        stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                                            // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                                            // values less than 1000. Credits: @Yaffle.
                                        stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                                } catch (exception) {
                                    stringifySupported = false;
                                }
                            }
                            isSupported = stringifySupported;
                        }
                        // Test `JSON.parse`.
                        if (name == "json-parse") {
                            var parse = exports.parse;
                            if (typeof parse == "function") {
                                try {
                                    // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                                    // Conforming implementations should also coerce the initial argument to
                                    // a string prior to parsing.
                                    if (parse("0") === 0 && !parse(false)) {
                                        // Simple parsing test.
                                        value = parse(serialized);
                                        var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                                        if (parseSupported) {
                                            try {
                                                // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                                                parseSupported = !parse('"\t"');
                                            } catch (exception) {}
                                            if (parseSupported) {
                                                try {
                                                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                                                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                                                    // certain octal literals.
                                                    parseSupported = parse("01") !== 1;
                                                } catch (exception) {}
                                            }
                                            if (parseSupported) {
                                                try {
                                                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                                                    // points. These environments, along with FF 3.1b1 and 2,
                                                    // also allow trailing commas in JSON objects and arrays.
                                                    parseSupported = parse("1.") !== 1;
                                                } catch (exception) {}
                                            }
                                        }
                                    }
                                } catch (exception) {
                                    parseSupported = false;
                                }
                            }
                            isSupported = parseSupported;
                        }
                    }
                    return has[name] = !!isSupported;
                }

                if (!has("json")) {
                    // Common `[[Class]]` name aliases.
                    var functionClass = "[object Function]",
                        dateClass = "[object Date]",
                        numberClass = "[object Number]",
                        stringClass = "[object String]",
                        arrayClass = "[object Array]",
                        booleanClass = "[object Boolean]";

                    // Detect incomplete support for accessing string characters by index.
                    var charIndexBuggy = has("bug-string-char-index");

                    // Define additional utility methods if the `Date` methods are buggy.
                    if (!isExtended) {
                        var floor = Math.floor;
                        // A mapping between the months of the year and the number of days between
                        // January 1st and the first of the respective month.
                        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                        // Internal: Calculates the number of days between the Unix epoch and the
                        // first day of the given month.
                        var getDay = function (year, month) {
                            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                        };
                    }

                    // Internal: Determines if a property is a direct property of the given
                    // object. Delegates to the native `Object#hasOwnProperty` method.
                    if (!(isProperty = objectProto.hasOwnProperty)) {
                        isProperty = function (property) {
                            var members = {}, constructor;
                            if ((members.__proto__ = null, members.__proto__ = {
                                    // The *proto* property cannot be set multiple times in recent
                                    // versions of Firefox and SeaMonkey.
                                    "toString": 1
                                }, members).toString != getClass) {
                                // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
                                // supports the mutable *proto* property.
                                isProperty = function (property) {
                                    // Capture and break the object's prototype chain (see section 8.6.2
                                    // of the ES 5.1 spec). The parenthesized expression prevents an
                                    // unsafe transformation by the Closure Compiler.
                                    var original = this.__proto__, result = property in (this.__proto__ = null, this);
                                    // Restore the original prototype chain.
                                    this.__proto__ = original;
                                    return result;
                                };
                            } else {
                                // Capture a reference to the top-level `Object` constructor.
                                constructor = members.constructor;
                                // Use the `constructor` property to simulate `Object#hasOwnProperty` in
                                // other environments.
                                isProperty = function (property) {
                                    var parent = (this.constructor || constructor).prototype;
                                    return property in this && !(property in parent && this[property] === parent[property]);
                                };
                            }
                            members = null;
                            return isProperty.call(this, property);
                        };
                    }

                    // Internal: Normalizes the `for...in` iteration algorithm across
                    // environments. Each enumerated key is yielded to a `callback` function.
                    forEach = function (object, callback) {
                        var size = 0, Properties, members, property;

                        // Tests for bugs in the current environment's `for...in` algorithm. The
                        // `valueOf` property inherits the non-enumerable flag from
                        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
                        (Properties = function () {
                            this.valueOf = 0;
                        }).prototype.valueOf = 0;

                        // Iterate over a new instance of the `Properties` class.
                        members = new Properties();
                        for (property in members) {
                            // Ignore all properties inherited from `Object.prototype`.
                            if (isProperty.call(members, property)) {
                                size++;
                            }
                        }
                        Properties = members = null;

                        // Normalize the iteration algorithm.
                        if (!size) {
                            // A list of non-enumerable properties inherited from `Object.prototype`.
                            members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                            // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
                            // properties.
                            forEach = function (object, callback) {
                                var isFunction = getClass.call(object) == functionClass, property, length;
                                var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                                for (property in object) {
                                    // Gecko <= 1.0 enumerates the `prototype` property of functions under
                                    // certain conditions; IE does not.
                                    if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                                        callback(property);
                                    }
                                }
                                // Manually invoke the callback for each non-enumerable property.
                                for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
                            };
                        } else if (size == 2) {
                            // Safari <= 2.0.4 enumerates shadowed properties twice.
                            forEach = function (object, callback) {
                                // Create a set of iterated properties.
                                var members = {}, isFunction = getClass.call(object) == functionClass, property;
                                for (property in object) {
                                    // Store each property name to prevent double enumeration. The
                                    // `prototype` property of functions is not enumerated due to cross-
                                    // environment inconsistencies.
                                    if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                                        callback(property);
                                    }
                                }
                            };
                        } else {
                            // No bugs detected; use the standard `for...in` algorithm.
                            forEach = function (object, callback) {
                                var isFunction = getClass.call(object) == functionClass, property, isConstructor;
                                for (property in object) {
                                    if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                                        callback(property);
                                    }
                                }
                                // Manually invoke the callback for the `constructor` property due to
                                // cross-environment inconsistencies.
                                if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                                    callback(property);
                                }
                            };
                        }
                        return forEach(object, callback);
                    };

                    // Public: Serializes a JavaScript `value` as a JSON string. The optional
                    // `filter` argument may specify either a function that alters how object and
                    // array members are serialized, or an array of strings and numbers that
                    // indicates which properties should be serialized. The optional `width`
                    // argument may be either a string or number that specifies the indentation
                    // level of the output.
                    if (!has("json-stringify")) {
                        // Internal: A map of control characters and their escaped equivalents.
                        var Escapes = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        };

                        // Internal: Converts `value` into a zero-padded string such that its
                        // length is at least equal to `width`. The `width` must be <= 6.
                        var leadingZeroes = "000000";
                        var toPaddedString = function (width, value) {
                            // The `|| 0` expression is necessary to work around a bug in
                            // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
                            return (leadingZeroes + (value || 0)).slice(-width);
                        };

                        // Internal: Double-quotes a string `value`, replacing all ASCII control
                        // characters (characters with code unit values between 0 and 31) with
                        // their escaped equivalents. This is an implementation of the
                        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
                        var unicodePrefix = "\\u00";
                        var quote = function (value) {
                            var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
                            var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
                            for (; index < length; index++) {
                                var charCode = value.charCodeAt(index);
                                // If the character is a control character, append its Unicode or
                                // shorthand escape sequence; otherwise, append the character as-is.
                                switch (charCode) {
                                    case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                                    result += Escapes[charCode];
                                    break;
                                    default:
                                        if (charCode < 32) {
                                            result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                                            break;
                                        }
                                        result += useCharIndex ? symbols[index] : value.charAt(index);
                                }
                            }
                            return result + '"';
                        };

                        // Internal: Recursively serializes an object. Implements the
                        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
                        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
                            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
                            try {
                                // Necessary for host object support.
                                value = object[property];
                            } catch (exception) {}
                            if (typeof value == "object" && value) {
                                className = getClass.call(value);
                                if (className == dateClass && !isProperty.call(value, "toJSON")) {
                                    if (value > -1 / 0 && value < 1 / 0) {
                                        // Dates are serialized according to the `Date#toJSON` method
                                        // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                                        // for the ISO 8601 date time string format.
                                        if (getDay) {
                                            // Manually compute the year, month, date, hours, minutes,
                                            // seconds, and milliseconds if the `getUTC*` methods are
                                            // buggy. Adapted from @Yaffle's `date-shim` project.
                                            date = floor(value / 864e5);
                                            for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                                            for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                                            date = 1 + date - getDay(year, month);
                                            // The `time` value specifies the time within the day (see ES
                                            // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                                            // to compute `A modulo B`, as the `%` operator does not
                                            // correspond to the `modulo` operation for negative numbers.
                                            time = (value % 864e5 + 864e5) % 864e5;
                                            // The hours, minutes, seconds, and milliseconds are obtained by
                                            // decomposing the time within the day. See section 15.9.1.10.
                                            hours = floor(time / 36e5) % 24;
                                            minutes = floor(time / 6e4) % 60;
                                            seconds = floor(time / 1e3) % 60;
                                            milliseconds = time % 1e3;
                                        } else {
                                            year = value.getUTCFullYear();
                                            month = value.getUTCMonth();
                                            date = value.getUTCDate();
                                            hours = value.getUTCHours();
                                            minutes = value.getUTCMinutes();
                                            seconds = value.getUTCSeconds();
                                            milliseconds = value.getUTCMilliseconds();
                                        }
                                        // Serialize extended years correctly.
                                        value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                                            "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                                                // Months, dates, hours, minutes, and seconds should have two
                                                // digits; milliseconds should have three.
                                            "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                                                // Milliseconds are optional in ES 5.0, but required in 5.1.
                                            "." + toPaddedString(3, milliseconds) + "Z";
                                    } else {
                                        value = null;
                                    }
                                } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
                                    // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                                    // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                                    // ignores all `toJSON` methods on these objects unless they are
                                    // defined directly on an instance.
                                    value = value.toJSON(property);
                                }
                            }
                            if (callback) {
                                // If a replacement function was provided, call it to obtain the value
                                // for serialization.
                                value = callback.call(object, property, value);
                            }
                            if (value === null) {
                                return "null";
                            }
                            className = getClass.call(value);
                            if (className == booleanClass) {
                                // Booleans are represented literally.
                                return "" + value;
                            } else if (className == numberClass) {
                                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                                // `"null"`.
                                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                            } else if (className == stringClass) {
                                // Strings are double-quoted and escaped.
                                return quote("" + value);
                            }
                            // Recursively serialize objects and arrays.
                            if (typeof value == "object") {
                                // Check for cyclic structures. This is a linear search; performance
                                // is inversely proportional to the number of unique nested objects.
                                for (length = stack.length; length--;) {
                                    if (stack[length] === value) {
                                        // Cyclic structures cannot be serialized by `JSON.stringify`.
                                        throw TypeError();
                                    }
                                }
                                // Add the object to the stack of traversed objects.
                                stack.push(value);
                                results = [];
                                // Save the current indentation level and indent one additional level.
                                prefix = indentation;
                                indentation += whitespace;
                                if (className == arrayClass) {
                                    // Recursively serialize array elements.
                                    for (index = 0, length = value.length; index < length; index++) {
                                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                                        results.push(element === undef ? "null" : element);
                                    }
                                    result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
                                } else {
                                    // Recursively serialize object members. Members are selected from
                                    // either a user-specified list of property names, or the object
                                    // itself.
                                    forEach(properties || value, function (property) {
                                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                                        if (element !== undef) {
                                            // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                                            // is not the empty string, let `member` {quote(property) + ":"}
                                            // be the concatenation of `member` and the `space` character."
                                            // The "`space` character" refers to the literal space
                                            // character, not the `space` {width} argument provided to
                                            // `JSON.stringify`.
                                            results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                                        }
                                    });
                                    result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
                                }
                                // Remove the object from the traversed object stack.
                                stack.pop();
                                return result;
                            }
                        };

                        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
                        exports.stringify = function (source, filter, width) {
                            var whitespace, callback, properties, className;
                            if (objectTypes[typeof filter] && filter) {
                                if ((className = getClass.call(filter)) == functionClass) {
                                    callback = filter;
                                } else if (className == arrayClass) {
                                    // Convert the property names array into a makeshift set.
                                    properties = {};
                                    for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
                                }
                            }
                            if (width) {
                                if ((className = getClass.call(width)) == numberClass) {
                                    // Convert the `width` to an integer and create a string containing
                                    // `width` number of space characters.
                                    if ((width -= width % 1) > 0) {
                                        for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                                    }
                                } else if (className == stringClass) {
                                    whitespace = width.length <= 10 ? width : width.slice(0, 10);
                                }
                            }
                            // Opera <= 7.54u2 discards the values associated with empty string keys
                            // (`""`) only if they are used directly within an object member list
                            // (e.g., `!("" in { "": 1})`).
                            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                        };
                    }

                    // Public: Parses a JSON source string.
                    if (!has("json-parse")) {
                        var fromCharCode = String.fromCharCode;

                        // Internal: A map of escaped control characters and their unescaped
                        // equivalents.
                        var Unescapes = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        };

                        // Internal: Stores the parser state.
                        var Index, Source;

                        // Internal: Resets the parser state and throws a `SyntaxError`.
                        var abort = function () {
                            Index = Source = null;
                            throw SyntaxError();
                        };

                        // Internal: Returns the next token, or `"$"` if the parser has reached
                        // the end of the source string. A token may be a string, number, `null`
                        // literal, or Boolean literal.
                        var lex = function () {
                            var source = Source, length = source.length, value, begin, position, isSigned, charCode;
                            while (Index < length) {
                                charCode = source.charCodeAt(Index);
                                switch (charCode) {
                                    case 9: case 10: case 13: case 32:
                                    // Skip whitespace tokens, including tabs, carriage returns, line
                                    // feeds, and space characters.
                                    Index++;
                                    break;
                                    case 123: case 125: case 91: case 93: case 58: case 44:
                                    // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                                    // the current position.
                                    value = charIndexBuggy ? source.charAt(Index) : source[Index];
                                    Index++;
                                    return value;
                                    case 34:
                                        // `"` delimits a JSON string; advance to the next character and
                                        // begin parsing the string. String tokens are prefixed with the
                                        // sentinel `@` character to distinguish them from punctuators and
                                        // end-of-string tokens.
                                        for (value = "@", Index++; Index < length;) {
                                            charCode = source.charCodeAt(Index);
                                            if (charCode < 32) {
                                                // Unescaped ASCII control characters (those with a code unit
                                                // less than the space character) are not permitted.
                                                abort();
                                            } else if (charCode == 92) {
                                                // A reverse solidus (`\`) marks the beginning of an escaped
                                                // control character (including `"`, `\`, and `/`) or Unicode
                                                // escape sequence.
                                                charCode = source.charCodeAt(++Index);
                                                switch (charCode) {
                                                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                                                    // Revive escaped control characters.
                                                    value += Unescapes[charCode];
                                                    Index++;
                                                    break;
                                                    case 117:
                                                        // `\u` marks the beginning of a Unicode escape sequence.
                                                        // Advance to the first character and validate the
                                                        // four-digit code point.
                                                        begin = ++Index;
                                                        for (position = Index + 4; Index < position; Index++) {
                                                            charCode = source.charCodeAt(Index);
                                                            // A valid sequence comprises four hexdigits (case-
                                                            // insensitive) that form a single hexadecimal value.
                                                            if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                                                // Invalid Unicode escape sequence.
                                                                abort();
                                                            }
                                                        }
                                                        // Revive the escaped character.
                                                        value += fromCharCode("0x" + source.slice(begin, Index));
                                                        break;
                                                    default:
                                                        // Invalid escape sequence.
                                                        abort();
                                                }
                                            } else {
                                                if (charCode == 34) {
                                                    // An unescaped double-quote character marks the end of the
                                                    // string.
                                                    break;
                                                }
                                                charCode = source.charCodeAt(Index);
                                                begin = Index;
                                                // Optimize for the common case where a string is valid.
                                                while (charCode >= 32 && charCode != 92 && charCode != 34) {
                                                    charCode = source.charCodeAt(++Index);
                                                }
                                                // Append the string as-is.
                                                value += source.slice(begin, Index);
                                            }
                                        }
                                        if (source.charCodeAt(Index) == 34) {
                                            // Advance to the next character and return the revived string.
                                            Index++;
                                            return value;
                                        }
                                        // Unterminated string.
                                        abort();
                                    default:
                                        // Parse numbers and literals.
                                        begin = Index;
                                        // Advance past the negative sign, if one is specified.
                                        if (charCode == 45) {
                                            isSigned = true;
                                            charCode = source.charCodeAt(++Index);
                                        }
                                        // Parse an integer or floating-point value.
                                        if (charCode >= 48 && charCode <= 57) {
                                            // Leading zeroes are interpreted as octal literals.
                                            if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                                                // Illegal octal literal.
                                                abort();
                                            }
                                            isSigned = false;
                                            // Parse the integer component.
                                            for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                                            // Floats cannot contain a leading decimal point; however, this
                                            // case is already accounted for by the parser.
                                            if (source.charCodeAt(Index) == 46) {
                                                position = ++Index;
                                                // Parse the decimal component.
                                                for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                                                if (position == Index) {
                                                    // Illegal trailing decimal.
                                                    abort();
                                                }
                                                Index = position;
                                            }
                                            // Parse exponents. The `e` denoting the exponent is
                                            // case-insensitive.
                                            charCode = source.charCodeAt(Index);
                                            if (charCode == 101 || charCode == 69) {
                                                charCode = source.charCodeAt(++Index);
                                                // Skip past the sign following the exponent, if one is
                                                // specified.
                                                if (charCode == 43 || charCode == 45) {
                                                    Index++;
                                                }
                                                // Parse the exponential component.
                                                for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                                                if (position == Index) {
                                                    // Illegal empty exponent.
                                                    abort();
                                                }
                                                Index = position;
                                            }
                                            // Coerce the parsed value to a JavaScript number.
                                            return +source.slice(begin, Index);
                                        }
                                        // A negative sign may only precede numbers.
                                        if (isSigned) {
                                            abort();
                                        }
                                        // `true`, `false`, and `null` literals.
                                        if (source.slice(Index, Index + 4) == "true") {
                                            Index += 4;
                                            return true;
                                        } else if (source.slice(Index, Index + 5) == "false") {
                                            Index += 5;
                                            return false;
                                        } else if (source.slice(Index, Index + 4) == "null") {
                                            Index += 4;
                                            return null;
                                        }
                                        // Unrecognized token.
                                        abort();
                                }
                            }
                            // Return the sentinel `$` character if the parser has reached the end
                            // of the source string.
                            return "$";
                        };

                        // Internal: Parses a JSON `value` token.
                        var get = function (value) {
                            var results, hasMembers;
                            if (value == "$") {
                                // Unexpected end of input.
                                abort();
                            }
                            if (typeof value == "string") {
                                if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                                    // Remove the sentinel `@` character.
                                    return value.slice(1);
                                }
                                // Parse object and array literals.
                                if (value == "[") {
                                    // Parses a JSON array, returning a new JavaScript array.
                                    results = [];
                                    for (;; hasMembers || (hasMembers = true)) {
                                        value = lex();
                                        // A closing square bracket marks the end of the array literal.
                                        if (value == "]") {
                                            break;
                                        }
                                        // If the array literal contains elements, the current token
                                        // should be a comma separating the previous element from the
                                        // next.
                                        if (hasMembers) {
                                            if (value == ",") {
                                                value = lex();
                                                if (value == "]") {
                                                    // Unexpected trailing `,` in array literal.
                                                    abort();
                                                }
                                            } else {
                                                // A `,` must separate each array element.
                                                abort();
                                            }
                                        }
                                        // Elisions and leading commas are not permitted.
                                        if (value == ",") {
                                            abort();
                                        }
                                        results.push(get(value));
                                    }
                                    return results;
                                } else if (value == "{") {
                                    // Parses a JSON object, returning a new JavaScript object.
                                    results = {};
                                    for (;; hasMembers || (hasMembers = true)) {
                                        value = lex();
                                        // A closing curly brace marks the end of the object literal.
                                        if (value == "}") {
                                            break;
                                        }
                                        // If the object literal contains members, the current token
                                        // should be a comma separator.
                                        if (hasMembers) {
                                            if (value == ",") {
                                                value = lex();
                                                if (value == "}") {
                                                    // Unexpected trailing `,` in object literal.
                                                    abort();
                                                }
                                            } else {
                                                // A `,` must separate each object member.
                                                abort();
                                            }
                                        }
                                        // Leading commas are not permitted, object property names must be
                                        // double-quoted strings, and a `:` must separate each property
                                        // name and value.
                                        if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                                            abort();
                                        }
                                        results[value.slice(1)] = get(lex());
                                    }
                                    return results;
                                }
                                // Unexpected token encountered.
                                abort();
                            }
                            return value;
                        };

                        // Internal: Updates a traversed object member.
                        var update = function (source, property, callback) {
                            var element = walk(source, property, callback);
                            if (element === undef) {
                                delete source[property];
                            } else {
                                source[property] = element;
                            }
                        };

                        // Internal: Recursively traverses a parsed JSON object, invoking the
                        // `callback` function for each value. This is an implementation of the
                        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
                        var walk = function (source, property, callback) {
                            var value = source[property], length;
                            if (typeof value == "object" && value) {
                                // `forEach` can't be used to traverse an array in Opera <= 8.54
                                // because its `Object#hasOwnProperty` implementation returns `false`
                                // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
                                if (getClass.call(value) == arrayClass) {
                                    for (length = value.length; length--;) {
                                        update(value, length, callback);
                                    }
                                } else {
                                    forEach(value, function (property) {
                                        update(value, property, callback);
                                    });
                                }
                            }
                            return callback.call(source, property, value);
                        };

                        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
                        exports.parse = function (source, callback) {
                            var result, value;
                            Index = 0;
                            Source = "" + source;
                            result = get(lex());
                            // If a JSON string contains multiple tokens, it is invalid.
                            if (lex() != "$") {
                                abort();
                            }
                            // Reset the parser state.
                            Index = Source = null;
                            return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                        };
                    }
                }

                exports["runInContext"] = runInContext;
                return exports;
            }

            if (freeExports && !isLoader) {
                // Export for CommonJS environments.
                runInContext(root, freeExports);
            } else {
                // Export for web browsers and JavaScript engines.
                var nativeJSON = root.JSON,
                    previousJSON = root["JSON3"],
                    isRestored = false;

                var JSON3 = runInContext(root, (root["JSON3"] = {
                    // Public: Restores the original value of the global `JSON` object and
                    // returns a reference to the `JSON3` object.
                    "noConflict": function () {
                        if (!isRestored) {
                            isRestored = true;
                            root.JSON = nativeJSON;
                            root["JSON3"] = previousJSON;
                            nativeJSON = previousJSON = null;
                        }
                        return JSON3;
                    }
                }));

                root.JSON = {
                    "parse": JSON3.parse,
                    "stringify": JSON3.stringify
                };
            }

            // Export for asynchronous module loaders.
            if (isLoader) {
                define(function () {
                    return JSON3;
                });
            }
        }).call(this);

    }).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],51:[function(_dereq_,module,exports){
    module.exports = toArray

    function toArray(list, index) {
        var array = []

        index = index || 0

        for (var i = index || 0; i < list.length; i++) {
            array[i - index] = list[i]
        }

        return array
    }

},{}]},{},[31])(31)
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
    /* MIT license */

    module.exports = {
        rgb2hsl: rgb2hsl,
        rgb2hsv: rgb2hsv,
        rgb2hwb: rgb2hwb,
        rgb2cmyk: rgb2cmyk,
        rgb2keyword: rgb2keyword,
        rgb2xyz: rgb2xyz,
        rgb2lab: rgb2lab,
        rgb2lch: rgb2lch,

        hsl2rgb: hsl2rgb,
        hsl2hsv: hsl2hsv,
        hsl2hwb: hsl2hwb,
        hsl2cmyk: hsl2cmyk,
        hsl2keyword: hsl2keyword,

        hsv2rgb: hsv2rgb,
        hsv2hsl: hsv2hsl,
        hsv2hwb: hsv2hwb,
        hsv2cmyk: hsv2cmyk,
        hsv2keyword: hsv2keyword,

        hwb2rgb: hwb2rgb,
        hwb2hsl: hwb2hsl,
        hwb2hsv: hwb2hsv,
        hwb2cmyk: hwb2cmyk,
        hwb2keyword: hwb2keyword,

        cmyk2rgb: cmyk2rgb,
        cmyk2hsl: cmyk2hsl,
        cmyk2hsv: cmyk2hsv,
        cmyk2hwb: cmyk2hwb,
        cmyk2keyword: cmyk2keyword,

        keyword2rgb: keyword2rgb,
        keyword2hsl: keyword2hsl,
        keyword2hsv: keyword2hsv,
        keyword2hwb: keyword2hwb,
        keyword2cmyk: keyword2cmyk,
        keyword2lab: keyword2lab,
        keyword2xyz: keyword2xyz,

        xyz2rgb: xyz2rgb,
        xyz2lab: xyz2lab,
        xyz2lch: xyz2lch,

        lab2xyz: lab2xyz,
        lab2rgb: lab2rgb,
        lab2lch: lab2lch,

        lch2lab: lch2lab,
        lch2xyz: lch2xyz,
        lch2rgb: lch2rgb
    }


    function rgb2hsl(rgb) {
        var r = rgb[0]/255,
            g = rgb[1]/255,
            b = rgb[2]/255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h, s, l;

        if (max == min)
            h = 0;
        else if (r == max)
            h = (g - b) / delta;
        else if (g == max)
            h = 2 + (b - r) / delta;
        else if (b == max)
            h = 4 + (r - g)/ delta;

        h = Math.min(h * 60, 360);

        if (h < 0)
            h += 360;

        l = (min + max) / 2;

        if (max == min)
            s = 0;
        else if (l <= 0.5)
            s = delta / (max + min);
        else
            s = delta / (2 - max - min);

        return [h, s * 100, l * 100];
    }

    function rgb2hsv(rgb) {
        var r = rgb[0],
            g = rgb[1],
            b = rgb[2],
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h, s, v;

        if (max == 0)
            s = 0;
        else
            s = (delta/max * 1000)/10;

        if (max == min)
            h = 0;
        else if (r == max)
            h = (g - b) / delta;
        else if (g == max)
            h = 2 + (b - r) / delta;
        else if (b == max)
            h = 4 + (r - g) / delta;

        h = Math.min(h * 60, 360);

        if (h < 0)
            h += 360;

        v = ((max / 255) * 1000) / 10;

        return [h, s, v];
    }

    function rgb2hwb(rgb) {
        var r = rgb[0],
            g = rgb[1],
            b = rgb[2],
            h = rgb2hsl(rgb)[0],
            w = 1/255 * Math.min(r, Math.min(g, b)),
            b = 1 - 1/255 * Math.max(r, Math.max(g, b));

        return [h, w * 100, b * 100];
    }

    function rgb2cmyk(rgb) {
        var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            c, m, y, k;

        k = Math.min(1 - r, 1 - g, 1 - b);
        c = (1 - r - k) / (1 - k) || 0;
        m = (1 - g - k) / (1 - k) || 0;
        y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
    }

    function rgb2keyword(rgb) {
        return reverseKeywords[JSON.stringify(rgb)];
    }

    function rgb2xyz(rgb) {
        var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255;

        // assume sRGB
        r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
        g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
        b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

        var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
        var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
        var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

        return [x * 100, y *100, z * 100];
    }

    function rgb2lab(rgb) {
        var xyz = rgb2xyz(rgb),
            x = xyz[0],
            y = xyz[1],
            z = xyz[2],
            l, a, b;

        x /= 95.047;
        y /= 100;
        z /= 108.883;

        x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
        y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
        z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

        l = (116 * y) - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);

        return [l, a, b];
    }

    function rgb2lch(args) {
        return lab2lch(rgb2lab(args));
    }

    function hsl2rgb(hsl) {
        var h = hsl[0] / 360,
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            t1, t2, t3, rgb, val;

        if (s == 0) {
            val = l * 255;
            return [val, val, val];
        }

        if (l < 0.5)
            t2 = l * (1 + s);
        else
            t2 = l + s - l * s;
        t1 = 2 * l - t2;

        rgb = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
            t3 = h + 1 / 3 * - (i - 1);
            t3 < 0 && t3++;
            t3 > 1 && t3--;

            if (6 * t3 < 1)
                val = t1 + (t2 - t1) * 6 * t3;
            else if (2 * t3 < 1)
                val = t2;
            else if (3 * t3 < 2)
                val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            else
                val = t1;

            rgb[i] = val * 255;
        }

        return rgb;
    }

    function hsl2hsv(hsl) {
        var h = hsl[0],
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            sv, v;

        if(l === 0) {
            // no need to do calc on black
            // also avoids divide by 0 error
            return [0, 0, 0];
        }

        l *= 2;
        s *= (l <= 1) ? l : 2 - l;
        v = (l + s) / 2;
        sv = (2 * s) / (l + s);
        return [h, sv * 100, v * 100];
    }

    function hsl2hwb(args) {
        return rgb2hwb(hsl2rgb(args));
    }

    function hsl2cmyk(args) {
        return rgb2cmyk(hsl2rgb(args));
    }

    function hsl2keyword(args) {
        return rgb2keyword(hsl2rgb(args));
    }


    function hsv2rgb(hsv) {
        var h = hsv[0] / 60,
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            hi = Math.floor(h) % 6;

        var f = h - Math.floor(h),
            p = 255 * v * (1 - s),
            q = 255 * v * (1 - (s * f)),
            t = 255 * v * (1 - (s * (1 - f))),
            v = 255 * v;

        switch(hi) {
            case 0:
                return [v, t, p];
            case 1:
                return [q, v, p];
            case 2:
                return [p, v, t];
            case 3:
                return [p, q, v];
            case 4:
                return [t, p, v];
            case 5:
                return [v, p, q];
        }
    }

    function hsv2hsl(hsv) {
        var h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            sl, l;

        l = (2 - s) * v;
        sl = s * v;
        sl /= (l <= 1) ? l : 2 - l;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
    }

    function hsv2hwb(args) {
        return rgb2hwb(hsv2rgb(args))
    }

    function hsv2cmyk(args) {
        return rgb2cmyk(hsv2rgb(args));
    }

    function hsv2keyword(args) {
        return rgb2keyword(hsv2rgb(args));
    }

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
    function hwb2rgb(hwb) {
        var h = hwb[0] / 360,
            wh = hwb[1] / 100,
            bl = hwb[2] / 100,
            ratio = wh + bl,
            i, v, f, n;

        // wh + bl cant be > 1
        if (ratio > 1) {
            wh /= ratio;
            bl /= ratio;
        }

        i = Math.floor(6 * h);
        v = 1 - bl;
        f = 6 * h - i;
        if ((i & 0x01) != 0) {
            f = 1 - f;
        }
        n = wh + f * (v - wh);  // linear interpolation

        switch (i) {
            default:
            case 6:
            case 0: r = v; g = n; b = wh; break;
            case 1: r = n; g = v; b = wh; break;
            case 2: r = wh; g = v; b = n; break;
            case 3: r = wh; g = n; b = v; break;
            case 4: r = n; g = wh; b = v; break;
            case 5: r = v; g = wh; b = n; break;
        }

        return [r * 255, g * 255, b * 255];
    }

    function hwb2hsl(args) {
        return rgb2hsl(hwb2rgb(args));
    }

    function hwb2hsv(args) {
        return rgb2hsv(hwb2rgb(args));
    }

    function hwb2cmyk(args) {
        return rgb2cmyk(hwb2rgb(args));
    }

    function hwb2keyword(args) {
        return rgb2keyword(hwb2rgb(args));
    }

    function cmyk2rgb(cmyk) {
        var c = cmyk[0] / 100,
            m = cmyk[1] / 100,
            y = cmyk[2] / 100,
            k = cmyk[3] / 100,
            r, g, b;

        r = 1 - Math.min(1, c * (1 - k) + k);
        g = 1 - Math.min(1, m * (1 - k) + k);
        b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
    }

    function cmyk2hsl(args) {
        return rgb2hsl(cmyk2rgb(args));
    }

    function cmyk2hsv(args) {
        return rgb2hsv(cmyk2rgb(args));
    }

    function cmyk2hwb(args) {
        return rgb2hwb(cmyk2rgb(args));
    }

    function cmyk2keyword(args) {
        return rgb2keyword(cmyk2rgb(args));
    }


    function xyz2rgb(xyz) {
        var x = xyz[0] / 100,
            y = xyz[1] / 100,
            z = xyz[2] / 100,
            r, g, b;

        r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
        g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
        b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

        // assume sRGB
        r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
            : r = (r * 12.92);

        g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
            : g = (g * 12.92);

        b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
            : b = (b * 12.92);

        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);

        return [r * 255, g * 255, b * 255];
    }

    function xyz2lab(xyz) {
        var x = xyz[0],
            y = xyz[1],
            z = xyz[2],
            l, a, b;

        x /= 95.047;
        y /= 100;
        z /= 108.883;

        x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
        y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
        z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

        l = (116 * y) - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);

        return [l, a, b];
    }

    function xyz2lch(args) {
        return lab2lch(xyz2lab(args));
    }

    function lab2xyz(lab) {
        var l = lab[0],
            a = lab[1],
            b = lab[2],
            x, y, z, y2;

        if (l <= 8) {
            y = (l * 100) / 903.3;
            y2 = (7.787 * (y / 100)) + (16 / 116);
        } else {
            y = 100 * Math.pow((l + 16) / 116, 3);
            y2 = Math.pow(y / 100, 1/3);
        }

        x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

        z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

        return [x, y, z];
    }

    function lab2lch(lab) {
        var l = lab[0],
            a = lab[1],
            b = lab[2],
            hr, h, c;

        hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
            h += 360;
        }
        c = Math.sqrt(a * a + b * b);
        return [l, c, h];
    }

    function lab2rgb(args) {
        return xyz2rgb(lab2xyz(args));
    }

    function lch2lab(lch) {
        var l = lch[0],
            c = lch[1],
            h = lch[2],
            a, b, hr;

        hr = h / 360 * 2 * Math.PI;
        a = c * Math.cos(hr);
        b = c * Math.sin(hr);
        return [l, a, b];
    }

    function lch2xyz(args) {
        return lab2xyz(lch2lab(args));
    }

    function lch2rgb(args) {
        return lab2rgb(lch2lab(args));
    }

    function keyword2rgb(keyword) {
        return cssKeywords[keyword];
    }

    function keyword2hsl(args) {
        return rgb2hsl(keyword2rgb(args));
    }

    function keyword2hsv(args) {
        return rgb2hsv(keyword2rgb(args));
    }

    function keyword2hwb(args) {
        return rgb2hwb(keyword2rgb(args));
    }

    function keyword2cmyk(args) {
        return rgb2cmyk(keyword2rgb(args));
    }

    function keyword2lab(args) {
        return rgb2lab(keyword2rgb(args));
    }

    function keyword2xyz(args) {
        return rgb2xyz(keyword2rgb(args));
    }

    var cssKeywords = {
        aliceblue:  [240,248,255],
        antiquewhite: [250,235,215],
        aqua: [0,255,255],
        aquamarine: [127,255,212],
        azure:  [240,255,255],
        beige:  [245,245,220],
        bisque: [255,228,196],
        black:  [0,0,0],
        blanchedalmond: [255,235,205],
        blue: [0,0,255],
        blueviolet: [138,43,226],
        brown:  [165,42,42],
        burlywood:  [222,184,135],
        cadetblue:  [95,158,160],
        chartreuse: [127,255,0],
        chocolate:  [210,105,30],
        coral:  [255,127,80],
        cornflowerblue: [100,149,237],
        cornsilk: [255,248,220],
        crimson:  [220,20,60],
        cyan: [0,255,255],
        darkblue: [0,0,139],
        darkcyan: [0,139,139],
        darkgoldenrod:  [184,134,11],
        darkgray: [169,169,169],
        darkgreen:  [0,100,0],
        darkgrey: [169,169,169],
        darkkhaki:  [189,183,107],
        darkmagenta:  [139,0,139],
        darkolivegreen: [85,107,47],
        darkorange: [255,140,0],
        darkorchid: [153,50,204],
        darkred:  [139,0,0],
        darksalmon: [233,150,122],
        darkseagreen: [143,188,143],
        darkslateblue:  [72,61,139],
        darkslategray:  [47,79,79],
        darkslategrey:  [47,79,79],
        darkturquoise:  [0,206,209],
        darkviolet: [148,0,211],
        deeppink: [255,20,147],
        deepskyblue:  [0,191,255],
        dimgray:  [105,105,105],
        dimgrey:  [105,105,105],
        dodgerblue: [30,144,255],
        firebrick:  [178,34,34],
        floralwhite:  [255,250,240],
        forestgreen:  [34,139,34],
        fuchsia:  [255,0,255],
        gainsboro:  [220,220,220],
        ghostwhite: [248,248,255],
        gold: [255,215,0],
        goldenrod:  [218,165,32],
        gray: [128,128,128],
        green:  [0,128,0],
        greenyellow:  [173,255,47],
        grey: [128,128,128],
        honeydew: [240,255,240],
        hotpink:  [255,105,180],
        indianred:  [205,92,92],
        indigo: [75,0,130],
        ivory:  [255,255,240],
        khaki:  [240,230,140],
        lavender: [230,230,250],
        lavenderblush:  [255,240,245],
        lawngreen:  [124,252,0],
        lemonchiffon: [255,250,205],
        lightblue:  [173,216,230],
        lightcoral: [240,128,128],
        lightcyan:  [224,255,255],
        lightgoldenrodyellow: [250,250,210],
        lightgray:  [211,211,211],
        lightgreen: [144,238,144],
        lightgrey:  [211,211,211],
        lightpink:  [255,182,193],
        lightsalmon:  [255,160,122],
        lightseagreen:  [32,178,170],
        lightskyblue: [135,206,250],
        lightslategray: [119,136,153],
        lightslategrey: [119,136,153],
        lightsteelblue: [176,196,222],
        lightyellow:  [255,255,224],
        lime: [0,255,0],
        limegreen:  [50,205,50],
        linen:  [250,240,230],
        magenta:  [255,0,255],
        maroon: [128,0,0],
        mediumaquamarine: [102,205,170],
        mediumblue: [0,0,205],
        mediumorchid: [186,85,211],
        mediumpurple: [147,112,219],
        mediumseagreen: [60,179,113],
        mediumslateblue:  [123,104,238],
        mediumspringgreen:  [0,250,154],
        mediumturquoise:  [72,209,204],
        mediumvioletred:  [199,21,133],
        midnightblue: [25,25,112],
        mintcream:  [245,255,250],
        mistyrose:  [255,228,225],
        moccasin: [255,228,181],
        navajowhite:  [255,222,173],
        navy: [0,0,128],
        oldlace:  [253,245,230],
        olive:  [128,128,0],
        olivedrab:  [107,142,35],
        orange: [255,165,0],
        orangered:  [255,69,0],
        orchid: [218,112,214],
        palegoldenrod:  [238,232,170],
        palegreen:  [152,251,152],
        paleturquoise:  [175,238,238],
        palevioletred:  [219,112,147],
        papayawhip: [255,239,213],
        peachpuff:  [255,218,185],
        peru: [205,133,63],
        pink: [255,192,203],
        plum: [221,160,221],
        powderblue: [176,224,230],
        purple: [128,0,128],
        rebeccapurple: [102, 51, 153],
        red:  [255,0,0],
        rosybrown:  [188,143,143],
        royalblue:  [65,105,225],
        saddlebrown:  [139,69,19],
        salmon: [250,128,114],
        sandybrown: [244,164,96],
        seagreen: [46,139,87],
        seashell: [255,245,238],
        sienna: [160,82,45],
        silver: [192,192,192],
        skyblue:  [135,206,235],
        slateblue:  [106,90,205],
        slategray:  [112,128,144],
        slategrey:  [112,128,144],
        snow: [255,250,250],
        springgreen:  [0,255,127],
        steelblue:  [70,130,180],
        tan:  [210,180,140],
        teal: [0,128,128],
        thistle:  [216,191,216],
        tomato: [255,99,71],
        turquoise:  [64,224,208],
        violet: [238,130,238],
        wheat:  [245,222,179],
        white:  [255,255,255],
        whitesmoke: [245,245,245],
        yellow: [255,255,0],
        yellowgreen:  [154,205,50]
    };

    var reverseKeywords = {};
    for (var key in cssKeywords) {
        reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
    }

},{}],3:[function(require,module,exports){
    var conversions = require("./conversions");

    var convert = function() {
        return new Converter();
    }

    for (var func in conversions) {
        // export Raw versions
        convert[func + "Raw"] =  (function(func) {
            // accept array or plain args
            return function(arg) {
                if (typeof arg == "number")
                    arg = Array.prototype.slice.call(arguments);
                return conversions[func](arg);
            }
        })(func);

        var pair = /(\w+)2(\w+)/.exec(func),
            from = pair[1],
            to = pair[2];

        // export rgb2hsl and ["rgb"]["hsl"]
        convert[from] = convert[from] || {};

        convert[from][to] = convert[func] = (function(func) {
            return function(arg) {
                if (typeof arg == "number")
                    arg = Array.prototype.slice.call(arguments);

                var val = conversions[func](arg);
                if (typeof val == "string" || val === undefined)
                    return val; // keyword

                for (var i = 0; i < val.length; i++)
                    val[i] = Math.round(val[i]);
                return val;
            }
        })(func);
    }


    /* Converter does lazy conversion and caching */
    var Converter = function() {
        this.convs = {};
    };

    /* Either get the values for a space or
     set the values for a space, depending on args */
    Converter.prototype.routeSpace = function(space, args) {
        var values = args[0];
        if (values === undefined) {
            // color.rgb()
            return this.getValues(space);
        }
        // color.rgb(10, 10, 10)
        if (typeof values == "number") {
            values = Array.prototype.slice.call(args);
        }

        return this.setValues(space, values);
    };

    /* Set the values for a space, invalidating cache */
    Converter.prototype.setValues = function(space, values) {
        this.space = space;
        this.convs = {};
        this.convs[space] = values;
        return this;
    };

    /* Get the values for a space. If there's already
     a conversion for the space, fetch it, otherwise
     compute it */
    Converter.prototype.getValues = function(space) {
        var vals = this.convs[space];
        if (!vals) {
            var fspace = this.space,
                from = this.convs[fspace];
            vals = convert[fspace][space](from);

            this.convs[space] = vals;
        }
        return vals;
    };

    ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
        Converter.prototype[space] = function(vals) {
            return this.routeSpace(space, arguments);
        }
    });

    module.exports = convert;
},{"./conversions":2}],4:[function(require,module,exports){
    /* MIT license */
    var colorNames = require('color-name');

    module.exports = {
        getRgba: getRgba,
        getHsla: getHsla,
        getRgb: getRgb,
        getHsl: getHsl,
        getHwb: getHwb,
        getAlpha: getAlpha,

        hexString: hexString,
        rgbString: rgbString,
        rgbaString: rgbaString,
        percentString: percentString,
        percentaString: percentaString,
        hslString: hslString,
        hslaString: hslaString,
        hwbString: hwbString,
        keyword: keyword
    }

    function getRgba(string) {
        if (!string) {
            return;
        }
        var abbr =  /^#([a-fA-F0-9]{3})$/,
            hex =  /^#([a-fA-F0-9]{6})$/,
            rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            keyword = /(\w+)/;

        var rgb = [0, 0, 0],
            a = 1,
            match = string.match(abbr);
        if (match) {
            match = match[1];
            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = parseInt(match[i] + match[i], 16);
            }
        }
        else if (match = string.match(hex)) {
            match = match[1];
            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
            }
        }
        else if (match = string.match(rgba)) {
            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = parseInt(match[i + 1]);
            }
            a = parseFloat(match[4]);
        }
        else if (match = string.match(per)) {
            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
            }
            a = parseFloat(match[4]);
        }
        else if (match = string.match(keyword)) {
            if (match[1] == "transparent") {
                return [0, 0, 0, 0];
            }
            rgb = colorNames[match[1]];
            if (!rgb) {
                return;
            }
        }

        for (var i = 0; i < rgb.length; i++) {
            rgb[i] = scale(rgb[i], 0, 255);
        }
        if (!a && a != 0) {
            a = 1;
        }
        else {
            a = scale(a, 0, 1);
        }
        rgb[3] = a;
        return rgb;
    }

    function getHsla(string) {
        if (!string) {
            return;
        }
        var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
        var match = string.match(hsl);
        if (match) {
            var alpha = parseFloat(match[4]);
            var h = scale(parseInt(match[1]), 0, 360),
                s = scale(parseFloat(match[2]), 0, 100),
                l = scale(parseFloat(match[3]), 0, 100),
                a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
            return [h, s, l, a];
        }
    }

    function getHwb(string) {
        if (!string) {
            return;
        }
        var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
        var match = string.match(hwb);
        if (match) {
            var alpha = parseFloat(match[4]);
            var h = scale(parseInt(match[1]), 0, 360),
                w = scale(parseFloat(match[2]), 0, 100),
                b = scale(parseFloat(match[3]), 0, 100),
                a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
            return [h, w, b, a];
        }
    }

    function getRgb(string) {
        var rgba = getRgba(string);
        return rgba && rgba.slice(0, 3);
    }

    function getHsl(string) {
        var hsla = getHsla(string);
        return hsla && hsla.slice(0, 3);
    }

    function getAlpha(string) {
        var vals = getRgba(string);
        if (vals) {
            return vals[3];
        }
        else if (vals = getHsla(string)) {
            return vals[3];
        }
        else if (vals = getHwb(string)) {
            return vals[3];
        }
    }

// generators
    function hexString(rgb) {
        return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
            + hexDouble(rgb[2]);
    }

    function rgbString(rgba, alpha) {
        if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
            return rgbaString(rgba, alpha);
        }
        return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
    }

    function rgbaString(rgba, alpha) {
        if (alpha === undefined) {
            alpha = (rgba[3] !== undefined ? rgba[3] : 1);
        }
        return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
            + ", " + alpha + ")";
    }

    function percentString(rgba, alpha) {
        if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
            return percentaString(rgba, alpha);
        }
        var r = Math.round(rgba[0]/255 * 100),
            g = Math.round(rgba[1]/255 * 100),
            b = Math.round(rgba[2]/255 * 100);

        return "rgb(" + r + "%, " + g + "%, " + b + "%)";
    }

    function percentaString(rgba, alpha) {
        var r = Math.round(rgba[0]/255 * 100),
            g = Math.round(rgba[1]/255 * 100),
            b = Math.round(rgba[2]/255 * 100);
        return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
    }

    function hslString(hsla, alpha) {
        if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
            return hslaString(hsla, alpha);
        }
        return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
    }

    function hslaString(hsla, alpha) {
        if (alpha === undefined) {
            alpha = (hsla[3] !== undefined ? hsla[3] : 1);
        }
        return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
            + alpha + ")";
    }

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
    function hwbString(hwb, alpha) {
        if (alpha === undefined) {
            alpha = (hwb[3] !== undefined ? hwb[3] : 1);
        }
        return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
            + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
    }

    function keyword(rgb) {
        return reverseNames[rgb.slice(0, 3)];
    }

// helpers
    function scale(num, min, max) {
        return Math.min(Math.max(min, num), max);
    }

    function hexDouble(num) {
        var str = num.toString(16).toUpperCase();
        return (str.length < 2) ? "0" + str : str;
    }


//create a list of reverse color names
    var reverseNames = {};
    for (var name in colorNames) {
        reverseNames[colorNames[name]] = name;
    }

},{"color-name":5}],5:[function(require,module,exports){
    module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
    };
},{}],6:[function(require,module,exports){
    /* MIT license */

    var convert = require("color-convert"),
        string = require("color-string");

    var Color = function(obj) {
        if (obj instanceof Color) return obj;
        if (!(this instanceof Color)) return new Color(obj);

        this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }

        // parse Color() argument
        if (typeof obj == "string") {
            var vals = string.getRgba(obj);
            if (vals) {
                this.setValues("rgb", vals);
            } else if (vals = string.getHsla(obj)) {
                this.setValues("hsl", vals);
            } else if (vals = string.getHwb(obj)) {
                this.setValues("hwb", vals);
            } else {
                throw new Error("Unable to parse color from string \"" + obj + "\"");
            }
        } else if (typeof obj == "object") {
            var vals = obj;
            if (vals["r"] !== undefined || vals["red"] !== undefined) {
                this.setValues("rgb", vals)
            } else if (vals["l"] !== undefined || vals["lightness"] !== undefined) {
                this.setValues("hsl", vals)
            } else if (vals["v"] !== undefined || vals["value"] !== undefined) {
                this.setValues("hsv", vals)
            } else if (vals["w"] !== undefined || vals["whiteness"] !== undefined) {
                this.setValues("hwb", vals)
            } else if (vals["c"] !== undefined || vals["cyan"] !== undefined) {
                this.setValues("cmyk", vals)
            } else {
                throw new Error("Unable to parse color from object " + JSON.stringify(obj));
            }
        }
    }

    Color.prototype = {
        rgb: function(vals) {
            return this.setSpace("rgb", arguments);
        },
        hsl: function(vals) {
            return this.setSpace("hsl", arguments);
        },
        hsv: function(vals) {
            return this.setSpace("hsv", arguments);
        },
        hwb: function(vals) {
            return this.setSpace("hwb", arguments);
        },
        cmyk: function(vals) {
            return this.setSpace("cmyk", arguments);
        },

        rgbArray: function() {
            return this.values.rgb;
        },
        hslArray: function() {
            return this.values.hsl;
        },
        hsvArray: function() {
            return this.values.hsv;
        },
        hwbArray: function() {
            if (this.values.alpha !== 1) {
                return this.values.hwb.concat([this.values.alpha])
            }
            return this.values.hwb;
        },
        cmykArray: function() {
            return this.values.cmyk;
        },
        rgbaArray: function() {
            var rgb = this.values.rgb;
            return rgb.concat([this.values.alpha]);
        },
        hslaArray: function() {
            var hsl = this.values.hsl;
            return hsl.concat([this.values.alpha]);
        },
        alpha: function(val) {
            if (val === undefined) {
                return this.values.alpha;
            }
            this.setValues("alpha", val);
            return this;
        },

        red: function(val) {
            return this.setChannel("rgb", 0, val);
        },
        green: function(val) {
            return this.setChannel("rgb", 1, val);
        },
        blue: function(val) {
            return this.setChannel("rgb", 2, val);
        },
        hue: function(val) {
            return this.setChannel("hsl", 0, val);
        },
        saturation: function(val) {
            return this.setChannel("hsl", 1, val);
        },
        lightness: function(val) {
            return this.setChannel("hsl", 2, val);
        },
        saturationv: function(val) {
            return this.setChannel("hsv", 1, val);
        },
        whiteness: function(val) {
            return this.setChannel("hwb", 1, val);
        },
        blackness: function(val) {
            return this.setChannel("hwb", 2, val);
        },
        value: function(val) {
            return this.setChannel("hsv", 2, val);
        },
        cyan: function(val) {
            return this.setChannel("cmyk", 0, val);
        },
        magenta: function(val) {
            return this.setChannel("cmyk", 1, val);
        },
        yellow: function(val) {
            return this.setChannel("cmyk", 2, val);
        },
        black: function(val) {
            return this.setChannel("cmyk", 3, val);
        },

        hexString: function() {
            return string.hexString(this.values.rgb);
        },
        rgbString: function() {
            return string.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function() {
            return string.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function() {
            return string.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function() {
            return string.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function() {
            return string.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function() {
            return string.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function() {
            return string.keyword(this.values.rgb, this.values.alpha);
        },

        rgbNumber: function() {
            return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
        },

        luminosity: function() {
            // http://www.w3.org/TR/WCAG20/#relativeluminancedef
            var rgb = this.values.rgb;
            var lum = [];
            for (var i = 0; i < rgb.length; i++) {
                var chan = rgb[i] / 255;
                lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4)
            }
            return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
        },

        contrast: function(color2) {
            // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
            var lum1 = this.luminosity();
            var lum2 = color2.luminosity();
            if (lum1 > lum2) {
                return (lum1 + 0.05) / (lum2 + 0.05)
            };
            return (lum2 + 0.05) / (lum1 + 0.05);
        },

        level: function(color2) {
            var contrastRatio = this.contrast(color2);
            return (contrastRatio >= 7.1) ? 'AAA' : (contrastRatio >= 4.5) ? 'AA' : '';
        },

        dark: function() {
            // YIQ equation from http://24ways.org/2010/calculating-color-contrast
            var rgb = this.values.rgb,
                yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
            return yiq < 128;
        },

        light: function() {
            return !this.dark();
        },

        negate: function() {
            var rgb = []
            for (var i = 0; i < 3; i++) {
                rgb[i] = 255 - this.values.rgb[i];
            }
            this.setValues("rgb", rgb);
            return this;
        },

        lighten: function(ratio) {
            this.values.hsl[2] += this.values.hsl[2] * ratio;
            this.setValues("hsl", this.values.hsl);
            return this;
        },

        darken: function(ratio) {
            this.values.hsl[2] -= this.values.hsl[2] * ratio;
            this.setValues("hsl", this.values.hsl);
            return this;
        },

        saturate: function(ratio) {
            this.values.hsl[1] += this.values.hsl[1] * ratio;
            this.setValues("hsl", this.values.hsl);
            return this;
        },

        desaturate: function(ratio) {
            this.values.hsl[1] -= this.values.hsl[1] * ratio;
            this.setValues("hsl", this.values.hsl);
            return this;
        },

        whiten: function(ratio) {
            this.values.hwb[1] += this.values.hwb[1] * ratio;
            this.setValues("hwb", this.values.hwb);
            return this;
        },

        blacken: function(ratio) {
            this.values.hwb[2] += this.values.hwb[2] * ratio;
            this.setValues("hwb", this.values.hwb);
            return this;
        },

        greyscale: function() {
            var rgb = this.values.rgb;
            // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
            var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
            this.setValues("rgb", [val, val, val]);
            return this;
        },

        clearer: function(ratio) {
            this.setValues("alpha", this.values.alpha - (this.values.alpha * ratio));
            return this;
        },

        opaquer: function(ratio) {
            this.setValues("alpha", this.values.alpha + (this.values.alpha * ratio));
            return this;
        },

        rotate: function(degrees) {
            var hue = this.values.hsl[0];
            hue = (hue + degrees) % 360;
            hue = hue < 0 ? 360 + hue : hue;
            this.values.hsl[0] = hue;
            this.setValues("hsl", this.values.hsl);
            return this;
        },

        mix: function(color2, weight) {
            weight = 1 - (weight == null ? 0.5 : weight);

            // algorithm from Sass's mix(). Ratio of first color in mix is
            // determined by the alphas of both colors and the weight
            var t1 = weight * 2 - 1,
                d = this.alpha() - color2.alpha();

            var weight1 = (((t1 * d == -1) ? t1 : (t1 + d) / (1 + t1 * d)) + 1) / 2;
            var weight2 = 1 - weight1;

            var rgb = this.rgbArray();
            var rgb2 = color2.rgbArray();

            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = rgb[i] * weight1 + rgb2[i] * weight2;
            }
            this.setValues("rgb", rgb);

            var alpha = this.alpha() * weight + color2.alpha() * (1 - weight);
            this.setValues("alpha", alpha);

            return this;
        },

        toJSON: function() {
            return this.rgb();
        },

        clone: function() {
            return new Color(this.rgb());
        }
    }


    Color.prototype.getValues = function(space) {
        var vals = {};
        for (var i = 0; i < space.length; i++) {
            vals[space.charAt(i)] = this.values[space][i];
        }
        if (this.values.alpha != 1) {
            vals["a"] = this.values.alpha;
        }
        // {r: 255, g: 255, b: 255, a: 0.4}
        return vals;
    }

    Color.prototype.setValues = function(space, vals) {
        var spaces = {
            "rgb": ["red", "green", "blue"],
            "hsl": ["hue", "saturation", "lightness"],
            "hsv": ["hue", "saturation", "value"],
            "hwb": ["hue", "whiteness", "blackness"],
            "cmyk": ["cyan", "magenta", "yellow", "black"]
        };

        var maxes = {
            "rgb": [255, 255, 255],
            "hsl": [360, 100, 100],
            "hsv": [360, 100, 100],
            "hwb": [360, 100, 100],
            "cmyk": [100, 100, 100, 100]
        };

        var alpha = 1;
        if (space == "alpha") {
            alpha = vals;
        } else if (vals.length) {
            // [10, 10, 10]
            this.values[space] = vals.slice(0, space.length);
            alpha = vals[space.length];
        } else if (vals[space.charAt(0)] !== undefined) {
            // {r: 10, g: 10, b: 10}
            for (var i = 0; i < space.length; i++) {
                this.values[space][i] = vals[space.charAt(i)];
            }
            alpha = vals.a;
        } else if (vals[spaces[space][0]] !== undefined) {
            // {red: 10, green: 10, blue: 10}
            var chans = spaces[space];
            for (var i = 0; i < space.length; i++) {
                this.values[space][i] = vals[chans[i]];
            }
            alpha = vals.alpha;
        }
        this.values.alpha = Math.max(0, Math.min(1, (alpha !== undefined ? alpha : this.values.alpha)));
        if (space == "alpha") {
            return;
        }

        // cap values of the space prior converting all values
        for (var i = 0; i < space.length; i++) {
            var capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
            this.values[space][i] = Math.round(capped);
        }

        // convert to all the other color spaces
        for (var sname in spaces) {
            if (sname != space) {
                this.values[sname] = convert[space][sname](this.values[space])
            }

            // cap values
            for (var i = 0; i < sname.length; i++) {
                var capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
                this.values[sname][i] = Math.round(capped);
            }
        }
        return true;
    }

    Color.prototype.setSpace = function(space, args) {
        var vals = args[0];
        if (vals === undefined) {
            // color.rgb()
            return this.getValues(space);
        }
        // color.rgb(10, 10, 10)
        if (typeof vals == "number") {
            vals = Array.prototype.slice.call(args);
        }
        this.setValues(space, vals);
        return this;
    }

    Color.prototype.setChannel = function(space, index, val) {
        if (val === undefined) {
            // color.red()
            return this.values[space][index];
        }
        // color.red(100)
        this.values[space][index] = val;
        this.setValues(space, this.values[space]);
        return this;
    }

    window.Color = module.exports = Color

},{"color-convert":3,"color-string":4}],7:[function(require,module,exports){
    /*!
     * Chart.js
     * http://chartjs.org/
     * Version: 2.0.2
     *
     * Copyright 2015 Nick Downie
     * Released under the MIT license
     * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
     */


    var Chart = require('./core/core.js')();

    require('./core/core.helpers')(Chart);
    require('./core/core.element')(Chart);
    require('./core/core.animation')(Chart);
    require('./core/core.controller')(Chart);
    require('./core/core.datasetController')(Chart);
    require('./core/core.layoutService')(Chart);
    require('./core/core.legend')(Chart);
    require('./core/core.scale')(Chart);
    require('./core/core.scaleService')(Chart);
    require('./core/core.title')(Chart);
    require('./core/core.tooltip')(Chart);

    require('./controllers/controller.bar')(Chart);
    require('./controllers/controller.bubble')(Chart);
    require('./controllers/controller.doughnut')(Chart);
    require('./controllers/controller.line')(Chart);
    require('./controllers/controller.polarArea')(Chart);
    require('./controllers/controller.radar')(Chart);

    require('./scales/scale.category')(Chart);
    require('./scales/scale.linear')(Chart);
    require('./scales/scale.logarithmic')(Chart);
    require('./scales/scale.radialLinear')(Chart);
    require('./scales/scale.time')(Chart);

    require('./elements/element.arc')(Chart);
    require('./elements/element.line')(Chart);
    require('./elements/element.point')(Chart);
    require('./elements/element.rectangle')(Chart);

    require('./charts/Chart.Bar')(Chart);
    require('./charts/Chart.Bubble')(Chart);
    require('./charts/Chart.Doughnut')(Chart);
    require('./charts/Chart.Line')(Chart);
    require('./charts/Chart.PolarArea')(Chart);
    require('./charts/Chart.Radar')(Chart);
    require('./charts/Chart.Scatter')(Chart);

    window.Chart = module.exports = Chart;

},{"./charts/Chart.Bar":8,"./charts/Chart.Bubble":9,"./charts/Chart.Doughnut":10,"./charts/Chart.Line":11,"./charts/Chart.PolarArea":12,"./charts/Chart.Radar":13,"./charts/Chart.Scatter":14,"./controllers/controller.bar":15,"./controllers/controller.bubble":16,"./controllers/controller.doughnut":17,"./controllers/controller.line":18,"./controllers/controller.polarArea":19,"./controllers/controller.radar":20,"./core/core.animation":21,"./core/core.controller":22,"./core/core.datasetController":23,"./core/core.element":24,"./core/core.helpers":25,"./core/core.js":26,"./core/core.layoutService":27,"./core/core.legend":28,"./core/core.scale":29,"./core/core.scaleService":30,"./core/core.title":31,"./core/core.tooltip":32,"./elements/element.arc":33,"./elements/element.line":34,"./elements/element.point":35,"./elements/element.rectangle":36,"./scales/scale.category":37,"./scales/scale.linear":38,"./scales/scale.logarithmic":39,"./scales/scale.radialLinear":40,"./scales/scale.time":41}],8:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        Chart.Bar = function(context, config) {
            config.type = 'bar';

            return new Chart(context, config);
        };

    };
},{}],9:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        Chart.Bubble = function(context, config) {
            config.type = 'bubble';
            return new Chart(context, config);
        };

    };
},{}],10:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        Chart.Doughnut = function(context, config) {
            config.type = 'doughnut';

            return new Chart(context, config);
        };

    };
},{}],11:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        Chart.Line = function(context, config) {
            config.type = 'line';

            return new Chart(context, config);
        };

    };
},{}],12:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        Chart.PolarArea = function(context, config) {
            config.type = 'polarArea';

            return new Chart(context, config);
        };

    };
},{}],13:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        var defaultConfig = {
            aspectRatio: 1
        };

        Chart.Radar = function(context, config) {
            config.options = helpers.configMerge(defaultConfig, config.options);
            config.type = 'radar';

            return new Chart(context, config);
        };

    };

},{}],14:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var defaultConfig = {
            hover: {
                mode: 'single'
            },

            scales: {
                xAxes: [{
                    type: "linear", // scatter should not use a category axis
                    position: "bottom",
                    id: "x-axis-1" // need an ID so datasets can reference the scale
                }],
                yAxes: [{
                    type: "linear",
                    position: "left",
                    id: "y-axis-1"
                }]
            },

            tooltips: {
                callbacks: {
                    title: function(tooltipItems, data) {
                        // Title doesn't make sense for scatter since we format the data as a point
                        return '';
                    },
                    label: function(tooltipItem, data) {
                        return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
                    }
                }
            }
        };

        // Register the default config for this type
        Chart.defaults.scatter = defaultConfig;

        // Scatter charts use line controllers
        Chart.controllers.scatter = Chart.controllers.line;

        Chart.Scatter = function(context, config) {
            config.type = 'scatter';
            return new Chart(context, config);
        };

    };
},{}],15:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.bar = {
            hover: {
                mode: "label"
            },

            scales: {
                xAxes: [{
                    type: "category",

                    // Specific to Bar Controller
                    categoryPercentage: 0.8,
                    barPercentage: 0.9,

                    // grid line settings
                    gridLines: {
                        offsetGridLines: true
                    }
                }],
                yAxes: [{
                    type: "linear"
                }]
            }
        };

        Chart.controllers.bar = Chart.DatasetController.extend({
            initialize: function(chart, datasetIndex) {
                Chart.DatasetController.prototype.initialize.call(this, chart, datasetIndex);

                // Use this to indicate that this is a bar dataset.
                this.getDataset().bar = true;
            },
            // Get the number of datasets that display bars. We use this to correctly calculate the bar width
            getBarCount: function getBarCount() {
                var barCount = 0;
                helpers.each(this.chart.data.datasets, function(dataset) {
                    if (helpers.isDatasetVisible(dataset) && dataset.bar) {
                        ++barCount;
                    }
                });
                return barCount;
            },

            addElements: function() {
                this.getDataset().metaData = this.getDataset().metaData || [];
                helpers.each(this.getDataset().data, function(value, index) {
                    this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Rectangle({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: index
                        });
                }, this);
            },
            addElementAndReset: function(index) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var rectangle = new Chart.elements.Rectangle({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index
                });

                var numBars = this.getBarCount();

                this.updateElement(rectangle, index, true, numBars);
                this.getDataset().metaData.splice(index, 0, rectangle);
            },

            update: function update(reset) {
                var numBars = this.getBarCount();

                helpers.each(this.getDataset().metaData, function(rectangle, index) {
                    this.updateElement(rectangle, index, reset, numBars);
                }, this);
            },

            updateElement: function updateElement(rectangle, index, reset, numBars) {

                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var yScale = this.getScaleForId(this.getDataset().yAxisID);

                var yScalePoint;

                if (yScale.min < 0 && yScale.max < 0) {
                    // all less than 0. use the top
                    yScalePoint = yScale.getPixelForValue(yScale.max);
                } else if (yScale.min > 0 && yScale.max > 0) {
                    yScalePoint = yScale.getPixelForValue(yScale.min);
                } else {
                    yScalePoint = yScale.getPixelForValue(0);
                }

                helpers.extend(rectangle, {
                    // Utility
                    _chart: this.chart.chart,
                    _xScale: xScale,
                    _yScale: yScale,
                    _datasetIndex: this.index,
                    _index: index,


                    // Desired view properties
                    _model: {
                        x: this.calculateBarX(index, this.index),
                        y: reset ? yScalePoint : this.calculateBarY(index, this.index),

                        // Tooltip
                        label: this.chart.data.labels[index],
                        datasetLabel: this.getDataset().label,

                        // Appearance
                        base: reset ? yScalePoint : this.calculateBarBase(this.index, index),
                        width: this.calculateBarWidth(numBars),
                        backgroundColor: rectangle.custom && rectangle.custom.backgroundColor ? rectangle.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.rectangle.backgroundColor),
                        borderSkipped: rectangle.custom && rectangle.custom.borderSkipped ? rectangle.custom.borderSkipped : this.chart.options.elements.rectangle.borderSkipped,
                        borderColor: rectangle.custom && rectangle.custom.borderColor ? rectangle.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.rectangle.borderColor),
                        borderWidth: rectangle.custom && rectangle.custom.borderWidth ? rectangle.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.rectangle.borderWidth)
                    }
                });
                rectangle.pivot();
            },

            calculateBarBase: function(datasetIndex, index) {

                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var yScale = this.getScaleForId(this.getDataset().yAxisID);

                var base = 0;

                if (yScale.options.stacked) {

                    var value = this.chart.data.datasets[datasetIndex].data[index];

                    if (value < 0) {
                        for (var i = 0; i < datasetIndex; i++) {
                            var negDS = this.chart.data.datasets[i];
                            if (helpers.isDatasetVisible(negDS) && negDS.yAxisID === yScale.id && negDS.bar) {
                                base += negDS.data[index] < 0 ? negDS.data[index] : 0;
                            }
                        }
                    } else {
                        for (var j = 0; j < datasetIndex; j++) {
                            var posDS = this.chart.data.datasets[j];
                            if (helpers.isDatasetVisible(posDS) && posDS.yAxisID === yScale.id && posDS.bar) {
                                base += posDS.data[index] > 0 ? posDS.data[index] : 0;
                            }
                        }
                    }

                    return yScale.getPixelForValue(base);
                }

                base = yScale.getPixelForValue(yScale.min);

                if (yScale.beginAtZero || ((yScale.min <= 0 && yScale.max >= 0) || (yScale.min >= 0 && yScale.max <= 0))) {
                    base = yScale.getPixelForValue(0, 0);
                    //base += yScale.options.gridLines.lineWidth;
                } else if (yScale.min < 0 && yScale.max < 0) {
                    // All values are negative. Use the top as the base
                    base = yScale.getPixelForValue(yScale.max);
                }

                return base;

            },

            getRuler: function() {

                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var yScale = this.getScaleForId(this.getDataset().yAxisID);
                var datasetCount = this.getBarCount();

                var tickWidth = (function() {
                    var min = xScale.getPixelForTick(1) - xScale.getPixelForTick(0);
                    for (var i = 2; i < this.getDataset().data.length; i++) {
                        min = Math.min(xScale.getPixelForTick(i) - xScale.getPixelForTick(i - 1), min);
                    }
                    return min;
                }).call(this);
                var categoryWidth = tickWidth * xScale.options.categoryPercentage;
                var categorySpacing = (tickWidth - (tickWidth * xScale.options.categoryPercentage)) / 2;
                var fullBarWidth = categoryWidth / datasetCount;
                var barWidth = fullBarWidth * xScale.options.barPercentage;
                var barSpacing = fullBarWidth - (fullBarWidth * xScale.options.barPercentage);

                return {
                    datasetCount: datasetCount,
                    tickWidth: tickWidth,
                    categoryWidth: categoryWidth,
                    categorySpacing: categorySpacing,
                    fullBarWidth: fullBarWidth,
                    barWidth: barWidth,
                    barSpacing: barSpacing
                };
            },

            calculateBarWidth: function() {
                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var ruler = this.getRuler();
                return xScale.options.stacked ? ruler.categoryWidth : ruler.barWidth;
            },

            // Get bar index from the given dataset index accounting for the fact that not all bars are visible
            getBarIndex: function(datasetIndex) {
                var barIndex = 0;

                for (var j = 0; j < datasetIndex; ++j) {
                    if (helpers.isDatasetVisible(this.chart.data.datasets[j]) && this.chart.data.datasets[j].bar) {
                        ++barIndex;
                    }
                }

                return barIndex;
            },

            calculateBarX: function(index, datasetIndex) {

                var yScale = this.getScaleForId(this.getDataset().yAxisID);
                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var barIndex = this.getBarIndex(datasetIndex);

                var ruler = this.getRuler();
                var leftTick = xScale.getPixelForValue(null, index, datasetIndex, this.chart.isCombo);
                leftTick -= this.chart.isCombo ? (ruler.tickWidth / 2) : 0;

                if (xScale.options.stacked) {
                    return leftTick + (ruler.categoryWidth / 2) + ruler.categorySpacing;
                }

                return leftTick +
                    (ruler.barWidth / 2) +
                    ruler.categorySpacing +
                    (ruler.barWidth * barIndex) +
                    (ruler.barSpacing / 2) +
                    (ruler.barSpacing * barIndex);
            },

            calculateBarY: function(index, datasetIndex) {

                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var yScale = this.getScaleForId(this.getDataset().yAxisID);

                var value = this.getDataset().data[index];

                if (yScale.options.stacked) {

                    var sumPos = 0,
                        sumNeg = 0;

                    for (var i = 0; i < datasetIndex; i++) {
                        var ds = this.chart.data.datasets[i];
                        if (helpers.isDatasetVisible(ds) && ds.bar && ds.yAxisID === yScale.id) {
                            if (ds.data[index] < 0) {
                                sumNeg += ds.data[index] || 0;
                            } else {
                                sumPos += ds.data[index] || 0;
                            }
                        }
                    }

                    if (value < 0) {
                        return yScale.getPixelForValue(sumNeg + value);
                    } else {
                        return yScale.getPixelForValue(sumPos + value);
                    }

                    return yScale.getPixelForValue(value);
                }

                return yScale.getPixelForValue(value);
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;
                helpers.each(this.getDataset().metaData, function(rectangle, index) {
                    var d = this.getDataset().data[index];
                    if (d !== null && d !== undefined && !isNaN(d)) {
                        rectangle.transition(easingDecimal).draw();
                    }
                }, this);
            },

            setHoverStyle: function(rectangle) {
                var dataset = this.chart.data.datasets[rectangle._datasetIndex];
                var index = rectangle._index;

                rectangle._model.backgroundColor = rectangle.custom && rectangle.custom.hoverBackgroundColor ? rectangle.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(rectangle._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
                rectangle._model.borderColor = rectangle.custom && rectangle.custom.hoverBorderColor ? rectangle.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(rectangle._model.borderColor).saturate(0.5).darken(0.1).rgbString());
                rectangle._model.borderWidth = rectangle.custom && rectangle.custom.hoverBorderWidth ? rectangle.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, rectangle._model.borderWidth);
            },

            removeHoverStyle: function(rectangle) {
                var dataset = this.chart.data.datasets[rectangle._datasetIndex];
                var index = rectangle._index;

                rectangle._model.backgroundColor = rectangle.custom && rectangle.custom.backgroundColor ? rectangle.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.rectangle.backgroundColor);
                rectangle._model.borderColor = rectangle.custom && rectangle.custom.borderColor ? rectangle.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.rectangle.borderColor);
                rectangle._model.borderWidth = rectangle.custom && rectangle.custom.borderWidth ? rectangle.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.rectangle.borderWidth);
            }

        });
    };

},{}],16:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.bubble = {
            hover: {
                mode: "single"
            },

            scales: {
                xAxes: [{
                    type: "linear", // bubble should probably use a linear scale by default
                    position: "bottom",
                    id: "x-axis-0" // need an ID so datasets can reference the scale
                }],
                yAxes: [{
                    type: "linear",
                    position: "left",
                    id: "y-axis-0"
                }]
            },

            tooltips: {
                callbacks: {
                    title: function(tooltipItems, data) {
                        // Title doesn't make sense for scatter since we format the data as a point
                        return '';
                    },
                    label: function(tooltipItem, data) {
                        var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                        var dataPoint = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return datasetLabel + ': (' + dataPoint.x + ', ' + dataPoint.y + ', ' + dataPoint.r + ')';
                    }
                }
            }
        };


        Chart.controllers.bubble = Chart.DatasetController.extend({
            addElements: function() {

                this.getDataset().metaData = this.getDataset().metaData || [];

                helpers.each(this.getDataset().data, function(value, index) {
                    this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Point({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: index
                        });
                }, this);
            },
            addElementAndReset: function(index) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var point = new Chart.elements.Point({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index
                });

                // Reset the point
                this.updateElement(point, index, true);

                // Add to the points array
                this.getDataset().metaData.splice(index, 0, point);
            },

            update: function update(reset) {
                var points = this.getDataset().metaData;

                var yScale = this.getScaleForId(this.getDataset().yAxisID);
                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var scaleBase;

                if (yScale.min < 0 && yScale.max < 0) {
                    scaleBase = yScale.getPixelForValue(yScale.max);
                } else if (yScale.min > 0 && yScale.max > 0) {
                    scaleBase = yScale.getPixelForValue(yScale.min);
                } else {
                    scaleBase = yScale.getPixelForValue(0);
                }

                // Update Points
                helpers.each(points, function(point, index) {
                    this.updateElement(point, index, reset);
                }, this);

            },

            updateElement: function(point, index, reset) {
                var yScale = this.getScaleForId(this.getDataset().yAxisID);
                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var scaleBase;

                if (yScale.min < 0 && yScale.max < 0) {
                    scaleBase = yScale.getPixelForValue(yScale.max);
                } else if (yScale.min > 0 && yScale.max > 0) {
                    scaleBase = yScale.getPixelForValue(yScale.min);
                } else {
                    scaleBase = yScale.getPixelForValue(0);
                }

                helpers.extend(point, {
                    // Utility
                    _chart: this.chart.chart,
                    _xScale: xScale,
                    _yScale: yScale,
                    _datasetIndex: this.index,
                    _index: index,

                    // Desired view properties
                    _model: {
                        x: reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(this.getDataset().data[index], index, this.index, this.chart.isCombo),
                        y: reset ? scaleBase : yScale.getPixelForValue(this.getDataset().data[index], index, this.index),
                        // Appearance
                        radius: reset ? 0 : point.custom && point.custom.radius ? point.custom.radius : this.getRadius(this.getDataset().data[index]),
                        backgroundColor: point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.point.backgroundColor),
                        borderColor: point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.point.borderColor),
                        borderWidth: point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.point.borderWidth),

                        // Tooltip
                        hitRadius: point.custom && point.custom.hitRadius ? point.custom.hitRadius : helpers.getValueAtIndexOrDefault(this.getDataset().hitRadius, index, this.chart.options.elements.point.hitRadius)
                    }
                });

                point._model.skip = point.custom && point.custom.skip ? point.custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));

                point.pivot();
            },

            getRadius: function(value) {
                return value.r || this.chart.options.elements.point.radius;
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;

                // Transition and Draw the Points
                helpers.each(this.getDataset().metaData, function(point, index) {
                    point.transition(easingDecimal);
                    point.draw();
                });

            },

            setHoverStyle: function(point) {
                // Point
                var dataset = this.chart.data.datasets[point._datasetIndex];
                var index = point._index;

                point._model.radius = point.custom && point.custom.hoverRadius ? point.custom.hoverRadius : (helpers.getValueAtIndexOrDefault(dataset.hoverRadius, index, this.chart.options.elements.point.hoverRadius)) + this.getRadius(this.getDataset().data[point._index]);
                point._model.backgroundColor = point.custom && point.custom.hoverBackgroundColor ? point.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(point._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
                point._model.borderColor = point.custom && point.custom.hoverBorderColor ? point.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(point._model.borderColor).saturate(0.5).darken(0.1).rgbString());
                point._model.borderWidth = point.custom && point.custom.hoverBorderWidth ? point.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, point._model.borderWidth);
            },

            removeHoverStyle: function(point) {
                var dataset = this.chart.data.datasets[point._datasetIndex];
                var index = point._index;

                point._model.radius = point.custom && point.custom.radius ? point.custom.radius : this.getRadius(this.getDataset().data[point._index]);
                point._model.backgroundColor = point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.point.backgroundColor);
                point._model.borderColor = point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.point.borderColor);
                point._model.borderWidth = point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.point.borderWidth);
            }
        });
    };
},{}],17:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.doughnut = {
            animation: {
                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,
                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false
            },
            aspectRatio: 1,
            hover: {
                mode: 'single'
            },
            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');

                if (chart.data.datasets.length) {
                    for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                        text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
                        if (chart.data.labels[i]) {
                            text.push(chart.data.labels[i]);
                        }
                        text.push('</span></li>');
                    }
                }

                text.push('</ul>');
                return text.join("");
            },
            legend: {
                labels: {
                    generateLabels: function(data) {
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map(function(label, i) {
                                return {
                                    text: label,
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    hidden: isNaN(data.datasets[0].data[i]),

                                    // Extra data used for toggling the correct item
                                    index: i
                                };
                            });
                        } else {
                            return [];
                        }
                    }
                },
                onClick: function(e, legendItem) {
                    helpers.each(this.chart.data.datasets, function(dataset) {
                        dataset.metaHiddenData = dataset.metaHiddenData || [];
                        var idx = legendItem.index;

                        if (!isNaN(dataset.data[idx])) {
                            dataset.metaHiddenData[idx] = dataset.data[idx];
                            dataset.data[idx] = NaN;
                        } else if (!isNaN(dataset.metaHiddenData[idx])) {
                            dataset.data[idx] = dataset.metaHiddenData[idx];
                        }
                    });

                    this.chart.update();
                }
            },

            //The percentage of the chart that we cut out of the middle.
            cutoutPercentage: 50,

            //The rotation of the chart, where the first data arc begins.
            rotation: Math.PI * -0.5,

            //The total circumference of the chart.
            circumference: Math.PI * 2.0,

            // Need to override these to give a nice default
            tooltips: {
                callbacks: {
                    title: function() {
                        return '';
                    },
                    label: function(tooltipItem, data) {
                        return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    }
                }
            }
        };

        Chart.defaults.pie = helpers.clone(Chart.defaults.doughnut);
        helpers.extend(Chart.defaults.pie, {
            cutoutPercentage: 0
        });


        Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({
            linkScales: function() {
                // no scales for doughnut
            },

            addElements: function() {
                this.getDataset().metaData = this.getDataset().metaData || [];
                helpers.each(this.getDataset().data, function(value, index) {
                    this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Arc({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: index
                        });
                }, this);
            },
            addElementAndReset: function(index, colorForNewElement) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var arc = new Chart.elements.Arc({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index
                });

                if (colorForNewElement && helpers.isArray(this.getDataset().backgroundColor)) {
                    this.getDataset().backgroundColor.splice(index, 0, colorForNewElement);
                }

                // Reset the point
                this.updateElement(arc, index, true);

                // Add to the points array
                this.getDataset().metaData.splice(index, 0, arc);
            },

            getVisibleDatasetCount: function getVisibleDatasetCount() {
                return helpers.where(this.chart.data.datasets, function(ds) {
                    return helpers.isDatasetVisible(ds);
                }).length;
            },

            // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
            getRingIndex: function getRingIndex(datasetIndex) {
                var ringIndex = 0;

                for (var j = 0; j < datasetIndex; ++j) {
                    if (helpers.isDatasetVisible(this.chart.data.datasets[j])) {
                        ++ringIndex;
                    }
                }

                return ringIndex;
            },

            update: function update(reset) {
                var availableWidth = this.chart.chartArea.right - this.chart.chartArea.left - this.chart.options.elements.arc.borderWidth;
                var availableHeight = this.chart.chartArea.bottom - this.chart.chartArea.top - this.chart.options.elements.arc.borderWidth;
                var minSize = Math.min(availableWidth, availableHeight);
                var offset = {x: 0, y: 0};

                // If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
                if (this.chart.options.circumference && this.chart.options.circumference < Math.PI * 2.0) {
                    var startAngle = this.chart.options.rotation % (Math.PI * 2.0);
                    startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
                    var endAngle = startAngle + this.chart.options.circumference;
                    var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
                    var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
                    var contains0 = (startAngle <= 0 && 0 <= endAngle) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
                    var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
                    var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
                    var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
                    var cutout = this.chart.options.cutoutPercentage / 100.0;
                    var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
                    var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
                    var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
                    minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
                    offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
                }

                this.chart.outerRadius = Math.max(minSize / 2, 0);
                this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? (this.chart.outerRadius / 100) * (this.chart.options.cutoutPercentage) : 1, 0);
                this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.getVisibleDatasetCount();
                this.chart.offsetX = offset.x * this.chart.outerRadius;
                this.chart.offsetY = offset.y * this.chart.outerRadius;

                this.getDataset().total = 0;
                helpers.each(this.getDataset().data, function(value) {
                    if (!isNaN(value)) {
                        this.getDataset().total += Math.abs(value);
                    }
                }, this);

                this.outerRadius = this.chart.outerRadius - (this.chart.radiusLength * this.getRingIndex(this.index));
                this.innerRadius = this.outerRadius - this.chart.radiusLength;

                helpers.each(this.getDataset().metaData, function(arc, index) {
                    this.updateElement(arc, index, reset);
                }, this);
            },
            updateElement: function(arc, index, reset) {
                var centerX = (this.chart.chartArea.left + this.chart.chartArea.right) / 2;
                var centerY = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2;
                var startAngle = this.chart.options.rotation || (Math.PI * -0.5); // non reset case handled later
                var endAngle = this.chart.options.rotation || (Math.PI * -0.5); // non reset case handled later
                var circumference = reset && this.chart.options.animation.animateRotate ? 0 : this.calculateCircumference(this.getDataset().data[index]) * ((this.chart.options.circumference || (2.0 * Math.PI)) / (2.0 * Math.PI));
                var innerRadius = reset && this.chart.options.animation.animateScale ? 0 : this.innerRadius;
                var outerRadius = reset && this.chart.options.animation.animateScale ? 0 : this.outerRadius;

                helpers.extend(arc, {
                    // Utility
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index,

                    // Desired view properties
                    _model: {
                        x: centerX + this.chart.offsetX,
                        y: centerY + this.chart.offsetY,
                        startAngle: startAngle,
                        endAngle: endAngle,
                        circumference: circumference,
                        outerRadius: outerRadius,
                        innerRadius: innerRadius,

                        backgroundColor: arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor),
                        hoverBackgroundColor: arc.custom && arc.custom.hoverBackgroundColor ? arc.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().hoverBackgroundColor, index, this.chart.options.elements.arc.hoverBackgroundColor),
                        borderWidth: arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth),
                        borderColor: arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor),

                        label: helpers.getValueAtIndexOrDefault(this.getDataset().label, index, this.chart.data.labels[index])
                    }
                });

                // Set correct angles if not resetting
                if (!reset) {

                    if (index === 0) {
                        arc._model.startAngle = this.chart.options.rotation || (Math.PI * -0.5);
                    } else {
                        arc._model.startAngle = this.getDataset().metaData[index - 1]._model.endAngle;
                    }

                    arc._model.endAngle = arc._model.startAngle + arc._model.circumference;
                }

                arc.pivot();
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;
                helpers.each(this.getDataset().metaData, function(arc, index) {
                    arc.transition(easingDecimal).draw();
                });
            },

            setHoverStyle: function(arc) {
                var dataset = this.chart.data.datasets[arc._datasetIndex];
                var index = arc._index;

                arc._model.backgroundColor = arc.custom && arc.custom.hoverBackgroundColor ? arc.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(arc._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
                arc._model.borderColor = arc.custom && arc.custom.hoverBorderColor ? arc.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(arc._model.borderColor).saturate(0.5).darken(0.1).rgbString());
                arc._model.borderWidth = arc.custom && arc.custom.hoverBorderWidth ? arc.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, arc._model.borderWidth);
            },

            removeHoverStyle: function(arc) {
                var dataset = this.chart.data.datasets[arc._datasetIndex];
                var index = arc._index;

                arc._model.backgroundColor = arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor);
                arc._model.borderColor = arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor);
                arc._model.borderWidth = arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth);
            },

            calculateCircumference: function(value) {
                if (this.getDataset().total > 0 && !isNaN(value)) {
                    return (Math.PI * 1.999999) * (value / this.getDataset().total);
                } else {
                    return 0;
                }
            }
        });
    };
},{}],18:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.line = {
            showLines: true,

            hover: {
                mode: "label"
            },

            scales: {
                xAxes: [{
                    type: "category",
                    id: 'x-axis-0'
                }],
                yAxes: [{
                    type: "linear",
                    id: 'y-axis-0'
                }]
            }
        };


        Chart.controllers.line = Chart.DatasetController.extend({
            addElements: function() {

                this.getDataset().metaData = this.getDataset().metaData || [];

                this.getDataset().metaDataset = this.getDataset().metaDataset || new Chart.elements.Line({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _points: this.getDataset().metaData
                    });

                helpers.each(this.getDataset().data, function(value, index) {
                    this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Point({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: index
                        });
                }, this);
            },
            addElementAndReset: function(index) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var point = new Chart.elements.Point({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index
                });

                // Reset the point
                this.updateElement(point, index, true);

                // Add to the points array
                this.getDataset().metaData.splice(index, 0, point);

                // Make sure bezier control points are updated
                if (this.chart.options.showLines && this.chart.options.elements.line.tension !== 0)
                    this.updateBezierControlPoints();
            },

            update: function update(reset) {
                var line = this.getDataset().metaDataset;
                var points = this.getDataset().metaData;

                var yScale = this.getScaleForId(this.getDataset().yAxisID);
                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var scaleBase;

                if (yScale.min < 0 && yScale.max < 0) {
                    scaleBase = yScale.getPixelForValue(yScale.max);
                } else if (yScale.min > 0 && yScale.max > 0) {
                    scaleBase = yScale.getPixelForValue(yScale.min);
                } else {
                    scaleBase = yScale.getPixelForValue(0);
                }

                // Update Line
                if (this.chart.options.showLines) {
                    // Utility
                    line._scale = yScale;
                    line._datasetIndex = this.index;
                    // Data
                    line._children = points;
                    // Model
                    line._model = {
                        // Appearance
                        tension: line.custom && line.custom.tension ? line.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                        backgroundColor: line.custom && line.custom.backgroundColor ? line.custom.backgroundColor : (this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor),
                        borderWidth: line.custom && line.custom.borderWidth ? line.custom.borderWidth : (this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth),
                        borderColor: line.custom && line.custom.borderColor ? line.custom.borderColor : (this.getDataset().borderColor || this.chart.options.elements.line.borderColor),
                        borderCapStyle: line.custom && line.custom.borderCapStyle ? line.custom.borderCapStyle : (this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle),
                        borderDash: line.custom && line.custom.borderDash ? line.custom.borderDash : (this.getDataset().borderDash || this.chart.options.elements.line.borderDash),
                        borderDashOffset: line.custom && line.custom.borderDashOffset ? line.custom.borderDashOffset : (this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset),
                        borderJoinStyle: line.custom && line.custom.borderJoinStyle ? line.custom.borderJoinStyle : (this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle),
                        fill: line.custom && line.custom.fill ? line.custom.fill : (this.getDataset().fill !== undefined ? this.getDataset().fill : this.chart.options.elements.line.fill),
                        // Scale
                        scaleTop: yScale.top,
                        scaleBottom: yScale.bottom,
                        scaleZero: scaleBase
                    };
                    line.pivot();
                }

                // Update Points
                helpers.each(points, function(point, index) {
                    this.updateElement(point, index, reset);
                }, this);

                if (this.chart.options.showLines && this.chart.options.elements.line.tension !== 0)
                    this.updateBezierControlPoints();
            },

            getPointBackgroundColor: function(point, index) {
                var backgroundColor = this.chart.options.elements.point.backgroundColor;
                var dataset = this.getDataset();

                if (point.custom && point.custom.backgroundColor) {
                    backgroundColor = point.custom.backgroundColor;
                } else if (dataset.pointBackgroundColor) {
                    backgroundColor = helpers.getValueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
                } else if (dataset.backgroundColor) {
                    backgroundColor = dataset.backgroundColor;
                }

                return backgroundColor;
            },
            getPointBorderColor: function(point, index) {
                var borderColor = this.chart.options.elements.point.borderColor;
                var dataset = this.getDataset();

                if (point.custom && point.custom.borderColor) {
                    borderColor = point.custom.borderColor;
                } else if (dataset.pointBorderColor) {
                    borderColor = helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, index, borderColor);
                } else if (dataset.borderColor) {
                    borderColor = dataset.borderColor;
                }

                return borderColor;
            },
            getPointBorderWidth: function(point, index) {
                var borderWidth = this.chart.options.elements.point.borderWidth;
                var dataset = this.getDataset();

                if (point.custom && point.custom.borderWidth !== undefined) {
                    borderWidth = point.custom.borderWidth;
                } else if (dataset.pointBorderWidth !== undefined) {
                    borderWidth = helpers.getValueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
                } else if (dataset.borderWidth !== undefined) {
                    borderWidth = dataset.borderWidth;
                }

                return borderWidth;
            },

            updateElement: function(point, index, reset) {
                var yScale = this.getScaleForId(this.getDataset().yAxisID);
                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var scaleBase;

                if (yScale.min < 0 && yScale.max < 0) {
                    scaleBase = yScale.getPixelForValue(yScale.max);
                } else if (yScale.min > 0 && yScale.max > 0) {
                    scaleBase = yScale.getPixelForValue(yScale.min);
                } else {
                    scaleBase = yScale.getPixelForValue(0);
                }

                // Utility
                point._chart = this.chart.chart;
                point._xScale = xScale;
                point._yScale = yScale;
                point._datasetIndex = this.index;
                point._index = index;

                // Desired view properties
                point._model = {
                    x: xScale.getPixelForValue(this.getDataset().data[index], index, this.index, this.chart.isCombo),
                    y: reset ? scaleBase : this.calculatePointY(this.getDataset().data[index], index, this.index, this.chart.isCombo),
                    // Appearance
                    tension: point.custom && point.custom.tension ? point.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                    radius: point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().radius, index, this.chart.options.elements.point.radius),
                    pointStyle: point.custom && point.custom.pointStyle ? point.custom.pointStyle : helpers.getValueAtIndexOrDefault(this.getDataset().pointStyle, index, this.chart.options.elements.point.pointStyle),
                    backgroundColor: this.getPointBackgroundColor(point, index),
                    borderColor: this.getPointBorderColor(point, index),
                    borderWidth: this.getPointBorderWidth(point, index),
                    // Tooltip
                    hitRadius: point.custom && point.custom.hitRadius ? point.custom.hitRadius : helpers.getValueAtIndexOrDefault(this.getDataset().hitRadius, index, this.chart.options.elements.point.hitRadius)
                };

                point._model.skip = point.custom && point.custom.skip ? point.custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
            },

            calculatePointY: function(value, index, datasetIndex, isCombo) {

                var xScale = this.getScaleForId(this.getDataset().xAxisID);
                var yScale = this.getScaleForId(this.getDataset().yAxisID);

                if (yScale.options.stacked) {

                    var sumPos = 0,
                        sumNeg = 0;

                    for (var i = 0; i < datasetIndex; i++) {
                        var ds = this.chart.data.datasets[i];
                        if (ds.type === 'line' && helpers.isDatasetVisible(ds)) {
                            if (ds.data[index] < 0) {
                                sumNeg += ds.data[index] || 0;
                            } else {
                                sumPos += ds.data[index] || 0;
                            }
                        }
                    }

                    if (value < 0) {
                        return yScale.getPixelForValue(sumNeg + value);
                    } else {
                        return yScale.getPixelForValue(sumPos + value);
                    }
                }

                return yScale.getPixelForValue(value);
            },

            updateBezierControlPoints: function() {
                // Update bezier control points
                helpers.each(this.getDataset().metaData, function(point, index) {
                    var controlPoints = helpers.splineCurve(
                        helpers.previousItem(this.getDataset().metaData, index)._model,
                        point._model,
                        helpers.nextItem(this.getDataset().metaData, index)._model,
                        point._model.tension
                    );

                    // Prevent the bezier going outside of the bounds of the graph
                    point._model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, this.chart.chartArea.right), this.chart.chartArea.left);
                    point._model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

                    point._model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, this.chart.chartArea.right), this.chart.chartArea.left);
                    point._model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

                    // Now pivot the point for animation
                    point.pivot();
                }, this);
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;

                // Transition Point Locations
                helpers.each(this.getDataset().metaData, function(point) {
                    point.transition(easingDecimal);
                });

                // Transition and Draw the line
                if (this.chart.options.showLines)
                    this.getDataset().metaDataset.transition(easingDecimal).draw();

                // Draw the points
                helpers.each(this.getDataset().metaData, function(point) {
                    point.draw();
                });
            },

            setHoverStyle: function(point) {
                // Point
                var dataset = this.chart.data.datasets[point._datasetIndex];
                var index = point._index;

                point._model.radius = point.custom && point.custom.hoverRadius ? point.custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
                point._model.backgroundColor = point.custom && point.custom.hoverBackgroundColor ? point.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.color(point._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
                point._model.borderColor = point.custom && point.custom.hoverBorderColor ? point.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.color(point._model.borderColor).saturate(0.5).darken(0.1).rgbString());
                point._model.borderWidth = point.custom && point.custom.hoverBorderWidth ? point.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, point._model.borderWidth);
            },

            removeHoverStyle: function(point) {
                var dataset = this.chart.data.datasets[point._datasetIndex];
                var index = point._index;

                point._model.radius = point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().radius, index, this.chart.options.elements.point.radius);
                point._model.backgroundColor = this.getPointBackgroundColor(point, index);
                point._model.borderColor = this.getPointBorderColor(point, index);
                point._model.borderWidth = this.getPointBorderWidth(point, index);
            }
        });
    };

},{}],19:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.polarArea = {

            scale: {
                type: "radialLinear",
                lineArc: true // so that lines are circular
            },

            //Boolean - Whether to animate the rotation of the chart
            animateRotate: true,
            animateScale: true,

            aspectRatio: 1,
            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="' + chart.id + '-legend">');

                if (chart.data.datasets.length) {
                    for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                        text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
                        if (chart.data.labels[i]) {
                            text.push(chart.data.labels[i]);
                        }
                        text.push('</span></li>');
                    }
                }

                text.push('</ul>');
                return text.join("");
            },
            legend: {
                labels: {
                    generateLabels: function(data) {
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map(function(label, i) {
                                return {
                                    text: label,
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    hidden: isNaN(data.datasets[0].data[i]),

                                    // Extra data used for toggling the correct item
                                    index: i
                                };
                            });
                        } else {
                            return [];
                        }
                    }
                },
                onClick: function(e, legendItem) {
                    helpers.each(this.chart.data.datasets, function(dataset) {
                        dataset.metaHiddenData = dataset.metaHiddenData || [];
                        var idx = legendItem.index;

                        if (!isNaN(dataset.data[idx])) {
                            dataset.metaHiddenData[idx] = dataset.data[idx];
                            dataset.data[idx] = NaN;
                        } else if (!isNaN(dataset.metaHiddenData[idx])) {
                            dataset.data[idx] = dataset.metaHiddenData[idx];
                        }
                    });

                    this.chart.update();
                }
            },

            // Need to override these to give a nice default
            tooltips: {
                callbacks: {
                    title: function() {
                        return '';
                    },
                    label: function(tooltipItem, data) {
                        return data.labels[tooltipItem.index] + ': ' + tooltipItem.yLabel;
                    }
                }
            }
        };

        Chart.controllers.polarArea = Chart.DatasetController.extend({
            linkScales: function() {
                // no scales for doughnut
            },
            addElements: function() {
                this.getDataset().metaData = this.getDataset().metaData || [];
                helpers.each(this.getDataset().data, function(value, index) {
                    this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Arc({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: index
                        });
                }, this);
            },
            addElementAndReset: function(index) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var arc = new Chart.elements.Arc({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index
                });

                // Reset the point
                this.updateElement(arc, index, true);

                // Add to the points array
                this.getDataset().metaData.splice(index, 0, arc);
            },
            getVisibleDatasetCount: function getVisibleDatasetCount() {
                return helpers.where(this.chart.data.datasets, function(ds) {
                    return helpers.isDatasetVisible(ds);
                }).length;
            },

            update: function update(reset) {
                var minSize = Math.min(this.chart.chartArea.right - this.chart.chartArea.left, this.chart.chartArea.bottom - this.chart.chartArea.top);
                this.chart.outerRadius = Math.max((minSize - this.chart.options.elements.arc.borderWidth / 2) / 2, 0);
                this.chart.innerRadius = Math.max(this.chart.options.cutoutPercentage ? (this.chart.outerRadius / 100) * (this.chart.options.cutoutPercentage) : 1, 0);
                this.chart.radiusLength = (this.chart.outerRadius - this.chart.innerRadius) / this.getVisibleDatasetCount();

                this.getDataset().total = 0;
                helpers.each(this.getDataset().data, function(value) {
                    this.getDataset().total += Math.abs(value);
                }, this);

                this.outerRadius = this.chart.outerRadius - (this.chart.radiusLength * this.index);
                this.innerRadius = this.outerRadius - this.chart.radiusLength;

                helpers.each(this.getDataset().metaData, function(arc, index) {
                    this.updateElement(arc, index, reset);
                }, this);
            },

            updateElement: function(arc, index, reset) {
                var circumference = this.calculateCircumference(this.getDataset().data[index]);
                var centerX = (this.chart.chartArea.left + this.chart.chartArea.right) / 2;
                var centerY = (this.chart.chartArea.top + this.chart.chartArea.bottom) / 2;

                // If there is NaN data before us, we need to calculate the starting angle correctly.
                // We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
                var notNullIndex = 0;
                for (var i = 0; i < index; ++i) {
                    if (!isNaN(this.getDataset().data[i])) {
                        ++notNullIndex;
                    }
                }

                var startAngle = (-0.5 * Math.PI) + (circumference * notNullIndex);
                var endAngle = startAngle + circumference;

                var resetModel = {
                    x: centerX,
                    y: centerY,
                    innerRadius: 0,
                    outerRadius: this.chart.options.animateScale ? 0 : this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[index]),
                    startAngle: this.chart.options.animateRotate ? Math.PI * -0.5 : startAngle,
                    endAngle: this.chart.options.animateRotate ? Math.PI * -0.5 : endAngle,

                    backgroundColor: arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor),
                    borderWidth: arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth),
                    borderColor: arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor),

                    label: helpers.getValueAtIndexOrDefault(this.chart.data.labels, index, this.chart.data.labels[index])
                };

                helpers.extend(arc, {
                    // Utility
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index,
                    _scale: this.chart.scale,

                    // Desired view properties
                    _model: reset ? resetModel : {
                        x: centerX,
                        y: centerY,
                        innerRadius: 0,
                        outerRadius: this.chart.scale.getDistanceFromCenterForValue(this.getDataset().data[index]),
                        startAngle: startAngle,
                        endAngle: endAngle,

                        backgroundColor: arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor),
                        borderWidth: arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth),
                        borderColor: arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor),

                        label: helpers.getValueAtIndexOrDefault(this.chart.data.labels, index, this.chart.data.labels[index])
                    }
                });

                arc.pivot();
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;
                helpers.each(this.getDataset().metaData, function(arc, index) {
                    arc.transition(easingDecimal).draw();
                });
            },

            setHoverStyle: function(arc) {
                var dataset = this.chart.data.datasets[arc._datasetIndex];
                var index = arc._index;

                arc._model.backgroundColor = arc.custom && arc.custom.hoverBackgroundColor ? arc.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.color(arc._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
                arc._model.borderColor = arc.custom && arc.custom.hoverBorderColor ? arc.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.color(arc._model.borderColor).saturate(0.5).darken(0.1).rgbString());
                arc._model.borderWidth = arc.custom && arc.custom.hoverBorderWidth ? arc.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.hoverBorderWidth, index, arc._model.borderWidth);
            },

            removeHoverStyle: function(arc) {
                var dataset = this.chart.data.datasets[arc._datasetIndex];
                var index = arc._index;

                arc._model.backgroundColor = arc.custom && arc.custom.backgroundColor ? arc.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().backgroundColor, index, this.chart.options.elements.arc.backgroundColor);
                arc._model.borderColor = arc.custom && arc.custom.borderColor ? arc.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().borderColor, index, this.chart.options.elements.arc.borderColor);
                arc._model.borderWidth = arc.custom && arc.custom.borderWidth ? arc.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().borderWidth, index, this.chart.options.elements.arc.borderWidth);
            },

            calculateCircumference: function(value) {
                if (isNaN(value)) {
                    return 0;
                } else {
                    // Count the number of NaN values
                    var numNaN = helpers.where(this.getDataset().data, function(data) {
                        return isNaN(data);
                    }).length;

                    return (2 * Math.PI) / (this.getDataset().data.length - numNaN);
                }
            }
        });

    };
},{}],20:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;


        Chart.defaults.radar = {
            scale: {
                type: "radialLinear"
            },
            elements: {
                line: {
                    tension: 0 // no bezier in radar
                }
            }
        };

        Chart.controllers.radar = Chart.DatasetController.extend({
            linkScales: function() {
                // No need. Single scale only
            },

            addElements: function() {

                this.getDataset().metaData = this.getDataset().metaData || [];

                this.getDataset().metaDataset = this.getDataset().metaDataset || new Chart.elements.Line({
                        _chart: this.chart.chart,
                        _datasetIndex: this.index,
                        _points: this.getDataset().metaData,
                        _loop: true
                    });

                helpers.each(this.getDataset().data, function(value, index) {
                    this.getDataset().metaData[index] = this.getDataset().metaData[index] || new Chart.elements.Point({
                            _chart: this.chart.chart,
                            _datasetIndex: this.index,
                            _index: index,
                            _model: {
                                x: 0, //xScale.getPixelForValue(null, index, true),
                                y: 0 //this.chartArea.bottom,
                            }
                        });
                }, this);
            },
            addElementAndReset: function(index) {
                this.getDataset().metaData = this.getDataset().metaData || [];
                var point = new Chart.elements.Point({
                    _chart: this.chart.chart,
                    _datasetIndex: this.index,
                    _index: index
                });

                // Reset the point
                this.updateElement(point, index, true);

                // Add to the points array
                this.getDataset().metaData.splice(index, 0, point);

                // Make sure bezier control points are updated
                this.updateBezierControlPoints();
            },

            update: function update(reset) {

                var line = this.getDataset().metaDataset;
                var points = this.getDataset().metaData;

                var scale = this.chart.scale;
                var scaleBase;

                if (scale.min < 0 && scale.max < 0) {
                    scaleBase = scale.getPointPositionForValue(0, scale.max);
                } else if (scale.min > 0 && scale.max > 0) {
                    scaleBase = scale.getPointPositionForValue(0, scale.min);
                } else {
                    scaleBase = scale.getPointPositionForValue(0, 0);
                }

                helpers.extend(this.getDataset().metaDataset, {
                    // Utility
                    _datasetIndex: this.index,
                    // Data
                    _children: this.getDataset().metaData,
                    // Model
                    _model: {
                        // Appearance
                        tension: line.custom && line.custom.tension ? line.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                        backgroundColor: line.custom && line.custom.backgroundColor ? line.custom.backgroundColor : (this.getDataset().backgroundColor || this.chart.options.elements.line.backgroundColor),
                        borderWidth: line.custom && line.custom.borderWidth ? line.custom.borderWidth : (this.getDataset().borderWidth || this.chart.options.elements.line.borderWidth),
                        borderColor: line.custom && line.custom.borderColor ? line.custom.borderColor : (this.getDataset().borderColor || this.chart.options.elements.line.borderColor),
                        fill: line.custom && line.custom.fill ? line.custom.fill : (this.getDataset().fill !== undefined ? this.getDataset().fill : this.chart.options.elements.line.fill),
                        borderCapStyle: line.custom && line.custom.borderCapStyle ? line.custom.borderCapStyle : (this.getDataset().borderCapStyle || this.chart.options.elements.line.borderCapStyle),
                        borderDash: line.custom && line.custom.borderDash ? line.custom.borderDash : (this.getDataset().borderDash || this.chart.options.elements.line.borderDash),
                        borderDashOffset: line.custom && line.custom.borderDashOffset ? line.custom.borderDashOffset : (this.getDataset().borderDashOffset || this.chart.options.elements.line.borderDashOffset),
                        borderJoinStyle: line.custom && line.custom.borderJoinStyle ? line.custom.borderJoinStyle : (this.getDataset().borderJoinStyle || this.chart.options.elements.line.borderJoinStyle),

                        // Scale
                        scaleTop: scale.top,
                        scaleBottom: scale.bottom,
                        scaleZero: scaleBase
                    }
                });

                this.getDataset().metaDataset.pivot();

                // Update Points
                helpers.each(points, function(point, index) {
                    this.updateElement(point, index, reset);
                }, this);


                // Update bezier control points
                this.updateBezierControlPoints();
            },
            updateElement: function(point, index, reset) {
                var pointPosition = this.chart.scale.getPointPositionForValue(index, this.getDataset().data[index]);

                helpers.extend(point, {
                    // Utility
                    _datasetIndex: this.index,
                    _index: index,
                    _scale: this.chart.scale,

                    // Desired view properties
                    _model: {
                        x: reset ? this.chart.scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
                        y: reset ? this.chart.scale.yCenter : pointPosition.y,

                        // Appearance
                        tension: point.custom && point.custom.tension ? point.custom.tension : helpers.getValueOrDefault(this.getDataset().tension, this.chart.options.elements.line.tension),
                        radius: point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().pointRadius, index, this.chart.options.elements.point.radius),
                        backgroundColor: point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, index, this.chart.options.elements.point.backgroundColor),
                        borderColor: point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, index, this.chart.options.elements.point.borderColor),
                        borderWidth: point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, index, this.chart.options.elements.point.borderWidth),
                        pointStyle: point.custom && point.custom.pointStyle ? point.custom.pointStyle : helpers.getValueAtIndexOrDefault(this.getDataset().pointStyle, index, this.chart.options.elements.point.pointStyle),

                        // Tooltip
                        hitRadius: point.custom && point.custom.hitRadius ? point.custom.hitRadius : helpers.getValueAtIndexOrDefault(this.getDataset().hitRadius, index, this.chart.options.elements.point.hitRadius)
                    }
                });

                point._model.skip = point.custom && point.custom.skip ? point.custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
            },
            updateBezierControlPoints: function() {
                helpers.each(this.getDataset().metaData, function(point, index) {
                    var controlPoints = helpers.splineCurve(
                        helpers.previousItem(this.getDataset().metaData, index, true)._model,
                        point._model,
                        helpers.nextItem(this.getDataset().metaData, index, true)._model,
                        point._model.tension
                    );

                    // Prevent the bezier going outside of the bounds of the graph
                    point._model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, this.chart.chartArea.right), this.chart.chartArea.left);
                    point._model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

                    point._model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, this.chart.chartArea.right), this.chart.chartArea.left);
                    point._model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, this.chart.chartArea.bottom), this.chart.chartArea.top);

                    // Now pivot the point for animation
                    point.pivot();
                }, this);
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;

                // Transition Point Locations
                helpers.each(this.getDataset().metaData, function(point, index) {
                    point.transition(easingDecimal);
                });

                // Transition and Draw the line
                this.getDataset().metaDataset.transition(easingDecimal).draw();

                // Draw the points
                helpers.each(this.getDataset().metaData, function(point) {
                    point.draw();
                });
            },

            setHoverStyle: function(point) {
                // Point
                var dataset = this.chart.data.datasets[point._datasetIndex];
                var index = point._index;

                point._model.radius = point.custom && point.custom.hoverRadius ? point.custom.hoverRadius : helpers.getValueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
                point._model.backgroundColor = point.custom && point.custom.hoverBackgroundColor ? point.custom.hoverBackgroundColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.color(point._model.backgroundColor).saturate(0.5).darken(0.1).rgbString());
                point._model.borderColor = point.custom && point.custom.hoverBorderColor ? point.custom.hoverBorderColor : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.color(point._model.borderColor).saturate(0.5).darken(0.1).rgbString());
                point._model.borderWidth = point.custom && point.custom.hoverBorderWidth ? point.custom.hoverBorderWidth : helpers.getValueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, point._model.borderWidth);
            },

            removeHoverStyle: function(point) {
                var dataset = this.chart.data.datasets[point._datasetIndex];
                var index = point._index;

                point._model.radius = point.custom && point.custom.radius ? point.custom.radius : helpers.getValueAtIndexOrDefault(this.getDataset().radius, index, this.chart.options.elements.point.radius);
                point._model.backgroundColor = point.custom && point.custom.backgroundColor ? point.custom.backgroundColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBackgroundColor, index, this.chart.options.elements.point.backgroundColor);
                point._model.borderColor = point.custom && point.custom.borderColor ? point.custom.borderColor : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderColor, index, this.chart.options.elements.point.borderColor);
                point._model.borderWidth = point.custom && point.custom.borderWidth ? point.custom.borderWidth : helpers.getValueAtIndexOrDefault(this.getDataset().pointBorderWidth, index, this.chart.options.elements.point.borderWidth);
            }
        });
    };
},{}],21:[function(require,module,exports){
    /*global window: false */
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.animation = {
            duration: 1000,
            easing: "easeOutQuart",
            onProgress: helpers.noop,
            onComplete: helpers.noop
        };

        Chart.Animation = Chart.Element.extend({
            currentStep: null, // the current animation step
            numSteps: 60, // default number of steps
            easing: "", // the easing to use for this animation
            render: null, // render function used by the animation service

            onAnimationProgress: null, // user specified callback to fire on each step of the animation
            onAnimationComplete: null // user specified callback to fire when the animation finishes
        });

        Chart.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            request: null,
            addAnimation: function(chartInstance, animationObject, duration, lazy) {

                if (!lazy) {
                    chartInstance.animating = true;
                }

                for (var index = 0; index < this.animations.length; ++index) {
                    if (this.animations[index].chartInstance === chartInstance) {
                        // replacing an in progress animation
                        this.animations[index].animationObject = animationObject;
                        return;
                    }
                }

                this.animations.push({
                    chartInstance: chartInstance,
                    animationObject: animationObject
                });

                // If there are no animations queued, manually kickstart a digest, for lack of a better word
                if (this.animations.length === 1) {
                    this.requestAnimationFrame();
                }
            },
            // Cancel the animation for a given chart instance
            cancelAnimation: function(chartInstance) {
                var index = helpers.findIndex(this.animations, function(animationWrapper) {
                    return animationWrapper.chartInstance === chartInstance;
                });

                if (index !== -1) {
                    this.animations.splice(index, 1);
                    chartInstance.animating = false;
                }
            },
            requestAnimationFrame: function() {
                var me = this;
                if (me.request === null) {
                    // Skip animation frame requests until the active one is executed.
                    // This can happen when processing mouse events, e.g. 'mousemove'
                    // and 'mouseout' events will trigger multiple renders.
                    me.request = helpers.requestAnimFrame.call(window, function() {
                        me.request = null;
                        me.startDigest();
                    });
                }
            },
            startDigest: function() {

                var startTime = Date.now();
                var framesToDrop = 0;

                if (this.dropFrames > 1) {
                    framesToDrop = Math.floor(this.dropFrames);
                    this.dropFrames = this.dropFrames % 1;
                }

                var i = 0;
                while (i < this.animations.length) {
                    if (this.animations[i].animationObject.currentStep === null) {
                        this.animations[i].animationObject.currentStep = 0;
                    }

                    this.animations[i].animationObject.currentStep += 1 + framesToDrop;

                    if (this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps) {
                        this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps;
                    }

                    this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject);
                    if (this.animations[i].animationObject.onAnimationProgress && this.animations[i].animationObject.onAnimationProgress.call) {
                        this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance, this.animations[i]);
                    }

                    if (this.animations[i].animationObject.currentStep === this.animations[i].animationObject.numSteps) {
                        if (this.animations[i].animationObject.onAnimationComplete && this.animations[i].animationObject.onAnimationComplete.call) {
                            this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance, this.animations[i]);
                        }

                        // executed the last frame. Remove the animation.
                        this.animations[i].chartInstance.animating = false;

                        this.animations.splice(i, 1);
                    } else {
                        ++i;
                    }
                }

                var endTime = Date.now();
                var dropFrames = (endTime - startTime) / this.frameDuration;

                this.dropFrames += dropFrames;

                // Do we have more stuff to animate?
                if (this.animations.length > 0) {
                    this.requestAnimationFrame();
                }
            }
        };
    };
},{}],22:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;
        //Create a dictionary of chart types, to allow for extension of existing types
        Chart.types = {};

        //Store a reference to each instance - allowing us to globally resize chart instances on window resize.
        //Destroy method on the chart will remove the instance of the chart from this reference.
        Chart.instances = {};

        // Controllers available for dataset visualization eg. bar, line, slice, etc.
        Chart.controllers = {};

        // The main controller of a chart
        Chart.Controller = function(instance) {

            this.chart = instance;
            this.config = instance.config;
            this.options = this.config.options = helpers.configMerge(Chart.defaults.global, Chart.defaults[this.config.type], this.config.options || {});
            this.id = helpers.uid();

            Object.defineProperty(this, 'data', {
                get: function() {
                    return this.config.data;
                }
            });

            //Add the chart instance to the global namespace
            Chart.instances[this.id] = this;

            if (this.options.responsive) {
                // Silent resize before chart draws
                this.resize(true);
            }

            this.initialize();

            return this;
        };

        helpers.extend(Chart.Controller.prototype, {

            initialize: function initialize() {

                // TODO
                // If BeforeInit(this) doesn't return false, proceed

                this.bindEvents();

                // Make sure controllers are built first so that each dataset is bound to an axis before the scales
                // are built
                this.ensureScalesHaveIDs();
                this.buildOrUpdateControllers();
                this.buildScales();
                this.buildSurroundingItems();
                this.updateLayout();
                this.resetElements();
                this.initToolTip();
                this.update();

                // TODO
                // If AfterInit(this) doesn't return false, proceed

                return this;
            },

            clear: function clear() {
                helpers.clear(this.chart);
                return this;
            },

            stop: function stop() {
                // Stops any current animation loop occuring
                Chart.animationService.cancelAnimation(this);
                return this;
            },

            resize: function resize(silent) {
                var canvas = this.chart.canvas;
                var newWidth = helpers.getMaximumWidth(this.chart.canvas);
                var newHeight = (this.options.maintainAspectRatio && isNaN(this.chart.aspectRatio) === false && isFinite(this.chart.aspectRatio) && this.chart.aspectRatio !== 0) ? newWidth / this.chart.aspectRatio : helpers.getMaximumHeight(this.chart.canvas);

                var sizeChanged = this.chart.width !== newWidth || this.chart.height !== newHeight;

                if (!sizeChanged)
                    return this;

                canvas.width = this.chart.width = newWidth;
                canvas.height = this.chart.height = newHeight;

                helpers.retinaScale(this.chart);

                if (!silent) {
                    this.stop();
                    this.update(this.options.responsiveAnimationDuration);
                }

                return this;
            },
            ensureScalesHaveIDs: function ensureScalesHaveIDs() {
                var defaultXAxisID = 'x-axis-';
                var defaultYAxisID = 'y-axis-';

                if (this.options.scales) {
                    if (this.options.scales.xAxes && this.options.scales.xAxes.length) {
                        helpers.each(this.options.scales.xAxes, function(xAxisOptions, index) {
                            xAxisOptions.id = xAxisOptions.id || (defaultXAxisID + index);
                        });
                    }

                    if (this.options.scales.yAxes && this.options.scales.yAxes.length) {
                        // Build the y axes
                        helpers.each(this.options.scales.yAxes, function(yAxisOptions, index) {
                            yAxisOptions.id = yAxisOptions.id || (defaultYAxisID + index);
                        });
                    }
                }
            },
            buildScales: function buildScales() {
                // Map of scale ID to scale object so we can lookup later
                this.scales = {};

                // Build the x axes
                if (this.options.scales) {
                    if (this.options.scales.xAxes && this.options.scales.xAxes.length) {
                        helpers.each(this.options.scales.xAxes, function(xAxisOptions, index) {
                            var xType = helpers.getValueOrDefault(xAxisOptions.type, 'category');
                            var ScaleClass = Chart.scaleService.getScaleConstructor(xType);
                            if (ScaleClass) {
                                var scale = new ScaleClass({
                                    ctx: this.chart.ctx,
                                    options: xAxisOptions,
                                    chart: this,
                                    id: xAxisOptions.id
                                });

                                this.scales[scale.id] = scale;
                            }
                        }, this);
                    }

                    if (this.options.scales.yAxes && this.options.scales.yAxes.length) {
                        // Build the y axes
                        helpers.each(this.options.scales.yAxes, function(yAxisOptions, index) {
                            var yType = helpers.getValueOrDefault(yAxisOptions.type, 'linear');
                            var ScaleClass = Chart.scaleService.getScaleConstructor(yType);
                            if (ScaleClass) {
                                var scale = new ScaleClass({
                                    ctx: this.chart.ctx,
                                    options: yAxisOptions,
                                    chart: this,
                                    id: yAxisOptions.id
                                });

                                this.scales[scale.id] = scale;
                            }
                        }, this);
                    }
                }
                if (this.options.scale) {
                    // Build radial axes
                    var ScaleClass = Chart.scaleService.getScaleConstructor(this.options.scale.type);
                    if (ScaleClass) {
                        var scale = new ScaleClass({
                            ctx: this.chart.ctx,
                            options: this.options.scale,
                            chart: this
                        });

                        this.scale = scale;

                        this.scales.radialScale = scale;
                    }
                }

                Chart.scaleService.addScalesToLayout(this);
            },

            buildSurroundingItems: function() {
                if (this.options.title) {
                    this.titleBlock = new Chart.Title({
                        ctx: this.chart.ctx,
                        options: this.options.title,
                        chart: this
                    });

                    Chart.layoutService.addBox(this, this.titleBlock);
                }

                if (this.options.legend) {
                    this.legend = new Chart.Legend({
                        ctx: this.chart.ctx,
                        options: this.options.legend,
                        chart: this
                    });

                    Chart.layoutService.addBox(this, this.legend);
                }
            },

            updateLayout: function() {
                Chart.layoutService.update(this, this.chart.width, this.chart.height);
            },

            buildOrUpdateControllers: function buildOrUpdateControllers() {
                var types = [];
                var newControllers = [];

                helpers.each(this.data.datasets, function(dataset, datasetIndex) {
                    if (!dataset.type) {
                        dataset.type = this.config.type;
                    }

                    var type = dataset.type;
                    types.push(type);

                    if (dataset.controller) {
                        dataset.controller.updateIndex(datasetIndex);
                    } else {
                        dataset.controller = new Chart.controllers[type](this, datasetIndex);
                        newControllers.push(dataset.controller);
                    }
                }, this);

                if (types.length > 1) {
                    for (var i = 1; i < types.length; i++) {
                        if (types[i] !== types[i - 1]) {
                            this.isCombo = true;
                            break;
                        }
                    }
                }

                return newControllers;
            },

            resetElements: function resetElements() {
                helpers.each(this.data.datasets, function(dataset, datasetIndex) {
                    dataset.controller.reset();
                });
            },

            update: function update(animationDuration, lazy) {
                // In case the entire data object changed
                this.tooltip._data = this.data;

                // Make sure dataset controllers are updated and new controllers are reset
                var newControllers = this.buildOrUpdateControllers();

                Chart.layoutService.update(this, this.chart.width, this.chart.height);

                // Can only reset the new controllers after the scales have been updated
                helpers.each(newControllers, function(controller) {
                    controller.reset();
                });

                // Make sure all dataset controllers have correct meta data counts
                helpers.each(this.data.datasets, function(dataset, datasetIndex) {
                    dataset.controller.buildOrUpdateElements();
                });

                // This will loop through any data and do the appropriate element update for the type
                helpers.each(this.data.datasets, function(dataset, datasetIndex) {
                    dataset.controller.update();
                });
                this.render(animationDuration, lazy);
            },

            render: function render(duration, lazy) {

                if (this.options.animation && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && this.options.animation.duration !== 0))) {
                    var animation = new Chart.Animation();
                    animation.numSteps = (duration || this.options.animation.duration) / 16.66; //60 fps
                    animation.easing = this.options.animation.easing;

                    // render function
                    animation.render = function(chartInstance, animationObject) {
                        var easingFunction = helpers.easingEffects[animationObject.easing];
                        var stepDecimal = animationObject.currentStep / animationObject.numSteps;
                        var easeDecimal = easingFunction(stepDecimal);

                        chartInstance.draw(easeDecimal, stepDecimal, animationObject.currentStep);
                    };

                    // user events
                    animation.onAnimationProgress = this.options.animation.onProgress;
                    animation.onAnimationComplete = this.options.animation.onComplete;

                    Chart.animationService.addAnimation(this, animation, duration, lazy);
                } else {
                    this.draw();
                    if (this.options.animation && this.options.animation.onComplete && this.options.animation.onComplete.call) {
                        this.options.animation.onComplete.call(this);
                    }
                }
                return this;
            },

            draw: function(ease) {
                var easingDecimal = ease || 1;
                this.clear();

                // Draw all the scales
                helpers.each(this.boxes, function(box) {
                    box.draw(this.chartArea);
                }, this);
                if (this.scale) {
                    this.scale.draw();
                }

                // Clip out the chart area so that anything outside does not draw. This is necessary for zoom and pan to function
                this.chart.ctx.save();
                this.chart.ctx.beginPath();
                this.chart.ctx.rect(this.chartArea.left, this.chartArea.top, this.chartArea.right - this.chartArea.left, this.chartArea.bottom - this.chartArea.top);
                this.chart.ctx.clip();

                // Draw each dataset via its respective controller (reversed to support proper line stacking)
                helpers.each(this.data.datasets, function(dataset, datasetIndex) {
                    if (helpers.isDatasetVisible(dataset)) {
                        dataset.controller.draw(ease);
                    }
                }, null, true);

                // Restore from the clipping operation
                this.chart.ctx.restore();

                // Finally draw the tooltip
                this.tooltip.transition(easingDecimal).draw();
            },

            // Get the single element that was clicked on
            // @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
            getElementAtEvent: function(e) {

                var eventPosition = helpers.getRelativePosition(e, this.chart);
                var elementsArray = [];

                helpers.each(this.data.datasets, function(dataset, datasetIndex) {
                    if (helpers.isDatasetVisible(dataset)) {
                        helpers.each(dataset.metaData, function(element, index) {
                            if (element.inRange(eventPosition.x, eventPosition.y)) {
                                elementsArray.push(element);
                                return elementsArray;
                            }
                        });
                    }
                });

                return elementsArray;
            },

            getElementsAtEvent: function(e) {
                var eventPosition = helpers.getRelativePosition(e, this.chart);
                var elementsArray = [];

                var found = (function() {
                    if (this.data.datasets) {
                        for (var i = 0; i < this.data.datasets.length; i++) {
                            if (helpers.isDatasetVisible(this.data.datasets[i])) {
                                for (var j = 0; j < this.data.datasets[i].metaData.length; j++) {
                                    if (this.data.datasets[i].metaData[j].inRange(eventPosition.x, eventPosition.y)) {
                                        return this.data.datasets[i].metaData[j];
                                    }
                                }
                            }
                        }
                    }
                }).call(this);

                if (!found) {
                    return elementsArray;
                }

                helpers.each(this.data.datasets, function(dataset, dsIndex) {
                    if (helpers.isDatasetVisible(dataset)) {
                        elementsArray.push(dataset.metaData[found._index]);
                    }
                });

                return elementsArray;
            },

            getDatasetAtEvent: function(e) {
                var elementsArray = this.getElementAtEvent(e);

                if (elementsArray.length > 0) {
                    elementsArray = this.data.datasets[elementsArray[0]._datasetIndex].metaData;
                }

                return elementsArray;
            },

            generateLegend: function generateLegend() {
                return this.options.legendCallback(this);
            },

            destroy: function destroy() {
                this.clear();
                helpers.unbindEvents(this, this.events);
                helpers.removeResizeListener(this.chart.canvas.parentNode);

                // Reset canvas height/width attributes
                var canvas = this.chart.canvas;
                canvas.width = this.chart.width;
                canvas.height = this.chart.height;

                // if we scaled the canvas in response to a devicePixelRatio !== 1, we need to undo that transform here
                if (this.chart.originalDevicePixelRatio !== undefined) {
                    this.chart.ctx.scale(1 / this.chart.originalDevicePixelRatio, 1 / this.chart.originalDevicePixelRatio);
                }

                // Reset to the old style since it may have been changed by the device pixel ratio changes
                canvas.style.width = this.chart.originalCanvasStyleWidth;
                canvas.style.height = this.chart.originalCanvasStyleHeight;

                delete Chart.instances[this.id];
            },

            toBase64Image: function toBase64Image() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
            },

            initToolTip: function initToolTip() {
                this.tooltip = new Chart.Tooltip({
                    _chart: this.chart,
                    _chartInstance: this,
                    _data: this.data,
                    _options: this.options
                }, this);
            },

            bindEvents: function bindEvents() {
                helpers.bindEvents(this, this.options.events, function(evt) {
                    this.eventHandler(evt);
                });
            },
            eventHandler: function eventHandler(e) {
                this.lastActive = this.lastActive || [];
                this.lastTooltipActive = this.lastTooltipActive || [];

                // Find Active Elements for hover and tooltips
                if (e.type === 'mouseout') {
                    this.active = [];
                    this.tooltipActive = [];
                } else {

                    var _this = this;
                    var getItemsForMode = function(mode) {
                        switch (mode) {
                            case 'single':
                                return _this.getElementAtEvent(e);
                            case 'label':
                                return _this.getElementsAtEvent(e);
                            case 'dataset':
                                return _this.getDatasetAtEvent(e);
                            default:
                                return e;
                        }
                    };

                    this.active = getItemsForMode(this.options.hover.mode);
                    this.tooltipActive = getItemsForMode(this.options.tooltips.mode);
                }

                // On Hover hook
                if (this.options.hover.onHover) {
                    this.options.hover.onHover.call(this, this.active);
                }

                if (e.type === 'mouseup' || e.type === 'click') {
                    if (this.options.onClick) {
                        this.options.onClick.call(this, e, this.active);
                    }

                    if (this.legend && this.legend.handleEvent) {
                        this.legend.handleEvent(e);
                    }
                }

                var dataset;
                var index;

                // Remove styling for last active (even if it may still be active)
                if (this.lastActive.length) {
                    switch (this.options.hover.mode) {
                        case 'single':
                            this.data.datasets[this.lastActive[0]._datasetIndex].controller.removeHoverStyle(this.lastActive[0], this.lastActive[0]._datasetIndex, this.lastActive[0]._index);
                            break;
                        case 'label':
                        case 'dataset':
                            for (var i = 0; i < this.lastActive.length; i++) {
                                if (this.lastActive[i])
                                    this.data.datasets[this.lastActive[i]._datasetIndex].controller.removeHoverStyle(this.lastActive[i], this.lastActive[i]._datasetIndex, this.lastActive[i]._index);
                            }
                            break;
                        default:
                        // Don't change anything
                    }
                }

                // Built in hover styling
                if (this.active.length && this.options.hover.mode) {
                    switch (this.options.hover.mode) {
                        case 'single':
                            this.data.datasets[this.active[0]._datasetIndex].controller.setHoverStyle(this.active[0]);
                            break;
                        case 'label':
                        case 'dataset':
                            for (var j = 0; j < this.active.length; j++) {
                                if (this.active[j])
                                    this.data.datasets[this.active[j]._datasetIndex].controller.setHoverStyle(this.active[j]);
                            }
                            break;
                        default:
                        // Don't change anything
                    }
                }


                // Built in Tooltips
                if (this.options.tooltips.enabled || this.options.tooltips.custom) {

                    // The usual updates
                    this.tooltip.initialize();
                    this.tooltip._active = this.tooltipActive;
                    this.tooltip.update();
                }

                // Hover animations
                this.tooltip.pivot();

                if (!this.animating) {
                    var changed;

                    helpers.each(this.active, function(element, index) {
                        if (element !== this.lastActive[index]) {
                            changed = true;
                        }
                    }, this);

                    helpers.each(this.tooltipActive, function(element, index) {
                        if (element !== this.lastTooltipActive[index]) {
                            changed = true;
                        }
                    }, this);

                    // If entering, leaving, or changing elements, animate the change via pivot
                    if ((this.lastActive.length !== this.active.length) ||
                        (this.lastTooltipActive.length !== this.tooltipActive.length) ||
                        changed) {

                        this.stop();

                        if (this.options.tooltips.enabled || this.options.tooltips.custom) {
                            this.tooltip.update(true);
                        }

                        // We only need to render at this point. Updating will cause scales to be recomputed generating flicker & using more
                        // memory than necessary.
                        this.render(this.options.hover.animationDuration, true);
                    }
                }

                // Remember Last Actives
                this.lastActive = this.active;
                this.lastTooltipActive = this.tooltipActive;
                return this;
            }
        });
    };

},{}],23:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        // Base class for all dataset controllers (line, bar, etc)
        Chart.DatasetController = function(chart, datasetIndex) {
            this.initialize.call(this, chart, datasetIndex);
        };

        helpers.extend(Chart.DatasetController.prototype, {
            initialize: function(chart, datasetIndex) {
                this.chart = chart;
                this.index = datasetIndex;
                this.linkScales();
                this.addElements();
            },
            updateIndex: function(datasetIndex) {
                this.index = datasetIndex;
            },

            linkScales: function() {
                if (!this.getDataset().xAxisID) {
                    this.getDataset().xAxisID = this.chart.options.scales.xAxes[0].id;
                }

                if (!this.getDataset().yAxisID) {
                    this.getDataset().yAxisID = this.chart.options.scales.yAxes[0].id;
                }
            },

            getDataset: function() {
                return this.chart.data.datasets[this.index];
            },

            getScaleForId: function(scaleID) {
                return this.chart.scales[scaleID];
            },

            reset: function() {
                this.update(true);
            },

            buildOrUpdateElements: function buildOrUpdateElements() {
                // Handle the number of data points changing
                var numData = this.getDataset().data.length;
                var numMetaData = this.getDataset().metaData.length;

                // Make sure that we handle number of datapoints changing
                if (numData < numMetaData) {
                    // Remove excess bars for data points that have been removed
                    this.getDataset().metaData.splice(numData, numMetaData - numData);
                } else if (numData > numMetaData) {
                    // Add new elements
                    for (var index = numMetaData; index < numData; ++index) {
                        this.addElementAndReset(index);
                    }
                }
            },

            // Controllers should implement the following
            addElements: helpers.noop,
            addElementAndReset: helpers.noop,
            draw: helpers.noop,
            removeHoverStyle: helpers.noop,
            setHoverStyle: helpers.noop,
            update: helpers.noop
        });

        Chart.DatasetController.extend = helpers.inherits;

    };
},{}],24:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.elements = {};

        Chart.Element = function(configuration) {
            helpers.extend(this, configuration);
            this.initialize.apply(this, arguments);
        };
        helpers.extend(Chart.Element.prototype, {
            initialize: function() {},
            pivot: function() {
                if (!this._view) {
                    this._view = helpers.clone(this._model);
                }
                this._start = helpers.clone(this._view);
                return this;
            },
            transition: function(ease) {
                if (!this._view) {
                    this._view = helpers.clone(this._model);
                }

                // No animation -> No Transition
                if (ease === 1) {
                    this._view = this._model;
                    this._start = null;
                    return this;
                }

                if (!this._start) {
                    this.pivot();
                }

                helpers.each(this._model, function(value, key) {

                    if (key[0] === '_' || !this._model.hasOwnProperty(key)) {
                        // Only non-underscored properties
                    }

                    // Init if doesn't exist
                    else if (!this._view.hasOwnProperty(key)) {
                        if (typeof value === 'number' && !isNaN(this._view[key])) {
                            this._view[key] = value * ease;
                        } else {
                            this._view[key] = value;
                        }
                    }

                    // No unnecessary computations
                    else if (value === this._view[key]) {
                        // It's the same! Woohoo!
                    }

                    // Color transitions if possible
                    else if (typeof value === 'string') {
                        try {
                            var color = helpers.color(this._start[key]).mix(helpers.color(this._model[key]), ease);
                            this._view[key] = color.rgbString();
                        } catch (err) {
                            this._view[key] = value;
                        }
                    }
                    // Number transitions
                    else if (typeof value === 'number') {
                        var startVal = this._start[key] !== undefined && isNaN(this._start[key]) === false ? this._start[key] : 0;
                        this._view[key] = ((this._model[key] - startVal) * ease) + startVal;
                    }
                    // Everything else
                    else {
                        this._view[key] = value;
                    }
                }, this);

                return this;
            },
            tooltipPosition: function() {
                return {
                    x: this._model.x,
                    y: this._model.y
                };
            },
            hasValue: function() {
                return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
            }
        });

        Chart.Element.extend = helpers.inherits;

    };

},{}],25:[function(require,module,exports){
    /*global window: false */
    /*global document: false */
    "use strict";

    var color = require('chartjs-color');

    module.exports = function(Chart) {

        //Global Chart helpers object for utility methods and classes
        var helpers = Chart.helpers = {};

        //-- Basic js utility methods
        helpers.each = function(loopable, callback, self, reverse) {
            // Check to see if null or undefined firstly.
            var i, len;
            if (helpers.isArray(loopable)) {
                len = loopable.length;
                if (reverse) {
                    for (i = len - 1; i >= 0; i--) {
                        callback.call(self, loopable[i], i);
                    }
                } else {
                    for (i = 0; i < len; i++) {
                        callback.call(self, loopable[i], i);
                    }
                }
            } else if (typeof loopable === 'object') {
                var keys = Object.keys(loopable);
                len = keys.length;
                for (i = 0; i < len; i++) {
                    callback.call(self, loopable[keys[i]], keys[i]);
                }
            }
        };
        helpers.clone = function(obj) {
            var objClone = {};
            helpers.each(obj, function(value, key) {
                if (obj.hasOwnProperty(key)) {
                    if (helpers.isArray(value)) {
                        objClone[key] = value.slice(0);
                    } else if (typeof value === 'object' && value !== null) {
                        objClone[key] = helpers.clone(value);
                    } else {
                        objClone[key] = value;
                    }
                }
            });
            return objClone;
        };
        helpers.extend = function(base) {
            var len = arguments.length;
            var additionalArgs = [];
            for (var i = 1; i < len; i++) {
                additionalArgs.push(arguments[i]);
            }
            helpers.each(additionalArgs, function(extensionObject) {
                helpers.each(extensionObject, function(value, key) {
                    if (extensionObject.hasOwnProperty(key)) {
                        base[key] = value;
                    }
                });
            });
            return base;
        };
        // Need a special merge function to chart configs since they are now grouped
        helpers.configMerge = function(_base) {
            var base = helpers.clone(_base);
            helpers.each(Array.prototype.slice.call(arguments, 1), function(extension) {
                helpers.each(extension, function(value, key) {
                    if (extension.hasOwnProperty(key)) {
                        if (key === 'scales') {
                            // Scale config merging is complex. Add out own function here for that
                            base[key] = helpers.scaleMerge(base.hasOwnProperty(key) ? base[key] : {}, value);

                        } else if (key === 'scale') {
                            // Used in polar area & radar charts since there is only one scale
                            base[key] = helpers.configMerge(base.hasOwnProperty(key) ? base[key] : {}, Chart.scaleService.getScaleDefaults(value.type), value);
                        } else if (base.hasOwnProperty(key) && helpers.isArray(base[key]) && helpers.isArray(value)) {
                            // In this case we have an array of objects replacing another array. Rather than doing a strict replace,
                            // merge. This allows easy scale option merging
                            var baseArray = base[key];

                            helpers.each(value, function(valueObj, index) {

                                if (index < baseArray.length) {
                                    if (typeof baseArray[index] === 'object' && baseArray[index] !== null && typeof valueObj === 'object' && valueObj !== null) {
                                        // Two objects are coming together. Do a merge of them.
                                        baseArray[index] = helpers.configMerge(baseArray[index], valueObj);
                                    } else {
                                        // Just overwrite in this case since there is nothing to merge
                                        baseArray[index] = valueObj;
                                    }
                                } else {
                                    baseArray.push(valueObj); // nothing to merge
                                }
                            });

                        } else if (base.hasOwnProperty(key) && typeof base[key] === "object" && base[key] !== null && typeof value === "object") {
                            // If we are overwriting an object with an object, do a merge of the properties.
                            base[key] = helpers.configMerge(base[key], value);

                        } else {
                            // can just overwrite the value in this case
                            base[key] = value;
                        }
                    }
                });
            });

            return base;
        };
        helpers.extendDeep = function(_base) {
            return _extendDeep.apply(this, arguments);

            function _extendDeep(dst) {
                helpers.each(arguments, function(obj) {
                    if (obj !== dst) {
                        helpers.each(obj, function(value, key) {
                            if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                _extendDeep(dst[key], value);
                            } else {
                                dst[key] = value;
                            }
                        });
                    }
                });
                return dst;
            }
        };
        helpers.scaleMerge = function(_base, extension) {
            var base = helpers.clone(_base);

            helpers.each(extension, function(value, key) {
                if (extension.hasOwnProperty(key)) {
                    if (key === 'xAxes' || key === 'yAxes') {
                        // These properties are arrays of items
                        if (base.hasOwnProperty(key)) {
                            helpers.each(value, function(valueObj, index) {
                                var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
                                var axisDefaults = Chart.scaleService.getScaleDefaults(axisType);
                                if (index >= base[key].length || !base[key][index].type) {
                                    base[key].push(helpers.configMerge(axisDefaults, valueObj));
                                } else if (valueObj.type && valueObj.type !== base[key][index].type) {
                                    // Type changed. Bring in the new defaults before we bring in valueObj so that valueObj can override the correct scale defaults
                                    base[key][index] = helpers.configMerge(base[key][index], axisDefaults, valueObj);
                                } else {
                                    // Type is the same
                                    base[key][index] = helpers.configMerge(base[key][index], valueObj);
                                }
                            });
                        } else {
                            base[key] = [];
                            helpers.each(value, function(valueObj) {
                                var axisType = helpers.getValueOrDefault(valueObj.type, key === 'xAxes' ? 'category' : 'linear');
                                base[key].push(helpers.configMerge(Chart.scaleService.getScaleDefaults(axisType), valueObj));
                            });
                        }
                    } else if (base.hasOwnProperty(key) && typeof base[key] === "object" && base[key] !== null && typeof value === "object") {
                        // If we are overwriting an object with an object, do a merge of the properties.
                        base[key] = helpers.configMerge(base[key], value);

                    } else {
                        // can just overwrite the value in this case
                        base[key] = value;
                    }
                }
            });

            return base;
        };
        helpers.getValueAtIndexOrDefault = function(value, index, defaultValue) {
            if (value === undefined || value === null) {
                return defaultValue;
            }

            if (helpers.isArray(value)) {
                return index < value.length ? value[index] : defaultValue;
            }

            return value;
        };
        helpers.getValueOrDefault = function(value, defaultValue) {
            return value === undefined ? defaultValue : value;
        };
        helpers.indexOf = function(arrayToSearch, item) {
            if (Array.prototype.indexOf) {
                return arrayToSearch.indexOf(item);
            } else {
                for (var i = 0; i < arrayToSearch.length; i++) {
                    if (arrayToSearch[i] === item)
                        return i;
                }
                return -1;
            }
        };
        helpers.where = function(collection, filterCallback) {
            var filtered = [];

            helpers.each(collection, function(item) {
                if (filterCallback(item)) {
                    filtered.push(item);
                }
            });

            return filtered;
        };
        helpers.findIndex = function(arrayToSearch, callback, thisArg) {
            var index = -1;
            if (Array.prototype.findIndex) {
                index = arrayToSearch.findIndex(callback, thisArg);
            } else {
                for (var i = 0; i < arrayToSearch.length; ++i) {
                    thisArg = thisArg !== undefined ? thisArg : arrayToSearch;

                    if (callback.call(thisArg, arrayToSearch[i], i, arrayToSearch)) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        };
        helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
            // Default to start of the array
            if (startIndex === undefined || startIndex === null) {
                startIndex = -1;
            }
            for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
                var currentItem = arrayToSearch[i];
                if (filterCallback(currentItem)) {
                    return currentItem;
                }
            }
        };
        helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
            // Default to end of the array
            if (startIndex === undefined || startIndex === null) {
                startIndex = arrayToSearch.length;
            }
            for (var i = startIndex - 1; i >= 0; i--) {
                var currentItem = arrayToSearch[i];
                if (filterCallback(currentItem)) {
                    return currentItem;
                }
            }
        };
        helpers.inherits = function(extensions) {
            //Basic javascript inheritance based on the model created in Backbone.js
            var parent = this;
            var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function() {
                return parent.apply(this, arguments);
            };

            var Surrogate = function() {
                this.constructor = ChartElement;
            };
            Surrogate.prototype = parent.prototype;
            ChartElement.prototype = new Surrogate();

            ChartElement.extend = helpers.inherits;

            if (extensions) {
                helpers.extend(ChartElement.prototype, extensions);
            }

            ChartElement.__super__ = parent.prototype;

            return ChartElement;
        };
        helpers.noop = function() {};
        helpers.uid = (function() {
            var id = 0;
            return function() {
                return "chart-" + id++;
            };
        })();
        helpers.warn = function(str) {
            //Method for warning of errors
            if (console && typeof console.warn === "function") {
                console.warn(str);
            }
        };
        //-- Math methods
        helpers.isNumber = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        helpers.almostEquals = function(x, y, epsilon) {
            return Math.abs(x - y) < epsilon;
        };
        helpers.max = function(array) {
            return array.reduce(function(max, value) {
                if (!isNaN(value)) {
                    return Math.max(max, value);
                } else {
                    return max;
                }
            }, Number.NEGATIVE_INFINITY);
        };
        helpers.min = function(array) {
            return array.reduce(function(min, value) {
                if (!isNaN(value)) {
                    return Math.min(min, value);
                } else {
                    return min;
                }
            }, Number.POSITIVE_INFINITY);
        };
        helpers.sign = function(x) {
            if (Math.sign) {
                return Math.sign(x);
            } else {
                x = +x; // convert to a number
                if (x === 0 || isNaN(x)) {
                    return x;
                }
                return x > 0 ? 1 : -1;
            }
        };
        helpers.log10 = function(x) {
            if (Math.log10) {
                return Math.log10(x);
            } else {
                return Math.log(x) / Math.LN10;
            }
        };
        helpers.toRadians = function(degrees) {
            return degrees * (Math.PI / 180);
        };
        helpers.toDegrees = function(radians) {
            return radians * (180 / Math.PI);
        };
        // Gets the angle from vertical upright to the point about a centre.
        helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
            var distanceFromXCenter = anglePoint.x - centrePoint.x,
                distanceFromYCenter = anglePoint.y - centrePoint.y,
                radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

            var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

            if (angle < (-0.5 * Math.PI)) {
                angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
            }

            return {
                angle: angle,
                distance: radialDistanceFromCenter
            };
        };
        helpers.aliasPixel = function(pixelWidth) {
            return (pixelWidth % 2 === 0) ? 0 : 0.5;
        };
        helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
            //Props to Rob Spencer at scaled innovation for his post on splining between points
            //http://scaledinnovation.com/analytics/splines/aboutSplines.html

            // This function must also respect "skipped" points

            var previous = firstPoint.skip ? middlePoint : firstPoint,
                current = middlePoint,
                next = afterPoint.skip ? middlePoint : afterPoint;

            var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
            var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

            var s01 = d01 / (d01 + d12);
            var s12 = d12 / (d01 + d12);

            // If all points are the same, s01 & s02 will be inf
            s01 = isNaN(s01) ? 0 : s01;
            s12 = isNaN(s12) ? 0 : s12;

            var fa = t * s01; // scaling factor for triangle Ta
            var fb = t * s12;

            return {
                previous: {
                    x: current.x - fa * (next.x - previous.x),
                    y: current.y - fa * (next.y - previous.y)
                },
                next: {
                    x: current.x + fb * (next.x - previous.x),
                    y: current.y + fb * (next.y - previous.y)
                }
            };
        };
        helpers.nextItem = function(collection, index, loop) {
            if (loop) {
                return index >= collection.length - 1 ? collection[0] : collection[index + 1];
            }

            return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
        };
        helpers.previousItem = function(collection, index, loop) {
            if (loop) {
                return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
            }
            return index <= 0 ? collection[0] : collection[index - 1];
        };
        // Implementation of the nice number algorithm used in determining where axis labels will go
        helpers.niceNum = function(range, round) {
            var exponent = Math.floor(helpers.log10(range));
            var fraction = range / Math.pow(10, exponent);
            var niceFraction;

            if (round) {
                if (fraction < 1.5) {
                    niceFraction = 1;
                } else if (fraction < 3) {
                    niceFraction = 2;
                } else if (fraction < 7) {
                    niceFraction = 5;
                } else {
                    niceFraction = 10;
                }
            } else {
                if (fraction <= 1.0) {
                    niceFraction = 1;
                } else if (fraction <= 2) {
                    niceFraction = 2;
                } else if (fraction <= 5) {
                    niceFraction = 5;
                } else {
                    niceFraction = 10;
                }
            }

            return niceFraction * Math.pow(10, exponent);
        };
        //Easing functions adapted from Robert Penner's easing equations
        //http://www.robertpenner.com/easing/
        var easingEffects = helpers.easingEffects = {
            linear: function(t) {
                return t;
            },
            easeInQuad: function(t) {
                return t * t;
            },
            easeOutQuad: function(t) {
                return -1 * t * (t - 2);
            },
            easeInOutQuad: function(t) {
                if ((t /= 1 / 2) < 1) {
                    return 1 / 2 * t * t;
                }
                return -1 / 2 * ((--t) * (t - 2) - 1);
            },
            easeInCubic: function(t) {
                return t * t * t;
            },
            easeOutCubic: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1);
            },
            easeInOutCubic: function(t) {
                if ((t /= 1 / 2) < 1) {
                    return 1 / 2 * t * t * t;
                }
                return 1 / 2 * ((t -= 2) * t * t + 2);
            },
            easeInQuart: function(t) {
                return t * t * t * t;
            },
            easeOutQuart: function(t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1);
            },
            easeInOutQuart: function(t) {
                if ((t /= 1 / 2) < 1) {
                    return 1 / 2 * t * t * t * t;
                }
                return -1 / 2 * ((t -= 2) * t * t * t - 2);
            },
            easeInQuint: function(t) {
                return 1 * (t /= 1) * t * t * t * t;
            },
            easeOutQuint: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
            },
            easeInOutQuint: function(t) {
                if ((t /= 1 / 2) < 1) {
                    return 1 / 2 * t * t * t * t * t;
                }
                return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
            },
            easeInSine: function(t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
            },
            easeOutSine: function(t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2));
            },
            easeInOutSine: function(t) {
                return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
            },
            easeInExpo: function(t) {
                return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
            },
            easeOutExpo: function(t) {
                return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
            },
            easeInOutExpo: function(t) {
                if (t === 0) {
                    return 0;
                }
                if (t === 1) {
                    return 1;
                }
                if ((t /= 1 / 2) < 1) {
                    return 1 / 2 * Math.pow(2, 10 * (t - 1));
                }
                return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
            },
            easeInCirc: function(t) {
                if (t >= 1) {
                    return t;
                }
                return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
            },
            easeOutCirc: function(t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
            },
            easeInOutCirc: function(t) {
                if ((t /= 1 / 2) < 1) {
                    return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
                }
                return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function(t) {
                var s = 1.70158;
                var p = 0;
                var a = 1;
                if (t === 0) {
                    return 0;
                }
                if ((t /= 1) === 1) {
                    return 1;
                }
                if (!p) {
                    p = 1 * 0.3;
                }
                if (a < Math.abs(1)) {
                    a = 1;
                    s = p / 4;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                }
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
            },
            easeOutElastic: function(t) {
                var s = 1.70158;
                var p = 0;
                var a = 1;
                if (t === 0) {
                    return 0;
                }
                if ((t /= 1) === 1) {
                    return 1;
                }
                if (!p) {
                    p = 1 * 0.3;
                }
                if (a < Math.abs(1)) {
                    a = 1;
                    s = p / 4;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                }
                return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
            },
            easeInOutElastic: function(t) {
                var s = 1.70158;
                var p = 0;
                var a = 1;
                if (t === 0) {
                    return 0;
                }
                if ((t /= 1 / 2) === 2) {
                    return 1;
                }
                if (!p) {
                    p = 1 * (0.3 * 1.5);
                }
                if (a < Math.abs(1)) {
                    a = 1;
                    s = p / 4;
                } else {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                }
                if (t < 1) {
                    return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
                }
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
            },
            easeInBack: function(t) {
                var s = 1.70158;
                return 1 * (t /= 1) * t * ((s + 1) * t - s);
            },
            easeOutBack: function(t) {
                var s = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
            },
            easeInOutBack: function(t) {
                var s = 1.70158;
                if ((t /= 1 / 2) < 1) {
                    return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
                }
                return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
            },
            easeInBounce: function(t) {
                return 1 - easingEffects.easeOutBounce(1 - t);
            },
            easeOutBounce: function(t) {
                if ((t /= 1) < (1 / 2.75)) {
                    return 1 * (7.5625 * t * t);
                } else if (t < (2 / 2.75)) {
                    return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
                } else if (t < (2.5 / 2.75)) {
                    return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
                } else {
                    return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
                }
            },
            easeInOutBounce: function(t) {
                if (t < 1 / 2) {
                    return easingEffects.easeInBounce(t * 2) * 0.5;
                }
                return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
            }
        };
        //Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
        helpers.requestAnimFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
        })();
        helpers.cancelAnimFrame = (function() {
            return window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.oCancelAnimationFrame ||
                window.msCancelAnimationFrame ||
                function(callback) {
                    return window.clearTimeout(callback, 1000 / 60);
                };
        })();
        //-- DOM methods
        helpers.getRelativePosition = function(evt, chart) {
            var mouseX, mouseY;
            var e = evt.originalEvent || evt,
                canvas = evt.currentTarget || evt.srcElement,
                boundingRect = canvas.getBoundingClientRect();

            if (e.touches && e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;

            } else {
                mouseX = e.clientX;
                mouseY = e.clientY;
            }

            // Scale mouse coordinates into canvas coordinates
            // by following the pattern laid out by 'jerryj' in the comments of
            // http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
            var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
            var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
            var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
            var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
            var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
            var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

            // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
            // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
            mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
            mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

            return {
                x: mouseX,
                y: mouseY
            };

        };
        helpers.addEvent = function(node, eventType, method) {
            if (node.addEventListener) {
                node.addEventListener(eventType, method);
            } else if (node.attachEvent) {
                node.attachEvent("on" + eventType, method);
            } else {
                node["on" + eventType] = method;
            }
        };
        helpers.removeEvent = function(node, eventType, handler) {
            if (node.removeEventListener) {
                node.removeEventListener(eventType, handler, false);
            } else if (node.detachEvent) {
                node.detachEvent("on" + eventType, handler);
            } else {
                node["on" + eventType] = helpers.noop;
            }
        };
        helpers.bindEvents = function(chartInstance, arrayOfEvents, handler) {
            // Create the events object if it's not already present
            if (!chartInstance.events)
                chartInstance.events = {};

            helpers.each(arrayOfEvents, function(eventName) {
                chartInstance.events[eventName] = function() {
                    handler.apply(chartInstance, arguments);
                };
                helpers.addEvent(chartInstance.chart.canvas, eventName, chartInstance.events[eventName]);
            });
        };
        helpers.unbindEvents = function(chartInstance, arrayOfEvents) {
            helpers.each(arrayOfEvents, function(handler, eventName) {
                helpers.removeEvent(chartInstance.chart.canvas, eventName, handler);
            });
        };

        // Private helper function to convert max-width/max-height values that may be percentages into a number
        function parseMaxStyle(styleValue, node, parentProperty) {
            var valueInPixels;
            if (typeof(styleValue) === 'string') {
                valueInPixels = parseInt(styleValue, 10);

                if (styleValue.indexOf('%') != -1) {
                    // percentage * size in dimension
                    valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
                }
            } else {
                valueInPixels = styleValue;
            }

            return valueInPixels;
        }

        // Private helper to get a constraint dimension
        // @param domNode : the node to check the constraint on
        // @param maxStyle : the style that defines the maximum for the direction we are using (max-width / max-height)
        // @param percentageProperty : property of parent to use when calculating width as a percentage
        function getConstraintDimension(domNode, maxStyle, percentageProperty) {
            var constrainedDimension;
            var constrainedNode = document.defaultView.getComputedStyle(domNode)[maxStyle];
            var constrainedContainer = document.defaultView.getComputedStyle(domNode.parentNode)[maxStyle];
            var hasCNode = constrainedNode !== null && constrainedNode !== "none";
            var hasCContainer = constrainedContainer !== null && constrainedContainer !== "none";

            if (hasCNode || hasCContainer) {
                constrainedDimension = Math.min((hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : Number.POSITIVE_INFINITY), (hasCContainer ? parseMaxStyle(constrainedContainer, domNode.parentNode, percentageProperty) : Number.POSITIVE_INFINITY));
            }
            return constrainedDimension;
        }
        // returns Number or undefined if no constraint
        helpers.getConstraintWidth = function(domNode) {
            return getConstraintDimension(domNode, 'max-width', 'clientWidth');
        };
        // returns Number or undefined if no constraint
        helpers.getConstraintHeight = function(domNode) {
            return getConstraintDimension(domNode, 'max-height', 'clientHeight');
        };
        helpers.getMaximumWidth = function(domNode) {
            var container = domNode.parentNode;
            var padding = parseInt(helpers.getStyle(container, 'padding-left')) + parseInt(helpers.getStyle(container, 'padding-right'));

            var w = container.clientWidth - padding;
            var cw = helpers.getConstraintWidth(domNode);
            if (cw !== undefined) {
                w = Math.min(w, cw);
            }

            return w;
        };
        helpers.getMaximumHeight = function(domNode) {
            var container = domNode.parentNode;
            var padding = parseInt(helpers.getStyle(container, 'padding-top')) + parseInt(helpers.getStyle(container, 'padding-bottom'));

            var h = container.clientHeight - padding;
            var ch = helpers.getConstraintHeight(domNode);
            if (ch !== undefined) {
                h = Math.min(h, ch);
            }

            return h;
        };
        helpers.getStyle = function(el, property) {
            return el.currentStyle ?
                el.currentStyle[property] :
                document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
        };
        helpers.retinaScale = function(chart) {
            var ctx = chart.ctx;
            var width = chart.canvas.width;
            var height = chart.canvas.height;
            var pixelRatio = chart.currentDevicePixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio !== 1) {
                ctx.canvas.height = height * pixelRatio;
                ctx.canvas.width = width * pixelRatio;
                ctx.scale(pixelRatio, pixelRatio);

                // Store the device pixel ratio so that we can go backwards in `destroy`.
                // The devicePixelRatio changes with zoom, so there are no guarantees that it is the same
                // when destroy is called
                chart.originalDevicePixelRatio = chart.originalDevicePixelRatio || pixelRatio;
            }

            ctx.canvas.style.width = width + 'px';
            ctx.canvas.style.height = height + 'px';
        };
        //-- Canvas methods
        helpers.clear = function(chart) {
            chart.ctx.clearRect(0, 0, chart.width, chart.height);
        };
        helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
            return fontStyle + " " + pixelSize + "px " + fontFamily;
        };
        helpers.longestText = function(ctx, font, arrayOfStrings, cache) {
            cache = cache || {};
            cache.data = cache.data || {};
            cache.garbageCollect = cache.garbageCollect || [];

            if (cache.font !== font) {
                cache.data = {};
                cache.garbageCollect = [];
                cache.font = font;
            }

            ctx.font = font;
            var longest = 0;
            helpers.each(arrayOfStrings, function(string) {
                // Undefined strings should not be measured
                if (string !== undefined && string !== null) {
                    var textWidth = cache.data[string];
                    if (!textWidth) {
                        textWidth = cache.data[string] = ctx.measureText(string).width;
                        cache.garbageCollect.push(string);
                    }

                    if (textWidth > longest) {
                        longest = textWidth;
                    }
                }
            });

            var gcLen = cache.garbageCollect.length / 2;
            if (gcLen > arrayOfStrings.length) {
                for (var i = 0; i < gcLen; i++) {
                    delete cache.data[cache.garbageCollect[i]];
                }
                cache.garbageCollect.splice(0, gcLen);
            }

            return longest;
        };
        helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        };
        helpers.color = function(c) {
            if (!color) {
                console.log('Color.js not found!');
                return c;
            }

            /* global CanvasGradient */
            if (c instanceof CanvasGradient) {
                return color(Chart.defaults.global.defaultColor);
            }

            return color(c);
        };
        helpers.addResizeListener = function(node, callback) {
            // Hide an iframe before the node
            var hiddenIframe = document.createElement('iframe');
            var hiddenIframeClass = 'chartjs-hidden-iframe';

            if (hiddenIframe.classlist) {
                // can use classlist
                hiddenIframe.classlist.add(hiddenIframeClass);
            } else {
                hiddenIframe.setAttribute('class', hiddenIframeClass);
            }

            // Set the style
            hiddenIframe.style.width = '100%';
            hiddenIframe.style.display = 'block';
            hiddenIframe.style.border = 0;
            hiddenIframe.style.height = 0;
            hiddenIframe.style.margin = 0;
            hiddenIframe.style.position = 'absolute';
            hiddenIframe.style.left = 0;
            hiddenIframe.style.right = 0;
            hiddenIframe.style.top = 0;
            hiddenIframe.style.bottom = 0;

            // Insert the iframe so that contentWindow is available
            node.insertBefore(hiddenIframe, node.firstChild);

            (hiddenIframe.contentWindow || hiddenIframe).onresize = function() {
                if (callback) {
                    callback();
                }
            };
        };
        helpers.removeResizeListener = function(node) {
            var hiddenIframe = node.querySelector('.chartjs-hidden-iframe');

            // Remove the resize detect iframe
            if (hiddenIframe) {
                hiddenIframe.parentNode.removeChild(hiddenIframe);
            }
        };
        helpers.isArray = function(obj) {
            if (!Array.isArray) {
                return Object.prototype.toString.call(obj) === '[object Array]';
            }
            return Array.isArray(obj);
        };
        helpers.pushAllIfDefined = function(element, array) {
            if (typeof element === "undefined") {
                return;
            }

            if (helpers.isArray(element)) {
                array.push.apply(array, element);
            } else {
                array.push(element);
            }
        };
        helpers.isDatasetVisible = function(dataset) {
            return !dataset.hidden;
        };
        helpers.callCallback = function(fn, args, _tArg) {
            if (fn && typeof fn.call === 'function') {
                fn.apply(_tArg, args);
            }
        };

    };

},{"chartjs-color":6}],26:[function(require,module,exports){
    "use strict";

    module.exports = function() {

        //Occupy the global variable of Chart, and create a simple base class
        var Chart = function(context, config) {
            this.config = config;

            // Support a jQuery'd canvas element
            if (context.length && context[0].getContext) {
                context = context[0];
            }

            // Support a canvas domnode
            if (context.getContext) {
                context = context.getContext("2d");
            }

            this.ctx = context;
            this.canvas = context.canvas;

            // Figure out what the size of the chart will be.
            // If the canvas has a specified width and height, we use those else
            // we look to see if the canvas node has a CSS width and height.
            // If there is still no height, fill the parent container
            this.width = context.canvas.width || parseInt(Chart.helpers.getStyle(context.canvas, 'width')) || Chart.helpers.getMaximumWidth(context.canvas);
            this.height = context.canvas.height || parseInt(Chart.helpers.getStyle(context.canvas, 'height')) || Chart.helpers.getMaximumHeight(context.canvas);

            this.aspectRatio = this.width / this.height;

            if (isNaN(this.aspectRatio) || isFinite(this.aspectRatio) === false) {
                // If the canvas has no size, try and figure out what the aspect ratio will be.
                // Some charts prefer square canvases (pie, radar, etc). If that is specified, use that
                // else use the canvas default ratio of 2
                this.aspectRatio = config.aspectRatio !== undefined ? config.aspectRatio : 2;
            }

            // Store the original style of the element so we can set it back
            this.originalCanvasStyleWidth = context.canvas.style.width;
            this.originalCanvasStyleHeight = context.canvas.style.height;

            // High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
            Chart.helpers.retinaScale(this);

            if (config) {
                this.controller = new Chart.Controller(this);
            }

            // Always bind this so that if the responsive state changes we still work
            var _this = this;
            Chart.helpers.addResizeListener(context.canvas.parentNode, function() {
                if (_this.controller && _this.controller.config.options.responsive) {
                    _this.controller.resize();
                }
            });

            return this.controller ? this.controller : this;

        };

        //Globally expose the defaults to allow for user updating/changing
        Chart.defaults = {
            global: {
                responsive: true,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: true,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: 'single',
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: 'rgba(0,0,0,0.1)',
                defaultFontColor: '#666',
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: 'normal',
                showLines: true,

                // Element defaults defined in element extensions
                elements: {},

                // Legend callback string
                legendCallback: function(chart) {
                    var text = [];
                    text.push('<ul class="' + chart.id + '-legend">');
                    for (var i = 0; i < chart.data.datasets.length; i++) {
                        text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                        if (chart.data.datasets[i].label) {
                            text.push(chart.data.datasets[i].label);
                        }
                        text.push('</li>');
                    }
                    text.push('</ul>');

                    return text.join("");
                }
            }
        };

        return Chart;

    };

},{}],27:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        // The layout service is very self explanatory.  It's responsible for the layout within a chart.
        // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
        // It is this service's responsibility of carrying out that layout.
        Chart.layoutService = {
            defaults: {},

            // Register a box to a chartInstance. A box is simply a reference to an object that requires layout. eg. Scales, Legend, Plugins.
            addBox: function(chartInstance, box) {
                if (!chartInstance.boxes) {
                    chartInstance.boxes = [];
                }
                chartInstance.boxes.push(box);
            },

            removeBox: function(chartInstance, box) {
                if (!chartInstance.boxes) {
                    return;
                }
                chartInstance.boxes.splice(chartInstance.boxes.indexOf(box), 1);
            },

            // The most important function
            update: function(chartInstance, width, height) {

                if (!chartInstance) {
                    return;
                }

                var xPadding = 0;
                var yPadding = 0;

                var leftBoxes = helpers.where(chartInstance.boxes, function(box) {
                    return box.options.position === "left";
                });
                var rightBoxes = helpers.where(chartInstance.boxes, function(box) {
                    return box.options.position === "right";
                });
                var topBoxes = helpers.where(chartInstance.boxes, function(box) {
                    return box.options.position === "top";
                });
                var bottomBoxes = helpers.where(chartInstance.boxes, function(box) {
                    return box.options.position === "bottom";
                });

                // Boxes that overlay the chartarea such as the radialLinear scale
                var chartAreaBoxes = helpers.where(chartInstance.boxes, function(box) {
                    return box.options.position === "chartArea";
                });

                function fullWidthSorter(a, b) {

                }

                // Ensure that full width boxes are at the very top / bottom
                topBoxes.sort(function(a, b) {
                    return (b.options.fullWidth ? 1 : 0) - (a.options.fullWidth ? 1 : 0);
                });
                bottomBoxes.sort(function(a, b) {
                    return (a.options.fullWidth ? 1 : 0) - (b.options.fullWidth ? 1 : 0);
                });

                // Essentially we now have any number of boxes on each of the 4 sides.
                // Our canvas looks like the following.
                // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
                // B1 is the bottom axis
                // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
                // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
                // an error will be thrown.
                //
                // |----------------------------------------------------|
                // |                  T1 (Full Width)                   |
                // |----------------------------------------------------|
                // |    |    |                 T2                  |    |
                // |    |----|-------------------------------------|----|
                // |    |    | C1 |                           | C2 |    |
                // |    |    |----|                           |----|    |
                // |    |    |                                     |    |
                // | L1 | L2 |           ChartArea (C0)            | R1 |
                // |    |    |                                     |    |
                // |    |    |----|                           |----|    |
                // |    |    | C3 |                           | C4 |    |
                // |    |----|-------------------------------------|----|
                // |    |    |                 B1                  |    |
                // |----------------------------------------------------|
                // |                  B2 (Full Width)                   |
                // |----------------------------------------------------|
                //
                // What we do to find the best sizing, we do the following
                // 1. Determine the minimum size of the chart area.
                // 2. Split the remaining width equally between each vertical axis
                // 3. Split the remaining height equally between each horizontal axis
                // 4. Give each layout the maximum size it can be. The layout will return it's minimum size
                // 5. Adjust the sizes of each axis based on it's minimum reported size.
                // 6. Refit each axis
                // 7. Position each axis in the final location
                // 8. Tell the chart the final location of the chart area
                // 9. Tell any axes that overlay the chart area the positions of the chart area

                // Step 1
                var chartWidth = width - (2 * xPadding);
                var chartHeight = height - (2 * yPadding);
                var chartAreaWidth = chartWidth / 2; // min 50%
                var chartAreaHeight = chartHeight / 2; // min 50%

                // Step 2
                var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

                // Step 3
                var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

                // Step 4
                var maxChartAreaWidth = chartWidth;
                var maxChartAreaHeight = chartHeight;
                var minBoxSizes = [];

                helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

                function getMinimumBoxSize(box) {
                    var minSize;
                    var isHorizontal = box.isHorizontal();

                    if (isHorizontal) {
                        minSize = box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
                        maxChartAreaHeight -= minSize.height;
                    } else {
                        minSize = box.update(verticalBoxWidth, chartAreaHeight);
                        maxChartAreaWidth -= minSize.width;
                    }

                    minBoxSizes.push({
                        horizontal: isHorizontal,
                        minSize: minSize,
                        box: box
                    });
                }

                // At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
                // be if the axes are drawn at their minimum sizes.

                // Steps 5 & 6
                var totalLeftBoxesWidth = xPadding;
                var totalRightBoxesWidth = xPadding;
                var totalTopBoxesHeight = yPadding;
                var totalBottomBoxesHeight = yPadding;

                // Update, and calculate the left and right margins for the horizontal boxes
                helpers.each(leftBoxes.concat(rightBoxes), fitBox);

                helpers.each(leftBoxes, function(box) {
                    totalLeftBoxesWidth += box.width;
                });

                helpers.each(rightBoxes, function(box) {
                    totalRightBoxesWidth += box.width;
                });

                // Set the Left and Right margins for the horizontal boxes
                helpers.each(topBoxes.concat(bottomBoxes), fitBox);

                // Function to fit a box
                function fitBox(box) {
                    var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBoxSize) {
                        return minBoxSize.box === box;
                    });

                    if (minBoxSize) {
                        if (box.isHorizontal()) {
                            var scaleMargin = {
                                left: totalLeftBoxesWidth,
                                right: totalRightBoxesWidth,
                                top: 0,
                                bottom: 0
                            };

                            // Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
                            // on the margin. Sometimes they need to increase in size slightly
                            box.update(box.options.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
                        } else {
                            box.update(minBoxSize.minSize.width, maxChartAreaHeight);
                        }
                    }
                }

                // Figure out how much margin is on the top and bottom of the vertical boxes
                helpers.each(topBoxes, function(box) {
                    totalTopBoxesHeight += box.height;
                });

                helpers.each(bottomBoxes, function(box) {
                    totalBottomBoxesHeight += box.height;
                });

                // Let the left layout know the final margin
                helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

                function finalFitVerticalBox(box) {
                    var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBoxSize) {
                        return minBoxSize.box === box;
                    });

                    var scaleMargin = {
                        left: 0,
                        right: 0,
                        top: totalTopBoxesHeight,
                        bottom: totalBottomBoxesHeight
                    };

                    if (minBoxSize) {
                        box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
                    }
                }

                // Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
                totalLeftBoxesWidth = xPadding;
                totalRightBoxesWidth = xPadding;
                totalTopBoxesHeight = yPadding;
                totalBottomBoxesHeight = yPadding;

                helpers.each(leftBoxes, function(box) {
                    totalLeftBoxesWidth += box.width;
                });

                helpers.each(rightBoxes, function(box) {
                    totalRightBoxesWidth += box.width;
                });

                helpers.each(topBoxes, function(box) {
                    totalTopBoxesHeight += box.height;
                });
                helpers.each(bottomBoxes, function(box) {
                    totalBottomBoxesHeight += box.height;
                });

                // Figure out if our chart area changed. This would occur if the dataset layout label rotation
                // changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
                // without calling `fit` again
                var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
                var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

                if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
                    helpers.each(leftBoxes, function(box) {
                        box.height = newMaxChartAreaHeight;
                    });

                    helpers.each(rightBoxes, function(box) {
                        box.height = newMaxChartAreaHeight;
                    });

                    helpers.each(topBoxes, function(box) {
                        box.width = newMaxChartAreaWidth;
                    });

                    helpers.each(bottomBoxes, function(box) {
                        box.width = newMaxChartAreaWidth;
                    });

                    maxChartAreaHeight = newMaxChartAreaHeight;
                    maxChartAreaWidth = newMaxChartAreaWidth;
                }

                // Step 7 - Position the boxes
                var left = xPadding;
                var top = yPadding;
                var right = 0;
                var bottom = 0;

                helpers.each(leftBoxes.concat(topBoxes), placeBox);

                // Account for chart width and height
                left += maxChartAreaWidth;
                top += maxChartAreaHeight;

                helpers.each(rightBoxes, placeBox);
                helpers.each(bottomBoxes, placeBox);

                function placeBox(box) {
                    if (box.isHorizontal()) {
                        box.left = box.options.fullWidth ? xPadding : totalLeftBoxesWidth;
                        box.right = box.options.fullWidth ? width - xPadding : totalLeftBoxesWidth + maxChartAreaWidth;
                        box.top = top;
                        box.bottom = top + box.height;

                        // Move to next point
                        top = box.bottom;

                    } else {

                        box.left = left;
                        box.right = left + box.width;
                        box.top = totalTopBoxesHeight;
                        box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

                        // Move to next point
                        left = box.right;
                    }
                }

                // Step 8
                chartInstance.chartArea = {
                    left: totalLeftBoxesWidth,
                    top: totalTopBoxesHeight,
                    right: totalLeftBoxesWidth + maxChartAreaWidth,
                    bottom: totalTopBoxesHeight + maxChartAreaHeight
                };

                // Step 9
                helpers.each(chartAreaBoxes, function(box) {
                    box.left = chartInstance.chartArea.left;
                    box.top = chartInstance.chartArea.top;
                    box.right = chartInstance.chartArea.right;
                    box.bottom = chartInstance.chartArea.bottom;

                    box.update(maxChartAreaWidth, maxChartAreaHeight);
                });
            }
        };
    };

},{}],28:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.legend = {

            display: true,
            position: 'top',
            fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)
            reverse: false,

            // a callback that will handle
            onClick: function(e, legendItem) {
                var dataset = this.chart.data.datasets[legendItem.datasetIndex];
                dataset.hidden = !dataset.hidden;

                // We hid a dataset ... rerender the chart
                this.chart.update();
            },

            labels: {
                boxWidth: 40,
                padding: 10,
                // Generates labels shown in the legend
                // Valid properties to return:
                // text : text to display
                // fillStyle : fill of coloured box
                // strokeStyle: stroke of coloured box
                // hidden : if this legend item refers to a hidden item
                // lineCap : cap style for line
                // lineDash
                // lineDashOffset :
                // lineJoin :
                // lineWidth :
                generateLabels: function(data) {
                    return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
                        return {
                            text: dataset.label,
                            fillStyle: dataset.backgroundColor,
                            hidden: dataset.hidden,
                            lineCap: dataset.borderCapStyle,
                            lineDash: dataset.borderDash,
                            lineDashOffset: dataset.borderDashOffset,
                            lineJoin: dataset.borderJoinStyle,
                            lineWidth: dataset.borderWidth,
                            strokeStyle: dataset.borderColor,

                            // Below is extra data used for toggling the datasets
                            datasetIndex: i
                        };
                    }, this) : [];
                }
            }
        };

        Chart.Legend = Chart.Element.extend({

            initialize: function(config) {
                helpers.extend(this, config);

                // Contains hit boxes for each dataset (in dataset order)
                this.legendHitBoxes = [];

                // Are we in doughnut mode which has a different data type
                this.doughnutMode = false;
            },

            // These methods are ordered by lifecyle. Utilities then follow.
            // Any function defined here is inherited by all legend types.
            // Any function can be extended by the legend type

            beforeUpdate: helpers.noop,
            update: function(maxWidth, maxHeight, margins) {

                // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
                this.beforeUpdate();

                // Absorb the master measurements
                this.maxWidth = maxWidth;
                this.maxHeight = maxHeight;
                this.margins = margins;

                // Dimensions
                this.beforeSetDimensions();
                this.setDimensions();
                this.afterSetDimensions();
                // Labels
                this.beforeBuildLabels();
                this.buildLabels();
                this.afterBuildLabels();

                // Fit
                this.beforeFit();
                this.fit();
                this.afterFit();
                //
                this.afterUpdate();

                return this.minSize;

            },
            afterUpdate: helpers.noop,

            //

            beforeSetDimensions: helpers.noop,
            setDimensions: function() {
                // Set the unconstrained dimension before label rotation
                if (this.isHorizontal()) {
                    // Reset position before calculating rotation
                    this.width = this.maxWidth;
                    this.left = 0;
                    this.right = this.width;
                } else {
                    this.height = this.maxHeight;

                    // Reset position before calculating rotation
                    this.top = 0;
                    this.bottom = this.height;
                }

                // Reset padding
                this.paddingLeft = 0;
                this.paddingTop = 0;
                this.paddingRight = 0;
                this.paddingBottom = 0;

                // Reset minSize
                this.minSize = {
                    width: 0,
                    height: 0
                };
            },
            afterSetDimensions: helpers.noop,

            //

            beforeBuildLabels: helpers.noop,
            buildLabels: function() {
                this.legendItems = this.options.labels.generateLabels.call(this, this.chart.data);
                if(this.options.reverse){
                    this.legendItems.reverse();
                }
            },
            afterBuildLabels: helpers.noop,

            //

            beforeFit: helpers.noop,
            fit: function() {

                var ctx = this.ctx;
                var fontSize = helpers.getValueOrDefault(this.options.labels.fontSize, Chart.defaults.global.defaultFontSize);
                var fontStyle = helpers.getValueOrDefault(this.options.labels.fontStyle, Chart.defaults.global.defaultFontStyle);
                var fontFamily = helpers.getValueOrDefault(this.options.labels.fontFamily, Chart.defaults.global.defaultFontFamily);
                var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

                // Reset hit boxes
                this.legendHitBoxes = [];

                // Width
                if (this.isHorizontal()) {
                    this.minSize.width = this.maxWidth; // fill all the width
                } else {
                    this.minSize.width = this.options.display ? 10 : 0;
                }

                // height
                if (this.isHorizontal()) {
                    this.minSize.height = this.options.display ? 10 : 0;
                } else {
                    this.minSize.height = this.maxHeight; // fill all the height
                }

                // Increase sizes here
                if (this.options.display) {
                    if (this.isHorizontal()) {
                        // Labels

                        // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
                        this.lineWidths = [0];
                        var totalHeight = this.legendItems.length ? fontSize + (this.options.labels.padding) : 0;

                        ctx.textAlign = "left";
                        ctx.textBaseline = 'top';
                        ctx.font = labelFont;

                        helpers.each(this.legendItems, function(legendItem, i) {
                            var width = this.options.labels.boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
                            if (this.lineWidths[this.lineWidths.length - 1] + width + this.options.labels.padding >= this.width) {
                                totalHeight += fontSize + (this.options.labels.padding);
                                this.lineWidths[this.lineWidths.length] = this.left;
                            }

                            // Store the hitbox width and height here. Final position will be updated in `draw`
                            this.legendHitBoxes[i] = {
                                left: 0,
                                top: 0,
                                width: width,
                                height: fontSize
                            };

                            this.lineWidths[this.lineWidths.length - 1] += width + this.options.labels.padding;
                        }, this);

                        this.minSize.height += totalHeight;

                    } else {
                        // TODO vertical
                    }
                }

                this.width = this.minSize.width;
                this.height = this.minSize.height;

            },
            afterFit: helpers.noop,

            // Shared Methods
            isHorizontal: function() {
                return this.options.position === "top" || this.options.position === "bottom";
            },

            // Actualy draw the legend on the canvas
            draw: function() {
                if (this.options.display) {
                    var ctx = this.ctx;
                    var cursor = {
                        x: this.left + ((this.width - this.lineWidths[0]) / 2),
                        y: this.top + this.options.labels.padding,
                        line: 0
                    };

                    var fontColor = helpers.getValueOrDefault(this.options.labels.fontColor, Chart.defaults.global.defaultFontColor);
                    var fontSize = helpers.getValueOrDefault(this.options.labels.fontSize, Chart.defaults.global.defaultFontSize);
                    var fontStyle = helpers.getValueOrDefault(this.options.labels.fontStyle, Chart.defaults.global.defaultFontStyle);
                    var fontFamily = helpers.getValueOrDefault(this.options.labels.fontFamily, Chart.defaults.global.defaultFontFamily);
                    var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Horizontal
                    if (this.isHorizontal()) {
                        // Labels
                        ctx.textAlign = "left";
                        ctx.textBaseline = 'top';
                        ctx.lineWidth = 0.5;
                        ctx.strokeStyle = fontColor; // for strikethrough effect
                        ctx.fillStyle = fontColor; // render in correct colour
                        ctx.font = labelFont;

                        helpers.each(this.legendItems, function(legendItem, i) {
                            var textWidth = ctx.measureText(legendItem.text).width;
                            var width = this.options.labels.boxWidth + (fontSize / 2) + textWidth;

                            if (cursor.x + width >= this.width) {
                                cursor.y += fontSize + (this.options.labels.padding);
                                cursor.line++;
                                cursor.x = this.left + ((this.width - this.lineWidths[cursor.line]) / 2);
                            }

                            // Set the ctx for the box
                            ctx.save();

                            var itemOrDefault = function(item, defaulVal) {
                                return item !== undefined ? item : defaulVal;
                            };

                            ctx.fillStyle = itemOrDefault(legendItem.fillStyle, Chart.defaults.global.defaultColor);
                            ctx.lineCap = itemOrDefault(legendItem.lineCap, Chart.defaults.global.elements.line.borderCapStyle);
                            ctx.lineDashOffset = itemOrDefault(legendItem.lineDashOffset, Chart.defaults.global.elements.line.borderDashOffset);
                            ctx.lineJoin = itemOrDefault(legendItem.lineJoin, Chart.defaults.global.elements.line.borderJoinStyle);
                            ctx.lineWidth = itemOrDefault(legendItem.lineWidth, Chart.defaults.global.elements.line.borderWidth);
                            ctx.strokeStyle = itemOrDefault(legendItem.strokeStyle, Chart.defaults.global.defaultColor);

                            if (ctx.setLineDash) {
                                // IE 9 and 10 do not support line dash
                                ctx.setLineDash(itemOrDefault(legendItem.lineDash, Chart.defaults.global.elements.line.borderDash));
                            }

                            // Draw the box
                            ctx.strokeRect(cursor.x, cursor.y, this.options.labels.boxWidth, fontSize);
                            ctx.fillRect(cursor.x, cursor.y, this.options.labels.boxWidth, fontSize);

                            ctx.restore();

                            this.legendHitBoxes[i].left = cursor.x;
                            this.legendHitBoxes[i].top = cursor.y;

                            // Fill the actual label
                            ctx.fillText(legendItem.text, this.options.labels.boxWidth + (fontSize / 2) + cursor.x, cursor.y);

                            if (legendItem.hidden) {
                                // Strikethrough the text if hidden
                                ctx.beginPath();
                                ctx.lineWidth = 2;
                                ctx.moveTo(this.options.labels.boxWidth + (fontSize / 2) + cursor.x, cursor.y + (fontSize / 2));
                                ctx.lineTo(this.options.labels.boxWidth + (fontSize / 2) + cursor.x + textWidth, cursor.y + (fontSize / 2));
                                ctx.stroke();
                            }

                            cursor.x += width + (this.options.labels.padding);
                        }, this);
                    } else {

                    }
                }
            },

            // Handle an event
            handleEvent: function(e) {
                var position = helpers.getRelativePosition(e, this.chart.chart);

                if (position.x >= this.left && position.x <= this.right && position.y >= this.top && position.y <= this.bottom) {
                    // See if we are touching one of the dataset boxes
                    for (var i = 0; i < this.legendHitBoxes.length; ++i) {
                        var hitBox = this.legendHitBoxes[i];

                        if (position.x >= hitBox.left && position.x <= hitBox.left + hitBox.width && position.y >= hitBox.top && position.y <= hitBox.top + hitBox.height) {
                            // Touching an element
                            if (this.options.onClick) {
                                this.options.onClick.call(this, e, this.legendItems[i]);
                            }
                            break;
                        }
                    }
                }
            }
        });

    };

},{}],29:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.scale = {
            display: true,

            // grid line settings
            gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1,
                drawOnChartArea: true,
                drawTicks: true,
                zeroLineWidth: 1,
                zeroLineColor: "rgba(0,0,0,0.25)",
                offsetGridLines: false
            },

            // scale label
            scaleLabel: {
                // actual label
                labelString: '',

                // display property
                display: false
            },

            // label settings
            ticks: {
                beginAtZero: false,
                maxRotation: 50,
                mirror: false,
                padding: 10,
                reverse: false,
                display: true,
                autoSkip: true,
                autoSkipPadding: 0,
                callback: function(value) {
                    return '' + value;
                }
            }
        };

        Chart.Scale = Chart.Element.extend({

            // These methods are ordered by lifecyle. Utilities then follow.
            // Any function defined here is inherited by all scale types.
            // Any function can be extended by the scale type

            beforeUpdate: function() {
                helpers.callCallback(this.options.beforeUpdate, [this]);
            },
            update: function(maxWidth, maxHeight, margins) {

                // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
                this.beforeUpdate();

                // Absorb the master measurements
                this.maxWidth = maxWidth;
                this.maxHeight = maxHeight;
                this.margins = helpers.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, margins);

                // Dimensions
                this.beforeSetDimensions();
                this.setDimensions();
                this.afterSetDimensions();

                // Data min/max
                this.beforeDataLimits();
                this.determineDataLimits();
                this.afterDataLimits();

                // Ticks
                this.beforeBuildTicks();
                this.buildTicks();
                this.afterBuildTicks();

                this.beforeTickToLabelConversion();
                this.convertTicksToLabels();
                this.afterTickToLabelConversion();

                // Tick Rotation
                this.beforeCalculateTickRotation();
                this.calculateTickRotation();
                this.afterCalculateTickRotation();
                // Fit
                this.beforeFit();
                this.fit();
                this.afterFit();
                //
                this.afterUpdate();

                return this.minSize;

            },
            afterUpdate: function() {
                helpers.callCallback(this.options.afterUpdate, [this]);
            },

            //

            beforeSetDimensions: function() {
                helpers.callCallback(this.options.beforeSetDimensions, [this]);
            },
            setDimensions: function() {
                // Set the unconstrained dimension before label rotation
                if (this.isHorizontal()) {
                    // Reset position before calculating rotation
                    this.width = this.maxWidth;
                    this.left = 0;
                    this.right = this.width;
                } else {
                    this.height = this.maxHeight;

                    // Reset position before calculating rotation
                    this.top = 0;
                    this.bottom = this.height;
                }

                // Reset padding
                this.paddingLeft = 0;
                this.paddingTop = 0;
                this.paddingRight = 0;
                this.paddingBottom = 0;
            },
            afterSetDimensions: function() {
                helpers.callCallback(this.options.afterSetDimensions, [this]);
            },

            // Data limits
            beforeDataLimits: function() {
                helpers.callCallback(this.options.beforeDataLimits, [this]);
            },
            determineDataLimits: helpers.noop,
            afterDataLimits: function() {
                helpers.callCallback(this.options.afterDataLimits, [this]);
            },

            //
            beforeBuildTicks: function() {
                helpers.callCallback(this.options.beforeBuildTicks, [this]);
            },
            buildTicks: helpers.noop,
            afterBuildTicks: function() {
                helpers.callCallback(this.options.afterBuildTicks, [this]);
            },

            beforeTickToLabelConversion: function() {
                helpers.callCallback(this.options.beforeTickToLabelConversion, [this]);
            },
            convertTicksToLabels: function() {
                // Convert ticks to strings
                this.ticks = this.ticks.map(function(numericalTick, index, ticks) {
                        if (this.options.ticks.userCallback) {
                            return this.options.ticks.userCallback(numericalTick, index, ticks);
                        }
                        return this.options.ticks.callback(numericalTick, index, ticks);
                    },
                    this);
            },
            afterTickToLabelConversion: function() {
                helpers.callCallback(this.options.afterTickToLabelConversion, [this]);
            },

            //

            beforeCalculateTickRotation: function() {
                helpers.callCallback(this.options.beforeCalculateTickRotation, [this]);
            },
            calculateTickRotation: function() {
                //Get the width of each grid by calculating the difference
                //between x offsets between 0 and 1.
                var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
                var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
                var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
                this.ctx.font = tickLabelFont;

                var firstWidth = this.ctx.measureText(this.ticks[0]).width;
                var lastWidth = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width;
                var firstRotated;

                this.labelRotation = 0;
                this.paddingRight = 0;
                this.paddingLeft = 0;

                if (this.options.display) {
                    if (this.isHorizontal()) {
                        this.paddingRight = lastWidth / 2 + 3;
                        this.paddingLeft = firstWidth / 2 + 3;

                        if (!this.longestTextCache) {
                            this.longestTextCache = {};
                        }
                        var originalLabelWidth = helpers.longestText(this.ctx, tickLabelFont, this.ticks, this.longestTextCache);
                        var labelWidth = originalLabelWidth;
                        var cosRotation;
                        var sinRotation;

                        // Allow 3 pixels x2 padding either side for label readability
                        // only the index matters for a dataset scale, but we want a consistent interface between scales
                        var tickWidth = this.getPixelForTick(1) - this.getPixelForTick(0) - 6;

                        //Max label rotation can be set or default to 90 - also act as a loop counter
                        while (labelWidth > tickWidth && this.labelRotation < this.options.ticks.maxRotation) {
                            cosRotation = Math.cos(helpers.toRadians(this.labelRotation));
                            sinRotation = Math.sin(helpers.toRadians(this.labelRotation));

                            firstRotated = cosRotation * firstWidth;

                            // We're right aligning the text now.
                            if (firstRotated + tickFontSize / 2 > this.yLabelWidth) {
                                this.paddingLeft = firstRotated + tickFontSize / 2;
                            }

                            this.paddingRight = tickFontSize / 2;

                            if (sinRotation * originalLabelWidth > this.maxHeight) {
                                // go back one step
                                this.labelRotation--;
                                break;
                            }

                            this.labelRotation++;
                            labelWidth = cosRotation * originalLabelWidth;
                        }
                    }
                }

                if (this.margins) {
                    this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0);
                    this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0);
                }
            },
            afterCalculateTickRotation: function() {
                helpers.callCallback(this.options.afterCalculateTickRotation, [this]);
            },

            //

            beforeFit: function() {
                helpers.callCallback(this.options.beforeFit, [this]);
            },
            fit: function() {

                this.minSize = {
                    width: 0,
                    height: 0
                };

                var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
                var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
                var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

                var scaleLabelFontSize = helpers.getValueOrDefault(this.options.scaleLabel.fontSize, Chart.defaults.global.defaultFontSize);
                var scaleLabelFontStyle = helpers.getValueOrDefault(this.options.scaleLabel.fontStyle, Chart.defaults.global.defaultFontStyle);
                var scaleLabelFontFamily = helpers.getValueOrDefault(this.options.scaleLabel.fontFamily, Chart.defaults.global.defaultFontFamily);
                var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

                // Width
                if (this.isHorizontal()) {
                    // subtract the margins to line up with the chartArea if we are a full width scale
                    this.minSize.width = this.isFullWidth() ? this.maxWidth - this.margins.left - this.margins.right : this.maxWidth;
                } else {
                    this.minSize.width = this.options.gridLines.display && this.options.display ? 10 : 0;
                }

                // height
                if (this.isHorizontal()) {
                    this.minSize.height = this.options.gridLines.display && this.options.display ? 10 : 0;
                } else {
                    this.minSize.height = this.maxHeight; // fill all the height
                }

                // Are we showing a title for the scale?
                if (this.options.scaleLabel.display) {
                    if (this.isHorizontal()) {
                        this.minSize.height += (scaleLabelFontSize * 1.5);
                    } else {
                        this.minSize.width += (scaleLabelFontSize * 1.5);
                    }
                }

                if (this.options.ticks.display && this.options.display) {
                    // Don't bother fitting the ticks if we are not showing them
                    if (!this.longestTextCache) {
                        this.longestTextCache = {};
                    }

                    var largestTextWidth = helpers.longestText(this.ctx, tickLabelFont, this.ticks, this.longestTextCache);

                    if (this.isHorizontal()) {
                        // A horizontal axis is more constrained by the height.
                        this.longestLabelWidth = largestTextWidth;

                        // TODO - improve this calculation
                        var labelHeight = (Math.sin(helpers.toRadians(this.labelRotation)) * this.longestLabelWidth) + 1.5 * tickFontSize;

                        this.minSize.height = Math.min(this.maxHeight, this.minSize.height + labelHeight);
                        this.ctx.font = tickLabelFont;

                        var firstLabelWidth = this.ctx.measureText(this.ticks[0]).width;
                        var lastLabelWidth = this.ctx.measureText(this.ticks[this.ticks.length - 1]).width;

                        // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned which means that the right padding is dominated
                        // by the font height
                        var cosRotation = Math.cos(helpers.toRadians(this.labelRotation));
                        var sinRotation = Math.sin(helpers.toRadians(this.labelRotation));
                        this.paddingLeft = this.labelRotation !== 0 ? (cosRotation * firstLabelWidth) + 3 : firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
                        this.paddingRight = this.labelRotation !== 0 ? (sinRotation * (tickFontSize / 2)) + 3 : lastLabelWidth / 2 + 3; // when rotated
                    } else {
                        // A vertical axis is more constrained by the width. Labels are the dominant factor here, so get that length first
                        var maxLabelWidth = this.maxWidth - this.minSize.width;

                        // Account for padding
                        if (!this.options.ticks.mirror) {
                            largestTextWidth += this.options.ticks.padding;
                        }

                        if (largestTextWidth < maxLabelWidth) {
                            // We don't need all the room
                            this.minSize.width += largestTextWidth;
                        } else {
                            // Expand to max size
                            this.minSize.width = this.maxWidth;
                        }

                        this.paddingTop = tickFontSize / 2;
                        this.paddingBottom = tickFontSize / 2;
                    }
                }

                if (this.margins) {
                    this.paddingLeft = Math.max(this.paddingLeft - this.margins.left, 0);
                    this.paddingTop = Math.max(this.paddingTop - this.margins.top, 0);
                    this.paddingRight = Math.max(this.paddingRight - this.margins.right, 0);
                    this.paddingBottom = Math.max(this.paddingBottom - this.margins.bottom, 0);
                }

                this.width = this.minSize.width;
                this.height = this.minSize.height;

            },
            afterFit: function() {
                helpers.callCallback(this.options.afterFit, [this]);
            },

            // Shared Methods
            isHorizontal: function() {
                return this.options.position === "top" || this.options.position === "bottom";
            },
            isFullWidth: function() {
                return (this.options.fullWidth);
            },

            // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
            getRightValue: function getRightValue(rawValue) {
                // Null and undefined values first
                if (rawValue === null || typeof(rawValue) === 'undefined') {
                    return NaN;
                }
                // isNaN(object) returns true, so make sure NaN is checking for a number
                if (typeof(rawValue) === 'number' && isNaN(rawValue)) {
                    return NaN;
                }
                // If it is in fact an object, dive in one more level
                if (typeof(rawValue) === "object") {
                    if (rawValue instanceof Date) {
                        return rawValue;
                    } else {
                        return getRightValue(this.isHorizontal() ? rawValue.x : rawValue.y);
                    }
                }

                // Value is good, return it
                return rawValue;
            },

            // Used to get the value to display in the tooltip for the data at the given index
            // function getLabelForIndex(index, datasetIndex)
            getLabelForIndex: helpers.noop,

            // Used to get data value locations.  Value can either be an index or a numerical value
            getPixelForValue: helpers.noop,

            // Used for tick location, should
            getPixelForTick: function(index, includeOffset) {
                if (this.isHorizontal()) {
                    var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
                    var tickWidth = innerWidth / Math.max((this.ticks.length - ((this.options.gridLines.offsetGridLines) ? 0 : 1)), 1);
                    var pixel = (tickWidth * index) + this.paddingLeft;

                    if (includeOffset) {
                        pixel += tickWidth / 2;
                    }

                    var finalVal = this.left + Math.round(pixel);
                    finalVal += this.isFullWidth() ? this.margins.left : 0;
                    return finalVal;
                } else {
                    var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
                    return this.top + (index * (innerHeight / (this.ticks.length - 1)));
                }
            },

            // Utility for getting the pixel location of a percentage of scale
            getPixelForDecimal: function(decimal /*, includeOffset*/ ) {
                if (this.isHorizontal()) {
                    var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
                    var valueOffset = (innerWidth * decimal) + this.paddingLeft;

                    var finalVal = this.left + Math.round(valueOffset);
                    finalVal += this.isFullWidth() ? this.margins.left : 0;
                    return finalVal;
                } else {
                    return this.top + (decimal * this.height);
                }
            },

            // Actualy draw the scale on the canvas
            // @param {rectangle} chartArea : the area of the chart to draw full grid lines on
            draw: function(chartArea) {
                if (this.options.display) {

                    var setContextLineSettings;
                    var isRotated = this.labelRotation !== 0;
                    var skipRatio;
                    var scaleLabelX;
                    var scaleLabelY;
                    var useAutoskipper = this.options.ticks.autoSkip;


                    // figure out the maximum number of gridlines to show
                    var maxTicks;

                    if (this.options.ticks.maxTicksLimit) {
                        maxTicks = this.options.ticks.maxTicksLimit;
                    }

                    var tickFontColor = helpers.getValueOrDefault(this.options.ticks.fontColor, Chart.defaults.global.defaultFontColor);
                    var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                    var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
                    var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
                    var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

                    var scaleLabelFontColor = helpers.getValueOrDefault(this.options.scaleLabel.fontColor, Chart.defaults.global.defaultFontColor);
                    var scaleLabelFontSize = helpers.getValueOrDefault(this.options.scaleLabel.fontSize, Chart.defaults.global.defaultFontSize);
                    var scaleLabelFontStyle = helpers.getValueOrDefault(this.options.scaleLabel.fontStyle, Chart.defaults.global.defaultFontStyle);
                    var scaleLabelFontFamily = helpers.getValueOrDefault(this.options.scaleLabel.fontFamily, Chart.defaults.global.defaultFontFamily);
                    var scaleLabelFont = helpers.fontString(scaleLabelFontSize, scaleLabelFontStyle, scaleLabelFontFamily);

                    var cosRotation = Math.cos(helpers.toRadians(this.labelRotation));
                    var sinRotation = Math.sin(helpers.toRadians(this.labelRotation));
                    var longestRotatedLabel = this.longestLabelWidth * cosRotation;
                    var rotatedLabelHeight = tickFontSize * sinRotation;

                    // Make sure we draw text in the correct color and font
                    this.ctx.fillStyle = tickFontColor;

                    if (this.isHorizontal()) {
                        setContextLineSettings = true;
                        var yTickStart = this.options.position === "bottom" ? this.top : this.bottom - 10;
                        var yTickEnd = this.options.position === "bottom" ? this.top + 10 : this.bottom;
                        skipRatio = false;

                        if (((longestRotatedLabel / 2) + this.options.ticks.autoSkipPadding) * this.ticks.length > (this.width - (this.paddingLeft + this.paddingRight))) {
                            skipRatio = 1 + Math.floor((((longestRotatedLabel / 2) + this.options.ticks.autoSkipPadding) * this.ticks.length) / (this.width - (this.paddingLeft + this.paddingRight)));
                        }

                        // if they defined a max number of ticks,
                        // increase skipRatio until that number is met
                        if (maxTicks && this.ticks.length > maxTicks) {
                            while (!skipRatio || this.ticks.length / (skipRatio || 1) > maxTicks) {
                                if (!skipRatio) {
                                    skipRatio = 1;
                                }
                                skipRatio += 1;
                            }
                        }

                        if (!useAutoskipper) {
                            skipRatio = false;
                        }

                        helpers.each(this.ticks, function(label, index) {
                            // Blank ticks
                            var isLastTick = this.ticks.length === index + 1;

                            // Since we always show the last tick,we need may need to hide the last shown one before
                            var shouldSkip = (skipRatio > 1 && index % skipRatio > 0) || (index % skipRatio === 0 && index + skipRatio > this.ticks.length);
                            if (shouldSkip && !isLastTick || (label === undefined || label === null)) {
                                return;
                            }
                            var xLineValue = this.getPixelForTick(index); // xvalues for grid lines
                            var xLabelValue = this.getPixelForTick(index, this.options.gridLines.offsetGridLines); // x values for ticks (need to consider offsetLabel option)

                            if (this.options.gridLines.display) {
                                if (index === (typeof this.zeroLineIndex !== 'undefined' ? this.zeroLineIndex : 0)) {
                                    // Draw the first index specially
                                    this.ctx.lineWidth = this.options.gridLines.zeroLineWidth;
                                    this.ctx.strokeStyle = this.options.gridLines.zeroLineColor;
                                    setContextLineSettings = true; // reset next time
                                } else if (setContextLineSettings) {
                                    this.ctx.lineWidth = this.options.gridLines.lineWidth;
                                    this.ctx.strokeStyle = this.options.gridLines.color;
                                    setContextLineSettings = false;
                                }

                                xLineValue += helpers.aliasPixel(this.ctx.lineWidth);

                                // Draw the label area
                                this.ctx.beginPath();

                                if (this.options.gridLines.drawTicks) {
                                    this.ctx.moveTo(xLineValue, yTickStart);
                                    this.ctx.lineTo(xLineValue, yTickEnd);
                                }

                                // Draw the chart area
                                if (this.options.gridLines.drawOnChartArea) {
                                    this.ctx.moveTo(xLineValue, chartArea.top);
                                    this.ctx.lineTo(xLineValue, chartArea.bottom);
                                }

                                // Need to stroke in the loop because we are potentially changing line widths & colours
                                this.ctx.stroke();
                            }

                            if (this.options.ticks.display) {
                                this.ctx.save();
                                this.ctx.translate(xLabelValue, (isRotated) ? this.top + 12 : this.options.position === "top" ? this.bottom - 10 : this.top + 10);
                                this.ctx.rotate(helpers.toRadians(this.labelRotation) * -1);
                                this.ctx.font = tickLabelFont;
                                this.ctx.textAlign = (isRotated) ? "right" : "center";
                                this.ctx.textBaseline = (isRotated) ? "middle" : this.options.position === "top" ? "bottom" : "top";
                                this.ctx.fillText(label, 0, 0);
                                this.ctx.restore();
                            }
                        }, this);

                        if (this.options.scaleLabel.display) {
                            // Draw the scale label
                            this.ctx.textAlign = "center";
                            this.ctx.textBaseline = 'middle';
                            this.ctx.fillStyle = scaleLabelFontColor; // render in correct colour
                            this.ctx.font = scaleLabelFont;

                            scaleLabelX = this.left + ((this.right - this.left) / 2); // midpoint of the width
                            scaleLabelY = this.options.position === 'bottom' ? this.bottom - (scaleLabelFontSize / 2) : this.top + (scaleLabelFontSize / 2);

                            this.ctx.fillText(this.options.scaleLabel.labelString, scaleLabelX, scaleLabelY);
                        }

                    } else {
                        setContextLineSettings = true;
                        var xTickStart = this.options.position === "right" ? this.left : this.right - 5;
                        var xTickEnd = this.options.position === "right" ? this.left + 5 : this.right;

                        helpers.each(this.ticks, function(label, index) {
                            // If the callback returned a null or undefined value, do not draw this line
                            if (label === undefined || label === null) {
                                return;
                            }

                            var yLineValue = this.getPixelForTick(index); // xvalues for grid lines

                            if (this.options.gridLines.display) {
                                if (index === (typeof this.zeroLineIndex !== 'undefined' ? this.zeroLineIndex : 0)) {
                                    // Draw the first index specially
                                    this.ctx.lineWidth = this.options.gridLines.zeroLineWidth;
                                    this.ctx.strokeStyle = this.options.gridLines.zeroLineColor;
                                    setContextLineSettings = true; // reset next time
                                } else if (setContextLineSettings) {
                                    this.ctx.lineWidth = this.options.gridLines.lineWidth;
                                    this.ctx.strokeStyle = this.options.gridLines.color;
                                    setContextLineSettings = false;
                                }

                                yLineValue += helpers.aliasPixel(this.ctx.lineWidth);

                                // Draw the label area
                                this.ctx.beginPath();

                                if (this.options.gridLines.drawTicks) {
                                    this.ctx.moveTo(xTickStart, yLineValue);
                                    this.ctx.lineTo(xTickEnd, yLineValue);
                                }

                                // Draw the chart area
                                if (this.options.gridLines.drawOnChartArea) {
                                    this.ctx.moveTo(chartArea.left, yLineValue);
                                    this.ctx.lineTo(chartArea.right, yLineValue);
                                }

                                // Need to stroke in the loop because we are potentially changing line widths & colours
                                this.ctx.stroke();
                            }

                            if (this.options.ticks.display) {
                                var xLabelValue;
                                var yLabelValue = this.getPixelForTick(index, this.options.gridLines.offsetGridLines); // x values for ticks (need to consider offsetLabel option)

                                this.ctx.save();

                                if (this.options.position === "left") {
                                    if (this.options.ticks.mirror) {
                                        xLabelValue = this.right + this.options.ticks.padding;
                                        this.ctx.textAlign = "left";
                                    } else {
                                        xLabelValue = this.right - this.options.ticks.padding;
                                        this.ctx.textAlign = "right";
                                    }
                                } else {
                                    // right side
                                    if (this.options.ticks.mirror) {
                                        xLabelValue = this.left - this.options.ticks.padding;
                                        this.ctx.textAlign = "right";
                                    } else {
                                        xLabelValue = this.left + this.options.ticks.padding;
                                        this.ctx.textAlign = "left";
                                    }
                                }

                                this.ctx.translate(xLabelValue, yLabelValue);
                                this.ctx.rotate(helpers.toRadians(this.labelRotation) * -1);
                                this.ctx.font = tickLabelFont;
                                this.ctx.textBaseline = "middle";
                                this.ctx.fillText(label, 0, 0);
                                this.ctx.restore();
                            }
                        }, this);

                        if (this.options.scaleLabel.display) {
                            // Draw the scale label
                            scaleLabelX = this.options.position === 'left' ? this.left + (scaleLabelFontSize / 2) : this.right - (scaleLabelFontSize / 2);
                            scaleLabelY = this.top + ((this.bottom - this.top) / 2);
                            var rotation = this.options.position === 'left' ? -0.5 * Math.PI : 0.5 * Math.PI;

                            this.ctx.save();
                            this.ctx.translate(scaleLabelX, scaleLabelY);
                            this.ctx.rotate(rotation);
                            this.ctx.textAlign = "center";
                            this.ctx.fillStyle =scaleLabelFontColor; // render in correct colour
                            this.ctx.font = scaleLabelFont;
                            this.ctx.textBaseline = 'middle';
                            this.ctx.fillText(this.options.scaleLabel.labelString, 0, 0);
                            this.ctx.restore();
                        }
                    }

                    // Draw the line at the edge of the axis
                    this.ctx.lineWidth = this.options.gridLines.lineWidth;
                    this.ctx.strokeStyle = this.options.gridLines.color;
                    var x1 = this.left,
                        x2 = this.right,
                        y1 = this.top,
                        y2 = this.bottom;

                    if (this.isHorizontal()) {
                        y1 = y2 = this.options.position === 'top' ? this.bottom : this.top;
                        y1 += helpers.aliasPixel(this.ctx.lineWidth);
                        y2 += helpers.aliasPixel(this.ctx.lineWidth);
                    } else {
                        x1 = x2 = this.options.position === 'left' ? this.right : this.left;
                        x1 += helpers.aliasPixel(this.ctx.lineWidth);
                        x2 += helpers.aliasPixel(this.ctx.lineWidth);
                    }

                    this.ctx.beginPath();
                    this.ctx.moveTo(x1, y1);
                    this.ctx.lineTo(x2, y2);
                    this.ctx.stroke();
                }
            }
        });
    };

},{}],30:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.scaleService = {
            // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
            // use the new chart options to grab the correct scale
            constructors: {},
            // Use a registration function so that we can move to an ES6 map when we no longer need to support
            // old browsers

            // Scale config defaults
            defaults: {},
            registerScaleType: function(type, scaleConstructor, defaults) {
                this.constructors[type] = scaleConstructor;
                this.defaults[type] = helpers.clone(defaults);
            },
            getScaleConstructor: function(type) {
                return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
            },
            getScaleDefaults: function(type) {
                // Return the scale defaults merged with the global settings so that we always use the latest ones
                return this.defaults.hasOwnProperty(type) ? helpers.scaleMerge(Chart.defaults.scale, this.defaults[type]) : {};
            },
            addScalesToLayout: function(chartInstance) {
                // Adds each scale to the chart.boxes array to be sized accordingly
                helpers.each(chartInstance.scales, function(scale) {
                    Chart.layoutService.addBox(chartInstance, scale);
                });
            }
        };
    };
},{}],31:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.title = {
            display: false,
            position: 'top',
            fullWidth: true, // marks that this box should take the full width of the canvas (pushing down other boxes)

            fontStyle: 'bold',
            padding: 10,

            // actual title
            text: ''
        };

        Chart.Title = Chart.Element.extend({

            initialize: function(config) {
                helpers.extend(this, config);
                this.options = helpers.configMerge(Chart.defaults.global.title, config.options);

                // Contains hit boxes for each dataset (in dataset order)
                this.legendHitBoxes = [];
            },

            // These methods are ordered by lifecyle. Utilities then follow.

            beforeUpdate: helpers.noop,
            update: function(maxWidth, maxHeight, margins) {

                // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
                this.beforeUpdate();

                // Absorb the master measurements
                this.maxWidth = maxWidth;
                this.maxHeight = maxHeight;
                this.margins = margins;

                // Dimensions
                this.beforeSetDimensions();
                this.setDimensions();
                this.afterSetDimensions();
                // Labels
                this.beforeBuildLabels();
                this.buildLabels();
                this.afterBuildLabels();

                // Fit
                this.beforeFit();
                this.fit();
                this.afterFit();
                //
                this.afterUpdate();

                return this.minSize;

            },
            afterUpdate: helpers.noop,

            //

            beforeSetDimensions: helpers.noop,
            setDimensions: function() {
                // Set the unconstrained dimension before label rotation
                if (this.isHorizontal()) {
                    // Reset position before calculating rotation
                    this.width = this.maxWidth;
                    this.left = 0;
                    this.right = this.width;
                } else {
                    this.height = this.maxHeight;

                    // Reset position before calculating rotation
                    this.top = 0;
                    this.bottom = this.height;
                }

                // Reset padding
                this.paddingLeft = 0;
                this.paddingTop = 0;
                this.paddingRight = 0;
                this.paddingBottom = 0;

                // Reset minSize
                this.minSize = {
                    width: 0,
                    height: 0
                };
            },
            afterSetDimensions: helpers.noop,

            //

            beforeBuildLabels: helpers.noop,
            buildLabels: helpers.noop,
            afterBuildLabels: helpers.noop,

            //

            beforeFit: helpers.noop,
            fit: function() {

                var ctx = this.ctx;
                var fontSize = helpers.getValueOrDefault(this.options.fontSize, Chart.defaults.global.defaultFontSize);
                var fontStyle = helpers.getValueOrDefault(this.options.fontStyle, Chart.defaults.global.defaultFontStyle);
                var fontFamily = helpers.getValueOrDefault(this.options.fontFamily, Chart.defaults.global.defaultFontFamily);
                var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);

                // Width
                if (this.isHorizontal()) {
                    this.minSize.width = this.maxWidth; // fill all the width
                } else {
                    this.minSize.width = 0;
                }

                // height
                if (this.isHorizontal()) {
                    this.minSize.height = 0;
                } else {
                    this.minSize.height = this.maxHeight; // fill all the height
                }

                // Increase sizes here
                if (this.isHorizontal()) {

                    // Title
                    if (this.options.display) {
                        this.minSize.height += fontSize + (this.options.padding * 2);
                    }
                } else {
                    if (this.options.display) {
                        this.minSize.width += fontSize + (this.options.padding * 2);
                    }
                }

                this.width = this.minSize.width;
                this.height = this.minSize.height;

            },
            afterFit: helpers.noop,

            // Shared Methods
            isHorizontal: function() {
                return this.options.position === "top" || this.options.position === "bottom";
            },

            // Actualy draw the title block on the canvas
            draw: function() {
                if (this.options.display) {
                    var ctx = this.ctx;
                    var titleX, titleY;

                    var fontColor = helpers.getValueOrDefault(this.options.fontColor, Chart.defaults.global.defaultFontColor);
                    var fontSize = helpers.getValueOrDefault(this.options.fontSize, Chart.defaults.global.defaultFontSize);
                    var fontStyle = helpers.getValueOrDefault(this.options.fontStyle, Chart.defaults.global.defaultFontStyle);
                    var fontFamily = helpers.getValueOrDefault(this.options.fontFamily, Chart.defaults.global.defaultFontFamily);
                    var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);

                    ctx.fillStyle = fontColor; // render in correct colour
                    ctx.font = titleFont;

                    // Horizontal
                    if (this.isHorizontal()) {
                        // Title
                        ctx.textAlign = "center";
                        ctx.textBaseline = 'middle';

                        titleX = this.left + ((this.right - this.left) / 2); // midpoint of the width
                        titleY = this.top + ((this.bottom - this.top) / 2); // midpoint of the height

                        ctx.fillText(this.options.text, titleX, titleY);
                    } else {

                        // Title
                        titleX = this.options.position === 'left' ? this.left + (fontSize / 2) : this.right - (fontSize / 2);
                        titleY = this.top + ((this.bottom - this.top) / 2);
                        var rotation = this.options.position === 'left' ? -0.5 * Math.PI : 0.5 * Math.PI;

                        ctx.save();
                        ctx.translate(titleX, titleY);
                        ctx.rotate(rotation);
                        ctx.textAlign = "center";
                        ctx.textBaseline = 'middle';
                        ctx.fillText(this.options.text, 0, 0);
                        ctx.restore();
                    }
                }
            }
        });
    };
},{}],32:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.tooltips = {
            enabled: true,
            custom: null,
            mode: 'single',
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            yAlign : 'center',
            xAlign : 'center',
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: '#fff',
            callbacks: {
                // Args are: (tooltipItems, data)
                beforeTitle: helpers.noop,
                title: function(tooltipItems, data) {
                    // Pick first xLabel for now
                    var title = '';

                    if (tooltipItems.length > 0) {
                        if (tooltipItems[0].xLabel) {
                            title = tooltipItems[0].xLabel;
                        } else if (data.labels.length > 0 && tooltipItems[0].index < data.labels.length) {
                            title = data.labels[tooltipItems[0].index];
                        }
                    }

                    return title;
                },
                afterTitle: helpers.noop,

                // Args are: (tooltipItems, data)
                beforeBody: helpers.noop,

                // Args are: (tooltipItem, data)
                beforeLabel: helpers.noop,
                label: function(tooltipItem, data) {
                    var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel;
                },
                afterLabel: helpers.noop,

                // Args are: (tooltipItems, data)
                afterBody: helpers.noop,

                // Args are: (tooltipItems, data)
                beforeFooter: helpers.noop,
                footer: helpers.noop,
                afterFooter: helpers.noop
            }
        };

        // Helper to push or concat based on if the 2nd parameter is an array or not
        function pushOrConcat(base, toPush) {
            if (toPush) {
                if (helpers.isArray(toPush)) {
                    base = base.concat(toPush);
                } else {
                    base.push(toPush);
                }
            }

            return base;
        }

        Chart.Tooltip = Chart.Element.extend({
            initialize: function() {
                var options = this._options;
                helpers.extend(this, {
                    _model: {
                        // Positioning
                        xPadding: options.tooltips.xPadding,
                        yPadding: options.tooltips.yPadding,
                        xAlign : options.tooltips.yAlign,
                        yAlign : options.tooltips.xAlign,

                        // Body
                        bodyColor: options.tooltips.bodyColor,
                        _bodyFontFamily: helpers.getValueOrDefault(options.tooltips.bodyFontFamily, Chart.defaults.global.defaultFontFamily),
                        _bodyFontStyle: helpers.getValueOrDefault(options.tooltips.bodyFontStyle, Chart.defaults.global.defaultFontStyle),
                        _bodyAlign: options.tooltips.bodyAlign,
                        bodyFontSize: helpers.getValueOrDefault(options.tooltips.bodyFontSize, Chart.defaults.global.defaultFontSize),
                        bodySpacing: options.tooltips.bodySpacing,

                        // Title
                        titleColor: options.tooltips.titleColor,
                        _titleFontFamily: helpers.getValueOrDefault(options.tooltips.titleFontFamily, Chart.defaults.global.defaultFontFamily),
                        _titleFontStyle: helpers.getValueOrDefault(options.tooltips.titleFontStyle, Chart.defaults.global.defaultFontStyle),
                        titleFontSize: helpers.getValueOrDefault(options.tooltips.titleFontSize, Chart.defaults.global.defaultFontSize),
                        _titleAlign: options.tooltips.titleAlign,
                        titleSpacing: options.tooltips.titleSpacing,
                        titleMarginBottom: options.tooltips.titleMarginBottom,

                        // Footer
                        footerColor: options.tooltips.footerColor,
                        _footerFontFamily: helpers.getValueOrDefault(options.tooltips.footerFontFamily, Chart.defaults.global.defaultFontFamily),
                        _footerFontStyle: helpers.getValueOrDefault(options.tooltips.footerFontStyle, Chart.defaults.global.defaultFontStyle),
                        footerFontSize: helpers.getValueOrDefault(options.tooltips.footerFontSize, Chart.defaults.global.defaultFontSize),
                        _footerAlign: options.tooltips.footerAlign,
                        footerSpacing: options.tooltips.footerSpacing,
                        footerMarginTop: options.tooltips.footerMarginTop,

                        // Appearance
                        caretSize: options.tooltips.caretSize,
                        cornerRadius: options.tooltips.cornerRadius,
                        backgroundColor: options.tooltips.backgroundColor,
                        opacity: 0,
                        legendColorBackground: options.tooltips.multiKeyBackground
                    }
                });
            },

            // Get the title
            // Args are: (tooltipItem, data)
            getTitle: function() {
                var beforeTitle = this._options.tooltips.callbacks.beforeTitle.apply(this, arguments),
                    title = this._options.tooltips.callbacks.title.apply(this, arguments),
                    afterTitle = this._options.tooltips.callbacks.afterTitle.apply(this, arguments);

                var lines = [];
                lines = pushOrConcat(lines, beforeTitle);
                lines = pushOrConcat(lines, title);
                lines = pushOrConcat(lines, afterTitle);

                return lines;
            },

            // Args are: (tooltipItem, data)
            getBeforeBody: function() {
                var lines = this._options.tooltips.callbacks.beforeBody.apply(this, arguments);
                return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
            },

            // Args are: (tooltipItem, data)
            getBody: function(tooltipItems, data) {
                var lines = [];

                helpers.each(tooltipItems, function(bodyItem) {
                    helpers.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this, bodyItem, data), lines);
                    helpers.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this, bodyItem, data), lines);
                    helpers.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this, bodyItem, data), lines);
                }, this);

                return lines;
            },

            // Args are: (tooltipItem, data)
            getAfterBody: function() {
                var lines = this._options.tooltips.callbacks.afterBody.apply(this, arguments);
                return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
            },

            // Get the footer and beforeFooter and afterFooter lines
            // Args are: (tooltipItem, data)
            getFooter: function() {
                var beforeFooter = this._options.tooltips.callbacks.beforeFooter.apply(this, arguments);
                var footer = this._options.tooltips.callbacks.footer.apply(this, arguments);
                var afterFooter = this._options.tooltips.callbacks.afterFooter.apply(this, arguments);

                var lines = [];
                lines = pushOrConcat(lines, beforeFooter);
                lines = pushOrConcat(lines, footer);
                lines = pushOrConcat(lines, afterFooter);

                return lines;
            },

            getAveragePosition: function(elements) {

                if (!elements.length) {
                    return false;
                }

                var xPositions = [];
                var yPositions = [];

                helpers.each(elements, function(el) {
                    if (el) {
                        var pos = el.tooltipPosition();
                        xPositions.push(pos.x);
                        yPositions.push(pos.y);
                    }
                });

                var x = 0,
                    y = 0;
                for (var i = 0; i < xPositions.length; i++) {
                    x += xPositions[i];
                    y += yPositions[i];
                }

                return {
                    x: Math.round(x / xPositions.length),
                    y: Math.round(y / xPositions.length)
                };

            },

            update: function(changed) {
                if (this._active.length) {
                    this._model.opacity = 1;

                    var element = this._active[0],
                        labelColors = [],
                        tooltipPosition;

                    var tooltipItems = [];

                    if (this._options.tooltips.mode === 'single') {
                        var yScale = element._yScale || element._scale; // handle radar || polarArea charts
                        tooltipItems.push({
                            xLabel: element._xScale ? element._xScale.getLabelForIndex(element._index, element._datasetIndex) : '',
                            yLabel: yScale ? yScale.getLabelForIndex(element._index, element._datasetIndex) : '',
                            index: element._index,
                            datasetIndex: element._datasetIndex
                        });
                        tooltipPosition = this.getAveragePosition(this._active);
                    } else {
                        helpers.each(this._data.datasets, function(dataset, datasetIndex) {
                            if (!helpers.isDatasetVisible(dataset)) {
                                return;
                            }
                            var currentElement = dataset.metaData[element._index];
                            if (currentElement) {
                                var yScale = element._yScale || element._scale; // handle radar || polarArea charts

                                tooltipItems.push({
                                    xLabel: currentElement._xScale ? currentElement._xScale.getLabelForIndex(currentElement._index, currentElement._datasetIndex) : '',
                                    yLabel: yScale ? yScale.getLabelForIndex(currentElement._index, currentElement._datasetIndex) : '',
                                    index: element._index,
                                    datasetIndex: datasetIndex
                                });
                            }
                        }, null, element._yScale.options.stacked);

                        helpers.each(this._active, function(active) {
                            if (active) {
                                labelColors.push({
                                    borderColor: active._view.borderColor,
                                    backgroundColor: active._view.backgroundColor
                                });
                            }
                        }, null, element._yScale.options.stacked);

                        tooltipPosition = this.getAveragePosition(this._active);
                        tooltipPosition.y = this._active[0]._yScale.getPixelForDecimal(0.5);
                    }

                    // Build the Text Lines
                    helpers.extend(this._model, {
                        title: this.getTitle(tooltipItems, this._data),
                        beforeBody: this.getBeforeBody(tooltipItems, this._data),
                        body: this.getBody(tooltipItems, this._data),
                        afterBody: this.getAfterBody(tooltipItems, this._data),
                        footer: this.getFooter(tooltipItems, this._data)
                    });

                    helpers.extend(this._model, {
                        x: Math.round(tooltipPosition.x),
                        y: Math.round(tooltipPosition.y),
                        caretPadding: helpers.getValueOrDefault(tooltipPosition.padding, 2),
                        labelColors: labelColors
                    });

                    // We need to determine alignment of
                    var tooltipSize = this.getTooltipSize(this._model);
                    this.determineAlignment(tooltipSize); // Smart Tooltip placement to stay on the canvas

                    helpers.extend(this._model, this.getBackgroundPoint(this._model, tooltipSize));
                } else {
                    this._model.opacity = 0;
                }

                if (changed && this._options.tooltips.custom) {
                    this._options.tooltips.custom.call(this, this._model);
                }

                return this;
            },
            getTooltipSize: function getTooltipSize(vm) {
                var ctx = this._chart.ctx;

                var size = {
                    height: vm.yPadding * 2, // Tooltip Padding
                    width: 0
                };
                var combinedBodyLength = vm.body.length + vm.beforeBody.length + vm.afterBody.length;

                size.height += vm.title.length * vm.titleFontSize; // Title Lines
                size.height += (vm.title.length - 1) * vm.titleSpacing; // Title Line Spacing
                size.height += vm.title.length ? vm.titleMarginBottom : 0; // Title's bottom Margin
                size.height += combinedBodyLength * vm.bodyFontSize; // Body Lines
                size.height += combinedBodyLength ? (combinedBodyLength - 1) * vm.bodySpacing : 0; // Body Line Spacing
                size.height += vm.footer.length ? vm.footerMarginTop : 0; // Footer Margin
                size.height += vm.footer.length * (vm.footerFontSize); // Footer Lines
                size.height += vm.footer.length ? (vm.footer.length - 1) * vm.footerSpacing : 0; // Footer Line Spacing

                // Width
                ctx.font = helpers.fontString(vm.titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
                helpers.each(vm.title, function(line) {
                    size.width = Math.max(size.width, ctx.measureText(line).width);
                });

                ctx.font = helpers.fontString(vm.bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
                helpers.each(vm.beforeBody.concat(vm.afterBody), function(line) {
                    size.width = Math.max(size.width, ctx.measureText(line).width);
                });
                helpers.each(vm.body, function(line) {
                    size.width = Math.max(size.width, ctx.measureText(line).width + (this._options.tooltips.mode !== 'single' ? (vm.bodyFontSize + 2) : 0));
                }, this);

                ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
                helpers.each(vm.footer, function(line) {
                    size.width = Math.max(size.width, ctx.measureText(line).width);
                });
                size.width += 2 * vm.xPadding;

                return size;
            },
            determineAlignment: function determineAlignment(size) {
                if (this._model.y < size.height) {
                    this._model.yAlign = 'top';
                } else if (this._model.y > (this._chart.height - size.height)) {
                    this._model.yAlign = 'bottom';
                }

                var lf, rf; // functions to determine left, right alignment
                var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
                var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
                var _this = this;
                var midX = (this._chartInstance.chartArea.left + this._chartInstance.chartArea.right) / 2;
                var midY = (this._chartInstance.chartArea.top + this._chartInstance.chartArea.bottom) / 2;

                if (this._model.yAlign === 'center') {
                    lf = function(x) {
                        return x <= midX;
                    };
                    rf = function(x) {
                        return x > midX;
                    };
                } else {
                    lf = function(x) {
                        return x <= (size.width / 2);
                    };
                    rf = function(x) {
                        return x >= (_this._chart.width - (size.width / 2));
                    };
                }

                olf = function(x) {
                    return x + size.width > _this._chart.width;
                };
                orf = function(x) {
                    return x - size.width < 0;
                };
                yf = function(y) {
                    return y <= midY ? 'top' : 'bottom';
                };

                if (lf(this._model.x)) {
                    this._model.xAlign = 'left';

                    // Is tooltip too wide and goes over the right side of the chart.?
                    if (olf(this._model.x)) {
                        this._model.xAlign = 'center';
                        this._model.yAlign = yf(this._model.y);
                    }
                } else if (rf(this._model.x)) {
                    this._model.xAlign = 'right';

                    // Is tooltip too wide and goes outside left edge of canvas?
                    if (orf(this._model.x)) {
                        this._model.xAlign = 'center';
                        this._model.yAlign = yf(this._model.y);
                    }
                }
            },
            getBackgroundPoint: function getBackgroundPoint(vm, size) {
                // Background Position
                var pt = {
                    x: vm.x,
                    y: vm.y
                };

                if (vm.xAlign === 'right') {
                    pt.x -= size.width;
                } else if (vm.xAlign === 'center') {
                    pt.x -= (size.width / 2);
                }

                if (vm.yAlign === 'top') {
                    pt.y += vm.caretPadding + vm.caretSize;
                } else if (vm.yAlign === 'bottom') {
                    pt.y -= size.height + vm.caretPadding + vm.caretSize;
                } else {
                    pt.y -= (size.height / 2);
                }

                if (vm.yAlign === 'center') {
                    if (vm.xAlign === 'left') {
                        pt.x += vm.caretPadding + vm.caretSize;
                    } else if (vm.xAlign === 'right') {
                        pt.x -= vm.caretPadding + vm.caretSize;
                    }
                } else {
                    if (vm.xAlign === 'left') {
                        pt.x -= vm.cornerRadius + vm.caretPadding;
                    } else if (vm.xAlign === 'right') {
                        pt.x += vm.cornerRadius + vm.caretPadding;
                    }
                }

                return pt;
            },
            drawCaret: function drawCaret(tooltipPoint, size, opacity, caretPadding) {
                var vm = this._view;
                var ctx = this._chart.ctx;
                var x1, x2, x3;
                var y1, y2, y3;

                if (vm.yAlign === 'center') {
                    // Left or right side
                    if (vm.xAlign === 'left') {
                        x1 = tooltipPoint.x;
                        x2 = x1 - vm.caretSize;
                        x3 = x1;
                    } else {
                        x1 = tooltipPoint.x + size.width;
                        x2 = x1 + vm.caretSize;
                        x3 = x1;
                    }

                    y2 = tooltipPoint.y + (size.height / 2);
                    y1 = y2 - vm.caretSize;
                    y3 = y2 + vm.caretSize;
                } else {
                    if (vm.xAlign === 'left') {
                        x1 = tooltipPoint.x + vm.cornerRadius;
                        x2 = x1 + vm.caretSize;
                        x3 = x2 + vm.caretSize;
                    } else if (vm.xAlign === 'right') {
                        x1 = tooltipPoint.x + size.width - vm.cornerRadius;
                        x2 = x1 - vm.caretSize;
                        x3 = x2 - vm.caretSize;
                    } else {
                        x2 = tooltipPoint.x + (size.width / 2);
                        x1 = x2 - vm.caretSize;
                        x3 = x2 + vm.caretSize;
                    }

                    if (vm.yAlign === 'top') {
                        y1 = tooltipPoint.y;
                        y2 = y1 - vm.caretSize;
                        y3 = y1;
                    } else {
                        y1 = tooltipPoint.y + size.height;
                        y2 = y1 + vm.caretSize;
                        y3 = y1;
                    }
                }

                var bgColor = helpers.color(vm.backgroundColor);
                ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineTo(x3, y3);
                ctx.closePath();
                ctx.fill();
            },
            drawTitle: function drawTitle(pt, vm, ctx, opacity) {
                if (vm.title.length) {
                    ctx.textAlign = vm._titleAlign;
                    ctx.textBaseline = "top";

                    var titleColor = helpers.color(vm.titleColor);
                    ctx.fillStyle = titleColor.alpha(opacity * titleColor.alpha()).rgbString();
                    ctx.font = helpers.fontString(vm.titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

                    helpers.each(vm.title, function(title, i) {
                        ctx.fillText(title, pt.x, pt.y);
                        pt.y += vm.titleFontSize + vm.titleSpacing; // Line Height and spacing

                        if (i + 1 === vm.title.length) {
                            pt.y += vm.titleMarginBottom - vm.titleSpacing; // If Last, add margin, remove spacing
                        }
                    });
                }
            },
            drawBody: function drawBody(pt, vm, ctx, opacity) {
                ctx.textAlign = vm._bodyAlign;
                ctx.textBaseline = "top";

                var bodyColor = helpers.color(vm.bodyColor);
                ctx.fillStyle = bodyColor.alpha(opacity * bodyColor.alpha()).rgbString();
                ctx.font = helpers.fontString(vm.bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

                // Before Body
                helpers.each(vm.beforeBody, function(beforeBody) {
                    ctx.fillText(beforeBody, pt.x, pt.y);
                    pt.y += vm.bodyFontSize + vm.bodySpacing;
                });

                helpers.each(vm.body, function(body, i) {
                    // Draw Legend-like boxes if needed
                    if (this._options.tooltips.mode !== 'single') {
                        // Fill a white rect so that colours merge nicely if the opacity is < 1
                        ctx.fillStyle = helpers.color(vm.legendColorBackground).alpha(opacity).rgbaString();
                        ctx.fillRect(pt.x, pt.y, vm.bodyFontSize, vm.bodyFontSize);

                        // Border
                        ctx.strokeStyle = helpers.color(vm.labelColors[i].borderColor).alpha(opacity).rgbaString();
                        ctx.strokeRect(pt.x, pt.y, vm.bodyFontSize, vm.bodyFontSize);

                        // Inner square
                        ctx.fillStyle = helpers.color(vm.labelColors[i].backgroundColor).alpha(opacity).rgbaString();
                        ctx.fillRect(pt.x + 1, pt.y + 1, vm.bodyFontSize - 2, vm.bodyFontSize - 2);

                        ctx.fillStyle = helpers.color(vm.bodyColor).alpha(opacity).rgbaString(); // Return fill style for text
                    }

                    // Body Line
                    ctx.fillText(body, pt.x + (this._options.tooltips.mode !== 'single' ? (vm.bodyFontSize + 2) : 0), pt.y);

                    pt.y += vm.bodyFontSize + vm.bodySpacing;
                }, this);

                // After Body
                helpers.each(vm.afterBody, function(afterBody) {
                    ctx.fillText(afterBody, pt.x, pt.y);
                    pt.y += vm.bodyFontSize;
                });

                pt.y -= vm.bodySpacing; // Remove last body spacing
            },
            drawFooter: function drawFooter(pt, vm, ctx, opacity) {
                if (vm.footer.length) {
                    pt.y += vm.footerMarginTop;

                    ctx.textAlign = vm._footerAlign;
                    ctx.textBaseline = "top";

                    var footerColor = helpers.color(vm.footerColor);
                    ctx.fillStyle = footerColor.alpha(opacity * footerColor.alpha()).rgbString();
                    ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

                    helpers.each(vm.footer, function(footer) {
                        ctx.fillText(footer, pt.x, pt.y);
                        pt.y += vm.footerFontSize + vm.footerSpacing;
                    });
                }
            },
            draw: function draw() {
                var ctx = this._chart.ctx;
                var vm = this._view;

                if (vm.opacity === 0) {
                    return;
                }

                var caretPadding = vm.caretPadding;
                var tooltipSize = this.getTooltipSize(vm);
                var pt = {
                    x: vm.x,
                    y: vm.y
                };

                // IE11/Edge does not like very small opacities, so snap to 0
                var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

                if (this._options.tooltips.enabled) {
                    // Draw Background
                    var bgColor = helpers.color(vm.backgroundColor);
                    ctx.fillStyle = bgColor.alpha(opacity * bgColor.alpha()).rgbString();
                    helpers.drawRoundedRectangle(ctx, pt.x, pt.y, tooltipSize.width, tooltipSize.height, vm.cornerRadius);
                    ctx.fill();

                    // Draw Caret
                    this.drawCaret(pt, tooltipSize, opacity, caretPadding);

                    // Draw Title, Body, and Footer
                    pt.x += vm.xPadding;
                    pt.y += vm.yPadding;

                    // Titles
                    this.drawTitle(pt, vm, ctx, opacity);

                    // Body
                    this.drawBody(pt, vm, ctx, opacity);

                    // Footer
                    this.drawFooter(pt, vm, ctx, opacity);
                }
            }
        });
    };

},{}],33:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart, moment) {

        var helpers = Chart.helpers;

        Chart.defaults.global.elements.arc = {
            backgroundColor: Chart.defaults.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
        };

        Chart.elements.Arc = Chart.Element.extend({
            inLabelRange: function(mouseX) {
                var vm = this._view;

                if (vm) {
                    return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
                } else {
                    return false;
                }
            },
            inRange: function(chartX, chartY) {

                var vm = this._view;

                if (vm) {
                    var pointRelativePosition = helpers.getAngleFromPoint(vm, {
                        x: chartX,
                        y: chartY
                    });

                    //Sanitise angle range
                    var startAngle = vm.startAngle;
                    var endAngle = vm.endAngle;
                    while (endAngle < startAngle) {
                        endAngle += 2.0 * Math.PI;
                    }
                    while (pointRelativePosition.angle > endAngle) {
                        pointRelativePosition.angle -= 2.0 * Math.PI;
                    }
                    while (pointRelativePosition.angle < startAngle) {
                        pointRelativePosition.angle += 2.0 * Math.PI;
                    }

                    //Check if within the range of the open/close angle
                    var betweenAngles = (pointRelativePosition.angle >= startAngle && pointRelativePosition.angle <= endAngle),
                        withinRadius = (pointRelativePosition.distance >= vm.innerRadius && pointRelativePosition.distance <= vm.outerRadius);

                    return (betweenAngles && withinRadius);
                } else {
                    return false;
                }
            },
            tooltipPosition: function() {
                var vm = this._view;

                var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2),
                    rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
                return {
                    x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
                    y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
                };
            },
            draw: function() {

                var ctx = this._chart.ctx;
                var vm = this._view;

                ctx.beginPath();

                ctx.arc(vm.x, vm.y, vm.outerRadius, vm.startAngle, vm.endAngle);

                ctx.arc(vm.x, vm.y, vm.innerRadius, vm.endAngle, vm.startAngle, true);

                ctx.closePath();
                ctx.strokeStyle = vm.borderColor;
                ctx.lineWidth = vm.borderWidth;

                ctx.fillStyle = vm.backgroundColor;

                ctx.fill();
                ctx.lineJoin = 'bevel';

                if (vm.borderWidth) {
                    ctx.stroke();
                }
            }
        });
    };

},{}],34:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.elements.line = {
            tension: 0.4,
            backgroundColor: Chart.defaults.global.defaultColor,
            borderWidth: 3,
            borderColor: Chart.defaults.global.defaultColor,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            fill: true // do we fill in the area between the line and its base axis
        };

        Chart.elements.Line = Chart.Element.extend({
            lineToNextPoint: function(previousPoint, point, nextPoint, skipHandler, previousSkipHandler) {
                var ctx = this._chart.ctx;

                if (point._view.skip) {
                    skipHandler.call(this, previousPoint, point, nextPoint);
                } else if (previousPoint._view.skip) {
                    previousSkipHandler.call(this, previousPoint, point, nextPoint);
                } else if (point._view.tension === 0) {
                    ctx.lineTo(point._view.x, point._view.y);
                } else {
                    // Line between points
                    ctx.bezierCurveTo(
                        previousPoint._view.controlPointNextX,
                        previousPoint._view.controlPointNextY,
                        point._view.controlPointPreviousX,
                        point._view.controlPointPreviousY,
                        point._view.x,
                        point._view.y
                    );
                }
            },

            draw: function() {
                var _this = this;

                var vm = this._view;
                var ctx = this._chart.ctx;
                var first = this._children[0];
                var last = this._children[this._children.length - 1];

                function loopBackToStart(drawLineToCenter) {
                    if (!first._view.skip && !last._view.skip) {
                        // Draw a bezier line from last to first
                        ctx.bezierCurveTo(
                            last._view.controlPointNextX,
                            last._view.controlPointNextY,
                            first._view.controlPointPreviousX,
                            first._view.controlPointPreviousY,
                            first._view.x,
                            first._view.y
                        );
                    } else if (drawLineToCenter) {
                        // Go to center
                        ctx.lineTo(_this._view.scaleZero.x, _this._view.scaleZero.y);
                    }
                }

                ctx.save();

                // If we had points and want to fill this line, do so.
                if (this._children.length > 0 && vm.fill) {
                    // Draw the background first (so the border is always on top)
                    ctx.beginPath();

                    helpers.each(this._children, function(point, index) {
                        var previous = helpers.previousItem(this._children, index);
                        var next = helpers.nextItem(this._children, index);

                        // First point moves to it's starting position no matter what
                        if (index === 0) {
                            if (this._loop) {
                                ctx.moveTo(vm.scaleZero.x, vm.scaleZero.y);
                            } else {
                                ctx.moveTo(point._view.x, vm.scaleZero);
                            }

                            if (point._view.skip) {
                                if (!this._loop) {
                                    ctx.moveTo(next._view.x, this._view.scaleZero);
                                }
                            } else {
                                ctx.lineTo(point._view.x, point._view.y);
                            }
                        } else {
                            this.lineToNextPoint(previous, point, next, function(previousPoint, point, nextPoint) {
                                if (this._loop) {
                                    // Go to center
                                    ctx.lineTo(this._view.scaleZero.x, this._view.scaleZero.y);
                                } else {
                                    ctx.lineTo(previousPoint._view.x, this._view.scaleZero);
                                    ctx.moveTo(nextPoint._view.x, this._view.scaleZero);
                                }
                            }, function(previousPoint, point) {
                                // If we skipped the last point, draw a line to ourselves so that the fill is nice
                                ctx.lineTo(point._view.x, point._view.y);
                            });
                        }
                    }, this);

                    // For radial scales, loop back around to the first point
                    if (this._loop) {
                        loopBackToStart(true);
                    } else {
                        //Round off the line by going to the base of the chart, back to the start, then fill.
                        ctx.lineTo(this._children[this._children.length - 1]._view.x, vm.scaleZero);
                        ctx.lineTo(this._children[0]._view.x, vm.scaleZero);
                    }

                    ctx.fillStyle = vm.backgroundColor || Chart.defaults.global.defaultColor;
                    ctx.closePath();
                    ctx.fill();
                }

                // Now draw the line between all the points with any borders
                ctx.lineCap = vm.borderCapStyle || Chart.defaults.global.elements.line.borderCapStyle;

                // IE 9 and 10 do not support line dash
                if (ctx.setLineDash) {
                    ctx.setLineDash(vm.borderDash || Chart.defaults.global.elements.line.borderDash);
                }

                ctx.lineDashOffset = vm.borderDashOffset || Chart.defaults.global.elements.line.borderDashOffset;
                ctx.lineJoin = vm.borderJoinStyle || Chart.defaults.global.elements.line.borderJoinStyle;
                ctx.lineWidth = vm.borderWidth || Chart.defaults.global.elements.line.borderWidth;
                ctx.strokeStyle = vm.borderColor || Chart.defaults.global.defaultColor;
                ctx.beginPath();

                helpers.each(this._children, function(point, index) {
                    var previous = helpers.previousItem(this._children, index);
                    var next = helpers.nextItem(this._children, index);

                    if (index === 0) {
                        ctx.moveTo(point._view.x, point._view.y);
                    } else {
                        this.lineToNextPoint(previous, point, next, function(previousPoint, point, nextPoint) {
                            ctx.moveTo(nextPoint._view.x, nextPoint._view.y);
                        }, function(previousPoint, point) {
                            // If we skipped the last point, move up to our point preventing a line from being drawn
                            ctx.moveTo(point._view.x, point._view.y);
                        });
                    }
                }, this);

                if (this._loop && this._children.length > 0) {
                    loopBackToStart();
                }

                ctx.stroke();
                ctx.restore();
            }
        });
    };
},{}],35:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.elements.point = {
            radius: 3,
            pointStyle: 'circle',
            backgroundColor: Chart.defaults.global.defaultColor,
            borderWidth: 1,
            borderColor: Chart.defaults.global.defaultColor,
            // Hover
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
        };


        Chart.elements.Point = Chart.Element.extend({
            inRange: function(mouseX, mouseY) {
                var vm = this._view;

                if (vm) {
                    var hoverRange = vm.hitRadius + vm.radius;
                    return ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(hoverRange, 2));
                } else {
                    return false;
                }
            },
            inLabelRange: function(mouseX) {
                var vm = this._view;

                if (vm) {
                    return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2));
                } else {
                    return false;
                }
            },
            tooltipPosition: function() {
                var vm = this._view;
                return {
                    x: vm.x,
                    y: vm.y,
                    padding: vm.radius + vm.borderWidth
                };
            },
            draw: function() {

                var vm = this._view;
                var ctx = this._chart.ctx;


                if (vm.skip) {
                    return;
                }

                if (typeof vm.pointStyle === 'object' && ((vm.pointStyle.toString() === '[object HTMLImageElement]') || (vm.pointStyle.toString() === '[object HTMLCanvasElement]'))) {
                    ctx.drawImage(vm.pointStyle, vm.x - vm.pointStyle.width / 2, vm.y - vm.pointStyle.height / 2);
                    return;
                }

                if (!isNaN(vm.radius) && vm.radius > 0) {

                    ctx.strokeStyle = vm.borderColor || Chart.defaults.global.defaultColor;
                    ctx.lineWidth = helpers.getValueOrDefault(vm.borderWidth, Chart.defaults.global.elements.point.borderWidth);

                    ctx.fillStyle = vm.backgroundColor || Chart.defaults.global.defaultColor;

                    var radius = vm.radius;

                    var xOffset;
                    var yOffset;

                    switch (vm.pointStyle) {
                        // Default includes circle
                        default: ctx.beginPath();
                            ctx.arc(vm.x, vm.y, radius, 0, Math.PI * 2);
                            ctx.closePath();
                            ctx.fill();
                            break;
                        case 'triangle':
                            ctx.beginPath();
                            var edgeLength = 3 * radius / Math.sqrt(3);
                            var height = edgeLength * Math.sqrt(3) / 2;
                            ctx.moveTo(vm.x - edgeLength / 2, vm.y + height / 3);
                            ctx.lineTo(vm.x + edgeLength / 2, vm.y + height / 3);
                            ctx.lineTo(vm.x, vm.y - 2 * height / 3);
                            ctx.closePath();
                            ctx.fill();
                            break;
                        case 'rect':
                            ctx.fillRect(vm.x - 1 / Math.SQRT2 * radius, vm.y - 1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
                            ctx.strokeRect(vm.x - 1 / Math.SQRT2 * radius, vm.y - 1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
                            break;
                        case 'rectRot':
                            ctx.translate(vm.x, vm.y);
                            ctx.rotate(Math.PI / 4);
                            ctx.fillRect(-1 / Math.SQRT2 * radius, -1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
                            ctx.strokeRect(-1 / Math.SQRT2 * radius, -1 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius, 2 / Math.SQRT2 * radius);
                            ctx.setTransform(1, 0, 0, 1, 0, 0);
                            break;
                        case 'cross':
                            ctx.beginPath();
                            ctx.moveTo(vm.x, vm.y + radius);
                            ctx.lineTo(vm.x, vm.y - radius);
                            ctx.moveTo(vm.x - radius, vm.y);
                            ctx.lineTo(vm.x + radius, vm.y);
                            ctx.closePath();
                            break;
                        case 'crossRot':
                            ctx.beginPath();
                            xOffset = Math.cos(Math.PI / 4) * radius;
                            yOffset = Math.sin(Math.PI / 4) * radius;
                            ctx.moveTo(vm.x - xOffset, vm.y - yOffset);
                            ctx.lineTo(vm.x + xOffset, vm.y + yOffset);
                            ctx.moveTo(vm.x - xOffset, vm.y + yOffset);
                            ctx.lineTo(vm.x + xOffset, vm.y - yOffset);
                            ctx.closePath();
                            break;
                        case 'star':
                            ctx.beginPath();
                            ctx.moveTo(vm.x, vm.y + radius);
                            ctx.lineTo(vm.x, vm.y - radius);
                            ctx.moveTo(vm.x - radius, vm.y);
                            ctx.lineTo(vm.x + radius, vm.y);
                            xOffset = Math.cos(Math.PI / 4) * radius;
                            yOffset = Math.sin(Math.PI / 4) * radius;
                            ctx.moveTo(vm.x - xOffset, vm.y - yOffset);
                            ctx.lineTo(vm.x + xOffset, vm.y + yOffset);
                            ctx.moveTo(vm.x - xOffset, vm.y + yOffset);
                            ctx.lineTo(vm.x + xOffset, vm.y - yOffset);
                            ctx.closePath();
                            break;
                        case 'line':
                            ctx.beginPath();
                            ctx.moveTo(vm.x - radius, vm.y);
                            ctx.lineTo(vm.x + radius, vm.y);
                            ctx.closePath();
                            break;
                        case 'dash':
                            ctx.beginPath();
                            ctx.moveTo(vm.x, vm.y);
                            ctx.lineTo(vm.x + radius, vm.y);
                            ctx.closePath();
                            break;
                    }

                    ctx.stroke();
                }
            }
        });
    };
},{}],36:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        Chart.defaults.global.elements.rectangle = {
            backgroundColor: Chart.defaults.global.defaultColor,
            borderWidth: 0,
            borderColor: Chart.defaults.global.defaultColor,
            borderSkipped: 'bottom'
        };

        Chart.elements.Rectangle = Chart.Element.extend({
            draw: function() {

                var ctx = this._chart.ctx;
                var vm = this._view;

                var halfWidth = vm.width / 2,
                    leftX = vm.x - halfWidth,
                    rightX = vm.x + halfWidth,
                    top = vm.base - (vm.base - vm.y),
                    halfStroke = vm.borderWidth / 2;

                // Canvas doesn't allow us to stroke inside the width so we can
                // adjust the sizes to fit if we're setting a stroke on the line
                if (vm.borderWidth) {
                    leftX += halfStroke;
                    rightX -= halfStroke;
                    top += halfStroke;
                }

                ctx.beginPath();

                ctx.fillStyle = vm.backgroundColor;
                ctx.strokeStyle = vm.borderColor;
                ctx.lineWidth = vm.borderWidth;

                // Corner points, from bottom-left to bottom-right clockwise
                // | 1 2 |
                // | 0 3 |
                var corners = [
                    [leftX, vm.base],
                    [leftX, top],
                    [rightX, top],
                    [rightX, vm.base]
                ];

                // Find first (starting) corner with fallback to 'bottom'
                var borders = ['bottom', 'left', 'top', 'right'];
                var startCorner = borders.indexOf(vm.borderSkipped, 0);
                if (startCorner === -1)
                    startCorner = 0;

                function cornerAt(index) {
                    return corners[(startCorner + index) % 4];
                }

                // Draw rectangle from 'startCorner'
                ctx.moveTo.apply(ctx, cornerAt(0));
                for (var i = 1; i < 4; i++)
                    ctx.lineTo.apply(ctx, cornerAt(i));

                ctx.fill();
                if (vm.borderWidth) {
                    ctx.stroke();
                }
            },
            height: function() {
                var vm = this._view;
                return vm.base - vm.y;
            },
            inRange: function(mouseX, mouseY) {
                var vm = this._view;
                var inRange = false;

                if (vm) {
                    if (vm.y < vm.base) {
                        inRange = (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.y && mouseY <= vm.base);
                    } else {
                        inRange = (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2) && (mouseY >= vm.base && mouseY <= vm.y);
                    }
                }

                return inRange;
            },
            inLabelRange: function(mouseX) {
                var vm = this._view;

                if (vm) {
                    return (mouseX >= vm.x - vm.width / 2 && mouseX <= vm.x + vm.width / 2);
                } else {
                    return false;
                }
            },
            tooltipPosition: function() {
                var vm = this._view;
                return {
                    x: vm.x,
                    y: vm.y
                };
            }
        });

    };
},{}],37:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;
        // Default config for a category scale
        var defaultConfig = {
            position: "bottom"
        };

        var DatasetScale = Chart.Scale.extend({
            buildTicks: function(index) {
                this.startIndex = 0;
                this.endIndex = this.chart.data.labels.length;
                var findIndex;

                if (this.options.ticks.min !== undefined) {
                    // user specified min value
                    findIndex = helpers.indexOf(this.chart.data.labels, this.options.ticks.min);
                    this.startIndex = findIndex !== -1 ? findIndex : this.startIndex;
                }

                if (this.options.ticks.max !== undefined) {
                    // user specified max value
                    findIndex = helpers.indexOf(this.chart.data.labels, this.options.ticks.max);
                    this.endIndex = findIndex !== -1 ? findIndex : this.endIndex;
                }

                // If we are viewing some subset of labels, slice the original array
                this.ticks = (this.startIndex === 0 && this.endIndex === this.chart.data.labels.length) ? this.chart.data.labels : this.chart.data.labels.slice(this.startIndex, this.endIndex + 1);
            },

            getLabelForIndex: function(index, datasetIndex) {
                return this.ticks[index];
            },

            // Used to get data value locations.  Value can either be an index or a numerical value
            getPixelForValue: function(value, index, datasetIndex, includeOffset) {
                // 1 is added because we need the length but we have the indexes
                var offsetAmt = Math.max((this.ticks.length - ((this.options.gridLines.offsetGridLines) ? 0 : 1)), 1);

                if (this.isHorizontal()) {
                    var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
                    var valueWidth = innerWidth / offsetAmt;
                    var widthOffset = (valueWidth * (index - this.startIndex)) + this.paddingLeft;

                    if (this.options.gridLines.offsetGridLines && includeOffset) {
                        widthOffset += (valueWidth / 2);
                    }

                    return this.left + Math.round(widthOffset);
                } else {
                    var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
                    var valueHeight = innerHeight / offsetAmt;
                    var heightOffset = (valueHeight * (index - this.startIndex)) + this.paddingTop;

                    if (this.options.gridLines.offsetGridLines && includeOffset) {
                        heightOffset += (valueHeight / 2);
                    }

                    return this.top + Math.round(heightOffset);
                }
            },
            getPixelForTick: function(index, includeOffset) {
                return this.getPixelForValue(this.ticks[index], index + this.startIndex, null, includeOffset);
            }
        });

        Chart.scaleService.registerScaleType("category", DatasetScale, defaultConfig);

    };
},{}],38:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        var defaultConfig = {
            position: "left",
            ticks: {
                callback: function(tickValue, index, ticks) {
                    var delta = ticks[1] - ticks[0];

                    // If we have a number like 2.5 as the delta, figure out how many decimal places we need
                    if (Math.abs(delta) > 1) {
                        if (tickValue !== Math.floor(tickValue)) {
                            // not an integer
                            delta = tickValue - Math.floor(tickValue);
                        }
                    }

                    var logDelta = helpers.log10(Math.abs(delta));
                    var tickString = '';

                    if (tickValue !== 0) {
                        var numDecimal = -1 * Math.floor(logDelta);
                        numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
                        tickString = tickValue.toFixed(numDecimal);
                    } else {
                        tickString = '0'; // never show decimal places for 0
                    }

                    return tickString;
                }
            }
        };

        var LinearScale = Chart.Scale.extend({
            determineDataLimits: function() {
                // First Calculate the range
                this.min = null;
                this.max = null;

                if (this.options.stacked) {
                    var valuesPerType = {};
                    var hasPositiveValues = false;
                    var hasNegativeValues = false;

                    helpers.each(this.chart.data.datasets, function(dataset) {
                        if (valuesPerType[dataset.type] === undefined) {
                            valuesPerType[dataset.type] = {
                                positiveValues: [],
                                negativeValues: []
                            };
                        }

                        // Store these per type
                        var positiveValues = valuesPerType[dataset.type].positiveValues;
                        var negativeValues = valuesPerType[dataset.type].negativeValues;

                        if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
                            helpers.each(dataset.data, function(rawValue, index) {

                                var value = +this.getRightValue(rawValue);
                                if (isNaN(value)) {
                                    return;
                                }

                                positiveValues[index] = positiveValues[index] || 0;
                                negativeValues[index] = negativeValues[index] || 0;

                                if (this.options.relativePoints) {
                                    positiveValues[index] = 100;
                                } else {
                                    if (value < 0) {
                                        hasNegativeValues = true;
                                        negativeValues[index] += value;
                                    } else {
                                        hasPositiveValues = true;
                                        positiveValues[index] += value;
                                    }
                                }
                            }, this);
                        }
                    }, this);

                    helpers.each(valuesPerType, function(valuesForType) {
                        var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
                        var minVal = helpers.min(values);
                        var maxVal = helpers.max(values);
                        this.min = this.min === null ? minVal : Math.min(this.min, minVal);
                        this.max = this.max === null ? maxVal : Math.max(this.max, maxVal);
                    }, this);

                } else {
                    helpers.each(this.chart.data.datasets, function(dataset) {
                        if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
                            helpers.each(dataset.data, function(rawValue, index) {
                                var value = +this.getRightValue(rawValue);
                                if (isNaN(value)) {
                                    return;
                                }

                                if (this.min === null) {
                                    this.min = value;
                                } else if (value < this.min) {
                                    this.min = value;
                                }

                                if (this.max === null) {
                                    this.max = value;
                                } else if (value > this.max) {
                                    this.max = value;
                                }
                            }, this);
                        }
                    }, this);
                }

                // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
                // do nothing since that would make the chart weird. If the user really wants a weird chart
                // axis, they can manually override it
                if (this.options.ticks.beginAtZero) {
                    var minSign = helpers.sign(this.min);
                    var maxSign = helpers.sign(this.max);

                    if (minSign < 0 && maxSign < 0) {
                        // move the top up to 0
                        this.max = 0;
                    } else if (minSign > 0 && maxSign > 0) {
                        // move the botttom down to 0
                        this.min = 0;
                    }
                }

                if (this.options.ticks.min !== undefined) {
                    this.min = this.options.ticks.min;
                } else if (this.options.ticks.suggestedMin !== undefined) {
                    this.min = Math.min(this.min, this.options.ticks.suggestedMin);
                }

                if (this.options.ticks.max !== undefined) {
                    this.max = this.options.ticks.max;
                } else if (this.options.ticks.suggestedMax !== undefined) {
                    this.max = Math.max(this.max, this.options.ticks.suggestedMax);
                }

                if (this.min === this.max) {
                    this.min--;
                    this.max++;
                }
            },
            buildTicks: function() {

                // Then calulate the ticks
                this.ticks = [];

                // Figure out what the max number of ticks we can support it is based on the size of
                // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
                // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
                // the graph

                var maxTicks;

                if (this.isHorizontal()) {
                    maxTicks = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.width / 50));
                } else {
                    // The factor of 2 used to scale the font size has been experimentally determined.
                    var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                    maxTicks = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.height / (2 * tickFontSize)));
                }

                // Make sure we always have at least 2 ticks
                maxTicks = Math.max(2, maxTicks);

                // To get a "nice" value for the tick spacing, we will use the appropriately named
                // "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
                // for details.

                var spacing;
                var fixedStepSizeSet = (this.options.ticks.fixedStepSize && this.options.ticks.fixedStepSize > 0) || (this.options.ticks.stepSize && this.options.ticks.stepSize > 0);
                if (fixedStepSizeSet) {
                    spacing = helpers.getValueOrDefault(this.options.ticks.fixedStepSize, this.options.ticks.stepSize);
                } else {
                    var niceRange = helpers.niceNum(this.max - this.min, false);
                    spacing = helpers.niceNum(niceRange / (maxTicks - 1), true);
                }
                var niceMin = Math.floor(this.min / spacing) * spacing;
                var niceMax = Math.ceil(this.max / spacing) * spacing;
                var numSpaces = (niceMax - niceMin) / spacing;

                // If very close to our rounded value, use it.
                if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
                    numSpaces = Math.round(numSpaces);
                } else {
                    numSpaces = Math.ceil(numSpaces);
                }

                // Put the values into the ticks array
                this.ticks.push(this.options.ticks.min !== undefined ? this.options.ticks.min : niceMin);
                for (var j = 1; j < numSpaces; ++j) {
                    this.ticks.push(niceMin + (j * spacing));
                }
                this.ticks.push(this.options.ticks.max !== undefined ? this.options.ticks.max : niceMax);

                if (this.options.position === "left" || this.options.position === "right") {
                    // We are in a vertical orientation. The top value is the highest. So reverse the array
                    this.ticks.reverse();
                }

                // At this point, we need to update our max and min given the tick values since we have expanded the
                // range of the scale
                this.max = helpers.max(this.ticks);
                this.min = helpers.min(this.ticks);

                if (this.options.ticks.reverse) {
                    this.ticks.reverse();

                    this.start = this.max;
                    this.end = this.min;
                } else {
                    this.start = this.min;
                    this.end = this.max;
                }
            },
            getLabelForIndex: function(index, datasetIndex) {
                return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
            },
            convertTicksToLabels: function() {
                this.ticksAsNumbers = this.ticks.slice();
                this.zeroLineIndex = this.ticks.indexOf(0);

                Chart.Scale.prototype.convertTicksToLabels.call(this);
            },
            // Utils
            getPixelForValue: function(value, index, datasetIndex, includeOffset) {
                // This must be called after fit has been run so that
                //      this.left, this.top, this.right, and this.bottom have been defined
                var rightValue = +this.getRightValue(value);
                var pixel;
                var range = this.end - this.start;

                if (this.isHorizontal()) {
                    var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
                    pixel = this.left + (innerWidth / range * (rightValue - this.start));
                    return Math.round(pixel + this.paddingLeft);
                } else {
                    var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
                    pixel = (this.bottom - this.paddingBottom) - (innerHeight / range * (rightValue - this.start));
                    return Math.round(pixel);
                }
            },
            getPixelForTick: function(index, includeOffset) {
                return this.getPixelForValue(this.ticksAsNumbers[index], null, null, includeOffset);
            }
        });
        Chart.scaleService.registerScaleType("linear", LinearScale, defaultConfig);

    };
},{}],39:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        var defaultConfig = {
            position: "left",

            // label settings
            ticks: {
                callback: function(value, index, arr) {
                    var remain = value / (Math.pow(10, Math.floor(Chart.helpers.log10(value))));

                    if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === arr.length - 1) {
                        return value.toExponential();
                    } else {
                        return '';
                    }
                }
            }
        };

        var LogarithmicScale = Chart.Scale.extend({
            determineDataLimits: function() {
                // Calculate Range
                this.min = null;
                this.max = null;

                if (this.options.stacked) {
                    var valuesPerType = {};

                    helpers.each(this.chart.data.datasets, function(dataset) {
                        if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
                            if (valuesPerType[dataset.type] === undefined) {
                                valuesPerType[dataset.type] = [];
                            }

                            helpers.each(dataset.data, function(rawValue, index) {
                                var values = valuesPerType[dataset.type];
                                var value = +this.getRightValue(rawValue);
                                if (isNaN(value)) {
                                    return;
                                }

                                values[index] = values[index] || 0;

                                if (this.options.relativePoints) {
                                    values[index] = 100;
                                } else {
                                    // Don't need to split positive and negative since the log scale can't handle a 0 crossing
                                    values[index] += value;
                                }
                            }, this);
                        }
                    }, this);

                    helpers.each(valuesPerType, function(valuesForType) {
                        var minVal = helpers.min(valuesForType);
                        var maxVal = helpers.max(valuesForType);
                        this.min = this.min === null ? minVal : Math.min(this.min, minVal);
                        this.max = this.max === null ? maxVal : Math.max(this.max, maxVal);
                    }, this);

                } else {
                    helpers.each(this.chart.data.datasets, function(dataset) {
                        if (helpers.isDatasetVisible(dataset) && (this.isHorizontal() ? dataset.xAxisID === this.id : dataset.yAxisID === this.id)) {
                            helpers.each(dataset.data, function(rawValue, index) {
                                var value = +this.getRightValue(rawValue);
                                if (isNaN(value)) {
                                    return;
                                }

                                if (this.min === null) {
                                    this.min = value;
                                } else if (value < this.min) {
                                    this.min = value;
                                }

                                if (this.max === null) {
                                    this.max = value;
                                } else if (value > this.max) {
                                    this.max = value;
                                }
                            }, this);
                        }
                    }, this);
                }

                this.min = this.options.ticks.min !== undefined ? this.options.ticks.min : this.min;
                this.max = this.options.ticks.max !== undefined ? this.options.ticks.max : this.max;

                if (this.min === this.max) {
                    if (this.min !== 0 && this.min !== null) {
                        this.min = Math.pow(10, Math.floor(helpers.log10(this.min)) - 1);
                        this.max = Math.pow(10, Math.floor(helpers.log10(this.max)) + 1);
                    } else {
                        this.min = 1;
                        this.max = 10;
                    }
                }
            },
            buildTicks: function() {
                // Reset the ticks array. Later on, we will draw a grid line at these positions
                // The array simply contains the numerical value of the spots where ticks will be
                this.ticks = [];

                // Figure out what the max number of ticks we can support it is based on the size of
                // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
                // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
                // the graph

                var tickVal = this.options.ticks.min !== undefined ? this.options.ticks.min : Math.pow(10, Math.floor(helpers.log10(this.min)));

                while (tickVal < this.max) {
                    this.ticks.push(tickVal);

                    var exp = Math.floor(helpers.log10(tickVal));
                    var significand = Math.floor(tickVal / Math.pow(10, exp)) + 1;

                    if (significand === 10) {
                        significand = 1;
                        ++exp;
                    }

                    tickVal = significand * Math.pow(10, exp);
                }

                var lastTick = this.options.ticks.max !== undefined ? this.options.ticks.max : tickVal;
                this.ticks.push(lastTick);

                if (this.options.position === "left" || this.options.position === "right") {
                    // We are in a vertical orientation. The top value is the highest. So reverse the array
                    this.ticks.reverse();
                }

                // At this point, we need to update our max and min given the tick values since we have expanded the
                // range of the scale
                this.max = helpers.max(this.ticks);
                this.min = helpers.min(this.ticks);

                if (this.options.ticks.reverse) {
                    this.ticks.reverse();

                    this.start = this.max;
                    this.end = this.min;
                } else {
                    this.start = this.min;
                    this.end = this.max;
                }
            },
            convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice();

                Chart.Scale.prototype.convertTicksToLabels.call(this);
            },
            // Get the correct tooltip label
            getLabelForIndex: function(index, datasetIndex) {
                return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
            },
            getPixelForTick: function(index, includeOffset) {
                return this.getPixelForValue(this.tickValues[index], null, null, includeOffset);
            },
            getPixelForValue: function(value, index, datasetIndex, includeOffset) {
                var pixel;

                var newVal = +this.getRightValue(value);
                var range = helpers.log10(this.end) - helpers.log10(this.start);

                if (this.isHorizontal()) {

                    if (newVal === 0) {
                        pixel = this.left + this.paddingLeft;
                    } else {
                        var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
                        pixel = this.left + (innerWidth / range * (helpers.log10(newVal) - helpers.log10(this.start)));
                        pixel += this.paddingLeft;
                    }
                } else {
                    // Bottom - top since pixels increase downard on a screen
                    if (newVal === 0) {
                        pixel = this.top + this.paddingTop;
                    } else {
                        var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
                        pixel = (this.bottom - this.paddingBottom) - (innerHeight / range * (helpers.log10(newVal) - helpers.log10(this.start)));
                    }
                }

                return pixel;
            }

        });
        Chart.scaleService.registerScaleType("logarithmic", LogarithmicScale, defaultConfig);

    };
},{}],40:[function(require,module,exports){
    "use strict";

    module.exports = function(Chart) {

        var helpers = Chart.helpers;

        var defaultConfig = {
            display: true,

            //Boolean - Whether to animate scaling the chart from the centre
            animate: true,
            lineArc: false,
            position: "chartArea",

            angleLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
                lineWidth: 1
            },

            // label settings
            ticks: {
                //Boolean - Show a backdrop to the scale label
                showLabelBackdrop: true,

                //String - The colour of the label backdrop
                backdropColor: "rgba(255,255,255,0.75)",

                //Number - The backdrop padding above & below the label in pixels
                backdropPaddingY: 2,

                //Number - The backdrop padding to the side of the label in pixels
                backdropPaddingX: 2
            },

            pointLabels: {
                //Number - Point label font size in pixels
                fontSize: 10,

                //Function - Used to convert point labels
                callback: function(label) {
                    return label;
                }
            }
        };

        var LinearRadialScale = Chart.Scale.extend({
            getValueCount: function() {
                return this.chart.data.labels.length;
            },
            setDimensions: function() {
                // Set the unconstrained dimension before label rotation
                this.width = this.maxWidth;
                this.height = this.maxHeight;
                this.xCenter = Math.round(this.width / 2);
                this.yCenter = Math.round(this.height / 2);

                var minSize = helpers.min([this.height, this.width]);
                var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                this.drawingArea = (this.options.display) ? (minSize / 2) - (tickFontSize / 2 + this.options.ticks.backdropPaddingY) : (minSize / 2);
            },
            determineDataLimits: function() {
                this.min = null;
                this.max = null;

                helpers.each(this.chart.data.datasets, function(dataset) {
                    if (helpers.isDatasetVisible(dataset)) {
                        helpers.each(dataset.data, function(rawValue, index) {
                            var value = +this.getRightValue(rawValue);
                            if (isNaN(value)) {
                                return;
                            }

                            if (this.min === null) {
                                this.min = value;
                            } else if (value < this.min) {
                                this.min = value;
                            }

                            if (this.max === null) {
                                this.max = value;
                            } else if (value > this.max) {
                                this.max = value;
                            }
                        }, this);
                    }
                }, this);

                // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
                // do nothing since that would make the chart weird. If the user really wants a weird chart
                // axis, they can manually override it
                if (this.options.ticks.beginAtZero) {
                    var minSign = helpers.sign(this.min);
                    var maxSign = helpers.sign(this.max);

                    if (minSign < 0 && maxSign < 0) {
                        // move the top up to 0
                        this.max = 0;
                    } else if (minSign > 0 && maxSign > 0) {
                        // move the botttom down to 0
                        this.min = 0;
                    }
                }

                if (this.options.ticks.min !== undefined) {
                    this.min = this.options.ticks.min;
                } else if (this.options.ticks.suggestedMin !== undefined) {
                    this.min = Math.min(this.min, this.options.ticks.suggestedMin);
                }

                if (this.options.ticks.max !== undefined) {
                    this.max = this.options.ticks.max;
                } else if (this.options.ticks.suggestedMax !== undefined) {
                    this.max = Math.max(this.max, this.options.ticks.suggestedMax);
                }

                if (this.min === this.max) {
                    this.min--;
                    this.max++;
                }
            },
            buildTicks: function() {


                this.ticks = [];

                // Figure out what the max number of ticks we can support it is based on the size of
                // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
                // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
                // the graph
                var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                var maxTicks = Math.min(this.options.ticks.maxTicksLimit ? this.options.ticks.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
                maxTicks = Math.max(2, maxTicks); // Make sure we always have at least 2 ticks

                // To get a "nice" value for the tick spacing, we will use the appropriately named
                // "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
                // for details.

                var niceRange = helpers.niceNum(this.max - this.min, false);
                var spacing = helpers.niceNum(niceRange / (maxTicks - 1), true);
                var niceMin = Math.floor(this.min / spacing) * spacing;
                var niceMax = Math.ceil(this.max / spacing) * spacing;

                var numSpaces = Math.ceil((niceMax - niceMin) / spacing);

                // Put the values into the ticks array
                this.ticks.push(this.options.ticks.min !== undefined ? this.options.ticks.min : niceMin);
                for (var j = 1; j < numSpaces; ++j) {
                    this.ticks.push(niceMin + (j * spacing));
                }
                this.ticks.push(this.options.ticks.max !== undefined ? this.options.ticks.max : niceMax);

                // At this point, we need to update our max and min given the tick values since we have expanded the
                // range of the scale
                this.max = helpers.max(this.ticks);
                this.min = helpers.min(this.ticks);

                if (this.options.ticks.reverse) {
                    this.ticks.reverse();

                    this.start = this.max;
                    this.end = this.min;
                } else {
                    this.start = this.min;
                    this.end = this.max;
                }

                this.zeroLineIndex = this.ticks.indexOf(0);
            },
            convertTicksToLabels: function() {
                Chart.Scale.prototype.convertTicksToLabels.call(this);

                // Point labels
                this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this);
            },
            getLabelForIndex: function(index, datasetIndex) {
                return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
            },
            fit: function() {
                /*
                 * Right, this is really confusing and there is a lot of maths going on here
                 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
                 *
                 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
                 *
                 * Solution:
                 *
                 * We assume the radius of the polygon is half the size of the canvas at first
                 * at each index we check if the text overlaps.
                 *
                 * Where it does, we store that angle and that index.
                 *
                 * After finding the largest index and angle we calculate how much we need to remove
                 * from the shape radius to move the point inwards by that x.
                 *
                 * We average the left and right distances to get the maximum shape radius that can fit in the box
                 * along with labels.
                 *
                 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
                 * on each side, removing that from the size, halving it and adding the left x protrusion width.
                 *
                 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
                 * and position it in the most space efficient manner
                 *
                 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
                 */

                var pointLabelFontSize = helpers.getValueOrDefault(this.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
                var pointLabeFontStyle = helpers.getValueOrDefault(this.options.pointLabels.fontStyle, Chart.defaults.global.defaultFontStyle);
                var pointLabeFontFamily = helpers.getValueOrDefault(this.options.pointLabels.fontFamily, Chart.defaults.global.defaultFontFamily);
                var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

                // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
                // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
                var largestPossibleRadius = helpers.min([(this.height / 2 - pointLabelFontSize - 5), this.width / 2]),
                    pointPosition,
                    i,
                    textWidth,
                    halfTextWidth,
                    furthestRight = this.width,
                    furthestRightIndex,
                    furthestRightAngle,
                    furthestLeft = 0,
                    furthestLeftIndex,
                    furthestLeftAngle,
                    xProtrusionLeft,
                    xProtrusionRight,
                    radiusReductionRight,
                    radiusReductionLeft,
                    maxWidthRadius;
                this.ctx.font = pointLabeFont;

                for (i = 0; i < this.getValueCount(); i++) {
                    // 5px to space the text slightly out - similar to what we do in the draw function.
                    pointPosition = this.getPointPosition(i, largestPossibleRadius);
                    textWidth = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : '').width + 5;
                    if (i === 0 || i === this.getValueCount() / 2) {
                        // If we're at index zero, or exactly the middle, we're at exactly the top/bottom
                        // of the radar chart, so text will be aligned centrally, so we'll half it and compare
                        // w/left and right text sizes
                        halfTextWidth = textWidth / 2;
                        if (pointPosition.x + halfTextWidth > furthestRight) {
                            furthestRight = pointPosition.x + halfTextWidth;
                            furthestRightIndex = i;
                        }
                        if (pointPosition.x - halfTextWidth < furthestLeft) {
                            furthestLeft = pointPosition.x - halfTextWidth;
                            furthestLeftIndex = i;
                        }
                    } else if (i < this.getValueCount() / 2) {
                        // Less than half the values means we'll left align the text
                        if (pointPosition.x + textWidth > furthestRight) {
                            furthestRight = pointPosition.x + textWidth;
                            furthestRightIndex = i;
                        }
                    } else if (i > this.getValueCount() / 2) {
                        // More than half the values means we'll right align the text
                        if (pointPosition.x - textWidth < furthestLeft) {
                            furthestLeft = pointPosition.x - textWidth;
                            furthestLeftIndex = i;
                        }
                    }
                }

                xProtrusionLeft = furthestLeft;
                xProtrusionRight = Math.ceil(furthestRight - this.width);

                furthestRightAngle = this.getIndexAngle(furthestRightIndex);
                furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

                radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
                radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2);

                // Ensure we actually need to reduce the size of the chart
                radiusReductionRight = (helpers.isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
                radiusReductionLeft = (helpers.isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

                this.drawingArea = Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2);
                this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
            },
            setCenterPoint: function(leftMovement, rightMovement) {

                var maxRight = this.width - rightMovement - this.drawingArea,
                    maxLeft = leftMovement + this.drawingArea;

                this.xCenter = Math.round(((maxLeft + maxRight) / 2) + this.left);
                // Always vertically in the centre as the text height doesn't change
                this.yCenter = Math.round((this.height / 2) + this.top);
            },

            getIndexAngle: function(index) {
                var angleMultiplier = (Math.PI * 2) / this.getValueCount();
                // Start from the top instead of right, so remove a quarter of the circle

                return index * angleMultiplier - (Math.PI / 2);
            },
            getDistanceFromCenterForValue: function(value) {
                if (value === null) {
                    return 0; // null always in center
                }

                // Take into account half font size + the yPadding of the top value
                var scalingFactor = this.drawingArea / (this.max - this.min);
                if (this.options.reverse) {
                    return (this.max - value) * scalingFactor;
                } else {
                    return (value - this.min) * scalingFactor;
                }
            },
            getPointPosition: function(index, distanceFromCenter) {
                var thisAngle = this.getIndexAngle(index);
                return {
                    x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
                    y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
                };
            },
            getPointPositionForValue: function(index, value) {
                return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
            },
            draw: function() {
                if (this.options.display) {
                    var ctx = this.ctx;
                    helpers.each(this.ticks, function(label, index) {
                        // Don't draw a centre value (if it is minimum)
                        if (index > 0 || this.options.reverse) {
                            var yCenterOffset = this.getDistanceFromCenterForValue(this.ticks[index]);
                            var yHeight = this.yCenter - yCenterOffset;

                            // Draw circular lines around the scale
                            if (this.options.gridLines.display) {
                                ctx.strokeStyle = this.options.gridLines.color;
                                ctx.lineWidth = this.options.gridLines.lineWidth;

                                if (this.options.lineArc) {
                                    // Draw circular arcs between the points
                                    ctx.beginPath();
                                    ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI * 2);
                                    ctx.closePath();
                                    ctx.stroke();
                                } else {
                                    // Draw straight lines connecting each index
                                    ctx.beginPath();
                                    for (var i = 0; i < this.getValueCount(); i++) {
                                        var pointPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.ticks[index]));
                                        if (i === 0) {
                                            ctx.moveTo(pointPosition.x, pointPosition.y);
                                        } else {
                                            ctx.lineTo(pointPosition.x, pointPosition.y);
                                        }
                                    }
                                    ctx.closePath();
                                    ctx.stroke();
                                }
                            }

                            if (this.options.ticks.display) {
                                var tickFontColor = helpers.getValueOrDefault(this.options.ticks.fontColor, Chart.defaults.global.defaultFontColor);
                                var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                                var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
                                var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
                                var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
                                ctx.font = tickLabelFont;

                                if (this.options.ticks.showLabelBackdrop) {
                                    var labelWidth = ctx.measureText(label).width;
                                    ctx.fillStyle = this.options.ticks.backdropColor;
                                    ctx.fillRect(
                                        this.xCenter - labelWidth / 2 - this.options.ticks.backdropPaddingX,
                                        yHeight - tickFontSize / 2 - this.options.ticks.backdropPaddingY,
                                        labelWidth + this.options.ticks.backdropPaddingX * 2,
                                        tickFontSize + this.options.ticks.backdropPaddingY * 2
                                    );
                                }

                                ctx.textAlign = 'center';
                                ctx.textBaseline = "middle";
                                ctx.fillStyle = tickFontColor;
                                ctx.fillText(label, this.xCenter, yHeight);
                            }
                        }
                    }, this);

                    if (!this.options.lineArc) {
                        ctx.lineWidth = this.options.angleLines.lineWidth;
                        ctx.strokeStyle = this.options.angleLines.color;

                        for (var i = this.getValueCount() - 1; i >= 0; i--) {
                            if (this.options.angleLines.display) {
                                var outerPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max));
                                ctx.beginPath();
                                ctx.moveTo(this.xCenter, this.yCenter);
                                ctx.lineTo(outerPosition.x, outerPosition.y);
                                ctx.stroke();
                                ctx.closePath();
                            }
                            // Extra 3px out for some label spacing
                            var pointLabelPosition = this.getPointPosition(i, this.getDistanceFromCenterForValue(this.options.reverse ? this.min : this.max) + 5);

                            var pointLabelFontColor = helpers.getValueOrDefault(this.options.pointLabels.fontColor, Chart.defaults.global.defaultFontColor);
                            var pointLabelFontSize = helpers.getValueOrDefault(this.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
                            var pointLabeFontStyle = helpers.getValueOrDefault(this.options.pointLabels.fontStyle, Chart.defaults.global.defaultFontStyle);
                            var pointLabeFontFamily = helpers.getValueOrDefault(this.options.pointLabels.fontFamily, Chart.defaults.global.defaultFontFamily);
                            var pointLabeFont = helpers.fontString(pointLabelFontSize, pointLabeFontStyle, pointLabeFontFamily);

                            ctx.font = pointLabeFont;
                            ctx.fillStyle = pointLabelFontColor;

                            var labelsCount = this.pointLabels.length,
                                halfLabelsCount = this.pointLabels.length / 2,
                                quarterLabelsCount = halfLabelsCount / 2,
                                upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
                                exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
                            if (i === 0) {
                                ctx.textAlign = 'center';
                            } else if (i === halfLabelsCount) {
                                ctx.textAlign = 'center';
                            } else if (i < halfLabelsCount) {
                                ctx.textAlign = 'left';
                            } else {
                                ctx.textAlign = 'right';
                            }

                            // Set the correct text baseline based on outer positioning
                            if (exactQuarter) {
                                ctx.textBaseline = 'middle';
                            } else if (upperHalf) {
                                ctx.textBaseline = 'bottom';
                            } else {
                                ctx.textBaseline = 'top';
                            }

                            ctx.fillText(this.pointLabels[i] ? this.pointLabels[i] : '', pointLabelPosition.x, pointLabelPosition.y);
                        }
                    }
                }
            }
        });
        Chart.scaleService.registerScaleType("radialLinear", LinearRadialScale, defaultConfig);

    };
},{}],41:[function(require,module,exports){
    /*global window: false */
    "use strict";

    var moment = require('moment');
    moment = typeof(moment) === 'function' ? moment : window.moment;

    module.exports = function(Chart) {

        var helpers = Chart.helpers;
        var time = {
            units: [{
                name: 'millisecond',
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            }, {
                name: 'second',
                steps: [1, 2, 5, 10, 30]
            }, {
                name: 'minute',
                steps: [1, 2, 5, 10, 30]
            }, {
                name: 'hour',
                steps: [1, 2, 3, 6, 12]
            }, {
                name: 'day',
                steps: [1, 2, 5]
            }, {
                name: 'week',
                maxStep: 4
            }, {
                name: 'month',
                maxStep: 3
            }, {
                name: 'quarter',
                maxStep: 4
            }, {
                name: 'year',
                maxStep: false
            }]
        };

        var defaultConfig = {
            position: "bottom",

            time: {
                parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
                format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
                unit: false, // false == automatic or override with week, month, year, etc.
                round: false, // none, or override with week, month, year, etc.
                displayFormat: false, // DEPRECATED

                // defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
                displayFormats: {
                    'millisecond': 'h:mm:ss.SSS a', // 11:20:01.123 AM,
                    'second': 'h:mm:ss a', // 11:20:01 AM
                    'minute': 'h:mm:ss a', // 11:20:01 AM
                    'hour': 'MMM D, hA', // Sept 4, 5PM
                    'day': 'll', // Sep 4 2015
                    'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                    'month': 'MMM YYYY', // Sept 2015
                    'quarter': '[Q]Q - YYYY', // Q3
                    'year': 'YYYY' // 2015
                }
            },
            ticks: {
                autoSkip: false
            }
        };

        var TimeScale = Chart.Scale.extend({
            initialize: function() {
                if (!moment) {
                    throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
                }

                Chart.Scale.prototype.initialize.call(this);
            },
            getLabelMoment: function(datasetIndex, index) {
                return this.labelMoments[datasetIndex][index];
            },
            determineDataLimits: function() {
                this.labelMoments = [];

                // Only parse these once. If the dataset does not have data as x,y pairs, we will use
                // these
                var scaleLabelMoments = [];
                if (this.chart.data.labels && this.chart.data.labels.length > 0) {
                    helpers.each(this.chart.data.labels, function(label, index) {
                        var labelMoment = this.parseTime(label);
                        if (this.options.time.round) {
                            labelMoment.startOf(this.options.time.round);
                        }
                        scaleLabelMoments.push(labelMoment);
                    }, this);

                    this.firstTick = moment.min.call(this, scaleLabelMoments);
                    this.lastTick = moment.max.call(this, scaleLabelMoments);
                } else {
                    this.firstTick = null;
                    this.lastTick = null;
                }

                helpers.each(this.chart.data.datasets, function(dataset, datasetIndex) {
                    var momentsForDataset = [];

                    if (typeof dataset.data[0] === 'object') {
                        helpers.each(dataset.data, function(value, index) {
                            var labelMoment = this.parseTime(this.getRightValue(value));
                            if (this.options.time.round) {
                                labelMoment.startOf(this.options.time.round);
                            }
                            momentsForDataset.push(labelMoment);

                            // May have gone outside the scale ranges, make sure we keep the first and last ticks updated
                            this.firstTick = this.firstTick !== null ? moment.min(this.firstTick, labelMoment) : labelMoment;
                            this.lastTick = this.lastTick !== null ? moment.max(this.lastTick, labelMoment) : labelMoment;
                        }, this);
                    } else {
                        // We have no labels. Use the ones from the scale
                        momentsForDataset = scaleLabelMoments;
                    }

                    this.labelMoments.push(momentsForDataset);
                }, this);

                // Set these after we've done all the data
                if (this.options.time.min) {
                    this.firstTick = this.parseTime(this.options.time.min);
                }

                if (this.options.time.max) {
                    this.lastTick = this.parseTime(this.options.time.max);
                }

                // We will modify these, so clone for later
                this.firstTick = (this.firstTick || moment()).clone();
                this.lastTick = (this.lastTick || moment()).clone();
            },
            buildTicks: function(index) {

                this.ctx.save();
                var tickFontSize = helpers.getValueOrDefault(this.options.ticks.fontSize, Chart.defaults.global.defaultFontSize);
                var tickFontStyle = helpers.getValueOrDefault(this.options.ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
                var tickFontFamily = helpers.getValueOrDefault(this.options.ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
                var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
                this.ctx.font = tickLabelFont;

                this.ticks = [];
                this.unitScale = 1; // How much we scale the unit by, ie 2 means 2x unit per step
                this.scaleSizeInUnits = 0; // How large the scale is in the base unit (seconds, minutes, etc)

                // Set unit override if applicable
                if (this.options.time.unit) {
                    this.tickUnit = this.options.time.unit || 'day';
                    this.displayFormat = this.options.time.displayFormats[this.tickUnit];
                    this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, true);
                    this.unitScale = helpers.getValueOrDefault(this.options.time.unitStepSize, 1);
                } else {
                    // Determine the smallest needed unit of the time
                    var innerWidth = this.isHorizontal() ? this.width - (this.paddingLeft + this.paddingRight) : this.height - (this.paddingTop + this.paddingBottom);

                    // Crude approximation of what the label length might be
                    var tempFirstLabel = this.tickFormatFunction(this.firstTick, 0, []);
                    var tickLabelWidth = this.ctx.measureText(tempFirstLabel).width;
                    var cosRotation = Math.cos(helpers.toRadians(this.options.ticks.maxRotation));
                    var sinRotation = Math.sin(helpers.toRadians(this.options.ticks.maxRotation));
                    tickLabelWidth = (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
                    var labelCapacity = innerWidth / (tickLabelWidth);

                    // Start as small as possible
                    this.tickUnit = 'millisecond';
                    this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, true);
                    this.displayFormat = this.options.time.displayFormats[this.tickUnit];

                    var unitDefinitionIndex = 0;
                    var unitDefinition = time.units[unitDefinitionIndex];

                    // While we aren't ideal and we don't have units left
                    while (unitDefinitionIndex < time.units.length) {
                        // Can we scale this unit. If `false` we can scale infinitely
                        this.unitScale = 1;

                        if (helpers.isArray(unitDefinition.steps) && Math.ceil(this.scaleSizeInUnits / labelCapacity) < helpers.max(unitDefinition.steps)) {
                            // Use one of the prefedined steps
                            for (var idx = 0; idx < unitDefinition.steps.length; ++idx) {
                                if (unitDefinition.steps[idx] >= Math.ceil(this.scaleSizeInUnits / labelCapacity)) {
                                    this.unitScale = helpers.getValueOrDefault(this.options.time.unitStepSize, unitDefinition.steps[idx]);
                                    break;
                                }
                            }

                            break;
                        } else if ((unitDefinition.maxStep === false) || (Math.ceil(this.scaleSizeInUnits / labelCapacity) < unitDefinition.maxStep)) {
                            // We have a max step. Scale this unit
                            this.unitScale = helpers.getValueOrDefault(this.options.time.unitStepSize, Math.ceil(this.scaleSizeInUnits / labelCapacity));
                            break;
                        } else {
                            // Move to the next unit up
                            ++unitDefinitionIndex;
                            unitDefinition = time.units[unitDefinitionIndex];

                            this.tickUnit = unitDefinition.name;
                            this.scaleSizeInUnits = this.lastTick.diff(this.firstTick, this.tickUnit, true);
                            this.displayFormat = this.options.time.displayFormats[unitDefinition.name];
                        }
                    }
                }

                var roundedStart;

                // Only round the first tick if we have no hard minimum
                if (!this.options.time.min) {
                    this.firstTick.startOf(this.tickUnit);
                    roundedStart = this.firstTick;
                } else {
                    roundedStart = this.firstTick.clone().startOf(this.tickUnit);
                }

                // Only round the last tick if we have no hard maximum
                if (!this.options.time.max) {
                    this.lastTick.endOf(this.tickUnit);
                }

                this.smallestLabelSeparation = this.width;

                helpers.each(this.chart.data.datasets, function(dataset, datasetIndex) {
                    for (var i = 1; i < this.labelMoments[datasetIndex].length; i++) {
                        this.smallestLabelSeparation = Math.min(this.smallestLabelSeparation, this.labelMoments[datasetIndex][i].diff(this.labelMoments[datasetIndex][i - 1], this.tickUnit, true));
                    }
                }, this);

                // Tick displayFormat override
                if (this.options.time.displayFormat) {
                    this.displayFormat = this.options.time.displayFormat;
                }

                // first tick. will have been rounded correctly if options.time.min is not specified
                this.ticks.push(this.firstTick.clone());

                // For every unit in between the first and last moment, create a moment and add it to the ticks tick
                for (var i = 1; i < this.scaleSizeInUnits; ++i) {
                    var newTick = roundedStart.clone().add(i, this.tickUnit);

                    // Are we greater than the max time
                    if (this.options.time.max && newTick.diff(this.lastTick, this.tickUnit, true) >= 0) {
                        break;
                    }

                    if (i % this.unitScale === 0) {
                        this.ticks.push(newTick);
                    }
                }

                // Always show the right tick
                if (this.ticks[this.ticks.length - 1].diff(this.lastTick, this.tickUnit) !== 0 || this.scaleSizeInUnits === 0) {
                    // this is a weird case. If the <max> option is the same as the end option, we can't just diff the times because the tick was created from the roundedStart
                    // but the last tick was not rounded.
                    if (this.options.time.max) {
                        this.ticks.push(this.lastTick.clone());
                        this.scaleSizeInUnits = this.lastTick.diff(this.ticks[0], this.tickUnit, true);
                    } else {
                        this.scaleSizeInUnits = Math.ceil(this.scaleSizeInUnits / this.unitScale) * this.unitScale;
                        this.ticks.push(this.firstTick.clone().add(this.scaleSizeInUnits, this.tickUnit));
                        this.lastTick = this.ticks[this.ticks.length - 1].clone();
                    }
                }
                this.ctx.restore();
            },
            // Get tooltip label
            getLabelForIndex: function(index, datasetIndex) {
                var label = this.chart.data.labels && index < this.chart.data.labels.length ? this.chart.data.labels[index] : '';

                if (typeof this.chart.data.datasets[datasetIndex].data[0] === 'object') {
                    label = this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
                }

                // Format nicely
                if (this.options.time.tooltipFormat) {
                    label = this.parseTime(label).format(this.options.time.tooltipFormat);
                }

                return label;
            },
            // Function to format an individual tick mark
            tickFormatFunction: function tickFormatFunction(tick, index, ticks) {
                var formattedTick = tick.format(this.displayFormat);

                if (this.options.ticks.userCallback) {
                    return this.options.ticks.userCallback(formattedTick, index, ticks);
                } else {
                    return formattedTick;
                }
            },
            convertTicksToLabels: function() {
                this.ticks = this.ticks.map(this.tickFormatFunction, this);
            },
            getPixelForValue: function(value, index, datasetIndex, includeOffset) {
                var labelMoment = this.getLabelMoment(datasetIndex, index);

                if (labelMoment) {
                    var offset = labelMoment.diff(this.firstTick, this.tickUnit, true);

                    var decimal = offset / this.scaleSizeInUnits;

                    if (this.isHorizontal()) {
                        var innerWidth = this.width - (this.paddingLeft + this.paddingRight);
                        var valueWidth = innerWidth / Math.max(this.ticks.length - 1, 1);
                        var valueOffset = (innerWidth * decimal) + this.paddingLeft;

                        return this.left + Math.round(valueOffset);
                    } else {
                        var innerHeight = this.height - (this.paddingTop + this.paddingBottom);
                        var valueHeight = innerHeight / Math.max(this.ticks.length - 1, 1);
                        var heightOffset = (innerHeight * decimal) + this.paddingTop;

                        return this.top + Math.round(heightOffset);
                    }
                }
            },
            parseTime: function(label) {
                if (typeof this.options.time.parser === 'string') {
                    return moment(label, this.options.time.parser);
                }
                if (typeof this.options.time.parser === 'function') {
                    return this.options.time.parser(label);
                }
                // Date objects
                if (typeof label.getMonth === 'function' || typeof label === 'number') {
                    return moment(label);
                }
                // Moment support
                if (label.isValid && label.isValid()) {
                    return label;
                }
                // Custom parsing (return an instance of moment)
                if (typeof this.options.time.format !== 'string' && this.options.time.format.call) {
                    console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale");
                    return this.options.time.format(label);
                }
                // Moment format parsing
                return moment(label, this.options.time.format);
            }
        });
        Chart.scaleService.registerScaleType("time", TimeScale, defaultConfig);

    };

},{"moment":1}]},{},[7]);

//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return fd.apply(null,arguments)}function b(a){fd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ja(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a),c=gd.call(b.parsedDateParts,function(a){return null!=a});a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),hd.length>0)for(c in hd)d=hd[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),id===!1&&(id=!0,a.updateOffset(this),id=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function u(b,c){var d=!0;return g(function(){return null!=a.deprecationHandler&&a.deprecationHandler(null,b),d&&(t(b+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),d=!1),c.apply(this,arguments)},c)}function v(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),jd[b]||(t(c),jd[b]=!0)}function w(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function x(a){return"[object Object]"===Object.prototype.toString.call(a)}function y(a){var b,c;for(c in a)b=a[c],w(b)?this[c]=b:this["_"+c]=b;this._config=a,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function z(a,b){var c,d=g({},a);for(c in b)f(b,c)&&(x(a[c])&&x(b[c])?(d[c]={},g(d[c],a[c]),g(d[c],b[c])):null!=b[c]?d[c]=b[c]:delete d[c]);return d}function A(a){null!=a&&this.set(a)}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a){for(var b,c,d,e,f=0;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,c=B(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=D(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function D(a){var b=null;if(!nd[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=ld._abbr,require("./locale/"+a),E(b)}catch(c){}return nd[a]}function E(a,b){var c;return a&&(c=m(b)?H(a):F(a,b),c&&(ld=c)),ld._abbr}function F(a,b){return null!==b?(b.abbr=a,null!=nd[a]?(v("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),b=z(nd[a]._config,b)):null!=b.parentLocale&&(null!=nd[b.parentLocale]?b=z(nd[b.parentLocale]._config,b):v("parentLocaleUndefined","specified parentLocale is not defined yet")),nd[a]=new A(b),E(a),nd[a]):(delete nd[a],null)}function G(a,b){if(null!=b){var c;null!=nd[a]&&(b=z(nd[a]._config,b)),c=new A(b),c.parentLocale=nd[a],nd[a]=c,E(a)}else null!=nd[a]&&(null!=nd[a].parentLocale?nd[a]=nd[a].parentLocale:null!=nd[a]&&delete nd[a]);return nd[a]}function H(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return ld;if(!c(a)){if(b=D(a))return b;a=[a]}return C(a)}function I(){return kd(nd)}function J(a,b){var c=a.toLowerCase();od[c]=od[c+"s"]=od[b]=a}function K(a){return"string"==typeof a?od[a]||od[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)f(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(b,c){return function(d){return null!=d?(O(this,b,d),a.updateOffset(this,c),this):N(this,b)}}function N(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function O(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function P(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=K(a),w(this[a]))return this[a](b);return this}function Q(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function R(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(sd[a]=e),b&&(sd[b[0]]=function(){return Q(e.apply(this,arguments),b[1],b[2])}),c&&(sd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function S(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function T(a){var b,c,d=a.match(pd);for(b=0,c=d.length;c>b;b++)sd[d[b]]?d[b]=sd[d[b]]:d[b]=S(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}function U(a,b){return a.isValid()?(b=V(b,a.localeData()),rd[b]=rd[b]||T(b),rd[b](a)):a.localeData().invalidDate()}function V(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(qd.lastIndex=0;d>=0&&qd.test(a);)a=a.replace(qd,c),qd.lastIndex=0,d-=1;return a}function W(a,b,c){Kd[a]=w(b)?b:function(a,d){return a&&c?c:b}}function X(a,b){return f(Kd,a)?Kd[a](b._strict,b._locale):new RegExp(Y(a))}function Y(a){return Z(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function Z(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)Ld[a[c]]=d}function _(a,b){$(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function aa(a,b,c){null!=b&&f(Ld,a)&&Ld[a](b,c._a,c,a)}function ba(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ca(a,b){return c(this._months)?this._months[a.month()]:this._months[Vd.test(b)?"format":"standalone"][a.month()]}function da(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Vd.test(b)?"format":"standalone"][a.month()]}function ea(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=h([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:null):(e=md.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:(e=md.call(this._longMonthsParse,g),-1!==e?e:null)):(e=md.call(this._longMonthsParse,g),-1!==e?e:(e=md.call(this._shortMonthsParse,g),-1!==e?e:null))}function fa(a,b,c){var d,e,f;if(this._monthsParseExact)return ea.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ga(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=r(b);else if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),ba(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ha(b){return null!=b?(ga(this,b),a.updateOffset(this,!0),this):N(this,"Month")}function ia(){return ba(this.year(),this.month())}function ja(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ka(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function la(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=Z(d[b]),e[b]=Z(e[b]),f[b]=Z(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function ma(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[Nd]<0||c[Nd]>11?Nd:c[Od]<1||c[Od]>ba(c[Md],c[Nd])?Od:c[Pd]<0||c[Pd]>24||24===c[Pd]&&(0!==c[Qd]||0!==c[Rd]||0!==c[Sd])?Pd:c[Qd]<0||c[Qd]>59?Qd:c[Rd]<0||c[Rd]>59?Rd:c[Sd]<0||c[Sd]>999?Sd:-1,j(a)._overflowDayOfYear&&(Md>b||b>Od)&&(b=Od),j(a)._overflowWeeks&&-1===b&&(b=Td),j(a)._overflowWeekday&&-1===b&&(b=Ud),j(a).overflow=b),a}function na(a){var b,c,d,e,f,g,h=a._i,i=$d.exec(h)||_d.exec(h);if(i){for(j(a).iso=!0,b=0,c=be.length;c>b;b++)if(be[b][1].exec(i[1])){e=be[b][0],d=be[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=ce.length;c>b;b++)if(ce[b][1].exec(i[3])){f=(i[2]||" ")+ce[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ae.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),Ca(a)}else a._isValid=!1}function oa(b){var c=de.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(na(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function pa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function qa(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ra(a){return sa(a)?366:365}function sa(a){return a%4===0&&a%100!==0||a%400===0}function ta(){return sa(this.year())}function ua(a,b,c){var d=7+b-c,e=(7+qa(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=ra(f)+j):j>ra(a)?(f=a+1,g=j-ra(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(ra(a)-d+e)/7}function ya(a,b,c){return null!=a?a:null!=b?b:c}function za(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function Aa(a){var b,c,d,e,f=[];if(!a._d){for(d=za(a),a._w&&null==a._a[Od]&&null==a._a[Nd]&&Ba(a),a._dayOfYear&&(e=ya(a._a[Md],d[Md]),a._dayOfYear>ra(e)&&(j(a)._overflowDayOfYear=!0),c=qa(e,0,a._dayOfYear),a._a[Nd]=c.getUTCMonth(),a._a[Od]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[Pd]&&0===a._a[Qd]&&0===a._a[Rd]&&0===a._a[Sd]&&(a._nextDay=!0,a._a[Pd]=0),a._d=(a._useUTC?qa:pa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Pd]=24)}}function Ba(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ya(b.GG,a._a[Md],wa(Ka(),1,4).year),d=ya(b.W,1),e=ya(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ya(b.gg,a._a[Md],wa(Ka(),f,g).year),d=ya(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>xa(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[Md]=h.year,a._dayOfYear=h.dayOfYear)}function Ca(b){if(b._f===a.ISO_8601)return void na(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=V(b._f,b._locale).match(pd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(X(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),sd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),aa(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[Pd]<=12&&b._a[Pd]>0&&(j(b).bigHour=void 0),j(b).parsedDateParts=b._a.slice(0),j(b).meridiem=b._meridiem,b._a[Pd]=Da(b._locale,b._a[Pd],b._meridiem),Aa(b),ma(b)}function Da(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function Ea(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],Ca(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function Fa(a){if(!a._d){var b=L(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),Aa(a)}}function Ga(a){var b=new o(ma(Ha(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ha(a){var b=a._i,e=a._f;return a._locale=a._locale||H(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(ma(b)):(c(e)?Ea(a):e?Ca(a):d(b)?a._d=b:Ia(a),k(a)||(a._d=null),a))}function Ia(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(f.valueOf()):"string"==typeof f?oa(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),Aa(b)):"object"==typeof f?Fa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ja(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Ga(f)}function Ka(a,b,c,d){return Ja(a,b,c,d,!1)}function La(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ka();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ma(){var a=[].slice.call(arguments,0);return La("isBefore",a)}function Na(){var a=[].slice.call(arguments,0);return La("isAfter",a)}function Oa(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=H(),this._bubble()}function Pa(a){return a instanceof Oa}function Qa(a,b){R(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+Q(~~(a/60),2)+b+Q(~~a%60,2)})}function Ra(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(ie)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Sa(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?b.valueOf():Ka(b).valueOf())-e.valueOf(),e._d.setTime(e._d.valueOf()+f),a.updateOffset(e,!1),e):Ka(b).local()}function Ta(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ua(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=Ra(Hd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ta(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?jb(this,db(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ta(this):null!=b?this:NaN}function Va(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Wa(a){return this.utcOffset(0,a)}function Xa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ta(this),"m")),this}function Ya(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ra(Gd,this._i)),this}function Za(a){return this.isValid()?(a=a?Ka(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function $a(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function _a(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ha(a),a._a){var b=a._isUTC?h(a._a):Ka(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ab(){return this.isValid()?!this._isUTC:!1}function bb(){return this.isValid()?this._isUTC:!1}function cb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function db(a,b){var c,d,e,g=a,h=null;return Pa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=je.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[Od])*c,h:r(h[Pd])*c,m:r(h[Qd])*c,s:r(h[Rd])*c,ms:r(h[Sd])*c}):(h=ke.exec(a))?(c="-"===h[1]?-1:1,g={y:eb(h[2],c),M:eb(h[3],c),w:eb(h[4],c),d:eb(h[5],c),h:eb(h[6],c),m:eb(h[7],c),s:eb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=gb(Ka(g.from),Ka(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Oa(g),Pa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function eb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function fb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function gb(a,b){var c;return a.isValid()&&b.isValid()?(b=Sa(b,a),a.isBefore(b)?c=fb(a,b):(c=fb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function hb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}function ib(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(v(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=db(c,d),jb(this,e,a),this}}function jb(b,c,d,e){var f=c._milliseconds,g=hb(c._days),h=hb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&O(b,"Date",N(b,"Date")+g*d),h&&ga(b,N(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function kb(a,b){var c=a||Ka(),d=Sa(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(w(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ka(c)))}function lb(){return new o(this)}function mb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function nb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function ob(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function pb(a,b){var c,d=p(a)?a:Ka(a);return this.isValid()&&d.isValid()?(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function qb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function rb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function sb(a,b,c){var d,e,f,g;return this.isValid()?(d=Sa(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=tb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function tb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function ub(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function vb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():U(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):U(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function wb(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=U(this,b);return this.localeData().postformat(c)}function xb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function yb(a){return this.from(Ka(),a)}function zb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function Ab(a){return this.to(Ka(),a)}function Bb(a){var b;return void 0===a?this._locale._abbr:(b=H(a),null!=b&&(this._locale=b),this)}function Cb(){return this._locale}function Db(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function Eb(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function Fb(){return this._d.valueOf()-6e4*(this._offset||0)}function Gb(){return Math.floor(this.valueOf()/1e3)}function Hb(){return this._offset?new Date(this.valueOf()):this._d}function Ib(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Jb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Kb(){return this.isValid()?this.toISOString():null}function Lb(){return k(this)}function Mb(){return g({},j(this))}function Nb(){return j(this).overflow}function Ob(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Pb(a,b){R(0,[a,a.length],0,b)}function Qb(a){return Ub.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rb(a){return Ub.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Sb(){return xa(this.year(),1,4)}function Tb(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ub(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Vb.call(this,a,b,c,d,e))}function Vb(a,b,c,d,e){var f=va(a,b,c,d,e),g=qa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Wb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Xb(a){return wa(a,this._week.dow,this._week.doy).week}function Yb(){return this._week.dow}function Zb(){return this._week.doy}function $b(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function _b(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function ac(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function bc(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function cc(a){return this._weekdaysShort[a.day()]}function dc(a){return this._weekdaysMin[a.day()]}function ec(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=h([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function fc(a,b,c){var d,e,f;if(this._weekdaysParseExact)return ec.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=h([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function gc(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=ac(a,this.localeData()),this.add(a-b,"d")):b}function hc(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function ic(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function jc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex}function kc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function lc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function mc(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],i=[],j=[],k=[];for(b=0;7>b;b++)c=h([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),i.push(e),j.push(f),k.push(d),k.push(e),k.push(f);for(g.sort(a),i.sort(a),j.sort(a),k.sort(a),b=0;7>b;b++)i[b]=Z(i[b]),j[b]=Z(j[b]),k[b]=Z(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function nc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function oc(){return this.hours()%12||12}function pc(){return this.hours()||24}function qc(a,b){R(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function rc(a,b){return b._meridiemParse}function sc(a){return"p"===(a+"").toLowerCase().charAt(0)}function tc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function uc(a,b){b[Sd]=r(1e3*("0."+a))}function vc(){return this._isUTC?"UTC":""}function wc(){return this._isUTC?"Coordinated Universal Time":""}function xc(a){return Ka(1e3*a)}function yc(){return Ka.apply(null,arguments).parseZone()}function zc(a,b,c){var d=this._calendar[a];return w(d)?d.call(b,c):d}function Ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function Bc(){return this._invalidDate}function Cc(a){return this._ordinal.replace("%d",a)}function Dc(a){return a}function Ec(a,b,c,d){var e=this._relativeTime[c];return w(e)?e(a,b,c,d):e.replace(/%d/i,a)}function Fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return w(c)?c(b):c.replace(/%s/i,b)}function Gc(a,b,c,d){var e=H(),f=h().set(d,b);return e[c](f,a)}function Hc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Gc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Gc(a,d,c,"month");return e}function Ic(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=H(),f=a?e._week.dow:0;if(null!=c)return Gc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Gc(b,(g+f)%7,d,"day");return h}function Jc(a,b){return Hc(a,b,"months")}function Kc(a,b){return Hc(a,b,"monthsShort")}function Lc(a,b,c){return Ic(a,b,c,"weekdays")}function Mc(a,b,c){return Ic(a,b,c,"weekdaysShort")}function Nc(a,b,c){return Ic(a,b,c,"weekdaysMin")}function Oc(){var a=this._data;return this._milliseconds=Le(this._milliseconds),this._days=Le(this._days),this._months=Le(this._months),a.milliseconds=Le(a.milliseconds),a.seconds=Le(a.seconds),a.minutes=Le(a.minutes),a.hours=Le(a.hours),a.months=Le(a.months),a.years=Le(a.years),this}function Pc(a,b,c,d){var e=db(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Qc(a,b){return Pc(this,a,b,1)}function Rc(a,b){return Pc(this,a,b,-1)}function Sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Sc(Vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Uc(g)),h+=e,g-=Sc(Vc(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Uc(a){return 4800*a/146097}function Vc(a){return 146097*a/4800}function Wc(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Yc(a){return function(){return this.as(a)}}function Zc(a){
    return a=K(a),this[a+"s"]()}function $c(a){return function(){return this._data[a]}}function _c(){return q(this.days()/7)}function ad(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function bd(a,b,c){var d=db(a).abs(),e=_e(d.as("s")),f=_e(d.as("m")),g=_e(d.as("h")),h=_e(d.as("d")),i=_e(d.as("M")),j=_e(d.as("y")),k=e<af.s&&["s",e]||1>=f&&["m"]||f<af.m&&["mm",f]||1>=g&&["h"]||g<af.h&&["hh",g]||1>=h&&["d"]||h<af.d&&["dd",h]||1>=i&&["M"]||i<af.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,ad.apply(null,k)}function cd(a,b){return void 0===af[a]?!1:void 0===b?af[a]:(af[a]=b,!0)}function dd(a){var b=this.localeData(),c=bd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ed(){var a,b,c,d=bf(this._milliseconds)/1e3,e=bf(this._days),f=bf(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var fd,gd;gd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var hd=a.momentProperties=[],id=!1,jd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var kd;kd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)f(a,b)&&c.push(b);return c};var ld,md,nd={},od={},pd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,rd={},sd={},td=/\d/,ud=/\d\d/,vd=/\d{3}/,wd=/\d{4}/,xd=/[+-]?\d{6}/,yd=/\d\d?/,zd=/\d\d\d\d?/,Ad=/\d\d\d\d\d\d?/,Bd=/\d{1,3}/,Cd=/\d{1,4}/,Dd=/[+-]?\d{1,6}/,Ed=/\d+/,Fd=/[+-]?\d+/,Gd=/Z|[+-]\d\d:?\d\d/gi,Hd=/Z|[+-]\d\d(?::?\d\d)?/gi,Id=/[+-]?\d+(\.\d{1,3})?/,Jd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Kd={},Ld={},Md=0,Nd=1,Od=2,Pd=3,Qd=4,Rd=5,Sd=6,Td=7,Ud=8;md=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),R("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),W("M",yd),W("MM",yd,ud),W("MMM",function(a,b){return b.monthsShortRegex(a)}),W("MMMM",function(a,b){return b.monthsRegex(a)}),$(["M","MM"],function(a,b){b[Nd]=r(a)-1}),$(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Nd]=e:j(c).invalidMonth=a});var Vd=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Wd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Xd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Yd=Jd,Zd=Jd,$d=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,_d=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ae=/Z|[+-]\d\d(?::?\d\d)?/,be=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ce=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],de=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),R("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),J("year","y"),W("Y",Fd),W("YY",yd,ud),W("YYYY",Cd,wd),W("YYYYY",Dd,xd),W("YYYYYY",Dd,xd),$(["YYYYY","YYYYYY"],Md),$("YYYY",function(b,c){c[Md]=2===b.length?a.parseTwoDigitYear(b):r(b)}),$("YY",function(b,c){c[Md]=a.parseTwoDigitYear(b)}),$("Y",function(a,b){b[Md]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var ee=M("FullYear",!0);a.ISO_8601=function(){};var fe=u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),ge=u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),he=function(){return Date.now?Date.now():+new Date};Qa("Z",":"),Qa("ZZ",""),W("Z",Hd),W("ZZ",Hd),$(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ra(Hd,a)});var ie=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var je=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,ke=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;db.fn=Oa.prototype;var le=ib(1,"add"),me=ib(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ne=u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Pb("gggg","weekYear"),Pb("ggggg","weekYear"),Pb("GGGG","isoWeekYear"),Pb("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),W("G",Fd),W("g",Fd),W("GG",yd,ud),W("gg",yd,ud),W("GGGG",Cd,wd),W("gggg",Cd,wd),W("GGGGG",Dd,xd),W("ggggg",Dd,xd),_(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),_(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),R("Q",0,"Qo","quarter"),J("quarter","Q"),W("Q",td),$("Q",function(a,b){b[Nd]=3*(r(a)-1)}),R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),W("w",yd),W("ww",yd,ud),W("W",yd),W("WW",yd,ud),_(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var oe={dow:0,doy:6};R("D",["DD",2],"Do","date"),J("date","D"),W("D",yd),W("DD",yd,ud),W("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),$(["D","DD"],Od),$("Do",function(a,b){b[Od]=r(a.match(yd)[0],10)});var pe=M("Date",!0);R("d",0,"do","day"),R("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),R("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),R("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),W("d",yd),W("e",yd),W("E",yd),W("dd",function(a,b){return b.weekdaysMinRegex(a)}),W("ddd",function(a,b){return b.weekdaysShortRegex(a)}),W("dddd",function(a,b){return b.weekdaysRegex(a)}),_(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),_(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var qe="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),re="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),se="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),te=Jd,ue=Jd,ve=Jd;R("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),W("DDD",Bd),W("DDDD",vd),$(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),R("H",["HH",2],0,"hour"),R("h",["hh",2],0,oc),R("k",["kk",2],0,pc),R("hmm",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)}),R("hmmss",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)+Q(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+Q(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+Q(this.minutes(),2)+Q(this.seconds(),2)}),qc("a",!0),qc("A",!1),J("hour","h"),W("a",rc),W("A",rc),W("H",yd),W("h",yd),W("HH",yd,ud),W("hh",yd,ud),W("hmm",zd),W("hmmss",Ad),W("Hmm",zd),W("Hmmss",Ad),$(["H","HH"],Pd),$(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),$(["h","hh"],function(a,b,c){b[Pd]=r(a),j(c).bigHour=!0}),$("hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d)),j(c).bigHour=!0}),$("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e)),j(c).bigHour=!0}),$("Hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d))}),$("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e))});var we=/[ap]\.?m?\.?/i,xe=M("Hours",!0);R("m",["mm",2],0,"minute"),J("minute","m"),W("m",yd),W("mm",yd,ud),$(["m","mm"],Qd);var ye=M("Minutes",!1);R("s",["ss",2],0,"second"),J("second","s"),W("s",yd),W("ss",yd,ud),$(["s","ss"],Rd);var ze=M("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),W("S",Bd,td),W("SS",Bd,ud),W("SSS",Bd,vd);var Ae;for(Ae="SSSS";Ae.length<=9;Ae+="S")W(Ae,Ed);for(Ae="S";Ae.length<=9;Ae+="S")$(Ae,uc);var Be=M("Milliseconds",!1);R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var Ce=o.prototype;Ce.add=le,Ce.calendar=kb,Ce.clone=lb,Ce.diff=sb,Ce.endOf=Eb,Ce.format=wb,Ce.from=xb,Ce.fromNow=yb,Ce.to=zb,Ce.toNow=Ab,Ce.get=P,Ce.invalidAt=Nb,Ce.isAfter=mb,Ce.isBefore=nb,Ce.isBetween=ob,Ce.isSame=pb,Ce.isSameOrAfter=qb,Ce.isSameOrBefore=rb,Ce.isValid=Lb,Ce.lang=ne,Ce.locale=Bb,Ce.localeData=Cb,Ce.max=ge,Ce.min=fe,Ce.parsingFlags=Mb,Ce.set=P,Ce.startOf=Db,Ce.subtract=me,Ce.toArray=Ib,Ce.toObject=Jb,Ce.toDate=Hb,Ce.toISOString=vb,Ce.toJSON=Kb,Ce.toString=ub,Ce.unix=Gb,Ce.valueOf=Fb,Ce.creationData=Ob,Ce.year=ee,Ce.isLeapYear=ta,Ce.weekYear=Qb,Ce.isoWeekYear=Rb,Ce.quarter=Ce.quarters=Wb,Ce.month=ha,Ce.daysInMonth=ia,Ce.week=Ce.weeks=$b,Ce.isoWeek=Ce.isoWeeks=_b,Ce.weeksInYear=Tb,Ce.isoWeeksInYear=Sb,Ce.date=pe,Ce.day=Ce.days=gc,Ce.weekday=hc,Ce.isoWeekday=ic,Ce.dayOfYear=nc,Ce.hour=Ce.hours=xe,Ce.minute=Ce.minutes=ye,Ce.second=Ce.seconds=ze,Ce.millisecond=Ce.milliseconds=Be,Ce.utcOffset=Ua,Ce.utc=Wa,Ce.local=Xa,Ce.parseZone=Ya,Ce.hasAlignedHourOffset=Za,Ce.isDST=$a,Ce.isDSTShifted=_a,Ce.isLocal=ab,Ce.isUtcOffset=bb,Ce.isUtc=cb,Ce.isUTC=cb,Ce.zoneAbbr=vc,Ce.zoneName=wc,Ce.dates=u("dates accessor is deprecated. Use date instead.",pe),Ce.months=u("months accessor is deprecated. Use month instead",ha),Ce.years=u("years accessor is deprecated. Use year instead",ee),Ce.zone=u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Va);var De=Ce,Ee={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Fe={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ge="Invalid date",He="%d",Ie=/\d{1,2}/,Je={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ke=A.prototype;Ke._calendar=Ee,Ke.calendar=zc,Ke._longDateFormat=Fe,Ke.longDateFormat=Ac,Ke._invalidDate=Ge,Ke.invalidDate=Bc,Ke._ordinal=He,Ke.ordinal=Cc,Ke._ordinalParse=Ie,Ke.preparse=Dc,Ke.postformat=Dc,Ke._relativeTime=Je,Ke.relativeTime=Ec,Ke.pastFuture=Fc,Ke.set=y,Ke.months=ca,Ke._months=Wd,Ke.monthsShort=da,Ke._monthsShort=Xd,Ke.monthsParse=fa,Ke._monthsRegex=Zd,Ke.monthsRegex=ka,Ke._monthsShortRegex=Yd,Ke.monthsShortRegex=ja,Ke.week=Xb,Ke._week=oe,Ke.firstDayOfYear=Zb,Ke.firstDayOfWeek=Yb,Ke.weekdays=bc,Ke._weekdays=qe,Ke.weekdaysMin=dc,Ke._weekdaysMin=se,Ke.weekdaysShort=cc,Ke._weekdaysShort=re,Ke.weekdaysParse=fc,Ke._weekdaysRegex=te,Ke.weekdaysRegex=jc,Ke._weekdaysShortRegex=ue,Ke.weekdaysShortRegex=kc,Ke._weekdaysMinRegex=ve,Ke.weekdaysMinRegex=lc,Ke.isPM=sc,Ke._meridiemParse=we,Ke.meridiem=tc,E("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=u("moment.lang is deprecated. Use moment.locale instead.",E),a.langData=u("moment.langData is deprecated. Use moment.localeData instead.",H);var Le=Math.abs,Me=Yc("ms"),Ne=Yc("s"),Oe=Yc("m"),Pe=Yc("h"),Qe=Yc("d"),Re=Yc("w"),Se=Yc("M"),Te=Yc("y"),Ue=$c("milliseconds"),Ve=$c("seconds"),We=$c("minutes"),Xe=$c("hours"),Ye=$c("days"),Ze=$c("months"),$e=$c("years"),_e=Math.round,af={s:45,m:45,h:22,d:26,M:11},bf=Math.abs,cf=Oa.prototype;cf.abs=Oc,cf.add=Qc,cf.subtract=Rc,cf.as=Wc,cf.asMilliseconds=Me,cf.asSeconds=Ne,cf.asMinutes=Oe,cf.asHours=Pe,cf.asDays=Qe,cf.asWeeks=Re,cf.asMonths=Se,cf.asYears=Te,cf.valueOf=Xc,cf._bubble=Tc,cf.get=Zc,cf.milliseconds=Ue,cf.seconds=Ve,cf.minutes=We,cf.hours=Xe,cf.days=Ye,cf.weeks=_c,cf.months=Ze,cf.years=$e,cf.humanize=dd,cf.toISOString=ed,cf.toString=ed,cf.toJSON=ed,cf.locale=Bb,cf.localeData=Cb,cf.toIsoString=u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ed),cf.lang=ne,R("X",0,0,"unix"),R("x",0,0,"valueOf"),W("x",Fd),W("X",Id),$("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),$("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.13.0",b(Ka),a.fn=De,a.min=Ma,a.max=Na,a.now=he,a.utc=h,a.unix=xc,a.months=Jc,a.isDate=d,a.locale=E,a.invalid=l,a.duration=db,a.isMoment=p,a.weekdays=Lc,a.parseZone=yc,a.localeData=H,a.isDuration=Pa,a.monthsShort=Kc,a.weekdaysMin=Nc,a.defineLocale=F,a.updateLocale=G,a.locales=I,a.weekdaysShort=Mc,a.normalizeUnits=K,a.relativeTimeThreshold=cd,a.prototype=De;var df=a;return df});

//# sourceMappingURL=vendor.js.map
