(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/*!
 * Knockout JavaScript library v3.5.0-beta
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),x=A.document,O=A.navigator,w=A.jQuery,F=A.JSON;(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(A.ko={})})(function(P,Q){function K(a,c){return null===a||typeof a in U?a===c:!1}function V(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function W(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function X(a,
c){c&&"change"!==c?"beforeChange"===c?this.gc(a):this.$a(a,c):this.hc(a)}function Y(a,c){null!==c&&c.m&&c.m()}function Z(a,c){var d=this.nd,e=d[u];e.pa||(this.Jb&&this.ib[c]?(d.mc(c,a,this.ib[c]),this.ib[c]=null,--this.Jb):e.F[c]||d.mc(c,a,e.K?{ha:a}:d.Wc(a)),a.Ia&&a.fd())}function M(b,c,d){a.f[b]={init:function(b,f,g,h,l){var k,m=g.get("as"),q=!c||m&&!a.options.createChildContextWithAs,p=q&&a.s(function(){return!d!==!a.a.c(f())},null,{j:b});a.s(function(){var d=!q&&a.a.c(f()),v=q?p():!!d,g=!k;g&&
a.ja.Ea()&&(k=a.a.Aa(a.h.childNodes(b),!0));v?(g||a.h.ta(b,a.a.Aa(k)),a.Na(c?l.createChildContext("function"==typeof d?d:f,m):p.fa()?l.extend(function(){p();return null}):l,b)):a.h.Ca(b)},null,{j:b});return{controlsDescendantBindings:!0}}};a.l.Qa[b]=!1;a.h.ca[b]=!0}var a="undefined"!==typeof P?P:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.I=function(a,c,d){a[c]=d};a.version="3.5.0-beta";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,
createChildContextWithAs:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var m=b[c].match(p)||[];a.a.B(d.match(p),function(b){a.a.Ma(m,b,e)});b[c]=m.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,l={},k={};l[O&&/Firefox\/2/i.test(O.userAgent)?"KeyboardEvent":
"UIEvents"]=["keyup","keydown","keypress"];l.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(l,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var m={propertychange:!0},q=x&&function(){for(var a=3,b=x.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),p=/\S+/g,r;return{Dc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
B:function(a,b,c){if(a)if("function"==typeof a.forEach)a.forEach(b,c);else for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},D:function(a,b){if(a){if("function"==typeof a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c}return-1},pc:function(a,b,c){if(a){if("function"==typeof a.find)return a.find(b,c);for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d]}return n},Oa:function(b,c){var d=a.a.D(b,c);0<d?b.splice(d,1):0===d&&b.shift()},qc:function(b){var c=
[];b&&a.a.B(b,function(b){0>a.a.D(c,b)&&c.push(b)});return c},Gb:function(a,b,c){if(a&&"function"==typeof a.map)return a.map(b,c);var d=[];if(a)for(var e=0,m=a.length;e<m;e++)d.push(b.call(c,a[e],e));return d},cb:function(a,b,c){if(a&&"function"==typeof a.filter)return a.filter(b,c);var d=[];if(a)for(var e=0,m=a.length;e<m;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},eb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Ma:function(b,c,
d){var e=a.a.D(a.a.Sb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},za:g,extend:c,setPrototypeOf:d,wb:g?d:c,N:b,Fa:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=b.call(c,a[e],e,a));return d},Mb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Pb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||x).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Aa:function(b,c){for(var d=0,e=b.length,m=[];d<e;d++){var f=b[d].cloneNode(!0);m.push(c?
a.oa(f):f)}return m},ta:function(b,c){a.a.Mb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Tc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],m=e.parentNode,f=0,g=c.length;f<g;f++)m.insertBefore(c[f],e);f=0;for(g=d.length;f<g;f++)a.removeNode(d[f])}},Ta:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=
0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Vc:function(a,b){7>q?a.setAttribute("selected",b):a.selected=b},yb:function(a){return null===a||a===n?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},ud:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&
16);for(;a&&a!=b;)a=a.parentNode;return!!a},Lb:function(b){return a.a.ud(b,b.ownerDocument.documentElement)},nc:function(b){return!!a.a.pc(b,a.a.Lb)},O:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},tc:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.tc(b),c)},zc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},H:function(b,c,d){var e=a.a.tc(d);
d=m[c];if(a.options.useOnlyNativeEvents||d||!w)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var f=function(a){e.call(b,a)},g="on"+c;b.attachEvent(g,f);a.a.G.na(b,function(){b.detachEvent(g,f)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else r||(r="function"==typeof w(b).on?"on":"bind"),w(b)[r](c,e)},Bb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
var d;"input"===a.a.O(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!w||d)if("function"==typeof x.createEvent)if("function"==typeof b.dispatchEvent)d=x.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");
else w(b).trigger(c)},c:function(b){return a.M(b)?b():b},Sb:function(b){return a.M(b)?b.w():b},Ab:function(b,c,d){var m;c&&("object"===typeof b.classList?(m=b.classList[d?"add":"remove"],a.a.B(c.match(p),function(a){m.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},xb:function(b,c){var d=a.a.c(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.ta(b,[b.ownerDocument.createTextNode(d)]):e.data=
d;a.a.zd(b)},Uc:function(a,b){a.name=b;if(7>=q)try{a.mergeAttributes(x.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},zd:function(a){9<=q&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},vd:function(a){if(q){var b=a.style.width;a.style.width=0;a.style.width=b}},Od:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Ra:function(a){return h?Symbol(a):a},Yd:6===
q,Zd:7===q,U:q,Fc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},m=[],f=d.length-1;0<=f;f--)e(d[f])&&m.push(d[f]);return m},Md:function(b){return"string"==typeof b&&(b=a.a.yb(b))?F&&F.parse?F.parse(b):(new Function("return "+b))():null},Zb:function(b,c,d){if(!F||!F.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return F.stringify(a.a.c(b),c,d)},Nd:function(c,d,e){e=e||{};var m=e.params||{},f=e.includeFields||this.Dc,g=c;if("object"==typeof c&&"form"===a.a.O(c))for(var g=c.action,k=f.length-1;0<=k;k--)for(var l=a.a.Fc(c,f[k]),q=l.length-1;0<=q;q--)m[l[q].name]=l[q].value;d=a.a.c(d);var h=x.createElement("form");h.style.display="none";h.action=g;h.method="post";for(var p in d)c=x.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.Zb(a.a.c(d[p])),h.appendChild(c);b(m,function(a,b){var c=x.createElement("input");
c.type="hidden";c.name=a;c.value=b;h.appendChild(c)});x.body.appendChild(h);e.submitter?e.submitter(h):h.submit();setTimeout(function(){h.parentNode.removeChild(h)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.B);a.b("utils.arrayFirst",a.a.pc);a.b("utils.arrayFilter",a.a.cb);a.b("utils.arrayGetDistinctValues",a.a.qc);a.b("utils.arrayIndexOf",a.a.D);a.b("utils.arrayMap",a.a.Gb);a.b("utils.arrayPushAll",a.a.eb);a.b("utils.arrayRemoveItem",a.a.Oa);a.b("utils.cloneNodes",a.a.Aa);a.b("utils.createSymbolOrString",
a.a.Ra);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Dc);a.b("utils.getFormFields",a.a.Fc);a.b("utils.objectMap",a.a.Fa);a.b("utils.peekObservable",a.a.Sb);a.b("utils.postJson",a.a.Nd);a.b("utils.parseJson",a.a.Md);a.b("utils.registerEventHandler",a.a.H);a.b("utils.stringifyJson",a.a.Zb);a.b("utils.range",a.a.Od);a.b("utils.toggleDomNodeCssClass",a.a.Ab);a.b("utils.triggerEvent",a.a.Bb);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.N);a.b("utils.addOrRemoveItem",
a.a.Ma);a.b("utils.setTextContent",a.a.xb);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.U?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Gc:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,W:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.G=new function(){function b(b,c){var e=a.a.g.get(b,d);
e===n&&c&&(e=[],a.a.g.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.g.clear(d);a.a.G.cleanExternalData(d);if(f[d.nodeType])for(d=d.childNodes,l=0;l<d.length;l++)if(8===d[l].nodeType&&(c(e=d[l]),d[l]!==e))throw Error("ko.cleanNode: An already cleaned node was removed from the document");}var d=a.a.g.W(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{na:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},
ub:function(c,e){var f=b(c,!1);f&&(a.a.Oa(f,e),0==f.length&&a.a.g.set(c,d,n))},oa:function(a){if(e[a.nodeType]&&(c(a),f[a.nodeType]))for(var b=a.getElementsByTagName("*"),d,k=0;k<b.length;k++)if(c(d=b[k]),b[k]!==d)throw Error("ko.cleanNode: An already cleaned node was removed from the document");return a},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){w&&"function"==typeof w.cleanData&&w.cleanData([a])}}};a.oa=a.a.G.oa;a.removeNode=a.a.G.removeNode;
a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.na);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.ub);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.U;a.a.sa=function(c,d){var e;if(w)if(w.parseHTML)e=
w.parseHTML(c,d)||[];else{if((e=w.clean([c],d))&&e[0]){for(var m=e[0];m.parentNode&&11!==m.parentNode.nodeType;)m=m.parentNode;m.parentNode&&m.parentNode.removeChild(m)}}else{(e=d)||(e=x);var m=e.parentWindow||e.defaultView||A,q=a.a.yb(c).toLowerCase(),p=e.createElement("div"),r;r=(q=q.match(/^<([a-z]+)[ >]/))&&f[q[1]]||b;q=r[0];r="ignored<div>"+r[1]+c+r[2]+"</div>";"function"==typeof m.innerShiv?p.appendChild(m.innerShiv(r)):(g&&e.body.appendChild(p),p.innerHTML=r,g&&p.parentNode.removeChild(p));
for(;q--;)p=p.lastChild;e=a.a.la(p.lastChild.childNodes)}return e};a.a.Ld=function(b,c){var d=a.a.sa(b,c);return d.length&&d[0].parentElement||a.a.Pb(d)};a.a.Xb=function(b,c){a.a.Mb(b);c=a.a.c(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),w)w(b).html(c);else for(var d=a.a.sa(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.sa);a.b("utils.setHtml",a.a.Xb);a.$=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.$.Qc(c.nodeValue);
null!=f&&e.push({sd:c,Jd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],e)}var c={};return{Ob:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Yc:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");
try{return f.apply(null,b||[]),!0}finally{delete c[a]}},Zc:function(c,e){var f=[];b(c,f);for(var g=0,h=f.length;g<h;g++){var l=f[g].sd,k=[l];e&&a.a.eb(k,e);a.$.Yc(f[g].Jd,k);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},Qc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.$);a.b("memoization.memoize",a.$.Ob);a.b("memoization.unmemoize",a.$.Yc);a.b("memoization.parseMemoText",a.$.Qc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.$.Zc);a.ma=function(){function b(){if(f)for(var b=
f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=++c){h=f;a.a.zc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(q){a.a.zc(q)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=x.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=x&&"onreadystatechange"in x.createElement("script")?function(a){var b=x.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;x.documentElement.removeChild(b);b=null;a()};x.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,vb:function(b){f||a.ma.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Rd:b}}();a.b("tasks",a.ma);a.b("tasks.schedule",a.ma.vb);a.b("tasks.runEarly",a.ma.Rd);a.Sa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.T({read:b,
write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Db=!1;f="notifyWhenChangesStop"==e?W:V;a.rb(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Db||(b.Db=!0,b.rb(function(c){var e,f=!1;return function(){if(!f){a.ma.cancel(e);e=a.ma.vb(c);try{f=!0,
b.notifySubscribers(n,"dirty")}finally{f=!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var U={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Sa);a.$b=function(b,c,d){this.ha=b;this.bd=c;this.dd=d;this.fc=!1;this.Eb=this.ic=null;a.I(this,"dispose",this.m);a.I(this,"disposeWhenNodeIsRemoved",this.j)};a.$b.prototype.m=function(){this.Eb&&a.a.G.ub(this.ic,this.Eb);this.fc=!0;this.dd()};a.$b.prototype.j=function(b){this.ic=b;a.a.G.na(b,this.Eb=this.m.bind(this))};
a.R=function(){a.a.wb(this,D);D.mb(this)};var D={mb:function(a){a.S={change:[]};a.kc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.$b(e,c?b.bind(c):b,function(){a.a.Oa(e.S[d],f);e.ab&&e.ab(d)});e.Pa&&e.Pa(d);e.S[d]||(e.S[d]=[]);e.S[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Cb();if(this.Ua(c)){var d="change"===c&&this.cd||this.S[c].slice(0);try{a.u.rc();for(var e=0,f;f=d[e];++e)f.fc||f.bd(b)}finally{a.u.end()}}},lb:function(){return this.kc},
Cd:function(a){return this.lb()!==a},Cb:function(){++this.kc},rb:function(b){var c=this,d=a.M(c),e,f,g,h,l;c.$a||(c.$a=c.notifySubscribers,c.notifySubscribers=X);var k=b(function(){c.Ia=!1;d&&h===c&&(h=c.dc?c.dc():c());var a=f||l&&c.ob(g,h);l=f=e=!1;a&&c.$a(g=h)});c.hc=function(a,b){b&&c.Ia||(l=!b);c.cd=c.S.change.slice(0);c.Ia=e=!0;h=a;k()};c.gc=function(a){e||(g=a,c.$a(a,"beforeChange"))};c.jc=function(){l=!0};c.fd=function(){c.ob(g,c.w(!0))&&(f=!0)}},Ua:function(a){return this.S[a]&&this.S[a].length},
Ad:function(b){if(b)return this.S[b]&&this.S[b].length||0;var c=0;a.a.N(this.S,function(a,b){"dirty"!==a&&(c+=b.length)});return c},ob:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.N(b,function(b,e){var f=a.Sa[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.I(D,"init",D.mb);a.I(D,"subscribe",D.subscribe);a.I(D,"extend",D.extend);a.I(D,"getSubscriptionsCount",D.Ad);a.a.za&&a.a.setPrototypeOf(D,
Function.prototype);a.R.fn=D;a.Mc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.R);a.b("isSubscribable",a.Mc);a.ja=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{rc:b,end:c,Ub:function(b){if(e){if(!a.Mc(b))throw Error("Only subscribable things can act as dependencies");e.ld.call(e.md,b,b.ed||(b.ed=++f))}},J:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Ea:function(){if(e)return e.s.Ea()},
kb:function(){if(e)return e.s.kb()},pb:function(){if(e)return e.pb}}}();a.b("computedContext",a.ja);a.b("computedContext.getDependenciesCount",a.ja.Ea);a.b("computedContext.getDependencies",a.ja.kb);a.b("computedContext.isInitial",a.ja.pb);a.b("computedContext.registerDependency",a.ja.Ub);a.b("ignoreDependencies",a.Xd=a.u.J);var H=a.a.Ra("_latestValue");a.ga=function(b){function c(){if(0<arguments.length)return c.ob(c[H],arguments[0])&&(c.wa(),c[H]=arguments[0],c.va()),this;a.u.Ub(c);return c[H]}
c[H]=b;a.a.za||a.a.extend(c,a.R.fn);a.R.fn.mb(c);a.a.wb(c,E);a.options.deferUpdates&&a.Sa.deferred(c,!0);return c};var E={equalityComparer:K,w:function(){return this[H]},va:function(){this.notifySubscribers(this[H],"spectate");this.notifySubscribers(this[H])},wa:function(){this.notifySubscribers(this[H],"beforeChange")}};a.a.za&&a.a.setPrototypeOf(E,a.R.fn);var J=a.ga.La="__ko_proto__";E[J]=a.ga;a.M=function(b){if((b="function"==typeof b&&b[J])&&b!==a.ga&&b!==a.s)throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Wa=function(b){return"function"==typeof b&&(b[J]===a.ga||b[J]===a.s&&b.Ic)};a.b("observable",a.ga);a.b("isObservable",a.M);a.b("isWriteableObservable",a.Wa);a.b("isWritableObservable",a.Wa);a.b("observable.fn",E);a.I(E,"peek",E.w);a.I(E,"valueHasMutated",E.va);a.I(E,"valueWillMutate",E.wa);a.Ga=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ga(b);a.a.wb(b,
a.Ga.fn);return b.extend({trackArrayChanges:!0})};a.Ga.fn={remove:function(b){for(var c=this.w(),d=[],e="function"!=typeof b||a.M(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.wa();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.va();return d},removeAll:function(b){if(b===n){var c=this.w(),d=c.slice(0);this.wa();c.splice(0,c.length);this.va();return d}return b?this.remove(function(c){return 0<=
a.a.D(b,c)}):[]},destroy:function(b){var c=this.w(),d="function"!=typeof b||a.M(b)?function(a){return a===b}:b;this.wa();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.va()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.D(b,c)}):[]},indexOf:function(b){var c=this();return a.a.D(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.wa(),this.w()[d]=c,this.va())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.za&&a.a.setPrototypeOf(a.Ga.fn,a.ga.fn);a.a.B("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ga.fn[b]=function(){var a=this.w();this.wa();this.sc(a,b,arguments);var d=a[b].apply(a,arguments);this.va();return d===a?this:d}});a.a.B(["slice"],function(b){a.Ga.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Lc=function(b){return a.M(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ga);a.b("isObservableArray",a.Lc);a.Sa.trackArrayChanges=function(b,c){function d(){if(!e){e=!0;l=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&"change"!==b||++h;return l.apply(this,arguments)};var c=[].concat(b.w()||[]);f=null;g=b.subscribe(function(d){d=[].concat(d||[]);if(b.Ua("arrayChange")){var e;if(!f||1<h)f=a.a.Ib(c,d,b.Hb);e=f}c=d;f=null;h=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")})}}b.Hb={};c&&"object"==typeof c&&a.a.extend(b.Hb,
c);b.Hb.sparse=!0;if(!b.sc){var e=!1,f=null,g,h=0,l,k=b.Pa,m=b.ab;b.Pa=function(a){k&&k.call(b,a);"arrayChange"===a&&d()};b.ab=function(a){m&&m.call(b,a);"arrayChange"!==a||b.Ua("arrayChange")||(l&&(b.notifySubscribers=l,l=n),g&&g.m(),g=null,e=!1)};b.sc=function(b,c,d){function m(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!h){var k=[],g=b.length,l=d.length,I=0;switch(c){case "push":I=g;case "unshift":for(c=0;c<l;c++)m("added",d[c],I+c);break;case "pop":I=g-1;case "shift":g&&m("deleted",
b[I],I);break;case "splice":c=Math.min(Math.max(0,0>d[0]?g+d[0]:d[0]),g);for(var g=1===l?g:Math.min(c+(d[1]||0),g),l=c+l-2,I=Math.max(g,l),R=[],L=[],n=2;c<I;++c,++n)c<g&&L.push(m("deleted",b[c],c)),c<l&&R.push(m("added",d[n],c));a.a.Ec(L,R);break;default:return}f=k}}}};var u=a.a.Ra("_state");a.s=a.T=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.jb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}g.pa||a.u.Ub(e);(g.ka||g.K&&e.Va())&&e.ea();return g.V}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={V:n,qa:!0,ka:!0,nb:!1,ac:!1,pa:!1,tb:!1,K:!1,Sc:d.read,jb:c||d.owner,j:d.disposeWhenNodeIsRemoved||d.j||null,Ba:d.disposeWhen||d.Ba,Kb:null,F:{},Z:0,Cc:null};e[u]=g;e.Ic="function"===typeof f;a.a.za||a.a.extend(e,a.R.fn);a.R.fn.mb(e);a.a.wb(e,B);d.pure?(g.tb=!0,g.K=!0,
a.a.extend(e,aa)):d.deferEvaluation&&a.a.extend(e,ba);a.options.deferUpdates&&a.Sa.deferred(e,!0);g.j&&(g.ac=!0,g.j.nodeType||(g.j=null));g.K||d.deferEvaluation||e.ea();g.j&&e.fa()&&a.a.G.na(g.j,g.Kb=function(){e.m()});return e};var B={equalityComparer:K,Ea:function(){return this[u].Z},kb:function(){var b=[];a.a.N(this[u].F,function(a,d){b[d.Ja]=d.ha});return b},mc:function(a,c,d){if(this[u].tb&&c===this)throw Error("A 'pure' computed must not be called recursively");this[u].F[a]=d;d.Ja=this[u].Z++;
d.Ka=c.lb()},Va:function(){var a,c,d=this[u].F;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ha&&c.ha.Ia||c.ha.Cd(c.Ka)))return!0},Id:function(){this.Ha&&!this[u].nb&&this.Ha(!1)},fa:function(){var a=this[u];return a.ka||0<a.Z},Qd:function(){this.Ia?this[u].ka&&(this[u].qa=!0):this.Bc()},Wc:function(a){if(a.Db){var c=a.subscribe(this.Id,this,"dirty"),d=a.subscribe(this.Qd,this);return{ha:a,m:function(){c.m();d.m()}}}return a.subscribe(this.Bc,this)},Bc:function(){var b=this,
c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[u].Cc),this[u].Cc=a.a.setTimeout(function(){b.ea(!0)},c)):b.Ha?b.Ha(!0):b.ea(!0)},ea:function(b){var c=this[u],d=c.Ba,e=!1;if(!c.nb&&!c.pa){if(c.j&&!a.a.Lb(c.j)||d&&d()){if(!c.ac){this.m();return}}else c.ac=!1;c.nb=!0;try{e=this.yd(b)}finally{c.nb=!1}return e}},yd:function(b){var c=this[u],d=!1,e=c.tb?n:!c.Z,d={nd:this,ib:c.F,Jb:c.Z};a.u.rc({md:d,ld:Z,s:this,pb:e});c.F={};c.Z=0;var f=this.xd(c,d);c.Z?d=this.ob(c.V,f):(this.m(),d=!0);d&&(c.K?this.Cb():
this.notifySubscribers(c.V,"beforeChange"),c.V=f,this.notifySubscribers(c.V,"spectate"),!c.K&&b&&this.notifySubscribers(c.V),this.jc&&this.jc());e&&this.notifySubscribers(c.V,"awake");return d},xd:function(b,c){try{var d=b.Sc;return b.jb?d.call(b.jb):d()}finally{a.u.end(),c.Jb&&!b.K&&a.a.N(c.ib,Y),b.qa=b.ka=!1}},w:function(a){var c=this[u];(c.ka&&(a||!c.Z)||c.K&&this.Va())&&this.ea();return c.V},rb:function(b){a.R.fn.rb.call(this,b);this.dc=function(){this[u].qa?this.ea():this[u].ka=!1;return this[u].V};
this.Ha=function(a){this.gc(this[u].V);this[u].ka=!0;a&&(this[u].qa=!0);this.hc(this,!a)}},m:function(){var b=this[u];!b.K&&b.F&&a.a.N(b.F,function(a,b){b.m&&b.m()});b.j&&b.Kb&&a.a.G.ub(b.j,b.Kb);b.F=n;b.Z=0;b.pa=!0;b.qa=!1;b.ka=!1;b.K=!1;b.j=n;b.Ba=n;b.Sc=n;this.Ic||(b.jb=n)}},aa={Pa:function(b){var c=this,d=c[u];if(!d.pa&&d.K&&"change"==b){d.K=!1;if(d.qa||c.Va())d.F=null,d.Z=0,c.ea()&&c.Cb();else{var e=[];a.a.N(d.F,function(a,b){e[b.Ja]=a});a.a.B(e,function(a,b){var e=d.F[a],l=c.Wc(e.ha);l.Ja=b;
l.Ka=e.Ka;d.F[a]=l});c.Va()&&c.ea()&&c.Cb()}d.pa||c.notifySubscribers(d.V,"awake")}},ab:function(b){var c=this[u];c.pa||"change"!=b||this.Ua("change")||(a.a.N(c.F,function(a,b){b.m&&(c.F[a]={ha:b.ha,Ja:b.Ja,Ka:b.Ka},b.m())}),c.K=!0,this.notifySubscribers(n,"asleep"))},lb:function(){var b=this[u];b.K&&(b.qa||this.Va())&&this.ea();return a.R.fn.lb.call(this)}},ba={Pa:function(a){"change"!=a&&"beforeChange"!=a||this.w()}};a.a.za&&a.a.setPrototypeOf(B,a.R.fn);var S=a.ga.La;B[S]=a.s;a.Kc=function(b){return"function"==
typeof b&&b[S]===a.s};a.Ed=function(b){return a.Kc(b)&&b[u]&&b[u].tb};a.b("computed",a.s);a.b("dependentObservable",a.s);a.b("isComputed",a.Kc);a.b("isPureComputed",a.Ed);a.b("computed.fn",B);a.I(B,"peek",B.w);a.I(B,"dispose",B.m);a.I(B,"isActive",B.fa);a.I(B,"getDependenciesCount",B.Ea);a.I(B,"getDependencies",B.kb);a.Tb=function(b,c){if("function"===typeof b)return a.s(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.s(b,c)};a.b("pureComputed",a.Tb);(function(){function b(a,f,g){g=g||new d;
a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var m=g.get(d);h[c]=m!==n?m:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&
b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.Xc=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.M(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Xc(b);return a.a.Zb(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.D(this.keys,b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.D(this.keys,b);return 0<=b?this.values[b]:
n}}})();a.b("toJS",a.Xc);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){b=a.Tb(b).extend({Ya:"always"});var e=b.subscribe(function(a){a&&(e.m(),c.call(d))});b.notifySubscribers(b.w());return e};a.b("when",a.Wd);(function(){a.o={L:function(b){switch(a.a.O(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.g.get(b,a.f.options.Qb):7>=a.a.U?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.o.L(b.options[b.selectedIndex]):
n;default:return b.value}},xa:function(b,c,d){switch(a.a.O(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.f.options.Qb,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.f.options.Qb,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.o.L(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=
e,6===a.a.U&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.o);a.b("selectExtensions.readValue",a.o.L);a.b("selectExtensions.writeValue",a.o.xa);a.l=function(){function b(b){b=a.a.yb(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));b+="\n,";var c=[],d=b.match(e),q,p=[],h=0;if(1<d.length)for(var v=0,y;y=d[v];++v){var t=y.charCodeAt(0);if(44===t){if(0>=h){c.push(q&&p.length?{key:q,value:p.join("")}:{unknown:q||p.join("")});
q=h=0;p=[];continue}}else if(58===t){if(!h&&!q&&1===p.length){q=p.pop();continue}}else if(47===t&&1<y.length&&(47===y.charCodeAt(1)||42===y.charCodeAt(1)))continue;else 47===t&&v&&1<y.length?(t=d[v-1].match(f))&&!g[t[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),v=-1,y="/"):40===t||123===t||91===t?++h:41===t||125===t||93===t?--h:q||p.length||34!==t&&39!==t||(y=y.slice(1,-1));p.push(y)}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]",
"g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},h={};return{Qa:[],ua:h,Rb:b,sb:function(e,f){function m(b,e){var f;if(!v){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,m)))return;if(k=h[b])f=e,0<=a.a.D(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&g.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}r&&(e="function(){return "+e+" }");q.push("'"+b+"':"+e)}f=f||{};var q=[],g=[],r=f.valueAccessors,v=f.bindingParams,
y="string"===typeof e?b(e):e;a.a.B(y,function(a){m(a.key||a.unknown,a.value)});g.length&&m("_ko_property_writers","{"+g.join(",")+" }");return q.join(",")},Hd:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Za:function(b,c,d,e,f){if(b&&a.M(b))!a.Wa(b)||f&&b.w()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.l);a.b("expressionRewriting.bindingRewriteValidators",a.l.Qa);a.b("expressionRewriting.parseObjectLiteral",a.l.Rb);
a.b("expressionRewriting.preProcessBindings",a.l.sb);a.b("expressionRewriting._twoWayBindings",a.l.ua);a.b("jsonExpressionRewriting",a.l);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.l.sb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,g=1,h=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),g--,0===g))return h;h.push(f);b(f)&&g++}if(!e)throw Error("Cannot find closing comment tag to match: "+
d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=x&&"\x3c!--test--\x3e"===x.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ca:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ca:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Mb(c)},
ta:function(c,d){if(b(c)){a.h.Ca(c);for(var e=c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.ta(c,d)},Rc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Jc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.h.Rc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&
c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Bd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Oc:function(d){if(l[a.a.O(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=
f.firstChild;var g=null;if(k){do if(g)g.push(k);else if(b(k)){var h=e(k,!0);h?k=h:g=[k]}else c(k)&&(g=[k]);while(k=k.nextSibling)}if(k=g)for(g=f.nextSibling,h=0;h<k.length;h++)g?d.insertBefore(k[h],g):d.appendChild(k[h])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ca);a.b("virtualElements.emptyNode",a.h.Ca);a.b("virtualElements.insertAfter",a.h.Jc);a.b("virtualElements.prepend",a.h.Rc);a.b("virtualElements.setDomNodeChildren",a.h.ta);(function(){a.da=
function(){this.kd={}};a.a.extend(a.da.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.i.getComponentNameForNode(b);case 8:return a.h.Bd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.i.lc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.i.lc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.h.Vd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.kd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var l,k="with($context){with($data||{}){return{"+a.l.sb(b,e)+"}}}";l=new Function("$context","$element",k);h=f[g]=l}return h(c,d)}catch(m){throw m.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+m.message,m;}}});a.da.instance=new a.da})();a.b("bindingProvider",a.da);(function(){function b(b){var c=(b=a.a.g.get(b,C))&&b.P;c&&(b.P=
n,c.Pc())}function c(c,d,e){this.node=c;this.gb=d;this.fb=[];this.Y=!1;d.P||a.a.G.na(c,b);e&&e.P&&(e.P.fb.push(c),this.Fb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Fa(a.u.J(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Fa(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function l(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.da.instance,m=f.preprocessNode;
if(m){for(;e=d;)d=a.h.nextSibling(e),m.call(f,e);d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e);a.v.Ya(c,a.v.Y)}}function k(b,c){var d=!0,e=1===c.nodeType;e&&a.h.Oc(c);if(e||a.da.instance.nodeHasBindings(c))d=q(c,null,b).shouldBindDescendants;d&&!y[a.a.O(c)]&&l(b,c)}function m(b){var c=[],d={},e=[];a.a.N(b,function z(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.B(k.after,function(c){if(b[c]){if(-1!==a.a.D(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+
e.join(", "));z(c)}}),e.length--),c.push({key:f,Hc:k}));d[f]=!0}});return c}function q(b,c,d){if(!c){var f=a.a.g.Gc(b,C,{});if(f.context)throw Error("You cannot apply bindings multiple times to the same element.");f.context=d;d[r]&&d[r].$c(b)}var k;if(c&&"function"!==typeof c)k=c;else{var g=a.da.instance,q=g.getBindingAccessors||h,p=a.T(function(){if((k=c?c(d,b):q.call(g,b,d))&&d[r])d[r]();return k},null,{j:b});k&&p.fa()||(p=null)}var l;if(k){var v=function(){return a.a.Fa(p?p():k,e)},t=p?function(a){return function(){return e(p()[a])}}:
function(a){return k[a]};v.get=function(a){return k[a]&&e(t(a))};v.has=function(a){return a in k};a.v.Y in k&&a.v.subscribe(b,a.v.Y,function(){var c=(0,k[a.v.Y])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.xc(d[0]))}});f=m(k);a.a.B(f,function(c){var e=c.Hc.init,f=c.Hc.update,m=c.key;if(8===b.nodeType&&!a.h.ca[m])throw Error("The binding '"+m+"' cannot be used with virtual elements");try{"function"==typeof e&&a.u.J(function(){var a=e(b,t(m),v,d.$data,d);if(a&&a.controlsDescendantBindings){if(l!==
n)throw Error("Multiple bindings ("+l+" and "+m+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");l=m}}),"function"==typeof f&&a.T(function(){f(b,t(m),v,d.$data,d)},null,{j:b})}catch(g){throw g.message='Unable to process binding "'+m+": "+k[m]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:l===n}}function p(b,c){return b&&b instanceof a.X?b:new a.X(b,n,n,c)}var r=a.a.Ra("_subscribable"),v=a.a.Ra("_ancestorBindingInfo");
a.f={};var y={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.f[b]};var t={};a.X=function(b,c,d,e,f){function k(){var b=p?q():q,f=a.a.c(b);if(c){if(c[r])c[r]();a.a.extend(g,c);v in c&&(g[v]=c[v]);g[r]=y}else g.$parents=[],g.$root=f,g.ko=a;h?f=g.$data:(g.$rawData=b,g.$data=f);d&&(g[d]=f);e&&e(g,c,f);return g.$data}function m(){return l&&!a.a.nc(l)}var g=this,h=b===t,q=h?n:b,p="function"==typeof q&&!a.M(q),l,y;f&&f.exportDependencies?k():(y=a.T(k,null,{Ba:m,j:!0}),y.fa()&&
(g[r]=y,y.equalityComparer=null,l=[],y.$c=function(b){l.push(b);a.a.G.na(b,function(b){a.a.Oa(l,b);l.length||(y.m(),g[r]=y=n)})}))};a.X.prototype.createChildContext=function(b,c,d,e){if(c&&!a.options.createChildContextWithAs){var f="function"==typeof b&&!a.M(b);return new a.X(t,this,null,function(a){d&&d(a);a[c]=f?b():b})}return new a.X(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.X.prototype.extend=function(b){return new a.X(t,
this,null,function(c){a.a.extend(c,"function"==typeof b?b():b)})};a.X.prototype.pd=function(a,b){return this.createChildContext(a,b,null,{exportDependencies:!0})};var C=a.a.g.W();c.prototype.Pc=function(){this.Fb&&this.Fb.P&&this.Fb.P.rd(this.node)};c.prototype.rd=function(b){a.a.Oa(this.fb,b);!this.fb.length&&this.Y&&this.vc()};c.prototype.vc=function(){this.Y=!0;this.gb.P&&!this.fb.length&&(this.gb.P=n,a.a.G.ub(this.node,b),a.v.Ya(this.node,a.v.Ac),this.Pc())};c.prototype.od=function(a,b,c){var d=
this;return this.gb.context.createChildContext(a,b,function(a){c(a);a[v]=d.gb},void 0)};a.v={Y:"childrenComplete",Ac:"descendantsComplete",subscribe:function(b,c,d,e){b=a.a.g.Gc(b,C,{});b.Da||(b.Da=new a.R);return b.Da.subscribe(d,e,c)},Ya:function(b,c){var d=a.a.g.get(b,C);if(d&&(d.Da&&d.Da.notifySubscribers(b,c),c==a.v.Y))if(d.P)d.P.vc();else if(d.Da&&d.Da.Ua(a.v.Ac))throw Error("descendantsComplete event not supported for bindings on this node");},Sd:function(b){var d=a.a.g.get(b,C);if(d)return d.P||
(d.P=new c(b,d,d.context[v]))}};a.Td=function(b){return(b=a.a.g.get(b,C))&&b.context};a.bb=function(b,c,d){1===b.nodeType&&a.h.Oc(b);return q(b,c,p(d))};a.hd=function(b,c,d){d=p(d);return a.bb(b,g(c,d,b),d)};a.Na=function(a,b){1!==b.nodeType&&8!==b.nodeType||l(p(a),b)};a.oc=function(a,b,c){!w&&A.jQuery&&(w=A.jQuery);if(!b){if(b=A.document.body,!b)throw Error("ko.applyBindings: could not find window.document.body; has the document been loaded?");}else if(1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
k(p(a,c),b)};a.wc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.xc=function(b){return(b=a.wc(b))?b.$data:n};a.b("bindingHandlers",a.f);a.b("bindingEvent",a.v);a.b("bindingEvent.subscribe",a.v.subscribe);a.b("applyBindings",a.oc);a.b("applyBindingsToDescendants",a.Na);a.b("applyBindingAccessorsToNode",a.bb);a.b("applyBindingsToNode",a.hd);a.b("contextFor",a.wc);a.b("dataFor",a.xc)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,m;k?k.subscribe(e):
(k=f[c]=new a.R,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Fd:e};delete f[c];m||e?k.notifySubscribers(b):a.ma.vb(function(){k.notifySubscribers(b)})}),m=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,g){g||(g=a.i.loaders.slice(0));var q=g.shift();if(q){var p=q[c];if(p){var r=!1;if(p.apply(q,d.concat(function(a){r?f(null):null!==a?f(a):e(c,d,f,g)}))!==b&&(r=!0,!q.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
}else e(c,d,f,g)}else f(null)}var f={},g={};a.i={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Fd?a.u.J(function(){e(f.definition)}):a.ma.vb(function(){e(f.definition)}):c(d,e)},uc:function(a){delete g[a]},ec:e};a.i.loaders=[];a.b("components",a.i);a.b("components.get",a.i.get);a.b("components.clearCachedDefinition",a.i.uc)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(h)}var h={},y=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.i.ec("loadTemplate",
[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.i.ec("loadViewModel",[b,c],function(a){h[l]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});else if("function"===typeof b[l])d(b[l]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.O(b)){case "script":return a.a.sa(b.text);case "textarea":return a.a.sa(b.value);case "template":if(e(b.content))return a.a.Aa(b.content.childNodes)}return a.a.Aa(b.childNodes)}
function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?Q||A.require?(Q||A.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.i.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.i.qb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.i.qb=function(a){return Object.prototype.hasOwnProperty.call(h,
a)};a.i.unregister=function(b){delete h[b];a.i.uc(b)};a.i.yc={getConfig:function(b,c){c(a.i.qb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.sa(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=x.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+
c)}else b("Unknown element type: "+c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var l="createViewModel";a.b("components.register",a.i.register);a.b("components.isRegistered",a.i.qb);a.b("components.unregister",a.i.unregister);a.b("components.defaultLoader",a.i.yc);a.i.loaders.push(a.i.yc);a.i.ad=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Fa(f,function(c){return a.s(c,
null,{j:b})}),g=a.a.Fa(f,function(c){var e=c.w();return c.fa()?a.s({read:function(){return a.a.c(c())},write:a.Wa(e)&&function(a){c()(a)},j:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.i.getComponentNameForNode=function(b){var c=a.a.O(b);if(a.i.qb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.U&&b.tagName===c))return c};a.i.lc=function(c,e,f,g){if(1===e.nodeType){var h=a.i.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var l={name:h,params:b(e,f)};c.component=g?function(){return l}:l}}return c};var c=new a.da;9>a.a.U&&(a.i.register=function(a){return function(b){return a.apply(this,arguments)}}(a.i.register),x.createDocumentFragment=function(b){return function(){var c=b(),f=a.i.ad,g;for(g in f);return c}}(x.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Aa(c);a.h.ta(d,b)}function d(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var e=0;a.f.component={init:function(f,g){function h(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);m&&m.m();k=l=m=null}var l,k,m,q=a.a.la(a.h.childNodes(f));a.h.Ca(f);a.a.G.na(f,h);a.s(function(){var p=a.a.c(g()),r,v;"string"===typeof p?r=p:(r=a.a.c(p.name),v=a.a.c(p.params));if(!r)throw Error("No component name specified");var y=a.v.Sd(f),t=k=++e;a.i.get(r,function(e){if(k===t){h();if(!e)throw Error("Unknown component '"+r+"'");c(r,e,f);var g=d(e,v,{element:f,templateNodes:q});e=y.od(g,
b,function(a){a.$component=g;a.$componentTemplateNodes=q});g&&g.koDescendantsComplete&&(m=a.v.subscribe(f,"descendantsComplete",g.koDescendantsComplete,g));l=g;a.Na(e,f)}})},null,{j:f});return{controlsDescendantBindings:!0}}};a.h.ca.component=!0})();var T={"class":"className","for":"htmlFor"};a.f.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.N(d,function(c,d){d=a.a.c(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===d||d===n;h?g?b.removeAttributeNS(g,
c):b.removeAttribute(c):d=d.toString();8>=a.a.U&&c in T?(c=T[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Uc(b,h?"":d)})}};(function(){a.f.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.ja.pb()&&(e||!l&&!a.ja.Ea())){var k=a.u.J(c);if(m){var p=q?k.w():k,I=r;r=f;I!==f?e&&(a.a.Ma(p,f,!0),a.a.Ma(p,I,!1)):a.a.Ma(p,f,e);q&&a.Wa(k)&&k(p)}else h&&(f===n?f=e:e||(f=n)),a.l.Za(k,d,"checked",f,!0)}}function f(){var d=
a.a.c(c()),e=g();m?(b.checked=0<=a.a.D(d,e),r=e):b.checked=h&&e===n?!!d:g()===d}var g=a.Tb(function(){if(d.has("checkedValue"))return a.a.c(d.get("checkedValue"));if(p)return d.has("value")?a.a.c(d.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var k=c(),m=h&&a.a.c(k)instanceof Array,q=!(m&&k.push&&k.splice),p=l||m,r=m?g():n;l&&!b.name&&a.f.uniqueName.init(b,function(){return!0});a.s(e,null,{j:b});a.a.H(b,"click",e);a.s(f,null,{j:b});k=n}}};a.l.ua.checked=!0;a.f.checkedValue=
{update:function(b,c){b.value=a.a.c(c())}}})();a.f["class"]={update:function(b,c){var d=a.a.yb(a.a.c(c()));a.a.Ab(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Ab(b,d,!0)}};a.f.css={update:function(b,c){var d=a.a.c(c());null!==d&&"object"==typeof d?a.a.N(d,function(c,d){d=a.a.c(d);a.a.Ab(b,c,d)}):a.f["class"].update(b,c)}};a.f.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.f.disable={update:function(b,c){a.f.enable.update(b,
function(){return!a.a.c(c())})}};a.f.event={init:function(b,c,d,e,f){var g=c()||{};a.a.N(g,function(g){"string"==typeof g&&a.a.H(b,g,function(b){var k,m=c()[g];if(m){try{var q=a.a.la(arguments);e=f.$data;q.unshift(e);k=m.apply(e,q)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.f.foreach={Nc:function(b){return function(){var c=b(),d=a.a.Sb(c);if(!d||"number"==typeof d.length)return{foreach:c,
templateEngine:a.aa.La};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.aa.La}}},init:function(b,c){return a.f.template.init(b,a.f.foreach.Nc(c))},update:function(b,c,d,e,f){return a.f.template.update(b,a.f.foreach.Nc(c),d,e,f)}};a.l.Qa.foreach=!1;a.h.ca.foreach=!0;a.f.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=
!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(m){g=f.body}e=g===b}f=c();a.l.Za(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.H(b,"focus",f);a.a.H(b,"focusin",f);a.a.H(b,"blur",g);a.a.H(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),
a.u.J(a.a.Bb,null,[b,d?"focusin":"focusout"]))}};a.l.ua.hasfocus=!0;a.f.hasFocus=a.f.hasfocus;a.l.ua.hasFocus="hasfocus";a.f.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Xb(b,c())}};M("if");M("ifnot",!1,!0);M("with",!0);a.f.let={init:function(b,c,d,e,f){c=f.extend(c);a.Na(c,b);return{controlsDescendantBindings:!0}}};a.h.ca.let=!0;var N={};a.f.options={init:function(b){if("select"!==a.a.O(b))throw Error("options binding applies only to SELECT elements");for(;0<
b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.cb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,e){if(v&&m)a.o.xa(b,a.a.c(d.get("value")),!0);else if(r.length){var f=0<=a.a.D(r,a.o.L(e[0]));a.a.Vc(e[0],f);v&&!f&&a.u.J(a.a.Bb,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,k=a.a.c(c()),m=d.get("valueAllowUnset")&&d.has("value"),q=
d.get("optionsIncludeDestroyed");c={};var p,r=[];m||(h?r=a.a.Gb(e(),a.o.L):0<=b.selectedIndex&&r.push(a.o.L(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),p=a.a.cb(k,function(b){return q||b===n||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(k=a.a.c(d.get("optionsCaption")),null!==k&&k!==n&&p.unshift(N)));var v=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);
a.u.J(d.get("optionsAfterRender"),null,[c[0],b!==N?b:n])});a.a.Wb(b,p,function(c,e,g){g.length&&(r=!m&&g[0].selected?[a.o.L(g[0])]:[],v=!0);e=b.ownerDocument.createElement("option");c===N?(a.a.xb(e,d.get("optionsCaption")),a.o.xa(e,n)):(g=f(c,d.get("optionsValue"),c),a.o.xa(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.xb(e,c));return[e]},c,k);a.u.J(function(){if(m)a.o.xa(b,a.a.c(d.get("value")),!0);else{var c;h?c=r.length&&e().length<r.length:c=r.length&&0<=b.selectedIndex?a.o.L(b.options[b.selectedIndex])!==
r[0]:r.length||0<=b.selectedIndex;c&&a.a.Bb(b,"change")}});a.a.vd(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.f.options.Qb=a.a.g.W();a.f.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.H(b,"change",function(){var e=c(),f=[];a.a.B(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.o.L(b))});a.l.Za(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=a.a.O(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c()),e=b.scrollTop;
d&&"number"==typeof d.length&&a.a.B(b.getElementsByTagName("option"),function(b){var c=0<=a.a.D(d,a.o.L(b));b.selected!=c&&a.a.Vc(b,c)});b.scrollTop=e}};a.l.ua.selectedOptions=!0;a.f.style={update:function(b,c){var d=a.a.c(c()||{});a.a.N(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d="";w?w(b).css(c,d):(c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()}),b.style[c]=d,""===d||""!=b.style[c]||isNaN(d)||(b.style[c]=d+"px"))})}};a.f.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.H(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.f.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.xb(b,c())}};a.h.ca.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||
(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.U||b(c.match(/MSIE ([^ ]+)/)))||(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var h=a.a.g.W(),l=a.a.g.W(),k=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,l))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.g.get(d,h)||(a.a.g.set(d,h,!0),a.a.H(d,"selectionchange",k));a.a.g.set(b,l,c)};a.f.textInput={init:function(b,c,k){function h(c,d){a.a.H(b,c,d)}function l(){var d=a.a.c(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(l,4):b.value!==d&&
(A=!0,b.value=d,A=!1,u=b.value)}function t(){w||(L=b.value,w=a.a.setTimeout(C,4))}function C(){clearTimeout(w);L=w=n;var d=b.value;u!==d&&(u=d,a.l.Za(c(),k,"textInput",d))}var u=b.value,w,L,x=9==a.a.U?t:C,A=!1;g&&h("keypress",C);11>g&&h("propertychange",function(a){A||"value"!==a.propertyName||x(a)});8==g&&(h("keyup",C),h("keydown",C));m&&(m(b,x),h("dragend",t));(!g||9<=g)&&h("input",x);5>e&&"textarea"===a.a.O(b)?(h("keydown",t),h("paste",t),h("cut",t)):11>d?h("keydown",t):4>f&&(h("DOMAutoComplete",
C),h("dragdrop",C),h("drop",C));h("change",C);h("blur",C);a.s(l,null,{j:b})}};a.l.ua.textInput=!0;a.f.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.f.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.f.uniqueName.qd;a.a.Uc(b,d)}}};a.f.uniqueName.qd=0;a.f.using={init:function(b,c,d,e,f){c=f.createChildContext(c);a.Na(c,b);return{controlsDescendantBindings:!0}}};a.h.ca.using=!0;a.f.value={after:["options","foreach"],init:function(b,c,d){var e=a.a.O(b),f="input"==e;if(!f||
"checkbox"!=b.type&&"radio"!=b.type){var g=["change"],h=d.get("valueUpdate"),l=!1,k=null;h&&("string"==typeof h&&(h=[h]),a.a.eb(g,h),g=a.a.qc(g));var m=function(){k=null;l=!1;var e=c(),f=a.o.L(b);a.l.Za(e,d,"value",f)};!a.a.U||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.D(g,"propertychange")||(a.a.H(b,"propertychange",function(){l=!0}),a.a.H(b,"focus",function(){l=!1}),a.a.H(b,"blur",function(){l&&m()}));a.a.B(g,function(c){var d=m;a.a.Ud(c,"after")&&(d=
function(){k=a.o.L(b);a.a.setTimeout(m,0)},c=c.substring(5));a.a.H(b,c,d)});var q;q=f&&"file"==b.type?function(){var d=a.a.c(c());null===d||d===n||""===d?b.value="":a.u.J(m)}:function(){var f=a.a.c(c()),g=a.o.L(b);if(null!==k&&f===k)a.a.setTimeout(q,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.o.xa(b,f,g),g||f===a.o.L(b)||a.u.J(m)):a.o.xa(b,f)};a.s(q,null,{j:b})}else a.bb(b,{checkedValue:c})},update:function(){}};a.l.ua.value=!0;a.f.visible={update:function(b,c){var d=a.a.c(c()),
e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.f.hidden={update:function(b,c){a.f.visible.update(b,function(){return!a.a.c(c())})}};(function(b){a.f[b]={init:function(c,d,e,f,g){return a.f.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");a.ba=function(){};a.ba.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ba.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");
};a.ba.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||x;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.A.C(d)}if(1==b.nodeType||8==b.nodeType)return new a.A.ia(b);throw Error("Unknown template type: "+b);};a.ba.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ba.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,
c).data("isRewritten")};a.ba.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ba);a.bc=function(){function b(b,c,d,h){b=a.l.Rb(b);for(var l=a.l.Qa,k=0;k<b.length;k++){var m=b[k].key;if(Object.prototype.hasOwnProperty.call(l,m)){var q=l[m];if("function"===typeof q){if(m=q(b[k].value))throw Error(m);}else if(!q)throw Error("This template engine does not support the '"+m+"' binding within its templates");
}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.l.sb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{wd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.bc.Kd(b,c)},d)},Kd:function(a,f){return a.replace(c,
function(a,c,d,e,m){return b(m,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},jd:function(b,c){return a.$.Ob(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.bb(l,b,h)})}}}();a.b("__tr_ambtns",a.bc.jd);(function(){a.A={};a.A.C=function(b){if(this.C=b){var c=a.a.O(b);this.zb="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.A.C.prototype.text=function(){var b=1===this.zb?"text":2===this.zb?"value":"innerHTML";
if(0==arguments.length)return this.C[b];var c=arguments[0];"innerHTML"===b?a.a.Xb(this.C,c):this.C[b]=c};var b=a.a.g.W()+"_";a.A.C.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.C,b+c);a.a.g.set(this.C,b+c,arguments[1])};var c=a.a.g.W();a.A.C.prototype.nodes=function(){var b=this.C;if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.hb||(3===this.zb?b.content:4===this.zb?b:n);if(!f||e.gd)if(e=this.text())f=a.a.Ld(e,b.ownerDocument),this.text(""),a.a.g.set(b,c,{hb:f,gd:!0});
return f}a.a.g.set(b,c,{hb:arguments[0]})};a.A.ia=function(a){this.C=a};a.A.ia.prototype=new a.A.C;a.A.ia.prototype.constructor=a.A.ia;a.A.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.C,c)||{};b.cc===n&&b.hb&&(b.cc=b.hb.innerHTML);return b.cc}a.a.g.set(this.C,c,{cc:arguments[0]})};a.b("templateSources",a.A);a.b("templateSources.domElement",a.A.C);a.b("templateSources.anonymousTemplate",a.A.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==
c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.da.instance,l=h.preprocessNode;if(l){b(e,f,function(a,b){var c=a.previousSibling,d=l.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.Ta(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.oc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.$.Zc(b,[d])});a.a.Ta(c,g)}}function d(a){return a.nodeType?a:0<a.length?
a[0]:null}function e(b,e,f,h,l){l=l||{};var n=(b&&d(b)||f||{}).ownerDocument,y=l.templateEngine||g;a.bc.wd(f,y,n);f=y.renderTemplate(f,h,l,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.ta(b,f);n=!0;break;case "replaceNode":a.a.Tc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),l.afterRender&&a.u.J(l.afterRender,
null,[f,h.$data]),"replaceChildren"==e&&a.v.Ya(b,a.v.Y));return f}function f(b,c,d){return a.M(b)?b():"function"===typeof b?b(c,d):b}var g;a.Yb=function(b){if(b!=n&&!(b instanceof a.ba))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Vb=function(b,c,h,l,r){h=h||{};if((h.templateEngine||g)==n)throw Error("Set a template engine before calling renderTemplate");r=r||"replaceChildren";if(l){var v=d(l);return a.T(function(){var g=c&&c instanceof a.X?c:new a.X(c,null,null,null,{exportDependencies:!0}),
n=f(b,g.$data,g),g=e(l,r,n,g,h);"replaceNode"==r&&(l=g,v=d(l))},null,{Ba:function(){return!v||!a.a.Lb(v)},j:v&&"replaceNode"==r?v.parentNode:v})}return a.$.Ob(function(d){a.Vb(b,c,h,d,"replaceNode")})};a.Pd=function(b,d,g,h,l){function v(b,c){a.u.J(a.a.Wb,null,[h,b,t,g,y,c]);a.v.Ya(h,a.v.Y)}function y(a,b){c(b,u);g.afterRender&&g.afterRender(b,a);u=null}function t(a,c){u=l.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,u);return e(h,"ignoreTargetNode",d,u,g)}var u,w=!1===g.includeDestroyed||
a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Lc(d))return a.T(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.cb(b,function(b){return b===n||null===b||!a.a.c(b._destroy)}));v(b)},null,{j:h});v(d.w());var x=d.subscribe(function(a){v(d(),a)},null,"arrayChange");x.j(h);return x};var h=a.a.g.W(),l=a.a.g.W();a.f.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.h.Ca(b);else if("nodes"in d){d=d.nodes||[];if(a.M(d))throw Error('The "nodes" option must be a plain, non-observable array.');
var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,l)||(e=a.a.Pb(d),a.a.g.set(e,l,!0));(new a.A.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=a.a.Pb(d),(new a.A.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.c(g);d=!0;e=null;"string"==typeof c?c={}:(g=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)));"foreach"in c?e=a.Pd(g||b,d&&c.foreach||
[],c,b,f):d?(f="data"in c?f.pd(c.data,c.as):f,e=a.Vb(g||b,f,c,b)):a.h.Ca(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.m&&c.m();a.a.g.set(b,h,!f||f.fa&&!f.fa()?n:f)}};a.l.Qa.template=function(b){b=a.l.Rb(b);return 1==b.length&&b[0].unknown||a.l.Hd(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ca.template=!0})();a.b("setTemplateEngine",a.Yb);a.b("renderTemplate",a.Vb);a.a.Ec=function(a,c,d){if(a.length&&c.length){var e,f,g,h,l;for(e=f=
0;(!d||e<d)&&(h=a[f]);++f){for(g=0;l=c[g];++g)if(h.value===l.value){h.moved=l.index;l.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Ib=function(){function b(b,d,e,f,g){var h=Math.min,l=Math.max,k=[],m,n=b.length,p,r=d.length,v=r-n||1,y=n+r+1,t,u,w;for(m=0;m<=n;m++)for(u=t,k.push(t=[]),w=h(r,m+v),p=l(0,m-1);p<=w;p++)t[p]=p?m?b[m-1]===d[p-1]?u[p-1]:h(u[p]||y,t[p-1]||y)+1:p+1:m+1;h=[];l=[];v=[];m=n;for(p=r;m||p;)r=k[m][p]-1,p&&r===k[m][p-1]?l.push(h[h.length]={status:e,value:d[--p],index:p}):m&&
r===k[m-1][p]?v.push(h[h.length]={status:f,value:b[--m],index:m}):(--p,--m,g.sparse||h.push({status:"retained",value:d[p]}));a.a.Ec(v,l,!g.dontLimitMoves&&10*n);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Ib);(function(){function b(b,c,d,h,l){var k=[],m=a.T(function(){var m=c(d,l,a.a.Ta(k,b))||[];0<k.length&&(a.a.Tc(k,m),h&&
a.u.J(h,null,[d,m,l]));k.length=0;a.a.eb(k,m)},null,{j:b,Ba:function(){return!a.a.nc(k)}});return{ra:k,T:m.fa()?m:n}}var c=a.a.g.W(),d=a.a.g.W();a.a.Wb=function(e,f,g,h,l,k){function m(b){z={ya:b,Nb:a.ga(w++)};u.push(z);A.push(z);v||E.push(z)}function q(b){z=r[b];w!==b&&D.push(z);z.Nb(w++);a.a.Ta(z.ra,e);u.push(z);A.push(z)}function p(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.B(c[d].ra,function(a){b(a,d,c[d].ya)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var r=a.a.g.get(e,c),v=!r,
u=[],t=0,w=0,x=[],A=[],B=[],D=[],E=[],z,H=0;if(v)a.a.B(f,m);else{if(!k||r&&r._countWaitingForRemove){var G=v?[]:a.a.Gb(r,function(a){return a.ya});k=a.a.Ib(G,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var G=0,F,J,K;F=k[G];G++)switch(J=F.moved,K=F.index,F.status){case "deleted":for(;t<K;)q(t++);J===n&&(z=r[t],z.T&&(z.T.m(),z.T=n),a.a.Ta(z.ra,e).length&&(h.beforeRemove&&(u.push(z),A.push(z),H++,z.ya===d?z=null:B.push(z)),z&&x.push.apply(x,z.ra)));t++;break;case "added":for(;w<K;)q(t++);J!==
n?q(J):m(F.value)}for(;w<f.length;)q(t++);u._countWaitingForRemove=H}a.a.g.set(e,c,u);p(h.beforeMove,D);a.a.B(x,h.beforeRemove?a.oa:a.removeNode);G=0;f=a.h.firstChild(e);for(var M;z=A[G];G++){z.ra||a.a.extend(z,b(e,g,z.ya,l,z.Nb));for(x=0;t=z.ra[x];f=t.nextSibling,M=t,x++)t!==f&&a.h.Jc(e,t,M);!z.Dd&&l&&(l(z.ya,z.ra,z.Nb),z.Dd=!0)}p(h.beforeRemove,B);for(G=0;G<B.length;++G)B[G].ya=d;p(h.afterMove,D);p(h.afterAdd,E)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Wb);a.aa=function(){this.allowTemplateRewriting=
!1};a.aa.prototype=new a.ba;a.aa.prototype.constructor=a.aa;a.aa.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.U?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.sa(b,e)};a.aa.La=new a.aa;a.Yb(a.aa.La);a.b("nativeTemplateEngine",a.aa);(function(){a.Xa=function(){var a=this.Gd=function(){if(!w||!w.tmpl)return 0;try{if(0<=w.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=
g||x;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=w.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=w.extend({koBindingContext:e},f.templateOptions);e=w.tmpl(h,b,e);e.appendTo(g.createElement("div"));w.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};
this.addTemplate=function(a,b){x.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(w.tmpl.tag.ko_code={open:"__.push($1 || '');"},w.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Xa.prototype=new a.ba;a.Xa.prototype.constructor=a.Xa;var b=new a.Xa;0<b.Gd&&a.Yb(b);a.b("jqueryTmplTemplateEngine",a.Xa)})()})})();})();

},{}],2:[function(require,module,exports){
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":9}],3:[function(require,module,exports){
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":2,"./_getRawTag":6,"./_objectToString":7}],4:[function(require,module,exports){
(function (global){
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":8}],6:[function(require,module,exports){
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":2}],7:[function(require,module,exports){
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],8:[function(require,module,exports){
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],9:[function(require,module,exports){
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":4}],10:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],11:[function(require,module,exports){
var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

},{"./_baseGetTag":3,"./_getPrototype":5,"./isObjectLike":10}],12:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],13:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = applyMiddleware;

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
},{"./compose":17}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
},{}],16:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports['default'] = combineReducers;

var _createStore = require('./createStore');

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2['default'])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2['default'])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
}).call(this,require('_process'))

},{"./createStore":18,"./utils/warning":20,"_process":13,"lodash/isPlainObject":11}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = require('symbol-observable');

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2['default'])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2['default']] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}
},{"lodash/isPlainObject":11,"symbol-observable":21}],19:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = require('./combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = require('./bindActionCreators');

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2['default'];
exports.combineReducers = _combineReducers2['default'];
exports.bindActionCreators = _bindActionCreators2['default'];
exports.applyMiddleware = _applyMiddleware2['default'];
exports.compose = _compose2['default'];
}).call(this,require('_process'))

},{"./applyMiddleware":14,"./bindActionCreators":15,"./combineReducers":16,"./compose":17,"./createStore":18,"./utils/warning":20,"_process":13}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports['default'] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
},{}],21:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = require('./ponyfill.js');

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./ponyfill.js":22}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};
},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TSMap = (function () {
    function TSMap(inputMap) {
        var t = this;
        t._keys = [];
        t._values = [];
        t.length = 0;
        if (inputMap) {
            inputMap.forEach(function (v, k) {
                t.set(v[0], v[1]);
            });
        }
    }
    /**
     * Convert a JSON object to a map.
     *
     * @param {*} jsonObject JSON object to convert
     * @param {boolean} [convertObjs] convert nested objects to maps
     * @returns {TSMap<K, V>}
     * @memberof TSMap
     */
    TSMap.prototype.fromJSON = function (jsonObject, convertObjs) {
        var t = this;
        var setProperty = function (value) {
            if (value !== null && typeof value === 'object' && convertObjs)
                return new TSMap().fromJSON(value, true);
            if (Array.isArray(value) && convertObjs)
                return value.map(function (v) { return setProperty(v); });
            return value;
        };
        Object.keys(jsonObject).forEach(function (property) {
            if (jsonObject.hasOwnProperty(property)) {
                t.set(property, setProperty(jsonObject[property]));
            }
        });
        return t;
    };
    /**
     * Outputs the contents of the map to a JSON object
     *
     * @returns {{[key: string]: V}}
     * @memberof TSMap
     */
    TSMap.prototype.toJSON = function () {
        var obj = {};
        var t = this;
        var getValue = function (value) {
            if (value instanceof TSMap) {
                return value.toJSON();
            }
            else if (Array.isArray(value)) {
                return value.map(function (v) { return getValue(v); });
            }
            else {
                return value;
            }
        };
        t.keys().forEach(function (k) {
            obj[String(k)] = getValue(t.get(k));
        });
        return obj;
    };
    /**
     * Get an array of arrays respresenting the map, kind of like an export function.
     *
     * @returns {(Array<Array<K|V>>)}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.entries = function () {
        var _this = this;
        return [].slice.call(this.keys().map(function (k) { return [k, _this.get(k)]; }));
    };
    /**
     * Get an array of keys in the map.
     *
     * @returns {Array<K>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.keys = function () {
        return [].slice.call(this._keys);
    };
    /**
     * Get an array of the values in the map.
     *
     * @returns {Array<V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.values = function () {
        return [].slice.call(this._values);
    };
    /**
     * Check to see if an item in the map exists given it's key.
     *
     * @param {K} key
     * @returns {Boolean}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.has = function (key) {
        return this._keys.indexOf(key) > -1;
    };
    /**
     * Get a specific item from the map given it's key.
     *
     * @param {K} key
     * @returns {V}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i > -1 ? this._values[i] : undefined;
    };
    /**
     * Safely retrieve a deeply nested property.
     *
     * @param {K[]} path
     * @returns {V}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.deepGet = function (path) {
        if (!path || !path.length)
            return null;
        var recursiveGet = function (obj, path) {
            if (obj === undefined || obj === null)
                return null;
            if (!path.length)
                return obj;
            return recursiveGet(obj instanceof TSMap ? obj.get(path[0]) : obj[path[0]], path.slice(1));
        };
        return recursiveGet(this.get(path[0]), path.slice(1));
    };
    /**
     * Set a specific item in the map given it's key, automatically adds new items as needed.
     * Ovewrrites existing items
     *
     * @param {K} key
     * @param {V} value
     *
     * @memberOf TSMap
     */
    TSMap.prototype.set = function (key, value) {
        var t = this;
        // check if key exists and overwrite
        var i = this._keys.indexOf(key);
        if (i > -1) {
            t._values[i] = value;
        }
        else {
            t._keys.push(key);
            t._values.push(value);
            t.length = t._values.length;
        }
        return this;
    };
    /**
     * Enters a value into the map forcing the keys to always be sorted.
     *
     * @param {K} key
     * @param {V} value
     * @param {number} [startVal]
     * @param {number} [endVal]
     * @returns {this}
     * @memberof TSMap
     */
    TSMap.prototype.sortedSet = function (key, value, startVal, endVal) {
        var t = this;
        var length = this._keys.length;
        var start = startVal || 0;
        var end = endVal !== undefined ? endVal : length - 1;
        if (length == 0) {
            t._keys.push(key);
            t._values.push(value);
            return t;
        }
        if (key > this._keys[end]) {
            this._keys.splice(end + 1, 0, key);
            this._values.splice(end + 1, 0, value);
            return this;
        }
        if (key < this._keys[start]) {
            this._values.splice(start, 0, value);
            this._keys.splice(start, 0, key);
            return this;
        }
        if (start >= end) {
            return this;
        }
        var m = start + Math.floor((end - start) / 2);
        if (key < this._keys[m]) {
            return this.sortedSet(key, value, start, m - 1);
        }
        if (key > this._keys[m]) {
            return this.sortedSet(key, value, m + 1, end);
        }
        return this;
    };
    /**
     * Provide a number representing the number of items in the map
     *
     * @returns {number}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.size = function () {
        return this.length;
    };
    /**
     * Clear all the contents of the map
     *
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.clear = function () {
        var t = this;
        t._keys.length = t.length = t._values.length = 0;
        return this;
    };
    /**
     * Delete an item from the map given it's key
     *
     * @param {K} key
     * @returns {Boolean}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.delete = function (key) {
        var t = this;
        var i = t._keys.indexOf(key);
        if (i > -1) {
            t._keys.splice(i, 1);
            t._values.splice(i, 1);
            t.length = t._keys.length;
            return true;
        }
        return false;
    };
    /**
     * Used to loop through the map.
     *
     * @param {(value:V,key?:K,index?:number) => void} callbackfn
     *
     * @memberOf TSMap
     */
    TSMap.prototype.forEach = function (callbackfn) {
        var _this = this;
        this._keys.forEach(function (v, i) {
            callbackfn(_this.get(v), v, i);
        });
    };
    /**
     * Returns an array containing the returned value of each item in the map.
     *
     * @param {(value:V,key?:K,index?:number) => any} callbackfn
     * @returns {Array<any>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.map = function (callbackfn) {
        var _this = this;
        return this.keys().map(function (itemKey, i) {
            return callbackfn(_this.get(itemKey), itemKey, i);
        });
    };
    /**
     * Removes items based on a conditional function passed to filter.
     * Mutates the map in place.
     *
     * @param {(value:V,key?:K,index?:number) => Boolean} callbackfn
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.filter = function (callbackfn) {
        var t = this;
        t._keys.forEach(function (v, i) {
            if (callbackfn(t.get(v), v, i) === false)
                t.delete(v);
        });
        return this;
    };
    /**
     * Creates a deep copy of the map, breaking all references to the old map and it's children.
     * Uses JSON.parse so any functions will be stringified and lose their original purpose.
     *
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    TSMap.prototype.clone = function () {
        return new TSMap(this.entries());
    };
    return TSMap;
}());
exports.TSMap = TSMap;

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionType_1 = require("../infrastructure/ActionType");
function addTask(task) {
    return {
        type: ActionType_1.ActionTypes.ADD_TASK,
        payload: task
    };
}
function deleteTask(task) {
    return {
        type: ActionType_1.ActionTypes.DELETE_TASK,
        payload: task
    };
}
exports.default = {
    addTask: addTask,
    deleteTask: deleteTask
};
},{"../infrastructure/ActionType":27}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var taskListViewModel_1 = require("./viewmodels/taskListViewModel");
var task_card_1 = require("./components/task-card");
(function () {
    'use strict';
    ko.components.register(task_card_1.componentName, task_card_1.component);
    var node = document.getElementById("app");
    ko.applyBindings(taskListViewModel_1.vm, node);
})();
},{"./components/task-card":26,"./viewmodels/taskListViewModel":30,"knockout":1}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
exports.componentName = "task-card";
exports.component = {
    viewModel: function (params) {
        this.taskName = ko.pureComputed(function () {
            return params.taskName;
        });
    },
    template: "\n\t\t<div class=\"row\">\n          <div class=\"col-md-6 offset-md-3 mt40\">\n            <div class=\"task-card\"><span class=\"fa fa-close\" data-bind=\"click:$root.deleteTaskToList.bind($data)\"></span>\n              <h2 class=\"task-name\" data-bind=\"text:taskName\"></h2>\n            </div>\n          </div>\n        </div>\n\t"
};
},{"knockout":1}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["ADD_TASK"] = 0] = "ADD_TASK";
    ActionTypes[ActionTypes["DELETE_TASK"] = 1] = "DELETE_TASK";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign = require("object-assign");
var ActionType_1 = require("../infrastructure/ActionType");
var typescript_map_1 = require("typescript-map");
//const reducerMap:Map<ActionTypes, Function> = new Map<ActionTypes, Function>();
var reducerMap = new typescript_map_1.TSMap();
function addTask(initialState, taskItem) {
    var taskList = initialState.taskList.concat(taskItem);
    return objectAssign({}, initialState, { taskList: taskList });
}
function deleteTask(initialState, taskItem) {
    var index = initialState.taskList.indexOf(taskItem);
    var taskList = [].concat(initialState.taskList.slice(0, index), initialState.taskList.slice(index + 1));
    return objectAssign({}, initialState, { taskList: taskList });
}
reducerMap.set(ActionType_1.ActionTypes.ADD_TASK, addTask);
reducerMap.set(ActionType_1.ActionTypes.DELETE_TASK, deleteTask);
function rootReducer(initialState, action) {
    if (initialState === void 0) { initialState = { taskList: [] }; }
    return reducerMap.has(action.type) ? reducerMap.get(action.type)(initialState, action.payload) : initialState;
}
exports.default = rootReducer;
},{"../infrastructure/ActionType":27,"object-assign":12,"typescript-map":23}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var app_reducer_1 = require("../reducers/app-reducer");
var store = redux_1.createStore(app_reducer_1.default);
exports.default = store;
},{"../reducers/app-reducer":28,"redux":19}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions/actions");
var ko = require("knockout");
var app_store_1 = require("../store/app-store");
var taskListViewModel = /** @class */ (function () {
    function taskListViewModel() {
        var _this = this;
        this.appState = ko.observable(this.getState());
        this.unsubscribe = app_store_1.default.subscribe(function () {
            console.info("store changed");
            _this.appState(_this.getState());
            console.info(_this.getState());
        });
        this.newTask = ko.observable('');
    }
    taskListViewModel.prototype.addTaskToList = function () {
        console.log('adding');
        app_store_1.default.dispatch(actions_1.default.addTask(this.newTask()));
    };
    taskListViewModel.prototype.deleteTaskToList = function (data) {
        console.log('deleting');
        app_store_1.default.dispatch(actions_1.default.deleteTask(data));
    };
    taskListViewModel.prototype.modifyList = function (data, actionCreator) {
        this.dispatch(actionCreator(data));
    };
    taskListViewModel.prototype.getState = function () {
        return app_store_1.default.getState();
    };
    taskListViewModel.prototype.dispatch = function (action) {
        return app_store_1.default.dispatch(action);
    };
    return taskListViewModel;
}());
exports.vm = new taskListViewModel();
},{"../actions/actions":24,"../store/app-store":29,"knockout":1}]},{},[25])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9hcHBseU1pZGRsZXdhcmUuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvY29tYmluZVJlZHVjZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jb21wb3NlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL3V0aWxzL3dhcm5pbmcuanMiLCJub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy90eXBlc2NyaXB0LW1hcC9pbmRleC5qcyIsInNvdXJjZS9hc3NldHMvdHMvYWN0aW9ucy9hY3Rpb25zLnRzIiwic291cmNlL2Fzc2V0cy90cy9hcHAudHMiLCJzb3VyY2UvYXNzZXRzL3RzL2NvbXBvbmVudHMvdGFzay1jYXJkLnRzIiwic291cmNlL2Fzc2V0cy90cy9pbmZyYXN0cnVjdHVyZS9BY3Rpb25UeXBlLnRzIiwic291cmNlL2Fzc2V0cy90cy9yZWR1Y2Vycy9hcHAtcmVkdWNlci50cyIsInNvdXJjZS9hc3NldHMvdHMvc3RvcmUvYXBwLXN0b3JlLnRzIiwic291cmNlL2Fzc2V0cy90cy92aWV3bW9kZWxzL3Rhc2tMaXN0Vmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN1NBLDJEQUF5RDtBQUd6RCxpQkFBaUIsSUFBVztJQUUzQixNQUFNLENBQUE7UUFDTCxJQUFJLEVBQUUsd0JBQVcsQ0FBQyxRQUFRO1FBQzFCLE9BQU8sRUFBQyxJQUFJO0tBQ1osQ0FBQTtBQUNGLENBQUM7QUFFRCxvQkFBb0IsSUFBVztJQUU5QixNQUFNLENBQUE7UUFDTCxJQUFJLEVBQUUsd0JBQVcsQ0FBQyxXQUFXO1FBQzdCLE9BQU8sRUFBRSxJQUFJO0tBQ2IsQ0FBQTtBQUNGLENBQUM7QUFFRCxrQkFBZTtJQUNkLE9BQU8sU0FBQTtJQUNQLFVBQVUsWUFBQTtDQUNWLENBQUM7Ozs7QUN0QkYsNkJBQStCO0FBQy9CLG9FQUFvRDtBQUNwRCxvREFBZ0U7QUFFaEUsQ0FBQztJQUNBLFlBQVksQ0FBQztJQUViLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHlCQUFhLEVBQUUscUJBQVMsQ0FBQyxDQUFDO0lBRWpELElBQUksSUFBSSxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxzQkFBRSxFQUFDLElBQUksQ0FBQyxDQUFDO0FBRTNCLENBQUMsQ0FBQyxFQUFFLENBQUM7Ozs7QUNaTCw2QkFBK0I7QUFFbEIsUUFBQSxhQUFhLEdBQUcsV0FBVyxDQUFDO0FBQzVCLFFBQUEsU0FBUyxHQUFHO0lBQ3hCLFNBQVMsRUFBQyxVQUFTLE1BQVU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLFFBQVEsRUFBRSxvVkFRVDtDQUNBLENBQUE7Ozs7QUNwQkYsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBRXRCLHFEQUFRLENBQUE7SUFDUiwyREFBVyxDQUFBO0FBQ1osQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCOzs7O0FDSkQsNENBQThDO0FBQzlDLDJEQUF5RDtBQUd6RCxpREFBdUM7QUFHdkMsaUZBQWlGO0FBQ2pGLElBQU0sVUFBVSxHQUFnQyxJQUFJLHNCQUFLLEVBQXlCLENBQUM7QUFDbkYsaUJBQWlCLFlBQXNCLEVBQUUsUUFBZTtJQUV2RCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBQyxRQUFRLFVBQUEsRUFBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELG9CQUFvQixZQUFzQixFQUFFLFFBQWU7SUFFMUQsSUFBSSxLQUFLLEdBQVUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLEVBQUMsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0JBQVcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFcEQscUJBQW9DLFlBQXdDLEVBQUUsTUFBYztJQUF4RCw2QkFBQSxFQUFBLGlCQUEyQixRQUFRLEVBQUUsRUFBRSxFQUFDO0lBRTNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0FBQy9HLENBQUM7QUFIRCw4QkFHQzs7OztBQzVCRCwrQkFBb0M7QUFDcEMsdURBQXNEO0FBRXRELElBQU0sS0FBSyxHQUFHLG1CQUFXLENBQUMscUJBQWUsQ0FBQyxDQUFDO0FBRTNDLGtCQUFlLEtBQUssQ0FBQzs7OztBQ0xyQiw4Q0FBd0Q7QUFDeEQsNkJBQStCO0FBQy9CLGdEQUF1QztBQUl2QztJQU9DO1FBQUEsaUJBV0M7UUFWQSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFHL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBSyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsbUJBQUssQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLElBQVc7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixtQkFBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBVyxFQUFFLGFBQXNCO1FBRTdDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLG9DQUFRLEdBQWhCO1FBRUMsTUFBTSxDQUFDLG1CQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxNQUFjO1FBRXRCLE1BQU0sQ0FBQyxtQkFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBRVUsUUFBQSxFQUFFLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIvKiFcbiAqIEtub2Nrb3V0IEphdmFTY3JpcHQgbGlicmFyeSB2My41LjAtYmV0YVxuICogKGMpIFRoZSBLbm9ja291dC5qcyB0ZWFtIC0gaHR0cDovL2tub2Nrb3V0anMuY29tL1xuICogTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiAqL1xuXG4oZnVuY3Rpb24oKSB7KGZ1bmN0aW9uKG4pe3ZhciBBPXRoaXN8fCgwLGV2YWwpKFwidGhpc1wiKSx4PUEuZG9jdW1lbnQsTz1BLm5hdmlnYXRvcix3PUEualF1ZXJ5LEY9QS5KU09OOyhmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCIsXCJyZXF1aXJlXCJdLG4pOlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bihtb2R1bGUuZXhwb3J0c3x8ZXhwb3J0cyk6bihBLmtvPXt9KX0pKGZ1bmN0aW9uKFAsUSl7ZnVuY3Rpb24gSyhhLGMpe3JldHVybiBudWxsPT09YXx8dHlwZW9mIGEgaW4gVT9hPT09YzohMX1mdW5jdGlvbiBWKGIsYyl7dmFyIGQ7cmV0dXJuIGZ1bmN0aW9uKCl7ZHx8KGQ9YS5hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtkPW47YigpfSxjKSl9fWZ1bmN0aW9uIFcoYixjKXt2YXIgZDtyZXR1cm4gZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCk7ZD1hLmEuc2V0VGltZW91dChiLGMpfX1mdW5jdGlvbiBYKGEsXG5jKXtjJiZcImNoYW5nZVwiIT09Yz9cImJlZm9yZUNoYW5nZVwiPT09Yz90aGlzLmdjKGEpOnRoaXMuJGEoYSxjKTp0aGlzLmhjKGEpfWZ1bmN0aW9uIFkoYSxjKXtudWxsIT09YyYmYy5tJiZjLm0oKX1mdW5jdGlvbiBaKGEsYyl7dmFyIGQ9dGhpcy5uZCxlPWRbdV07ZS5wYXx8KHRoaXMuSmImJnRoaXMuaWJbY10/KGQubWMoYyxhLHRoaXMuaWJbY10pLHRoaXMuaWJbY109bnVsbCwtLXRoaXMuSmIpOmUuRltjXXx8ZC5tYyhjLGEsZS5LP3toYTphfTpkLldjKGEpKSxhLklhJiZhLmZkKCkpfWZ1bmN0aW9uIE0oYixjLGQpe2EuZltiXT17aW5pdDpmdW5jdGlvbihiLGYsZyxoLGwpe3ZhciBrLG09Zy5nZXQoXCJhc1wiKSxxPSFjfHxtJiYhYS5vcHRpb25zLmNyZWF0ZUNoaWxkQ29udGV4dFdpdGhBcyxwPXEmJmEucyhmdW5jdGlvbigpe3JldHVybiFkIT09IWEuYS5jKGYoKSl9LG51bGwse2o6Yn0pO2EucyhmdW5jdGlvbigpe3ZhciBkPSFxJiZhLmEuYyhmKCkpLHY9cT9wKCk6ISFkLGc9IWs7ZyYmXG5hLmphLkVhKCkmJihrPWEuYS5BYShhLmguY2hpbGROb2RlcyhiKSwhMCkpO3Y/KGd8fGEuaC50YShiLGEuYS5BYShrKSksYS5OYShjP2wuY3JlYXRlQ2hpbGRDb250ZXh0KFwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZDpmLG0pOnAuZmEoKT9sLmV4dGVuZChmdW5jdGlvbigpe3AoKTtyZXR1cm4gbnVsbH0pOmwsYikpOmEuaC5DYShiKX0sbnVsbCx7ajpifSk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX19O2EubC5RYVtiXT0hMTthLmguY2FbYl09ITB9dmFyIGE9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBQP1A6e307YS5iPWZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPWIuc3BsaXQoXCIuXCIpLGU9YSxmPTA7ZjxkLmxlbmd0aC0xO2YrKyllPWVbZFtmXV07ZVtkW2QubGVuZ3RoLTFdXT1jfTthLkk9ZnVuY3Rpb24oYSxjLGQpe2FbY109ZH07YS52ZXJzaW9uPVwiMy41LjAtYmV0YVwiO2EuYihcInZlcnNpb25cIixhLnZlcnNpb24pO2Eub3B0aW9ucz17ZGVmZXJVcGRhdGVzOiExLHVzZU9ubHlOYXRpdmVFdmVudHM6ITEsXG5jcmVhdGVDaGlsZENvbnRleHRXaXRoQXM6ITEsZm9yZWFjaEhpZGVzRGVzdHJveWVkOiExfTthLmE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsYil7Zm9yKHZhciBjIGluIGEpZi5jYWxsKGEsYykmJmIoYyxhW2NdKX1mdW5jdGlvbiBjKGEsYil7aWYoYilmb3IodmFyIGMgaW4gYilmLmNhbGwoYixjKSYmKGFbY109YltjXSk7cmV0dXJuIGF9ZnVuY3Rpb24gZChhLGIpe2EuX19wcm90b19fPWI7cmV0dXJuIGF9ZnVuY3Rpb24gZShiLGMsZCxlKXt2YXIgbT1iW2NdLm1hdGNoKHApfHxbXTthLmEuQihkLm1hdGNoKHApLGZ1bmN0aW9uKGIpe2EuYS5NYShtLGIsZSl9KTtiW2NdPW0uam9pbihcIiBcIil9dmFyIGY9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxnPXtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSxoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wsbD17fSxrPXt9O2xbTyYmL0ZpcmVmb3hcXC8yL2kudGVzdChPLnVzZXJBZ2VudCk/XCJLZXlib2FyZEV2ZW50XCI6XG5cIlVJRXZlbnRzXCJdPVtcImtleXVwXCIsXCJrZXlkb3duXCIsXCJrZXlwcmVzc1wiXTtsLk1vdXNlRXZlbnRzPVwiY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIi5zcGxpdChcIiBcIik7YihsLGZ1bmN0aW9uKGEsYil7aWYoYi5sZW5ndGgpZm9yKHZhciBjPTAsZD1iLmxlbmd0aDtjPGQ7YysrKWtbYltjXV09YX0pO3ZhciBtPXtwcm9wZXJ0eWNoYW5nZTohMH0scT14JiZmdW5jdGlvbigpe2Zvcih2YXIgYT0zLGI9eC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGM9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7Yi5pbm5lckhUTUw9XCJcXHgzYyEtLVtpZiBndCBJRSBcIisgKythK1wiXT48aT48L2k+PCFbZW5kaWZdLS1cXHgzZVwiLGNbMF07KTtyZXR1cm4gNDxhP2E6bn0oKSxwPS9cXFMrL2cscjtyZXR1cm57RGM6W1wiYXV0aGVudGljaXR5X3Rva2VuXCIsL15fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbihfLiopPyQvXSxcbkI6ZnVuY3Rpb24oYSxiLGMpe2lmKGEpaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYS5mb3JFYWNoKWEuZm9yRWFjaChiLGMpO2Vsc2UgZm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWIuY2FsbChjLGFbZF0sZCxhKX0sRDpmdW5jdGlvbihhLGIpe2lmKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEuaW5kZXhPZilyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gY31yZXR1cm4tMX0scGM6ZnVuY3Rpb24oYSxiLGMpe2lmKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEuZmluZClyZXR1cm4gYS5maW5kKGIsYyk7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKGIuY2FsbChjLGFbZF0sZCxhKSlyZXR1cm4gYVtkXX1yZXR1cm4gbn0sT2E6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuRChiLGMpOzA8ZD9iLnNwbGljZShkLDEpOjA9PT1kJiZiLnNoaWZ0KCl9LHFjOmZ1bmN0aW9uKGIpe3ZhciBjPVxuW107YiYmYS5hLkIoYixmdW5jdGlvbihiKXswPmEuYS5EKGMsYikmJmMucHVzaChiKX0pO3JldHVybiBjfSxHYjpmdW5jdGlvbihhLGIsYyl7aWYoYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5tYXApcmV0dXJuIGEubWFwKGIsYyk7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxtPWEubGVuZ3RoO2U8bTtlKyspZC5wdXNoKGIuY2FsbChjLGFbZV0sZSkpO3JldHVybiBkfSxjYjpmdW5jdGlvbihhLGIsYyl7aWYoYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5maWx0ZXIpcmV0dXJuIGEuZmlsdGVyKGIsYyk7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxtPWEubGVuZ3RoO2U8bTtlKyspYi5jYWxsKGMsYVtlXSxlKSYmZC5wdXNoKGFbZV0pO3JldHVybiBkfSxlYjpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LE1hOmZ1bmN0aW9uKGIsYyxcbmQpe3ZhciBlPWEuYS5EKGEuYS5TYihiKSxjKTswPmU/ZCYmYi5wdXNoKGMpOmR8fGIuc3BsaWNlKGUsMSl9LHphOmcsZXh0ZW5kOmMsc2V0UHJvdG90eXBlT2Y6ZCx3YjpnP2Q6YyxOOmIsRmE6ZnVuY3Rpb24oYSxiLGMpe2lmKCFhKXJldHVybiBhO3ZhciBkPXt9LGU7Zm9yKGUgaW4gYSlmLmNhbGwoYSxlKSYmKGRbZV09Yi5jYWxsKGMsYVtlXSxlLGEpKTtyZXR1cm4gZH0sTWI6ZnVuY3Rpb24oYil7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlTm9kZShiLmZpcnN0Q2hpbGQpfSxQYjpmdW5jdGlvbihiKXtiPWEuYS5sYShiKTtmb3IodmFyIGM9KGJbMF0mJmJbMF0ub3duZXJEb2N1bWVudHx8eCkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWMuYXBwZW5kQ2hpbGQoYS5vYShiW2RdKSk7cmV0dXJuIGN9LEFhOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aCxtPVtdO2Q8ZTtkKyspe3ZhciBmPWJbZF0uY2xvbmVOb2RlKCEwKTttLnB1c2goYz9cbmEub2EoZik6Zil9cmV0dXJuIG19LHRhOmZ1bmN0aW9uKGIsYyl7YS5hLk1iKGIpO2lmKGMpZm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWIuYXBwZW5kQ2hpbGQoY1tkXSl9LFRjOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5ub2RlVHlwZT9bYl06YjtpZigwPGQubGVuZ3RoKXtmb3IodmFyIGU9ZFswXSxtPWUucGFyZW50Tm9kZSxmPTAsZz1jLmxlbmd0aDtmPGc7ZisrKW0uaW5zZXJ0QmVmb3JlKGNbZl0sZSk7Zj0wO2ZvcihnPWQubGVuZ3RoO2Y8ZztmKyspYS5yZW1vdmVOb2RlKGRbZl0pfX0sVGE6ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aCl7Zm9yKGI9OD09PWIubm9kZVR5cGUmJmIucGFyZW50Tm9kZXx8YjthLmxlbmd0aCYmYVswXS5wYXJlbnROb2RlIT09YjspYS5zcGxpY2UoMCwxKTtmb3IoOzE8YS5sZW5ndGgmJmFbYS5sZW5ndGgtMV0ucGFyZW50Tm9kZSE9PWI7KWEubGVuZ3RoLS07aWYoMTxhLmxlbmd0aCl7dmFyIGM9YVswXSxkPWFbYS5sZW5ndGgtMV07Zm9yKGEubGVuZ3RoPVxuMDtjIT09ZDspYS5wdXNoKGMpLGM9Yy5uZXh0U2libGluZzthLnB1c2goZCl9fXJldHVybiBhfSxWYzpmdW5jdGlvbihhLGIpezc+cT9hLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsYik6YS5zZWxlY3RlZD1ifSx5YjpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWF8fGE9PT1uP1wiXCI6YS50cmltP2EudHJpbSgpOmEudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9LFVkOmZ1bmN0aW9uKGEsYil7YT1hfHxcIlwiO3JldHVybiBiLmxlbmd0aD5hLmxlbmd0aD8hMTphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHVkOmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuITA7aWYoMTE9PT1hLm5vZGVUeXBlKXJldHVybiExO2lmKGIuY29udGFpbnMpcmV0dXJuIGIuY29udGFpbnMoMSE9PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pcmV0dXJuIDE2PT0oYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSZcbjE2KTtmb3IoO2EmJmEhPWI7KWE9YS5wYXJlbnROb2RlO3JldHVybiEhYX0sTGI6ZnVuY3Rpb24oYil7cmV0dXJuIGEuYS51ZChiLGIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfSxuYzpmdW5jdGlvbihiKXtyZXR1cm4hIWEuYS5wYyhiLGEuYS5MYil9LE86ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LHRjOmZ1bmN0aW9uKGIpe3JldHVybiBhLm9uRXJyb3I/ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWNhdGNoKGMpe3Rocm93IGEub25FcnJvciYmYS5vbkVycm9yKGMpLGM7fX06Yn0sc2V0VGltZW91dDpmdW5jdGlvbihiLGMpe3JldHVybiBzZXRUaW1lb3V0KGEuYS50YyhiKSxjKX0semM6ZnVuY3Rpb24oYil7c2V0VGltZW91dChmdW5jdGlvbigpe2Eub25FcnJvciYmYS5vbkVycm9yKGIpO3Rocm93IGI7fSwwKX0sSDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5hLnRjKGQpO1xuZD1tW2NdO2lmKGEub3B0aW9ucy51c2VPbmx5TmF0aXZlRXZlbnRzfHxkfHwhdylpZihkfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiLmFkZEV2ZW50TGlzdGVuZXIpaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuYXR0YWNoRXZlbnQpe3ZhciBmPWZ1bmN0aW9uKGEpe2UuY2FsbChiLGEpfSxnPVwib25cIitjO2IuYXR0YWNoRXZlbnQoZyxmKTthLmEuRy5uYShiLGZ1bmN0aW9uKCl7Yi5kZXRhY2hFdmVudChnLGYpfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIik7ZWxzZSBiLmFkZEV2ZW50TGlzdGVuZXIoYyxlLCExKTtlbHNlIHJ8fChyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHcoYikub24/XCJvblwiOlwiYmluZFwiKSx3KGIpW3JdKGMsZSl9LEJiOmZ1bmN0aW9uKGIsYyl7aWYoIWJ8fCFiLm5vZGVUeXBlKXRocm93IEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKTtcbnZhciBkO1wiaW5wdXRcIj09PWEuYS5PKGIpJiZiLnR5cGUmJlwiY2xpY2tcIj09Yy50b0xvd2VyQ2FzZSgpPyhkPWIudHlwZSxkPVwiY2hlY2tib3hcIj09ZHx8XCJyYWRpb1wiPT1kKTpkPSExO2lmKGEub3B0aW9ucy51c2VPbmx5TmF0aXZlRXZlbnRzfHwhd3x8ZClpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB4LmNyZWF0ZUV2ZW50KWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGIuZGlzcGF0Y2hFdmVudClkPXguY3JlYXRlRXZlbnQoa1tjXXx8XCJIVE1MRXZlbnRzXCIpLGQuaW5pdEV2ZW50KGMsITAsITAsQSwwLDAsMCwwLDAsITEsITEsITEsITEsMCxiKSxiLmRpc3BhdGNoRXZlbnQoZCk7ZWxzZSB0aHJvdyBFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpO2Vsc2UgaWYoZCYmYi5jbGljayliLmNsaWNrKCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5maXJlRXZlbnQpYi5maXJlRXZlbnQoXCJvblwiK2MpO2Vsc2UgdGhyb3cgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKTtcbmVsc2UgdyhiKS50cmlnZ2VyKGMpfSxjOmZ1bmN0aW9uKGIpe3JldHVybiBhLk0oYik/YigpOmJ9LFNiOmZ1bmN0aW9uKGIpe3JldHVybiBhLk0oYik/Yi53KCk6Yn0sQWI6ZnVuY3Rpb24oYixjLGQpe3ZhciBtO2MmJihcIm9iamVjdFwiPT09dHlwZW9mIGIuY2xhc3NMaXN0PyhtPWIuY2xhc3NMaXN0W2Q/XCJhZGRcIjpcInJlbW92ZVwiXSxhLmEuQihjLm1hdGNoKHApLGZ1bmN0aW9uKGEpe20uY2FsbChiLmNsYXNzTGlzdCxhKX0pKTpcInN0cmluZ1wiPT09dHlwZW9mIGIuY2xhc3NOYW1lLmJhc2VWYWw/ZShiLmNsYXNzTmFtZSxcImJhc2VWYWxcIixjLGQpOmUoYixcImNsYXNzTmFtZVwiLGMsZCkpfSx4YjpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMpO2lmKG51bGw9PT1kfHxkPT09bilkPVwiXCI7dmFyIGU9YS5oLmZpcnN0Q2hpbGQoYik7IWV8fDMhPWUubm9kZVR5cGV8fGEuaC5uZXh0U2libGluZyhlKT9hLmgudGEoYixbYi5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpXSk6ZS5kYXRhPVxuZDthLmEuemQoYil9LFVjOmZ1bmN0aW9uKGEsYil7YS5uYW1lPWI7aWYoNz49cSl0cnl7YS5tZXJnZUF0dHJpYnV0ZXMoeC5jcmVhdGVFbGVtZW50KFwiPGlucHV0IG5hbWU9J1wiK2EubmFtZStcIicvPlwiKSwhMSl9Y2F0Y2goYyl7fX0semQ6ZnVuY3Rpb24oYSl7OTw9cSYmKGE9MT09YS5ub2RlVHlwZT9hOmEucGFyZW50Tm9kZSxhLnN0eWxlJiYoYS5zdHlsZS56b29tPWEuc3R5bGUuem9vbSkpfSx2ZDpmdW5jdGlvbihhKXtpZihxKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxPZDpmdW5jdGlvbihiLGMpe2I9YS5hLmMoYik7Yz1hLmEuYyhjKTtmb3IodmFyIGQ9W10sZT1iO2U8PWM7ZSsrKWQucHVzaChlKTtyZXR1cm4gZH0sbGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspYi5wdXNoKGFbY10pO3JldHVybiBifSxSYTpmdW5jdGlvbihhKXtyZXR1cm4gaD9TeW1ib2woYSk6YX0sWWQ6Nj09PVxucSxaZDo3PT09cSxVOnEsRmM6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9YS5hLmxhKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGEuYS5sYShiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKSxlPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Z1bmN0aW9uKGEpe3JldHVybiBhLm5hbWU9PT1jfTpmdW5jdGlvbihhKXtyZXR1cm4gYy50ZXN0KGEubmFtZSl9LG09W10sZj1kLmxlbmd0aC0xOzA8PWY7Zi0tKWUoZFtmXSkmJm0ucHVzaChkW2ZdKTtyZXR1cm4gbX0sTWQ6ZnVuY3Rpb24oYil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihiPWEuYS55YihiKSk/RiYmRi5wYXJzZT9GLnBhcnNlKGIpOihuZXcgRnVuY3Rpb24oXCJyZXR1cm4gXCIrYikpKCk6bnVsbH0sWmI6ZnVuY3Rpb24oYixjLGQpe2lmKCFGfHwhRi5zdHJpbmdpZnkpdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCBKU09OLnN0cmluZ2lmeSgpLiBTb21lIGJyb3dzZXJzIChlLmcuLCBJRSA8IDgpIGRvbid0IHN1cHBvcnQgaXQgbmF0aXZlbHksIGJ1dCB5b3UgY2FuIG92ZXJjb21lIHRoaXMgYnkgYWRkaW5nIGEgc2NyaXB0IHJlZmVyZW5jZSB0byBqc29uMi5qcywgZG93bmxvYWRhYmxlIGZyb20gaHR0cDovL3d3dy5qc29uLm9yZy9qc29uMi5qc1wiKTtcbnJldHVybiBGLnN0cmluZ2lmeShhLmEuYyhiKSxjLGQpfSxOZDpmdW5jdGlvbihjLGQsZSl7ZT1lfHx7fTt2YXIgbT1lLnBhcmFtc3x8e30sZj1lLmluY2x1ZGVGaWVsZHN8fHRoaXMuRGMsZz1jO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBjJiZcImZvcm1cIj09PWEuYS5PKGMpKWZvcih2YXIgZz1jLmFjdGlvbixrPWYubGVuZ3RoLTE7MDw9aztrLS0pZm9yKHZhciBsPWEuYS5GYyhjLGZba10pLHE9bC5sZW5ndGgtMTswPD1xO3EtLSltW2xbcV0ubmFtZV09bFtxXS52YWx1ZTtkPWEuYS5jKGQpO3ZhciBoPXguY3JlYXRlRWxlbWVudChcImZvcm1cIik7aC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2guYWN0aW9uPWc7aC5tZXRob2Q9XCJwb3N0XCI7Zm9yKHZhciBwIGluIGQpYz14LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxjLnR5cGU9XCJoaWRkZW5cIixjLm5hbWU9cCxjLnZhbHVlPWEuYS5aYihhLmEuYyhkW3BdKSksaC5hcHBlbmRDaGlsZChjKTtiKG0sZnVuY3Rpb24oYSxiKXt2YXIgYz14LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmMudHlwZT1cImhpZGRlblwiO2MubmFtZT1hO2MudmFsdWU9YjtoLmFwcGVuZENoaWxkKGMpfSk7eC5ib2R5LmFwcGVuZENoaWxkKGgpO2Uuc3VibWl0dGVyP2Uuc3VibWl0dGVyKGgpOmguc3VibWl0KCk7c2V0VGltZW91dChmdW5jdGlvbigpe2gucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoKX0sMCl9fX0oKTthLmIoXCJ1dGlsc1wiLGEuYSk7YS5iKFwidXRpbHMuYXJyYXlGb3JFYWNoXCIsYS5hLkIpO2EuYihcInV0aWxzLmFycmF5Rmlyc3RcIixhLmEucGMpO2EuYihcInV0aWxzLmFycmF5RmlsdGVyXCIsYS5hLmNiKTthLmIoXCJ1dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzXCIsYS5hLnFjKTthLmIoXCJ1dGlscy5hcnJheUluZGV4T2ZcIixhLmEuRCk7YS5iKFwidXRpbHMuYXJyYXlNYXBcIixhLmEuR2IpO2EuYihcInV0aWxzLmFycmF5UHVzaEFsbFwiLGEuYS5lYik7YS5iKFwidXRpbHMuYXJyYXlSZW1vdmVJdGVtXCIsYS5hLk9hKTthLmIoXCJ1dGlscy5jbG9uZU5vZGVzXCIsYS5hLkFhKTthLmIoXCJ1dGlscy5jcmVhdGVTeW1ib2xPclN0cmluZ1wiLFxuYS5hLlJhKTthLmIoXCJ1dGlscy5leHRlbmRcIixhLmEuZXh0ZW5kKTthLmIoXCJ1dGlscy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdFwiLGEuYS5EYyk7YS5iKFwidXRpbHMuZ2V0Rm9ybUZpZWxkc1wiLGEuYS5GYyk7YS5iKFwidXRpbHMub2JqZWN0TWFwXCIsYS5hLkZhKTthLmIoXCJ1dGlscy5wZWVrT2JzZXJ2YWJsZVwiLGEuYS5TYik7YS5iKFwidXRpbHMucG9zdEpzb25cIixhLmEuTmQpO2EuYihcInV0aWxzLnBhcnNlSnNvblwiLGEuYS5NZCk7YS5iKFwidXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXJcIixhLmEuSCk7YS5iKFwidXRpbHMuc3RyaW5naWZ5SnNvblwiLGEuYS5aYik7YS5iKFwidXRpbHMucmFuZ2VcIixhLmEuT2QpO2EuYihcInV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzc1wiLGEuYS5BYik7YS5iKFwidXRpbHMudHJpZ2dlckV2ZW50XCIsYS5hLkJiKTthLmIoXCJ1dGlscy51bndyYXBPYnNlcnZhYmxlXCIsYS5hLmMpO2EuYihcInV0aWxzLm9iamVjdEZvckVhY2hcIixhLmEuTik7YS5iKFwidXRpbHMuYWRkT3JSZW1vdmVJdGVtXCIsXG5hLmEuTWEpO2EuYihcInV0aWxzLnNldFRleHRDb250ZW50XCIsYS5hLnhiKTthLmIoXCJ1bndyYXBcIixhLmEuYyk7RnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzO2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBmdW5jdGlvbigpe3JldHVybiBjLmFwcGx5KGEsYXJndW1lbnRzKX07dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiBmdW5jdGlvbigpe3ZhciBlPWQuc2xpY2UoMCk7ZS5wdXNoLmFwcGx5KGUsYXJndW1lbnRzKTtyZXR1cm4gYy5hcHBseShhLGUpfX0pO2EuYS5nPW5ldyBmdW5jdGlvbigpe3ZhciBiPTAsYz1cIl9fa29fX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGQ9e30sZSxmO2EuYS5VPyhlPWZ1bmN0aW9uKGEsZSl7dmFyIGY9YVtjXTtpZighZnx8XCJudWxsXCI9PT1mfHwhZFtmXSl7aWYoIWUpcmV0dXJuIG47Zj1hW2NdPVwia29cIitiKys7ZFtmXT1cbnt9fXJldHVybiBkW2ZdfSxmPWZ1bmN0aW9uKGEpe3ZhciBiPWFbY107cmV0dXJuIGI/KGRlbGV0ZSBkW2JdLGFbY109bnVsbCwhMCk6ITF9KTooZT1mdW5jdGlvbihhLGIpe3ZhciBkPWFbY107IWQmJmImJihkPWFbY109e30pO3JldHVybiBkfSxmPWZ1bmN0aW9uKGEpe3JldHVybiBhW2NdPyhkZWxldGUgYVtjXSwhMCk6ITF9KTtyZXR1cm57Z2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9ZShhLCExKTtyZXR1cm4gYyYmY1tiXX0sc2V0OmZ1bmN0aW9uKGEsYixjKXsoYT1lKGEsYyE9PW4pKSYmKGFbYl09Yyl9LEdjOmZ1bmN0aW9uKGEsYixjKXthPWUoYSwhMCk7cmV0dXJuIGFbYl18fChhW2JdPWMpfSxjbGVhcjpmLFc6ZnVuY3Rpb24oKXtyZXR1cm4gYisrICtjfX19O2EuYihcInV0aWxzLmRvbURhdGFcIixhLmEuZyk7YS5iKFwidXRpbHMuZG9tRGF0YS5jbGVhclwiLGEuYS5nLmNsZWFyKTthLmEuRz1uZXcgZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyl7dmFyIGU9YS5hLmcuZ2V0KGIsZCk7XG5lPT09biYmYyYmKGU9W10sYS5hLmcuc2V0KGIsZCxlKSk7cmV0dXJuIGV9ZnVuY3Rpb24gYyhkKXt2YXIgZT1iKGQsITEpO2lmKGUpZm9yKHZhciBlPWUuc2xpY2UoMCksbD0wO2w8ZS5sZW5ndGg7bCsrKWVbbF0oZCk7YS5hLmcuY2xlYXIoZCk7YS5hLkcuY2xlYW5FeHRlcm5hbERhdGEoZCk7aWYoZltkLm5vZGVUeXBlXSlmb3IoZD1kLmNoaWxkTm9kZXMsbD0wO2w8ZC5sZW5ndGg7bCsrKWlmKDg9PT1kW2xdLm5vZGVUeXBlJiYoYyhlPWRbbF0pLGRbbF0hPT1lKSl0aHJvdyBFcnJvcihcImtvLmNsZWFuTm9kZTogQW4gYWxyZWFkeSBjbGVhbmVkIG5vZGUgd2FzIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnRcIik7fXZhciBkPWEuYS5nLlcoKSxlPXsxOiEwLDg6ITAsOTohMH0sZj17MTohMCw5OiEwfTtyZXR1cm57bmE6ZnVuY3Rpb24oYSxjKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBjKXRocm93IEVycm9yKFwiQ2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2IoYSwhMCkucHVzaChjKX0sXG51YjpmdW5jdGlvbihjLGUpe3ZhciBmPWIoYywhMSk7ZiYmKGEuYS5PYShmLGUpLDA9PWYubGVuZ3RoJiZhLmEuZy5zZXQoYyxkLG4pKX0sb2E6ZnVuY3Rpb24oYSl7aWYoZVthLm5vZGVUeXBlXSYmKGMoYSksZlthLm5vZGVUeXBlXSkpZm9yKHZhciBiPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLGQsaz0wO2s8Yi5sZW5ndGg7aysrKWlmKGMoZD1iW2tdKSxiW2tdIT09ZCl0aHJvdyBFcnJvcihcImtvLmNsZWFuTm9kZTogQW4gYWxyZWFkeSBjbGVhbmVkIG5vZGUgd2FzIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnRcIik7cmV0dXJuIGF9LHJlbW92ZU5vZGU6ZnVuY3Rpb24oYil7YS5vYShiKTtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX0sY2xlYW5FeHRlcm5hbERhdGE6ZnVuY3Rpb24oYSl7dyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdy5jbGVhbkRhdGEmJncuY2xlYW5EYXRhKFthXSl9fX07YS5vYT1hLmEuRy5vYTthLnJlbW92ZU5vZGU9YS5hLkcucmVtb3ZlTm9kZTtcbmEuYihcImNsZWFuTm9kZVwiLGEub2EpO2EuYihcInJlbW92ZU5vZGVcIixhLnJlbW92ZU5vZGUpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGEuYS5HKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsYS5hLkcubmEpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixhLmEuRy51Yik7KGZ1bmN0aW9uKCl7dmFyIGI9WzAsXCJcIixcIlwiXSxjPVsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sZD1bMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLGU9WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sZj17dGhlYWQ6Yyx0Ym9keTpjLHRmb290OmMsdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpkLHRoOmQsb3B0aW9uOmUsb3B0Z3JvdXA6ZX0sZz04Pj1hLmEuVTthLmEuc2E9ZnVuY3Rpb24oYyxkKXt2YXIgZTtpZih3KWlmKHcucGFyc2VIVE1MKWU9XG53LnBhcnNlSFRNTChjLGQpfHxbXTtlbHNle2lmKChlPXcuY2xlYW4oW2NdLGQpKSYmZVswXSl7Zm9yKHZhciBtPWVbMF07bS5wYXJlbnROb2RlJiYxMSE9PW0ucGFyZW50Tm9kZS5ub2RlVHlwZTspbT1tLnBhcmVudE5vZGU7bS5wYXJlbnROb2RlJiZtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobSl9fWVsc2V7KGU9ZCl8fChlPXgpO3ZhciBtPWUucGFyZW50V2luZG93fHxlLmRlZmF1bHRWaWV3fHxBLHE9YS5hLnliKGMpLnRvTG93ZXJDYXNlKCkscD1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscjtyPShxPXEubWF0Y2goL148KFthLXpdKylbID5dLykpJiZmW3FbMV1dfHxiO3E9clswXTtyPVwiaWdub3JlZDxkaXY+XCIrclsxXStjK3JbMl0rXCI8L2Rpdj5cIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBtLmlubmVyU2hpdj9wLmFwcGVuZENoaWxkKG0uaW5uZXJTaGl2KHIpKTooZyYmZS5ib2R5LmFwcGVuZENoaWxkKHApLHAuaW5uZXJIVE1MPXIsZyYmcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApKTtcbmZvcig7cS0tOylwPXAubGFzdENoaWxkO2U9YS5hLmxhKHAubGFzdENoaWxkLmNoaWxkTm9kZXMpfXJldHVybiBlfTthLmEuTGQ9ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuc2EoYixjKTtyZXR1cm4gZC5sZW5ndGgmJmRbMF0ucGFyZW50RWxlbWVudHx8YS5hLlBiKGQpfTthLmEuWGI9ZnVuY3Rpb24oYixjKXthLmEuTWIoYik7Yz1hLmEuYyhjKTtpZihudWxsIT09YyYmYyE9PW4paWYoXCJzdHJpbmdcIiE9dHlwZW9mIGMmJihjPWMudG9TdHJpbmcoKSksdyl3KGIpLmh0bWwoYyk7ZWxzZSBmb3IodmFyIGQ9YS5hLnNhKGMsYi5vd25lckRvY3VtZW50KSxlPTA7ZTxkLmxlbmd0aDtlKyspYi5hcHBlbmRDaGlsZChkW2VdKX19KSgpO2EuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYS5hLnNhKTthLmIoXCJ1dGlscy5zZXRIdG1sXCIsYS5hLlhiKTthLiQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGMsZSl7aWYoYylpZig4PT1jLm5vZGVUeXBlKXt2YXIgZj1hLiQuUWMoYy5ub2RlVmFsdWUpO1xubnVsbCE9ZiYmZS5wdXNoKHtzZDpjLEpkOmZ9KX1lbHNlIGlmKDE9PWMubm9kZVR5cGUpZm9yKHZhciBmPTAsZz1jLmNoaWxkTm9kZXMsaD1nLmxlbmd0aDtmPGg7ZisrKWIoZ1tmXSxlKX12YXIgYz17fTtyZXR1cm57T2I6ZnVuY3Rpb24oYSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYSl0aHJvdyBFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpO3ZhciBiPSg0Mjk0OTY3Mjk2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSkrKDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtjW2JdPWE7cmV0dXJuXCJcXHgzYyEtLVtrb19tZW1vOlwiK2IrXCJdLS1cXHgzZVwifSxZYzpmdW5jdGlvbihhLGIpe3ZhciBmPWNbYV07aWYoZj09PW4pdGhyb3cgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgXCIrYStcIi4gUGVyaGFwcyBpdCdzIGFscmVhZHkgYmVlbiB1bm1lbW9pemVkLlwiKTtcbnRyeXtyZXR1cm4gZi5hcHBseShudWxsLGJ8fFtdKSwhMH1maW5hbGx5e2RlbGV0ZSBjW2FdfX0sWmM6ZnVuY3Rpb24oYyxlKXt2YXIgZj1bXTtiKGMsZik7Zm9yKHZhciBnPTAsaD1mLmxlbmd0aDtnPGg7ZysrKXt2YXIgbD1mW2ddLnNkLGs9W2xdO2UmJmEuYS5lYihrLGUpO2EuJC5ZYyhmW2ddLkpkLGspO2wubm9kZVZhbHVlPVwiXCI7bC5wYXJlbnROb2RlJiZsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCl9fSxRYzpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLm1hdGNoKC9eXFxba29fbWVtb1xcOiguKj8pXFxdJC8pKT9hWzFdOm51bGx9fX0oKTthLmIoXCJtZW1vaXphdGlvblwiLGEuJCk7YS5iKFwibWVtb2l6YXRpb24ubWVtb2l6ZVwiLGEuJC5PYik7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplXCIsYS4kLlljKTthLmIoXCJtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0XCIsYS4kLlFjKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHNcIixhLiQuWmMpO2EubWE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7aWYoZilmb3IodmFyIGI9XG5mLGM9MCxkO2g8ZjspaWYoZD1lW2grK10pe2lmKGg+Yil7aWYoNUUzPD0rK2Mpe2g9ZjthLmEuemMoRXJyb3IoXCInVG9vIG11Y2ggcmVjdXJzaW9uJyBhZnRlciBwcm9jZXNzaW5nIFwiK2MrXCIgdGFzayBncm91cHMuXCIpKTticmVha31iPWZ9dHJ5e2QoKX1jYXRjaChxKXthLmEuemMocSl9fX1mdW5jdGlvbiBjKCl7YigpO2g9Zj1lLmxlbmd0aD0wfXZhciBkLGU9W10sZj0wLGc9MSxoPTA7QS5NdXRhdGlvbk9ic2VydmVyP2Q9ZnVuY3Rpb24oYSl7dmFyIGI9eC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyhuZXcgTXV0YXRpb25PYnNlcnZlcihhKSkub2JzZXJ2ZShiLHthdHRyaWJ1dGVzOiEwfSk7cmV0dXJuIGZ1bmN0aW9uKCl7Yi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpfX0oYyk6ZD14JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4geC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKGEpe3ZhciBiPXguY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1cbmZ1bmN0aW9uKCl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDt4LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChiKTtiPW51bGw7YSgpfTt4LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7c2V0VGltZW91dChhLDApfTtyZXR1cm57c2NoZWR1bGVyOmQsdmI6ZnVuY3Rpb24oYil7Znx8YS5tYS5zY2hlZHVsZXIoYyk7ZVtmKytdPWI7cmV0dXJuIGcrK30sY2FuY2VsOmZ1bmN0aW9uKGEpe2E9YS0oZy1mKTthPj1oJiZhPGYmJihlW2FdPW51bGwpfSxyZXNldEZvclRlc3Rpbmc6ZnVuY3Rpb24oKXt2YXIgYT1mLWg7aD1mPWUubGVuZ3RoPTA7cmV0dXJuIGF9LFJkOmJ9fSgpO2EuYihcInRhc2tzXCIsYS5tYSk7YS5iKFwidGFza3Muc2NoZWR1bGVcIixhLm1hLnZiKTthLmIoXCJ0YXNrcy5ydW5FYXJseVwiLGEubWEuUmQpO2EuU2E9e3Rocm90dGxlOmZ1bmN0aW9uKGIsYyl7Yi50aHJvdHRsZUV2YWx1YXRpb249Yzt2YXIgZD1udWxsO3JldHVybiBhLlQoe3JlYWQ6YixcbndyaXRlOmZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChkKTtkPWEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihlKX0sYyl9fSl9LHJhdGVMaW1pdDpmdW5jdGlvbihhLGMpe3ZhciBkLGUsZjtcIm51bWJlclwiPT10eXBlb2YgYz9kPWM6KGQ9Yy50aW1lb3V0LGU9Yy5tZXRob2QpO2EuRGI9ITE7Zj1cIm5vdGlmeVdoZW5DaGFuZ2VzU3RvcFwiPT1lP1c6VjthLnJiKGZ1bmN0aW9uKGEpe3JldHVybiBmKGEsZCl9KX0sZGVmZXJyZWQ6ZnVuY3Rpb24oYixjKXtpZighMCE9PWMpdGhyb3cgRXJyb3IoXCJUaGUgJ2RlZmVycmVkJyBleHRlbmRlciBvbmx5IGFjY2VwdHMgdGhlIHZhbHVlICd0cnVlJywgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIHRvIHR1cm4gZGVmZXJyYWwgb2ZmIG9uY2UgZW5hYmxlZC5cIik7Yi5EYnx8KGIuRGI9ITAsYi5yYihmdW5jdGlvbihjKXt2YXIgZSxmPSExO3JldHVybiBmdW5jdGlvbigpe2lmKCFmKXthLm1hLmNhbmNlbChlKTtlPWEubWEudmIoYyk7dHJ5e2Y9ITAsXG5iLm5vdGlmeVN1YnNjcmliZXJzKG4sXCJkaXJ0eVwiKX1maW5hbGx5e2Y9ITF9fX19KSl9LG5vdGlmeTpmdW5jdGlvbihhLGMpe2EuZXF1YWxpdHlDb21wYXJlcj1cImFsd2F5c1wiPT1jP251bGw6S319O3ZhciBVPXt1bmRlZmluZWQ6MSxcImJvb2xlYW5cIjoxLG51bWJlcjoxLHN0cmluZzoxfTthLmIoXCJleHRlbmRlcnNcIixhLlNhKTthLiRiPWZ1bmN0aW9uKGIsYyxkKXt0aGlzLmhhPWI7dGhpcy5iZD1jO3RoaXMuZGQ9ZDt0aGlzLmZjPSExO3RoaXMuRWI9dGhpcy5pYz1udWxsO2EuSSh0aGlzLFwiZGlzcG9zZVwiLHRoaXMubSk7YS5JKHRoaXMsXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIix0aGlzLmopfTthLiRiLnByb3RvdHlwZS5tPWZ1bmN0aW9uKCl7dGhpcy5FYiYmYS5hLkcudWIodGhpcy5pYyx0aGlzLkViKTt0aGlzLmZjPSEwO3RoaXMuZGQoKX07YS4kYi5wcm90b3R5cGUuaj1mdW5jdGlvbihiKXt0aGlzLmljPWI7YS5hLkcubmEoYix0aGlzLkViPXRoaXMubS5iaW5kKHRoaXMpKX07XG5hLlI9ZnVuY3Rpb24oKXthLmEud2IodGhpcyxEKTtELm1iKHRoaXMpfTt2YXIgRD17bWI6ZnVuY3Rpb24oYSl7YS5TPXtjaGFuZ2U6W119O2Eua2M9MX0sc3Vic2NyaWJlOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT10aGlzO2Q9ZHx8XCJjaGFuZ2VcIjt2YXIgZj1uZXcgYS4kYihlLGM/Yi5iaW5kKGMpOmIsZnVuY3Rpb24oKXthLmEuT2EoZS5TW2RdLGYpO2UuYWImJmUuYWIoZCl9KTtlLlBhJiZlLlBhKGQpO2UuU1tkXXx8KGUuU1tkXT1bXSk7ZS5TW2RdLnB1c2goZik7cmV0dXJuIGZ9LG5vdGlmeVN1YnNjcmliZXJzOmZ1bmN0aW9uKGIsYyl7Yz1jfHxcImNoYW5nZVwiO1wiY2hhbmdlXCI9PT1jJiZ0aGlzLkNiKCk7aWYodGhpcy5VYShjKSl7dmFyIGQ9XCJjaGFuZ2VcIj09PWMmJnRoaXMuY2R8fHRoaXMuU1tjXS5zbGljZSgwKTt0cnl7YS51LnJjKCk7Zm9yKHZhciBlPTAsZjtmPWRbZV07KytlKWYuZmN8fGYuYmQoYil9ZmluYWxseXthLnUuZW5kKCl9fX0sbGI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rY30sXG5DZDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sYigpIT09YX0sQ2I6ZnVuY3Rpb24oKXsrK3RoaXMua2N9LHJiOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD1hLk0oYyksZSxmLGcsaCxsO2MuJGF8fChjLiRhPWMubm90aWZ5U3Vic2NyaWJlcnMsYy5ub3RpZnlTdWJzY3JpYmVycz1YKTt2YXIgaz1iKGZ1bmN0aW9uKCl7Yy5JYT0hMTtkJiZoPT09YyYmKGg9Yy5kYz9jLmRjKCk6YygpKTt2YXIgYT1mfHxsJiZjLm9iKGcsaCk7bD1mPWU9ITE7YSYmYy4kYShnPWgpfSk7Yy5oYz1mdW5jdGlvbihhLGIpe2ImJmMuSWF8fChsPSFiKTtjLmNkPWMuUy5jaGFuZ2Uuc2xpY2UoMCk7Yy5JYT1lPSEwO2g9YTtrKCl9O2MuZ2M9ZnVuY3Rpb24oYSl7ZXx8KGc9YSxjLiRhKGEsXCJiZWZvcmVDaGFuZ2VcIikpfTtjLmpjPWZ1bmN0aW9uKCl7bD0hMH07Yy5mZD1mdW5jdGlvbigpe2Mub2IoZyxjLncoITApKSYmKGY9ITApfX0sVWE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuU1thXSYmdGhpcy5TW2FdLmxlbmd0aH0sXG5BZDpmdW5jdGlvbihiKXtpZihiKXJldHVybiB0aGlzLlNbYl0mJnRoaXMuU1tiXS5sZW5ndGh8fDA7dmFyIGM9MDthLmEuTih0aGlzLlMsZnVuY3Rpb24oYSxiKXtcImRpcnR5XCIhPT1hJiYoYys9Yi5sZW5ndGgpfSk7cmV0dXJuIGN9LG9iOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIXRoaXMuZXF1YWxpdHlDb21wYXJlcnx8IXRoaXMuZXF1YWxpdHlDb21wYXJlcihhLGMpfSx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBPYmplY3RdXCJ9LGV4dGVuZDpmdW5jdGlvbihiKXt2YXIgYz10aGlzO2ImJmEuYS5OKGIsZnVuY3Rpb24oYixlKXt2YXIgZj1hLlNhW2JdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGYmJihjPWYoYyxlKXx8Yyl9KTtyZXR1cm4gY319O2EuSShELFwiaW5pdFwiLEQubWIpO2EuSShELFwic3Vic2NyaWJlXCIsRC5zdWJzY3JpYmUpO2EuSShELFwiZXh0ZW5kXCIsRC5leHRlbmQpO2EuSShELFwiZ2V0U3Vic2NyaXB0aW9uc0NvdW50XCIsRC5BZCk7YS5hLnphJiZhLmEuc2V0UHJvdG90eXBlT2YoRCxcbkZ1bmN0aW9uLnByb3RvdHlwZSk7YS5SLmZuPUQ7YS5NYz1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5zdWJzY3JpYmUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEubm90aWZ5U3Vic2NyaWJlcnN9O2EuYihcInN1YnNjcmliYWJsZVwiLGEuUik7YS5iKFwiaXNTdWJzY3JpYmFibGVcIixhLk1jKTthLmphPWEudT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7ZC5wdXNoKGUpO2U9YX1mdW5jdGlvbiBjKCl7ZT1kLnBvcCgpfXZhciBkPVtdLGUsZj0wO3JldHVybntyYzpiLGVuZDpjLFViOmZ1bmN0aW9uKGIpe2lmKGUpe2lmKCFhLk1jKGIpKXRocm93IEVycm9yKFwiT25seSBzdWJzY3JpYmFibGUgdGhpbmdzIGNhbiBhY3QgYXMgZGVwZW5kZW5jaWVzXCIpO2UubGQuY2FsbChlLm1kLGIsYi5lZHx8KGIuZWQ9KytmKSl9fSxKOmZ1bmN0aW9uKGEsZCxlKXt0cnl7cmV0dXJuIGIoKSxhLmFwcGx5KGQsZXx8W10pfWZpbmFsbHl7YygpfX0sRWE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLnMuRWEoKX0sXG5rYjpmdW5jdGlvbigpe2lmKGUpcmV0dXJuIGUucy5rYigpfSxwYjpmdW5jdGlvbigpe2lmKGUpcmV0dXJuIGUucGJ9fX0oKTthLmIoXCJjb21wdXRlZENvbnRleHRcIixhLmphKTthLmIoXCJjb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixhLmphLkVhKTthLmIoXCJjb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzXCIsYS5qYS5rYik7YS5iKFwiY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbFwiLGEuamEucGIpO2EuYihcImNvbXB1dGVkQ29udGV4dC5yZWdpc3RlckRlcGVuZGVuY3lcIixhLmphLlViKTthLmIoXCJpZ25vcmVEZXBlbmRlbmNpZXNcIixhLlhkPWEudS5KKTt2YXIgSD1hLmEuUmEoXCJfbGF0ZXN0VmFsdWVcIik7YS5nYT1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXJldHVybiBjLm9iKGNbSF0sYXJndW1lbnRzWzBdKSYmKGMud2EoKSxjW0hdPWFyZ3VtZW50c1swXSxjLnZhKCkpLHRoaXM7YS51LlViKGMpO3JldHVybiBjW0hdfVxuY1tIXT1iO2EuYS56YXx8YS5hLmV4dGVuZChjLGEuUi5mbik7YS5SLmZuLm1iKGMpO2EuYS53YihjLEUpO2Eub3B0aW9ucy5kZWZlclVwZGF0ZXMmJmEuU2EuZGVmZXJyZWQoYywhMCk7cmV0dXJuIGN9O3ZhciBFPXtlcXVhbGl0eUNvbXBhcmVyOkssdzpmdW5jdGlvbigpe3JldHVybiB0aGlzW0hdfSx2YTpmdW5jdGlvbigpe3RoaXMubm90aWZ5U3Vic2NyaWJlcnModGhpc1tIXSxcInNwZWN0YXRlXCIpO3RoaXMubm90aWZ5U3Vic2NyaWJlcnModGhpc1tIXSl9LHdhOmZ1bmN0aW9uKCl7dGhpcy5ub3RpZnlTdWJzY3JpYmVycyh0aGlzW0hdLFwiYmVmb3JlQ2hhbmdlXCIpfX07YS5hLnphJiZhLmEuc2V0UHJvdG90eXBlT2YoRSxhLlIuZm4pO3ZhciBKPWEuZ2EuTGE9XCJfX2tvX3Byb3RvX19cIjtFW0pdPWEuZ2E7YS5NPWZ1bmN0aW9uKGIpe2lmKChiPVwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbSl0pJiZiIT09YS5nYSYmYiE9PWEucyl0aHJvdyBFcnJvcihcIkludmFsaWQgb2JqZWN0IHRoYXQgbG9va3MgbGlrZSBhbiBvYnNlcnZhYmxlOyBwb3NzaWJseSBmcm9tIGFub3RoZXIgS25vY2tvdXQgaW5zdGFuY2VcIik7XG5yZXR1cm4hIWJ9O2EuV2E9ZnVuY3Rpb24oYil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYiYmKGJbSl09PT1hLmdhfHxiW0pdPT09YS5zJiZiLkljKX07YS5iKFwib2JzZXJ2YWJsZVwiLGEuZ2EpO2EuYihcImlzT2JzZXJ2YWJsZVwiLGEuTSk7YS5iKFwiaXNXcml0ZWFibGVPYnNlcnZhYmxlXCIsYS5XYSk7YS5iKFwiaXNXcml0YWJsZU9ic2VydmFibGVcIixhLldhKTthLmIoXCJvYnNlcnZhYmxlLmZuXCIsRSk7YS5JKEUsXCJwZWVrXCIsRS53KTthLkkoRSxcInZhbHVlSGFzTXV0YXRlZFwiLEUudmEpO2EuSShFLFwidmFsdWVXaWxsTXV0YXRlXCIsRS53YSk7YS5HYT1mdW5jdGlvbihiKXtiPWJ8fFtdO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBifHwhKFwibGVuZ3RoXCJpbiBiKSl0aHJvdyBFcnJvcihcIlRoZSBhcmd1bWVudCBwYXNzZWQgd2hlbiBpbml0aWFsaXppbmcgYW4gb2JzZXJ2YWJsZSBhcnJheSBtdXN0IGJlIGFuIGFycmF5LCBvciBudWxsLCBvciB1bmRlZmluZWQuXCIpO2I9YS5nYShiKTthLmEud2IoYixcbmEuR2EuZm4pO3JldHVybiBiLmV4dGVuZCh7dHJhY2tBcnJheUNoYW5nZXM6ITB9KX07YS5HYS5mbj17cmVtb3ZlOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYz10aGlzLncoKSxkPVtdLGU9XCJmdW5jdGlvblwiIT10eXBlb2YgYnx8YS5NKGIpP2Z1bmN0aW9uKGEpe3JldHVybiBhPT09Yn06YixmPTA7ZjxjLmxlbmd0aDtmKyspe3ZhciBnPWNbZl07aWYoZShnKSl7MD09PWQubGVuZ3RoJiZ0aGlzLndhKCk7aWYoY1tmXSE9PWcpdGhyb3cgRXJyb3IoXCJBcnJheSBtb2RpZmllZCBkdXJpbmcgcmVtb3ZlOyBjYW5ub3QgcmVtb3ZlIGl0ZW1cIik7ZC5wdXNoKGcpO2Muc3BsaWNlKGYsMSk7Zi0tfX1kLmxlbmd0aCYmdGhpcy52YSgpO3JldHVybiBkfSxyZW1vdmVBbGw6ZnVuY3Rpb24oYil7aWYoYj09PW4pe3ZhciBjPXRoaXMudygpLGQ9Yy5zbGljZSgwKTt0aGlzLndhKCk7Yy5zcGxpY2UoMCxjLmxlbmd0aCk7dGhpcy52YSgpO3JldHVybiBkfXJldHVybiBiP3RoaXMucmVtb3ZlKGZ1bmN0aW9uKGMpe3JldHVybiAwPD1cbmEuYS5EKGIsYyl9KTpbXX0sZGVzdHJveTpmdW5jdGlvbihiKXt2YXIgYz10aGlzLncoKSxkPVwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fGEuTShiKT9mdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9OmI7dGhpcy53YSgpO2Zvcih2YXIgZT1jLmxlbmd0aC0xOzA8PWU7ZS0tKXt2YXIgZj1jW2VdO2QoZikmJihmLl9kZXN0cm95PSEwKX10aGlzLnZhKCl9LGRlc3Ryb3lBbGw6ZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1uP3RoaXMuZGVzdHJveShmdW5jdGlvbigpe3JldHVybiEwfSk6Yj90aGlzLmRlc3Ryb3koZnVuY3Rpb24oYyl7cmV0dXJuIDA8PWEuYS5EKGIsYyl9KTpbXX0saW5kZXhPZjpmdW5jdGlvbihiKXt2YXIgYz10aGlzKCk7cmV0dXJuIGEuYS5EKGMsYil9LHJlcGxhY2U6ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLmluZGV4T2YoYSk7MDw9ZCYmKHRoaXMud2EoKSx0aGlzLncoKVtkXT1jLHRoaXMudmEoKSl9LHNvcnRlZDpmdW5jdGlvbihhKXt2YXIgYz10aGlzKCkuc2xpY2UoMCk7XG5yZXR1cm4gYT9jLnNvcnQoYSk6Yy5zb3J0KCl9LHJldmVyc2VkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMoKS5zbGljZSgwKS5yZXZlcnNlKCl9fTthLmEuemEmJmEuYS5zZXRQcm90b3R5cGVPZihhLkdhLmZuLGEuZ2EuZm4pO2EuYS5CKFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2EuR2EuZm5bYl09ZnVuY3Rpb24oKXt2YXIgYT10aGlzLncoKTt0aGlzLndhKCk7dGhpcy5zYyhhLGIsYXJndW1lbnRzKTt2YXIgZD1hW2JdLmFwcGx5KGEsYXJndW1lbnRzKTt0aGlzLnZhKCk7cmV0dXJuIGQ9PT1hP3RoaXM6ZH19KTthLmEuQihbXCJzbGljZVwiXSxmdW5jdGlvbihiKXthLkdhLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcygpO3JldHVybiBhW2JdLmFwcGx5KGEsYXJndW1lbnRzKX19KTthLkxjPWZ1bmN0aW9uKGIpe3JldHVybiBhLk0oYikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGIucmVtb3ZlJiZcImZ1bmN0aW9uXCI9PVxudHlwZW9mIGIucHVzaH07YS5iKFwib2JzZXJ2YWJsZUFycmF5XCIsYS5HYSk7YS5iKFwiaXNPYnNlcnZhYmxlQXJyYXlcIixhLkxjKTthLlNhLnRyYWNrQXJyYXlDaGFuZ2VzPWZ1bmN0aW9uKGIsYyl7ZnVuY3Rpb24gZCgpe2lmKCFlKXtlPSEwO2w9Yi5ub3RpZnlTdWJzY3JpYmVycztiLm5vdGlmeVN1YnNjcmliZXJzPWZ1bmN0aW9uKGEsYil7YiYmXCJjaGFuZ2VcIiE9PWJ8fCsraDtyZXR1cm4gbC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3ZhciBjPVtdLmNvbmNhdChiLncoKXx8W10pO2Y9bnVsbDtnPWIuc3Vic2NyaWJlKGZ1bmN0aW9uKGQpe2Q9W10uY29uY2F0KGR8fFtdKTtpZihiLlVhKFwiYXJyYXlDaGFuZ2VcIikpe3ZhciBlO2lmKCFmfHwxPGgpZj1hLmEuSWIoYyxkLGIuSGIpO2U9Zn1jPWQ7Zj1udWxsO2g9MDtlJiZlLmxlbmd0aCYmYi5ub3RpZnlTdWJzY3JpYmVycyhlLFwiYXJyYXlDaGFuZ2VcIil9KX19Yi5IYj17fTtjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmYS5hLmV4dGVuZChiLkhiLFxuYyk7Yi5IYi5zcGFyc2U9ITA7aWYoIWIuc2Mpe3ZhciBlPSExLGY9bnVsbCxnLGg9MCxsLGs9Yi5QYSxtPWIuYWI7Yi5QYT1mdW5jdGlvbihhKXtrJiZrLmNhbGwoYixhKTtcImFycmF5Q2hhbmdlXCI9PT1hJiZkKCl9O2IuYWI9ZnVuY3Rpb24oYSl7bSYmbS5jYWxsKGIsYSk7XCJhcnJheUNoYW5nZVwiIT09YXx8Yi5VYShcImFycmF5Q2hhbmdlXCIpfHwobCYmKGIubm90aWZ5U3Vic2NyaWJlcnM9bCxsPW4pLGcmJmcubSgpLGc9bnVsbCxlPSExKX07Yi5zYz1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gbShhLGIsYyl7cmV0dXJuIGtbay5sZW5ndGhdPXtzdGF0dXM6YSx2YWx1ZTpiLGluZGV4OmN9fWlmKGUmJiFoKXt2YXIgaz1bXSxnPWIubGVuZ3RoLGw9ZC5sZW5ndGgsST0wO3N3aXRjaChjKXtjYXNlIFwicHVzaFwiOkk9ZztjYXNlIFwidW5zaGlmdFwiOmZvcihjPTA7YzxsO2MrKyltKFwiYWRkZWRcIixkW2NdLEkrYyk7YnJlYWs7Y2FzZSBcInBvcFwiOkk9Zy0xO2Nhc2UgXCJzaGlmdFwiOmcmJm0oXCJkZWxldGVkXCIsXG5iW0ldLEkpO2JyZWFrO2Nhc2UgXCJzcGxpY2VcIjpjPU1hdGgubWluKE1hdGgubWF4KDAsMD5kWzBdP2crZFswXTpkWzBdKSxnKTtmb3IodmFyIGc9MT09PWw/ZzpNYXRoLm1pbihjKyhkWzFdfHwwKSxnKSxsPWMrbC0yLEk9TWF0aC5tYXgoZyxsKSxSPVtdLEw9W10sbj0yO2M8STsrK2MsKytuKWM8ZyYmTC5wdXNoKG0oXCJkZWxldGVkXCIsYltjXSxjKSksYzxsJiZSLnB1c2gobShcImFkZGVkXCIsZFtuXSxjKSk7YS5hLkVjKEwsUik7YnJlYWs7ZGVmYXVsdDpyZXR1cm59Zj1rfX19fTt2YXIgdT1hLmEuUmEoXCJfc3RhdGVcIik7YS5zPWEuVD1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe2lmKDA8YXJndW1lbnRzLmxlbmd0aCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZi5hcHBseShnLmpiLGFyZ3VtZW50cyk7ZWxzZSB0aHJvdyBFcnJvcihcIkNhbm5vdCB3cml0ZSBhIHZhbHVlIHRvIGEga28uY29tcHV0ZWQgdW5sZXNzIHlvdSBzcGVjaWZ5IGEgJ3dyaXRlJyBvcHRpb24uIElmIHlvdSB3aXNoIHRvIHJlYWQgdGhlIGN1cnJlbnQgdmFsdWUsIGRvbid0IHBhc3MgYW55IHBhcmFtZXRlcnMuXCIpO1xucmV0dXJuIHRoaXN9Zy5wYXx8YS51LlViKGUpOyhnLmthfHxnLksmJmUuVmEoKSkmJmUuZWEoKTtyZXR1cm4gZy5WfVwib2JqZWN0XCI9PT10eXBlb2YgYj9kPWI6KGQ9ZHx8e30sYiYmKGQucmVhZD1iKSk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZC5yZWFkKXRocm93IEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpO3ZhciBmPWQud3JpdGUsZz17VjpuLHFhOiEwLGthOiEwLG5iOiExLGFjOiExLHBhOiExLHRiOiExLEs6ITEsU2M6ZC5yZWFkLGpiOmN8fGQub3duZXIsajpkLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZHx8ZC5qfHxudWxsLEJhOmQuZGlzcG9zZVdoZW58fGQuQmEsS2I6bnVsbCxGOnt9LFo6MCxDYzpudWxsfTtlW3VdPWc7ZS5JYz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZjthLmEuemF8fGEuYS5leHRlbmQoZSxhLlIuZm4pO2EuUi5mbi5tYihlKTthLmEud2IoZSxCKTtkLnB1cmU/KGcudGI9ITAsZy5LPSEwLFxuYS5hLmV4dGVuZChlLGFhKSk6ZC5kZWZlckV2YWx1YXRpb24mJmEuYS5leHRlbmQoZSxiYSk7YS5vcHRpb25zLmRlZmVyVXBkYXRlcyYmYS5TYS5kZWZlcnJlZChlLCEwKTtnLmomJihnLmFjPSEwLGcuai5ub2RlVHlwZXx8KGcuaj1udWxsKSk7Zy5LfHxkLmRlZmVyRXZhbHVhdGlvbnx8ZS5lYSgpO2cuaiYmZS5mYSgpJiZhLmEuRy5uYShnLmosZy5LYj1mdW5jdGlvbigpe2UubSgpfSk7cmV0dXJuIGV9O3ZhciBCPXtlcXVhbGl0eUNvbXBhcmVyOkssRWE6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1t1XS5afSxrYjpmdW5jdGlvbigpe3ZhciBiPVtdO2EuYS5OKHRoaXNbdV0uRixmdW5jdGlvbihhLGQpe2JbZC5KYV09ZC5oYX0pO3JldHVybiBifSxtYzpmdW5jdGlvbihhLGMsZCl7aWYodGhpc1t1XS50YiYmYz09PXRoaXMpdGhyb3cgRXJyb3IoXCJBICdwdXJlJyBjb21wdXRlZCBtdXN0IG5vdCBiZSBjYWxsZWQgcmVjdXJzaXZlbHlcIik7dGhpc1t1XS5GW2FdPWQ7ZC5KYT10aGlzW3VdLlorKztcbmQuS2E9Yy5sYigpfSxWYTpmdW5jdGlvbigpe3ZhciBhLGMsZD10aGlzW3VdLkY7Zm9yKGEgaW4gZClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZCxhKSYmKGM9ZFthXSx0aGlzLkhhJiZjLmhhLklhfHxjLmhhLkNkKGMuS2EpKSlyZXR1cm4hMH0sSWQ6ZnVuY3Rpb24oKXt0aGlzLkhhJiYhdGhpc1t1XS5uYiYmdGhpcy5IYSghMSl9LGZhOmZ1bmN0aW9uKCl7dmFyIGE9dGhpc1t1XTtyZXR1cm4gYS5rYXx8MDxhLlp9LFFkOmZ1bmN0aW9uKCl7dGhpcy5JYT90aGlzW3VdLmthJiYodGhpc1t1XS5xYT0hMCk6dGhpcy5CYygpfSxXYzpmdW5jdGlvbihhKXtpZihhLkRiKXt2YXIgYz1hLnN1YnNjcmliZSh0aGlzLklkLHRoaXMsXCJkaXJ0eVwiKSxkPWEuc3Vic2NyaWJlKHRoaXMuUWQsdGhpcyk7cmV0dXJue2hhOmEsbTpmdW5jdGlvbigpe2MubSgpO2QubSgpfX19cmV0dXJuIGEuc3Vic2NyaWJlKHRoaXMuQmMsdGhpcyl9LEJjOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxcbmM9Yi50aHJvdHRsZUV2YWx1YXRpb247YyYmMDw9Yz8oY2xlYXJUaW1lb3V0KHRoaXNbdV0uQ2MpLHRoaXNbdV0uQ2M9YS5hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmVhKCEwKX0sYykpOmIuSGE/Yi5IYSghMCk6Yi5lYSghMCl9LGVhOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXNbdV0sZD1jLkJhLGU9ITE7aWYoIWMubmImJiFjLnBhKXtpZihjLmomJiFhLmEuTGIoYy5qKXx8ZCYmZCgpKXtpZighYy5hYyl7dGhpcy5tKCk7cmV0dXJufX1lbHNlIGMuYWM9ITE7Yy5uYj0hMDt0cnl7ZT10aGlzLnlkKGIpfWZpbmFsbHl7Yy5uYj0hMX1yZXR1cm4gZX19LHlkOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXNbdV0sZD0hMSxlPWMudGI/bjohYy5aLGQ9e25kOnRoaXMsaWI6Yy5GLEpiOmMuWn07YS51LnJjKHttZDpkLGxkOlosczp0aGlzLHBiOmV9KTtjLkY9e307Yy5aPTA7dmFyIGY9dGhpcy54ZChjLGQpO2MuWj9kPXRoaXMub2IoYy5WLGYpOih0aGlzLm0oKSxkPSEwKTtkJiYoYy5LP3RoaXMuQ2IoKTpcbnRoaXMubm90aWZ5U3Vic2NyaWJlcnMoYy5WLFwiYmVmb3JlQ2hhbmdlXCIpLGMuVj1mLHRoaXMubm90aWZ5U3Vic2NyaWJlcnMoYy5WLFwic3BlY3RhdGVcIiksIWMuSyYmYiYmdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlYpLHRoaXMuamMmJnRoaXMuamMoKSk7ZSYmdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlYsXCJhd2FrZVwiKTtyZXR1cm4gZH0seGQ6ZnVuY3Rpb24oYixjKXt0cnl7dmFyIGQ9Yi5TYztyZXR1cm4gYi5qYj9kLmNhbGwoYi5qYik6ZCgpfWZpbmFsbHl7YS51LmVuZCgpLGMuSmImJiFiLksmJmEuYS5OKGMuaWIsWSksYi5xYT1iLmthPSExfX0sdzpmdW5jdGlvbihhKXt2YXIgYz10aGlzW3VdOyhjLmthJiYoYXx8IWMuWil8fGMuSyYmdGhpcy5WYSgpKSYmdGhpcy5lYSgpO3JldHVybiBjLlZ9LHJiOmZ1bmN0aW9uKGIpe2EuUi5mbi5yYi5jYWxsKHRoaXMsYik7dGhpcy5kYz1mdW5jdGlvbigpe3RoaXNbdV0ucWE/dGhpcy5lYSgpOnRoaXNbdV0ua2E9ITE7cmV0dXJuIHRoaXNbdV0uVn07XG50aGlzLkhhPWZ1bmN0aW9uKGEpe3RoaXMuZ2ModGhpc1t1XS5WKTt0aGlzW3VdLmthPSEwO2EmJih0aGlzW3VdLnFhPSEwKTt0aGlzLmhjKHRoaXMsIWEpfX0sbTpmdW5jdGlvbigpe3ZhciBiPXRoaXNbdV07IWIuSyYmYi5GJiZhLmEuTihiLkYsZnVuY3Rpb24oYSxiKXtiLm0mJmIubSgpfSk7Yi5qJiZiLktiJiZhLmEuRy51YihiLmosYi5LYik7Yi5GPW47Yi5aPTA7Yi5wYT0hMDtiLnFhPSExO2Iua2E9ITE7Yi5LPSExO2Iuaj1uO2IuQmE9bjtiLlNjPW47dGhpcy5JY3x8KGIuamI9bil9fSxhYT17UGE6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWNbdV07aWYoIWQucGEmJmQuSyYmXCJjaGFuZ2VcIj09Yil7ZC5LPSExO2lmKGQucWF8fGMuVmEoKSlkLkY9bnVsbCxkLlo9MCxjLmVhKCkmJmMuQ2IoKTtlbHNle3ZhciBlPVtdO2EuYS5OKGQuRixmdW5jdGlvbihhLGIpe2VbYi5KYV09YX0pO2EuYS5CKGUsZnVuY3Rpb24oYSxiKXt2YXIgZT1kLkZbYV0sbD1jLldjKGUuaGEpO2wuSmE9YjtcbmwuS2E9ZS5LYTtkLkZbYV09bH0pO2MuVmEoKSYmYy5lYSgpJiZjLkNiKCl9ZC5wYXx8Yy5ub3RpZnlTdWJzY3JpYmVycyhkLlYsXCJhd2FrZVwiKX19LGFiOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXNbdV07Yy5wYXx8XCJjaGFuZ2VcIiE9Ynx8dGhpcy5VYShcImNoYW5nZVwiKXx8KGEuYS5OKGMuRixmdW5jdGlvbihhLGIpe2IubSYmKGMuRlthXT17aGE6Yi5oYSxKYTpiLkphLEthOmIuS2F9LGIubSgpKX0pLGMuSz0hMCx0aGlzLm5vdGlmeVN1YnNjcmliZXJzKG4sXCJhc2xlZXBcIikpfSxsYjpmdW5jdGlvbigpe3ZhciBiPXRoaXNbdV07Yi5LJiYoYi5xYXx8dGhpcy5WYSgpKSYmdGhpcy5lYSgpO3JldHVybiBhLlIuZm4ubGIuY2FsbCh0aGlzKX19LGJhPXtQYTpmdW5jdGlvbihhKXtcImNoYW5nZVwiIT1hJiZcImJlZm9yZUNoYW5nZVwiIT1hfHx0aGlzLncoKX19O2EuYS56YSYmYS5hLnNldFByb3RvdHlwZU9mKEIsYS5SLmZuKTt2YXIgUz1hLmdhLkxhO0JbU109YS5zO2EuS2M9ZnVuY3Rpb24oYil7cmV0dXJuXCJmdW5jdGlvblwiPT1cbnR5cGVvZiBiJiZiW1NdPT09YS5zfTthLkVkPWZ1bmN0aW9uKGIpe3JldHVybiBhLktjKGIpJiZiW3VdJiZiW3VdLnRifTthLmIoXCJjb21wdXRlZFwiLGEucyk7YS5iKFwiZGVwZW5kZW50T2JzZXJ2YWJsZVwiLGEucyk7YS5iKFwiaXNDb21wdXRlZFwiLGEuS2MpO2EuYihcImlzUHVyZUNvbXB1dGVkXCIsYS5FZCk7YS5iKFwiY29tcHV0ZWQuZm5cIixCKTthLkkoQixcInBlZWtcIixCLncpO2EuSShCLFwiZGlzcG9zZVwiLEIubSk7YS5JKEIsXCJpc0FjdGl2ZVwiLEIuZmEpO2EuSShCLFwiZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixCLkVhKTthLkkoQixcImdldERlcGVuZGVuY2llc1wiLEIua2IpO2EuVGI9ZnVuY3Rpb24oYixjKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYS5zKGIsYyx7cHVyZTohMH0pO2I9YS5hLmV4dGVuZCh7fSxiKTtiLnB1cmU9ITA7cmV0dXJuIGEucyhiLGMpfTthLmIoXCJwdXJlQ29tcHV0ZWRcIixhLlRiKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZixnKXtnPWd8fG5ldyBkO1xuYT1mKGEpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBhfHxudWxsPT09YXx8YT09PW58fGEgaW5zdGFuY2VvZiBSZWdFeHB8fGEgaW5zdGFuY2VvZiBEYXRlfHxhIGluc3RhbmNlb2YgU3RyaW5nfHxhIGluc3RhbmNlb2YgTnVtYmVyfHxhIGluc3RhbmNlb2YgQm9vbGVhbilyZXR1cm4gYTt2YXIgaD1hIGluc3RhbmNlb2YgQXJyYXk/W106e307Zy5zYXZlKGEsaCk7YyhhLGZ1bmN0aW9uKGMpe3ZhciBkPWYoYVtjXSk7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6aFtjXT1kO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpjYXNlIFwidW5kZWZpbmVkXCI6dmFyIG09Zy5nZXQoZCk7aFtjXT1tIT09bj9tOmIoZCxmLGcpfX0pO3JldHVybiBofWZ1bmN0aW9uIGMoYSxiKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIoYyk7XCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0pTT04mJlxuYihcInRvSlNPTlwiKX1lbHNlIGZvcihjIGluIGEpYihjKX1mdW5jdGlvbiBkKCl7dGhpcy5rZXlzPVtdO3RoaXMudmFsdWVzPVtdfWEuWGM9ZnVuY3Rpb24oYyl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7cmV0dXJuIGIoYyxmdW5jdGlvbihiKXtmb3IodmFyIGM9MDthLk0oYikmJjEwPmM7YysrKWI9YigpO3JldHVybiBifSl9O2EudG9KU09OPWZ1bmN0aW9uKGIsYyxkKXtiPWEuWGMoYik7cmV0dXJuIGEuYS5aYihiLGMsZCl9O2QucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpkLHNhdmU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuRCh0aGlzLmtleXMsYik7MDw9ZD90aGlzLnZhbHVlc1tkXT1jOih0aGlzLmtleXMucHVzaChiKSx0aGlzLnZhbHVlcy5wdXNoKGMpKX0sZ2V0OmZ1bmN0aW9uKGIpe2I9YS5hLkQodGhpcy5rZXlzLGIpO3JldHVybiAwPD1iP3RoaXMudmFsdWVzW2JdOlxubn19fSkoKTthLmIoXCJ0b0pTXCIsYS5YYyk7YS5iKFwidG9KU09OXCIsYS50b0pTT04pO2EuV2Q9ZnVuY3Rpb24oYixjLGQpe2I9YS5UYihiKS5leHRlbmQoe1lhOlwiYWx3YXlzXCJ9KTt2YXIgZT1iLnN1YnNjcmliZShmdW5jdGlvbihhKXthJiYoZS5tKCksYy5jYWxsKGQpKX0pO2Iubm90aWZ5U3Vic2NyaWJlcnMoYi53KCkpO3JldHVybiBlfTthLmIoXCJ3aGVuXCIsYS5XZCk7KGZ1bmN0aW9uKCl7YS5vPXtMOmZ1bmN0aW9uKGIpe3N3aXRjaChhLmEuTyhiKSl7Y2FzZSBcIm9wdGlvblwiOnJldHVybiEwPT09Yi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz9hLmEuZy5nZXQoYixhLmYub3B0aW9ucy5RYik6Nz49YS5hLlU/Yi5nZXRBdHRyaWJ1dGVOb2RlKFwidmFsdWVcIikmJmIuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpLnNwZWNpZmllZD9iLnZhbHVlOmIudGV4dDpiLnZhbHVlO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9Yi5zZWxlY3RlZEluZGV4P2Euby5MKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKTpcbm47ZGVmYXVsdDpyZXR1cm4gYi52YWx1ZX19LHhhOmZ1bmN0aW9uKGIsYyxkKXtzd2l0Y2goYS5hLk8oYikpe2Nhc2UgXCJvcHRpb25cIjpcInN0cmluZ1wiPT09dHlwZW9mIGM/KGEuYS5nLnNldChiLGEuZi5vcHRpb25zLlFiLG4pLFwiX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX19cImluIGImJmRlbGV0ZSBiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fLGIudmFsdWU9Yyk6KGEuYS5nLnNldChiLGEuZi5vcHRpb25zLlFiLGMpLGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189ITAsYi52YWx1ZT1cIm51bWJlclwiPT09dHlwZW9mIGM/YzpcIlwiKTticmVhaztjYXNlIFwic2VsZWN0XCI6aWYoXCJcIj09PWN8fG51bGw9PT1jKWM9bjtmb3IodmFyIGU9LTEsZj0wLGc9Yi5vcHRpb25zLmxlbmd0aCxoO2Y8ZzsrK2YpaWYoaD1hLm8uTChiLm9wdGlvbnNbZl0pLGg9PWN8fFwiXCI9PT1oJiZjPT09bil7ZT1mO2JyZWFrfWlmKGR8fDA8PWV8fGM9PT1uJiYxPGIuc2l6ZSliLnNlbGVjdGVkSW5kZXg9XG5lLDY9PT1hLmEuVSYmYS5hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLnNlbGVjdGVkSW5kZXg9ZX0sMCk7YnJlYWs7ZGVmYXVsdDppZihudWxsPT09Y3x8Yz09PW4pYz1cIlwiO2IudmFsdWU9Y319fX0pKCk7YS5iKFwic2VsZWN0RXh0ZW5zaW9uc1wiLGEubyk7YS5iKFwic2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWVcIixhLm8uTCk7YS5iKFwic2VsZWN0RXh0ZW5zaW9ucy53cml0ZVZhbHVlXCIsYS5vLnhhKTthLmw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe2I9YS5hLnliKGIpOzEyMz09PWIuY2hhckNvZGVBdCgwKSYmKGI9Yi5zbGljZSgxLC0xKSk7Yis9XCJcXG4sXCI7dmFyIGM9W10sZD1iLm1hdGNoKGUpLHEscD1bXSxoPTA7aWYoMTxkLmxlbmd0aClmb3IodmFyIHY9MCx5O3k9ZFt2XTsrK3Ype3ZhciB0PXkuY2hhckNvZGVBdCgwKTtpZig0ND09PXQpe2lmKDA+PWgpe2MucHVzaChxJiZwLmxlbmd0aD97a2V5OnEsdmFsdWU6cC5qb2luKFwiXCIpfTp7dW5rbm93bjpxfHxwLmpvaW4oXCJcIil9KTtcbnE9aD0wO3A9W107Y29udGludWV9fWVsc2UgaWYoNTg9PT10KXtpZighaCYmIXEmJjE9PT1wLmxlbmd0aCl7cT1wLnBvcCgpO2NvbnRpbnVlfX1lbHNlIGlmKDQ3PT09dCYmMTx5Lmxlbmd0aCYmKDQ3PT09eS5jaGFyQ29kZUF0KDEpfHw0Mj09PXkuY2hhckNvZGVBdCgxKSkpY29udGludWU7ZWxzZSA0Nz09PXQmJnYmJjE8eS5sZW5ndGg/KHQ9ZFt2LTFdLm1hdGNoKGYpKSYmIWdbdFswXV0mJihiPWIuc3Vic3RyKGIuaW5kZXhPZih5KSsxKSxkPWIubWF0Y2goZSksdj0tMSx5PVwiL1wiKTo0MD09PXR8fDEyMz09PXR8fDkxPT09dD8rK2g6NDE9PT10fHwxMjU9PT10fHw5Mz09PXQ/LS1oOnF8fHAubGVuZ3RofHwzNCE9PXQmJjM5IT09dHx8KHk9eS5zbGljZSgxLC0xKSk7cC5wdXNoKHkpfXJldHVybiBjfXZhciBjPVtcInRydWVcIixcImZhbHNlXCIsXCJudWxsXCIsXCJ1bmRlZmluZWRcIl0sZD0vXig/OlskX2Etel1bJFxcd10qfCguKykoXFwuXFxzKlskX2Etel1bJFxcd10qfFxcWy4rXFxdKSkkL2ksZT1SZWdFeHAoXCJcXFwiKD86XFxcXFxcXFwufFteXFxcIl0pKlxcXCJ8Jyg/OlxcXFxcXFxcLnxbXiddKSonfGAoPzpcXFxcXFxcXC58W15gXSkqYHwvXFxcXCooPzpbXipdfFxcXFwqK1teKi9dKSpcXFxcKisvfC8vLipcXG58Lyg/OlxcXFxcXFxcLnxbXi9dKSsvdyp8W15cXFxcczosL11bXixcXFwiJ2B7fSgpLzpbXFxcXF1dKlteXFxcXHMsXFxcIidge30oKS86W1xcXFxdXXxbXlxcXFxzXVwiLFxuXCJnXCIpLGY9L1tcXF0pXCInQS1aYS16MC05XyRdKyQvLGc9e1wiaW5cIjoxLFwicmV0dXJuXCI6MSxcInR5cGVvZlwiOjF9LGg9e307cmV0dXJue1FhOltdLHVhOmgsUmI6YixzYjpmdW5jdGlvbihlLGYpe2Z1bmN0aW9uIG0oYixlKXt2YXIgZjtpZighdil7dmFyIGs9YS5nZXRCaW5kaW5nSGFuZGxlcihiKTtpZihrJiZrLnByZXByb2Nlc3MmJiEoZT1rLnByZXByb2Nlc3MoZSxiLG0pKSlyZXR1cm47aWYoaz1oW2JdKWY9ZSwwPD1hLmEuRChjLGYpP2Y9ITE6KGs9Zi5tYXRjaChkKSxmPW51bGw9PT1rPyExOmtbMV0/XCJPYmplY3QoXCIra1sxXStcIilcIitrWzJdOmYpLGs9ZjtrJiZnLnB1c2goXCInXCIrKFwic3RyaW5nXCI9PXR5cGVvZiBoW2JdP2hbYl06YikrXCInOmZ1bmN0aW9uKF96KXtcIitmK1wiPV96fVwiKX1yJiYoZT1cImZ1bmN0aW9uKCl7cmV0dXJuIFwiK2UrXCIgfVwiKTtxLnB1c2goXCInXCIrYitcIic6XCIrZSl9Zj1mfHx7fTt2YXIgcT1bXSxnPVtdLHI9Zi52YWx1ZUFjY2Vzc29ycyx2PWYuYmluZGluZ1BhcmFtcyxcbnk9XCJzdHJpbmdcIj09PXR5cGVvZiBlP2IoZSk6ZTthLmEuQih5LGZ1bmN0aW9uKGEpe20oYS5rZXl8fGEudW5rbm93bixhLnZhbHVlKX0pO2cubGVuZ3RoJiZtKFwiX2tvX3Byb3BlcnR5X3dyaXRlcnNcIixcIntcIitnLmpvaW4oXCIsXCIpK1wiIH1cIik7cmV0dXJuIHEuam9pbihcIixcIil9LEhkOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspaWYoYVtjXS5rZXk9PWIpcmV0dXJuITA7cmV0dXJuITF9LFphOmZ1bmN0aW9uKGIsYyxkLGUsZil7aWYoYiYmYS5NKGIpKSFhLldhKGIpfHxmJiZiLncoKT09PWV8fGIoZSk7ZWxzZSBpZigoYj1jLmdldChcIl9rb19wcm9wZXJ0eV93cml0ZXJzXCIpKSYmYltkXSliW2RdKGUpfX19KCk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZ1wiLGEubCk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNcIixhLmwuUWEpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsXCIsYS5sLlJiKTtcbmEuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYS5sLnNiKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLl90d29XYXlCaW5kaW5nc1wiLGEubC51YSk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmdcIixhLmwpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nLmluc2VydFByb3BlcnR5QWNjZXNzb3JzSW50b0pzb25cIixhLmwuc2IpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJmcudGVzdChmP2EudGV4dDphLm5vZGVWYWx1ZSl9ZnVuY3Rpb24gYyhhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmaC50ZXN0KGY/YS50ZXh0OmEubm9kZVZhbHVlKX1mdW5jdGlvbiBkKGQsZSl7Zm9yKHZhciBmPWQsZz0xLGg9W107Zj1mLm5leHRTaWJsaW5nOyl7aWYoYyhmKSYmKGEuYS5nLnNldChmLGssITApLGctLSwwPT09ZykpcmV0dXJuIGg7aC5wdXNoKGYpO2IoZikmJmcrK31pZighZSl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK1xuZC5ub2RlVmFsdWUpO3JldHVybiBudWxsfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1kKGEsYik7cmV0dXJuIGM/MDxjLmxlbmd0aD9jW2MubGVuZ3RoLTFdLm5leHRTaWJsaW5nOmEubmV4dFNpYmxpbmc6bnVsbH12YXIgZj14JiZcIlxceDNjIS0tdGVzdC0tXFx4M2VcIj09PXguY3JlYXRlQ29tbWVudChcInRlc3RcIikudGV4dCxnPWY/L15cXHgzYyEtLVxccyprbyg/OlxccysoW1xcc1xcU10rKSk/XFxzKi0tXFx4M2UkLzovXlxccyprbyg/OlxccysoW1xcc1xcU10rKSk/XFxzKiQvLGg9Zj8vXlxceDNjIS0tXFxzKlxcL2tvXFxzKi0tXFx4M2UkLzovXlxccypcXC9rb1xccyokLyxsPXt1bDohMCxvbDohMH0saz1cIl9fa29fbWF0Y2hlZEVuZENvbW1lbnRfX1wiO2EuaD17Y2E6e30sY2hpbGROb2RlczpmdW5jdGlvbihhKXtyZXR1cm4gYihhKT9kKGEpOmEuY2hpbGROb2Rlc30sQ2E6ZnVuY3Rpb24oYyl7aWYoYihjKSl7Yz1hLmguY2hpbGROb2RlcyhjKTtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYS5yZW1vdmVOb2RlKGNbZF0pfWVsc2UgYS5hLk1iKGMpfSxcbnRhOmZ1bmN0aW9uKGMsZCl7aWYoYihjKSl7YS5oLkNhKGMpO2Zvcih2YXIgZT1jLm5leHRTaWJsaW5nLGY9MCxrPWQubGVuZ3RoO2Y8aztmKyspZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkW2ZdLGUpfWVsc2UgYS5hLnRhKGMsZCl9LFJjOmZ1bmN0aW9uKGEsYyl7YihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGMsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGMpfSxKYzpmdW5jdGlvbihjLGQsZSl7ZT9iKGMpP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZCxlLm5leHRTaWJsaW5nKTplLm5leHRTaWJsaW5nP2MuaW5zZXJ0QmVmb3JlKGQsZS5uZXh0U2libGluZyk6Yy5hcHBlbmRDaGlsZChkKTphLmguUmMoYyxkKX0sZmlyc3RDaGlsZDpmdW5jdGlvbihhKXtpZihiKGEpKXJldHVybiFhLm5leHRTaWJsaW5nfHxjKGEubmV4dFNpYmxpbmcpP251bGw6YS5uZXh0U2libGluZztpZihhLmZpcnN0Q2hpbGQmJlxuYyhhLmZpcnN0Q2hpbGQpKXRocm93IEVycm9yKFwiRm91bmQgaW52YWxpZCBlbmQgY29tbWVudCwgYXMgdGhlIGZpcnN0IGNoaWxkIG9mIFwiK2EpO3JldHVybiBhLmZpcnN0Q2hpbGR9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGQpe2IoZCkmJihkPWUoZCkpO2lmKGQubmV4dFNpYmxpbmcmJmMoZC5uZXh0U2libGluZykpe3ZhciBmPWQubmV4dFNpYmxpbmc7aWYoYyhmKSYmIWEuYS5nLmdldChmLGspKXRocm93IEVycm9yKFwiRm91bmQgZW5kIGNvbW1lbnQgd2l0aG91dCBhIG1hdGNoaW5nIG9wZW5pbmcgY29tbWVudCwgYXMgY2hpbGQgb2YgXCIrZCk7cmV0dXJuIG51bGx9cmV0dXJuIGQubmV4dFNpYmxpbmd9LEJkOmIsVmQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9KGY/YS50ZXh0OmEubm9kZVZhbHVlKS5tYXRjaChnKSk/YVsxXTpudWxsfSxPYzpmdW5jdGlvbihkKXtpZihsW2EuYS5PKGQpXSl7dmFyIGY9ZC5maXJzdENoaWxkO2lmKGYpe2RvIGlmKDE9PT1mLm5vZGVUeXBlKXt2YXIgaztrPVxuZi5maXJzdENoaWxkO3ZhciBnPW51bGw7aWYoayl7ZG8gaWYoZylnLnB1c2goayk7ZWxzZSBpZihiKGspKXt2YXIgaD1lKGssITApO2g/az1oOmc9W2tdfWVsc2UgYyhrKSYmKGc9W2tdKTt3aGlsZShrPWsubmV4dFNpYmxpbmcpfWlmKGs9Zylmb3IoZz1mLm5leHRTaWJsaW5nLGg9MDtoPGsubGVuZ3RoO2grKylnP2QuaW5zZXJ0QmVmb3JlKGtbaF0sZyk6ZC5hcHBlbmRDaGlsZChrW2hdKX13aGlsZShmPWYubmV4dFNpYmxpbmcpfX19fX0pKCk7YS5iKFwidmlydHVhbEVsZW1lbnRzXCIsYS5oKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzXCIsYS5oLmNhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYS5oLkNhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXJcIixhLmguSmMpO2EuYihcInZpcnR1YWxFbGVtZW50cy5wcmVwZW5kXCIsYS5oLlJjKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuXCIsYS5oLnRhKTsoZnVuY3Rpb24oKXthLmRhPVxuZnVuY3Rpb24oKXt0aGlzLmtkPXt9fTthLmEuZXh0ZW5kKGEuZGEucHJvdG90eXBlLHtub2RlSGFzQmluZGluZ3M6ZnVuY3Rpb24oYil7c3dpdGNoKGIubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gbnVsbCE9Yi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIil8fGEuaS5nZXRDb21wb25lbnROYW1lRm9yTm9kZShiKTtjYXNlIDg6cmV0dXJuIGEuaC5CZChiKTtkZWZhdWx0OnJldHVybiExfX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGIsYyksZD1kP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhkLGMsYik6bnVsbDtyZXR1cm4gYS5pLmxjKGQsYixjLCExKX0sZ2V0QmluZGluZ0FjY2Vzc29yczpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuZ2V0QmluZGluZ3NTdHJpbmcoYixjKSxkPWQ/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGQsYyxiLHt2YWx1ZUFjY2Vzc29yczohMH0pOm51bGw7cmV0dXJuIGEuaS5sYyhkLGIsYywhMCl9LGdldEJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpO1xuY2FzZSA4OnJldHVybiBhLmguVmQoYik7ZGVmYXVsdDpyZXR1cm4gbnVsbH19LHBhcnNlQmluZGluZ3NTdHJpbmc6ZnVuY3Rpb24oYixjLGQsZSl7dHJ5e3ZhciBmPXRoaXMua2QsZz1iKyhlJiZlLnZhbHVlQWNjZXNzb3JzfHxcIlwiKSxoO2lmKCEoaD1mW2ddKSl7dmFyIGwsaz1cIndpdGgoJGNvbnRleHQpe3dpdGgoJGRhdGF8fHt9KXtyZXR1cm57XCIrYS5sLnNiKGIsZSkrXCJ9fX1cIjtsPW5ldyBGdW5jdGlvbihcIiRjb250ZXh0XCIsXCIkZWxlbWVudFwiLGspO2g9ZltnXT1sfXJldHVybiBoKGMsZCl9Y2F0Y2gobSl7dGhyb3cgbS5tZXNzYWdlPVwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbkJpbmRpbmdzIHZhbHVlOiBcIitiK1wiXFxuTWVzc2FnZTogXCIrbS5tZXNzYWdlLG07fX19KTthLmRhLmluc3RhbmNlPW5ldyBhLmRhfSkoKTthLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixhLmRhKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPShiPWEuYS5nLmdldChiLEMpKSYmYi5QO2MmJihiLlA9XG5uLGMuUGMoKSl9ZnVuY3Rpb24gYyhjLGQsZSl7dGhpcy5ub2RlPWM7dGhpcy5nYj1kO3RoaXMuZmI9W107dGhpcy5ZPSExO2QuUHx8YS5hLkcubmEoYyxiKTtlJiZlLlAmJihlLlAuZmIucHVzaChjKSx0aGlzLkZiPWUpfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGF9fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIGEoKX1mdW5jdGlvbiBmKGIpe3JldHVybiBhLmEuRmEoYS51LkooYiksZnVuY3Rpb24oYSxjKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYigpW2NdfX0pfWZ1bmN0aW9uIGcoYixjLGUpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2YoYi5iaW5kKG51bGwsYyxlKSk6YS5hLkZhKGIsZCl9ZnVuY3Rpb24gaChhLGIpe3JldHVybiBmKHRoaXMuZ2V0QmluZGluZ3MuYmluZCh0aGlzLGEsYikpfWZ1bmN0aW9uIGwoYixjKXt2YXIgZD1hLmguZmlyc3RDaGlsZChjKTtpZihkKXt2YXIgZSxmPWEuZGEuaW5zdGFuY2UsbT1mLnByZXByb2Nlc3NOb2RlO1xuaWYobSl7Zm9yKDtlPWQ7KWQ9YS5oLm5leHRTaWJsaW5nKGUpLG0uY2FsbChmLGUpO2Q9YS5oLmZpcnN0Q2hpbGQoYyl9Zm9yKDtlPWQ7KWQ9YS5oLm5leHRTaWJsaW5nKGUpLGsoYixlKTthLnYuWWEoYyxhLnYuWSl9fWZ1bmN0aW9uIGsoYixjKXt2YXIgZD0hMCxlPTE9PT1jLm5vZGVUeXBlO2UmJmEuaC5PYyhjKTtpZihlfHxhLmRhLmluc3RhbmNlLm5vZGVIYXNCaW5kaW5ncyhjKSlkPXEoYyxudWxsLGIpLnNob3VsZEJpbmREZXNjZW5kYW50cztkJiYheVthLmEuTyhjKV0mJmwoYixjKX1mdW5jdGlvbiBtKGIpe3ZhciBjPVtdLGQ9e30sZT1bXTthLmEuTihiLGZ1bmN0aW9uIHooZil7aWYoIWRbZl0pe3ZhciBrPWEuZ2V0QmluZGluZ0hhbmRsZXIoZik7ayYmKGsuYWZ0ZXImJihlLnB1c2goZiksYS5hLkIoay5hZnRlcixmdW5jdGlvbihjKXtpZihiW2NdKXtpZigtMSE9PWEuYS5EKGUsYykpdGhyb3cgRXJyb3IoXCJDYW5ub3QgY29tYmluZSB0aGUgZm9sbG93aW5nIGJpbmRpbmdzLCBiZWNhdXNlIHRoZXkgaGF2ZSBhIGN5Y2xpYyBkZXBlbmRlbmN5OiBcIitcbmUuam9pbihcIiwgXCIpKTt6KGMpfX0pLGUubGVuZ3RoLS0pLGMucHVzaCh7a2V5OmYsSGM6a30pKTtkW2ZdPSEwfX0pO3JldHVybiBjfWZ1bmN0aW9uIHEoYixjLGQpe2lmKCFjKXt2YXIgZj1hLmEuZy5HYyhiLEMse30pO2lmKGYuY29udGV4dCl0aHJvdyBFcnJvcihcIllvdSBjYW5ub3QgYXBwbHkgYmluZGluZ3MgbXVsdGlwbGUgdGltZXMgdG8gdGhlIHNhbWUgZWxlbWVudC5cIik7Zi5jb250ZXh0PWQ7ZFtyXSYmZFtyXS4kYyhiKX12YXIgaztpZihjJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYylrPWM7ZWxzZXt2YXIgZz1hLmRhLmluc3RhbmNlLHE9Zy5nZXRCaW5kaW5nQWNjZXNzb3JzfHxoLHA9YS5UKGZ1bmN0aW9uKCl7aWYoKGs9Yz9jKGQsYik6cS5jYWxsKGcsYixkKSkmJmRbcl0pZFtyXSgpO3JldHVybiBrfSxudWxsLHtqOmJ9KTtrJiZwLmZhKCl8fChwPW51bGwpfXZhciBsO2lmKGspe3ZhciB2PWZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5GYShwP3AoKTprLGUpfSx0PXA/ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUocCgpW2FdKX19OlxuZnVuY3Rpb24oYSl7cmV0dXJuIGtbYV19O3YuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBrW2FdJiZlKHQoYSkpfTt2Lmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gYSBpbiBrfTthLnYuWSBpbiBrJiZhLnYuc3Vic2NyaWJlKGIsYS52LlksZnVuY3Rpb24oKXt2YXIgYz0oMCxrW2Eudi5ZXSkoKTtpZihjKXt2YXIgZD1hLmguY2hpbGROb2RlcyhiKTtkLmxlbmd0aCYmYyhkLGEueGMoZFswXSkpfX0pO2Y9bShrKTthLmEuQihmLGZ1bmN0aW9uKGMpe3ZhciBlPWMuSGMuaW5pdCxmPWMuSGMudXBkYXRlLG09Yy5rZXk7aWYoOD09PWIubm9kZVR5cGUmJiFhLmguY2FbbV0pdGhyb3cgRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrbStcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpO3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZhLnUuSihmdW5jdGlvbigpe3ZhciBhPWUoYix0KG0pLHYsZC4kZGF0YSxkKTtpZihhJiZhLmNvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzKXtpZihsIT09XG5uKXRocm93IEVycm9yKFwiTXVsdGlwbGUgYmluZGluZ3MgKFwiK2wrXCIgYW5kIFwiK20rXCIpIGFyZSB0cnlpbmcgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzIG9mIHRoZSBzYW1lIGVsZW1lbnQuIFlvdSBjYW5ub3QgdXNlIHRoZXNlIGJpbmRpbmdzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGVsZW1lbnQuXCIpO2w9bX19KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiZhLlQoZnVuY3Rpb24oKXtmKGIsdChtKSx2LGQuJGRhdGEsZCl9LG51bGwse2o6Yn0pfWNhdGNoKGcpe3Rocm93IGcubWVzc2FnZT0nVW5hYmxlIHRvIHByb2Nlc3MgYmluZGluZyBcIicrbStcIjogXCIra1ttXSsnXCJcXG5NZXNzYWdlOiAnK2cubWVzc2FnZSxnO319KX1yZXR1cm57c2hvdWxkQmluZERlc2NlbmRhbnRzOmw9PT1ufX1mdW5jdGlvbiBwKGIsYyl7cmV0dXJuIGImJmIgaW5zdGFuY2VvZiBhLlg/YjpuZXcgYS5YKGIsbixuLGMpfXZhciByPWEuYS5SYShcIl9zdWJzY3JpYmFibGVcIiksdj1hLmEuUmEoXCJfYW5jZXN0b3JCaW5kaW5nSW5mb1wiKTtcbmEuZj17fTt2YXIgeT17c2NyaXB0OiEwLHRleHRhcmVhOiEwLHRlbXBsYXRlOiEwfTthLmdldEJpbmRpbmdIYW5kbGVyPWZ1bmN0aW9uKGIpe3JldHVybiBhLmZbYl19O3ZhciB0PXt9O2EuWD1mdW5jdGlvbihiLGMsZCxlLGYpe2Z1bmN0aW9uIGsoKXt2YXIgYj1wP3EoKTpxLGY9YS5hLmMoYik7aWYoYyl7aWYoY1tyXSljW3JdKCk7YS5hLmV4dGVuZChnLGMpO3YgaW4gYyYmKGdbdl09Y1t2XSk7Z1tyXT15fWVsc2UgZy4kcGFyZW50cz1bXSxnLiRyb290PWYsZy5rbz1hO2g/Zj1nLiRkYXRhOihnLiRyYXdEYXRhPWIsZy4kZGF0YT1mKTtkJiYoZ1tkXT1mKTtlJiZlKGcsYyxmKTtyZXR1cm4gZy4kZGF0YX1mdW5jdGlvbiBtKCl7cmV0dXJuIGwmJiFhLmEubmMobCl9dmFyIGc9dGhpcyxoPWI9PT10LHE9aD9uOmIscD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBxJiYhYS5NKHEpLGwseTtmJiZmLmV4cG9ydERlcGVuZGVuY2llcz9rKCk6KHk9YS5UKGssbnVsbCx7QmE6bSxqOiEwfSkseS5mYSgpJiZcbihnW3JdPXkseS5lcXVhbGl0eUNvbXBhcmVyPW51bGwsbD1bXSx5LiRjPWZ1bmN0aW9uKGIpe2wucHVzaChiKTthLmEuRy5uYShiLGZ1bmN0aW9uKGIpe2EuYS5PYShsLGIpO2wubGVuZ3RofHwoeS5tKCksZ1tyXT15PW4pfSl9KSl9O2EuWC5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGIsYyxkLGUpe2lmKGMmJiFhLm9wdGlvbnMuY3JlYXRlQ2hpbGRDb250ZXh0V2l0aEFzKXt2YXIgZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYhYS5NKGIpO3JldHVybiBuZXcgYS5YKHQsdGhpcyxudWxsLGZ1bmN0aW9uKGEpe2QmJmQoYSk7YVtjXT1mP2IoKTpifSl9cmV0dXJuIG5ldyBhLlgoYix0aGlzLGMsZnVuY3Rpb24oYSxiKXthLiRwYXJlbnRDb250ZXh0PWI7YS4kcGFyZW50PWIuJGRhdGE7YS4kcGFyZW50cz0oYi4kcGFyZW50c3x8W10pLnNsaWNlKDApO2EuJHBhcmVudHMudW5zaGlmdChhLiRwYXJlbnQpO2QmJmQoYSl9LGUpfTthLlgucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihiKXtyZXR1cm4gbmV3IGEuWCh0LFxudGhpcyxudWxsLGZ1bmN0aW9uKGMpe2EuYS5leHRlbmQoYyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiP2IoKTpiKX0pfTthLlgucHJvdG90eXBlLnBkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGRDb250ZXh0KGEsYixudWxsLHtleHBvcnREZXBlbmRlbmNpZXM6ITB9KX07dmFyIEM9YS5hLmcuVygpO2MucHJvdG90eXBlLlBjPWZ1bmN0aW9uKCl7dGhpcy5GYiYmdGhpcy5GYi5QJiZ0aGlzLkZiLlAucmQodGhpcy5ub2RlKX07Yy5wcm90b3R5cGUucmQ9ZnVuY3Rpb24oYil7YS5hLk9hKHRoaXMuZmIsYik7IXRoaXMuZmIubGVuZ3RoJiZ0aGlzLlkmJnRoaXMudmMoKX07Yy5wcm90b3R5cGUudmM9ZnVuY3Rpb24oKXt0aGlzLlk9ITA7dGhpcy5nYi5QJiYhdGhpcy5mYi5sZW5ndGgmJih0aGlzLmdiLlA9bixhLmEuRy51Yih0aGlzLm5vZGUsYiksYS52LllhKHRoaXMubm9kZSxhLnYuQWMpLHRoaXMuUGMoKSl9O2MucHJvdG90eXBlLm9kPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cbnRoaXM7cmV0dXJuIHRoaXMuZ2IuY29udGV4dC5jcmVhdGVDaGlsZENvbnRleHQoYSxiLGZ1bmN0aW9uKGEpe2MoYSk7YVt2XT1kLmdifSx2b2lkIDApfTthLnY9e1k6XCJjaGlsZHJlbkNvbXBsZXRlXCIsQWM6XCJkZXNjZW5kYW50c0NvbXBsZXRlXCIsc3Vic2NyaWJlOmZ1bmN0aW9uKGIsYyxkLGUpe2I9YS5hLmcuR2MoYixDLHt9KTtiLkRhfHwoYi5EYT1uZXcgYS5SKTtyZXR1cm4gYi5EYS5zdWJzY3JpYmUoZCxlLGMpfSxZYTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5nLmdldChiLEMpO2lmKGQmJihkLkRhJiZkLkRhLm5vdGlmeVN1YnNjcmliZXJzKGIsYyksYz09YS52LlkpKWlmKGQuUClkLlAudmMoKTtlbHNlIGlmKGQuRGEmJmQuRGEuVWEoYS52LkFjKSl0aHJvdyBFcnJvcihcImRlc2NlbmRhbnRzQ29tcGxldGUgZXZlbnQgbm90IHN1cHBvcnRlZCBmb3IgYmluZGluZ3Mgb24gdGhpcyBub2RlXCIpO30sU2Q6ZnVuY3Rpb24oYil7dmFyIGQ9YS5hLmcuZ2V0KGIsQyk7aWYoZClyZXR1cm4gZC5QfHxcbihkLlA9bmV3IGMoYixkLGQuY29udGV4dFt2XSkpfX07YS5UZD1mdW5jdGlvbihiKXtyZXR1cm4oYj1hLmEuZy5nZXQoYixDKSkmJmIuY29udGV4dH07YS5iYj1mdW5jdGlvbihiLGMsZCl7MT09PWIubm9kZVR5cGUmJmEuaC5PYyhiKTtyZXR1cm4gcShiLGMscChkKSl9O2EuaGQ9ZnVuY3Rpb24oYixjLGQpe2Q9cChkKTtyZXR1cm4gYS5iYihiLGcoYyxkLGIpLGQpfTthLk5hPWZ1bmN0aW9uKGEsYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxsKHAoYSksYil9O2Eub2M9ZnVuY3Rpb24oYSxiLGMpeyF3JiZBLmpRdWVyeSYmKHc9QS5qUXVlcnkpO2lmKCFiKXtpZihiPUEuZG9jdW1lbnQuYm9keSwhYil0aHJvdyBFcnJvcihcImtvLmFwcGx5QmluZGluZ3M6IGNvdWxkIG5vdCBmaW5kIHdpbmRvdy5kb2N1bWVudC5ib2R5OyBoYXMgdGhlIGRvY3VtZW50IGJlZW4gbG9hZGVkP1wiKTt9ZWxzZSBpZigxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGUpdGhyb3cgRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKTtcbmsocChhLGMpLGIpfTthLndjPWZ1bmN0aW9uKGIpe3JldHVybiFifHwxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGU/bjphLlRkKGIpfTthLnhjPWZ1bmN0aW9uKGIpe3JldHVybihiPWEud2MoYikpP2IuJGRhdGE6bn07YS5iKFwiYmluZGluZ0hhbmRsZXJzXCIsYS5mKTthLmIoXCJiaW5kaW5nRXZlbnRcIixhLnYpO2EuYihcImJpbmRpbmdFdmVudC5zdWJzY3JpYmVcIixhLnYuc3Vic2NyaWJlKTthLmIoXCJhcHBseUJpbmRpbmdzXCIsYS5vYyk7YS5iKFwiYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNcIixhLk5hKTthLmIoXCJhcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGVcIixhLmJiKTthLmIoXCJhcHBseUJpbmRpbmdzVG9Ob2RlXCIsYS5oZCk7YS5iKFwiY29udGV4dEZvclwiLGEud2MpO2EuYihcImRhdGFGb3JcIixhLnhjKX0pKCk7KGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYyxlKXt2YXIgaz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZixjKT9mW2NdOmIsbTtrP2suc3Vic2NyaWJlKGUpOlxuKGs9ZltjXT1uZXcgYS5SLGsuc3Vic2NyaWJlKGUpLGQoYyxmdW5jdGlvbihiLGQpe3ZhciBlPSEoIWR8fCFkLnN5bmNocm9ub3VzKTtnW2NdPXtkZWZpbml0aW9uOmIsRmQ6ZX07ZGVsZXRlIGZbY107bXx8ZT9rLm5vdGlmeVN1YnNjcmliZXJzKGIpOmEubWEudmIoZnVuY3Rpb24oKXtrLm5vdGlmeVN1YnNjcmliZXJzKGIpfSl9KSxtPSEwKX1mdW5jdGlvbiBkKGEsYil7ZShcImdldENvbmZpZ1wiLFthXSxmdW5jdGlvbihjKXtjP2UoXCJsb2FkQ29tcG9uZW50XCIsW2EsY10sZnVuY3Rpb24oYSl7YihhLGMpfSk6YihudWxsLG51bGwpfSl9ZnVuY3Rpb24gZShjLGQsZixnKXtnfHwoZz1hLmkubG9hZGVycy5zbGljZSgwKSk7dmFyIHE9Zy5zaGlmdCgpO2lmKHEpe3ZhciBwPXFbY107aWYocCl7dmFyIHI9ITE7aWYocC5hcHBseShxLGQuY29uY2F0KGZ1bmN0aW9uKGEpe3I/ZihudWxsKTpudWxsIT09YT9mKGEpOmUoYyxkLGYsZyl9KSkhPT1iJiYocj0hMCwhcS5zdXBwcmVzc0xvYWRlckV4Y2VwdGlvbnMpKXRocm93IEVycm9yKFwiQ29tcG9uZW50IGxvYWRlcnMgbXVzdCBzdXBwbHkgdmFsdWVzIGJ5IGludm9raW5nIHRoZSBjYWxsYmFjaywgbm90IGJ5IHJldHVybmluZyB2YWx1ZXMgc3luY2hyb25vdXNseS5cIik7XG59ZWxzZSBlKGMsZCxmLGcpfWVsc2UgZihudWxsKX12YXIgZj17fSxnPXt9O2EuaT17Z2V0OmZ1bmN0aW9uKGQsZSl7dmFyIGY9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGcsZCk/Z1tkXTpiO2Y/Zi5GZD9hLnUuSihmdW5jdGlvbigpe2UoZi5kZWZpbml0aW9uKX0pOmEubWEudmIoZnVuY3Rpb24oKXtlKGYuZGVmaW5pdGlvbil9KTpjKGQsZSl9LHVjOmZ1bmN0aW9uKGEpe2RlbGV0ZSBnW2FdfSxlYzplfTthLmkubG9hZGVycz1bXTthLmIoXCJjb21wb25lbnRzXCIsYS5pKTthLmIoXCJjb21wb25lbnRzLmdldFwiLGEuaS5nZXQpO2EuYihcImNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uXCIsYS5pLnVjKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxlKXtmdW5jdGlvbiBnKCl7MD09PS0teSYmZShoKX12YXIgaD17fSx5PTIsdD1kLnRlbXBsYXRlO2Q9ZC52aWV3TW9kZWw7dD9mKGMsdCxmdW5jdGlvbihjKXthLmkuZWMoXCJsb2FkVGVtcGxhdGVcIixcbltiLGNdLGZ1bmN0aW9uKGEpe2gudGVtcGxhdGU9YTtnKCl9KX0pOmcoKTtkP2YoYyxkLGZ1bmN0aW9uKGMpe2EuaS5lYyhcImxvYWRWaWV3TW9kZWxcIixbYixjXSxmdW5jdGlvbihhKXtoW2xdPWE7ZygpfSl9KTpnKCl9ZnVuY3Rpb24gYyhhLGIsZCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpZChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IGIoYSl9KTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW2xdKWQoYltsXSk7ZWxzZSBpZihcImluc3RhbmNlXCJpbiBiKXt2YXIgZT1iLmluc3RhbmNlO2QoZnVuY3Rpb24oKXtyZXR1cm4gZX0pfWVsc2VcInZpZXdNb2RlbFwiaW4gYj9jKGEsYi52aWV3TW9kZWwsZCk6YShcIlVua25vd24gdmlld01vZGVsIHZhbHVlOiBcIitiKX1mdW5jdGlvbiBkKGIpe3N3aXRjaChhLmEuTyhiKSl7Y2FzZSBcInNjcmlwdFwiOnJldHVybiBhLmEuc2EoYi50ZXh0KTtjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4gYS5hLnNhKGIudmFsdWUpO2Nhc2UgXCJ0ZW1wbGF0ZVwiOmlmKGUoYi5jb250ZW50KSlyZXR1cm4gYS5hLkFhKGIuY29udGVudC5jaGlsZE5vZGVzKX1yZXR1cm4gYS5hLkFhKGIuY2hpbGROb2Rlcyl9XG5mdW5jdGlvbiBlKGEpe3JldHVybiBBLkRvY3VtZW50RnJhZ21lbnQ/YSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ6YSYmMTE9PT1hLm5vZGVUeXBlfWZ1bmN0aW9uIGYoYSxiLGMpe1wic3RyaW5nXCI9PT10eXBlb2YgYi5yZXF1aXJlP1F8fEEucmVxdWlyZT8oUXx8QS5yZXF1aXJlKShbYi5yZXF1aXJlXSxjKTphKFwiVXNlcyByZXF1aXJlLCBidXQgbm8gQU1EIGxvYWRlciBpcyBwcmVzZW50XCIpOmMoYil9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gZnVuY3Rpb24oYil7dGhyb3cgRXJyb3IoXCJDb21wb25lbnQgJ1wiK2ErXCInOiBcIitiKTt9fXZhciBoPXt9O2EuaS5yZWdpc3Rlcj1mdW5jdGlvbihiLGMpe2lmKCFjKXRocm93IEVycm9yKFwiSW52YWxpZCBjb25maWd1cmF0aW9uIGZvciBcIitiKTtpZihhLmkucWIoYikpdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgXCIrYitcIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7aFtiXT1jfTthLmkucWI9ZnVuY3Rpb24oYSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoLFxuYSl9O2EuaS51bnJlZ2lzdGVyPWZ1bmN0aW9uKGIpe2RlbGV0ZSBoW2JdO2EuaS51YyhiKX07YS5pLnljPXtnZXRDb25maWc6ZnVuY3Rpb24oYixjKXtjKGEuaS5xYihiKT9oW2JdOm51bGwpfSxsb2FkQ29tcG9uZW50OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1nKGEpO2YoZSxjLGZ1bmN0aW9uKGMpe2IoYSxlLGMsZCl9KX0sbG9hZFRlbXBsYXRlOmZ1bmN0aW9uKGIsYyxmKXtiPWcoYik7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjKWYoYS5hLnNhKGMpKTtlbHNlIGlmKGMgaW5zdGFuY2VvZiBBcnJheSlmKGMpO2Vsc2UgaWYoZShjKSlmKGEuYS5sYShjLmNoaWxkTm9kZXMpKTtlbHNlIGlmKGMuZWxlbWVudClpZihjPWMuZWxlbWVudCxBLkhUTUxFbGVtZW50P2MgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDpjJiZjLnRhZ05hbWUmJjE9PT1jLm5vZGVUeXBlKWYoZChjKSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGMpe3ZhciBoPXguZ2V0RWxlbWVudEJ5SWQoYyk7aD9mKGQoaCkpOmIoXCJDYW5ub3QgZmluZCBlbGVtZW50IHdpdGggSUQgXCIrXG5jKX1lbHNlIGIoXCJVbmtub3duIGVsZW1lbnQgdHlwZTogXCIrYyk7ZWxzZSBiKFwiVW5rbm93biB0ZW1wbGF0ZSB2YWx1ZTogXCIrYyl9LGxvYWRWaWV3TW9kZWw6ZnVuY3Rpb24oYSxiLGQpe2MoZyhhKSxiLGQpfX07dmFyIGw9XCJjcmVhdGVWaWV3TW9kZWxcIjthLmIoXCJjb21wb25lbnRzLnJlZ2lzdGVyXCIsYS5pLnJlZ2lzdGVyKTthLmIoXCJjb21wb25lbnRzLmlzUmVnaXN0ZXJlZFwiLGEuaS5xYik7YS5iKFwiY29tcG9uZW50cy51bnJlZ2lzdGVyXCIsYS5pLnVucmVnaXN0ZXIpO2EuYihcImNvbXBvbmVudHMuZGVmYXVsdExvYWRlclwiLGEuaS55Yyk7YS5pLmxvYWRlcnMucHVzaChhLmkueWMpO2EuaS5hZD1ofSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZSl7dmFyIGY9Yi5nZXRBdHRyaWJ1dGUoXCJwYXJhbXNcIik7aWYoZil7dmFyIGY9Yy5wYXJzZUJpbmRpbmdzU3RyaW5nKGYsZSxiLHt2YWx1ZUFjY2Vzc29yczohMCxiaW5kaW5nUGFyYW1zOiEwfSksZj1hLmEuRmEoZixmdW5jdGlvbihjKXtyZXR1cm4gYS5zKGMsXG5udWxsLHtqOmJ9KX0pLGc9YS5hLkZhKGYsZnVuY3Rpb24oYyl7dmFyIGU9Yy53KCk7cmV0dXJuIGMuZmEoKT9hLnMoe3JlYWQ6ZnVuY3Rpb24oKXtyZXR1cm4gYS5hLmMoYygpKX0sd3JpdGU6YS5XYShlKSYmZnVuY3Rpb24oYSl7YygpKGEpfSxqOmJ9KTplfSk7T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGcsXCIkcmF3XCIpfHwoZy4kcmF3PWYpO3JldHVybiBnfXJldHVybnskcmF3Ont9fX1hLmkuZ2V0Q29tcG9uZW50TmFtZUZvck5vZGU9ZnVuY3Rpb24oYil7dmFyIGM9YS5hLk8oYik7aWYoYS5pLnFiKGMpJiYoLTEhPWMuaW5kZXhPZihcIi1cIil8fFwiW29iamVjdCBIVE1MVW5rbm93bkVsZW1lbnRdXCI9PVwiXCIrYnx8OD49YS5hLlUmJmIudGFnTmFtZT09PWMpKXJldHVybiBjfTthLmkubGM9ZnVuY3Rpb24oYyxlLGYsZyl7aWYoMT09PWUubm9kZVR5cGUpe3ZhciBoPWEuaS5nZXRDb21wb25lbnROYW1lRm9yTm9kZShlKTtpZihoKXtjPWN8fHt9O2lmKGMuY29tcG9uZW50KXRocm93IEVycm9yKCdDYW5ub3QgdXNlIHRoZSBcImNvbXBvbmVudFwiIGJpbmRpbmcgb24gYSBjdXN0b20gZWxlbWVudCBtYXRjaGluZyBhIGNvbXBvbmVudCcpO1xudmFyIGw9e25hbWU6aCxwYXJhbXM6YihlLGYpfTtjLmNvbXBvbmVudD1nP2Z1bmN0aW9uKCl7cmV0dXJuIGx9Omx9fXJldHVybiBjfTt2YXIgYz1uZXcgYS5kYTs5PmEuYS5VJiYoYS5pLnJlZ2lzdGVyPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShhLmkucmVnaXN0ZXIpLHguY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1mdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1iKCksZj1hLmkuYWQsZztmb3IoZyBpbiBmKTtyZXR1cm4gY319KHguY3JlYXRlRG9jdW1lbnRGcmFnbWVudCkpfSkoKTsoZnVuY3Rpb24oYil7ZnVuY3Rpb24gYyhiLGMsZCl7Yz1jLnRlbXBsYXRlO2lmKCFjKXRocm93IEVycm9yKFwiQ29tcG9uZW50ICdcIitiK1wiJyBoYXMgbm8gdGVtcGxhdGVcIik7Yj1hLmEuQWEoYyk7YS5oLnRhKGQsYil9ZnVuY3Rpb24gZChhLGIsYyl7dmFyIGQ9YS5jcmVhdGVWaWV3TW9kZWw7cmV0dXJuIGQ/ZC5jYWxsKGEsXG5iLGMpOmJ9dmFyIGU9MDthLmYuY29tcG9uZW50PXtpbml0OmZ1bmN0aW9uKGYsZyl7ZnVuY3Rpb24gaCgpe3ZhciBhPWwmJmwuZGlzcG9zZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmYS5jYWxsKGwpO20mJm0ubSgpO2s9bD1tPW51bGx9dmFyIGwsayxtLHE9YS5hLmxhKGEuaC5jaGlsZE5vZGVzKGYpKTthLmguQ2EoZik7YS5hLkcubmEoZixoKTthLnMoZnVuY3Rpb24oKXt2YXIgcD1hLmEuYyhnKCkpLHIsdjtcInN0cmluZ1wiPT09dHlwZW9mIHA/cj1wOihyPWEuYS5jKHAubmFtZSksdj1hLmEuYyhwLnBhcmFtcykpO2lmKCFyKXRocm93IEVycm9yKFwiTm8gY29tcG9uZW50IG5hbWUgc3BlY2lmaWVkXCIpO3ZhciB5PWEudi5TZChmKSx0PWs9KytlO2EuaS5nZXQocixmdW5jdGlvbihlKXtpZihrPT09dCl7aCgpO2lmKCFlKXRocm93IEVycm9yKFwiVW5rbm93biBjb21wb25lbnQgJ1wiK3IrXCInXCIpO2MocixlLGYpO3ZhciBnPWQoZSx2LHtlbGVtZW50OmYsdGVtcGxhdGVOb2RlczpxfSk7ZT15Lm9kKGcsXG5iLGZ1bmN0aW9uKGEpe2EuJGNvbXBvbmVudD1nO2EuJGNvbXBvbmVudFRlbXBsYXRlTm9kZXM9cX0pO2cmJmcua29EZXNjZW5kYW50c0NvbXBsZXRlJiYobT1hLnYuc3Vic2NyaWJlKGYsXCJkZXNjZW5kYW50c0NvbXBsZXRlXCIsZy5rb0Rlc2NlbmRhbnRzQ29tcGxldGUsZykpO2w9ZzthLk5hKGUsZil9fSl9LG51bGwse2o6Zn0pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguY2EuY29tcG9uZW50PSEwfSkoKTt2YXIgVD17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07YS5mLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMoKSl8fHt9O2EuYS5OKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5jKGQpO3ZhciBnPWMuaW5kZXhPZihcIjpcIiksZz1cImxvb2t1cE5hbWVzcGFjZVVSSVwiaW4gYiYmMDxnJiZiLmxvb2t1cE5hbWVzcGFjZVVSSShjLnN1YnN0cigwLGcpKSxoPSExPT09ZHx8bnVsbD09PWR8fGQ9PT1uO2g/Zz9iLnJlbW92ZUF0dHJpYnV0ZU5TKGcsXG5jKTpiLnJlbW92ZUF0dHJpYnV0ZShjKTpkPWQudG9TdHJpbmcoKTs4Pj1hLmEuVSYmYyBpbiBUPyhjPVRbY10saD9iLnJlbW92ZUF0dHJpYnV0ZShjKTpiW2NdPWQpOmh8fChnP2Iuc2V0QXR0cmlidXRlTlMoZyxjLGQpOmIuc2V0QXR0cmlidXRlKGMsZCkpO1wibmFtZVwiPT09YyYmYS5hLlVjKGIsaD9cIlwiOmQpfSl9fTsoZnVuY3Rpb24oKXthLmYuY2hlY2tlZD17YWZ0ZXI6W1widmFsdWVcIixcImF0dHJcIl0saW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe3ZhciBlPWIuY2hlY2tlZCxmPWcoKTtpZighYS5qYS5wYigpJiYoZXx8IWwmJiFhLmphLkVhKCkpKXt2YXIgaz1hLnUuSihjKTtpZihtKXt2YXIgcD1xP2sudygpOmssST1yO3I9ZjtJIT09Zj9lJiYoYS5hLk1hKHAsZiwhMCksYS5hLk1hKHAsSSwhMSkpOmEuYS5NYShwLGYsZSk7cSYmYS5XYShrKSYmayhwKX1lbHNlIGgmJihmPT09bj9mPWU6ZXx8KGY9bikpLGEubC5aYShrLGQsXCJjaGVja2VkXCIsZiwhMCl9fWZ1bmN0aW9uIGYoKXt2YXIgZD1cbmEuYS5jKGMoKSksZT1nKCk7bT8oYi5jaGVja2VkPTA8PWEuYS5EKGQsZSkscj1lKTpiLmNoZWNrZWQ9aCYmZT09PW4/ISFkOmcoKT09PWR9dmFyIGc9YS5UYihmdW5jdGlvbigpe2lmKGQuaGFzKFwiY2hlY2tlZFZhbHVlXCIpKXJldHVybiBhLmEuYyhkLmdldChcImNoZWNrZWRWYWx1ZVwiKSk7aWYocClyZXR1cm4gZC5oYXMoXCJ2YWx1ZVwiKT9hLmEuYyhkLmdldChcInZhbHVlXCIpKTpiLnZhbHVlfSksaD1cImNoZWNrYm94XCI9PWIudHlwZSxsPVwicmFkaW9cIj09Yi50eXBlO2lmKGh8fGwpe3ZhciBrPWMoKSxtPWgmJmEuYS5jKGspaW5zdGFuY2VvZiBBcnJheSxxPSEobSYmay5wdXNoJiZrLnNwbGljZSkscD1sfHxtLHI9bT9nKCk6bjtsJiYhYi5uYW1lJiZhLmYudW5pcXVlTmFtZS5pbml0KGIsZnVuY3Rpb24oKXtyZXR1cm4hMH0pO2EucyhlLG51bGwse2o6Yn0pO2EuYS5IKGIsXCJjbGlja1wiLGUpO2EucyhmLG51bGwse2o6Yn0pO2s9bn19fTthLmwudWEuY2hlY2tlZD0hMDthLmYuY2hlY2tlZFZhbHVlPVxue3VwZGF0ZTpmdW5jdGlvbihiLGMpe2IudmFsdWU9YS5hLmMoYygpKX19fSkoKTthLmZbXCJjbGFzc1wiXT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLnliKGEuYS5jKGMoKSkpO2EuYS5BYihiLGIuX19rb19fY3NzVmFsdWUsITEpO2IuX19rb19fY3NzVmFsdWU9ZDthLmEuQWIoYixkLCEwKX19O2EuZi5jc3M9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMoKSk7bnVsbCE9PWQmJlwib2JqZWN0XCI9PXR5cGVvZiBkP2EuYS5OKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5jKGQpO2EuYS5BYihiLGMsZCl9KTphLmZbXCJjbGFzc1wiXS51cGRhdGUoYixjKX19O2EuZi5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMoKSk7ZCYmYi5kaXNhYmxlZD9iLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOmR8fGIuZGlzYWJsZWR8fChiLmRpc2FibGVkPSEwKX19O2EuZi5kaXNhYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmYuZW5hYmxlLnVwZGF0ZShiLFxuZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmMoYygpKX0pfX07YS5mLmV2ZW50PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc9YygpfHx7fTthLmEuTihnLGZ1bmN0aW9uKGcpe1wic3RyaW5nXCI9PXR5cGVvZiBnJiZhLmEuSChiLGcsZnVuY3Rpb24oYil7dmFyIGssbT1jKClbZ107aWYobSl7dHJ5e3ZhciBxPWEuYS5sYShhcmd1bWVudHMpO2U9Zi4kZGF0YTtxLnVuc2hpZnQoZSk7az1tLmFwcGx5KGUscSl9ZmluYWxseXshMCE9PWsmJihiLnByZXZlbnREZWZhdWx0P2IucHJldmVudERlZmF1bHQoKTpiLnJldHVyblZhbHVlPSExKX0hMT09PWQuZ2V0KGcrXCJCdWJibGVcIikmJihiLmNhbmNlbEJ1YmJsZT0hMCxiLnN0b3BQcm9wYWdhdGlvbiYmYi5zdG9wUHJvcGFnYXRpb24oKSl9fSl9KX19O2EuZi5mb3JlYWNoPXtOYzpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1iKCksZD1hLmEuU2IoYyk7aWYoIWR8fFwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aClyZXR1cm57Zm9yZWFjaDpjLFxudGVtcGxhdGVFbmdpbmU6YS5hYS5MYX07YS5hLmMoYyk7cmV0dXJue2ZvcmVhY2g6ZC5kYXRhLGFzOmQuYXMsaW5jbHVkZURlc3Ryb3llZDpkLmluY2x1ZGVEZXN0cm95ZWQsYWZ0ZXJBZGQ6ZC5hZnRlckFkZCxiZWZvcmVSZW1vdmU6ZC5iZWZvcmVSZW1vdmUsYWZ0ZXJSZW5kZXI6ZC5hZnRlclJlbmRlcixiZWZvcmVNb3ZlOmQuYmVmb3JlTW92ZSxhZnRlck1vdmU6ZC5hZnRlck1vdmUsdGVtcGxhdGVFbmdpbmU6YS5hYS5MYX19fSxpbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuZi50ZW1wbGF0ZS5pbml0KGIsYS5mLmZvcmVhY2guTmMoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZSxmKXtyZXR1cm4gYS5mLnRlbXBsYXRlLnVwZGF0ZShiLGEuZi5mb3JlYWNoLk5jKGMpLGQsZSxmKX19O2EubC5RYS5mb3JlYWNoPSExO2EuaC5jYS5mb3JlYWNoPSEwO2EuZi5oYXNmb2N1cz17aW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZShlKXtiLl9fa29faGFzZm9jdXNVcGRhdGluZz1cbiEwO3ZhciBmPWIub3duZXJEb2N1bWVudDtpZihcImFjdGl2ZUVsZW1lbnRcImluIGYpe3ZhciBnO3RyeXtnPWYuYWN0aXZlRWxlbWVudH1jYXRjaChtKXtnPWYuYm9keX1lPWc9PT1ifWY9YygpO2EubC5aYShmLGQsXCJoYXNmb2N1c1wiLGUsITApO2IuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT1lO2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSExfXZhciBmPWUuYmluZChudWxsLCEwKSxnPWUuYmluZChudWxsLCExKTthLmEuSChiLFwiZm9jdXNcIixmKTthLmEuSChiLFwiZm9jdXNpblwiLGYpO2EuYS5IKGIsXCJibHVyXCIsZyk7YS5hLkgoYixcImZvY3Vzb3V0XCIsZyk7Yi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlPSExfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD0hIWEuYS5jKGMoKSk7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmd8fGIuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT09PWR8fChkP2IuZm9jdXMoKTpiLmJsdXIoKSwhZCYmYi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlJiZiLm93bmVyRG9jdW1lbnQuYm9keS5mb2N1cygpLFxuYS51LkooYS5hLkJiLG51bGwsW2IsZD9cImZvY3VzaW5cIjpcImZvY3Vzb3V0XCJdKSl9fTthLmwudWEuaGFzZm9jdXM9ITA7YS5mLmhhc0ZvY3VzPWEuZi5oYXNmb2N1czthLmwudWEuaGFzRm9jdXM9XCJoYXNmb2N1c1wiO2EuZi5odG1sPXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5hLlhiKGIsYygpKX19O00oXCJpZlwiKTtNKFwiaWZub3RcIiwhMSwhMCk7TShcIndpdGhcIiwhMCk7YS5mLmxldD17aW5pdDpmdW5jdGlvbihiLGMsZCxlLGYpe2M9Zi5leHRlbmQoYyk7YS5OYShjLGIpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguY2EubGV0PSEwO3ZhciBOPXt9O2EuZi5vcHRpb25zPXtpbml0OmZ1bmN0aW9uKGIpe2lmKFwic2VsZWN0XCIhPT1hLmEuTyhiKSl0aHJvdyBFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO2Zvcig7MDxcbmIubGVuZ3RoOyliLnJlbW92ZSgwKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gYS5hLmNiKGIub3B0aW9ucyxmdW5jdGlvbihhKXtyZXR1cm4gYS5zZWxlY3RlZH0pfWZ1bmN0aW9uIGYoYSxiLGMpe3ZhciBkPXR5cGVvZiBiO3JldHVyblwiZnVuY3Rpb25cIj09ZD9iKGEpOlwic3RyaW5nXCI9PWQ/YVtiXTpjfWZ1bmN0aW9uIGcoYyxlKXtpZih2JiZtKWEuby54YShiLGEuYS5jKGQuZ2V0KFwidmFsdWVcIikpLCEwKTtlbHNlIGlmKHIubGVuZ3RoKXt2YXIgZj0wPD1hLmEuRChyLGEuby5MKGVbMF0pKTthLmEuVmMoZVswXSxmKTt2JiYhZiYmYS51LkooYS5hLkJiLG51bGwsW2IsXCJjaGFuZ2VcIl0pfX12YXIgaD1iLm11bHRpcGxlLGw9MCE9Yi5sZW5ndGgmJmg/Yi5zY3JvbGxUb3A6bnVsbCxrPWEuYS5jKGMoKSksbT1kLmdldChcInZhbHVlQWxsb3dVbnNldFwiKSYmZC5oYXMoXCJ2YWx1ZVwiKSxxPVxuZC5nZXQoXCJvcHRpb25zSW5jbHVkZURlc3Ryb3llZFwiKTtjPXt9O3ZhciBwLHI9W107bXx8KGg/cj1hLmEuR2IoZSgpLGEuby5MKTowPD1iLnNlbGVjdGVkSW5kZXgmJnIucHVzaChhLm8uTChiLm9wdGlvbnNbYi5zZWxlY3RlZEluZGV4XSkpKTtrJiYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGsubGVuZ3RoJiYoaz1ba10pLHA9YS5hLmNiKGssZnVuY3Rpb24oYil7cmV0dXJuIHF8fGI9PT1ufHxudWxsPT09Ynx8IWEuYS5jKGIuX2Rlc3Ryb3kpfSksZC5oYXMoXCJvcHRpb25zQ2FwdGlvblwiKSYmKGs9YS5hLmMoZC5nZXQoXCJvcHRpb25zQ2FwdGlvblwiKSksbnVsbCE9PWsmJmshPT1uJiZwLnVuc2hpZnQoTikpKTt2YXIgdj0hMTtjLmJlZm9yZVJlbW92ZT1mdW5jdGlvbihhKXtiLnJlbW92ZUNoaWxkKGEpfTtrPWc7ZC5oYXMoXCJvcHRpb25zQWZ0ZXJSZW5kZXJcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQuZ2V0KFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpJiYoaz1mdW5jdGlvbihiLGMpe2coMCxjKTtcbmEudS5KKGQuZ2V0KFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpLG51bGwsW2NbMF0sYiE9PU4/YjpuXSl9KTthLmEuV2IoYixwLGZ1bmN0aW9uKGMsZSxnKXtnLmxlbmd0aCYmKHI9IW0mJmdbMF0uc2VsZWN0ZWQ/W2Euby5MKGdbMF0pXTpbXSx2PSEwKTtlPWIub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2M9PT1OPyhhLmEueGIoZSxkLmdldChcIm9wdGlvbnNDYXB0aW9uXCIpKSxhLm8ueGEoZSxuKSk6KGc9ZihjLGQuZ2V0KFwib3B0aW9uc1ZhbHVlXCIpLGMpLGEuby54YShlLGEuYS5jKGcpKSxjPWYoYyxkLmdldChcIm9wdGlvbnNUZXh0XCIpLGcpLGEuYS54YihlLGMpKTtyZXR1cm5bZV19LGMsayk7YS51LkooZnVuY3Rpb24oKXtpZihtKWEuby54YShiLGEuYS5jKGQuZ2V0KFwidmFsdWVcIikpLCEwKTtlbHNle3ZhciBjO2g/Yz1yLmxlbmd0aCYmZSgpLmxlbmd0aDxyLmxlbmd0aDpjPXIubGVuZ3RoJiYwPD1iLnNlbGVjdGVkSW5kZXg/YS5vLkwoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pIT09XG5yWzBdOnIubGVuZ3RofHwwPD1iLnNlbGVjdGVkSW5kZXg7YyYmYS5hLkJiKGIsXCJjaGFuZ2VcIil9fSk7YS5hLnZkKGIpO2wmJjIwPE1hdGguYWJzKGwtYi5zY3JvbGxUb3ApJiYoYi5zY3JvbGxUb3A9bCl9fTthLmYub3B0aW9ucy5RYj1hLmEuZy5XKCk7YS5mLnNlbGVjdGVkT3B0aW9ucz17YWZ0ZXI6W1wib3B0aW9uc1wiLFwiZm9yZWFjaFwiXSxpbml0OmZ1bmN0aW9uKGIsYyxkKXthLmEuSChiLFwiY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1jKCksZj1bXTthLmEuQihiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGIpe2Iuc2VsZWN0ZWQmJmYucHVzaChhLm8uTChiKSl9KTthLmwuWmEoZSxkLFwic2VsZWN0ZWRPcHRpb25zXCIsZil9KX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7aWYoXCJzZWxlY3RcIiE9YS5hLk8oYikpdGhyb3cgRXJyb3IoXCJ2YWx1ZXMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO3ZhciBkPWEuYS5jKGMoKSksZT1iLnNjcm9sbFRvcDtcbmQmJlwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aCYmYS5hLkIoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSxmdW5jdGlvbihiKXt2YXIgYz0wPD1hLmEuRChkLGEuby5MKGIpKTtiLnNlbGVjdGVkIT1jJiZhLmEuVmMoYixjKX0pO2Iuc2Nyb2xsVG9wPWV9fTthLmwudWEuc2VsZWN0ZWRPcHRpb25zPSEwO2EuZi5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmMoYygpfHx7fSk7YS5hLk4oZCxmdW5jdGlvbihjLGQpe2Q9YS5hLmMoZCk7aWYobnVsbD09PWR8fGQ9PT1ufHwhMT09PWQpZD1cIlwiO3c/dyhiKS5jc3MoYyxkKTooYz1jLnJlcGxhY2UoLy0oXFx3KS9nLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX0pLGIuc3R5bGVbY109ZCxcIlwiPT09ZHx8XCJcIiE9Yi5zdHlsZVtjXXx8aXNOYU4oZCl8fChiLnN0eWxlW2NdPWQrXCJweFwiKSl9KX19O2EuZi5zdWJtaXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGQsZSxmKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBjKCkpdGhyb3cgRXJyb3IoXCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuYS5hLkgoYixcInN1Ym1pdFwiLGZ1bmN0aW9uKGEpe3ZhciBkLGU9YygpO3RyeXtkPWUuY2FsbChmLiRkYXRhLGIpfWZpbmFsbHl7ITAhPT1kJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9fSl9fTthLmYudGV4dD17aW5pdDpmdW5jdGlvbigpe3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYS54YihiLGMoKSl9fTthLmguY2EudGV4dD0hMDsoZnVuY3Rpb24oKXtpZihBJiZBLm5hdmlnYXRvcil7dmFyIGI9ZnVuY3Rpb24oYSl7aWYoYSlyZXR1cm4gcGFyc2VGbG9hdChhWzFdKX0sYz1BLm5hdmlnYXRvci51c2VyQWdlbnQsZCxlLGYsZzsoZD1BLm9wZXJhJiZBLm9wZXJhLnZlcnNpb24mJnBhcnNlSW50KEEub3BlcmEudmVyc2lvbigpKSl8fGIoYy5tYXRjaCgvQ2hyb21lXFwvKFteIF0rKS8pKXx8KGU9YihjLm1hdGNoKC9WZXJzaW9uXFwvKFteIF0rKSBTYWZhcmkvKSkpfHxcbihmPWIoYy5tYXRjaCgvRmlyZWZveFxcLyhbXiBdKykvKSkpfHwoZz1hLmEuVXx8YihjLm1hdGNoKC9NU0lFIChbXiBdKykvKSkpfHwoZz1iKGMubWF0Y2goL3J2OihbXiApXSspLykpKX1pZig4PD1nJiYxMD5nKXZhciBoPWEuYS5nLlcoKSxsPWEuYS5nLlcoKSxrPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuYWN0aXZlRWxlbWVudDsoYz1jJiZhLmEuZy5nZXQoYyxsKSkmJmMoYil9LG09ZnVuY3Rpb24oYixjKXt2YXIgZD1iLm93bmVyRG9jdW1lbnQ7YS5hLmcuZ2V0KGQsaCl8fChhLmEuZy5zZXQoZCxoLCEwKSxhLmEuSChkLFwic2VsZWN0aW9uY2hhbmdlXCIsaykpO2EuYS5nLnNldChiLGwsYyl9O2EuZi50ZXh0SW5wdXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGspe2Z1bmN0aW9uIGgoYyxkKXthLmEuSChiLGMsZCl9ZnVuY3Rpb24gbCgpe3ZhciBkPWEuYS5jKGMoKSk7aWYobnVsbD09PWR8fGQ9PT1uKWQ9XCJcIjtMIT09biYmZD09PUw/YS5hLnNldFRpbWVvdXQobCw0KTpiLnZhbHVlIT09ZCYmXG4oQT0hMCxiLnZhbHVlPWQsQT0hMSx1PWIudmFsdWUpfWZ1bmN0aW9uIHQoKXt3fHwoTD1iLnZhbHVlLHc9YS5hLnNldFRpbWVvdXQoQyw0KSl9ZnVuY3Rpb24gQygpe2NsZWFyVGltZW91dCh3KTtMPXc9bjt2YXIgZD1iLnZhbHVlO3UhPT1kJiYodT1kLGEubC5aYShjKCksayxcInRleHRJbnB1dFwiLGQpKX12YXIgdT1iLnZhbHVlLHcsTCx4PTk9PWEuYS5VP3Q6QyxBPSExO2cmJmgoXCJrZXlwcmVzc1wiLEMpOzExPmcmJmgoXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKGEpe0F8fFwidmFsdWVcIiE9PWEucHJvcGVydHlOYW1lfHx4KGEpfSk7OD09ZyYmKGgoXCJrZXl1cFwiLEMpLGgoXCJrZXlkb3duXCIsQykpO20mJihtKGIseCksaChcImRyYWdlbmRcIix0KSk7KCFnfHw5PD1nKSYmaChcImlucHV0XCIseCk7NT5lJiZcInRleHRhcmVhXCI9PT1hLmEuTyhiKT8oaChcImtleWRvd25cIix0KSxoKFwicGFzdGVcIix0KSxoKFwiY3V0XCIsdCkpOjExPmQ/aChcImtleWRvd25cIix0KTo0PmYmJihoKFwiRE9NQXV0b0NvbXBsZXRlXCIsXG5DKSxoKFwiZHJhZ2Ryb3BcIixDKSxoKFwiZHJvcFwiLEMpKTtoKFwiY2hhbmdlXCIsQyk7aChcImJsdXJcIixDKTthLnMobCxudWxsLHtqOmJ9KX19O2EubC51YS50ZXh0SW5wdXQ9ITA7YS5mLnRleHRpbnB1dD17cHJlcHJvY2VzczpmdW5jdGlvbihhLGIsYyl7YyhcInRleHRJbnB1dFwiLGEpfX19KSgpO2EuZi51bmlxdWVOYW1lPXtpbml0OmZ1bmN0aW9uKGIsYyl7aWYoYygpKXt2YXIgZD1cImtvX3VuaXF1ZV9cIisgKythLmYudW5pcXVlTmFtZS5xZDthLmEuVWMoYixkKX19fTthLmYudW5pcXVlTmFtZS5xZD0wO2EuZi51c2luZz17aW5pdDpmdW5jdGlvbihiLGMsZCxlLGYpe2M9Zi5jcmVhdGVDaGlsZENvbnRleHQoYyk7YS5OYShjLGIpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguY2EudXNpbmc9ITA7YS5mLnZhbHVlPXthZnRlcjpbXCJvcHRpb25zXCIsXCJmb3JlYWNoXCJdLGluaXQ6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuYS5PKGIpLGY9XCJpbnB1dFwiPT1lO2lmKCFmfHxcblwiY2hlY2tib3hcIiE9Yi50eXBlJiZcInJhZGlvXCIhPWIudHlwZSl7dmFyIGc9W1wiY2hhbmdlXCJdLGg9ZC5nZXQoXCJ2YWx1ZVVwZGF0ZVwiKSxsPSExLGs9bnVsbDtoJiYoXCJzdHJpbmdcIj09dHlwZW9mIGgmJihoPVtoXSksYS5hLmViKGcsaCksZz1hLmEucWMoZykpO3ZhciBtPWZ1bmN0aW9uKCl7az1udWxsO2w9ITE7dmFyIGU9YygpLGY9YS5vLkwoYik7YS5sLlphKGUsZCxcInZhbHVlXCIsZil9OyFhLmEuVXx8IWZ8fFwidGV4dFwiIT1iLnR5cGV8fFwib2ZmXCI9PWIuYXV0b2NvbXBsZXRlfHxiLmZvcm0mJlwib2ZmXCI9PWIuZm9ybS5hdXRvY29tcGxldGV8fC0xIT1hLmEuRChnLFwicHJvcGVydHljaGFuZ2VcIil8fChhLmEuSChiLFwicHJvcGVydHljaGFuZ2VcIixmdW5jdGlvbigpe2w9ITB9KSxhLmEuSChiLFwiZm9jdXNcIixmdW5jdGlvbigpe2w9ITF9KSxhLmEuSChiLFwiYmx1clwiLGZ1bmN0aW9uKCl7bCYmbSgpfSkpO2EuYS5CKGcsZnVuY3Rpb24oYyl7dmFyIGQ9bTthLmEuVWQoYyxcImFmdGVyXCIpJiYoZD1cbmZ1bmN0aW9uKCl7az1hLm8uTChiKTthLmEuc2V0VGltZW91dChtLDApfSxjPWMuc3Vic3RyaW5nKDUpKTthLmEuSChiLGMsZCl9KTt2YXIgcTtxPWYmJlwiZmlsZVwiPT1iLnR5cGU/ZnVuY3Rpb24oKXt2YXIgZD1hLmEuYyhjKCkpO251bGw9PT1kfHxkPT09bnx8XCJcIj09PWQ/Yi52YWx1ZT1cIlwiOmEudS5KKG0pfTpmdW5jdGlvbigpe3ZhciBmPWEuYS5jKGMoKSksZz1hLm8uTChiKTtpZihudWxsIT09ayYmZj09PWspYS5hLnNldFRpbWVvdXQocSwwKTtlbHNlIGlmKGYhPT1nfHxnPT09bilcInNlbGVjdFwiPT09ZT8oZz1kLmdldChcInZhbHVlQWxsb3dVbnNldFwiKSxhLm8ueGEoYixmLGcpLGd8fGY9PT1hLm8uTChiKXx8YS51LkoobSkpOmEuby54YShiLGYpfTthLnMocSxudWxsLHtqOmJ9KX1lbHNlIGEuYmIoYix7Y2hlY2tlZFZhbHVlOmN9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7fX07YS5sLnVhLnZhbHVlPSEwO2EuZi52aXNpYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuYyhjKCkpLFxuZT1cIm5vbmVcIiE9Yi5zdHlsZS5kaXNwbGF5O2QmJiFlP2Iuc3R5bGUuZGlzcGxheT1cIlwiOiFkJiZlJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2EuZi5oaWRkZW49e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuZi52aXNpYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5jKGMoKSl9KX19OyhmdW5jdGlvbihiKXthLmZbYl09e2luaXQ6ZnVuY3Rpb24oYyxkLGUsZixnKXtyZXR1cm4gYS5mLmV2ZW50LmluaXQuY2FsbCh0aGlzLGMsZnVuY3Rpb24oKXt2YXIgYT17fTthW2JdPWQoKTtyZXR1cm4gYX0sZSxmLGcpfX19KShcImNsaWNrXCIpO2EuYmE9ZnVuY3Rpb24oKXt9O2EuYmEucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJPdmVycmlkZSByZW5kZXJUZW1wbGF0ZVNvdXJjZVwiKTt9O2EuYmEucHJvdG90eXBlLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbigpe3Rocm93IEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpO1xufTthLmJhLnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixjKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7Yz1jfHx4O3ZhciBkPWMuZ2V0RWxlbWVudEJ5SWQoYik7aWYoIWQpdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiK2IpO3JldHVybiBuZXcgYS5BLkMoZCl9aWYoMT09Yi5ub2RlVHlwZXx8OD09Yi5ub2RlVHlwZSlyZXR1cm4gbmV3IGEuQS5pYShiKTt0aHJvdyBFcnJvcihcIlVua25vd24gdGVtcGxhdGUgdHlwZTogXCIrYik7fTthLmJhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGMsZCxlKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZSk7cmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2UoYSxjLGQsZSl9O2EuYmEucHJvdG90eXBlLmlzVGVtcGxhdGVSZXdyaXR0ZW49ZnVuY3Rpb24oYSxjKXtyZXR1cm4hMT09PXRoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz8hMDp0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLFxuYykuZGF0YShcImlzUmV3cml0dGVuXCIpfTthLmJhLnByb3RvdHlwZS5yZXdyaXRlVGVtcGxhdGU9ZnVuY3Rpb24oYSxjLGQpe2E9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxkKTtjPWMoYS50ZXh0KCkpO2EudGV4dChjKTthLmRhdGEoXCJpc1Jld3JpdHRlblwiLCEwKX07YS5iKFwidGVtcGxhdGVFbmdpbmVcIixhLmJhKTthLmJjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxoKXtiPWEubC5SYihiKTtmb3IodmFyIGw9YS5sLlFhLGs9MDtrPGIubGVuZ3RoO2srKyl7dmFyIG09YltrXS5rZXk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGwsbSkpe3ZhciBxPWxbbV07aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHEpe2lmKG09cShiW2tdLnZhbHVlKSl0aHJvdyBFcnJvcihtKTt9ZWxzZSBpZighcSl0aHJvdyBFcnJvcihcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgdGhlICdcIittK1wiJyBiaW5kaW5nIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCIpO1xufX1kPVwia28uX190cl9hbWJ0bnMoZnVuY3Rpb24oJGNvbnRleHQsJGVsZW1lbnQpe3JldHVybihmdW5jdGlvbigpe3JldHVybnsgXCIrYS5sLnNiKGIse3ZhbHVlQWNjZXNzb3JzOiEwfSkrXCIgfSB9KSgpfSwnXCIrZC50b0xvd2VyQ2FzZSgpK1wiJylcIjtyZXR1cm4gaC5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soZCkrY312YXIgYz0vKDwoW2Etel0rXFxkKikoPzpcXHMrKD8hZGF0YS1iaW5kXFxzKj1cXHMqKVthLXowLTlcXC1dKyg/Oj0oPzpcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCd8W14+XSopKT8pKlxccyspZGF0YS1iaW5kXFxzKj1cXHMqKFtcIiddKShbXFxzXFxTXSo/KVxcMy9naSxkPS9cXHgzYyEtLVxccyprb1xcYlxccyooW1xcc1xcU10qPylcXHMqLS1cXHgzZS9nO3JldHVybnt3ZDpmdW5jdGlvbihiLGMsZCl7Yy5pc1RlbXBsYXRlUmV3cml0dGVuKGIsZCl8fGMucmV3cml0ZVRlbXBsYXRlKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuYmMuS2QoYixjKX0sZCl9LEtkOmZ1bmN0aW9uKGEsZil7cmV0dXJuIGEucmVwbGFjZShjLFxuZnVuY3Rpb24oYSxjLGQsZSxtKXtyZXR1cm4gYihtLGMsZCxmKX0pLnJlcGxhY2UoZCxmdW5jdGlvbihhLGMpe3JldHVybiBiKGMsXCJcXHgzYyEtLSBrbyAtLVxceDNlXCIsXCIjY29tbWVudFwiLGYpfSl9LGpkOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuJC5PYihmdW5jdGlvbihkLGgpe3ZhciBsPWQubmV4dFNpYmxpbmc7bCYmbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09YyYmYS5iYihsLGIsaCl9KX19fSgpO2EuYihcIl9fdHJfYW1idG5zXCIsYS5iYy5qZCk7KGZ1bmN0aW9uKCl7YS5BPXt9O2EuQS5DPWZ1bmN0aW9uKGIpe2lmKHRoaXMuQz1iKXt2YXIgYz1hLmEuTyhiKTt0aGlzLnpiPVwic2NyaXB0XCI9PT1jPzE6XCJ0ZXh0YXJlYVwiPT09Yz8yOlwidGVtcGxhdGVcIj09YyYmYi5jb250ZW50JiYxMT09PWIuY29udGVudC5ub2RlVHlwZT8zOjR9fTthLkEuQy5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe3ZhciBiPTE9PT10aGlzLnpiP1widGV4dFwiOjI9PT10aGlzLnpiP1widmFsdWVcIjpcImlubmVySFRNTFwiO1xuaWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5DW2JdO3ZhciBjPWFyZ3VtZW50c1swXTtcImlubmVySFRNTFwiPT09Yj9hLmEuWGIodGhpcy5DLGMpOnRoaXMuQ1tiXT1jfTt2YXIgYj1hLmEuZy5XKCkrXCJfXCI7YS5BLkMucHJvdG90eXBlLmRhdGE9ZnVuY3Rpb24oYyl7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGEuYS5nLmdldCh0aGlzLkMsYitjKTthLmEuZy5zZXQodGhpcy5DLGIrYyxhcmd1bWVudHNbMV0pfTt2YXIgYz1hLmEuZy5XKCk7YS5BLkMucHJvdG90eXBlLm5vZGVzPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5DO2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBlPWEuYS5nLmdldChiLGMpfHx7fSxmPWUuaGJ8fCgzPT09dGhpcy56Yj9iLmNvbnRlbnQ6ND09PXRoaXMuemI/YjpuKTtpZighZnx8ZS5nZClpZihlPXRoaXMudGV4dCgpKWY9YS5hLkxkKGUsYi5vd25lckRvY3VtZW50KSx0aGlzLnRleHQoXCJcIiksYS5hLmcuc2V0KGIsYyx7aGI6ZixnZDohMH0pO1xucmV0dXJuIGZ9YS5hLmcuc2V0KGIsYyx7aGI6YXJndW1lbnRzWzBdfSl9O2EuQS5pYT1mdW5jdGlvbihhKXt0aGlzLkM9YX07YS5BLmlhLnByb3RvdHlwZT1uZXcgYS5BLkM7YS5BLmlhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLkEuaWE7YS5BLmlhLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl7dmFyIGI9YS5hLmcuZ2V0KHRoaXMuQyxjKXx8e307Yi5jYz09PW4mJmIuaGImJihiLmNjPWIuaGIuaW5uZXJIVE1MKTtyZXR1cm4gYi5jY31hLmEuZy5zZXQodGhpcy5DLGMse2NjOmFyZ3VtZW50c1swXX0pfTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixhLkEpO2EuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYS5BLkMpO2EuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGEuQS5pYSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQpe3ZhciBlO2ZvcihjPWEuaC5uZXh0U2libGluZyhjKTtiJiYoZT1iKSE9PVxuYzspYj1hLmgubmV4dFNpYmxpbmcoZSksZChlLGIpfWZ1bmN0aW9uIGMoYyxkKXtpZihjLmxlbmd0aCl7dmFyIGU9Y1swXSxmPWNbYy5sZW5ndGgtMV0sZz1lLnBhcmVudE5vZGUsaD1hLmRhLmluc3RhbmNlLGw9aC5wcmVwcm9jZXNzTm9kZTtpZihsKXtiKGUsZixmdW5jdGlvbihhLGIpe3ZhciBjPWEucHJldmlvdXNTaWJsaW5nLGQ9bC5jYWxsKGgsYSk7ZCYmKGE9PT1lJiYoZT1kWzBdfHxiKSxhPT09ZiYmKGY9ZFtkLmxlbmd0aC0xXXx8YykpfSk7Yy5sZW5ndGg9MDtpZighZSlyZXR1cm47ZT09PWY/Yy5wdXNoKGUpOihjLnB1c2goZSxmKSxhLmEuVGEoYyxnKSl9YihlLGYsZnVuY3Rpb24oYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxhLm9jKGQsYil9KTtiKGUsZixmdW5jdGlvbihiKXsxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGV8fGEuJC5aYyhiLFtkXSl9KTthLmEuVGEoYyxnKX19ZnVuY3Rpb24gZChhKXtyZXR1cm4gYS5ub2RlVHlwZT9hOjA8YS5sZW5ndGg/XG5hWzBdOm51bGx9ZnVuY3Rpb24gZShiLGUsZixoLGwpe2w9bHx8e307dmFyIG49KGImJmQoYil8fGZ8fHt9KS5vd25lckRvY3VtZW50LHk9bC50ZW1wbGF0ZUVuZ2luZXx8ZzthLmJjLndkKGYseSxuKTtmPXkucmVuZGVyVGVtcGxhdGUoZixoLGwsbik7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGYubGVuZ3RofHwwPGYubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgZlswXS5ub2RlVHlwZSl0aHJvdyBFcnJvcihcIlRlbXBsYXRlIGVuZ2luZSBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBET00gbm9kZXNcIik7bj0hMTtzd2l0Y2goZSl7Y2FzZSBcInJlcGxhY2VDaGlsZHJlblwiOmEuaC50YShiLGYpO249ITA7YnJlYWs7Y2FzZSBcInJlcGxhY2VOb2RlXCI6YS5hLlRjKGIsZik7bj0hMDticmVhaztjYXNlIFwiaWdub3JlVGFyZ2V0Tm9kZVwiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmtub3duIHJlbmRlck1vZGU6IFwiK2UpO31uJiYoYyhmLGgpLGwuYWZ0ZXJSZW5kZXImJmEudS5KKGwuYWZ0ZXJSZW5kZXIsXG5udWxsLFtmLGguJGRhdGFdKSxcInJlcGxhY2VDaGlsZHJlblwiPT1lJiZhLnYuWWEoYixhLnYuWSkpO3JldHVybiBmfWZ1bmN0aW9uIGYoYixjLGQpe3JldHVybiBhLk0oYik/YigpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYyxkKTpifXZhciBnO2EuWWI9ZnVuY3Rpb24oYil7aWYoYiE9biYmIShiIGluc3RhbmNlb2YgYS5iYSkpdGhyb3cgRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKTtnPWJ9O2EuVmI9ZnVuY3Rpb24oYixjLGgsbCxyKXtoPWh8fHt9O2lmKChoLnRlbXBsYXRlRW5naW5lfHxnKT09bil0aHJvdyBFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKTtyPXJ8fFwicmVwbGFjZUNoaWxkcmVuXCI7aWYobCl7dmFyIHY9ZChsKTtyZXR1cm4gYS5UKGZ1bmN0aW9uKCl7dmFyIGc9YyYmYyBpbnN0YW5jZW9mIGEuWD9jOm5ldyBhLlgoYyxudWxsLG51bGwsbnVsbCx7ZXhwb3J0RGVwZW5kZW5jaWVzOiEwfSksXG5uPWYoYixnLiRkYXRhLGcpLGc9ZShsLHIsbixnLGgpO1wicmVwbGFjZU5vZGVcIj09ciYmKGw9Zyx2PWQobCkpfSxudWxsLHtCYTpmdW5jdGlvbigpe3JldHVybiF2fHwhYS5hLkxiKHYpfSxqOnYmJlwicmVwbGFjZU5vZGVcIj09cj92LnBhcmVudE5vZGU6dn0pfXJldHVybiBhLiQuT2IoZnVuY3Rpb24oZCl7YS5WYihiLGMsaCxkLFwicmVwbGFjZU5vZGVcIil9KX07YS5QZD1mdW5jdGlvbihiLGQsZyxoLGwpe2Z1bmN0aW9uIHYoYixjKXthLnUuSihhLmEuV2IsbnVsbCxbaCxiLHQsZyx5LGNdKTthLnYuWWEoaCxhLnYuWSl9ZnVuY3Rpb24geShhLGIpe2MoYix1KTtnLmFmdGVyUmVuZGVyJiZnLmFmdGVyUmVuZGVyKGIsYSk7dT1udWxsfWZ1bmN0aW9uIHQoYSxjKXt1PWwuY3JlYXRlQ2hpbGRDb250ZXh0KGEsZy5hcyxmdW5jdGlvbihhKXthLiRpbmRleD1jfSk7dmFyIGQ9ZihiLGEsdSk7cmV0dXJuIGUoaCxcImlnbm9yZVRhcmdldE5vZGVcIixkLHUsZyl9dmFyIHUsdz0hMT09PWcuaW5jbHVkZURlc3Ryb3llZHx8XG5hLm9wdGlvbnMuZm9yZWFjaEhpZGVzRGVzdHJveWVkJiYhZy5pbmNsdWRlRGVzdHJveWVkO2lmKHd8fGcuYmVmb3JlUmVtb3ZlfHwhYS5MYyhkKSlyZXR1cm4gYS5UKGZ1bmN0aW9uKCl7dmFyIGI9YS5hLmMoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBiLmxlbmd0aCYmKGI9W2JdKTt3JiYoYj1hLmEuY2IoYixmdW5jdGlvbihiKXtyZXR1cm4gYj09PW58fG51bGw9PT1ifHwhYS5hLmMoYi5fZGVzdHJveSl9KSk7dihiKX0sbnVsbCx7ajpofSk7dihkLncoKSk7dmFyIHg9ZC5zdWJzY3JpYmUoZnVuY3Rpb24oYSl7dihkKCksYSl9LG51bGwsXCJhcnJheUNoYW5nZVwiKTt4LmooaCk7cmV0dXJuIHh9O3ZhciBoPWEuYS5nLlcoKSxsPWEuYS5nLlcoKTthLmYudGVtcGxhdGU9e2luaXQ6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuYyhjKCkpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBkfHxkLm5hbWUpYS5oLkNhKGIpO2Vsc2UgaWYoXCJub2Rlc1wiaW4gZCl7ZD1kLm5vZGVzfHxbXTtpZihhLk0oZCkpdGhyb3cgRXJyb3IoJ1RoZSBcIm5vZGVzXCIgb3B0aW9uIG11c3QgYmUgYSBwbGFpbiwgbm9uLW9ic2VydmFibGUgYXJyYXkuJyk7XG52YXIgZT1kWzBdJiZkWzBdLnBhcmVudE5vZGU7ZSYmYS5hLmcuZ2V0KGUsbCl8fChlPWEuYS5QYihkKSxhLmEuZy5zZXQoZSxsLCEwKSk7KG5ldyBhLkEuaWEoYikpLm5vZGVzKGUpfWVsc2UgaWYoZD1hLmguY2hpbGROb2RlcyhiKSwwPGQubGVuZ3RoKWU9YS5hLlBiKGQpLChuZXcgYS5BLmlhKGIpKS5ub2RlcyhlKTtlbHNlIHRocm93IEVycm9yKFwiQW5vbnltb3VzIHRlbXBsYXRlIGRlZmluZWQsIGJ1dCBubyB0ZW1wbGF0ZSBjb250ZW50IHdhcyBwcm92aWRlZFwiKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZSxmKXt2YXIgZz1jKCk7Yz1hLmEuYyhnKTtkPSEwO2U9bnVsbDtcInN0cmluZ1wiPT10eXBlb2YgYz9jPXt9OihnPWMubmFtZSxcImlmXCJpbiBjJiYoZD1hLmEuYyhjW1wiaWZcIl0pKSxkJiZcImlmbm90XCJpbiBjJiYoZD0hYS5hLmMoYy5pZm5vdCkpKTtcImZvcmVhY2hcImluIGM/ZT1hLlBkKGd8fGIsZCYmYy5mb3JlYWNofHxcbltdLGMsYixmKTpkPyhmPVwiZGF0YVwiaW4gYz9mLnBkKGMuZGF0YSxjLmFzKTpmLGU9YS5WYihnfHxiLGYsYyxiKSk6YS5oLkNhKGIpO2Y9ZTsoYz1hLmEuZy5nZXQoYixoKSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGMubSYmYy5tKCk7YS5hLmcuc2V0KGIsaCwhZnx8Zi5mYSYmIWYuZmEoKT9uOmYpfX07YS5sLlFhLnRlbXBsYXRlPWZ1bmN0aW9uKGIpe2I9YS5sLlJiKGIpO3JldHVybiAxPT1iLmxlbmd0aCYmYlswXS51bmtub3dufHxhLmwuSGQoYixcIm5hbWVcIik/bnVsbDpcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgYW5vbnltb3VzIHRlbXBsYXRlcyBuZXN0ZWQgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIn07YS5oLmNhLnRlbXBsYXRlPSEwfSkoKTthLmIoXCJzZXRUZW1wbGF0ZUVuZ2luZVwiLGEuWWIpO2EuYihcInJlbmRlclRlbXBsYXRlXCIsYS5WYik7YS5hLkVjPWZ1bmN0aW9uKGEsYyxkKXtpZihhLmxlbmd0aCYmYy5sZW5ndGgpe3ZhciBlLGYsZyxoLGw7Zm9yKGU9Zj1cbjA7KCFkfHxlPGQpJiYoaD1hW2ZdKTsrK2Ype2ZvcihnPTA7bD1jW2ddOysrZylpZihoLnZhbHVlPT09bC52YWx1ZSl7aC5tb3ZlZD1sLmluZGV4O2wubW92ZWQ9aC5pbmRleDtjLnNwbGljZShnLDEpO2U9Zz0wO2JyZWFrfWUrPWd9fX07YS5hLkliPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQsZSxmLGcpe3ZhciBoPU1hdGgubWluLGw9TWF0aC5tYXgsaz1bXSxtLG49Yi5sZW5ndGgscCxyPWQubGVuZ3RoLHY9ci1ufHwxLHk9bityKzEsdCx1LHc7Zm9yKG09MDttPD1uO20rKylmb3IodT10LGsucHVzaCh0PVtdKSx3PWgocixtK3YpLHA9bCgwLG0tMSk7cDw9dztwKyspdFtwXT1wP20/YlttLTFdPT09ZFtwLTFdP3VbcC0xXTpoKHVbcF18fHksdFtwLTFdfHx5KSsxOnArMTptKzE7aD1bXTtsPVtdO3Y9W107bT1uO2ZvcihwPXI7bXx8cDspcj1rW21dW3BdLTEscCYmcj09PWtbbV1bcC0xXT9sLnB1c2goaFtoLmxlbmd0aF09e3N0YXR1czplLHZhbHVlOmRbLS1wXSxpbmRleDpwfSk6bSYmXG5yPT09a1ttLTFdW3BdP3YucHVzaChoW2gubGVuZ3RoXT17c3RhdHVzOmYsdmFsdWU6YlstLW1dLGluZGV4Om19KTooLS1wLC0tbSxnLnNwYXJzZXx8aC5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmRbcF19KSk7YS5hLkVjKHYsbCwhZy5kb250TGltaXRNb3ZlcyYmMTAqbik7cmV0dXJuIGgucmV2ZXJzZSgpfXJldHVybiBmdW5jdGlvbihhLGQsZSl7ZT1cImJvb2xlYW5cIj09PXR5cGVvZiBlP3tkb250TGltaXRNb3ZlczplfTplfHx7fTthPWF8fFtdO2Q9ZHx8W107cmV0dXJuIGEubGVuZ3RoPGQubGVuZ3RoP2IoYSxkLFwiYWRkZWRcIixcImRlbGV0ZWRcIixlKTpiKGQsYSxcImRlbGV0ZWRcIixcImFkZGVkXCIsZSl9fSgpO2EuYihcInV0aWxzLmNvbXBhcmVBcnJheXNcIixhLmEuSWIpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQsaCxsKXt2YXIgaz1bXSxtPWEuVChmdW5jdGlvbigpe3ZhciBtPWMoZCxsLGEuYS5UYShrLGIpKXx8W107MDxrLmxlbmd0aCYmKGEuYS5UYyhrLG0pLGgmJlxuYS51LkooaCxudWxsLFtkLG0sbF0pKTtrLmxlbmd0aD0wO2EuYS5lYihrLG0pfSxudWxsLHtqOmIsQmE6ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLm5jKGspfX0pO3JldHVybntyYTprLFQ6bS5mYSgpP206bn19dmFyIGM9YS5hLmcuVygpLGQ9YS5hLmcuVygpO2EuYS5XYj1mdW5jdGlvbihlLGYsZyxoLGwsayl7ZnVuY3Rpb24gbShiKXt6PXt5YTpiLE5iOmEuZ2EodysrKX07dS5wdXNoKHopO0EucHVzaCh6KTt2fHxFLnB1c2goeil9ZnVuY3Rpb24gcShiKXt6PXJbYl07dyE9PWImJkQucHVzaCh6KTt6Lk5iKHcrKyk7YS5hLlRhKHoucmEsZSk7dS5wdXNoKHopO0EucHVzaCh6KX1mdW5jdGlvbiBwKGIsYyl7aWYoYilmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYS5hLkIoY1tkXS5yYSxmdW5jdGlvbihhKXtiKGEsZCxjW2RdLnlhKX0pfWY9Znx8W107XCJ1bmRlZmluZWRcIj09dHlwZW9mIGYubGVuZ3RoJiYoZj1bZl0pO2g9aHx8e307dmFyIHI9YS5hLmcuZ2V0KGUsYyksdj0hcixcbnU9W10sdD0wLHc9MCx4PVtdLEE9W10sQj1bXSxEPVtdLEU9W10seixIPTA7aWYodilhLmEuQihmLG0pO2Vsc2V7aWYoIWt8fHImJnIuX2NvdW50V2FpdGluZ0ZvclJlbW92ZSl7dmFyIEc9dj9bXTphLmEuR2IocixmdW5jdGlvbihhKXtyZXR1cm4gYS55YX0pO2s9YS5hLkliKEcsZix7ZG9udExpbWl0TW92ZXM6aC5kb250TGltaXRNb3ZlcyxzcGFyc2U6ITB9KX1mb3IodmFyIEc9MCxGLEosSztGPWtbR107RysrKXN3aXRjaChKPUYubW92ZWQsSz1GLmluZGV4LEYuc3RhdHVzKXtjYXNlIFwiZGVsZXRlZFwiOmZvcig7dDxLOylxKHQrKyk7Sj09PW4mJih6PXJbdF0sei5UJiYoei5ULm0oKSx6LlQ9biksYS5hLlRhKHoucmEsZSkubGVuZ3RoJiYoaC5iZWZvcmVSZW1vdmUmJih1LnB1c2goeiksQS5wdXNoKHopLEgrKyx6LnlhPT09ZD96PW51bGw6Qi5wdXNoKHopKSx6JiZ4LnB1c2guYXBwbHkoeCx6LnJhKSkpO3QrKzticmVhaztjYXNlIFwiYWRkZWRcIjpmb3IoO3c8SzspcSh0KyspO0ohPT1cbm4/cShKKTptKEYudmFsdWUpfWZvcig7dzxmLmxlbmd0aDspcSh0KyspO3UuX2NvdW50V2FpdGluZ0ZvclJlbW92ZT1IfWEuYS5nLnNldChlLGMsdSk7cChoLmJlZm9yZU1vdmUsRCk7YS5hLkIoeCxoLmJlZm9yZVJlbW92ZT9hLm9hOmEucmVtb3ZlTm9kZSk7Rz0wO2Y9YS5oLmZpcnN0Q2hpbGQoZSk7Zm9yKHZhciBNO3o9QVtHXTtHKyspe3oucmF8fGEuYS5leHRlbmQoeixiKGUsZyx6LnlhLGwsei5OYikpO2Zvcih4PTA7dD16LnJhW3hdO2Y9dC5uZXh0U2libGluZyxNPXQseCsrKXQhPT1mJiZhLmguSmMoZSx0LE0pOyF6LkRkJiZsJiYobCh6LnlhLHoucmEsei5OYiksei5EZD0hMCl9cChoLmJlZm9yZVJlbW92ZSxCKTtmb3IoRz0wO0c8Qi5sZW5ndGg7KytHKUJbR10ueWE9ZDtwKGguYWZ0ZXJNb3ZlLEQpO3AoaC5hZnRlckFkZCxFKX19KSgpO2EuYihcInV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdcIixhLmEuV2IpO2EuYWE9ZnVuY3Rpb24oKXt0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9XG4hMX07YS5hYS5wcm90b3R5cGU9bmV3IGEuYmE7YS5hYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YS5hYTthLmFhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGMsZCxlKXtpZihjPSg5PmEuYS5VPzA6Yi5ub2Rlcyk/Yi5ub2RlcygpOm51bGwpcmV0dXJuIGEuYS5sYShjLmNsb25lTm9kZSghMCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLnNhKGIsZSl9O2EuYWEuTGE9bmV3IGEuYWE7YS5ZYihhLmFhLkxhKTthLmIoXCJuYXRpdmVUZW1wbGF0ZUVuZ2luZVwiLGEuYWEpOyhmdW5jdGlvbigpe2EuWGE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkdkPWZ1bmN0aW9uKCl7aWYoIXd8fCF3LnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PXcudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTt0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsZSxmLGcpe2c9XG5nfHx4O2Y9Znx8e307aWYoMj5hKXRocm93IEVycm9yKFwiWW91ciB2ZXJzaW9uIG9mIGpRdWVyeS50bXBsIGlzIHRvbyBvbGQuIFBsZWFzZSB1cGdyYWRlIHRvIGpRdWVyeS50bXBsIDEuMC4wcHJlIG9yIGxhdGVyLlwiKTt2YXIgaD1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtofHwoaD1iLnRleHQoKXx8XCJcIixoPXcudGVtcGxhdGUobnVsbCxcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIitoK1wie3sva29fd2l0aH19XCIpLGIuZGF0YShcInByZWNvbXBpbGVkXCIsaCkpO2I9W2UuJGRhdGFdO2U9dy5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6ZX0sZi50ZW1wbGF0ZU9wdGlvbnMpO2U9dy50bXBsKGgsYixlKTtlLmFwcGVuZFRvKGcuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7dy5mcmFnbWVudHM9e307cmV0dXJuIGV9O3RoaXMuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKGEpe3JldHVyblwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIithK1wiIH0pKCkpIH19XCJ9O1xudGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe3gud3JpdGUoXCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9J1wiK2ErXCInPlwiK2IrXCJcXHgzYy9zY3JpcHQ+XCIpfTswPGEmJih3LnRtcGwudGFnLmtvX2NvZGU9e29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0sdy50bXBsLnRhZy5rb193aXRoPXtvcGVuOlwid2l0aCgkMSkge1wiLGNsb3NlOlwifSBcIn0pfTthLlhhLnByb3RvdHlwZT1uZXcgYS5iYTthLlhhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLlhhO3ZhciBiPW5ldyBhLlhhOzA8Yi5HZCYmYS5ZYihiKTthLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixhLlhhKX0pKCl9KX0pKCk7fSkoKTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFwcGx5TWlkZGxld2FyZTtcblxudmFyIF9jb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG5cbnZhciBfY29tcG9zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IF9jb21wb3NlMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGJpbmRBY3Rpb25DcmVhdG9ycztcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbWJpbmVSZWR1Y2VycztcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiAnICsgJ0lmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvblxcJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCAnICsgJ3lvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCdObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXCInICsga2V5ICsgJ1wiJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB2b2lkIDA7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvciA9IHZvaWQgMDtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShfa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29tcG9zZTtcbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAgICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gICAqXG4gICAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAgICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICAgKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAgICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICAgKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICAgKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gICAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICAgKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gICAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAgICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAgICpcbiAgICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAgICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICAgKi9cbn07ZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7IHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbX3N5bWJvbE9ic2VydmFibGUyWydkZWZhdWx0J11dID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyW19zeW1ib2xPYnNlcnZhYmxlMlsnZGVmYXVsdCddXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZSA9IGV4cG9ydHMuYXBwbHlNaWRkbGV3YXJlID0gZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnMgPSBleHBvcnRzLmNvbWJpbmVSZWR1Y2VycyA9IGV4cG9ydHMuY3JlYXRlU3RvcmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7XG5cbnZhciBfY3JlYXRlU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU3RvcmUpO1xuXG52YXIgX2NvbWJpbmVSZWR1Y2VycyA9IHJlcXVpcmUoJy4vY29tYmluZVJlZHVjZXJzJyk7XG5cbnZhciBfY29tYmluZVJlZHVjZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbWJpbmVSZWR1Y2Vycyk7XG5cbnZhciBfYmluZEFjdGlvbkNyZWF0b3JzID0gcmVxdWlyZSgnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnKTtcblxudmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZEFjdGlvbkNyZWF0b3JzKTtcblxudmFyIF9hcHBseU1pZGRsZXdhcmUgPSByZXF1aXJlKCcuL2FwcGx5TWlkZGxld2FyZScpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBseU1pZGRsZXdhcmUpO1xuXG52YXIgX2NvbXBvc2UgPSByZXF1aXJlKCcuL2NvbXBvc2UnKTtcblxudmFyIF9jb21wb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2UpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qXG4qIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuKi9cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gX2NyZWF0ZVN0b3JlMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5jb21iaW5lUmVkdWNlcnMgPSBfY29tYmluZVJlZHVjZXJzMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnMgPSBfYmluZEFjdGlvbkNyZWF0b3JzMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBfYXBwbHlNaWRkbGV3YXJlMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5jb21wb3NlID0gX2NvbXBvc2UyWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gd2FybmluZztcbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbC5qcycpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRTTWFwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRTTWFwKGlucHV0TWFwKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHQuX2tleXMgPSBbXTtcclxuICAgICAgICB0Ll92YWx1ZXMgPSBbXTtcclxuICAgICAgICB0Lmxlbmd0aCA9IDA7XHJcbiAgICAgICAgaWYgKGlucHV0TWFwKSB7XHJcbiAgICAgICAgICAgIGlucHV0TWFwLmZvckVhY2goZnVuY3Rpb24gKHYsIGspIHtcclxuICAgICAgICAgICAgICAgIHQuc2V0KHZbMF0sIHZbMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYSBKU09OIG9iamVjdCB0byBhIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geyp9IGpzb25PYmplY3QgSlNPTiBvYmplY3QgdG8gY29udmVydFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY29udmVydE9ianNdIGNvbnZlcnQgbmVzdGVkIG9iamVjdHMgdG8gbWFwc1xyXG4gICAgICogQHJldHVybnMge1RTTWFwPEssIFY+fVxyXG4gICAgICogQG1lbWJlcm9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uT2JqZWN0LCBjb252ZXJ0T2Jqcykge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB2YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgY29udmVydE9ianMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRTTWFwKCkuZnJvbUpTT04odmFsdWUsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgY29udmVydE9ianMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBzZXRQcm9wZXJ0eSh2KTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGpzb25PYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIGlmIChqc29uT2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdC5zZXQocHJvcGVydHksIHNldFByb3BlcnR5KGpzb25PYmplY3RbcHJvcGVydHldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dHMgdGhlIGNvbnRlbnRzIG9mIHRoZSBtYXAgdG8gYSBKU09OIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt7W2tleTogc3RyaW5nXTogVn19XHJcbiAgICAgKiBAbWVtYmVyb2YgVFNNYXBcclxuICAgICAqL1xyXG4gICAgVFNNYXAucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2JqID0ge307XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUU01hcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvSlNPTigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRWYWx1ZSh2KTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHQua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcclxuICAgICAgICAgICAgb2JqW1N0cmluZyhrKV0gPSBnZXRWYWx1ZSh0LmdldChrKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBhcnJheSBvZiBhcnJheXMgcmVzcHJlc2VudGluZyB0aGUgbWFwLCBraW5kIG9mIGxpa2UgYW4gZXhwb3J0IGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHsoQXJyYXk8QXJyYXk8S3xWPj4pfVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJPZiBUU01hcFxyXG4gICAgICovXHJcbiAgICBUU01hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMua2V5cygpLm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gW2ssIF90aGlzLmdldChrKV07IH0pKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBhcnJheSBvZiBrZXlzIGluIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0FycmF5PEs+fVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJPZiBUU01hcFxyXG4gICAgICovXHJcbiAgICBUU01hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0aGlzLl9rZXlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBhcnJheSBvZiB0aGUgdmFsdWVzIGluIHRoZSBtYXAuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0FycmF5PFY+fVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJPZiBUU01hcFxyXG4gICAgICovXHJcbiAgICBUU01hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKHRoaXMuX3ZhbHVlcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayB0byBzZWUgaWYgYW4gaXRlbSBpbiB0aGUgbWFwIGV4aXN0cyBnaXZlbiBpdCdzIGtleS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0t9IGtleVxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuaW5kZXhPZihrZXkpID4gLTE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzcGVjaWZpYyBpdGVtIGZyb20gdGhlIG1hcCBnaXZlbiBpdCdzIGtleS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0t9IGtleVxyXG4gICAgICogQHJldHVybnMge1Z9XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICByZXR1cm4gaSA+IC0xID8gdGhpcy5fdmFsdWVzW2ldIDogdW5kZWZpbmVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2FmZWx5IHJldHJpZXZlIGEgZGVlcGx5IG5lc3RlZCBwcm9wZXJ0eS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0tbXX0gcGF0aFxyXG4gICAgICogQHJldHVybnMge1Z9XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5kZWVwR2V0ID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICBpZiAoIXBhdGggfHwgIXBhdGgubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgcmVjdXJzaXZlR2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCkge1xyXG4gICAgICAgICAgICBpZiAob2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICghcGF0aC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0KG9iaiBpbnN0YW5jZW9mIFRTTWFwID8gb2JqLmdldChwYXRoWzBdKSA6IG9ialtwYXRoWzBdXSwgcGF0aC5zbGljZSgxKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0KHRoaXMuZ2V0KHBhdGhbMF0pLCBwYXRoLnNsaWNlKDEpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHNwZWNpZmljIGl0ZW0gaW4gdGhlIG1hcCBnaXZlbiBpdCdzIGtleSwgYXV0b21hdGljYWxseSBhZGRzIG5ldyBpdGVtcyBhcyBuZWVkZWQuXHJcbiAgICAgKiBPdmV3cnJpdGVzIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtLfSBrZXlcclxuICAgICAqIEBwYXJhbSB7Vn0gdmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyT2YgVFNNYXBcclxuICAgICAqL1xyXG4gICAgVFNNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIGtleSBleGlzdHMgYW5kIG92ZXJ3cml0ZVxyXG4gICAgICAgIHZhciBpID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgaWYgKGkgPiAtMSkge1xyXG4gICAgICAgICAgICB0Ll92YWx1ZXNbaV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHQuX2tleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB0Ll92YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHQubGVuZ3RoID0gdC5fdmFsdWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnRlcnMgYSB2YWx1ZSBpbnRvIHRoZSBtYXAgZm9yY2luZyB0aGUga2V5cyB0byBhbHdheXMgYmUgc29ydGVkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7S30ga2V5XHJcbiAgICAgKiBAcGFyYW0ge1Z9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0VmFsXVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtlbmRWYWxdXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqIEBtZW1iZXJvZiBUU01hcFxyXG4gICAgICovXHJcbiAgICBUU01hcC5wcm90b3R5cGUuc29ydGVkU2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIHN0YXJ0VmFsLCBlbmRWYWwpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMuX2tleXMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHN0YXJ0VmFsIHx8IDA7XHJcbiAgICAgICAgdmFyIGVuZCA9IGVuZFZhbCAhPT0gdW5kZWZpbmVkID8gZW5kVmFsIDogbGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAobGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdC5fa2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIHQuX3ZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPiB0aGlzLl9rZXlzW2VuZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5cy5zcGxpY2UoZW5kICsgMSwgMCwga2V5KTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnNwbGljZShlbmQgKyAxLCAwLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5IDwgdGhpcy5fa2V5c1tzdGFydF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnNwbGljZShzdGFydCwgMCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9rZXlzLnNwbGljZShzdGFydCwgMCwga2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtID0gc3RhcnQgKyBNYXRoLmZsb29yKChlbmQgLSBzdGFydCkgLyAyKTtcclxuICAgICAgICBpZiAoa2V5IDwgdGhpcy5fa2V5c1ttXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRTZXQoa2V5LCB2YWx1ZSwgc3RhcnQsIG0gLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA+IHRoaXMuX2tleXNbbV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkU2V0KGtleSwgdmFsdWUsIG0gKyAxLCBlbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFByb3ZpZGUgYSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIG1hcFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIGFsbCB0aGUgY29udGVudHMgb2YgdGhlIG1hcFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtUU01hcDxLLFY+fVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJPZiBUU01hcFxyXG4gICAgICovXHJcbiAgICBUU01hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgIHQuX2tleXMubGVuZ3RoID0gdC5sZW5ndGggPSB0Ll92YWx1ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhbiBpdGVtIGZyb20gdGhlIG1hcCBnaXZlbiBpdCdzIGtleVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7S30ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyT2YgVFNNYXBcclxuICAgICAqL1xyXG4gICAgVFNNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGkgPSB0Ll9rZXlzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHQuX2tleXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB0Ll92YWx1ZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB0Lmxlbmd0aCA9IHQuX2tleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB0byBsb29wIHRocm91Z2ggdGhlIG1hcC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geyh2YWx1ZTpWLGtleT86SyxpbmRleD86bnVtYmVyKSA9PiB2b2lkfSBjYWxsYmFja2ZuXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2tleXMuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xyXG4gICAgICAgICAgICBjYWxsYmFja2ZuKF90aGlzLmdldCh2KSwgdiwgaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHJldHVybmVkIHZhbHVlIG9mIGVhY2ggaXRlbSBpbiB0aGUgbWFwLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KHZhbHVlOlYsa2V5PzpLLGluZGV4PzpudW1iZXIpID0+IGFueX0gY2FsbGJhY2tmblxyXG4gICAgICogQHJldHVybnMge0FycmF5PGFueT59XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5cygpLm1hcChmdW5jdGlvbiAoaXRlbUtleSwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tmbihfdGhpcy5nZXQoaXRlbUtleSksIGl0ZW1LZXksIGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBpdGVtcyBiYXNlZCBvbiBhIGNvbmRpdGlvbmFsIGZ1bmN0aW9uIHBhc3NlZCB0byBmaWx0ZXIuXHJcbiAgICAgKiBNdXRhdGVzIHRoZSBtYXAgaW4gcGxhY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsodmFsdWU6VixrZXk/OkssaW5kZXg/Om51bWJlcikgPT4gQm9vbGVhbn0gY2FsbGJhY2tmblxyXG4gICAgICogQHJldHVybnMge1RTTWFwPEssVj59XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlck9mIFRTTWFwXHJcbiAgICAgKi9cclxuICAgIFRTTWFwLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xyXG4gICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICB0Ll9rZXlzLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrZm4odC5nZXQodiksIHYsIGkpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHQuZGVsZXRlKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgbWFwLCBicmVha2luZyBhbGwgcmVmZXJlbmNlcyB0byB0aGUgb2xkIG1hcCBhbmQgaXQncyBjaGlsZHJlbi5cclxuICAgICAqIFVzZXMgSlNPTi5wYXJzZSBzbyBhbnkgZnVuY3Rpb25zIHdpbGwgYmUgc3RyaW5naWZpZWQgYW5kIGxvc2UgdGhlaXIgb3JpZ2luYWwgcHVycG9zZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7VFNNYXA8SyxWPn1cclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyT2YgVFNNYXBcclxuICAgICAqL1xyXG4gICAgVFNNYXAucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVFNNYXAodGhpcy5lbnRyaWVzKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUU01hcDtcclxufSgpKTtcclxuZXhwb3J0cy5UU01hcCA9IFRTTWFwO1xyXG4iLCJpbXBvcnQge0FjdGlvblR5cGVzfSBmcm9tIFwiLi4vaW5mcmFzdHJ1Y3R1cmUvQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQge0lBY3Rpb259IGZyb20gXCIuLi9pbmZyYXN0cnVjdHVyZS9JQWN0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKHRhc2s6c3RyaW5nKTpJQWN0aW9uXHJcbntcclxuXHRyZXR1cm57XHJcblx0XHR0eXBlOiBBY3Rpb25UeXBlcy5BRERfVEFTSyxcclxuXHRcdHBheWxvYWQ6dGFza1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrOnN0cmluZyk6SUFjdGlvblxyXG57XHJcblx0cmV0dXJue1xyXG5cdFx0dHlwZTogQWN0aW9uVHlwZXMuREVMRVRFX1RBU0ssXHJcblx0XHRwYXlsb2FkOiB0YXNrXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0YWRkVGFzayxcclxuXHRkZWxldGVUYXNrXHJcbn07IiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7IHZtIH0gZnJvbSBcIi4vdmlld21vZGVscy90YXNrTGlzdFZpZXdNb2RlbFwiO1xyXG5pbXBvcnQge2NvbXBvbmVudE5hbWUsIGNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy90YXNrLWNhcmRcIjtcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0a28uY29tcG9uZW50cy5yZWdpc3Rlcihjb21wb25lbnROYW1lLCBjb21wb25lbnQpO1xyXG5cclxuXHR2YXIgbm9kZTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5cdGtvLmFwcGx5QmluZGluZ3Modm0sbm9kZSk7XHJcblxyXG59KSgpO1xyXG5cclxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29tcG9uZW50TmFtZSA9IFwidGFzay1jYXJkXCI7XHJcbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSB7XHJcblx0dmlld01vZGVsOmZ1bmN0aW9uKHBhcmFtczphbnkpe1xyXG5cdFx0XHR0aGlzLnRhc2tOYW1lID0ga28ucHVyZUNvbXB1dGVkKCgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW1zLnRhc2tOYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgbXQ0MFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jYXJkXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1jbG9zZVwiIGRhdGEtYmluZD1cImNsaWNrOiRyb290LmRlbGV0ZVRhc2tUb0xpc3QuYmluZCgkZGF0YSlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGFzay1uYW1lXCIgZGF0YS1iaW5kPVwidGV4dDp0YXNrTmFtZVwiPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0YFxyXG5cdH1cclxuIiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZXNcclxue1xyXG5cdEFERF9UQVNLLFxyXG5cdERFTEVURV9UQVNLXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgb2JqZWN0QXNzaWduIGZyb20gXCJvYmplY3QtYXNzaWduXCI7XHJcbmltcG9ydCB7QWN0aW9uVHlwZXN9IGZyb20gXCIuLi9pbmZyYXN0cnVjdHVyZS9BY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7SUFjdGlvbn0gZnJvbSBcIi4uL2luZnJhc3RydWN0dXJlL0lBY3Rpb25cIjtcclxuaW1wb3J0IHtJQXBwU3RhdGV9IGZyb20gXCIuLi9pbmZyYXN0cnVjdHVyZS9JQXBwU3RhdGVcIjtcclxuaW1wb3J0IHsgVFNNYXAgfSBmcm9tIFwidHlwZXNjcmlwdC1tYXBcIjtcclxuXHJcblxyXG4vL2NvbnN0IHJlZHVjZXJNYXA6TWFwPEFjdGlvblR5cGVzLCBGdW5jdGlvbj4gPSBuZXcgTWFwPEFjdGlvblR5cGVzLCBGdW5jdGlvbj4oKTtcclxuY29uc3QgcmVkdWNlck1hcDpUU01hcDxBY3Rpb25UeXBlcywgRnVuY3Rpb24+ID0gbmV3IFRTTWFwPEFjdGlvblR5cGVzLCBGdW5jdGlvbj4oKTtcclxuZnVuY3Rpb24gYWRkVGFzayhpbml0aWFsU3RhdGU6SUFwcFN0YXRlLCB0YXNrSXRlbTpzdHJpbmcpOklBcHBTdGF0ZVxyXG57XHJcblx0bGV0IHRhc2tMaXN0ID0gaW5pdGlhbFN0YXRlLnRhc2tMaXN0LmNvbmNhdCh0YXNrSXRlbSk7XHJcblx0cmV0dXJuIG9iamVjdEFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLCB7dGFza0xpc3R9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFzayhpbml0aWFsU3RhdGU6SUFwcFN0YXRlLCB0YXNrSXRlbTpzdHJpbmcpOklBcHBTdGF0ZVxyXG57XHJcblx0bGV0IGluZGV4Om51bWJlciA9IGluaXRpYWxTdGF0ZS50YXNrTGlzdC5pbmRleE9mKHRhc2tJdGVtKTtcclxuXHRsZXQgdGFza0xpc3QgPSBbXS5jb25jYXQoaW5pdGlhbFN0YXRlLnRhc2tMaXN0LnNsaWNlKDAsaW5kZXgpLCBpbml0aWFsU3RhdGUudGFza0xpc3Quc2xpY2UoaW5kZXgrMSkpOyBcclxuXHRyZXR1cm4gb2JqZWN0QXNzaWduKHt9LGluaXRpYWxTdGF0ZSx7dGFza0xpc3R9KTtcclxufVxyXG5cclxucmVkdWNlck1hcC5zZXQoQWN0aW9uVHlwZXMuQUREX1RBU0ssIGFkZFRhc2spO1xyXG5yZWR1Y2VyTWFwLnNldChBY3Rpb25UeXBlcy5ERUxFVEVfVEFTSywgZGVsZXRlVGFzayk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb290UmVkdWNlcihpbml0aWFsU3RhdGU6SUFwcFN0YXRlID0geyB0YXNrTGlzdDogW119LCBhY3Rpb246SUFjdGlvbik6SUFwcFN0YXRlXHJcbntcclxuXHRyZXR1cm4gcmVkdWNlck1hcC5oYXMoYWN0aW9uLnR5cGUpID8gcmVkdWNlck1hcC5nZXQoYWN0aW9uLnR5cGUpKGluaXRpYWxTdGF0ZSwgYWN0aW9uLnBheWxvYWQpIDogaW5pdGlhbFN0YXRlO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRhc2tMaXN0UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvYXBwLXJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUodGFza0xpc3RSZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCB7IGRlZmF1bHQgYXMgYWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUvYXBwLXN0b3JlXCI7XHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gXCIuLi9pbmZyYXN0cnVjdHVyZS9JQXBwU3RhdGVcIjtcclxuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuLi9pbmZyYXN0cnVjdHVyZS9JQWN0aW9uXCI7XHJcblxyXG5jbGFzcyB0YXNrTGlzdFZpZXdNb2RlbFxyXG57XHJcblx0YXBwU3RhdGU6S25vY2tvdXRPYnNlcnZhYmxlPElBcHBTdGF0ZT47XHJcblx0bmV3VGFzazpLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcblx0cHJpdmF0ZSB1bnN1YnNjcmliZTpGdW5jdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHRoaXMuYXBwU3RhdGUgPSBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0U3RhdGUoKSk7XHJcblxyXG5cclxuXHRcdHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmluZm8oXCJzdG9yZSBjaGFuZ2VkXCIpO1xyXG5cdFx0XHR0aGlzLmFwcFN0YXRlKHRoaXMuZ2V0U3RhdGUoKSk7XHJcblx0XHRcdGNvbnNvbGUuaW5mbyh0aGlzLmdldFN0YXRlKCkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5uZXdUYXNrID0ga28ub2JzZXJ2YWJsZSgnJyk7XHJcblx0fVxyXG5cclxuXHRhZGRUYXNrVG9MaXN0KClcclxuXHR7XHJcblx0XHRjb25zb2xlLmxvZygnYWRkaW5nJyk7XHJcblx0XHRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmFkZFRhc2sodGhpcy5uZXdUYXNrKCkpKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZVRhc2tUb0xpc3QoZGF0YTpzdHJpbmcpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5sb2coJ2RlbGV0aW5nJyk7XHJcblx0XHRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmRlbGV0ZVRhc2soZGF0YSkpO1xyXG5cdH1cclxuXHJcblx0bW9kaWZ5TGlzdChkYXRhOnN0cmluZywgYWN0aW9uQ3JlYXRvcjpGdW5jdGlvbik6dm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcihkYXRhKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFN0YXRlKCk6SUFwcFN0YXRlXHJcblx0e1xyXG5cdFx0cmV0dXJuIHN0b3JlLmdldFN0YXRlKCk7XHJcblx0fVxyXG5cclxuXHRkaXNwYXRjaChhY3Rpb246SUFjdGlvbilcclxuXHR7XHJcblx0XHRyZXR1cm4gc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgdm0gPSBuZXcgdGFza0xpc3RWaWV3TW9kZWwoKTsiXX0=
