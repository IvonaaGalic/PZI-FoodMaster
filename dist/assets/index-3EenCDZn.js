function Kb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ew(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Gb(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var tw={exports:{}},pc={},nw={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),Qb=Symbol.for("react.portal"),Yb=Symbol.for("react.fragment"),Xb=Symbol.for("react.strict_mode"),Jb=Symbol.for("react.profiler"),Zb=Symbol.for("react.provider"),ex=Symbol.for("react.context"),tx=Symbol.for("react.forward_ref"),nx=Symbol.for("react.suspense"),rx=Symbol.for("react.memo"),ix=Symbol.for("react.lazy"),qy=Symbol.iterator;function sx(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var rw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iw=Object.assign,sw={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||rw}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ow(){}ow.prototype=Fs.prototype;function jp(t,e,n){this.props=t,this.context=e,this.refs=sw,this.updater=n||rw}var Fp=jp.prototype=new ow;Fp.constructor=jp;iw(Fp,Fs.prototype);Fp.isPureReactComponent=!0;var Ky=Array.isArray,aw=Object.prototype.hasOwnProperty,Up={current:null},lw={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)aw.call(e,r)&&!lw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ca,type:t,key:s,ref:o,props:i,_owner:Up.current}}function ox(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function ax(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gy=/\/+/g;function eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ax(""+t.key):e.toString(36)}function Wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ca:case Qb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eh(o,0):r,Ky(i)?(n="",t!=null&&(n=t.replace(Gy,"$&/")+"/"),Wl(i,e,n,"",function(c){return c})):i!=null&&($p(i)&&(i=ox(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ky(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+eh(s,a);o+=Wl(s,e,n,u,i)}else if(u=sx(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+eh(s,a++),o+=Wl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yl(t,e,n){if(t==null)return t;var r=[],i=0;return Wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},ql={transition:null},ux={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Up};function cw(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:yl,forEach:function(t,e,n){yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!$p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Fs;se.Fragment=Yb;se.Profiler=Jb;se.PureComponent=jp;se.StrictMode=Xb;se.Suspense=nx;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;se.act=cw;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=iw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)aw.call(e,u)&&!lw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ca,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:ex,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zb,_context:t},t.Consumer=t};se.createElement=uw;se.createFactory=function(t){var e=uw.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:tx,render:t}};se.isValidElement=$p;se.lazy=function(t){return{$$typeof:ix,_payload:{_status:-1,_result:t},_init:lx}};se.memo=function(t,e){return{$$typeof:rx,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};se.unstable_act=cw;se.useCallback=function(t,e){return Dt.current.useCallback(t,e)};se.useContext=function(t){return Dt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Dt.current.useEffect(t,e)};se.useId=function(){return Dt.current.useId()};se.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Dt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};se.useRef=function(t){return Dt.current.useRef(t)};se.useState=function(t){return Dt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Dt.current.useTransition()};se.version="18.3.1";nw.exports=se;var V=nw.exports;const dw=ew(V),Zh=Kb({__proto__:null,default:dw},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=V,dx=Symbol.for("react.element"),hx=Symbol.for("react.fragment"),fx=Object.prototype.hasOwnProperty,px=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mx={key:!0,ref:!0,__self:!0,__source:!0};function hw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)fx.call(e,r)&&!mx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dx,type:t,key:s,ref:o,props:i,_owner:px.current}}pc.Fragment=hx;pc.jsx=hw;pc.jsxs=hw;tw.exports=pc;var _=tw.exports,ef={},fw={exports:{}},Jt={},pw={exports:{}},mw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var ee=B.length;B.push(Q);e:for(;0<ee;){var pe=ee-1>>>1,me=B[pe];if(0<i(me,Q))B[pe]=Q,B[ee]=me,ee=pe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],ee=B.pop();if(ee!==Q){B[0]=ee;e:for(var pe=0,me=B.length,ge=me>>>1;pe<ge;){var cn=2*(pe+1)-1,bt=B[cn],Un=cn+1,$n=B[Un];if(0>i(bt,ee))Un<me&&0>i($n,bt)?(B[pe]=$n,B[Un]=ee,pe=Un):(B[pe]=bt,B[cn]=ee,pe=cn);else if(Un<me&&0>i($n,ee))B[pe]=$n,B[Un]=ee,pe=Un;else break e}}return Q}function i(B,Q){var ee=B.sortIndex-Q.sortIndex;return ee!==0?ee:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,m=3,x=!1,P=!1,T=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function N(B){if(T=!1,w(B),!P)if(n(u)!==null)P=!0,Le(D);else{var Q=n(c);Q!==null&&Ge(N,Q.startTime-B)}}function D(B,Q){P=!1,T&&(T=!1,v(S),S=-1),x=!0;var ee=m;try{for(w(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!C());){var pe=p.callback;if(typeof pe=="function"){p.callback=null,m=p.priorityLevel;var me=pe(p.expirationTime<=Q);Q=t.unstable_now(),typeof me=="function"?p.callback=me:p===n(u)&&r(u),w(Q)}else r(u);p=n(u)}if(p!==null)var ge=!0;else{var cn=n(c);cn!==null&&Ge(N,cn.startTime-Q),ge=!1}return ge}finally{p=null,m=ee,x=!1}}var L=!1,b=null,S=-1,E=5,I=-1;function C(){return!(t.unstable_now()-I<E)}function A(){if(b!==null){var B=t.unstable_now();I=B;var Q=!0;try{Q=b(!0,B)}finally{Q?k():(L=!1,b=null)}}else L=!1}var k;if(typeof g=="function")k=function(){g(A)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,It=G.port2;G.port1.onmessage=A,k=function(){It.postMessage(null)}}else k=function(){R(A,0)};function Le(B){b=B,L||(L=!0,k())}function Ge(B,Q){S=R(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||x||(P=!0,Le(D))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var ee=m;m=Q;try{return B()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=m;m=B;try{return Q()}finally{m=ee}},t.unstable_scheduleCallback=function(B,Q,ee){var pe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ee+me,B={id:h++,callback:Q,priorityLevel:B,startTime:ee,expirationTime:me,sortIndex:-1},ee>pe?(B.sortIndex=ee,e(c,B),n(u)===null&&B===n(c)&&(T?(v(S),S=-1):T=!0,Ge(N,ee-pe))):(B.sortIndex=me,e(u,B),P||x||(P=!0,Le(D))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var Q=m;return function(){var ee=m;m=Q;try{return B.apply(this,arguments)}finally{m=ee}}}})(mw);pw.exports=mw;var gx=pw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=V,Xt=gx;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gw=new Set,Qo={};function Pi(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(Qo[t]=e,t=0;t<e.length;t++)gw.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,vx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qy={},Yy={};function _x(t){return tf.call(Yy,t)?!0:tf.call(Qy,t)?!1:vx.test(t)?Yy[t]=!0:(Qy[t]=!0,!1)}function wx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ex(t,e,n,r){if(e===null||typeof e>"u"||wx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zp=/[\-:]([a-z])/g;function Bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zp,Bp);ct[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zp,Bp);ct[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zp,Bp);ct[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hp(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ex(e,n,i,r)&&(n=null),r||i===null?_x(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),yw=Symbol.for("react.provider"),vw=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),Kp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),_w=Symbol.for("react.offscreen"),Xy=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,th;function Io(t){if(th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);th=e&&e[1]||""}return`
`+th+t}var nh=!1;function rh(t,e){if(!t||nh)return"";nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function Sx(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=rh(t.type,!1),t;case 11:return t=rh(t.type.render,!1),t;case 1:return t=rh(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wi:return"Fragment";case Hi:return"Portal";case nf:return"Profiler";case Wp:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vw:return(t.displayName||"Context")+".Consumer";case yw:return(t._context.displayName||"Context")+".Provider";case qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kp:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function Tx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ww(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ix(t){var e=ww(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=Ix(t))}function Ew(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ww(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sw(t,e){e=e.checked,e!=null&&Hp(t,"checked",e,!1)}function lf(t,e){Sw(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ev(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(bo(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function Tw(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,bw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bx=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){bx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function xw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function kw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xx=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(xx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,is=null,ss=null;function nv(t){if(t=Oa(t)){if(typeof mf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=_c(e),mf(t.stateNode,t.type,e))}}function Rw(t){is?ss?ss.push(t):ss=[t]:is=t}function Pw(){if(is){var t=is,e=ss;if(ss=is=null,nv(t),e)for(t=0;t<e.length;t++)nv(e[t])}}function Cw(t,e){return t(e)}function Aw(){}var ih=!1;function Nw(t,e,n){if(ih)return t(e,n);ih=!0;try{return Cw(t,e,n)}finally{ih=!1,(is!==null||ss!==null)&&(Aw(),Pw())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var gf=!1;if(er)try{var po={};Object.defineProperty(po,"passive",{get:function(){gf=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{gf=!1}function kx(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Lo=!1,yu=null,vu=!1,yf=null,Rx={onError:function(t){Lo=!0,yu=t}};function Px(t,e,n,r,i,s,o,a,u){Lo=!1,yu=null,kx.apply(Rx,arguments)}function Cx(t,e,n,r,i,s,o,a,u){if(Px.apply(this,arguments),Lo){if(Lo){var c=yu;Lo=!1,yu=null}else throw Error(U(198));vu||(vu=!0,yf=c)}}function Ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ow(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rv(t){if(Ci(t)!==t)throw Error(U(188))}function Ax(t){var e=t.alternate;if(!e){if(e=Ci(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rv(i),t;if(s===r)return rv(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Dw(t){return t=Ax(t),t!==null?Lw(t):null}function Lw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lw(t);if(e!==null)return e;t=t.sibling}return null}var Mw=Xt.unstable_scheduleCallback,iv=Xt.unstable_cancelCallback,Nx=Xt.unstable_shouldYield,Ox=Xt.unstable_requestPaint,Ue=Xt.unstable_now,Dx=Xt.unstable_getCurrentPriorityLevel,Qp=Xt.unstable_ImmediatePriority,Vw=Xt.unstable_UserBlockingPriority,_u=Xt.unstable_NormalPriority,Lx=Xt.unstable_LowPriority,jw=Xt.unstable_IdlePriority,mc=null,Cn=null;function Mx(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Fx,Vx=Math.log,jx=Math.LN2;function Fx(t){return t>>>=0,t===0?32:31-(Vx(t)/jx|0)|0}var El=64,Sl=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xo(a):(s&=o,s!==0&&(r=xo(s)))}else o=n&~i,o!==0?r=xo(o):s!==0&&(r=xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function Ux(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Ux(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fw(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function sh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function zx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function Uw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $w,Xp,zw,Bw,Hw,_f=!1,Tl=[],kr=null,Rr=null,Pr=null,Jo=new Map,Zo=new Map,gr=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sv(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function mo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oa(e),e!==null&&Xp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Hx(t,e,n,r,i){switch(e){case"focusin":return kr=mo(kr,t,e,n,r,i),!0;case"dragenter":return Rr=mo(Rr,t,e,n,r,i),!0;case"mouseover":return Pr=mo(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Jo.set(s,mo(Jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zo.set(s,mo(Zo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ww(t){var e=ai(t.target);if(e!==null){var n=Ci(e);if(n!==null){if(e=n.tag,e===13){if(e=Ow(n),e!==null){t.blockedOn=e,Hw(t.priority,function(){zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pf=r,n.target.dispatchEvent(r),pf=null}else return e=Oa(n),e!==null&&Xp(e),t.blockedOn=n,!1;e.shift()}return!0}function ov(t,e,n){Kl(t)&&n.delete(e)}function Wx(){_f=!1,kr!==null&&Kl(kr)&&(kr=null),Rr!==null&&Kl(Rr)&&(Rr=null),Pr!==null&&Kl(Pr)&&(Pr=null),Jo.forEach(ov),Zo.forEach(ov)}function go(t,e){t.blockedOn===e&&(t.blockedOn=null,_f||(_f=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,Wx)))}function ea(t){function e(i){return go(i,t)}if(0<Tl.length){go(Tl[0],t);for(var n=1;n<Tl.length;n++){var r=Tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&go(kr,t),Rr!==null&&go(Rr,t),Pr!==null&&go(Pr,t),Jo.forEach(e),Zo.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)Ww(n),n.blockedOn===null&&gr.shift()}var os=ar.ReactCurrentBatchConfig,Eu=!0;function qx(t,e,n,r){var i=ye,s=os.transition;os.transition=null;try{ye=1,Jp(t,e,n,r)}finally{ye=i,os.transition=s}}function Kx(t,e,n,r){var i=ye,s=os.transition;os.transition=null;try{ye=4,Jp(t,e,n,r)}finally{ye=i,os.transition=s}}function Jp(t,e,n,r){if(Eu){var i=wf(t,e,n,r);if(i===null)mh(t,e,r,Su,n),sv(t,r);else if(Hx(i,t,e,n,r))r.stopPropagation();else if(sv(t,r),e&4&&-1<Bx.indexOf(t)){for(;i!==null;){var s=Oa(i);if(s!==null&&$w(s),s=wf(t,e,n,r),s===null&&mh(t,e,r,Su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mh(t,e,r,null,n)}}var Su=null;function wf(t,e,n,r){if(Su=null,t=Gp(r),t=ai(t),t!==null)if(e=Ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ow(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Su=t,null}function qw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dx()){case Qp:return 1;case Vw:return 4;case _u:case Lx:return 16;case jw:return 536870912;default:return 16}default:return 16}}var Tr=null,Zp=null,Gl=null;function Kw(){if(Gl)return Gl;var t,e=Zp,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Gl=i.slice(t,1<r?1-r:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function av(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:av,this.isPropagationStopped=av,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},em=Zt(Us),Na=Oe({},Us,{view:0,detail:0}),Gx=Zt(Na),oh,ah,yo,gc=Oe({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(oh=t.screenX-yo.screenX,ah=t.screenY-yo.screenY):ah=oh=0,yo=t),oh)},movementY:function(t){return"movementY"in t?t.movementY:ah}}),lv=Zt(gc),Qx=Oe({},gc,{dataTransfer:0}),Yx=Zt(Qx),Xx=Oe({},Na,{relatedTarget:0}),lh=Zt(Xx),Jx=Oe({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Zt(Jx),ek=Oe({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tk=Zt(ek),nk=Oe({},Us,{data:0}),uv=Zt(nk),rk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ik={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ok(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sk[t])?!!e[t]:!1}function tm(){return ok}var ak=Oe({},Na,{key:function(t){if(t.key){var e=rk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ik[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tm,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lk=Zt(ak),uk=Oe({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cv=Zt(uk),ck=Oe({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tm}),dk=Zt(ck),hk=Oe({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),fk=Zt(hk),pk=Oe({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mk=Zt(pk),gk=[9,13,27,32],nm=er&&"CompositionEvent"in window,Mo=null;er&&"documentMode"in document&&(Mo=document.documentMode);var yk=er&&"TextEvent"in window&&!Mo,Gw=er&&(!nm||Mo&&8<Mo&&11>=Mo),dv=" ",hv=!1;function Qw(t,e){switch(t){case"keyup":return gk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function vk(t,e){switch(t){case"compositionend":return Yw(e);case"keypress":return e.which!==32?null:(hv=!0,dv);case"textInput":return t=e.data,t===dv&&hv?null:t;default:return null}}function _k(t,e){if(qi)return t==="compositionend"||!nm&&Qw(t,e)?(t=Kw(),Gl=Zp=Tr=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gw&&e.locale!=="ko"?null:e.data;default:return null}}var wk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wk[t.type]:e==="textarea"}function Xw(t,e,n,r){Rw(r),e=Tu(e,"onChange"),0<e.length&&(n=new em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vo=null,ta=null;function Ek(t){lE(t,0)}function yc(t){var e=Qi(t);if(Ew(e))return t}function Sk(t,e){if(t==="change")return e}var Jw=!1;if(er){var uh;if(er){var ch="oninput"in document;if(!ch){var pv=document.createElement("div");pv.setAttribute("oninput","return;"),ch=typeof pv.oninput=="function"}uh=ch}else uh=!1;Jw=uh&&(!document.documentMode||9<document.documentMode)}function mv(){Vo&&(Vo.detachEvent("onpropertychange",Zw),ta=Vo=null)}function Zw(t){if(t.propertyName==="value"&&yc(ta)){var e=[];Xw(e,ta,t,Gp(t)),Nw(Ek,e)}}function Tk(t,e,n){t==="focusin"?(mv(),Vo=e,ta=n,Vo.attachEvent("onpropertychange",Zw)):t==="focusout"&&mv()}function Ik(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(ta)}function bk(t,e){if(t==="click")return yc(e)}function xk(t,e){if(t==="input"||t==="change")return yc(e)}function kk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:kk;function na(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tf.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function gv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yv(t,e){var n=gv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gv(n)}}function eE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tE(){for(var t=window,e=gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gu(t.document)}return e}function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rk(t){var e=tE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eE(n.ownerDocument.documentElement,n)){if(r!==null&&rm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=yv(n,s);var o=yv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pk=er&&"documentMode"in document&&11>=document.documentMode,Ki=null,Ef=null,jo=null,Sf=!1;function vv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||Ki==null||Ki!==gu(r)||(r=Ki,"selectionStart"in r&&rm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&na(jo,r)||(jo=r,r=Tu(Ef,"onSelect"),0<r.length&&(e=new em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gi={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},dh={},nE={};er&&(nE=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function vc(t){if(dh[t])return dh[t];if(!Gi[t])return t;var e=Gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nE)return dh[t]=e[n];return t}var rE=vc("animationend"),iE=vc("animationiteration"),sE=vc("animationstart"),oE=vc("transitionend"),aE=new Map,_v="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){aE.set(t,e),Pi(e,[t])}for(var hh=0;hh<_v.length;hh++){var fh=_v[hh],Ck=fh.toLowerCase(),Ak=fh[0].toUpperCase()+fh.slice(1);Wr(Ck,"on"+Ak)}Wr(rE,"onAnimationEnd");Wr(iE,"onAnimationIteration");Wr(sE,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(oE,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Cx(r,e,void 0,t),t.currentTarget=null}function lE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;wv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;wv(i,a,c),s=u}}}if(vu)throw t=yf,vu=!1,yf=null,t}function be(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(uE(e,t,2,!1),n.add(r))}function ph(t,e,n){var r=0;e&&(r|=4),uE(n,t,r,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[xl]){t[xl]=!0,gw.forEach(function(n){n!=="selectionchange"&&(Nk.has(n)||ph(n,!1,t),ph(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,ph("selectionchange",!1,e))}}function uE(t,e,n,r){switch(qw(e)){case 1:var i=qx;break;case 4:i=Kx;break;default:i=Jp}n=i.bind(null,e,n,t),i=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ai(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Nw(function(){var c=s,h=Gp(n),p=[];e:{var m=aE.get(t);if(m!==void 0){var x=em,P=t;switch(t){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":x=lk;break;case"focusin":P="focus",x=lh;break;case"focusout":P="blur",x=lh;break;case"beforeblur":case"afterblur":x=lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=lv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=dk;break;case rE:case iE:case sE:x=Zx;break;case oE:x=fk;break;case"scroll":x=Gx;break;case"wheel":x=mk;break;case"copy":case"cut":case"paste":x=tk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=cv}var T=(e&4)!==0,R=!T&&t==="scroll",v=T?m!==null?m+"Capture":null:m;T=[];for(var g=c,w;g!==null;){w=g;var N=w.stateNode;if(w.tag===5&&N!==null&&(w=N,v!==null&&(N=Xo(g,v),N!=null&&T.push(ia(g,N,w)))),R)break;g=g.return}0<T.length&&(m=new x(m,P,null,n,h),p.push({event:m,listeners:T}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&n!==pf&&(P=n.relatedTarget||n.fromElement)&&(ai(P)||P[tr]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(P=n.relatedTarget||n.toElement,x=c,P=P?ai(P):null,P!==null&&(R=Ci(P),P!==R||P.tag!==5&&P.tag!==6)&&(P=null)):(x=null,P=c),x!==P)){if(T=lv,N="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(T=cv,N="onPointerLeave",v="onPointerEnter",g="pointer"),R=x==null?m:Qi(x),w=P==null?m:Qi(P),m=new T(N,g+"leave",x,n,h),m.target=R,m.relatedTarget=w,N=null,ai(h)===c&&(T=new T(v,g+"enter",P,n,h),T.target=w,T.relatedTarget=R,N=T),R=N,x&&P)t:{for(T=x,v=P,g=0,w=T;w;w=Ui(w))g++;for(w=0,N=v;N;N=Ui(N))w++;for(;0<g-w;)T=Ui(T),g--;for(;0<w-g;)v=Ui(v),w--;for(;g--;){if(T===v||v!==null&&T===v.alternate)break t;T=Ui(T),v=Ui(v)}T=null}else T=null;x!==null&&Ev(p,m,x,T,!1),P!==null&&R!==null&&Ev(p,R,P,T,!0)}}e:{if(m=c?Qi(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var D=Sk;else if(fv(m))if(Jw)D=xk;else{D=Ik;var L=Tk}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=bk);if(D&&(D=D(t,c))){Xw(p,D,n,h);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&uf(m,"number",m.value)}switch(L=c?Qi(c):window,t){case"focusin":(fv(L)||L.contentEditable==="true")&&(Ki=L,Ef=c,jo=null);break;case"focusout":jo=Ef=Ki=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,vv(p,n,h);break;case"selectionchange":if(Pk)break;case"keydown":case"keyup":vv(p,n,h)}var b;if(nm)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else qi?Qw(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Gw&&n.locale!=="ko"&&(qi||S!=="onCompositionStart"?S==="onCompositionEnd"&&qi&&(b=Kw()):(Tr=h,Zp="value"in Tr?Tr.value:Tr.textContent,qi=!0)),L=Tu(c,S),0<L.length&&(S=new uv(S,t,null,n,h),p.push({event:S,listeners:L}),b?S.data=b:(b=Yw(n),b!==null&&(S.data=b)))),(b=yk?vk(t,n):_k(t,n))&&(c=Tu(c,"onBeforeInput"),0<c.length&&(h=new uv("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=b))}lE(p,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xo(t,n),s!=null&&r.unshift(ia(t,s,i)),s=Xo(t,e),s!=null&&r.push(ia(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ev(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Xo(n,s),u!=null&&o.unshift(ia(n,u,a))):i||(u=Xo(n,s),u!=null&&o.push(ia(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ok=/\r\n?/g,Dk=/\u0000|\uFFFD/g;function Sv(t){return(typeof t=="string"?t:""+t).replace(Ok,`
`).replace(Dk,"")}function kl(t,e,n){if(e=Sv(e),Sv(t)!==e&&n)throw Error(U(425))}function Iu(){}var Tf=null,If=null;function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,Lk=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,Mk=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(Vk)}:xf;function Vk(t){setTimeout(function(){throw t})}function gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ea(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),kn="__reactFiber$"+$s,sa="__reactProps$"+$s,tr="__reactContainer$"+$s,kf="__reactEvents$"+$s,jk="__reactListeners$"+$s,Fk="__reactHandles$"+$s;function ai(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iv(t);t!==null;){if(n=t[kn])return n;t=Iv(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[kn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function _c(t){return t[sa]||null}var Rf=[],Yi=-1;function qr(t){return{current:t}}function ke(t){0>Yi||(t.current=Rf[Yi],Rf[Yi]=null,Yi--)}function Se(t,e){Yi++,Rf[Yi]=t.current,t.current=e}var Ur={},St=qr(Ur),Ut=qr(!1),mi=Ur;function _s(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function bu(){ke(Ut),ke(St)}function bv(t,e,n){if(St.current!==Ur)throw Error(U(168));Se(St,e),Se(Ut,n)}function cE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,Tx(t)||"Unknown",i));return Oe({},n,r)}function xu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,mi=St.current,Se(St,t),Se(Ut,Ut.current),!0}function xv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=cE(t,e,mi),r.__reactInternalMemoizedMergedChildContext=t,ke(Ut),ke(St),Se(St,t)):ke(Ut),Se(Ut,n)}var Wn=null,wc=!1,yh=!1;function dE(t){Wn===null?Wn=[t]:Wn.push(t)}function Uk(t){wc=!0,dE(t)}function Kr(){if(!yh&&Wn!==null){yh=!0;var t=0,e=ye;try{var n=Wn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Wn=null,wc=!1}catch(i){throw Wn!==null&&(Wn=Wn.slice(t+1)),Mw(Qp,Kr),i}finally{ye=e,yh=!1}}return null}var Xi=[],Ji=0,ku=null,Ru=0,tn=[],nn=0,gi=null,qn=1,Kn="";function ii(t,e){Xi[Ji++]=Ru,Xi[Ji++]=ku,ku=t,Ru=e}function hE(t,e,n){tn[nn++]=qn,tn[nn++]=Kn,tn[nn++]=gi,gi=t;var r=qn;t=Kn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qn=1<<32-yn(e)+i|n<<i|r,Kn=s+t}else qn=1<<s|n<<i|r,Kn=t}function im(t){t.return!==null&&(ii(t,1),hE(t,1,0))}function sm(t){for(;t===ku;)ku=Xi[--Ji],Xi[Ji]=null,Ru=Xi[--Ji],Xi[Ji]=null;for(;t===gi;)gi=tn[--nn],tn[nn]=null,Kn=tn[--nn],tn[nn]=null,qn=tn[--nn],tn[nn]=null}var Qt=null,qt=null,Pe=!1,gn=null;function fE(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,qt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gi!==null?{id:qn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,qt=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cf(t){if(Pe){var e=qt;if(e){var n=e;if(!kv(t,e)){if(Pf(t))throw Error(U(418));e=Cr(n.nextSibling);var r=Qt;e&&kv(t,e)?fE(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Qt=t)}}else{if(Pf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,Qt=t}}}function Rv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function Rl(t){if(t!==Qt)return!1;if(!Pe)return Rv(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bf(t.type,t.memoizedProps)),e&&(e=qt)){if(Pf(t))throw pE(),Error(U(418));for(;e;)fE(t,e),e=Cr(e.nextSibling)}if(Rv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qt=null}}else qt=Qt?Cr(t.stateNode.nextSibling):null;return!0}function pE(){for(var t=qt;t;)t=Cr(t.nextSibling)}function ws(){qt=Qt=null,Pe=!1}function om(t){gn===null?gn=[t]:gn.push(t)}var $k=ar.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Pl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pv(t){var e=t._init;return e(t._payload)}function mE(t){function e(v,g){if(t){var w=v.deletions;w===null?(v.deletions=[g],v.flags|=16):w.push(g)}}function n(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=Dr(v,g),v.index=0,v.sibling=null,v}function s(v,g,w){return v.index=w,t?(w=v.alternate,w!==null?(w=w.index,w<g?(v.flags|=2,g):w):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,g,w,N){return g===null||g.tag!==6?(g=Ih(w,v.mode,N),g.return=v,g):(g=i(g,w),g.return=v,g)}function u(v,g,w,N){var D=w.type;return D===Wi?h(v,g,w.props.children,N,w.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===fr&&Pv(D)===g.type)?(N=i(g,w.props),N.ref=vo(v,g,w),N.return=v,N):(N=nu(w.type,w.key,w.props,null,v.mode,N),N.ref=vo(v,g,w),N.return=v,N)}function c(v,g,w,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=bh(w,v.mode,N),g.return=v,g):(g=i(g,w.children||[]),g.return=v,g)}function h(v,g,w,N,D){return g===null||g.tag!==7?(g=hi(w,v.mode,N,D),g.return=v,g):(g=i(g,w),g.return=v,g)}function p(v,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ih(""+g,v.mode,w),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vl:return w=nu(g.type,g.key,g.props,null,v.mode,w),w.ref=vo(v,null,g),w.return=v,w;case Hi:return g=bh(g,v.mode,w),g.return=v,g;case fr:var N=g._init;return p(v,N(g._payload),w)}if(bo(g)||fo(g))return g=hi(g,v.mode,w,null),g.return=v,g;Pl(v,g)}return null}function m(v,g,w,N){var D=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return D!==null?null:a(v,g,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vl:return w.key===D?u(v,g,w,N):null;case Hi:return w.key===D?c(v,g,w,N):null;case fr:return D=w._init,m(v,g,D(w._payload),N)}if(bo(w)||fo(w))return D!==null?null:h(v,g,w,N,null);Pl(v,w)}return null}function x(v,g,w,N,D){if(typeof N=="string"&&N!==""||typeof N=="number")return v=v.get(w)||null,a(g,v,""+N,D);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case vl:return v=v.get(N.key===null?w:N.key)||null,u(g,v,N,D);case Hi:return v=v.get(N.key===null?w:N.key)||null,c(g,v,N,D);case fr:var L=N._init;return x(v,g,w,L(N._payload),D)}if(bo(N)||fo(N))return v=v.get(w)||null,h(g,v,N,D,null);Pl(g,N)}return null}function P(v,g,w,N){for(var D=null,L=null,b=g,S=g=0,E=null;b!==null&&S<w.length;S++){b.index>S?(E=b,b=null):E=b.sibling;var I=m(v,b,w[S],N);if(I===null){b===null&&(b=E);break}t&&b&&I.alternate===null&&e(v,b),g=s(I,g,S),L===null?D=I:L.sibling=I,L=I,b=E}if(S===w.length)return n(v,b),Pe&&ii(v,S),D;if(b===null){for(;S<w.length;S++)b=p(v,w[S],N),b!==null&&(g=s(b,g,S),L===null?D=b:L.sibling=b,L=b);return Pe&&ii(v,S),D}for(b=r(v,b);S<w.length;S++)E=x(b,v,S,w[S],N),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?S:E.key),g=s(E,g,S),L===null?D=E:L.sibling=E,L=E);return t&&b.forEach(function(C){return e(v,C)}),Pe&&ii(v,S),D}function T(v,g,w,N){var D=fo(w);if(typeof D!="function")throw Error(U(150));if(w=D.call(w),w==null)throw Error(U(151));for(var L=D=null,b=g,S=g=0,E=null,I=w.next();b!==null&&!I.done;S++,I=w.next()){b.index>S?(E=b,b=null):E=b.sibling;var C=m(v,b,I.value,N);if(C===null){b===null&&(b=E);break}t&&b&&C.alternate===null&&e(v,b),g=s(C,g,S),L===null?D=C:L.sibling=C,L=C,b=E}if(I.done)return n(v,b),Pe&&ii(v,S),D;if(b===null){for(;!I.done;S++,I=w.next())I=p(v,I.value,N),I!==null&&(g=s(I,g,S),L===null?D=I:L.sibling=I,L=I);return Pe&&ii(v,S),D}for(b=r(v,b);!I.done;S++,I=w.next())I=x(b,v,S,I.value,N),I!==null&&(t&&I.alternate!==null&&b.delete(I.key===null?S:I.key),g=s(I,g,S),L===null?D=I:L.sibling=I,L=I);return t&&b.forEach(function(A){return e(v,A)}),Pe&&ii(v,S),D}function R(v,g,w,N){if(typeof w=="object"&&w!==null&&w.type===Wi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case vl:e:{for(var D=w.key,L=g;L!==null;){if(L.key===D){if(D=w.type,D===Wi){if(L.tag===7){n(v,L.sibling),g=i(L,w.props.children),g.return=v,v=g;break e}}else if(L.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===fr&&Pv(D)===L.type){n(v,L.sibling),g=i(L,w.props),g.ref=vo(v,L,w),g.return=v,v=g;break e}n(v,L);break}else e(v,L);L=L.sibling}w.type===Wi?(g=hi(w.props.children,v.mode,N,w.key),g.return=v,v=g):(N=nu(w.type,w.key,w.props,null,v.mode,N),N.ref=vo(v,g,w),N.return=v,v=N)}return o(v);case Hi:e:{for(L=w.key;g!==null;){if(g.key===L)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(v,g.sibling),g=i(g,w.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else e(v,g);g=g.sibling}g=bh(w,v.mode,N),g.return=v,v=g}return o(v);case fr:return L=w._init,R(v,g,L(w._payload),N)}if(bo(w))return P(v,g,w,N);if(fo(w))return T(v,g,w,N);Pl(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,w),g.return=v,v=g):(n(v,g),g=Ih(w,v.mode,N),g.return=v,v=g),o(v)):n(v,g)}return R}var Es=mE(!0),gE=mE(!1),Pu=qr(null),Cu=null,Zi=null,am=null;function lm(){am=Zi=Cu=null}function um(t){var e=Pu.current;ke(Pu),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){Cu=t,am=Zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(am!==t)if(t={context:t,memoizedValue:e,next:null},Zi===null){if(Cu===null)throw Error(U(308));Zi=t,Cu.dependencies={lanes:0,firstContext:t}}else Zi=Zi.next=t;return e}var li=null;function cm(t){li===null?li=[t]:li.push(t)}function yE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cm(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function dm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,cm(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yp(t,n)}}function Cv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Au(t,e,n,r){var i=t.updateQueue;pr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,x=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=t,T=a;switch(m=e,x=n,T.tag){case 1:if(P=T.payload,typeof P=="function"){p=P.call(x,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=T.payload,m=typeof P=="function"?P.call(x,p,m):P,m==null)break e;p=Oe({},p,m);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,u=p):h=h.next=x,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vi|=o,t.lanes=o,t.memoizedState=p}}function Av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Da={},An=qr(Da),oa=qr(Da),aa=qr(Da);function ui(t){if(t===Da)throw Error(U(174));return t}function hm(t,e){switch(Se(aa,e),Se(oa,t),Se(An,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}ke(An),Se(An,e)}function Ss(){ke(An),ke(oa),ke(aa)}function _E(t){ui(aa.current);var e=ui(An.current),n=df(e,t.type);e!==n&&(Se(oa,t),Se(An,n))}function fm(t){oa.current===t&&(ke(An),ke(oa))}var Ae=qr(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vh=[];function pm(){for(var t=0;t<vh.length;t++)vh[t]._workInProgressVersionPrimary=null;vh.length=0}var Xl=ar.ReactCurrentDispatcher,_h=ar.ReactCurrentBatchConfig,yi=0,Ne=null,Ye=null,et=null,Ou=!1,Fo=!1,la=0,zk=0;function mt(){throw Error(U(321))}function mm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function gm(t,e,n,r,i,s){if(yi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?qk:Kk,t=n(r,i),Fo){s=0;do{if(Fo=!1,la=0,25<=s)throw Error(U(301));s+=1,et=Ye=null,e.updateQueue=null,Xl.current=Gk,t=n(r,i)}while(Fo)}if(Xl.current=Du,e=Ye!==null&&Ye.next!==null,yi=0,et=Ye=Ne=null,Ou=!1,e)throw Error(U(300));return t}function ym(){var t=la!==0;return la=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ne.memoizedState=et=t:et=et.next=t,et}function ln(){if(Ye===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=et===null?Ne.memoizedState:et.next;if(e!==null)et=e,Ye=t;else{if(t===null)throw Error(U(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Ne.memoizedState=et=t:et=et.next=t}return et}function ua(t,e){return typeof e=="function"?e(t):e}function wh(t){var e=ln(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((yi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Ne.lanes|=h,vi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,_n(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eh(t){var e=ln(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wE(){}function EE(t,e){var n=Ne,r=ln(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,vm(IE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,ca(9,TE.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(U(349));yi&30||SE(n,e,i)}return i}function SE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TE(t,e,n,r){e.value=n,e.getSnapshot=r,bE(e)&&xE(t)}function IE(t,e,n){return n(function(){bE(e)&&xE(t)})}function bE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function xE(t){var e=nr(t,1);e!==null&&vn(e,t,1,-1)}function Nv(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=Wk.bind(null,Ne,t),[e.memoizedState,t]}function ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kE(){return ln().memoizedState}function Jl(t,e,n,r){var i=In();Ne.flags|=t,i.memoizedState=ca(1|e,n,void 0,r===void 0?null:r)}function Ec(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&mm(r,o.deps)){i.memoizedState=ca(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ca(1|e,n,s,r)}function Ov(t,e){return Jl(8390656,8,t,e)}function vm(t,e){return Ec(2048,8,t,e)}function RE(t,e){return Ec(4,2,t,e)}function PE(t,e){return Ec(4,4,t,e)}function CE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function AE(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,CE.bind(null,e,t),n)}function _m(){}function NE(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function OE(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function DE(t,e,n){return yi&21?(_n(n,e)||(n=Fw(),Ne.lanes|=n,vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function Bk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=_h.transition;_h.transition={};try{t(!1),e()}finally{ye=n,_h.transition=r}}function LE(){return ln().memoizedState}function Hk(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ME(t))VE(e,n);else if(n=yE(t,e,n,r),n!==null){var i=Nt();vn(n,t,r,i),jE(n,e,r)}}function Wk(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ME(t))VE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var u=e.interleaved;u===null?(i.next=i,cm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=yE(t,e,i,r),n!==null&&(i=Nt(),vn(n,t,r,i),jE(n,e,r))}}function ME(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function VE(t,e){Fo=Ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yp(t,n)}}var Du={readContext:an,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},qk={readContext:an,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:Ov,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,CE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Hk.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:Nv,useDebugValue:_m,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=Nv(!1),e=t[0];return t=Bk.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=In();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),tt===null)throw Error(U(349));yi&30||SE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ov(IE.bind(null,r,s,t),[t]),r.flags|=2048,ca(9,TE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=tt.identifierPrefix;if(Pe){var n=Kn,r=qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Kk={readContext:an,useCallback:NE,useContext:an,useEffect:vm,useImperativeHandle:AE,useInsertionEffect:RE,useLayoutEffect:PE,useMemo:OE,useReducer:wh,useRef:kE,useState:function(){return wh(ua)},useDebugValue:_m,useDeferredValue:function(t){var e=ln();return DE(e,Ye.memoizedState,t)},useTransition:function(){var t=wh(ua)[0],e=ln().memoizedState;return[t,e]},useMutableSource:wE,useSyncExternalStore:EE,useId:LE,unstable_isNewReconciler:!1},Gk={readContext:an,useCallback:NE,useContext:an,useEffect:vm,useImperativeHandle:AE,useInsertionEffect:RE,useLayoutEffect:PE,useMemo:OE,useReducer:Eh,useRef:kE,useState:function(){return Eh(ua)},useDebugValue:_m,useDeferredValue:function(t){var e=ln();return Ye===null?e.memoizedState=t:DE(e,Ye.memoizedState,t)},useTransition:function(){var t=Eh(ua)[0],e=ln().memoizedState;return[t,e]},useMutableSource:wE,useSyncExternalStore:EE,useId:LE,unstable_isNewReconciler:!1};function pn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Or(t),s=Xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(vn(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=Or(t),s=Xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(vn(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=Or(t),i=Xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(vn(e,t,r,n),Yl(e,t,r))}};function Dv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,r)||!na(i,s):!0}function FE(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=$t(e)?mi:St.current,r=e.contextTypes,s=(r=r!=null)?_s(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},dm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=$t(e)?mi:St.current,i.context=_s(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Au(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",r=e;do n+=Sx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qk=typeof WeakMap=="function"?WeakMap:Map;function UE(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mu||(Mu=!0,Hf=r),Df(t,e)},n}function $E(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Qk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uR.bind(null,t,e,n),e.then(t,t))}function Vv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var Yk=ar.ReactCurrentOwner,Ft=!1;function Ct(t,e,n,r){e.child=t===null?gE(e,null,n,r):Es(e,t.child,n,r)}function Fv(t,e,n,r,i){n=n.render;var s=e.ref;return as(e,i),r=gm(t,e,n,r,s,i),n=ym(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Pe&&n&&im(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Uv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!km(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zE(t,e,s,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function zE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(na(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,rr(t,e,i)}return Lf(t,e,n,r,i)}function BE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ts,Wt),Wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(ts,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(ts,Wt),Wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(ts,Wt),Wt|=r;return Ct(t,e,i,n),e.child}function HE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,r,i){var s=$t(n)?mi:St.current;return s=_s(e,s),as(e,i),n=gm(t,e,n,r,s,i),r=ym(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Pe&&r&&im(e),e.flags|=1,Ct(t,e,n,i),e.child)}function $v(t,e,n,r,i){if($t(n)){var s=!0;xu(e)}else s=!1;if(as(e,i),e.stateNode===null)Zl(t,e),FE(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=an(c):(c=$t(n)?mi:St.current,c=_s(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Lv(e,o,r,c),pr=!1;var m=e.memoizedState;o.state=m,Au(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ut.current||pr?(typeof h=="function"&&(Nf(e,n,h,r),u=e.memoizedState),(a=pr||Dv(e,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pn(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=$t(n)?mi:St.current,u=_s(e,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&Lv(e,o,r,u),pr=!1,m=e.memoizedState,o.state=m,Au(e,r,o,i);var P=e.memoizedState;a!==p||m!==P||Ut.current||pr?(typeof x=="function"&&(Nf(e,n,x,r),P=e.memoizedState),(c=pr||Dv(e,n,c,r,m,P,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Mf(t,e,n,r,s,i)}function Mf(t,e,n,r,i,s){HE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xv(e,n,!1),rr(t,e,s);r=e.stateNode,Yk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&xv(e,n,!0),e.child}function WE(t){var e=t.stateNode;e.pendingContext?bv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bv(t,e.context,!1),hm(t,e.containerInfo)}function zv(t,e,n,r,i){return ws(),om(i),e.flags|=256,Ct(t,e,n,r),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function qE(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Ae,i&1),t===null)return Cf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jf(n),e.memoizedState=Vf,t):wm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wm(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&om(r),Es(e,t.child,null,n),t=wm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sh(Error(U(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Es(e,t.child,null,o),e.child.memoizedState=jf(o),e.memoizedState=Vf,s);if(!(e.mode&1))return Cl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(U(419)),r=Sh(s,r,void 0),Cl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),vn(r,t,i,-1))}return xm(),r=Sh(Error(U(421))),Cl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qt=Cr(i.nextSibling),Qt=e,Pe=!0,gn=null,t!==null&&(tn[nn++]=qn,tn[nn++]=Kn,tn[nn++]=gi,qn=t.id,Kn=t.overflow,gi=e),e=wm(e,r.children),e.flags|=4096,e)}function Bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Af(t.return,e,n)}function Th(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function KE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bv(t,n,e);else if(t.tag===19)Bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Th(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Th(e,!0,n,null,s);break;case"together":Th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jk(t,e,n){switch(e.tag){case 3:WE(e),ws();break;case 5:_E(e);break;case 1:$t(e.type)&&xu(e);break;case 4:hm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Pu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?qE(t,e,n):(Se(Ae,Ae.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Se(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return KE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,BE(t,e,n)}return rr(t,e,n)}var GE,Ff,QE,YE;GE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};QE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(An.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=cf(t,i),r=cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Iu)}hf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&be("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};YE=function(t,e,n,r){n!==r&&(e.flags|=4)};function _o(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zk(t,e,n){var r=e.pendingProps;switch(sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return $t(e.type)&&bu(),gt(e),null;case 3:return r=e.stateNode,Ss(),ke(Ut),ke(St),pm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(Kf(gn),gn=null))),Ff(t,e),gt(e),null;case 5:fm(e);var i=ui(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)QE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return gt(e),null}if(t=ui(An.current),Rl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[sa]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<ko.length;i++)be(ko[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Jy(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":ev(r,s),be("invalid",r)}hf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&kl(r.textContent,a,t),i=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":_l(r),Zy(r,s,!0);break;case"textarea":_l(r),tv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Iu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[sa]=r,GE(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<ko.length;i++)be(ko[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":Jy(t,r),i=af(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),be("invalid",t);break;case"textarea":ev(t,r),i=cf(t,r),be("invalid",t);break;default:i=r}hf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?kw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yo(t,u):typeof u=="number"&&Yo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&be("scroll",t):u!=null&&Hp(t,s,u,o))}switch(n){case"input":_l(t),Zy(t,r,!1);break;case"textarea":_l(t),tv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?rs(t,!!r.multiple,s,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Iu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)YE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ui(aa.current),ui(An.current),Rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return gt(e),null;case 13:if(ke(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&qt!==null&&e.mode&1&&!(e.flags&128))pE(),ws(),e.flags|=98560,s=!1;else if(s=Rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[kn]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gt(e),s=!1}else gn!==null&&(Kf(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Xe===0&&(Xe=3):xm())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return Ss(),Ff(t,e),t===null&&ra(e.stateNode.containerInfo),gt(e),null;case 10:return um(e.type._context),gt(e),null;case 17:return $t(e.type)&&bu(),gt(e),null;case 19:if(ke(Ae),s=e.memoizedState,s===null)return gt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_o(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,_o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Is&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return gt(e),null}else 2*Ue()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,r=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Ae.current,Se(Ae,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return bm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function eR(t,e){switch(sm(e),e.tag){case 1:return $t(e.type)&&bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),ke(Ut),ke(St),pm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fm(e),null;case 13:if(ke(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ae),null;case 4:return Ss(),null;case 10:return um(e.type._context),null;case 22:case 23:return bm(),null;case 24:return null;default:return null}}var Al=!1,wt=!1,tR=typeof WeakSet=="function"?WeakSet:Set,W=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Uf(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var Hv=!1;function nR(t,e){if(Tf=Eu,t=tE(),rm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=t,m=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},Eu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var T=P.memoizedProps,R=P.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?T:pn(e.type,T),R);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(N){Ve(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=Hv,Hv=!1,P}function Uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uf(e,n,s)}i=i.next}while(i!==r)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function XE(t){var e=t.alternate;e!==null&&(t.alternate=null,XE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[sa],delete e[kf],delete e[jk],delete e[Fk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function JE(t){return t.tag===5||t.tag===3||t.tag===4}function Wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||JE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Iu));else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var it=null,mn=!1;function dr(t,e,n){for(n=n.child;n!==null;)ZE(t,e,n),n=n.sibling}function ZE(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:wt||es(n,e);case 6:var r=it,i=mn;it=null,dr(t,e,n),it=r,mn=i,it!==null&&(mn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(mn?(t=it,n=n.stateNode,t.nodeType===8?gh(t.parentNode,n):t.nodeType===1&&gh(t,n),ea(t)):gh(it,n.stateNode));break;case 4:r=it,i=mn,it=n.stateNode.containerInfo,mn=!0,dr(t,e,n),it=r,mn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!wt&&(es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,dr(t,e,n),wt=r):dr(t,e,n);break;default:dr(t,e,n)}}function qv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tR),e.forEach(function(r){var i=dR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,mn=!1;break e;case 3:it=a.stateNode.containerInfo,mn=!0;break e;case 4:it=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(it===null)throw Error(U(160));ZE(s,o,i),it=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e1(e,t),e=e.sibling}function e1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Tn(t),r&4){try{Uo(3,t,t.return),Tc(3,t)}catch(T){Ve(t,t.return,T)}try{Uo(5,t,t.return)}catch(T){Ve(t,t.return,T)}}break;case 1:hn(e,t),Tn(t),r&512&&n!==null&&es(n,n.return);break;case 5:if(hn(e,t),Tn(t),r&512&&n!==null&&es(n,n.return),t.flags&32){var i=t.stateNode;try{Yo(i,"")}catch(T){Ve(t,t.return,T)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sw(i,s),ff(a,o);var c=ff(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?kw(i,p):h==="dangerouslySetInnerHTML"?bw(i,p):h==="children"?Yo(i,p):Hp(i,h,p,c)}switch(a){case"input":lf(i,s);break;case"textarea":Tw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?rs(i,!!s.multiple,x,!1):m!==!!s.multiple&&(s.defaultValue!=null?rs(i,!!s.multiple,s.defaultValue,!0):rs(i,!!s.multiple,s.multiple?[]:"",!1))}i[sa]=s}catch(T){Ve(t,t.return,T)}}break;case 6:if(hn(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(T){Ve(t,t.return,T)}}break;case 3:if(hn(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(T){Ve(t,t.return,T)}break;case 4:hn(e,t),Tn(t);break;case 13:hn(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tm=Ue())),r&4&&qv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||h,hn(e,t),wt=c):hn(e,t),Tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(p=W=h;W!==null;){switch(m=W,x=m.child,m.tag){case 0:case 11:case 14:case 15:Uo(4,m,m.return);break;case 1:es(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(T){Ve(r,n,T)}}break;case 5:es(m,m.return);break;case 22:if(m.memoizedState!==null){Gv(p);continue}}x!==null?(x.return=m,W=x):Gv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=xw("display",o))}catch(T){Ve(t,t.return,T)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(T){Ve(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hn(e,t),Tn(t),r&4&&qv(t);break;case 21:break;default:hn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(JE(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yo(i,""),r.flags&=-33);var s=Wv(t);Bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wv(t);zf(t,a,o);break;default:throw Error(U(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rR(t,e,n){W=t,t1(t)}function t1(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Al;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||wt;a=Al;var c=wt;if(Al=o,(wt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Qv(i):u!==null?(u.return=o,W=u):Qv(i);for(;s!==null;)W=s,t1(s),s=s.sibling;W=i,Al=a,wt=c}Kv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Kv(t)}}function Kv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Av(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ea(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}wt||e.flags&512&&$f(e)}catch(m){Ve(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Gv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Qv(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{$f(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{$f(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var iR=Math.ceil,Lu=ar.ReactCurrentDispatcher,Em=ar.ReactCurrentOwner,sn=ar.ReactCurrentBatchConfig,ue=0,tt=null,qe=null,lt=0,Wt=0,ts=qr(0),Xe=0,da=null,vi=0,Ic=0,Sm=0,$o=null,Vt=null,Tm=0,Is=1/0,Hn=null,Mu=!1,Hf=null,Nr=null,Nl=!1,Ir=null,Vu=0,zo=0,Wf=null,eu=-1,tu=0;function Nt(){return ue&6?Ue():eu!==-1?eu:eu=Ue()}function Or(t){return t.mode&1?ue&2&&lt!==0?lt&-lt:$k.transition!==null?(tu===0&&(tu=Fw()),tu):(t=ye,t!==0||(t=window.event,t=t===void 0?16:qw(t.type)),t):1}function vn(t,e,n,r){if(50<zo)throw zo=0,Wf=null,Error(U(185));Aa(t,n,r),(!(ue&2)||t!==tt)&&(t===tt&&(!(ue&2)&&(Ic|=n),Xe===4&&yr(t,lt)),zt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Is=Ue()+500,wc&&Kr()))}function zt(t,e){var n=t.callbackNode;$x(t,e);var r=wu(t,t===tt?lt:0);if(r===0)n!==null&&iv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iv(n),e===1)t.tag===0?Uk(Yv.bind(null,t)):dE(Yv.bind(null,t)),Mk(function(){!(ue&6)&&Kr()}),n=null;else{switch(Uw(r)){case 1:n=Qp;break;case 4:n=Vw;break;case 16:n=_u;break;case 536870912:n=jw;break;default:n=_u}n=u1(n,n1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n1(t,e){if(eu=-1,tu=0,ue&6)throw Error(U(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=wu(t,t===tt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ju(t,r);else{e=r;var i=ue;ue|=2;var s=i1();(tt!==t||lt!==e)&&(Hn=null,Is=Ue()+500,di(t,e));do try{aR();break}catch(a){r1(t,a)}while(!0);lm(),Lu.current=s,ue=i,qe!==null?e=0:(tt=null,lt=0,e=Xe)}if(e!==0){if(e===2&&(i=vf(t),i!==0&&(r=i,e=qf(t,i))),e===1)throw n=da,di(t,0),yr(t,r),zt(t,Ue()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!sR(i)&&(e=ju(t,r),e===2&&(s=vf(t),s!==0&&(r=s,e=qf(t,s))),e===1))throw n=da,di(t,0),yr(t,r),zt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:si(t,Vt,Hn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=Tm+500-Ue(),10<e)){if(wu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xf(si.bind(null,t,Vt,Hn),e);break}si(t,Vt,Hn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iR(r/1960))-r,10<r){t.timeoutHandle=xf(si.bind(null,t,Vt,Hn),r);break}si(t,Vt,Hn);break;case 5:si(t,Vt,Hn);break;default:throw Error(U(329))}}}return zt(t,Ue()),t.callbackNode===n?n1.bind(null,t):null}function qf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=ju(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Kf(e)),t}function Kf(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function sR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Sm,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function Yv(t){if(ue&6)throw Error(U(327));ls();var e=wu(t,0);if(!(e&1))return zt(t,Ue()),null;var n=ju(t,e);if(t.tag!==0&&n===2){var r=vf(t);r!==0&&(e=r,n=qf(t,r))}if(n===1)throw n=da,di(t,0),yr(t,e),zt(t,Ue()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,Vt,Hn),zt(t,Ue()),null}function Im(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Is=Ue()+500,wc&&Kr())}}function _i(t){Ir!==null&&Ir.tag===0&&!(ue&6)&&ls();var e=ue;ue|=1;var n=sn.transition,r=ye;try{if(sn.transition=null,ye=1,t)return t()}finally{ye=r,sn.transition=n,ue=e,!(ue&6)&&Kr()}}function bm(){Wt=ts.current,ke(ts)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lk(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(sm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bu();break;case 3:Ss(),ke(Ut),ke(St),pm();break;case 5:fm(r);break;case 4:Ss();break;case 13:ke(Ae);break;case 19:ke(Ae);break;case 10:um(r.type._context);break;case 22:case 23:bm()}n=n.return}if(tt=t,qe=t=Dr(t.current,null),lt=Wt=e,Xe=0,da=null,Sm=Ic=vi=0,Vt=$o=null,li!==null){for(e=0;e<li.length;e++)if(n=li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return t}function r1(t,e){do{var n=qe;try{if(lm(),Xl.current=Du,Ou){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ou=!1}if(yi=0,et=Ye=Ne=null,Fo=!1,la=0,Em.current=null,n===null||n.return===null){Xe=1,da=e,qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Vv(o);if(x!==null){x.flags&=-257,jv(x,o,a,s,e),x.mode&1&&Mv(s,c,e),e=x,u=c;var P=e.updateQueue;if(P===null){var T=new Set;T.add(u),e.updateQueue=T}else P.add(u);break e}else{if(!(e&1)){Mv(s,c,e),xm();break e}u=Error(U(426))}}else if(Pe&&a.mode&1){var R=Vv(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),jv(R,o,a,s,e),om(Ts(u,a));break e}}s=u=Ts(u,a),Xe!==4&&(Xe=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=UE(s,u,e);Cv(s,v);break e;case 1:a=u;var g=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Nr===null||!Nr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=$E(s,a,e);Cv(s,N);break e}}s=s.return}while(s!==null)}o1(n)}catch(D){e=D,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function i1(){var t=Lu.current;return Lu.current=Du,t===null?Du:t}function xm(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(vi&268435455)&&!(Ic&268435455)||yr(tt,lt)}function ju(t,e){var n=ue;ue|=2;var r=i1();(tt!==t||lt!==e)&&(Hn=null,di(t,e));do try{oR();break}catch(i){r1(t,i)}while(!0);if(lm(),ue=n,Lu.current=r,qe!==null)throw Error(U(261));return tt=null,lt=0,Xe}function oR(){for(;qe!==null;)s1(qe)}function aR(){for(;qe!==null&&!Nx();)s1(qe)}function s1(t){var e=l1(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?o1(t):qe=e,Em.current=null}function o1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eR(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,qe=null;return}}else if(n=Zk(n,e,Wt),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Xe===0&&(Xe=5)}function si(t,e,n){var r=ye,i=sn.transition;try{sn.transition=null,ye=1,lR(t,e,n,r)}finally{sn.transition=i,ye=r}return null}function lR(t,e,n,r){do ls();while(Ir!==null);if(ue&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zx(t,s),t===tt&&(qe=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,u1(_u,function(){return ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=ye;ye=1;var a=ue;ue|=4,Em.current=null,nR(t,n),e1(n,t),Rk(If),Eu=!!Tf,If=Tf=null,t.current=n,rR(n),Ox(),ue=a,ye=o,sn.transition=s}else t.current=n;if(Nl&&(Nl=!1,Ir=t,Vu=i),s=t.pendingLanes,s===0&&(Nr=null),Mx(n.stateNode),zt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mu)throw Mu=!1,t=Hf,Hf=null,t;return Vu&1&&t.tag!==0&&ls(),s=t.pendingLanes,s&1?t===Wf?zo++:(zo=0,Wf=t):zo=0,Kr(),null}function ls(){if(Ir!==null){var t=Uw(Vu),e=sn.transition,n=ye;try{if(sn.transition=null,ye=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,Vu=0,ue&6)throw Error(U(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:Uo(8,h,s)}var p=h.child;if(p!==null)p.return=h,W=p;else for(;W!==null;){h=W;var m=h.sibling,x=h.return;if(XE(h),h===c){W=null;break}if(m!==null){m.return=x,W=m;break}W=x}}}var P=s.alternate;if(P!==null){var T=P.child;if(T!==null){P.child=null;do{var R=T.sibling;T.sibling=null,T=R}while(T!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var g=t.current;for(W=g;W!==null;){o=W;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,W=w;else e:for(o=g;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(D){Ve(a,a.return,D)}if(a===o){W=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,W=N;break e}W=a.return}}if(ue=i,Kr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(mc,t)}catch{}r=!0}return r}finally{ye=n,sn.transition=e}}return!1}function Xv(t,e,n){e=Ts(n,e),e=UE(t,e,1),t=Ar(t,e,1),e=Nt(),t!==null&&(Aa(t,1,e),zt(t,e))}function Ve(t,e,n){if(t.tag===3)Xv(t,t,n);else for(;e!==null;){if(e.tag===3){Xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Ts(n,t),t=$E(e,t,1),e=Ar(e,t,1),t=Nt(),e!==null&&(Aa(e,1,t),zt(e,t));break}}e=e.return}}function uR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(lt&n)===n&&(Xe===4||Xe===3&&(lt&130023424)===lt&&500>Ue()-Tm?di(t,0):Sm|=n),zt(t,e)}function a1(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=Nt();t=nr(t,e),t!==null&&(Aa(t,e,n),zt(t,n))}function cR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a1(t,n)}function dR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),a1(t,n)}var l1;l1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,Jk(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,Pe&&e.flags&1048576&&hE(e,Ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zl(t,e),t=e.pendingProps;var i=_s(e,St.current);as(e,n),i=gm(null,e,r,t,i,n);var s=ym();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,xu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dm(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=Mf(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&im(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fR(r),t=pn(r,t),i){case 0:e=Lf(null,e,r,t,n);break e;case 1:e=$v(null,e,r,t,n);break e;case 11:e=Fv(null,e,r,t,n);break e;case 14:e=Uv(null,e,r,pn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),$v(t,e,r,i,n);case 3:e:{if(WE(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vE(t,e),Au(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ts(Error(U(423)),e),e=zv(t,e,r,n,i);break e}else if(r!==i){i=Ts(Error(U(424)),e),e=zv(t,e,r,n,i);break e}else for(qt=Cr(e.stateNode.containerInfo.firstChild),Qt=e,Pe=!0,gn=null,n=gE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ws(),r===i){e=rr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return _E(e),t===null&&Cf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bf(r,i)?o=null:s!==null&&bf(r,s)&&(e.flags|=32),HE(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&Cf(e),null;case 13:return qE(t,e,n);case 4:return hm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Es(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Fv(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Pu,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Ut.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Af(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,as(e,n),i=an(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),Uv(t,e,r,i,n);case 15:return zE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Zl(t,e),e.tag=1,$t(r)?(t=!0,xu(e)):t=!1,as(e,n),FE(e,r,i),Of(e,r,i,n),Mf(null,e,r,!0,t,n);case 19:return KE(t,e,n);case 22:return BE(t,e,n)}throw Error(U(156,e.tag))};function u1(t,e){return Mw(t,e)}function hR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new hR(t,e,n,r)}function km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fR(t){if(typeof t=="function")return km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qp)return 11;if(t===Kp)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")km(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wi:return hi(n.children,i,s,e);case Wp:o=8,i|=8;break;case nf:return t=rn(12,n,e,i|2),t.elementType=nf,t.lanes=s,t;case rf:return t=rn(13,n,e,i),t.elementType=rf,t.lanes=s,t;case sf:return t=rn(19,n,e,i),t.elementType=sf,t.lanes=s,t;case _w:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yw:o=10;break e;case vw:o=9;break e;case qp:o=11;break e;case Kp:o=14;break e;case fr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hi(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=rn(22,t,r,e),t.elementType=_w,t.lanes=n,t.stateNode={isHidden:!1},t}function Ih(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function bh(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sh(0),this.expirationTimes=sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rm(t,e,n,r,i,s,o,a,u){return t=new pR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dm(s),t}function mR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function c1(t){if(!t)return Ur;t=t._reactInternals;e:{if(Ci(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if($t(n))return cE(t,n,e)}return e}function d1(t,e,n,r,i,s,o,a,u){return t=Rm(n,r,!0,t,i,s,o,a,u),t.context=c1(null),n=t.current,r=Nt(),i=Or(n),s=Xn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Aa(t,i,r),zt(t,r),t}function xc(t,e,n,r){var i=e.current,s=Nt(),o=Or(i);return n=c1(n),e.context===null?e.context=n:e.pendingContext=n,e=Xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(vn(t,i,o,s),Yl(t,i,o)),o}function Fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pm(t,e){Jv(t,e),(t=t.alternate)&&Jv(t,e)}function gR(){return null}var h1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}kc.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));xc(t,e,null,null)};kc.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_i(function(){xc(null,t,null,null)}),e[tr]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&Ww(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function yR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fu(o);s.call(c)}}var o=d1(e,r,t,0,null,!1,!1,"",Zv);return t._reactRootContainer=o,t[tr]=o.current,ra(t.nodeType===8?t.parentNode:t),_i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fu(u);a.call(c)}}var u=Rm(t,0,!1,null,null,!1,!1,"",Zv);return t._reactRootContainer=u,t[tr]=u.current,ra(t.nodeType===8?t.parentNode:t),_i(function(){xc(e,u,n,r)}),u}function Pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Fu(o);a.call(u)}}xc(e,o,t,i)}else o=yR(n,e,t,i,r);return Fu(o)}$w=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(Yp(e,n|1),zt(e,Ue()),!(ue&6)&&(Is=Ue()+500,Kr()))}break;case 13:_i(function(){var r=nr(t,1);if(r!==null){var i=Nt();vn(r,t,1,i)}}),Pm(t,1)}};Xp=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=Nt();vn(e,t,134217728,n)}Pm(t,134217728)}};zw=function(t){if(t.tag===13){var e=Or(t),n=nr(t,e);if(n!==null){var r=Nt();vn(n,t,e,r)}Pm(t,e)}};Bw=function(){return ye};Hw=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error(U(90));Ew(r),lf(r,i)}}}break;case"textarea":Tw(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};Cw=Im;Aw=_i;var vR={usingClientEntryPoint:!1,Events:[Oa,Qi,_c,Rw,Pw,Im]},wo={findFiberByHostInstance:ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_R={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dw(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||gR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{mc=Ol.inject(_R),Cn=Ol}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(U(200));return mR(t,e,null,n)};Jt.createRoot=function(t,e){if(!Am(t))throw Error(U(299));var n=!1,r="",i=h1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rm(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,ra(t.nodeType===8?t.parentNode:t),new Cm(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Dw(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return _i(t)};Jt.hydrate=function(t,e,n){if(!Rc(e))throw Error(U(200));return Pc(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=d1(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,ra(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kc(e)};Jt.render=function(t,e,n){if(!Rc(e))throw Error(U(200));return Pc(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(U(40));return t._reactRootContainer?(_i(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Jt.unstable_batchedUpdates=Im;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Rc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Pc(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function f1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1)}catch(t){console.error(t)}}f1(),fw.exports=Jt;var wR=fw.exports,e0=wR;ef.createRoot=e0.createRoot,ef.hydrateRoot=e0.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ha.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const t0="popstate";function ER(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Gf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uu(i)}return TR(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function p1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SR(){return Math.random().toString(36).substr(2,8)}function n0(t,e){return{usr:t.state,key:t.key,idx:e}}function Gf(t,e,n,r){return n===void 0&&(n=null),ha({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||r||SR()})}function Uu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=br.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ha({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=br.Pop;let R=h(),v=R==null?null:R-c;c=R,u&&u({action:a,location:T.location,delta:v})}function m(R,v){a=br.Push;let g=Gf(T.location,R,v);c=h()+1;let w=n0(g,c),N=T.createHref(g);try{o.pushState(w,"",N)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(N)}s&&u&&u({action:a,location:T.location,delta:1})}function x(R,v){a=br.Replace;let g=Gf(T.location,R,v);c=h();let w=n0(g,c),N=T.createHref(g);o.replaceState(w,"",N),s&&u&&u({action:a,location:T.location,delta:0})}function P(R){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof R=="string"?R:Uu(R);return g=g.replace(/ $/,"%20"),$e(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let T={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(t0,p),u=R,()=>{i.removeEventListener(t0,p),u=null}},createHref(R){return e(i,R)},createURL:P,encodeLocation(R){let v=P(R);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:x,go(R){return o.go(R)}};return T}var r0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(r0||(r0={}));function IR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zs(e):e,i=Nm(r.pathname||"/",n);if(i==null)return null;let s=m1(t);bR(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=VR(i);o=DR(s[a],u)}return o}function m1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($e(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Lr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),m1(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:NR(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of g1(s.path))i(s,o,u)}),e}function g1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=g1(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function bR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xR=/^:[\w-]+$/,kR=3,RR=2,PR=1,CR=10,AR=-2,i0=t=>t==="*";function NR(t,e){let n=t.split("/"),r=n.length;return n.some(i0)&&(r+=AR),e&&(r+=RR),n.filter(i=>!i0(i)).reduce((i,s)=>i+(xR.test(s)?kR:s===""?PR:CR),r)}function OR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=LR({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let p=a.route;s.push({params:r,pathname:Lr([i,h.pathname]),pathnameBase:$R(Lr([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Lr([i,h.pathnameBase]))}return s}function LR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=MR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:m,isOptional:x}=h;if(m==="*"){let T=a[p]||"";o=s.slice(0,s.length-T.length).replace(/(.)\/+$/,"$1")}const P=a[p];return x&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function MR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),p1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return p1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function jR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:FR(n,e):e,search:zR(r),hash:BR(i)}}function FR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function UR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Om(t,e){let n=UR(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=zs(t):(i=ha({},t),$e(!i.pathname||!i.pathname.includes("?"),xh("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),xh("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),xh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let u=jR(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Lr=t=>t.join("/").replace(/\/\/+/g,"/"),$R=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y1=["post","put","patch","delete"];new Set(y1);const WR=["get",...y1];new Set(WR);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fa.apply(this,arguments)}const Lm=V.createContext(null),qR=V.createContext(null),Gr=V.createContext(null),Cc=V.createContext(null),Qr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),v1=V.createContext(null);function KR(t,e){let{relative:n}=e===void 0?{}:e;Bs()||$e(!1);let{basename:r,navigator:i}=V.useContext(Gr),{hash:s,pathname:o,search:a}=w1(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Lr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Bs(){return V.useContext(Cc)!=null}function Hs(){return Bs()||$e(!1),V.useContext(Cc).location}function _1(t){V.useContext(Gr).static||V.useLayoutEffect(t)}function La(){let{isDataRoute:t}=V.useContext(Qr);return t?oP():GR()}function GR(){Bs()||$e(!1);let t=V.useContext(Lm),{basename:e,future:n,navigator:r}=V.useContext(Gr),{matches:i}=V.useContext(Qr),{pathname:s}=Hs(),o=JSON.stringify(Om(i,n.v7_relativeSplatPath)),a=V.useRef(!1);return _1(()=>{a.current=!0}),V.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=Dm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Lr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function w1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(Gr),{matches:i}=V.useContext(Qr),{pathname:s}=Hs(),o=JSON.stringify(Om(i,r.v7_relativeSplatPath));return V.useMemo(()=>Dm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function QR(t,e){return YR(t,e)}function YR(t,e,n,r){Bs()||$e(!1);let{navigator:i}=V.useContext(Gr),{matches:s}=V.useContext(Qr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Hs(),h;if(e){var p;let R=typeof e=="string"?zs(e):e;u==="/"||(p=R.pathname)!=null&&p.startsWith(u)||$e(!1),h=R}else h=c;let m=h.pathname||"/",x=m;if(u!=="/"){let R=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let P=IR(t,{pathname:x}),T=tP(P&&P.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Lr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Lr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&T?V.createElement(Cc.Provider,{value:{location:fa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:br.Pop}},T):T}function XR(){let t=sP(),e=HR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const JR=V.createElement(XR,null);class ZR extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(Qr.Provider,{value:this.props.routeContext},V.createElement(v1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eP(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(Lm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Qr.Provider,{value:e},r)}function tP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||$e(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:x}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let x,P=!1,T=null,R=null;n&&(x=a&&p.route.id?a[p.route.id]:void 0,T=p.route.errorElement||JR,u&&(c<0&&m===0?(P=!0,R=null):c===m&&(P=!0,R=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),g=()=>{let w;return x?w=T:P?w=R:p.route.Component?w=V.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=h,V.createElement(eP,{match:p,routeContext:{outlet:h,matches:v,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(ZR,{location:n.location,revalidation:n.revalidation,component:T,error:x,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var E1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(E1||{}),$u=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($u||{});function nP(t){let e=V.useContext(Lm);return e||$e(!1),e}function rP(t){let e=V.useContext(qR);return e||$e(!1),e}function iP(t){let e=V.useContext(Qr);return e||$e(!1),e}function S1(t){let e=iP(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function sP(){var t;let e=V.useContext(v1),n=rP($u.UseRouteError),r=S1($u.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oP(){let{router:t}=nP(E1.UseNavigateStable),e=S1($u.UseNavigateStable),n=V.useRef(!1);return _1(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fa({fromRouteId:e},s)))},[t,e])}function aP(t){let{to:e,replace:n,state:r,relative:i}=t;Bs()||$e(!1);let{future:s,static:o}=V.useContext(Gr),{matches:a}=V.useContext(Qr),{pathname:u}=Hs(),c=La(),h=Dm(e,Om(a,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return V.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function fn(t){$e(!1)}function lP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1,future:a}=t;Bs()&&$e(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:fa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=zs(r));let{pathname:h="/",search:p="",hash:m="",state:x=null,key:P="default"}=r,T=V.useMemo(()=>{let R=Nm(h,u);return R==null?null:{location:{pathname:R,search:p,hash:m,state:x,key:P},navigationType:i}},[u,h,p,m,x,P,i]);return T==null?null:V.createElement(Gr.Provider,{value:c},V.createElement(Cc.Provider,{children:n,value:T}))}function uP(t){let{children:e,location:n}=t;return QR(Qf(e),n)}new Promise(()=>{});function Qf(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Qf(r.props.children,s));return}r.type!==fn&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yf(){return Yf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yf.apply(this,arguments)}function cP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hP(t,e){return t.button===0&&(!e||e==="_self")&&!dP(t)}const fP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pP="6";try{window.__reactRouterVersion=pP}catch{}const mP="startTransition",s0=Zh[mP];function gP(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=ER({window:i,v5Compat:!0}));let o=s.current,[a,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=V.useCallback(p=>{c&&s0?s0(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(h),[o,h]),V.createElement(lP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const yP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ee=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,unstable_viewTransition:p}=e,m=cP(e,fP),{basename:x}=V.useContext(Gr),P,T=!1;if(typeof c=="string"&&vP.test(c)&&(P=c,yP))try{let w=new URL(window.location.href),N=c.startsWith("//")?new URL(w.protocol+c):new URL(c),D=Nm(N.pathname,x);N.origin===w.origin&&D!=null?c=D+N.search+N.hash:T=!0}catch{}let R=KR(c,{relative:i}),v=_P(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,unstable_viewTransition:p});function g(w){r&&r(w),w.defaultPrevented||v(w)}return V.createElement("a",Yf({},m,{href:P||R,onClick:T||s?r:g,ref:n,target:u}))});var o0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(o0||(o0={}));var a0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(a0||(a0={}));function _P(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=La(),c=Hs(),h=w1(t,{relative:o});return V.useCallback(p=>{if(hP(p,n)){p.preventDefault();let m=r!==void 0?r:Uu(c)===Uu(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function wP(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function EP(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var SP=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(EP(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=wP(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),vt="-ms-",zu="-moz-",de="-webkit-",T1="comm",Mm="rule",Vm="decl",TP="@import",I1="@keyframes",IP="@layer",bP=Math.abs,Ac=String.fromCharCode,xP=Object.assign;function kP(t,e){return ot(t,0)^45?(((e<<2^ot(t,0))<<2^ot(t,1))<<2^ot(t,2))<<2^ot(t,3):0}function b1(t){return t.trim()}function RP(t,e){return(t=e.exec(t))?t[0]:t}function he(t,e,n){return t.replace(e,n)}function Xf(t,e){return t.indexOf(e)}function ot(t,e){return t.charCodeAt(e)|0}function pa(t,e,n){return t.slice(e,n)}function bn(t){return t.length}function jm(t){return t.length}function Dl(t,e){return e.push(t),t}function PP(t,e){return t.map(e).join("")}var Nc=1,bs=1,x1=0,Bt=0,We=0,Ws="";function Oc(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Nc,column:bs,length:o,return:""}}function Eo(t,e){return xP(Oc("",null,null,"",null,null,0),t,{length:-t.length},e)}function CP(){return We}function AP(){return We=Bt>0?ot(Ws,--Bt):0,bs--,We===10&&(bs=1,Nc--),We}function Yt(){return We=Bt<x1?ot(Ws,Bt++):0,bs++,We===10&&(bs=1,Nc++),We}function Nn(){return ot(Ws,Bt)}function ru(){return Bt}function Ma(t,e){return pa(Ws,t,e)}function ma(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function k1(t){return Nc=bs=1,x1=bn(Ws=t),Bt=0,[]}function R1(t){return Ws="",t}function iu(t){return b1(Ma(Bt-1,Jf(t===91?t+2:t===40?t+1:t)))}function NP(t){for(;(We=Nn())&&We<33;)Yt();return ma(t)>2||ma(We)>3?"":" "}function OP(t,e){for(;--e&&Yt()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Ma(t,ru()+(e<6&&Nn()==32&&Yt()==32))}function Jf(t){for(;Yt();)switch(We){case t:return Bt;case 34:case 39:t!==34&&t!==39&&Jf(We);break;case 40:t===41&&Jf(t);break;case 92:Yt();break}return Bt}function DP(t,e){for(;Yt()&&t+We!==57;)if(t+We===84&&Nn()===47)break;return"/*"+Ma(e,Bt-1)+"*"+Ac(t===47?t:Yt())}function LP(t){for(;!ma(Nn());)Yt();return Ma(t,Bt)}function MP(t){return R1(su("",null,null,null,[""],t=k1(t),0,[0],t))}function su(t,e,n,r,i,s,o,a,u){for(var c=0,h=0,p=o,m=0,x=0,P=0,T=1,R=1,v=1,g=0,w="",N=i,D=s,L=r,b=w;R;)switch(P=g,g=Yt()){case 40:if(P!=108&&ot(b,p-1)==58){Xf(b+=he(iu(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:b+=iu(g);break;case 9:case 10:case 13:case 32:b+=NP(P);break;case 92:b+=OP(ru()-1,7);continue;case 47:switch(Nn()){case 42:case 47:Dl(VP(DP(Yt(),ru()),e,n),u);break;default:b+="/"}break;case 123*T:a[c++]=bn(b)*v;case 125*T:case 59:case 0:switch(g){case 0:case 125:R=0;case 59+h:v==-1&&(b=he(b,/\f/g,"")),x>0&&bn(b)-p&&Dl(x>32?u0(b+";",r,n,p-1):u0(he(b," ","")+";",r,n,p-2),u);break;case 59:b+=";";default:if(Dl(L=l0(b,e,n,c,h,i,a,w,N=[],D=[],p),s),g===123)if(h===0)su(b,e,L,L,N,s,p,a,D);else switch(m===99&&ot(b,3)===110?100:m){case 100:case 108:case 109:case 115:su(t,L,L,r&&Dl(l0(t,L,L,0,0,i,a,w,i,N=[],p),D),i,D,p,a,r?N:D);break;default:su(b,L,L,L,[""],D,0,a,D)}}c=h=x=0,T=v=1,w=b="",p=o;break;case 58:p=1+bn(b),x=P;default:if(T<1){if(g==123)--T;else if(g==125&&T++==0&&AP()==125)continue}switch(b+=Ac(g),g*T){case 38:v=h>0?1:(b+="\f",-1);break;case 44:a[c++]=(bn(b)-1)*v,v=1;break;case 64:Nn()===45&&(b+=iu(Yt())),m=Nn(),h=p=bn(w=b+=LP(ru())),g++;break;case 45:P===45&&bn(b)==2&&(T=0)}}return s}function l0(t,e,n,r,i,s,o,a,u,c,h){for(var p=i-1,m=i===0?s:[""],x=jm(m),P=0,T=0,R=0;P<r;++P)for(var v=0,g=pa(t,p+1,p=bP(T=o[P])),w=t;v<x;++v)(w=b1(T>0?m[v]+" "+g:he(g,/&\f/g,m[v])))&&(u[R++]=w);return Oc(t,e,n,i===0?Mm:a,u,c,h)}function VP(t,e,n){return Oc(t,e,n,T1,Ac(CP()),pa(t,2,-2),0)}function u0(t,e,n,r){return Oc(t,e,n,Vm,pa(t,0,r),pa(t,r+1,-1),r)}function us(t,e){for(var n="",r=jm(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function jP(t,e,n,r){switch(t.type){case IP:if(t.children.length)break;case TP:case Vm:return t.return=t.return||t.value;case T1:return"";case I1:return t.return=t.value+"{"+us(t.children,r)+"}";case Mm:t.value=t.props.join(",")}return bn(n=us(t.children,r))?t.return=t.value+"{"+n+"}":""}function FP(t){var e=jm(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function UP(t){return function(e){e.root||(e=e.return)&&t(e)}}function $P(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var zP=function(e,n,r){for(var i=0,s=0;i=s,s=Nn(),i===38&&s===12&&(n[r]=1),!ma(s);)Yt();return Ma(e,Bt)},BP=function(e,n){var r=-1,i=44;do switch(ma(i)){case 0:i===38&&Nn()===12&&(n[r]=1),e[r]+=zP(Bt-1,n,r);break;case 2:e[r]+=iu(i);break;case 4:if(i===44){e[++r]=Nn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Ac(i)}while(i=Yt());return e},HP=function(e,n){return R1(BP(k1(e),n))},c0=new WeakMap,WP=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!c0.get(r))&&!i){c0.set(e,!0);for(var s=[],o=HP(n,s),a=r.props,u=0,c=0;u<o.length;u++)for(var h=0;h<a.length;h++,c++)e.props[c]=s[u]?o[u].replace(/&\f/g,a[h]):a[h]+" "+o[u]}}},qP=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function P1(t,e){switch(kP(t,e)){case 5103:return de+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return de+t+zu+t+vt+t+t;case 6828:case 4268:return de+t+vt+t+t;case 6165:return de+t+vt+"flex-"+t+t;case 5187:return de+t+he(t,/(\w+).+(:[^]+)/,de+"box-$1$2"+vt+"flex-$1$2")+t;case 5443:return de+t+vt+"flex-item-"+he(t,/flex-|-self/,"")+t;case 4675:return de+t+vt+"flex-line-pack"+he(t,/align-content|flex-|-self/,"")+t;case 5548:return de+t+vt+he(t,"shrink","negative")+t;case 5292:return de+t+vt+he(t,"basis","preferred-size")+t;case 6060:return de+"box-"+he(t,"-grow","")+de+t+vt+he(t,"grow","positive")+t;case 4554:return de+he(t,/([^-])(transform)/g,"$1"+de+"$2")+t;case 6187:return he(he(he(t,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),t,"")+t;case 5495:case 3959:return he(t,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return he(he(t,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+t+t;case 4095:case 3583:case 4068:case 2532:return he(t,/(.+)-inline(.+)/,de+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(t)-1-e>6)switch(ot(t,e+1)){case 109:if(ot(t,e+4)!==45)break;case 102:return he(t,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+zu+(ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Xf(t,"stretch")?P1(he(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ot(t,e+1)!==115)break;case 6444:switch(ot(t,bn(t)-3-(~Xf(t,"!important")&&10))){case 107:return he(t,":",":"+de)+t;case 101:return he(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(ot(t,14)===45?"inline-":"")+"box$3$1"+de+"$2$3$1"+vt+"$2box$3")+t}break;case 5936:switch(ot(t,e+11)){case 114:return de+t+vt+he(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return de+t+vt+he(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return de+t+vt+he(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return de+t+vt+t+t}return t}var KP=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Vm:e.return=P1(e.value,e.length);break;case I1:return us([Eo(e,{value:he(e.value,"@","@"+de)})],i);case Mm:if(e.length)return PP(e.props,function(s){switch(RP(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return us([Eo(e,{props:[he(s,/:(read-\w+)/,":"+zu+"$1")]})],i);case"::placeholder":return us([Eo(e,{props:[he(s,/:(plac\w+)/,":"+de+"input-$1")]}),Eo(e,{props:[he(s,/:(plac\w+)/,":"+zu+"$1")]}),Eo(e,{props:[he(s,/:(plac\w+)/,vt+"input-$1")]})],i)}return""})}},GP=[KP],QP=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(T){var R=T.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(T),T.setAttribute("data-s",""))})}var i=e.stylisPlugins||GP,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(T){for(var R=T.getAttribute("data-emotion").split(" "),v=1;v<R.length;v++)s[R[v]]=!0;a.push(T)});var u,c=[WP,qP];{var h,p=[jP,UP(function(T){h.insert(T)})],m=FP(c.concat(i,p)),x=function(R){return us(MP(R),m)};u=function(R,v,g,w){h=g,x(R?R+"{"+v.styles+"}":v.styles),w&&(P.inserted[v.name]=!0)}}var P={key:n,sheet:new SP({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return P.sheet.hydrate(a),P},C1={exports:{}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,Fm=nt?Symbol.for("react.element"):60103,Um=nt?Symbol.for("react.portal"):60106,Dc=nt?Symbol.for("react.fragment"):60107,Lc=nt?Symbol.for("react.strict_mode"):60108,Mc=nt?Symbol.for("react.profiler"):60114,Vc=nt?Symbol.for("react.provider"):60109,jc=nt?Symbol.for("react.context"):60110,$m=nt?Symbol.for("react.async_mode"):60111,Fc=nt?Symbol.for("react.concurrent_mode"):60111,Uc=nt?Symbol.for("react.forward_ref"):60112,$c=nt?Symbol.for("react.suspense"):60113,YP=nt?Symbol.for("react.suspense_list"):60120,zc=nt?Symbol.for("react.memo"):60115,Bc=nt?Symbol.for("react.lazy"):60116,XP=nt?Symbol.for("react.block"):60121,JP=nt?Symbol.for("react.fundamental"):60117,ZP=nt?Symbol.for("react.responder"):60118,eC=nt?Symbol.for("react.scope"):60119;function en(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Fm:switch(t=t.type,t){case $m:case Fc:case Dc:case Mc:case Lc:case $c:return t;default:switch(t=t&&t.$$typeof,t){case jc:case Uc:case Bc:case zc:case Vc:return t;default:return e}}case Um:return e}}}function A1(t){return en(t)===Fc}ve.AsyncMode=$m;ve.ConcurrentMode=Fc;ve.ContextConsumer=jc;ve.ContextProvider=Vc;ve.Element=Fm;ve.ForwardRef=Uc;ve.Fragment=Dc;ve.Lazy=Bc;ve.Memo=zc;ve.Portal=Um;ve.Profiler=Mc;ve.StrictMode=Lc;ve.Suspense=$c;ve.isAsyncMode=function(t){return A1(t)||en(t)===$m};ve.isConcurrentMode=A1;ve.isContextConsumer=function(t){return en(t)===jc};ve.isContextProvider=function(t){return en(t)===Vc};ve.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fm};ve.isForwardRef=function(t){return en(t)===Uc};ve.isFragment=function(t){return en(t)===Dc};ve.isLazy=function(t){return en(t)===Bc};ve.isMemo=function(t){return en(t)===zc};ve.isPortal=function(t){return en(t)===Um};ve.isProfiler=function(t){return en(t)===Mc};ve.isStrictMode=function(t){return en(t)===Lc};ve.isSuspense=function(t){return en(t)===$c};ve.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Dc||t===Fc||t===Mc||t===Lc||t===$c||t===YP||typeof t=="object"&&t!==null&&(t.$$typeof===Bc||t.$$typeof===zc||t.$$typeof===Vc||t.$$typeof===jc||t.$$typeof===Uc||t.$$typeof===JP||t.$$typeof===ZP||t.$$typeof===eC||t.$$typeof===XP)};ve.typeOf=en;C1.exports=ve;var tC=C1.exports,N1=tC,nC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},O1={};O1[N1.ForwardRef]=nC;O1[N1.Memo]=rC;var iC=!0;function D1(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var zm=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||iC===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},L1=function(e,n,r){zm(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function sC(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var oC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},aC=/[A-Z]|^ms/g,lC=/_EMO_([^_]+?)_([^]*?)_EMO_/g,M1=function(e){return e.charCodeAt(1)===45},d0=function(e){return e!=null&&typeof e!="boolean"},kh=$P(function(t){return M1(t)?t:t.replace(aC,"-$&").toLowerCase()}),h0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(lC,function(r,i,s){return xn={name:i,styles:s,next:xn},i})}return oC[e]!==1&&!M1(e)&&typeof n=="number"&&n!==0?n+"px":n};function ga(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return xn={name:n.name,styles:n.styles,next:xn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)xn={name:r.name,styles:r.styles,next:xn},r=r.next;var i=n.styles+";";return i}return uC(t,e,n)}case"function":{if(t!==void 0){var s=xn,o=n(t);return xn=s,ga(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function uC(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ga(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":d0(o)&&(r+=kh(s)+":"+h0(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)d0(o[a])&&(r+=kh(s)+":"+h0(s,o[a])+";");else{var u=ga(t,e,o);switch(s){case"animation":case"animationName":{r+=kh(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}return r}var f0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xn,Bm=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";xn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=ga(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=ga(r,n,e[a]),i&&(s+=o[a]);f0.lastIndex=0;for(var u="",c;(c=f0.exec(s))!==null;)u+="-"+c[1];var h=sC(s)+u;return{name:h,styles:s,next:xn}},cC=function(e){return e()},dC=Zh.useInsertionEffect?Zh.useInsertionEffect:!1,V1=dC||cC,Hm={}.hasOwnProperty,j1=V.createContext(typeof HTMLElement<"u"?QP({key:"css"}):null);j1.Provider;var F1=function(e){return V.forwardRef(function(n,r){var i=V.useContext(j1);return e(n,i,r)})},U1=V.createContext({}),Zf="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",hC=function(e,n){var r={};for(var i in n)Hm.call(n,i)&&(r[i]=n[i]);return r[Zf]=e,r},fC=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return zm(n,r,i),V1(function(){return L1(n,r,i)}),null},pC=F1(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var i=t[Zf],s=[r],o="";typeof t.className=="string"?o=D1(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=Bm(s,void 0,V.useContext(U1));o+=e.key+"-"+a.name;var u={};for(var c in t)Hm.call(t,c)&&c!=="css"&&c!==Zf&&(u[c]=t[c]);return u.ref=n,u.className=o,V.createElement(V.Fragment,null,V.createElement(fC,{cache:e,serialized:a,isStringTag:typeof i=="string"}),V.createElement(i,u))}),mC=pC,gC=_.Fragment;function Qe(t,e,n){return Hm.call(e,"css")?_.jsx(mC,hC(t,e),n):_.jsx(t,e,n)}function $1(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Bm(e)}var $=function(){var e=$1.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},yC=function t(e){for(var n=e.length,r=0,i="";r<n;r++){var s=e[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=t(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function vC(t,e,n){var r=[],i=D1(t,r,n);return r.length<2?n:i+e(r)}var _C=function(e){var n=e.cache,r=e.serializedArr;return V1(function(){for(var i=0;i<r.length;i++)L1(n,r[i],!1)}),null},Rh=F1(function(t,e){var n=!1,r=[],i=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];var m=Bm(h,e.registered);return r.push(m),zm(e,m,!1),e.key+"-"+m.name},s=function(){for(var c=arguments.length,h=new Array(c),p=0;p<c;p++)h[p]=arguments[p];return vC(e.registered,i,yC(h))},o={css:i,cx:s,theme:V.useContext(U1)},a=t.children(o);return n=!0,V.createElement(V.Fragment,null,V.createElement(_C,{cache:e,serializedArr:r}),a)}),wC=Object.defineProperty,EC=(t,e,n)=>e in t?wC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ll=(t,e,n)=>(EC(t,typeof e!="symbol"?e+"":e,n),n),ep=new Map,Ml=new WeakMap,p0=0,SC=void 0;function TC(t){return t?(Ml.has(t)||(p0+=1,Ml.set(t,p0.toString())),Ml.get(t)):"0"}function IC(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?TC(t.root):t[e]}`).toString()}function bC(t){const e=IC(t);let n=ep.get(e);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var u;const c=a.isIntersecting&&i.some(h=>a.intersectionRatio>=h);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(u=r.get(a.target))==null||u.forEach(h=>{h(c,a)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:r},ep.set(e,n)}return n}function z1(t,e,n={},r=SC){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const u=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:i,observer:s,elements:o}=bC(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),ep.delete(i))}}function xC(t){return typeof t.children!="function"}var m0=class extends V.Component{constructor(t){super(t),Ll(this,"node",null),Ll(this,"_unobserveCb",null),Ll(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),Ll(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),xC(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:s}=this.props;this._unobserveCb=z1(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:i},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:x,entry:P}=this.state;return t({inView:x,entry:P,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:r,root:i,rootMargin:s,onChange:o,skip:a,trackVisibility:u,delay:c,initialInView:h,fallbackInView:p,...m}=this.props;return V.createElement(e||"div",{ref:this.handleNode,...m},t)}};function B1({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:u,onChange:c}={}){var h;const[p,m]=V.useState(null),x=V.useRef(),[P,T]=V.useState({inView:!!a,entry:void 0});x.current=c,V.useEffect(()=>{if(o||!p)return;let w;return w=z1(p,(N,D)=>{T({inView:N,entry:D}),x.current&&x.current(N,D),D.isIntersecting&&s&&w&&(w(),w=void 0)},{root:i,rootMargin:r,threshold:t,trackVisibility:n,delay:e},u),()=>{w&&w()}},[Array.isArray(t)?t.toString():t,p,i,r,s,o,n,u,e]);const R=(h=P.entry)==null?void 0:h.target,v=V.useRef();!p&&R&&!s&&!o&&v.current!==R&&(v.current=R,T({inView:!!a,entry:void 0}));const g=[m,P.inView,P.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var H1={exports:{}},_e={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=Symbol.for("react.element"),qm=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Gc=Symbol.for("react.context"),kC=Symbol.for("react.server_context"),Qc=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Xc=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),Zc=Symbol.for("react.lazy"),RC=Symbol.for("react.offscreen"),W1;W1=Symbol.for("react.module.reference");function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Wm:switch(t=t.type,t){case Hc:case qc:case Wc:case Yc:case Xc:return t;default:switch(t=t&&t.$$typeof,t){case kC:case Gc:case Qc:case Zc:case Jc:case Kc:return t;default:return e}}case qm:return e}}}_e.ContextConsumer=Gc;_e.ContextProvider=Kc;_e.Element=Wm;_e.ForwardRef=Qc;_e.Fragment=Hc;_e.Lazy=Zc;_e.Memo=Jc;_e.Portal=qm;_e.Profiler=qc;_e.StrictMode=Wc;_e.Suspense=Yc;_e.SuspenseList=Xc;_e.isAsyncMode=function(){return!1};_e.isConcurrentMode=function(){return!1};_e.isContextConsumer=function(t){return un(t)===Gc};_e.isContextProvider=function(t){return un(t)===Kc};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wm};_e.isForwardRef=function(t){return un(t)===Qc};_e.isFragment=function(t){return un(t)===Hc};_e.isLazy=function(t){return un(t)===Zc};_e.isMemo=function(t){return un(t)===Jc};_e.isPortal=function(t){return un(t)===qm};_e.isProfiler=function(t){return un(t)===qc};_e.isStrictMode=function(t){return un(t)===Wc};_e.isSuspense=function(t){return un(t)===Yc};_e.isSuspenseList=function(t){return un(t)===Xc};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Hc||t===qc||t===Wc||t===Yc||t===Xc||t===RC||typeof t=="object"&&t!==null&&(t.$$typeof===Zc||t.$$typeof===Jc||t.$$typeof===Kc||t.$$typeof===Gc||t.$$typeof===Qc||t.$$typeof===W1||t.getModuleId!==void 0)};_e.typeOf=un;H1.exports=_e;var PC=H1.exports;$`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;$`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;$`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;$`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;$`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;$`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;$`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;$`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;$`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const CC=$`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,AC=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,NC=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,OC=$`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,DC=$`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Km=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,LC=$`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,MC=$`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,VC=$`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jC=$`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,FC=$`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,UC=$`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$C=$`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function zC({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:r=Km,iterationCount:i=1}){return $1`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function BC(t){return t==null}function HC(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function q1(t,e){return n=>n?t():e()}function ya(t){return q1(t,()=>null)}function tp(t){return ya(()=>({opacity:0}))(t)}const Gm=t=>{const{cascade:e=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=Km,triggerOnce:a=!1,className:u,style:c,childClassName:h,childStyle:p,children:m,onVisibilityChange:x}=t,P=V.useMemo(()=>zC({keyframes:o,duration:i}),[i,o]);return BC(m)?null:HC(m)?Qe(qC,{...t,animationStyles:P,children:String(m)}):PC.isFragment(m)?Qe(K1,{...t,animationStyles:P}):Qe(gC,{children:V.Children.map(m,(T,R)=>{if(!V.isValidElement(T))return null;const v=r+(e?R*i*n:0);switch(T.type){case"ol":case"ul":return Qe(Rh,{children:({cx:g})=>Qe(T.type,{...T.props,className:g(u,T.props.className),style:Object.assign({},c,T.props.style),children:Qe(Gm,{...t,children:T.props.children})})});case"li":return Qe(m0,{threshold:s,triggerOnce:a,onChange:x,children:({inView:g,ref:w})=>Qe(Rh,{children:({cx:N})=>Qe(T.type,{...T.props,ref:w,className:N(h,T.props.className),css:ya(()=>P)(g),style:Object.assign({},p,T.props.style,tp(!g),{animationDelay:v+"ms"})})})});default:return Qe(m0,{threshold:s,triggerOnce:a,onChange:x,children:({inView:g,ref:w})=>Qe("div",{ref:w,className:u,css:ya(()=>P)(g),style:Object.assign({},c,tp(!g),{animationDelay:v+"ms"}),children:Qe(Rh,{children:({cx:N})=>Qe(T.type,{...T.props,className:N(h,T.props.className),style:Object.assign({},p,T.props.style)})})})})}})})},WC={display:"inline-block",whiteSpace:"pre"},qC=t=>{const{animationStyles:e,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:u,style:c,children:h,onVisibilityChange:p}=t,{ref:m,inView:x}=B1({triggerOnce:a,threshold:o,onChange:p});return q1(()=>Qe("div",{ref:m,className:u,style:Object.assign({},c,WC),children:h.split("").map((P,T)=>Qe("span",{css:ya(()=>e)(x),style:{animationDelay:i+T*s*r+"ms"},children:P},T))}),()=>Qe(K1,{...t,children:h}))(n)},K1=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:r=!1,className:i,style:s,children:o,onVisibilityChange:a}=t,{ref:u,inView:c}=B1({triggerOnce:r,threshold:n,onChange:a});return Qe("div",{ref:u,className:i,css:ya(()=>e)(c),style:Object.assign({},s,tp(!c)),children:o})};$`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;$`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;$`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;$`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;$`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;$`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const KC=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,GC=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,QC=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,YC=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,XC=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,JC=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ZC=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,eA=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tA=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,nA=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,rA=$`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,iA=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,sA=$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function oA(t,e,n){switch(n){case"bottom-left":return e?GC:AC;case"bottom-right":return e?QC:NC;case"down":return t?e?XC:DC:e?YC:OC;case"left":return t?e?ZC:LC:e?JC:Km;case"right":return t?e?tA:VC:e?eA:MC;case"top-left":return e?nA:jC;case"top-right":return e?rA:FC;case"up":return t?e?sA:$C:e?iA:UC;default:return e?KC:CC}}const g0=t=>{const{big:e=!1,direction:n,reverse:r=!1,...i}=t,s=V.useMemo(()=>oA(e,r,n),[e,n,r]);return Qe(Gm,{keyframes:s,...i})};$`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;$`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;$`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;$`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;$`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;$`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;$`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;$`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const aA=$`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,lA=$`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,uA=$`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,cA=$`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,dA=$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,hA=$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,fA=$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,pA=$`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function mA(t,e){switch(e){case"down":return t?dA:aA;case"right":return t?fA:uA;case"up":return t?pA:cA;case"left":default:return t?hA:lA}}const y0=t=>{const{direction:e,reverse:n=!1,...r}=t,i=V.useMemo(()=>mA(n,e),[e,n]);return Qe(Gm,{keyframes:i,...r})};$`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;$`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const gA="/assets/foodpic1-W_BliI8A.jpeg",yA="/assets/foodpic2-Dc21bifs.jpeg",vA=()=>_.jsx("img",{src:gA,alt:"Share Your Recipes",className:"w-24 h-24 rounded-full shadow-lg"}),_A=()=>_.jsx("img",{src:yA,alt:"Find New Favorites",className:"w-24 h-24 rounded-full shadow-lg"}),wA=()=>_.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("header",{className:"bg-blue-500 text-white text-center py-12 mb-8 rounded-lg shadow-lg",children:_.jsxs(g0,{cascade:!0,children:[_.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Welcome to FoodMaster"}),_.jsx("p",{className:"text-xl mb-4",children:"Discover and share the best recipes from around the world."}),_.jsx(Ee,{to:"/recipes",className:"bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300",children:"Explore Recipes"})]})}),_.jsxs("main",{children:[_.jsx("section",{className:"mb-12",children:_.jsx(y0,{direction:"left",children:_.jsxs("div",{className:"bg-gray-100 p-6 rounded-lg shadow-lg flex items-center space-x-4 rtl:space-x-reverse",children:[_.jsx(vA,{}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-3xl font-bold mb-2",children:"Share Your Recipes"}),_.jsx("p",{className:"text-gray-700",children:"Have a favorite recipe? Share it with the world and inspire others."})]})]})})}),_.jsx("section",{className:"mb-12",children:_.jsx(y0,{direction:"right",children:_.jsxs("div",{className:"bg-gray-100 p-6 rounded-lg shadow-lg flex items-center space-x-4 rtl:space-x-reverse",children:[_.jsx(_A,{}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-3xl font-bold mb-2",children:"Find New Favorites"}),_.jsx("p",{className:"text-gray-700",children:"Explore our extensive collection of recipes from all cuisines and diets."})]})]})})}),_.jsx("section",{className:"text-center",children:_.jsxs(g0,{children:[_.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Join Our Community"}),_.jsx("p",{className:"text-gray-700 mb-8",children:"Become a part of the FoodMaster community and start sharing and discovering delicious recipes today."}),_.jsx(Ee,{to:"/signup",className:"bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300",children:"Get Started"})]})})]})]});var v0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,x=c&63;u||(x=64,o||(m=64)),r.push(n[h],n[p],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new SA;const m=s<<2|a>>4;if(r.push(m),c!==64){const x=a<<4&240|c>>2;if(r.push(x),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TA=function(t){const e=G1(t);return Q1.encodeByteArray(e,!0)},Bu=function(t){return TA(t).replace(/\./g,"")},Y1=function(t){try{return Q1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=()=>IA().__FIREBASE_DEFAULTS__,xA=()=>{if(typeof process>"u"||typeof v0>"u")return;const t=v0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y1(t[1]);return e&&JSON.parse(e)},ed=()=>{try{return bA()||xA()||kA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X1=t=>{var e,n;return(n=(e=ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},J1=t=>{const e=X1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Z1=()=>{var t;return(t=ed())===null||t===void 0?void 0:t.config},eS=t=>{var e;return(e=ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bu(JSON.stringify(n)),Bu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function CA(){var t;const e=(t=ed())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OA(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DA(){return!CA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LA(){try{return typeof indexedDB=="object"}catch{return!1}}function MA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VA,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,r)}}function jA(t,e){return t.replace(FA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FA=/\{\$([^}]+)}/g;function UA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_0(s)&&_0(o)){if(!va(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Po(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $A(t,e){const n=new zA(t,e);return n.subscribe.bind(n)}class zA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ph),i.error===void 0&&(i.error=Ph),i.complete===void 0&&(i.complete=Ph);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ph(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qA(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WA(t){return t===oi?void 0:t}function qA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const GA={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},QA=ae.INFO,YA={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},XA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qm{constructor(e){this.name=e,this._logLevel=QA,this._logHandler=XA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const JA=(t,e)=>e.some(n=>t instanceof n);let w0,E0;function ZA(){return w0||(w0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eN(){return E0||(E0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nS=new WeakMap,np=new WeakMap,rS=new WeakMap,Ch=new WeakMap,Ym=new WeakMap;function tN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nS.set(n,t)}).catch(()=>{}),Ym.set(e,t),e}function nN(t){if(np.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});np.set(t,e)}let rp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return np.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rN(t){rp=t(rp)}function iN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ah(this),e,...n);return rS.set(r,e.sort?e.sort():[e]),Mr(r)}:eN().includes(t)?function(...e){return t.apply(Ah(this),e),Mr(nS.get(this))}:function(...e){return Mr(t.apply(Ah(this),e))}}function sN(t){return typeof t=="function"?iN(t):(t instanceof IDBTransaction&&nN(t),JA(t,ZA())?new Proxy(t,rp):t)}function Mr(t){if(t instanceof IDBRequest)return tN(t);if(Ch.has(t))return Ch.get(t);const e=sN(t);return e!==t&&(Ch.set(t,e),Ym.set(e,t)),e}const Ah=t=>Ym.get(t);function oN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Mr(o.result),u.oldVersion,u.newVersion,Mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const aN=["get","getKey","getAll","getAllKeys","count"],lN=["put","add","delete","clear"],Nh=new Map;function S0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Nh.set(e,s),s}rN(t=>({...t,get:(e,n,r)=>S0(e,n)||t.get(e,n,r),has:(e,n)=>!!S0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ip="@firebase/app",T0="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Qm("@firebase/app"),dN="@firebase/app-compat",hN="@firebase/analytics-compat",fN="@firebase/analytics",pN="@firebase/app-check-compat",mN="@firebase/app-check",gN="@firebase/auth",yN="@firebase/auth-compat",vN="@firebase/database",_N="@firebase/database-compat",wN="@firebase/functions",EN="@firebase/functions-compat",SN="@firebase/installations",TN="@firebase/installations-compat",IN="@firebase/messaging",bN="@firebase/messaging-compat",xN="@firebase/performance",kN="@firebase/performance-compat",RN="@firebase/remote-config",PN="@firebase/remote-config-compat",CN="@firebase/storage",AN="@firebase/storage-compat",NN="@firebase/firestore",ON="@firebase/vertexai-preview",DN="@firebase/firestore-compat",LN="firebase",MN="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="[DEFAULT]",VN={[ip]:"fire-core",[dN]:"fire-core-compat",[fN]:"fire-analytics",[hN]:"fire-analytics-compat",[mN]:"fire-app-check",[pN]:"fire-app-check-compat",[gN]:"fire-auth",[yN]:"fire-auth-compat",[vN]:"fire-rtdb",[_N]:"fire-rtdb-compat",[wN]:"fire-fn",[EN]:"fire-fn-compat",[SN]:"fire-iid",[TN]:"fire-iid-compat",[IN]:"fire-fcm",[bN]:"fire-fcm-compat",[xN]:"fire-perf",[kN]:"fire-perf-compat",[RN]:"fire-rc",[PN]:"fire-rc-compat",[CN]:"fire-gcs",[AN]:"fire-gcs-compat",[NN]:"fire-fst",[DN]:"fire-fst-compat",[ON]:"fire-vertex","fire-js":"fire-js",[LN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map,jN=new Map,op=new Map;function I0(t,e){try{t.container.addComponent(e)}catch(n){wi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(op.has(e))return wi.debug(`There were multiple attempts to register component ${e}.`),!1;op.set(e,t);for(const n of Hu.values())I0(n,t);for(const n of jN.values())I0(n,t);return!0}function td(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new Va("app","Firebase",FN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=MN;function iS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=Z1()),!n)throw Vr.create("no-options");const s=Hu.get(i);if(s){if(va(n,s.options)&&va(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new KA(i);for(const u of op.values())o.addComponent(u);const a=new UN(n,r,o);return Hu.set(i,a),a}function Xm(t=sp){const e=Hu.get(t);if(!e&&t===sp&&Z1())return iS();if(!e)throw Vr.create("no-app",{appName:t});return e}function On(t,e,n){var r;let i=(r=VN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wi.warn(a.join(" "));return}Ei(new $r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="firebase-heartbeat-database",zN=1,_a="firebase-heartbeat-store";let Oh=null;function sS(){return Oh||(Oh=oN($N,zN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),Oh}async function BN(t){try{const n=(await sS()).transaction(_a),r=await n.objectStore(_a).get(oS(t));return await n.done,r}catch(e){if(e instanceof Fn)wi.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wi.warn(n.message)}}}async function b0(t,e){try{const r=(await sS()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,oS(t)),await r.done}catch(n){if(n instanceof Fn)wi.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wi.warn(r.message)}}}function oS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=1024,WN=30*24*60*60*1e3;class qN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=x0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=WN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=x0(),{heartbeatsToSend:r,unsentEntries:i}=KN(this._heartbeatsCache.heartbeats),s=Bu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function x0(){return new Date().toISOString().substring(0,10)}function KN(t,e=HN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LA()?MA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return b0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k0(t){return Bu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){Ei(new $r("platform-logger",e=>new uN(e),"PRIVATE")),Ei(new $r("heartbeat",e=>new qN(e),"PRIVATE")),On(ip,T0,t),On(ip,T0,"esm2017"),On("fire-js","")}QN("");var R0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,aS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,S){function E(){}E.prototype=S.prototype,b.D=S.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(I,C,A){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return S.prototype[C].apply(I,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,S,E){E||(E=0);var I=Array(16);if(typeof S=="string")for(var C=0;16>C;++C)I[C]=S.charCodeAt(E++)|S.charCodeAt(E++)<<8|S.charCodeAt(E++)<<16|S.charCodeAt(E++)<<24;else for(C=0;16>C;++C)I[C]=S[E++]|S[E++]<<8|S[E++]<<16|S[E++]<<24;S=b.g[0],E=b.g[1],C=b.g[2];var A=b.g[3],k=S+(A^E&(C^A))+I[0]+3614090360&4294967295;S=E+(k<<7&4294967295|k>>>25),k=A+(C^S&(E^C))+I[1]+3905402710&4294967295,A=S+(k<<12&4294967295|k>>>20),k=C+(E^A&(S^E))+I[2]+606105819&4294967295,C=A+(k<<17&4294967295|k>>>15),k=E+(S^C&(A^S))+I[3]+3250441966&4294967295,E=C+(k<<22&4294967295|k>>>10),k=S+(A^E&(C^A))+I[4]+4118548399&4294967295,S=E+(k<<7&4294967295|k>>>25),k=A+(C^S&(E^C))+I[5]+1200080426&4294967295,A=S+(k<<12&4294967295|k>>>20),k=C+(E^A&(S^E))+I[6]+2821735955&4294967295,C=A+(k<<17&4294967295|k>>>15),k=E+(S^C&(A^S))+I[7]+4249261313&4294967295,E=C+(k<<22&4294967295|k>>>10),k=S+(A^E&(C^A))+I[8]+1770035416&4294967295,S=E+(k<<7&4294967295|k>>>25),k=A+(C^S&(E^C))+I[9]+2336552879&4294967295,A=S+(k<<12&4294967295|k>>>20),k=C+(E^A&(S^E))+I[10]+4294925233&4294967295,C=A+(k<<17&4294967295|k>>>15),k=E+(S^C&(A^S))+I[11]+2304563134&4294967295,E=C+(k<<22&4294967295|k>>>10),k=S+(A^E&(C^A))+I[12]+1804603682&4294967295,S=E+(k<<7&4294967295|k>>>25),k=A+(C^S&(E^C))+I[13]+4254626195&4294967295,A=S+(k<<12&4294967295|k>>>20),k=C+(E^A&(S^E))+I[14]+2792965006&4294967295,C=A+(k<<17&4294967295|k>>>15),k=E+(S^C&(A^S))+I[15]+1236535329&4294967295,E=C+(k<<22&4294967295|k>>>10),k=S+(C^A&(E^C))+I[1]+4129170786&4294967295,S=E+(k<<5&4294967295|k>>>27),k=A+(E^C&(S^E))+I[6]+3225465664&4294967295,A=S+(k<<9&4294967295|k>>>23),k=C+(S^E&(A^S))+I[11]+643717713&4294967295,C=A+(k<<14&4294967295|k>>>18),k=E+(A^S&(C^A))+I[0]+3921069994&4294967295,E=C+(k<<20&4294967295|k>>>12),k=S+(C^A&(E^C))+I[5]+3593408605&4294967295,S=E+(k<<5&4294967295|k>>>27),k=A+(E^C&(S^E))+I[10]+38016083&4294967295,A=S+(k<<9&4294967295|k>>>23),k=C+(S^E&(A^S))+I[15]+3634488961&4294967295,C=A+(k<<14&4294967295|k>>>18),k=E+(A^S&(C^A))+I[4]+3889429448&4294967295,E=C+(k<<20&4294967295|k>>>12),k=S+(C^A&(E^C))+I[9]+568446438&4294967295,S=E+(k<<5&4294967295|k>>>27),k=A+(E^C&(S^E))+I[14]+3275163606&4294967295,A=S+(k<<9&4294967295|k>>>23),k=C+(S^E&(A^S))+I[3]+4107603335&4294967295,C=A+(k<<14&4294967295|k>>>18),k=E+(A^S&(C^A))+I[8]+1163531501&4294967295,E=C+(k<<20&4294967295|k>>>12),k=S+(C^A&(E^C))+I[13]+2850285829&4294967295,S=E+(k<<5&4294967295|k>>>27),k=A+(E^C&(S^E))+I[2]+4243563512&4294967295,A=S+(k<<9&4294967295|k>>>23),k=C+(S^E&(A^S))+I[7]+1735328473&4294967295,C=A+(k<<14&4294967295|k>>>18),k=E+(A^S&(C^A))+I[12]+2368359562&4294967295,E=C+(k<<20&4294967295|k>>>12),k=S+(E^C^A)+I[5]+4294588738&4294967295,S=E+(k<<4&4294967295|k>>>28),k=A+(S^E^C)+I[8]+2272392833&4294967295,A=S+(k<<11&4294967295|k>>>21),k=C+(A^S^E)+I[11]+1839030562&4294967295,C=A+(k<<16&4294967295|k>>>16),k=E+(C^A^S)+I[14]+4259657740&4294967295,E=C+(k<<23&4294967295|k>>>9),k=S+(E^C^A)+I[1]+2763975236&4294967295,S=E+(k<<4&4294967295|k>>>28),k=A+(S^E^C)+I[4]+1272893353&4294967295,A=S+(k<<11&4294967295|k>>>21),k=C+(A^S^E)+I[7]+4139469664&4294967295,C=A+(k<<16&4294967295|k>>>16),k=E+(C^A^S)+I[10]+3200236656&4294967295,E=C+(k<<23&4294967295|k>>>9),k=S+(E^C^A)+I[13]+681279174&4294967295,S=E+(k<<4&4294967295|k>>>28),k=A+(S^E^C)+I[0]+3936430074&4294967295,A=S+(k<<11&4294967295|k>>>21),k=C+(A^S^E)+I[3]+3572445317&4294967295,C=A+(k<<16&4294967295|k>>>16),k=E+(C^A^S)+I[6]+76029189&4294967295,E=C+(k<<23&4294967295|k>>>9),k=S+(E^C^A)+I[9]+3654602809&4294967295,S=E+(k<<4&4294967295|k>>>28),k=A+(S^E^C)+I[12]+3873151461&4294967295,A=S+(k<<11&4294967295|k>>>21),k=C+(A^S^E)+I[15]+530742520&4294967295,C=A+(k<<16&4294967295|k>>>16),k=E+(C^A^S)+I[2]+3299628645&4294967295,E=C+(k<<23&4294967295|k>>>9),k=S+(C^(E|~A))+I[0]+4096336452&4294967295,S=E+(k<<6&4294967295|k>>>26),k=A+(E^(S|~C))+I[7]+1126891415&4294967295,A=S+(k<<10&4294967295|k>>>22),k=C+(S^(A|~E))+I[14]+2878612391&4294967295,C=A+(k<<15&4294967295|k>>>17),k=E+(A^(C|~S))+I[5]+4237533241&4294967295,E=C+(k<<21&4294967295|k>>>11),k=S+(C^(E|~A))+I[12]+1700485571&4294967295,S=E+(k<<6&4294967295|k>>>26),k=A+(E^(S|~C))+I[3]+2399980690&4294967295,A=S+(k<<10&4294967295|k>>>22),k=C+(S^(A|~E))+I[10]+4293915773&4294967295,C=A+(k<<15&4294967295|k>>>17),k=E+(A^(C|~S))+I[1]+2240044497&4294967295,E=C+(k<<21&4294967295|k>>>11),k=S+(C^(E|~A))+I[8]+1873313359&4294967295,S=E+(k<<6&4294967295|k>>>26),k=A+(E^(S|~C))+I[15]+4264355552&4294967295,A=S+(k<<10&4294967295|k>>>22),k=C+(S^(A|~E))+I[6]+2734768916&4294967295,C=A+(k<<15&4294967295|k>>>17),k=E+(A^(C|~S))+I[13]+1309151649&4294967295,E=C+(k<<21&4294967295|k>>>11),k=S+(C^(E|~A))+I[4]+4149444226&4294967295,S=E+(k<<6&4294967295|k>>>26),k=A+(E^(S|~C))+I[11]+3174756917&4294967295,A=S+(k<<10&4294967295|k>>>22),k=C+(S^(A|~E))+I[2]+718787259&4294967295,C=A+(k<<15&4294967295|k>>>17),k=E+(A^(C|~S))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+S&4294967295,b.g[1]=b.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+C&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,S){S===void 0&&(S=b.length);for(var E=S-this.blockSize,I=this.B,C=this.h,A=0;A<S;){if(C==0)for(;A<=E;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<S;)if(I[C++]=b.charCodeAt(A++),C==this.blockSize){i(this,I),C=0;break}}else for(;A<S;)if(I[C++]=b[A++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=S},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var S=1;S<b.length-8;++S)b[S]=0;var E=8*this.o;for(S=b.length-8;S<b.length;++S)b[S]=E&255,E/=256;for(this.u(b),b=Array(16),S=E=0;4>S;++S)for(var I=0;32>I;I+=8)b[E++]=this.g[S]>>>I&255;return b};function s(b,S){var E=a;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=S(b)}function o(b,S){this.h=S;for(var E=[],I=!0,C=b.length-1;0<=C;C--){var A=b[C]|0;I&&A==S||(E[C]=A,I=!1)}this.g=E}var a={};function u(b){return-128<=b&&128>b?s(b,function(S){return new o([S|0],0>S?-1:0)}):new o([b|0],0>b?-1:0)}function c(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return R(c(-b));for(var S=[],E=1,I=0;b>=E;I++)S[I]=b/E|0,E*=4294967296;return new o(S,0)}function h(b,S){if(b.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(b.charAt(0)=="-")return R(h(b.substring(1),S));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(S,8)),I=p,C=0;C<b.length;C+=8){var A=Math.min(8,b.length-C),k=parseInt(b.substring(C,C+A),S);8>A?(A=c(Math.pow(S,A)),I=I.j(A).add(c(k))):(I=I.j(E),I=I.add(c(k)))}return I}var p=u(0),m=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(T(this))return-R(this).m();for(var b=0,S=1,E=0;E<this.g.length;E++){var I=this.i(E);b+=(0<=I?I:4294967296+I)*S,S*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(T(this))return"-"+R(this).toString(b);for(var S=c(Math.pow(b,6)),E=this,I="";;){var C=N(E,S).g;E=v(E,C.j(S));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=C,P(E))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var S=0;S<b.g.length;S++)if(b.g[S]!=0)return!1;return!0}function T(b){return b.h==-1}t.l=function(b){return b=v(this,b),T(b)?-1:P(b)?0:1};function R(b){for(var S=b.g.length,E=[],I=0;I<S;I++)E[I]=~b.g[I];return new o(E,~b.h).add(m)}t.abs=function(){return T(this)?R(this):this},t.add=function(b){for(var S=Math.max(this.g.length,b.g.length),E=[],I=0,C=0;C<=S;C++){var A=I+(this.i(C)&65535)+(b.i(C)&65535),k=(A>>>16)+(this.i(C)>>>16)+(b.i(C)>>>16);I=k>>>16,A&=65535,k&=65535,E[C]=k<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function v(b,S){return b.add(R(S))}t.j=function(b){if(P(this)||P(b))return p;if(T(this))return T(b)?R(this).j(R(b)):R(R(this).j(b));if(T(b))return R(this.j(R(b)));if(0>this.l(x)&&0>b.l(x))return c(this.m()*b.m());for(var S=this.g.length+b.g.length,E=[],I=0;I<2*S;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<b.g.length;C++){var A=this.i(I)>>>16,k=this.i(I)&65535,G=b.i(C)>>>16,It=b.i(C)&65535;E[2*I+2*C]+=k*It,g(E,2*I+2*C),E[2*I+2*C+1]+=A*It,g(E,2*I+2*C+1),E[2*I+2*C+1]+=k*G,g(E,2*I+2*C+1),E[2*I+2*C+2]+=A*G,g(E,2*I+2*C+2)}for(I=0;I<S;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=S;I<2*S;I++)E[I]=0;return new o(E,0)};function g(b,S){for(;(b[S]&65535)!=b[S];)b[S+1]+=b[S]>>>16,b[S]&=65535,S++}function w(b,S){this.g=b,this.h=S}function N(b,S){if(P(S))throw Error("division by zero");if(P(b))return new w(p,p);if(T(b))return S=N(R(b),S),new w(R(S.g),R(S.h));if(T(S))return S=N(b,R(S)),new w(R(S.g),S.h);if(30<b.g.length){if(T(b)||T(S))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=S;0>=I.l(b);)E=D(E),I=D(I);var C=L(E,1),A=L(I,1);for(I=L(I,2),E=L(E,2);!P(I);){var k=A.add(I);0>=k.l(b)&&(C=C.add(E),A=k),I=L(I,1),E=L(E,1)}return S=v(b,C.j(S)),new w(C,S)}for(C=p;0<=b.l(S);){for(E=Math.max(1,Math.floor(b.m()/S.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=c(E),k=A.j(S);T(k)||0<k.l(b);)E-=I,A=c(E),k=A.j(S);P(A)&&(A=m),C=C.add(A),b=v(b,k)}return new w(C,b)}t.A=function(b){return N(this,b).h},t.and=function(b){for(var S=Math.max(this.g.length,b.g.length),E=[],I=0;I<S;I++)E[I]=this.i(I)&b.i(I);return new o(E,this.h&b.h)},t.or=function(b){for(var S=Math.max(this.g.length,b.g.length),E=[],I=0;I<S;I++)E[I]=this.i(I)|b.i(I);return new o(E,this.h|b.h)},t.xor=function(b){for(var S=Math.max(this.g.length,b.g.length),E=[],I=0;I<S;I++)E[I]=this.i(I)^b.i(I);return new o(E,this.h^b.h)};function D(b){for(var S=b.g.length+1,E=[],I=0;I<S;I++)E[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(E,b.h)}function L(b,S){var E=S>>5;S%=32;for(var I=b.g.length-E,C=[],A=0;A<I;A++)C[A]=0<S?b.i(A+E)>>>S|b.i(A+E+1)<<32-S:b.i(A+E);return new o(C,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,aS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,fi=o}).apply(typeof R0<"u"?R0:typeof self<"u"?self:typeof window<"u"?window:{});var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lS,uS,Co,cS,ou,ap,dS,hS,fS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,f){return l==Array.prototype||l==Object.prototype||(l[d]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vl=="object"&&Vl];for(var d=0;d<l.length;++d){var f=l[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var f=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var O=l[y];if(!(O in f))break e;f=f[O]}l=l[l.length-1],y=f[l],d=d(y),d!=y&&d!=null&&e(f,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var f=0,y=!1,O={next:function(){if(!y&&f<l.length){var M=f++;return{value:d(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,f){return l.call.apply(l.bind,arguments)}function p(l,d,f){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),l.apply(d,O)}}return function(){return l.apply(d,arguments)}}function m(l,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function x(l,d){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function P(l,d){function f(){}f.prototype=d.prototype,l.aa=d.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(y,O,M){for(var z=Array(arguments.length-2),we=2;we<arguments.length;we++)z[we-2]=arguments[we];return d.prototype[O].apply(y,z)}}function T(l){const d=l.length;if(0<d){const f=Array(d);for(let y=0;y<d;y++)f[y]=l[y];return f}return[]}function R(l,d){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const O=l.length||0,M=y.length||0;l.length=O+M;for(let z=0;z<M;z++)l[O+z]=y[z]}else l.push(y)}}class v{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function g(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var D=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function L(l,d,f){for(const y in l)d.call(f,l[y],y,l)}function b(l,d){for(const f in l)d.call(void 0,l[f],f,l)}function S(l){const d={};for(const f in l)d[f]=l[f];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,d){let f,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(f in y)l[f]=y[f];for(let M=0;M<E.length;M++)f=E[M],Object.prototype.hasOwnProperty.call(y,f)&&(l[f]=y[f])}}function C(l){var d=1;l=l.split(":");const f=[];for(;0<d&&l.length;)f.push(l.shift()),d--;return l.length&&f.push(l.join(":")),f}function A(l){a.setTimeout(()=>{throw l},0)}function k(){var l=Q;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class G{constructor(){this.h=this.g=null}add(d,f){const y=It.get();y.set(d,f),this.h?this.h.next=y:this.g=y,this.h=y}}var It=new v(()=>new Le,l=>l.reset());class Le{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,B=!1,Q=new G,ee=()=>{const l=a.Promise.resolve(void 0);Ge=()=>{l.then(pe)}};var pe=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(f){A(f)}var d=It;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}B=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var cn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,d),a.removeEventListener("test",f,d)}catch{}return l}();function bt(l,d){if(ge.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(D){e:{try{N(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else f=="mouseover"?d=l.fromElement:f=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Un[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&bt.aa.h.call(this)}}P(bt,ge);var Un={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var $n="closure_listenable_"+(1e6*Math.random()|0),gb=0;function yb(l,d,f,y,O){this.listener=l,this.proxy=null,this.src=d,this.type=f,this.capture=!!y,this.ha=O,this.key=++gb,this.da=this.fa=!1}function Za(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function el(l){this.src=l,this.g={},this.h=0}el.prototype.add=function(l,d,f,y,O){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var z=Nd(l,d,y,O);return-1<z?(d=l[z],f||(d.fa=!1)):(d=new yb(d,this.src,M,!!y,O),d.fa=f,l.push(d)),d};function Ad(l,d){var f=d.type;if(f in l.g){var y=l.g[f],O=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=O)&&Array.prototype.splice.call(y,O,1),M&&(Za(d),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Nd(l,d,f,y){for(var O=0;O<l.length;++O){var M=l[O];if(!M.da&&M.listener==d&&M.capture==!!f&&M.ha==y)return O}return-1}var Od="closure_lm_"+(1e6*Math.random()|0),Dd={};function Kg(l,d,f,y,O){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Kg(l,d[M],f,y,O);return null}return f=Yg(f),l&&l[$n]?l.K(d,f,c(y)?!!y.capture:!!y,O):vb(l,d,f,!1,y,O)}function vb(l,d,f,y,O,M){if(!d)throw Error("Invalid event type");var z=c(O)?!!O.capture:!!O,we=Md(l);if(we||(l[Od]=we=new el(l)),f=we.add(d,f,y,z,M),f.proxy)return f;if(y=_b(),f.proxy=y,y.src=l,y.listener=f,l.addEventListener)cn||(O=z),O===void 0&&(O=!1),l.addEventListener(d.toString(),y,O);else if(l.attachEvent)l.attachEvent(Qg(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function _b(){function l(f){return d.call(l.src,l.listener,f)}const d=wb;return l}function Gg(l,d,f,y,O){if(Array.isArray(d))for(var M=0;M<d.length;M++)Gg(l,d[M],f,y,O);else y=c(y)?!!y.capture:!!y,f=Yg(f),l&&l[$n]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],f=Nd(M,f,y,O),-1<f&&(Za(M[f]),Array.prototype.splice.call(M,f,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=Md(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Nd(d,f,y,O)),(f=-1<l?d[l]:null)&&Ld(f))}function Ld(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[$n])Ad(d.i,l);else{var f=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(f,y,l.capture):d.detachEvent?d.detachEvent(Qg(f),y):d.addListener&&d.removeListener&&d.removeListener(y),(f=Md(d))?(Ad(f,l),f.h==0&&(f.src=null,d[Od]=null)):Za(l)}}}function Qg(l){return l in Dd?Dd[l]:Dd[l]="on"+l}function wb(l,d){if(l.da)l=!0;else{d=new bt(d,this);var f=l.listener,y=l.ha||l.src;l.fa&&Ld(l),l=f.call(y,d)}return l}function Md(l){return l=l[Od],l instanceof el?l:null}var Vd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yg(l){return typeof l=="function"?l:(l[Vd]||(l[Vd]=function(d){return l.handleEvent(d)}),l[Vd])}function ht(){me.call(this),this.i=new el(this),this.M=this,this.F=null}P(ht,me),ht.prototype[$n]=!0,ht.prototype.removeEventListener=function(l,d,f,y){Gg(this,l,d,f,y)};function xt(l,d){var f,y=l.F;if(y)for(f=[];y;y=y.F)f.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new ge(d,l);else if(d instanceof ge)d.target=d.target||l;else{var O=d;d=new ge(y,l),I(d,O)}if(O=!0,f)for(var M=f.length-1;0<=M;M--){var z=d.g=f[M];O=tl(z,y,!0,d)&&O}if(z=d.g=l,O=tl(z,y,!0,d)&&O,O=tl(z,y,!1,d)&&O,f)for(M=0;M<f.length;M++)z=d.g=f[M],O=tl(z,y,!1,d)&&O}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var f=l.g[d],y=0;y<f.length;y++)Za(f[y]);delete l.g[d],l.h--}}this.F=null},ht.prototype.K=function(l,d,f,y){return this.i.add(String(l),d,!1,f,y)},ht.prototype.L=function(l,d,f,y){return this.i.add(String(l),d,!0,f,y)};function tl(l,d,f,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,M=0;M<d.length;++M){var z=d[M];if(z&&!z.da&&z.capture==f){var we=z.listener,rt=z.ha||z.src;z.fa&&Ad(l.i,z),O=we.call(rt,y)!==!1&&O}}return O&&!y.defaultPrevented}function Xg(l,d,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Jg(l){l.g=Xg(()=>{l.g=null,l.i&&(l.i=!1,Jg(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Eb extends me{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Jg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Js(l){me.call(this),this.h=l,this.g={}}P(Js,me);var Zg=[];function ey(l){L(l.g,function(d,f){this.g.hasOwnProperty(f)&&Ld(d)},l),l.g={}}Js.prototype.N=function(){Js.aa.N.call(this),ey(this)},Js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jd=a.JSON.stringify,Sb=a.JSON.parse,Tb=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fd(){}Fd.prototype.h=null;function ty(l){return l.h||(l.h=l.i())}function ny(){}var Zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ud(){ge.call(this,"d")}P(Ud,ge);function $d(){ge.call(this,"c")}P($d,ge);var ei={},ry=null;function nl(){return ry=ry||new ht}ei.La="serverreachability";function iy(l){ge.call(this,ei.La,l)}P(iy,ge);function eo(l){const d=nl();xt(d,new iy(d))}ei.STAT_EVENT="statevent";function sy(l,d){ge.call(this,ei.STAT_EVENT,l),this.stat=d}P(sy,ge);function kt(l){const d=nl();xt(d,new sy(d,l))}ei.Ma="timingevent";function oy(l,d){ge.call(this,ei.Ma,l),this.size=d}P(oy,ge);function to(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function no(){this.g=!0}no.prototype.xa=function(){this.g=!1};function Ib(l,d,f,y,O,M){l.info(function(){if(l.g)if(M)for(var z="",we=M.split("&"),rt=0;rt<we.length;rt++){var ce=we[rt].split("=");if(1<ce.length){var ft=ce[0];ce=ce[1];var pt=ft.split("_");z=2<=pt.length&&pt[1]=="type"?z+(ft+"="+ce+"&"):z+(ft+"=redacted&")}}else z=null;else z=M;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+d+`
`+f+`
`+z})}function bb(l,d,f,y,O,M,z){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+d+`
`+f+`
`+M+" "+z})}function Mi(l,d,f,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+kb(l,f)+(y?" "+y:"")})}function xb(l,d){l.info(function(){return"TIMEOUT: "+d})}no.prototype.info=function(){};function kb(l,d){if(!l.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var y=f[l];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var z=1;z<O.length;z++)O[z]=""}}}}return jd(f)}catch{return d}}var rl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ay={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zd;function il(){}P(il,Fd),il.prototype.g=function(){return new XMLHttpRequest},il.prototype.i=function(){return{}},zd=new il;function lr(l,d,f,y){this.j=l,this.i=d,this.l=f,this.R=y||1,this.U=new Js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ly}function ly(){this.i=null,this.g="",this.h=!1}var uy={},Bd={};function Hd(l,d,f){l.L=1,l.v=ll(zn(d)),l.m=f,l.P=!0,cy(l,null)}function cy(l,d){l.F=Date.now(),sl(l),l.A=zn(l.v);var f=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Iy(f.i,"t",y),l.C=0,f=l.j.J,l.h=new ly,l.g=zy(l.j,f?d:null,!l.m),0<l.O&&(l.M=new Eb(m(l.Y,l,l.g),l.O)),d=l.U,f=l.g,y=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Zg[0]=O.toString()),O=Zg);for(var M=0;M<O.length;M++){var z=Kg(f,O[M],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),eo(),Ib(l.i,l.u,l.A,l.l,l.R,l.m)}lr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Bn(l)==3?d.j():this.Y(l)},lr.prototype.Y=function(l){try{if(l==this.g)e:{const pt=Bn(this.g);var d=this.g.Ba();const Fi=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Ay(this.g)))){this.J||pt!=4||d==7||(d==8||0>=Fi?eo(3):eo(2)),Wd(this);var f=this.g.Z();this.X=f;t:if(dy(this)){var y=Ay(this.g);l="";var O=y.length,M=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ti(this),ro(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(M&&d==O-1)});y.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,bb(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var we,rt=this.g;if((we=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(we)){var ce=we;break t}}ce=null}if(f=ce)Mi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qd(this,f);else{this.o=!1,this.s=3,kt(12),ti(this),ro(this);break e}}if(this.P){f=!0;let dn;for(;!this.J&&this.C<z.length;)if(dn=Rb(this,z),dn==Bd){pt==4&&(this.s=4,kt(14),f=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==uy){this.s=4,kt(15),Mi(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Mi(this.i,this.l,dn,null),qd(this,dn);if(dy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||z.length!=0||this.h.h||(this.s=1,kt(16),f=!1),this.o=this.o&&f,!f)Mi(this.i,this.l,z,"[Invalid Chunked Response]"),ti(this),ro(this);else if(0<z.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Jd(ft),ft.M=!0,kt(11))}}else Mi(this.i,this.l,z,null),qd(this,z);pt==4&&ti(this),this.o&&!this.J&&(pt==4?jy(this.j,this):(this.o=!1,sl(this)))}else Wb(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),ti(this),ro(this)}}}catch{}finally{}};function dy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Rb(l,d){var f=l.C,y=d.indexOf(`
`,f);return y==-1?Bd:(f=Number(d.substring(f,y)),isNaN(f)?uy:(y+=1,y+f>d.length?Bd:(d=d.slice(y,y+f),l.C=y+f,d)))}lr.prototype.cancel=function(){this.J=!0,ti(this)};function sl(l){l.S=Date.now()+l.I,hy(l,l.I)}function hy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=to(m(l.ba,l),d)}function Wd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}lr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(xb(this.i,this.A),this.L!=2&&(eo(),kt(17)),ti(this),this.s=2,ro(this)):hy(this,this.S-l)};function ro(l){l.j.G==0||l.J||jy(l.j,l)}function ti(l){Wd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ey(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function qd(l,d){try{var f=l.j;if(f.G!=0&&(f.g==l||Kd(f.h,l))){if(!l.K&&Kd(f.h,l)&&f.G==3){try{var y=f.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)fl(f),dl(f);else break e;Xd(f),kt(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=to(m(f.Za,f),6e3));if(1>=my(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ri(f,11)}else if((l.K||f.g==l)&&fl(f),!g(d))for(O=f.Da.g.parse(d),d=0;d<O.length;d++){let ce=O[d];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const ft=ce[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=ce[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const Fi=ce[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(y=1.5*Fi,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const dn=l.g;if(dn){const ml=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ml){var M=y.h;M.g||ml.indexOf("spdy")==-1&&ml.indexOf("quic")==-1&&ml.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Gd(M,M.h),M.h=null))}if(y.D){const Zd=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zd&&(y.ya=Zd,Ie(y.I,y.D,Zd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var z=l;if(y.qa=$y(y,y.J?y.ia:null,y.W),z.K){gy(y.h,z);var we=z,rt=y.L;rt&&(we.I=rt),we.B&&(Wd(we),sl(we)),y.g=z}else My(y);0<f.i.length&&hl(f)}else ce[0]!="stop"&&ce[0]!="close"||ri(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?ri(f,7):Yd(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}eo(4)}catch{}}var Pb=class{constructor(l,d){this.g=l,this.map=d}};function fy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function py(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function my(l){return l.h?1:l.g?l.g.size:0}function Kd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Gd(l,d){l.g?l.g.add(d):l.h=d}function gy(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}fy.prototype.cancel=function(){if(this.i=yy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function yy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const f of l.g.values())d=d.concat(f.D);return d}return T(l.i)}function Cb(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],f=l.length,y=0;y<f;y++)d.push(l[y]);return d}d=[],f=0;for(y in l)d[f++]=l[y];return d}function Ab(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var f=0;f<l;f++)d.push(f);return d}d=[],f=0;for(const y in l)d[f++]=y;return d}}}function vy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var f=Ab(l),y=Cb(l),O=y.length,M=0;M<O;M++)d.call(void 0,y[M],f&&f[M],l)}var _y=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nb(l,d){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var y=l[f].indexOf("="),O=null;if(0<=y){var M=l[f].substring(0,y);O=l[f].substring(y+1)}else M=l[f];d(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ni(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ni){this.h=l.h,ol(this,l.j),this.o=l.o,this.g=l.g,al(this,l.s),this.l=l.l;var d=l.i,f=new oo;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),wy(this,f),this.m=l.m}else l&&(d=String(l).match(_y))?(this.h=!1,ol(this,d[1]||"",!0),this.o=io(d[2]||""),this.g=io(d[3]||"",!0),al(this,d[4]),this.l=io(d[5]||"",!0),wy(this,d[6]||"",!0),this.m=io(d[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}ni.prototype.toString=function(){var l=[],d=this.j;d&&l.push(so(d,Ey,!0),":");var f=this.g;return(f||d=="file")&&(l.push("//"),(d=this.o)&&l.push(so(d,Ey,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(so(f,f.charAt(0)=="/"?Lb:Db,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",so(f,Vb)),l.join("")};function zn(l){return new ni(l)}function ol(l,d,f){l.j=f?io(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function al(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function wy(l,d,f){d instanceof oo?(l.i=d,jb(l.i,l.h)):(f||(d=so(d,Mb)),l.i=new oo(d,l.h))}function Ie(l,d,f){l.i.set(d,f)}function ll(l){return Ie(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function io(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function so(l,d,f){return typeof l=="string"?(l=encodeURI(l).replace(d,Ob),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ob(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ey=/[#\/\?@]/g,Db=/[#\?:]/g,Lb=/[#\?]/g,Mb=/[#\?@]/g,Vb=/#/g;function oo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ur(l){l.g||(l.g=new Map,l.h=0,l.i&&Nb(l.i,function(d,f){l.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=oo.prototype,t.add=function(l,d){ur(this),this.i=null,l=Vi(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(d),this.h+=1,this};function Sy(l,d){ur(l),d=Vi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ty(l,d){return ur(l),d=Vi(l,d),l.g.has(d)}t.forEach=function(l,d){ur(this),this.g.forEach(function(f,y){f.forEach(function(O){l.call(d,O,y,this)},this)},this)},t.na=function(){ur(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let y=0;y<d.length;y++){const O=l[y];for(let M=0;M<O.length;M++)f.push(d[y])}return f},t.V=function(l){ur(this);let d=[];if(typeof l=="string")Ty(this,l)&&(d=d.concat(this.g.get(Vi(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)d=d.concat(l[f])}return d},t.set=function(l,d){return ur(this),this.i=null,l=Vi(this,l),Ty(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Iy(l,d,f){Sy(l,d),0<f.length&&(l.i=null,l.g.set(Vi(l,d),T(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var y=d[f];const M=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var O=M;z[y]!==""&&(O+="="+encodeURIComponent(String(z[y]))),l.push(O)}}return this.i=l.join("&")};function Vi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function jb(l,d){d&&!l.j&&(ur(l),l.i=null,l.g.forEach(function(f,y){var O=y.toLowerCase();y!=O&&(Sy(this,y),Iy(this,O,f))},l)),l.j=d}function Fb(l,d){const f=new no;if(a.Image){const y=new Image;y.onload=x(cr,f,"TestLoadImage: loaded",!0,d,y),y.onerror=x(cr,f,"TestLoadImage: error",!1,d,y),y.onabort=x(cr,f,"TestLoadImage: abort",!1,d,y),y.ontimeout=x(cr,f,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Ub(l,d){const f=new no,y=new AbortController,O=setTimeout(()=>{y.abort(),cr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(O),M.ok?cr(f,"TestPingServer: ok",!0,d):cr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),cr(f,"TestPingServer: error",!1,d)})}function cr(l,d,f,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(f)}catch{}}function $b(){this.g=new Tb}function zb(l,d,f){const y=f||"";try{vy(l,function(O,M){let z=O;c(O)&&(z=jd(O)),d.push(y+M+"="+encodeURIComponent(z))})}catch(O){throw d.push(y+"type="+encodeURIComponent("_badmap")),O}}function ao(l){this.l=l.Ub||null,this.j=l.eb||!1}P(ao,Fd),ao.prototype.g=function(){return new ul(this.l,this.j)},ao.prototype.i=function(l){return function(){return l}}({});function ul(l,d){ht.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ul,ht),t=ul.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,uo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;by(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function by(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?lo(this):uo(this),this.readyState==3&&by(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,lo(this))},t.Qa=function(l){this.g&&(this.response=l,lo(this))},t.ga=function(){this.g&&lo(this)};function lo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,uo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=d.next();return l.join(`\r
`)};function uo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function xy(l){let d="";return L(l,function(f,y){d+=y,d+=":",d+=f,d+=`\r
`}),d}function Qd(l,d,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=xy(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):Ie(l,d,f))}function Me(l){ht.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Me,ht);var Bb=/^https?$/i,Hb=["POST","PUT"];t=Me.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zd.g(),this.v=this.o?ty(this.o):ty(zd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){ky(this,M);return}if(l=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)f.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())f.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Hb,d,void 0))||y||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of f)this.g.setRequestHeader(M,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cy(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){ky(this,M)}};function ky(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Ry(l),cl(l)}function Ry(l){l.A||(l.A=!0,xt(l,"complete"),xt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,xt(this,"complete"),xt(this,"abort"),cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cl(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Py(this):this.bb())},t.bb=function(){Py(this)};function Py(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Bn(l)!=4||l.Z()!=2)){if(l.u&&Bn(l)==4)Xg(l.Ea,0,l);else if(xt(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var y;if(y=z===0){var O=String(l.D).match(_y)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),y=!Bb.test(O?O.toLowerCase():"")}f=y}if(f)xt(l,"complete"),xt(l,"success");else{l.m=6;try{var M=2<Bn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",Ry(l)}}finally{cl(l)}}}}function cl(l,d){if(l.g){Cy(l);const f=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||xt(l,"ready");try{f.onreadystatechange=y}catch{}}}function Cy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Sb(d)}};function Ay(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Wb(l){const d={};l=(l.g&&2<=Bn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(g(l[y]))continue;var f=C(l[y]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=d[O]||[];d[O]=M,M.push(f)}b(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function co(l,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||d}function Ny(l){this.Aa=0,this.i=[],this.j=new no,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=co("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=co("baseRetryDelayMs",5e3,l),this.cb=co("retryDelaySeedMs",1e4,l),this.Wa=co("forwardChannelMaxRetries",2,l),this.wa=co("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new fy(l&&l.concurrentRequestLimit),this.Da=new $b,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ny.prototype,t.la=8,t.G=1,t.connect=function(l,d,f,y){kt(0),this.W=l,this.H=d||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=$y(this,null,this.W),hl(this)};function Yd(l){if(Oy(l),l.G==3){var d=l.U++,f=zn(l.I);if(Ie(f,"SID",l.K),Ie(f,"RID",d),Ie(f,"TYPE","terminate"),ho(l,f),d=new lr(l,l.j,d),d.L=2,d.v=ll(zn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=d.v,f=!0),f||(d.g=zy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),sl(d)}Uy(l)}function dl(l){l.g&&(Jd(l),l.g.cancel(),l.g=null)}function Oy(l){dl(l),l.u&&(a.clearTimeout(l.u),l.u=null),fl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function hl(l){if(!py(l.h)&&!l.s){l.s=!0;var d=l.Ga;Ge||ee(),B||(Ge(),B=!0),Q.add(d,l),l.B=0}}function qb(l,d){return my(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=to(m(l.Ga,l,d),Fy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new lr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=S(M),I(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Ly(this,O,d),f=zn(this.I),Ie(f,"RID",l),Ie(f,"CVER",22),this.D&&Ie(f,"X-HTTP-Session-Id",this.D),ho(this,f),M&&(this.O?d="headers="+encodeURIComponent(String(xy(M)))+"&"+d:this.m&&Qd(f,this.m,M)),Gd(this.h,O),this.Ua&&Ie(f,"TYPE","init"),this.P?(Ie(f,"$req",d),Ie(f,"SID","null"),O.T=!0,Hd(O,f,null)):Hd(O,f,d),this.G=2}}else this.G==3&&(l?Dy(this,l):this.i.length==0||py(this.h)||Dy(this))};function Dy(l,d){var f;d?f=d.l:f=l.U++;const y=zn(l.I);Ie(y,"SID",l.K),Ie(y,"RID",f),Ie(y,"AID",l.T),ho(l,y),l.m&&l.o&&Qd(y,l.m,l.o),f=new lr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Ly(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Gd(l.h,f),Hd(f,y,d)}function ho(l,d){l.H&&L(l.H,function(f,y){Ie(d,y,f)}),l.l&&vy({},function(f,y){Ie(d,y,f)})}function Ly(l,d,f){f=Math.min(l.i.length,f);var y=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let M=-1;for(;;){const z=["count="+f];M==-1?0<f?(M=O[0].g,z.push("ofs="+M)):M=0:z.push("ofs="+M);let we=!0;for(let rt=0;rt<f;rt++){let ce=O[rt].g;const ft=O[rt].map;if(ce-=M,0>ce)M=Math.max(0,O[rt].g-100),we=!1;else try{zb(ft,z,"req"+ce+"_")}catch{y&&y(ft)}}if(we){y=z.join("&");break e}}}return l=l.i.splice(0,f),d.D=l,y}function My(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Ge||ee(),B||(Ge(),B=!0),Q.add(d,l),l.v=0}}function Xd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=to(m(l.Fa,l),Fy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Vy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=to(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),dl(this),Vy(this))};function Jd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Vy(l){l.g=new lr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=zn(l.qa);Ie(d,"RID","rpc"),Ie(d,"SID",l.K),Ie(d,"AID",l.T),Ie(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ie(d,"TO",l.ja),Ie(d,"TYPE","xmlhttp"),ho(l,d),l.m&&l.o&&Qd(d,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=ll(zn(d)),f.m=null,f.P=!0,cy(f,l)}t.Za=function(){this.C!=null&&(this.C=null,dl(this),Xd(this),kt(19))};function fl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function jy(l,d){var f=null;if(l.g==d){fl(l),Jd(l),l.g=null;var y=2}else if(Kd(l.h,d))f=d.D,gy(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var O=l.B;y=nl(),xt(y,new oy(y,f)),hl(l)}else My(l);else if(O=d.s,O==3||O==0&&0<d.X||!(y==1&&qb(l,d)||y==2&&Xd(l)))switch(f&&0<f.length&&(d=l.h,d.i=d.i.concat(f)),O){case 1:ri(l,5);break;case 4:ri(l,10);break;case 3:ri(l,6);break;default:ri(l,2)}}}function Fy(l,d){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*d}function ri(l,d){if(l.j.info("Error code "+d),d==2){var f=m(l.fb,l),y=l.Xa;const O=!y;y=new ni(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ol(y,"https"),ll(y),O?Fb(y.toString(),f):Ub(y.toString(),f)}else kt(2);l.G=0,l.l&&l.l.sa(d),Uy(l),Oy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Uy(l){if(l.G=0,l.ka=[],l.l){const d=yy(l.h);(d.length!=0||l.i.length!=0)&&(R(l.ka,d),R(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function $y(l,d,f){var y=f instanceof ni?zn(f):new ni(f);if(y.g!="")d&&(y.g=d+"."+y.g),al(y,y.s);else{var O=a.location;y=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var M=new ni(null);y&&ol(M,y),d&&(M.g=d),O&&al(M,O),f&&(M.l=f),y=M}return f=l.D,d=l.ya,f&&d&&Ie(y,f,d),Ie(y,"VER",l.la),ho(l,y),y}function zy(l,d,f){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Me(new ao({eb:f})):new Me(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function By(){}t=By.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pl(){}pl.prototype.g=function(l,d){return new Ht(l,d)};function Ht(l,d){ht.call(this),this.g=new Ny(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!g(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!g(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ji(this)}P(Ht,ht),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Yd(this.g)},Ht.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=jd(l),l=f);d.i.push(new Pb(d.Ya++,l)),d.G==3&&hl(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Yd(this.g),delete this.g,Ht.aa.N.call(this)};function Hy(l){Ud.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const f in d){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}P(Hy,Ud);function Wy(){$d.call(this),this.status=1}P(Wy,$d);function ji(l){this.g=l}P(ji,By),ji.prototype.ua=function(){xt(this.g,"a")},ji.prototype.ta=function(l){xt(this.g,new Hy(l))},ji.prototype.sa=function(l){xt(this.g,new Wy)},ji.prototype.ra=function(){xt(this.g,"b")},pl.prototype.createWebChannel=pl.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,fS=function(){return new pl},hS=function(){return nl()},dS=ei,ap={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},rl.NO_ERROR=0,rl.TIMEOUT=8,rl.HTTP_ERROR=6,ou=rl,ay.COMPLETE="complete",cS=ay,ny.EventType=Zs,Zs.OPEN="a",Zs.CLOSE="b",Zs.ERROR="c",Zs.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Co=ny,uS=ao,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,lS=Me}).apply(typeof Vl<"u"?Vl:typeof self<"u"?self:typeof window<"u"?window:{});const P0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Qm("@firebase/firestore");function So(){return Si.logLevel}function K(t,...e){if(Si.logLevel<=ae.DEBUG){const n=e.map(Jm);Si.debug(`Firestore (${qs}): ${t}`,...n)}}function ir(t,...e){if(Si.logLevel<=ae.ERROR){const n=e.map(Jm);Si.error(`Firestore (${qs}): ${t}`,...n)}}function xs(t,...e){if(Si.logLevel<=ae.WARN){const n=e.map(Jm);Si.warn(`Firestore (${qs}): ${t}`,...n)}}function Jm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw ir(e),new Error(e)}function Te(t,e){t||Z()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class XN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JN{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new pS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new _t(e)}}class ZN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new tO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Je(0,0))}static max(){return new te(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends wa{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const iO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends wa{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return iO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(xe.fromString(e))}static fromName(e){return new Y(xe.fromString(e).popFirst(5))}static empty(){return new Y(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new xe(e.slice()))}}function sO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new zr(i,Y.empty(),e)}function oO(t){return new zr(t.readTime,t.key,-1)}class zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zr(te.min(),Y.empty(),-1)}static max(){return new zr(te.max(),Y.empty(),-1)}}function aO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==lO)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ua(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zm.oe=-1;function nd(t){return t==null}function Wu(t){return t===0&&1/t==-1/0}function dO(t){return typeof t=="number"&&Number.isInteger(t)&&!Wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jl(this.root,e,this.comparator,!0)}}class jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new A0(this.data.getIterator())}getIteratorFrom(e){return new A0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class A0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yS("Invalid base64 string: "+s):s}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const hO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(Te(!!t),typeof t=="string"){let e=0;const n=hO.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ti(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tg(t){const e=t.mapValue.fields.__previous_value__;return eg(e)?tg(e):e}function Ea(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eg(t)?4:pO(t)?9007199254740991:10:Z()}function jn(t,e){if(t===e)return!0;const n=Ii(t);if(n!==Ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ea(t).isEqual(Ea(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Br(i.timestampValue),a=Br(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),a=He(s.doubleValue);return o===a?Wu(o)===Wu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(C0(o)!==C0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!jn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function Ta(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Ii(t),r=Ii(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=He(s.integerValue||s.doubleValue),u=He(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return N0(t.timestampValue,e.timestampValue);case 4:return N0(Ea(t),Ea(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ti(s),u=Ti(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=fe(a[c],u[c]);if(h!==0)return h}return fe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe(He(s.latitude),He(o.latitude));return a!==0?a:fe(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const h=Rs(a[c],u[c]);if(h)return h}return fe(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Fl.mapValue&&o===Fl.mapValue)return 0;if(s===Fl.mapValue)return 1;if(o===Fl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=fe(u[p],h[p]);if(m!==0)return m;const x=Rs(a[u[p]],c[h[p]]);if(x!==0)return x}return fe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function N0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Br(t),r=Br(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Ps(t){return lp(t)}function lp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=lp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${lp(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function O0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function up(t){return!!t&&"integerValue"in t}function ng(t){return!!t&&"arrayValue"in t}function D0(t){return!!t&&"nullValue"in t}function L0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function au(t){return!!t&&"mapValue"in t}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!au(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());au(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];au(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(Bo(this.value))}}function vS(t){const e=[];return Ni(t.fields,(n,r)=>{const i=new at([n]);if(au(r)){const s=vS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,te.min(),te.min(),te.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,te.min(),te.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,te.min(),te.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.position=e,this.inclusive=n}}function M0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function V0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n="asc"){this.field=e,this.dir=n}}function mO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{}class Ke extends _S{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yO(e,n,r):n==="array-contains"?new wO(e,r):n==="in"?new EO(e,r):n==="not-in"?new SO(e,r):n==="array-contains-any"?new TO(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vO(e,r):new _O(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Ii(this.value)===Ii(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends _S{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return wS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wS(t){return t.op==="and"}function ES(t){return gO(t)&&wS(t)}function gO(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function cp(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(ES(t))return t.filters.map(e=>cp(e)).join(",");{const e=t.filters.map(n=>cp(n)).join(",");return`${t.op}(${e})`}}function SS(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&jn(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&SS(o,i.filters[a]),!0):!1}(t,e):void Z()}function TS(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(TS).join(" ,")+"}"}(t):"Filter"}class yO extends Ke{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class vO extends Ke{constructor(e,n){super(e,"in",n),this.keys=IS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _O extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=IS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function IS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class wO extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ng(n)&&Ta(n.arrayValue,this.value)}}class EO extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ta(this.value.arrayValue,n)}}class SO extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ta(this.value.arrayValue,n)}}class TO extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ng(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ta(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function j0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new IO(t,e,n,r,i,s,o)}function rg(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.ue=n}return e.ue}function ig(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!V0(t.startAt,e.startAt)&&V0(t.endAt,e.endAt)}function dp(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bO(t,e,n,r,i,s,o,a){return new $a(t,e,n,r,i,s,o,a)}function sg(t){return new $a(t)}function F0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bS(t){return t.collectionGroup!==null}function Ho(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ku(s,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Ku(at.keyField(),r))}return e.ce}function Dn(t){const e=ne(t);return e.le||(e.le=xO(e,Ho(t))),e.le}function xO(t,e){if(t.limitType==="F")return j0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ku(i.field,s)});const n=t.endAt?new qu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qu(t.startAt.position,t.startAt.inclusive):null;return j0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hp(t,e){const n=t.filters.concat([e]);return new $a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function fp(t,e,n){return new $a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rd(t,e){return ig(Dn(t),Dn(e))&&t.limitType===e.limitType}function xS(t){return`${rg(Dn(t))}|lt:${t.limitType}`}function $i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>TS(i)).join(", ")}]`),nd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ps(i)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function id(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=M0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ho(r),i)||r.endAt&&!function(o,a,u){const c=M0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ho(r),i))}(t,e)}function kO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kS(t){return(e,n)=>{let r=!1;for(const i of Ho(t)){const s=RO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RO(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Rs(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=new De(Y.comparator);function sr(){return PO}const RS=new De(Y.comparator);function Ao(...t){let e=RS;for(const n of t)e=e.insert(n.key,n);return e}function PS(t){let e=RS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return Wo()}function CS(){return Wo()}function Wo(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const CO=new De(Y.comparator),AO=new ut(Y.comparator);function oe(...t){let e=AO;for(const n of t)e=e.add(n);return e}const NO=new ut(fe);function OO(){return NO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function NS(t){return{integerValue:""+t}}function OS(t,e){return dO(e)?NS(e):AS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this._=void 0}}function DO(t,e,n){return t instanceof Gu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&eg(s)&&(s=tg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Cs?LS(t,e):t instanceof Ia?MS(t,e):function(i,s){const o=DS(i,s),a=U0(o)+U0(i.Pe);return up(o)&&up(i.Pe)?NS(a):AS(i.serializer,a)}(t,e)}function LO(t,e,n){return t instanceof Cs?LS(t,e):t instanceof Ia?MS(t,e):n}function DS(t,e){return t instanceof ba?function(r){return up(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gu extends sd{}class Cs extends sd{constructor(e){super(),this.elements=e}}function LS(t,e){const n=VS(e);for(const r of t.elements)n.some(i=>jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends sd{constructor(e){super(),this.elements=e}}function MS(t,e){let n=VS(e);for(const r of t.elements)n=n.filter(i=>!jn(i,r));return{arrayValue:{values:n}}}class ba extends sd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function U0(t){return He(t.integerValue||t.doubleValue)}function VS(t){return ng(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n){this.field=e,this.transform=n}}function MO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Cs&&i instanceof Cs||r instanceof Ia&&i instanceof Ia?ks(r.elements,i.elements,jn):r instanceof ba&&i instanceof ba?jn(r.Pe,i.Pe):r instanceof Gu&&i instanceof Gu}(t.transform,e.transform)}class VO{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class od{}function FS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new og(t.key,on.none()):new za(t.key,t.data,on.none());{const n=t.data,r=jt.empty();let i=new ut(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new Kt(i.toArray()),on.none())}}function jO(t,e,n){t instanceof za?function(i,s,o){const a=i.value.clone(),u=z0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!lu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=z0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(US(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qo(t,e,n,r){return t instanceof za?function(s,o,a,u){if(!lu(s.precondition,o))return a;const c=s.value.clone(),h=B0(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,a,u){if(!lu(s.precondition,o))return a;const c=B0(s.fieldTransforms,u,o),h=o.data;return h.setAll(US(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return lu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function FO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function $0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ks(r,i,(s,o)=>MO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class za extends od{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends od{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function US(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function z0(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,LO(o,a,n[i]))}return r}function B0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DO(s,o,e))}return r}class og extends od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UO extends od{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=CS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=FS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>$0(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>$0(n,r))}}class ag{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return CO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ag(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,le;function HO(t){switch(t){default:return Z();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function $S(t){if(t===void 0)return ir("GRPC error has no .code"),j.UNKNOWN;switch(t){case Be.OK:return j.OK;case Be.CANCELLED:return j.CANCELLED;case Be.UNKNOWN:return j.UNKNOWN;case Be.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Be.INTERNAL:return j.INTERNAL;case Be.UNAVAILABLE:return j.UNAVAILABLE;case Be.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Be.NOT_FOUND:return j.NOT_FOUND;case Be.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Be.ABORTED:return j.ABORTED;case Be.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Be.DATA_LOSS:return j.DATA_LOSS;default:return Z()}}(le=Be||(Be={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new fi([4294967295,4294967295],0);function H0(t){const e=WO().encode(t),n=new aS;return n.update(e),new Uint8Array(n.digest())}function W0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fi([n,r],0),new fi([i,s],0)]}class lg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new No(`Invalid padding: ${n}`);if(r<0)throw new No(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new No(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new No(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(fi.fromNumber(r)));return i.compare(qO)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=H0(e),[r,i]=W0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new lg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=H0(e),[r,i]=W0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class No extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ad(te.min(),i,new De(fe),sr(),oe())}}class Ba{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ba(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class zS{constructor(e,n){this.targetId=e,this.me=n}}class BS{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class q0{constructor(){this.fe=0,this.ge=G0(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Ba(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=G0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class KO{constructor(e){this.Le=e,this.Be=new Map,this.ke=sr(),this.qe=K0(),this.Qe=new De(fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(dp(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,Et.newNoDocument(o,te.min()))}else Te(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ti(r).toUint8Array()}catch(u){if(u instanceof yS)return xs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new lg(o,i,s)}catch(u){return xs(u instanceof No?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&dp(a.target)){const u=new Y(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Et.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ad(e,n,this.Qe,this.ke,r);return this.ke=sr(),this.qe=K0(),this.Qe=new De(fe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new q0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new q0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function K0(){return new De(Y.comparator)}function G0(){return new De(Y.comparator)}const GO={asc:"ASCENDING",desc:"DESCENDING"},QO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YO={and:"AND",or:"OR"};class XO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pp(t,e){return t.useProto3Json||nd(e)?e:{value:e}}function Qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JO(t,e){return Qu(t,e.toTimestamp())}function Ln(t){return Te(!!t),te.fromTimestamp(function(n){const r=Br(n);return new Je(r.seconds,r.nanos)}(t))}function ug(t,e){return mp(t,e).canonicalString()}function mp(t,e){const n=function(i){return new xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WS(t){const e=xe.fromString(t);return Te(YS(e)),e}function gp(t,e){return ug(t.databaseId,e.path)}function Dh(t,e){const n=WS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(KS(n))}function qS(t,e){return ug(t.databaseId,e)}function ZO(t){const e=WS(t);return e.length===4?xe.emptyPath():KS(e)}function yp(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KS(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Q0(t,e,n){return{name:gp(t,e),fields:n.value.mapValue.fields}}function e2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Te(h===void 0||typeof h=="string"),Tt.fromBase64String(h||"")):(Te(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Tt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:$S(c.code);return new q(h,c.message||"")}(o);n=new BS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dh(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):te.min(),a=new jt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new uu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dh(t,r.document),s=r.readTime?Ln(r.readTime):te.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new uu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dh(t,r.document),s=r.removedTargetIds||[];n=new uu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new BO(i,s),a=r.targetId;n=new zS(a,o)}}return n}function t2(t,e){let n;if(e instanceof za)n={update:Q0(t,e.key,e.value)};else if(e instanceof og)n={delete:gp(t,e.key)};else if(e instanceof Yr)n={update:Q0(t,e.key,e.data),updateMask:c2(e.fieldMask)};else{if(!(e instanceof UO))return Z();n={verify:gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Cs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ba)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function n2(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(te.min())&&(o=Ln(s)),new VO(o,i.transformResults||[])}(n,e))):[]}function r2(t,e){return{documents:[qS(t,e.path)]}}function i2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qS(t,i);const s=function(c){if(c.length!==0)return QS(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:zi(m.field),direction:a2(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=pp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function s2(t){let e=ZO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const m=GS(p);return m instanceof wn&&ES(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Ku(Bi(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,nd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,x=p.values||[];return new qu(x,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,x=p.values||[];return new qu(x,m)}(n.endAt)),bO(e,i,o,s,a,"F",u,c)}function o2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bi(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bi(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bi(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bi(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Bi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>GS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function a2(t){return GO[t]}function l2(t){return QO[t]}function u2(t){return YO[t]}function zi(t){return{fieldPath:t.canonicalString()}}function Bi(t){return at.fromServerFormat(t.fieldPath)}function QS(t){return t instanceof Ke?function(n){if(n.op==="=="){if(L0(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NAN"}};if(D0(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(L0(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NOT_NAN"}};if(D0(n.value))return{unaryFilter:{field:zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(n.field),op:l2(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>QS(i));return r.length===1?r[0]:{compositeFilter:{op:u2(n.op),filters:r}}}(t):Z()}function c2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=Tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.ct=e}}function h2(t){const e=s2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(){this._n=new p2}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(zr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(zr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class p2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new As(0)}static Ln(){return new As(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&qo(r.mutation,i,Kt.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ao();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=sr();const o=Wo(),a=function(){return Wo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Yr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),qo(h.mutation,c,h.mutation.getFieldMask(),Je.now())):o.set(c.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new g2(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Wo();let i=new De((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Kt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=CS();h.forEach(m=>{if(!s.has(m)){const x=FS(n.get(m),r.get(m));x!==null&&p.set(m,x),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ci());let a=-1,u=s;return o.next(c=>F.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(h=>({batchId:a,changes:PS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,m){return new $a(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Et.newInvalidDocument(h)))});let a=Ao();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&qo(h.mutation,c,Kt.empty(),Je.now()),id(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:h2(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(){this.overlays=new De(Y.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ci(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ci(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return F.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zO(n,r));let s=this.hr.get(n);s===void 0&&(s=oe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.Pr=new ut(Ze.Ir),this.Tr=new ut(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Y(new xe([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Y(new xe([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=oe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Y.comparator(e.key,n.key)||fe(e.pr,n.pr)}static Er(e,n){return fe(e.pr,n.pr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ut(Ze.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $O(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(fe);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new Y(s),0);let a=new ut(fe);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),F.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.vr=e,this.docs=function(){return new De(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=sr();const o=n.path,a=new Y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||aO(oO(h),r)<=0||(i.has(h.key)||id(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new S2(this)}getSize(e){return F.resolve(this.size)}}class S2 extends m2{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.persistence=e,this.Mr=new Ks(n=>rg(n),ig),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cg,this.targetCount=0,this.Lr=As.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.Br={},this.overlays={},this.kr=new Zm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new T2(this),this.indexManager=new f2,this.remoteDocumentCache=function(i){return new E2(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new d2(n),this.$r=new v2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new w2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new b2(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class b2 extends uO{constructor(e){super(),this.currentSequenceNumber=e}}class dg{constructor(e){this.persistence=e,this.zr=new cg,this.jr=null}static Hr(e){return new dg(e)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=Y.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return DA()?8:cO(dt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new x2;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(So()<=ae.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",$i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(So()<=ae.DEBUG&&K("QueryEngine","Query:",$i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(So()<=ae.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",$i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):F.resolve())}ji(e,n){if(F0(n))return F.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fp(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,fp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return F0(n)||i.isEqual(te.min())?F.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?F.resolve(null):(So()<=ae.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$i(n)),this.es(e,o,n,sO(i,-1)).next(a=>a))})}Zi(e,n){let r=new ut(kS(e));return n.forEach((i,s)=>{id(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return So()<=ae.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",$i(n)),this.zi.getDocumentsMatchingQuery(e,n,zr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new De(fe),this.rs=new Ks(s=>rg(s),ig),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y2(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function P2(t,e,n,r){return new R2(t,e,n,r)}async function XS(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function C2(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,m=p.keys();let x=F.resolve();return m.forEach(P=>{x=x.next(()=>h.getEntry(u,P)).next(T=>{const R=c.docVersions.get(P);Te(R!==null),T.version.compareTo(R)<0&&(p.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),h.addEntry(T)))})}),x.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JS(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function A2(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,p)=>{const m=i.get(p);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,p)));let x=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(Tt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(h.resumeToken,r)),i=i.insert(p,x),function(T,R,v){return T.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,x,h)&&a.push(n.Qr.updateTargetData(s,x))});let u=sr(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(N2(s,o,e.documentUpdates).next(h=>{u=h.cs,c=h.ls})),!r.isEqual(te.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function N2(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=sr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function O2(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function D2(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function vp(t,e,n){const r=ne(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ua(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Y0(t,e,n){const r=ne(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=ne(u),m=p.rs.get(h);return m!==void 0?F.resolve(p.ns.get(m)):p.Qr.getTargetData(c,h)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(a=>(L2(r,kO(e),a),{documents:a,hs:s})))}function L2(t,e,n){let r=t.ss.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class X0{constructor(){this.activeTargetIds=OO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M2{constructor(){this.no=new X0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new X0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul=null;function Lh(){return Ul===null?Ul=function(){return 268435456+Math.round(2147483648*Math.random())}():Ul++,"0x"+Ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class U2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Lh(),u=this.vo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(h=>(K("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw xs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=j2[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Lh();return new Promise((o,a)=>{const u=new lS;u.setWithCredentials(!0),u.listenOnce(cS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ou.NO_ERROR:const h=u.getResponseJson();K(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ou.TIMEOUT:K(yt,`RPC '${e}' ${s} timed out`),a(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case ou.HTTP_ERROR:const p=u.getStatus();if(K(yt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const x=m==null?void 0:m.error;if(x&&x.status&&x.message){const P=function(R){const v=R.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(v)>=0?v:j.UNKNOWN}(x.status);a(new q(P,x.message))}else a(new q(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new q(j.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{K(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(yt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Lh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fS(),a=hS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new uS({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");K(yt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let m=!1,x=!1;const P=new F2({lo:R=>{x?K(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(K(yt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),K(yt,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},ho:()=>p.close()}),T=(R,v,g)=>{R.listen(v,w=>{try{g(w)}catch(N){setTimeout(()=>{throw N},0)}})};return T(p,Co.EventType.OPEN,()=>{x||(K(yt,`RPC '${e}' stream ${i} transport opened.`),P.mo())}),T(p,Co.EventType.CLOSE,()=>{x||(x=!0,K(yt,`RPC '${e}' stream ${i} transport closed`),P.po())}),T(p,Co.EventType.ERROR,R=>{x||(x=!0,xs(yt,`RPC '${e}' stream ${i} transport errored:`,R),P.po(new q(j.UNAVAILABLE,"The operation could not be completed")))}),T(p,Co.EventType.MESSAGE,R=>{var v;if(!x){const g=R.data[0];Te(!!g);const w=g,N=w.error||((v=w[0])===null||v===void 0?void 0:v.error);if(N){K(yt,`RPC '${e}' stream ${i} received error:`,N);const D=N.status;let L=function(E){const I=Be[E];if(I!==void 0)return $S(I)}(D),b=N.message;L===void 0&&(L=j.INTERNAL,b="Unknown error status: "+D+" with message "+N.message),x=!0,P.po(new q(L,b)),p.close()}else K(yt,`RPC '${e}' stream ${i} received:`,g),P.yo(g)}}),T(a,dS.STAT_EVENT,R=>{R.stat===ap.PROXY?K(yt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===ap.NOPROXY&&K(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function Mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){return new XO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ZS(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $2 extends eT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=e2(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Ln(o.readTime):te.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=yp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=dp(u)?{documents:r2(s,u)}:{query:i2(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=HS(s,o.resumeToken);const c=pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=Qu(s,o.snapshotVersion.toTimestamp());const c=pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=o2(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.i_(n)}}class z2 extends eT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=n2(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.A_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=yp(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>t2(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,mp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(j.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,mp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class H2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ir(n),this.y_=!1):K("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Oi(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.M_.add(4),await Ha(c),c.N_.set("Unknown"),c.M_.delete(4),await ud(c)}(this))})}),this.N_=new H2(r,i)}}async function ud(t){if(Oi(t))for(const e of t.x_)await e(!0)}async function Ha(t){for(const e of t.x_)await e(!1)}function tT(t,e){const n=ne(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),gg(n)?mg(n):Gs(n).Xo()&&pg(n,e))}function fg(t,e){const n=ne(t),r=Gs(n);n.F_.delete(e),r.Xo()&&nT(n,e),n.F_.size===0&&(r.Xo()?r.n_():Oi(n)&&n.N_.set("Unknown"))}function pg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).P_(e)}function nT(t,e){t.L_.xe(e),Gs(t).I_(e)}function mg(t){t.L_=new KO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.N_.w_()}function gg(t){return Oi(t)&&!Gs(t).Zo()&&t.F_.size>0}function Oi(t){return ne(t).M_.size===0}function rT(t){t.L_=void 0}async function q2(t){t.N_.set("Online")}async function K2(t){t.F_.forEach((e,n)=>{pg(t,e)})}async function G2(t,e){rT(t),gg(t)?(t.N_.D_(e),mg(t)):t.N_.set("Unknown")}async function Q2(t,e,n){if(t.N_.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yu(t,r)}else if(e instanceof uu?t.L_.Ke(e):e instanceof zS?t.L_.He(e):t.L_.We(e),!n.isEqual(te.min()))try{const r=await JS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.F_.get(u);if(!h)return;s.F_.set(u,h.withResumeToken(Tt.EMPTY_BYTE_STRING,h.snapshotVersion)),nT(s,u);const p=new xr(h.target,u,c,h.sequenceNumber);pg(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Yu(t,r)}}async function Yu(t,e,n){if(!Ua(e))throw e;t.M_.add(1),await Ha(t),t.N_.set("Offline"),n||(n=()=>JS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await ud(t)})}function iT(t,e){return e().catch(n=>Yu(t,n,e))}async function cd(t){const e=ne(t),n=Hr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Y2(e);)try{const i=await O2(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,X2(e,i)}catch(i){await Yu(e,i)}sT(e)&&oT(e)}function Y2(t){return Oi(t)&&t.v_.length<10}function X2(t,e){t.v_.push(e);const n=Hr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function sT(t){return Oi(t)&&!Hr(t).Zo()&&t.v_.length>0}function oT(t){Hr(t).start()}async function J2(t){Hr(t).V_()}async function Z2(t){const e=Hr(t);for(const n of t.v_)e.d_(n.mutations)}async function eD(t,e,n){const r=t.v_.shift(),i=ag.from(r,e,n);await iT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cd(t)}async function tD(t,e){e&&Hr(t).E_&&await async function(r,i){if(function(o){return HO(o)&&o!==j.ABORTED}(i.code)){const s=r.v_.shift();Hr(r).t_(),await iT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cd(r)}}(t,e),sT(t)&&oT(t)}async function Z0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Oi(n);n.M_.add(3),await Ha(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await ud(n)}async function nD(t,e){const n=ne(t);e?(n.M_.delete(2),await ud(n)):e||(n.M_.add(2),await Ha(n),n.N_.set("Unknown"))}function Gs(t){return t.B_||(t.B_=function(n,r,i){const s=ne(n);return s.f_(),new $2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:q2.bind(null,t),To:K2.bind(null,t),Ao:G2.bind(null,t),h_:Q2.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),gg(t)?mg(t):t.N_.set("Unknown")):(await t.B_.stop(),rT(t))})),t.B_}function Hr(t){return t.k_||(t.k_=function(n,r,i){const s=ne(n);return s.f_(),new z2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:J2.bind(null,t),Ao:tD.bind(null,t),R_:Z2.bind(null,t),A_:eD.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await cd(t)):(await t.k_.stop(),t.v_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new yg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(t,e){if(ir("AsyncQueue",`${e}: ${t}`),Ua(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.q_=new De(Y.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Z():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ns{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ns(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class iD{constructor(){this.queries=new Ks(e=>xS(e),rd),this.onlineState="Unknown",this.z_=new Set}}async function aT(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new rD,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=vg(o,`Initialization of query '${$i(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&_g(n)}async function lT(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sD(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&_g(n)}function oD(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function _g(t){t.z_.forEach(e=>{e.next()})}var _p,t_;(t_=_p||(_p={})).J_="default",t_.Cache="cache";class uT{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==_p.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.key=e}}class dT{constructor(e){this.key=e}}class aD{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=kS(e),this.Ta=new cs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new e_,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const m=i.get(h),x=id(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),T=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let R=!1;m&&x?m.data.isEqual(x.data)?P!==T&&(r.track({type:3,doc:x}),R=!0):this.Ra(m,x)||(r.track({type:2,doc:x}),R=!0,(u&&this.Ia(x,u)>0||c&&this.Ia(x,c)<0)&&(a=!0)):!m&&x?(r.track({type:0,doc:x}),R=!0):m&&!x&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(x?(o=o.add(x),s=T?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(x,P){const T=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return T(x)-T(P)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Ns(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new e_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new dT(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new cT(r))}),n}pa(e){this.la=e.hs,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ns.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class lD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uD{constructor(e){this.key=e,this.wa=!1}}class cD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ks(a=>xS(a),rd),this.Da=new Map,this.Ca=new Set,this.va=new De(Y.comparator),this.Fa=new Map,this.Ma=new cg,this.xa={},this.Oa=new Map,this.Na=As.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function dD(t,e,n=!0){const r=yT(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await hT(r,e,n,!0),i}async function hD(t,e){const n=yT(t);await hT(n,e,!0,!1)}async function hT(t,e,n,r){const i=await D2(t.localStore,Dn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await fD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&tT(t.remoteStore,i),a}async function fD(t,e,n,r,i){t.Ba=(p,m,x)=>async function(T,R,v,g){let w=R.view.da(v);w.Xi&&(w=await Y0(T.localStore,R.query,!1).then(({documents:b})=>R.view.da(b,w)));const N=g&&g.targetChanges.get(R.targetId),D=g&&g.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(w,T.isPrimaryClient,N,D);return r_(T,R.targetId,L.fa),L.snapshot}(t,p,m,x);const s=await Y0(t.localStore,e,!0),o=new aD(e,s.hs),a=o.da(s.documents),u=Ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);r_(t,n,c.fa);const h=new lD(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function pD(t,e,n){const r=ne(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!rd(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&fg(r.remoteStore,i.targetId),wp(r,i.targetId)}).catch(Fa)):(wp(r,i.targetId),await vp(r.localStore,i.targetId,!0))}async function mD(t,e){const n=ne(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fg(n.remoteStore,r.targetId))}async function gD(t,e,n){const r=TD(t);try{const i=await function(o,a){const u=ne(o),c=Je.now(),h=a.reduce((x,P)=>x.add(P.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let P=sr(),T=oe();return u.os.getEntries(x,h).next(R=>{P=R,P.forEach((v,g)=>{g.isValidDocument()||(T=T.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,P)).next(R=>{p=R;const v=[];for(const g of a){const w=FO(g,p.get(g.key).overlayedDocument);w!=null&&v.push(new Yr(g.key,w,vS(w.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(x,c,v,a)}).next(R=>{m=R;const v=R.applyToLocalDocumentSet(p,T);return u.documentOverlayCache.saveOverlays(x,R.batchId,v)})}).then(()=>({batchId:m.batchId,changes:PS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new De(fe)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Wa(r,i.changes),await cd(r.remoteStore)}catch(i){const s=vg(i,"Failed to persist write");n.reject(s)}}async function fT(t,e){const n=ne(t);try{const r=await A2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Te(o.wa):i.removedDocuments.size>0&&(Te(o.wa),o.wa=!1))}),await Wa(n,r,e)}catch(r){await Fa(r)}}function n_(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const m of p.U_)m.j_(a)&&(c=!0)}),c&&_g(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yD(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new De(Y.comparator);o=o.insert(s,Et.newNoDocument(s,te.min()));const a=oe().add(s),u=new ad(te.min(),new Map,new De(fe),o,a);await fT(r,u),r.va=r.va.remove(s),r.Fa.delete(e),wg(r)}else await vp(r.localStore,e,!1).then(()=>wp(r,e,n)).catch(Fa)}async function vD(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await C2(n.localStore,e);mT(n,r,null),pT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wa(n,i)}catch(i){await Fa(i)}}async function _D(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(Te(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);mT(r,e,n),pT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wa(r,i)}catch(i){await Fa(i)}}function pT(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function mT(t,e,n){const r=ne(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||gT(t,r)})}function gT(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(fg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),wg(t))}function r_(t,e,n){for(const r of n)r instanceof cT?(t.Ma.addReference(r.key,e),wD(t,r)):r instanceof dT?(K("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||gT(t,r.key)):Z()}function wD(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(K("SyncEngine","New document in limbo: "+n),t.Ca.add(r),wg(t))}function wg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(xe.fromString(e)),r=t.Na.next();t.Fa.set(r,new uD(n)),t.va=t.va.insert(n,r),tT(t.remoteStore,new xr(Dn(sg(n.path)),r,"TargetPurposeLimboResolution",Zm.oe))}}async function Wa(t,e,n){const r=ne(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){i.push(c);const h=hg.Ki(u.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.qi,x=>h.persistence.referenceDelegate.addReference(p,m.targetId,x)).next(()=>F.forEach(m.Qi,x=>h.persistence.referenceDelegate.removeReference(p,m.targetId,x)))))}catch(p){if(!Ua(p))throw p;K("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const x=h.ns.get(m),P=x.snapshotVersion,T=x.withLastLimboFreeSnapshotVersion(P);h.ns=h.ns.insert(m,T)}}}(r.localStore,s))}async function ED(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await XS(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new q(j.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wa(n,r.us)}}function SD(t,e){const n=ne(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function yT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yD.bind(null,e),e.Sa.h_=sD.bind(null,e.eventManager),e.Sa.ka=oD.bind(null,e.eventManager),e}function TD(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_D.bind(null,e),e}class i_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ld(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P2(this.persistence,new k2,e.initialUser,this.serializer)}createPersistence(e){return new I2(dg.Hr,this.serializer)}createSharedClientState(e){return new M2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ID{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>n_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ED.bind(null,this.syncEngine),await nD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iD}()}createDatastore(e){const n=ld(e.databaseInfo.databaseId),r=function(s){return new U2(s)}(e.databaseInfo);return function(s,o,a,u){return new B2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new W2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>n_(this.syncEngine,n,0),function(){return J0.D()?new J0:new V2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const p=new cD(i,s,o,a,u,c);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ne(r);K("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ha(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=mS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{K("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(K("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function s_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kD(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Z0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Z0(e.remoteStore,i)),t._onlineComponents=e}function xD(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xD(n))throw n;xs("Error using user provided cache. Falling back to memory cache: "+n),await Vh(t,new i_)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Vh(t,new i_);return t._offlineComponents}async function _T(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await s_(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await s_(t,new ID))),t._onlineComponents}function RD(t){return _T(t).then(e=>e.syncEngine)}async function wT(t){const e=await _T(t),n=e.eventManager;return n.onListen=dD.bind(null,e.syncEngine),n.onUnlisten=pD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=hD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mD.bind(null,e.syncEngine),n}function PD(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new vT({next:m=>{o.enqueueAndForget(()=>lT(s,p));const x=m.docs.has(a);!x&&m.fromCache?c.reject(new q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&m.fromCache&&u&&u.source==="server"?c.reject(new q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new uT(sg(a.path),h,{includeMetadataChanges:!0,ra:!0});return aT(s,p)}(await wT(t),t.asyncQueue,e,n,r)),r.promise}function CD(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new vT({next:m=>{o.enqueueAndForget(()=>lT(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new uT(a,h,{includeMetadataChanges:!0,ra:!0});return aT(s,p)}(await wT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AD(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function a_(t){if(!Y.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function l_(t){if(Y.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dd(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ET((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YN;switch(r.type){case"firstParty":return new eO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=o_.get(n);r&&(K("ComponentProvider","Removing Datastore"),o_.delete(n),r.terminate())}(this),Promise.resolve()}}function ND(t,e,n,r={}){var i;const s=(t=En(t,hd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=_t.MOCK_USER;else{a=tS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new _t(c)}t._authCredentials=new XN(new pS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class jr extends Qs{constructor(e,n,r){super(e,n,sg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new Y(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function qa(t,e,...n){if(t=ze(t),ST("collection","path",e),t instanceof hd){const r=xe.fromString(e,...n);return l_(r),new jr(t,null,r)}{if(!(t instanceof Ot||t instanceof jr))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return l_(r),new jr(t.firestore,null,r)}}function At(t,e,...n){if(t=ze(t),arguments.length===1&&(e=mS.newId()),ST("doc","path",e),t instanceof hd){const r=xe.fromString(e,...n);return a_(r),new Ot(t,null,new Y(r))}{if(!(t instanceof Ot||t instanceof jr))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return a_(r),new Ot(t.firestore,t instanceof jr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ZS(this,"async_queue_retry"),this.hu=()=>{const n=Mh();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Jn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ua(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ir("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=yg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Z()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Di extends hd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new OD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TT(this),this._firestoreClient.terminate()}}function fd(t,e){const n=typeof t=="object"?t:Xm(),r=typeof t=="string"?t:"(default)",i=td(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=J1("firestore");s&&ND(i,...s)}return i}function Eg(t){return t._firestoreClient||TT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new fO(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ET(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new bD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Os(Tt.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Os(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=/^__.*__$/;class LD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new za(e,this.data,n,this.fieldTransforms)}}class IT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class md{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Xu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(bT(this.fu)&&DD.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class MD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ld(e)}Fu(e,n,r,i=!1){return new md({fu:e,methodName:n,vu:r,path:at.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gd(t){const e=t._freezeSettings(),n=ld(t._databaseId);return new MD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xT(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);bg("Data must be an object, but it was:",o,r);const a=kT(r,o);let u,c;if(s.merge)u=new Kt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const m=Ep(e,p,n);if(!o.contains(m))throw new q(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);PT(h,m)||h.push(m)}u=new Kt(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new LD(new jt(a),u,c)}class yd extends Ka{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yd}}function VD(t,e,n){return new md({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Tg extends Ka{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=VD(this,e,!0),r=this.Mu.map(s=>Ys(s,n)),i=new Cs(r);return new jS(e.path,i)}isEqual(e){return e instanceof Tg&&va(this.Mu,e.Mu)}}class Ig extends Ka{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new ba(e.serializer,OS(e.serializer,this.xu));return new jS(e.path,n)}isEqual(e){return e instanceof Ig&&this.xu===e.xu}}function jD(t,e,n,r){const i=t.Fu(1,e,n);bg("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();Ni(r,(u,c)=>{const h=xg(e,u,n);c=ze(c);const p=i.Su(h);if(c instanceof yd)s.push(h);else{const m=Ys(c,p);m!=null&&(s.push(h),o.set(h,m))}});const a=new Kt(s);return new IT(o,a,i.fieldTransforms)}function FD(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Ep(e,r,n)],u=[i];if(s.length%2!=0)throw new q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Ep(e,s[m])),u.push(s[m+1]);const c=[],h=jt.empty();for(let m=a.length-1;m>=0;--m)if(!PT(c,a[m])){const x=a[m];let P=u[m];P=ze(P);const T=o.Su(x);if(P instanceof yd)c.push(x);else{const R=Ys(P,T);R!=null&&(c.push(x),h.set(x,R))}}const p=new Kt(c);return new IT(h,p,o.fieldTransforms)}function UD(t,e,n,r=!1){return Ys(n,t.Fu(r?4:3,e))}function Ys(t,e){if(RT(t=ze(t)))return bg("Unsupported field value:",e,t),kT(t,e);if(t instanceof Ka)return function(r,i){if(!bT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Ys(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:Qu(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qu(i.serializer,s)}}if(r instanceof Sg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Os)return{bytesValue:HS(i.serializer,r._byteString)};if(r instanceof Ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ug(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${dd(r)}`)}(t,e)}function kT(t,e){const n={};return gS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,(r,i)=>{const s=Ys(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Sg||t instanceof Os||t instanceof Ot||t instanceof Ka)}function bg(t,e,n){if(!RT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dd(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Ep(t,e,n){if((e=ze(e))instanceof pd)return e._internalPath;if(typeof e=="string")return xg(t,e);throw Xu("Field path arguments must be of type string or ",t,!1,void 0,n)}const $D=new RegExp("[~\\*/\\[\\]]");function xg(t,e,n){if(e.search($D)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pd(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(j.INVALID_ARGUMENT,a+t+u)}function PT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zD extends CT{data(){return super.data()}}function kg(t,e){return typeof e=="string"?xg(t,e):e instanceof pd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rg{}class HD extends Rg{}function WD(t,e,...n){let r=[];e instanceof Rg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Pg).length,a=s.filter(u=>u instanceof vd).length;if(o>1||o>0&&a>0)throw new q(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vd extends HD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vd(e,n,r)}_apply(e){const n=this._parse(e);return AT(e._query,n),new Qs(e.firestore,e.converter,hp(e._query,n))}_parse(e){const n=gd(e.firestore);return function(s,o,a,u,c,h,p){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){d_(p,h);const x=[];for(const P of p)x.push(c_(u,s,P));m={arrayValue:{values:x}}}else m=c_(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||d_(p,h),m=UD(a,o,p,h==="in"||h==="not-in");return Ke.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qD(t,e,n){const r=e,i=kg("where",t);return vd._create(i,r,n)}class Pg extends Rg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:wn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)AT(o,u),o=hp(o,u)}(e._query,n),new Qs(e.firestore,e.converter,hp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function c_(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new q(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bS(e)&&n.indexOf("/")!==-1)throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!Y.isDocumentKey(r))throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return O0(t,new Y(r))}if(n instanceof Ot)return O0(t,n._key);throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dd(n)}.`)}function d_(t,e){if(!Array.isArray(t)||t.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class KD{convertValue(e,n="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sg(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ea(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Te(YS(r));const i=new Sa(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OT extends CT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cu extends OT{data(e={}){return super.data(e)}}class GD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cu(this._firestore,this._userDataWriter,r.key,r,new Oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Oo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Oo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:QD(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){t=En(t,Ot);const e=En(t.firestore,Di);return PD(Eg(e),t._key).then(n=>XD(e,t,n))}class DT extends KD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function wd(t){t=En(t,Qs);const e=En(t.firestore,Di),n=Eg(e),r=new DT(e);return BD(t._query),CD(n,t._query).then(i=>new GD(e,r,t,i))}function Sp(t,e,n){t=En(t,Ot);const r=En(t.firestore,Di),i=NT(t.converter,e);return Ed(r,[xT(gd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function ds(t,e,n,...r){t=En(t,Ot);const i=En(t.firestore,Di),s=gd(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof pd?FD(s,"updateDoc",t._key,e,n,r):jD(s,"updateDoc",t._key,e),Ed(i,[o.toMutation(t._key,on.exists(!0))])}function xa(t){return Ed(En(t.firestore,Di),[new og(t._key,on.none())])}function YD(t,e){const n=En(t.firestore,Di),r=At(t),i=NT(t.converter,e);return Ed(n,[xT(gd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function Ed(t,e){return function(r,i){const s=new Jn;return r.asyncQueue.enqueueAndForget(async()=>gD(await RD(r),i,s)),s.promise}(Eg(t),e)}function XD(t,e,n){const r=n.docs.get(e._key),i=new DT(t);return new OT(t,i,e._key,r,new Oo(n.hasPendingWrites,n.fromCache),e.converter)}function JD(...t){return new Tg("arrayUnion",t)}function LT(t){return new Ig("increment",t)}(function(e,n=!0){(function(i){qs=i})(Ai),Ei(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Di(new JN(r.getProvider("auth-internal")),new nO(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),On(P0,"4.6.3",e),On(P0,"4.6.3","esm2017")})();function Cg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function MT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZD=MT,VT=new Va("auth","Firebase",MT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Qm("@firebase/auth");function eL(t,...e){Ju.logLevel<=ae.WARN&&Ju.warn(`Auth (${Ai}): ${t}`,...e)}function du(t,...e){Ju.logLevel<=ae.ERROR&&Ju.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw Ag(t,...e)}function Mn(t,...e){return Ag(t,...e)}function jT(t,e,n){const r=Object.assign(Object.assign({},ZD()),{[e]:n});return new Va("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return jT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ag(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VT.create(t,...e)}function J(t,e,...n){if(!t)throw Ag(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw du(e),new Error(e)}function or(t,e){t||Gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tL(){return h_()==="http:"||h_()==="https:"}function h_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tL()||AA()||"connection"in navigator)?navigator.onLine:!0}function rL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=PA()||NA()}get(){return nL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=new Ga(3e4,6e4);function Xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jr(t,e,n,r,i={}){return UT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ja(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),FT.fetch()($T(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function UT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iL),e);try{const i=new aL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $l(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $l(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jT(t,h,c);Sn(t,h)}}catch(i){if(i instanceof Fn)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function Qa(t,e,n,r,i={}){const s=await Jr(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $T(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ng(t.config,i):`${t.config.apiScheme}://${i}`}function oL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mn(this.auth,"network-request-failed")),sL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mn(t,e,r);return i.customData._tokenResponse=n,i}function f_(t){return t!==void 0&&t.enterprise!==void 0}class lL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uL(t,e){return Jr(t,"GET","/v2/recaptchaConfig",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function zT(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dL(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=Og(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ko(jh(i.auth_time)),issuedAtTime:Ko(jh(i.iat)),expirationTime:Ko(jh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jh(t){return Number(t)*1e3}function Og(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const i=Y1(n);return i?JSON.parse(i):(du("Failed to decode base64 JWT payload"),null)}catch(i){return du("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p_(t){const e=Og(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&hL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ka(t,zT(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BT(s.providerUserInfo):[],a=mL(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ip(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function pL(t){const e=ze(t);await Zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BT(t){return t.map(e=>{var{providerId:n}=e,r=Cg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e){const n=await UT(t,{},async()=>{const r=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$T(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",FT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yL(t,e){return Jr(t,"POST","/v2/accounts:revokeToken",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=p_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ip(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ka(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dL(this,e)}reload(){return pL(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await ka(this,cL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:N,isAnonymous:D,providerData:L,stsTokenManager:b}=n;J(w&&b,e,"internal-error");const S=hs.fromJSON(this.name,b);J(typeof w=="string",e,"internal-error"),hr(p,e.name),hr(m,e.name),J(typeof N=="boolean",e,"internal-error"),J(typeof D=="boolean",e,"internal-error"),hr(x,e.name),hr(P,e.name),hr(T,e.name),hr(R,e.name),hr(v,e.name),hr(g,e.name);const E=new Qn({uid:w,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:D,photoURL:P,phoneNumber:x,tenantId:T,stsTokenManager:S,createdAt:v,lastLoginAt:g});return L&&Array.isArray(L)&&(E.providerData=L.map(I=>Object.assign({},I))),R&&(E._redirectEventId=R),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?BT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new hs;a.updateFromIdToken(r);const u=new Qn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ip(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Map;function Yn(t){or(t instanceof Function,"Expected a class definition");let e=m_.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HT.type="NONE";const g_=HT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Yn(g_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Yn(g_);const o=hu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Qn._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QT(e))return"Blackberry";if(YT(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||qT(e))&&!e.includes("edge/"))return"Chrome";if(GT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WT(t=dt()){return/firefox\//i.test(t)}function Dg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qT(t=dt()){return/crios\//i.test(t)}function KT(t=dt()){return/iemobile/i.test(t)}function GT(t=dt()){return/android/i.test(t)}function QT(t=dt()){return/blackberry/i.test(t)}function YT(t=dt()){return/webos/i.test(t)}function Sd(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vL(t=dt()){var e;return Sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _L(){return OA()&&document.documentMode===10}function XT(t=dt()){return Sd(t)||GT(t)||YT(t)||QT(t)||/windows phone/i.test(t)||KT(t)}function wL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e=[]){let n;switch(t){case"Browser":n=y_(dt());break;case"Worker":n=`${y_(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",Xr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=6;class IL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v_(this),this.idTokenSubscription=new v_(this),this.beforeStateQueue=new EL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zT(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(Zn(this));const n=e?ze(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SL(this),n=new IL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return ze(t)}class v_{constructor(e){this.auth=e,this.observer=null,this.addObserver=$A(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xL(t){Td=t}function ZT(t){return Td.loadJS(t)}function kL(){return Td.recaptchaEnterpriseScript}function RL(){return Td.gapiScript}function PL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const CL="recaptcha-enterprise",AL="NO_RECAPTCHA";class NL{constructor(e){this.type=CL,this.auth=Li(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uL(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new lL(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;f_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(AL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&f_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=kL();u.length!==0&&(u+=a),ZT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function __(t,e,n,r=!1){const i=new NL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await __(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await __(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t,e){const n=td(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(va(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function DL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function LL(t,e,n){const r=Li(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=eI(e),{host:o,port:a}=ML(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),VL()}function eI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ML(t){const e=eI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:w_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:w_(o)}}}function w_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function jL(t,e){return Jr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t,e){return Qa(t,"POST","/v1/accounts:signInWithPassword",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}async function $L(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,n,"signInWithPassword",FL);case"emailLink":return UL(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bp(e,r,"signUpPassword",jL);case"emailLink":return $L(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL="http://localhost";class bi extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:zL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HL(t){const e=Ro(Po(t)).link,n=e?Ro(Po(e)).deep_link_id:null,r=Ro(Po(t)).deep_link_id;return(r?Ro(Po(r)).link:null)||r||n||e||t}class Mg{constructor(e){var n,r,i,s,o,a;const u=Ro(Po(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=BL((i=u.mode)!==null&&i!==void 0?i:null);J(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=HL(e);try{return new Mg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return Ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mg.parseLink(n);return J(r,"argument-error"),Ra._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends tI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ya{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ya{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ya{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Er.credential(n,r)}catch{return null}}}Er.TWITTER_SIGN_IN_METHOD="twitter.com";Er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WL(t,e){return Qa(t,"POST","/v1/accounts:signUp",Xr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=E_(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=E_(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function E_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ec(e,n,r,i)}}function nI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(t,s,e,r):s})}async function qL(t,e,n=!1){const r=await ka(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await ka(t,nI(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Og(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e,n=!1){if(Rn(t.app))return Promise.reject(Zn(t));const r="signIn",i=await nI(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function GL(t,e){return rI(Li(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t){const e=Li(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QL(t,e,n){if(Rn(t.app))return Promise.reject(Zn(t));const r=Li(t),o=await bp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WL).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iI(t),u}),a=await xi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function YL(t,e,n){return Rn(t.app)?Promise.reject(Zn(t)):GL(ze(t),Xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iI(t),r})}function XL(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function JL(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function sI(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}const tc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(){const t=dt();return Dg(t)||Sd(t)}const eM=1e3,tM=10;class aI extends oI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZL()&&wL(),this.fallbackToPolling=XT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_L()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aI.type="LOCAL";const nM=aI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI extends oI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lI.type="SESSION";const uI=lI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Id(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await rM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Id.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Vg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function sM(t){Vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function oM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lM(){return cI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="firebaseLocalStorageDb",uM=1,nc="firebaseLocalStorage",hI="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bd(t,e){return t.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function cM(){const t=indexedDB.deleteDatabase(dI);return new Xa(t).toPromise()}function xp(){const t=indexedDB.open(dI,uM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nc,{keyPath:hI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nc)?e(r):(r.close(),await cM(),e(await xp()))})})}async function S_(t,e,n){const r=bd(t,!0).put({[hI]:e,value:n});return new Xa(r).toPromise()}async function dM(t,e){const n=bd(t,!1).get(e),r=await new Xa(n).toPromise();return r===void 0?null:r.value}function T_(t,e){const n=bd(t,!0).delete(e);return new Xa(n).toPromise()}const hM=800,fM=3;class fI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Id._getInstance(lM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oM(),!this.activeServiceWorker)return;this.sender=new iM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xp();return await S_(e,tc,"1"),await T_(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>S_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bd(i,!1).getAll();return new Xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fI.type="LOCAL";const pM=fI;new Ga(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(t,e){return e?Yn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gM(t){return rI(t.auth,new jg(t),t.bypassAuthState)}function yM(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),KL(n,new jg(t),t.bypassAuthState)}async function vM(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),qL(n,new jg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gM;case"linkViaPopup":case"linkViaRedirect":return vM;case"reauthViaPopup":case"reauthViaRedirect":return yM;default:Sn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=new Ga(2e3,1e4);class ns extends pI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_M.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM="pendingRedirect",fu=new Map;class EM extends pI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await SM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SM(t,e){const n=bM(e),r=IM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TM(t,e){fu.set(t._key(),e)}function IM(t){return Yn(t._redirectPersistence)}function bM(t){return hu(wM,t.config.apiKey,t.name)}async function xM(t,e,n=!1){if(Rn(t.app))return Promise.reject(Zn(t));const r=Li(t),i=mM(r,e),o=await new EM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=10*60*1e3;class RM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!mI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kM&&this.cachedEventUids.clear(),this.cachedEventUids.has(I_(e))}saveEventToCache(e){this.cachedEventUids.add(I_(e)),this.lastProcessedEventTime=Date.now()}}function I_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CM(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NM=/^https?/;async function OM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CM(t);for(const n of e)try{if(DM(n))return}catch{}Sn(t,"unauthorized-domain")}function DM(t){const e=Tp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NM.test(n))return!1;if(AM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=new Ga(3e4,6e4);function b_(){const t=Vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MM(t){return new Promise((e,n)=>{var r,i,s;function o(){b_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{b_(),n(Mn(t,"network-request-failed"))},timeout:LM.get()})}if(!((i=(r=Vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vn().gapi)===null||s===void 0)&&s.load)o();else{const a=PL("iframefcb");return Vn()[a]=()=>{gapi.load?o():n(Mn(t,"network-request-failed"))},ZT(`${RL()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw pu=null,e})}let pu=null;function VM(t){return pu=pu||MM(t),pu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=new Ga(5e3,15e3),FM="__/auth/iframe",UM="emulator/auth/iframe",$M={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BM(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ng(e,UM):`https://${t.config.authDomain}/${FM}`,r={apiKey:e.apiKey,appName:t.name,v:Ai},i=zM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ja(r).slice(1)}`}async function HM(t){const e=await VM(t),n=Vn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:BM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$M,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mn(t,"network-request-failed"),a=Vn().setTimeout(()=>{s(o)},jM.get());function u(){Vn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qM=500,KM=600,GM="_blank",QM="http://localhost";class x_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YM(t,e,n,r=qM,i=KM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},WM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=dt().toLowerCase();n&&(a=qT(c)?GM:n),WT(c)&&(e=e||QM,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[x,P])=>`${m}${x}=${P},`,"");if(vL(c)&&a!=="_self")return XM(e||"",a),new x_(null);const p=window.open(e||"",a,h);J(p,t,"popup-blocked");try{p.focus()}catch{}return new x_(p)}function XM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM="__/auth/handler",ZM="emulator/auth/handler",eV=encodeURIComponent("fac");async function k_(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ai,eventId:i};if(e instanceof tI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Ya){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${eV}=${encodeURIComponent(u)}`:"";return`${tV(t)}?${ja(a).slice(1)}${c}`}function tV({config:t}){return t.emulator?Ng(t,ZM):`https://${t.authDomain}/${JM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="webStorageSupport";class nV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uI,this._completeRedirectFn=xM,this._overrideRedirectResult=TM}async _openPopup(e,n,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await k_(e,n,r,Tp(),i);return YM(e,o,Vg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await k_(e,n,r,Tp(),i);return sM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HM(e),r=new RM(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fh,{type:Fh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fh];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XT()||Dg()||Sd()}}const rV=nV;var R_="@firebase/auth",P_="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oV(t){Ei(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JT(t)},c=new bL(r,i,s,u);return DL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new $r("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(r=>new iV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(R_,P_,sV(t)),On(R_,P_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV=5*60,lV=eS("authIdTokenMaxAge")||aV;let C_=null;const uV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lV)return;const i=n==null?void 0:n.token;C_!==i&&(C_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zr(t=Xm()){const e=td(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OL(t,{popupRedirectResolver:rV,persistence:[pM,nM,uI]}),r=eS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=uV(s.toString());JL(n,o,()=>o(n.currentUser)),XL(n,a=>o(a))}}const i=X1("auth");return i&&LL(n,`http://${i}`),n}function cV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oV("Browser");var gI={},yI={},xd={},vI={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(vI);var dV="Expected a function",A_=NaN,hV="[object Symbol]",fV=/^\s+|\s+$/g,pV=/^[-+]0x[0-9a-f]+$/i,mV=/^0b[01]+$/i,gV=/^0o[0-7]+$/i,yV=parseInt,vV=typeof gl=="object"&&gl&&gl.Object===Object&&gl,_V=typeof self=="object"&&self&&self.Object===Object&&self,wV=vV||_V||Function("return this")(),EV=Object.prototype,SV=EV.toString,TV=Math.max,IV=Math.min,Uh=function(){return wV.Date.now()};function bV(t,e,n){var r,i,s,o,a,u,c=0,h=!1,p=!1,m=!0;if(typeof t!="function")throw new TypeError(dV);e=N_(e)||0,kp(n)&&(h=!!n.leading,p="maxWait"in n,s=p?TV(N_(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m);function x(L){var b=r,S=i;return r=i=void 0,c=L,o=t.apply(S,b),o}function P(L){return c=L,a=setTimeout(v,e),h?x(L):o}function T(L){var b=L-u,S=L-c,E=e-b;return p?IV(E,s-S):E}function R(L){var b=L-u,S=L-c;return u===void 0||b>=e||b<0||p&&S>=s}function v(){var L=Uh();if(R(L))return g(L);a=setTimeout(v,T(L))}function g(L){return a=void 0,m&&r?x(L):(r=i=void 0,o)}function w(){a!==void 0&&clearTimeout(a),c=0,r=u=i=a=void 0}function N(){return a===void 0?o:g(Uh())}function D(){var L=Uh(),b=R(L);if(r=arguments,i=this,u=L,b){if(a===void 0)return P(u);if(p)return a=setTimeout(v,e),x(u)}return a===void 0&&(a=setTimeout(v,e)),o}return D.cancel=w,D.flush=N,D}function kp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function xV(t){return!!t&&typeof t=="object"}function kV(t){return typeof t=="symbol"||xV(t)&&SV.call(t)==hV}function N_(t){if(typeof t=="number")return t;if(kV(t))return A_;if(kp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=kp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(fV,"");var n=mV.test(t);return n||gV.test(t)?yV(t.slice(2),n?2:8):pV.test(t)?A_:+t}var RV=bV,_I={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(_I);var kd=_I.exports,H={},Fg={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(V);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(s){return e.default.createElement("ul",{style:{display:"block"}},s)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(s){return e.default.createElement("button",null,s+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=r})(Fg);Object.defineProperty(H,"__esModule",{value:!0});H.checkSpecKeys=H.checkNavigable=H.changeSlide=H.canUseDOM=H.canGoNext=void 0;H.clamp=EI;H.extractObject=void 0;H.filterSettings=BV;H.validSettings=H.swipeStart=H.swipeMove=H.swipeEnd=H.slidesOnRight=H.slidesOnLeft=H.slideHandler=H.siblingDirection=H.safePreventDefault=H.lazyStartIndex=H.lazySlidesOnRight=H.lazySlidesOnLeft=H.lazyEndIndex=H.keyHandler=H.initializedState=H.getWidth=H.getTrackLeft=H.getTrackCSS=H.getTrackAnimateCSS=H.getTotalSlides=H.getSwipeDirection=H.getSlideCount=H.getRequiredLazySlides=H.getPreClones=H.getPostClones=H.getOnDemandLazySlides=H.getNavigableIndexes=H.getHeight=void 0;var PV=wI(V),CV=wI(Fg);function wI(t){return t&&t.__esModule?t:{default:t}}function Pa(t){"@babel/helpers - typeof";return Pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pa(t)}function O_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Re(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O_(Object(n),!0).forEach(function(r){AV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function AV(t,e,n){return e=NV(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function NV(t){var e=OV(t,"string");return Pa(e)=="symbol"?e:String(e)}function OV(t,e){if(Pa(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Pa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function EI(t,e,n){return Math.max(e,Math.min(t,n))}var ms=H.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},SI=H.getOnDemandLazySlides=function(e){for(var n=[],r=TI(e),i=II(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};H.getRequiredLazySlides=function(e){for(var n=[],r=TI(e),i=II(e),s=r;s<i;s++)n.push(s);return n};var TI=H.lazyStartIndex=function(e){return e.currentSlide-DV(e)},II=H.lazyEndIndex=function(e){return e.currentSlide+LV(e)},DV=H.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},LV=H.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},Rp=H.getWidth=function(e){return e&&e.offsetWidth||0},bI=H.getHeight=function(e){return e&&e.offsetHeight||0},xI=H.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},kI=H.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};H.extractObject=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};H.initializedState=function(e){var n=PV.default.Children.count(e.children),r=e.listRef,i=Math.ceil(Rp(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(Rp(s)),a;if(e.vertical)a=i;else{var u=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/e.slidesToShow)}var c=r&&bI(r.querySelector('[data-index="0"]')),h=c*e.slidesToShow,p=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(p=n-1-e.initialSlide);var m=e.lazyLoadedList||[],x=SI(Re(Re({},e),{},{currentSlide:p,lazyLoadedList:m}));m=m.concat(x);var P={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:p,slideHeight:c,listHeight:h,lazyLoadedList:m};return e.autoplaying===null&&e.autoplay&&(P.autoplaying="playing"),P};H.slideHandler=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,u=e.lazyLoad,c=e.currentSlide,h=e.centerMode,p=e.slidesToScroll,m=e.slidesToShow,x=e.useCSS,P=e.lazyLoadedList;if(n&&r)return{};var T=o,R,v,g,w={},N={},D=s?o:EI(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?T=o+a:o>=a&&(T=o-a),u&&P.indexOf(T)<0&&(P=P.concat(T)),w={animating:!0,currentSlide:T,lazyLoadedList:P,targetSlide:T},N={animating:!1,targetSlide:T}}else R=T,T<0?(R=T+a,s?a%p!==0&&(R=a-a%p):R=0):!kI(e)&&T>c?T=R=c:h&&T>=a?(T=s?a:a-1,R=s?0:a-1):T>=a&&(R=T-a,s?a%p!==0&&(R=0):R=a-m),!s&&T+m>=a&&(R=a-m),v=ic(Re(Re({},e),{},{slideIndex:T})),g=ic(Re(Re({},e),{},{slideIndex:R})),s||(v===g&&(T=R),v=g),u&&(P=P.concat(SI(Re(Re({},e),{},{currentSlide:T})))),x?(w={animating:!0,currentSlide:R,trackStyle:RI(Re(Re({},e),{},{left:v})),lazyLoadedList:P,targetSlide:D},N={animating:!1,currentSlide:R,trackStyle:rc(Re(Re({},e),{},{left:g})),swipeLeft:null,targetSlide:D}):w={currentSlide:R,trackStyle:rc(Re(Re({},e),{},{left:g})),lazyLoadedList:P,targetSlide:D};return{state:w,nextState:N}};H.changeSlide=function(e,n){var r,i,s,o,a,u=e.slidesToScroll,c=e.slidesToShow,h=e.slideCount,p=e.currentSlide,m=e.targetSlide,x=e.lazyLoad,P=e.infinite;if(o=h%u!==0,r=o?0:(h-p)%u,n.message==="previous")s=r===0?u:c-r,a=p-s,x&&!P&&(i=p-s,a=i===-1?h-1:i),P||(a=m-u);else if(n.message==="next")s=r===0?u:r,a=p+s,x&&!P&&(a=(p+u)%h+r),P||(a=m+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,P){var T=FV(Re(Re({},e),{},{targetSlide:a}));a>n.currentSlide&&T==="left"?a=a-h:a<n.currentSlide&&T==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};H.keyHandler=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};H.swipeStart=function(e,n,r){return e.target.tagName==="IMG"&&ms(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};H.swipeMove=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,c=n.currentSlide,h=n.edgeFriction,p=n.edgeDragged,m=n.onEdge,x=n.swiped,P=n.swiping,T=n.slideCount,R=n.slidesToScroll,v=n.infinite,g=n.touchObject,w=n.swipeEvent,N=n.listHeight,D=n.listWidth;if(!r){if(i)return ms(e);s&&o&&a&&ms(e);var L,b={},S=ic(n);g.curX=e.touches?e.touches[0].pageX:e.clientX,g.curY=e.touches?e.touches[0].pageY:e.clientY,g.swipeLength=Math.round(Math.sqrt(Math.pow(g.curX-g.startX,2)));var E=Math.round(Math.sqrt(Math.pow(g.curY-g.startY,2)));if(!a&&!P&&E>10)return{scrolling:!0};a&&(g.swipeLength=E);var I=(u?-1:1)*(g.curX>g.startX?1:-1);a&&(I=g.curY>g.startY?1:-1);var C=Math.ceil(T/R),A=xI(n.touchObject,a),k=g.swipeLength;return v||(c===0&&(A==="right"||A==="down")||c+1>=C&&(A==="left"||A==="up")||!kI(n)&&(A==="left"||A==="up"))&&(k=g.swipeLength*h,p===!1&&m&&(m(A),b.edgeDragged=!0)),!x&&w&&(w(A),b.swiped=!0),s?L=S+k*(N/D)*I:u?L=S-k*I:L=S+k*I,a&&(L=S+k*I),b=Re(Re({},b),{},{touchObject:g,swipeLeft:L,trackStyle:rc(Re(Re({},n),{},{left:L}))}),Math.abs(g.curX-g.startX)<Math.abs(g.curY-g.startY)*.8||g.swipeLength>10&&(b.swiping=!0,ms(e)),b}};H.swipeEnd=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,h=n.swipeToSlide,p=n.scrolling,m=n.onSwipe,x=n.targetSlide,P=n.currentSlide,T=n.infinite;if(!r)return i&&ms(e),{};var R=u?c/a:o/a,v=xI(s,u),g={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p||!s.swipeLength)return g;if(s.swipeLength>R){ms(e),m&&m(v);var w,N,D=T?P:x;switch(v){case"left":case"up":N=D+L_(n),w=h?D_(n,N):N,g.currentDirection=0;break;case"right":case"down":N=D-L_(n),w=h?D_(n,N):N,g.currentDirection=1;break;default:w=D}g.triggerSlideHandler=w}else{var L=ic(n);g.trackStyle=RI(Re(Re({},n),{},{left:L}))}return g};var MV=H.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s},D_=H.checkNavigable=function(e,n){var r=MV(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n},L_=H.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(u){if(e.vertical){if(u.offsetTop+bI(u)/2>e.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+Rp(u)/2>e.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll},Ug=H.checkSpecKeys=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)},rc=H.getTrackCSS=function(e){Ug(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=jV(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",u=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=Re(Re({},s),{},{WebkitTransform:o,transform:a,msTransform:u})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s},RI=H.getTrackAnimateCSS=function(e){Ug(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=rc(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},ic=H.getTrackLeft=function(e){if(e.unslick)return 0;Ug(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,u=e.slidesToScroll,c=e.slideWidth,h=e.listWidth,p=e.variableWidth,m=e.slideHeight,x=e.fade,P=e.vertical,T=0,R,v,g=0;if(x||e.slideCount===1)return 0;var w=0;if(i?(w=-mu(e),o%u!==0&&n+u>o&&(w=-(n>o?a-(n-o):o%u)),s&&(w+=parseInt(a/2))):(o%u!==0&&n+u>o&&(w=a-o%u),s&&(w=parseInt(a/2))),T=w*c,g=w*m,P?R=n*m*-1+g:R=n*c*-1+T,p===!0){var N,D=r&&r.node;if(N=n+mu(e),v=D&&D.childNodes[N],R=v?v.offsetLeft*-1:0,s===!0){N=i?n+mu(e):n,v=D&&D.children[N],R=0;for(var L=0;L<N;L++)R-=D&&D.children[L]&&D.children[L].offsetWidth;R-=parseInt(e.centerPadding),R+=v&&(h-v.offsetWidth)/2}}return R},mu=H.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},VV=H.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},jV=H.getTotalSlides=function(e){return e.slideCount===1?1:mu(e)+e.slideCount+VV(e)},FV=H.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+UV(e)?"left":"right":e.targetSlide<e.currentSlide-$V(e)?"right":"left"},UV=H.slidesOnRight=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1},$V=H.slidesOnLeft=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};H.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var zV=H.validSettings=Object.keys(CV.default);function BV(t){return zV.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Rd={};Object.defineProperty(Rd,"__esModule",{value:!0});Rd.Track=void 0;var mr=PI(V),$h=PI(kd),zh=H;function PI(t){return t&&t.__esModule?t:{default:t}}function Ds(t){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ds(t)}function Pp(){return Pp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pp.apply(this,arguments)}function HV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function WV(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,AI(r.key),r)}}function qV(t,e,n){return e&&WV(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function KV(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Cp(t,e)}function Cp(t,e){return Cp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Cp(t,e)}function GV(t){var e=CI();return function(){var r=sc(t),i;if(e){var s=sc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return QV(this,i)}}function QV(t,e){if(e&&(Ds(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ap(t)}function Ap(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function CI(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(CI=function(){return!!t})()}function sc(t){return sc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},sc(t)}function M_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Mt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M_(Object(n),!0).forEach(function(r){Np(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Np(t,e,n){return e=AI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function AI(t){var e=YV(t,"string");return Ds(e)=="symbol"?e:String(e)}function YV(t,e){if(Ds(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ds(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Bh=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var u=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},XV=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Hh=function(e,n){return e.key||n},JV=function(e){var n,r=[],i=[],s=[],o=mr.default.Children.count(e.children),a=(0,zh.lazyStartIndex)(e),u=(0,zh.lazyEndIndex)(e);return mr.default.Children.forEach(e.children,function(c,h){var p,m={message:"children",index:h,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(h)>=0?p=c:p=mr.default.createElement("div",null);var x=XV(Mt(Mt({},e),{},{index:h})),P=p.props.className||"",T=Bh(Mt(Mt({},e),{},{index:h}));if(r.push(mr.default.cloneElement(p,{key:"original"+Hh(p,h),"data-index":h,className:(0,$h.default)(T,P),tabIndex:"-1","aria-hidden":!T["slick-active"],style:Mt(Mt({outline:"none"},p.props.style||{}),x),onClick:function(g){p.props&&p.props.onClick&&p.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(m)}})),e.infinite&&e.fade===!1){var R=o-h;R<=(0,zh.getPreClones)(e)&&(n=-R,n>=a&&(p=c),T=Bh(Mt(Mt({},e),{},{index:n})),i.push(mr.default.cloneElement(p,{key:"precloned"+Hh(p,n),"data-index":n,tabIndex:"-1",className:(0,$h.default)(T,P),"aria-hidden":!T["slick-active"],style:Mt(Mt({},p.props.style||{}),x),onClick:function(g){p.props&&p.props.onClick&&p.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(m)}}))),n=o+h,n<u&&(p=c),T=Bh(Mt(Mt({},e),{},{index:n})),s.push(mr.default.cloneElement(p,{key:"postcloned"+Hh(p,n),"data-index":n,tabIndex:"-1",className:(0,$h.default)(T,P),"aria-hidden":!T["slick-active"],style:Mt(Mt({},p.props.style||{}),x),onClick:function(g){p.props&&p.props.onClick&&p.props.onClick(g),e.focusOnSelect&&e.focusOnSelect(m)}}))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)};Rd.Track=function(t){KV(n,t);var e=GV(n);function n(){var r;HV(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Np(Ap(r),"node",null),Np(Ap(r),"handleRef",function(a){r.node=a}),r}return qV(n,[{key:"render",value:function(){var i=JV(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,u=s.onMouseLeave,c={onMouseEnter:o,onMouseOver:a,onMouseLeave:u};return mr.default.createElement("div",Pp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(mr.default.PureComponent);var Pd={};function Ls(t){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ls(t)}Object.defineProperty(Pd,"__esModule",{value:!0});Pd.Dots=void 0;var zl=NI(V),ZV=NI(kd),V_=H;function NI(t){return t&&t.__esModule?t:{default:t}}function j_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function e4(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j_(Object(n),!0).forEach(function(r){t4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function t4(t,e,n){return e=OI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,OI(r.key),r)}}function i4(t,e,n){return e&&r4(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function OI(t){var e=s4(t,"string");return Ls(e)=="symbol"?e:String(e)}function s4(t,e){if(Ls(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ls(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function o4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Op(t,e)}function Op(t,e){return Op=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Op(t,e)}function a4(t){var e=DI();return function(){var r=oc(t),i;if(e){var s=oc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return l4(this,i)}}function l4(t,e){if(e&&(Ls(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u4(t)}function u4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function DI(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DI=function(){return!!t})()}function oc(t){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oc(t)}var c4=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Pd.Dots=function(t){o4(n,t);var e=a4(n);function n(){return n4(this,n),e.apply(this,arguments)}return i4(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,h=i.slidesToShow,p=i.slideCount,m=i.currentSlide,x=c4({slideCount:p,slidesToScroll:c,slidesToShow:h,infinite:u}),P={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},T=[],R=0;R<x;R++){var v=(R+1)*c-1,g=u?v:(0,V_.clamp)(v,0,p-1),w=g-(c-1),N=u?w:(0,V_.clamp)(w,0,p-1),D=(0,ZV.default)({"slick-active":u?m>=N&&m<=g:m===N}),L={message:"dots",index:R,slidesToScroll:c,currentSlide:m},b=this.clickHandler.bind(this,L);T=T.concat(zl.default.createElement("li",{key:R,className:D},zl.default.cloneElement(this.props.customPaging(R),{onClick:b})))}return zl.default.cloneElement(this.props.appendDots(T),e4({className:this.props.dotsClass},P))}}]),n}(zl.default.PureComponent);var Ms={};function Vs(t){"@babel/helpers - typeof";return Vs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vs(t)}Object.defineProperty(Ms,"__esModule",{value:!0});Ms.PrevArrow=Ms.NextArrow=void 0;var gs=MI(V),LI=MI(kd),d4=H;function MI(t){return t&&t.__esModule?t:{default:t}}function ac(){return ac=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ac.apply(this,arguments)}function F_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function lc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?F_(Object(n),!0).forEach(function(r){h4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function h4(t,e,n){return e=FI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function VI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,FI(r.key),r)}}function jI(t,e,n){return e&&f4(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function FI(t){var e=p4(t,"string");return Vs(e)=="symbol"?e:String(e)}function p4(t,e){if(Vs(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Vs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function UI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Dp(t,e)}function Dp(t,e){return Dp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Dp(t,e)}function $I(t){var e=zI();return function(){var r=uc(t),i;if(e){var s=uc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return m4(this,i)}}function m4(t,e){if(e&&(Vs(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g4(t)}function g4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function zI(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zI=function(){return!!t})()}function uc(t){return uc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},uc(t)}Ms.PrevArrow=function(t){UI(n,t);var e=$I(n);function n(){return VI(this,n),e.apply(this,arguments)}return jI(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,LI.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=gs.default.cloneElement(this.props.prevArrow,lc(lc({},o),a)):u=gs.default.createElement("button",ac({key:"0",type:"button"},o)," ","Previous"),u}}]),n}(gs.default.PureComponent);Ms.NextArrow=function(t){UI(n,t);var e=$I(n);function n(){return VI(this,n),e.apply(this,arguments)}return jI(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,d4.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,LI.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=gs.default.cloneElement(this.props.nextArrow,lc(lc({},o),a)):u=gs.default.createElement("button",ac({key:"1",type:"button"},o)," ","Next"),u}}]),n}(gs.default.PureComponent);var BI=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),Lp=typeof window<"u"&&typeof document<"u"&&window.document===document,cc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),y4=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(cc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),v4=2;function _4(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){y4(s)}function a(){var u=Date.now();if(n){if(u-i<v4)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=u}return a}var w4=20,E4=["top","right","bottom","left","width","height","size","weight"],S4=typeof MutationObserver<"u",T4=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=_4(this.refresh.bind(this),w4)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Lp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),S4?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Lp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=E4.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),HI=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},js=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||cc},WI=Cd(0,0,0,0);function dc(t){return parseFloat(t)||0}function U_(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+dc(s)},0)}function I4(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=dc(o)}return n}function b4(t){var e=t.getBBox();return Cd(0,0,e.width,e.height)}function x4(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return WI;var r=js(t).getComputedStyle(t),i=I4(r),s=i.left+i.right,o=i.top+i.bottom,a=dc(r.width),u=dc(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=U_(r,"left","right")+s),Math.round(u+o)!==n&&(u-=U_(r,"top","bottom")+o)),!R4(t)){var c=Math.round(a+s)-e,h=Math.round(u+o)-n;Math.abs(c)!==1&&(a-=c),Math.abs(h)!==1&&(u-=h)}return Cd(i.left,i.top,a,u)}var k4=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof js(t).SVGGraphicsElement}:function(t){return t instanceof js(t).SVGElement&&typeof t.getBBox=="function"}}();function R4(t){return t===js(t).document.documentElement}function P4(t){return Lp?k4(t)?b4(t):x4(t):WI}function C4(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return HI(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Cd(t,e,n,r){return{x:t,y:e,width:n,height:r}}var A4=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Cd(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=P4(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),N4=function(){function t(e,n){var r=C4(n);HI(this,{target:e,contentRect:r})}return t}(),O4=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new BI,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof js(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new A4(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof js(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new N4(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),qI=typeof WeakMap<"u"?new WeakMap:new BI,KI=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=T4.getInstance(),r=new O4(e,n,this);qI.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){KI.prototype[t]=function(){var e;return(e=qI.get(this))[t].apply(e,arguments)}});var D4=function(){return typeof cc.ResizeObserver<"u"?cc.ResizeObserver:KI}();const L4=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),M4=Gb(L4);Object.defineProperty(xd,"__esModule",{value:!0});xd.InnerSlider=void 0;var Rt=Ja(V),V4=Ja(vI),j4=Ja(RV),F4=Ja(kd),Ce=H,U4=Rd,$4=Pd,$_=Ms,z4=Ja(M4);function Ja(t){return t&&t.__esModule?t:{default:t}}function ki(t){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ki(t)}function hc(){return hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hc.apply(this,arguments)}function B4(t,e){if(t==null)return{};var n=H4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function H4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z_(Object(n),!0).forEach(function(r){ie(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function W4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,QI(r.key),r)}}function K4(t,e,n){return e&&q4(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function G4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Mp(t,e)}function Mp(t,e){return Mp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Mp(t,e)}function Q4(t){var e=GI();return function(){var r=fc(t),i;if(e){var s=fc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return Y4(this,i)}}function Y4(t,e){if(e&&(ki(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return re(t)}function re(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function GI(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GI=function(){return!!t})()}function fc(t){return fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},fc(t)}function ie(t,e,n){return e=QI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QI(t){var e=X4(t,"string");return ki(e)=="symbol"?e:String(e)}function X4(t,e){if(ki(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ki(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}xd.InnerSlider=function(t){G4(n,t);var e=Q4(n);function n(r){var i;W4(this,n),i=e.call(this,r),ie(re(i),"listRefHandler",function(o){return i.list=o}),ie(re(i),"trackRefHandler",function(o){return i.track=o}),ie(re(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ce.getHeight)(o)+"px"}}),ie(re(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Ce.getOnDemandLazySlides)(X(X({},i.props),i.state));o.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=X({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new z4.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ie(re(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ie(re(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Ce.getOnDemandLazySlides)(X(X({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=X(X({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(o);c&&i.updateState(u,c,function(){i.state.currentSlide>=Rt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Rt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ie(re(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,j4.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),ie(re(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var u=X(X({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ie(re(i),"updateState",function(o,a,u){var c=(0,Ce.initializedState)(o);o=X(X(X({},o),c),{},{slideIndex:c.currentSlide});var h=(0,Ce.getTrackLeft)(o);o=X(X({},o),{},{left:h});var p=(0,Ce.getTrackCSS)(o);(a||Rt.default.Children.count(i.props.children)!==Rt.default.Children.count(o.children))&&(c.trackStyle=p),i.setState(c,u)}),ie(re(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,u=[],c=(0,Ce.getPreClones)(X(X(X({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,Ce.getPostClones)(X(X(X({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(b){u.push(b.props.style.width),o+=b.props.style.width});for(var p=0;p<c;p++)a+=u[u.length-1-p],o+=u[u.length-1-p];for(var m=0;m<h;m++)o+=u[m];for(var x=0;x<i.state.currentSlide;x++)a+=u[x];var P={width:o+"px",left:-a+"px"};if(i.props.centerMode){var T="".concat(u[i.state.currentSlide],"px");P.left="calc(".concat(P.left," + (100% - ").concat(T,") / 2 ) ")}return{trackStyle:P}}var R=Rt.default.Children.count(i.props.children),v=X(X(X({},i.props),i.state),{},{slideCount:R}),g=(0,Ce.getPreClones)(v)+(0,Ce.getPostClones)(v)+R,w=100/i.props.slidesToShow*g,N=100/g,D=-N*((0,Ce.getPreClones)(v)+i.state.currentSlide)*w/100;i.props.centerMode&&(D+=(100-N*w/100)/2);var L={width:w+"%",left:D+"%"};return{slideWidth:N+"%",trackStyle:L}}),ie(re(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,u=0;Array.prototype.forEach.call(o,function(c){var h=function(){return++u&&u>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var p=c.onclick;c.onclick=function(m){p(m),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=h,c.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ie(re(i),"progressiveLazyLoad",function(){for(var o=[],a=X(X({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,Ce.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,Ce.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){o.push(c);break}o.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ie(re(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,h=u.beforeChange,p=u.onLazyLoad,m=u.speed,x=u.afterChange,P=i.state.currentSlide,T=(0,Ce.slideHandler)(X(X(X({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),R=T.state,v=T.nextState;if(R){h&&h(P,R.currentSlide);var g=R.lazyLoadedList.filter(function(w){return i.state.lazyLoadedList.indexOf(w)<0});p&&g.length>0&&p(g),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),x&&x(P),delete i.animationEndCallback),i.setState(R,function(){c&&i.asNavForIndex!==o&&(i.asNavForIndex=o,c.innerSlider.slideHandler(o)),v&&(i.animationEndCallback=setTimeout(function(){var w=v.animating,N=B4(v,["animating"]);i.setState(N,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:w})},10)),x&&x(R.currentSlide),delete i.animationEndCallback})},m))})}}),ie(re(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=X(X({},i.props),i.state),c=(0,Ce.changeSlide)(u,o);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),ie(re(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),ie(re(i),"keyHandler",function(o){var a=(0,Ce.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ie(re(i),"selectHandler",function(o){i.changeSlide(o)}),ie(re(i),"disableBodyScroll",function(){var o=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=o}),ie(re(i),"enableBodyScroll",function(){window.ontouchmove=null}),ie(re(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Ce.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ie(re(i),"swipeMove",function(o){var a=(0,Ce.swipeMove)(o,X(X(X({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ie(re(i),"swipeEnd",function(o){var a=(0,Ce.swipeEnd)(o,X(X(X({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),ie(re(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),ie(re(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ie(re(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ie(re(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),ie(re(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ce.canGoNext)(X(X({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),ie(re(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ie(re(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ie(re(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ie(re(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ie(re(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ie(re(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ie(re(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ie(re(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ie(re(i),"render",function(){var o=(0,F4.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=X(X({},i.props),i.state),u=(0,Ce.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=X(X({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var p=(0,Ce.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),m=i.props.pauseOnDotsHover;p=X(X({},p),{},{clickHandler:i.changeSlide,onMouseEnter:m?i.onDotsLeave:null,onMouseOver:m?i.onDotsOver:null,onMouseLeave:m?i.onDotsLeave:null}),h=Rt.default.createElement($4.Dots,p)}var x,P,T=(0,Ce.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);T.clickHandler=i.changeSlide,i.props.arrows&&(x=Rt.default.createElement($_.PrevArrow,T),P=Rt.default.createElement($_.NextArrow,T));var R=null;i.props.vertical&&(R={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var g=X(X({},R),v),w=i.props.touchMove,N={className:"slick-list",style:g,onClick:i.clickHandler,onMouseDown:w?i.swipeStart:null,onMouseMove:i.state.dragging&&w?i.swipeMove:null,onMouseUp:w?i.swipeEnd:null,onMouseLeave:i.state.dragging&&w?i.swipeEnd:null,onTouchStart:w?i.swipeStart:null,onTouchMove:i.state.dragging&&w?i.swipeMove:null,onTouchEnd:w?i.touchEnd:null,onTouchCancel:i.state.dragging&&w?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},D={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(N={className:"slick-list"},D={className:o}),Rt.default.createElement("div",D,i.props.unslick?"":x,Rt.default.createElement("div",hc({ref:i.listRefHandler},N),Rt.default.createElement(U4.Track,hc({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":P,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=X(X({},V4.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Rt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=X(X({},i.state),s),i}return K4(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var u=a[o];if(!i.hasOwnProperty(u)){s=!0;break}if(!(ki(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){s=!0;break}}return s||Rt.default.Children.count(this.props.children)!==Rt.default.Children.count(i.children)}}]),n}(Rt.default.Component);var J4=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Z4=J4,e3=Z4,t3=function(t){var e=/[height|width]$/;return e.test(t)},B_=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=e3(r),t3(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},n3=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=B_(n),r<t.length-1&&(e+=", ")}),e):B_(t)},r3=n3,Wh,H_;function i3(){if(H_)return Wh;H_=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Wh=t,Wh}var qh,W_;function YI(){if(W_)return qh;W_=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return qh={isFunction:n,isArray:e,each:t},qh}var Kh,q_;function s3(){if(q_)return Kh;q_=1;var t=i3(),e=YI().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Kh=n,Kh}var Gh,K_;function o3(){if(K_)return Gh;K_=1;var t=s3(),e=YI(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,u){var c=this.queries,h=u&&this.browserIsIncapable;return c[o]||(c[o]=new t(o,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(p){r(p)&&(p={match:p}),c[o].addHandler(p)}),this},unregister:function(o,a){var u=this.queries[o];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[o])),this}},Gh=s,Gh}var Qh,G_;function a3(){if(G_)return Qh;G_=1;var t=o3();return Qh=new t,Qh}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(V),n=xd,r=o(r3),i=o(Fg),s=H;function o(E){return E&&E.__esModule?E:{default:E}}function a(E){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},a(E)}function u(){return u=Object.assign?Object.assign.bind():function(E){for(var I=1;I<arguments.length;I++){var C=arguments[I];for(var A in C)Object.prototype.hasOwnProperty.call(C,A)&&(E[A]=C[A])}return E},u.apply(this,arguments)}function c(E,I){var C=Object.keys(E);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(E);I&&(A=A.filter(function(k){return Object.getOwnPropertyDescriptor(E,k).enumerable})),C.push.apply(C,A)}return C}function h(E){for(var I=1;I<arguments.length;I++){var C=arguments[I]!=null?arguments[I]:{};I%2?c(Object(C),!0).forEach(function(A){D(E,A,C[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(C)):c(Object(C)).forEach(function(A){Object.defineProperty(E,A,Object.getOwnPropertyDescriptor(C,A))})}return E}function p(E,I){if(!(E instanceof I))throw new TypeError("Cannot call a class as a function")}function m(E,I){for(var C=0;C<I.length;C++){var A=I[C];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(E,L(A.key),A)}}function x(E,I,C){return I&&m(E.prototype,I),Object.defineProperty(E,"prototype",{writable:!1}),E}function P(E,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create(I&&I.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),I&&T(E,I)}function T(E,I){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,k){return A.__proto__=k,A},T(E,I)}function R(E){var I=w();return function(){var A=N(E),k;if(I){var G=N(this).constructor;k=Reflect.construct(A,arguments,G)}else k=A.apply(this,arguments);return v(this,k)}}function v(E,I){if(I&&(a(I)==="object"||typeof I=="function"))return I;if(I!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(E)}function g(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function w(){try{var E=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(w=function(){return!!E})()}function N(E){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(C){return C.__proto__||Object.getPrototypeOf(C)},N(E)}function D(E,I,C){return I=L(I),I in E?Object.defineProperty(E,I,{value:C,enumerable:!0,configurable:!0,writable:!0}):E[I]=C,E}function L(E){var I=b(E,"string");return a(I)=="symbol"?I:String(I)}function b(E,I){if(a(E)!="object"||!E)return E;var C=E[Symbol.toPrimitive];if(C!==void 0){var A=C.call(E,I||"default");if(a(A)!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return(I==="string"?String:Number)(E)}var S=(0,s.canUseDOM)()&&a3();t.default=function(E){P(C,E);var I=R(C);function C(A){var k;return p(this,C),k=I.call(this,A),D(g(k),"innerSliderRefHandler",function(G){return k.innerSlider=G}),D(g(k),"slickPrev",function(){return k.innerSlider.slickPrev()}),D(g(k),"slickNext",function(){return k.innerSlider.slickNext()}),D(g(k),"slickGoTo",function(G){var It=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return k.innerSlider.slickGoTo(G,It)}),D(g(k),"slickPause",function(){return k.innerSlider.pause("paused")}),D(g(k),"slickPlay",function(){return k.innerSlider.autoPlay("play")}),k.state={breakpoint:null},k._responsiveMediaHandlers=[],k}return x(C,[{key:"media",value:function(k,G){S.register(k,G),this._responsiveMediaHandlers.push({query:k,handler:G})}},{key:"componentDidMount",value:function(){var k=this;if(this.props.responsive){var G=this.props.responsive.map(function(Le){return Le.breakpoint});G.sort(function(Le,Ge){return Le-Ge}),G.forEach(function(Le,Ge){var B;Ge===0?B=(0,r.default)({minWidth:0,maxWidth:Le}):B=(0,r.default)({minWidth:G[Ge-1]+1,maxWidth:Le}),(0,s.canUseDOM)()&&k.media(B,function(){k.setState({breakpoint:Le})})});var It=(0,r.default)({minWidth:G.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(It,function(){k.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(k){S.unregister(k.query,k.handler)})}},{key:"render",value:function(){var k=this,G,It;this.state.breakpoint?(It=this.props.responsive.filter(function(bt){return bt.breakpoint===k.state.breakpoint}),G=It[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),It[0].settings)):G=h(h({},i.default),this.props),G.centerMode&&(G.slidesToScroll>1,G.slidesToScroll=1),G.fade&&(G.slidesToShow>1,G.slidesToScroll>1,G.slidesToShow=1,G.slidesToScroll=1);var Le=e.default.Children.toArray(this.props.children);Le=Le.filter(function(bt){return typeof bt=="string"?!!bt.trim():!!bt}),G.variableWidth&&(G.rows>1||G.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),G.variableWidth=!1);for(var Ge=[],B=null,Q=0;Q<Le.length;Q+=G.rows*G.slidesPerRow){for(var ee=[],pe=Q;pe<Q+G.rows*G.slidesPerRow;pe+=G.slidesPerRow){for(var me=[],ge=pe;ge<pe+G.slidesPerRow&&(G.variableWidth&&Le[ge].props.style&&(B=Le[ge].props.style.width),!(ge>=Le.length));ge+=1)me.push(e.default.cloneElement(Le[ge],{key:100*Q+10*pe+ge,tabIndex:-1,style:{width:"".concat(100/G.slidesPerRow,"%"),display:"inline-block"}}));ee.push(e.default.createElement("div",{key:10*Q+pe},me))}G.variableWidth?Ge.push(e.default.createElement("div",{key:Q,style:{width:B}},ee)):Ge.push(e.default.createElement("div",{key:Q},ee))}if(G==="unslick"){var cn="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:cn},Le)}else Ge.length<=G.slidesToShow&&!G.infinite&&(G.unslick=!0);return e.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(G)),Ge)}}]),C}(e.default.Component)})(yI);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(yI);function n(r){return r&&r.__esModule?r:{default:r}}t.default=e.default})(gI);const XI=ew(gI),l3=()=>{const[t,e]=V.useState([]),[n,r]=V.useState(null),[i,s]=V.useState(""),[o,a]=V.useState({title:"",ingredients:"",instructions:"",category:"Desserts"}),u=fd(),c=Zr(),h={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};V.useEffect(()=>{(async()=>{const R=c.currentUser;if(R){s(R.displayName||R.email.split("@")[0]);const v=WD(qa(u,"recipes"),qD("createdByUid","==",R.uid)),g=await wd(v);e(g.docs.map(w=>({...w.data(),id:w.id})))}})()},[c,u]);const p=async T=>{const R=c.currentUser;if(R)try{await xa(At(u,"recipes",T)),console.log(`Deleted from global recipes collection: ${T}`),await xa(At(u,`users/${R.uid}/recipes`,T)),console.log(`Deleted from user's subcollection: ${T}`);const v=At(u,"users",R.uid);await ds(v,{recipeCount:LT(-1)}),console.log(`Decremented recipe count for user: ${R.uid}`),e(t.filter(g=>g.id!==T))}catch(v){console.error("Error deleting recipe:",v)}},m=T=>{r(T.id),a({title:T.title,ingredients:T.ingredients,instructions:T.instructions,category:T.category})},x=T=>{const{name:R,value:v}=T.target;a(g=>({...g,[R]:v}))},P=async T=>{T.preventDefault();const R=c.currentUser;if(R){const v=At(u,"recipes",n),g=At(u,`users/${R.uid}/recipes`,n),w={title:o.title,ingredients:o.ingredients,instructions:o.instructions,category:o.category};try{if(console.log(`Editing recipe: ${n}`),console.log(`User ID: ${R.uid}`),!(await _d(g)).exists())throw console.error(`No document found in user subcollection with ID: ${n}`),new Error("No document to update in user subcollection");await ds(v,w),console.log("Global recipe updated successfully"),await ds(g,w),console.log("User subcollection recipe updated successfully"),e(t.map(D=>D.id===n?{...D,...o}:D)),r(null)}catch(N){console.error("Error updating recipe:",N)}}};return _.jsxs("div",{className:"profile",children:[_.jsxs("h1",{className:"text-3xl mb-4",children:["My profile - ",_.jsx("span",{className:"italic",children:i})]}),t.map(T=>_.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[_.jsx("div",{className:"bg-gray-200 h-48 flex justify-center items-center",children:T.photos&&T.photos.length>0?T.photos.length===1?_.jsx("img",{src:T.photos[0],alt:"Recipe",className:"object-cover w-full h-48"}):_.jsx(XI,{...h,className:"w-full h-full",children:T.photos.map((R,v)=>_.jsx("div",{children:_.jsx("img",{src:R,alt:`Recipe ${v}`,className:"object-cover w-full h-48"})},v))}):_.jsx("span",{className:"text-gray-400",children:"No photo available"})}),_.jsx("div",{className:"p-6",children:n===T.id?_.jsxs("form",{onSubmit:P,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),_.jsx("input",{type:"text",name:"title",value:o.title,onChange:x,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"ingredients",className:"block text-sm font-medium text-gray-700",children:"Ingredients"}),_.jsx("textarea",{name:"ingredients",value:o.ingredients,onChange:x,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"instructions",className:"block text-sm font-medium text-gray-700",children:"Instructions"}),_.jsx("textarea",{name:"instructions",value:o.instructions,onChange:x,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),_.jsx("select",{name:"category",value:o.category,onChange:x,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",children:["Desserts","BBQ","Breakfast","Lunch","Dinner","Vegetarian"].map(R=>_.jsx("option",{value:R,children:R},R))})]}),_.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded-md",children:"Save"}),_.jsx("button",{type:"button",onClick:()=>r(null),className:"px-4 py-2 ml-2 bg-gray-600 text-white rounded-md",children:"Cancel"})]}):_.jsxs(_.Fragment,{children:[_.jsx("h2",{className:"text-xl font-semibold mb-2",children:T.title}),_.jsx("h3",{className:"text-lg font-medium mb-2",children:"Ingredients:"}),_.jsx("p",{className:"text-gray-700 mb-4",children:T.ingredients}),_.jsx("h3",{className:"text-lg font-medium mb-2",children:"Instructions:"}),_.jsx("p",{className:"text-gray-700",children:T.instructions}),_.jsx("h3",{className:"text-lg font-medium mb-2",children:"Category:"}),_.jsx("p",{className:"text-gray-700",children:T.category}),_.jsx("button",{onClick:()=>m(T),className:"bg-yellow-500 text-white px-4 py-2 m-2 rounded-md",children:"Edit"}),_.jsx("button",{className:"bg-red-500 text-white px-4 py-2 m-2 rounded-md",onClick:()=>p(T.id),children:"Delete"})]})})]},T.id))]})},u3=()=>_.jsx("div",{className:"container mx-auto p-4",children:_.jsx(l3,{})});var c3="firebase",d3="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(c3,d3,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="firebasestorage.googleapis.com",ZI="storageBucket",h3=2*60*1e3,f3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Fn{constructor(e,n,r=0){super(Yh(e),`Firebase Storage: ${n} (${Yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Yh(t){return"storage/"+t}function $g(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(je.UNKNOWN,t)}function p3(t){return new Fe(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m3(t){return new Fe(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(je.UNAUTHENTICATED,t)}function y3(){return new Fe(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function v3(t){return new Fe(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _3(){return new Fe(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w3(){return new Fe(je.CANCELED,"User canceled the upload/download.")}function E3(t){return new Fe(je.INVALID_URL,"Invalid URL '"+t+"'.")}function S3(t){return new Fe(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function T3(){return new Fe(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ZI+"' property when initializing the app?")}function I3(){return new Fe(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function b3(){return new Fe(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x3(t){return new Fe(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Vp(t){return new Fe(je.INVALID_ARGUMENT,t)}function eb(){return new Fe(je.APP_DELETED,"The Firebase app was deleted.")}function k3(t){return new Fe(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Go(t,e){return new Fe(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function To(t){throw new Fe(je.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gt.makeFromUrl(e,n)}catch{return new Gt(e,"")}if(r.path==="")return r;throw S3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${h}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},T=n===JI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",v=new RegExp(`^https?://${T}/${i}/${R}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:x,indices:P,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<w.length;N++){const D=w[N],L=D.regex.exec(e);if(L){const b=L[D.indices.bucket];let S=L[D.indices.path];S||(S=""),r=new Gt(b,S),D.postModify(r);break}}if(r==null)throw E3(e);return r}}class R3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(...R){c||(c=!0,e.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,t(x,u())},R)}function m(){s&&clearTimeout(s)}function x(R,...v){if(c){m();return}if(R){m(),h.call(null,R,...v);return}if(u()||o){m(),h.call(null,R,...v);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,p(w)}let P=!1;function T(R){P||(P=!0,m(),!c&&(i!==null?(R||(a=2),clearTimeout(i),p(0)):R||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,T(!0)},n),T}function C3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(t){return t!==void 0}function N3(t){return typeof t=="object"&&!Array.isArray(t)}function zg(t){return typeof t=="string"||t instanceof String}function Q_(t){return Bg()&&t instanceof Blob}function Bg(){return typeof Blob<"u"}function Y_(t,e,n,r){if(r<e)throw Vp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Vp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function tb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pi||(pi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e,n,r,i,s,o,a,u,c,h,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,P)=>{this.resolve_=x,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Bl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===pi.NO_ERROR,u=s.getStatus();if(!a||O3(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===pi.ABORT;r(!1,new Bl(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Bl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());A3(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=$g();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?eb():w3();o(u)}else{const u=_3();o(u)}};this.canceled_?n(!1,new Bl(!1,null,!0)):this.backoffId_=P3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&C3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function L3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function M3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function j3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function F3(t,e,n,r,i,s,o=!0){const a=tb(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return V3(c,e),L3(c,n),M3(c,s),j3(c,r),new D3(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $3(...t){const e=U3();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Bg())return new Blob(t);throw new Fe(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function z3(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(t){if(typeof atob>"u")throw x3("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xh{constructor(e,n){this.data=e,this.contentType=n||null}}function H3(t,e){switch(t){case Pn.RAW:return new Xh(nb(e));case Pn.BASE64:case Pn.BASE64URL:return new Xh(rb(t,e));case Pn.DATA_URL:return new Xh(q3(e),K3(e))}throw $g()}function nb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function W3(t){let e;try{e=decodeURIComponent(t)}catch{throw Go(Pn.DATA_URL,"Malformed data URL.")}return nb(e)}function rb(t,e){switch(t){case Pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Go(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Go(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=B3(e)}catch(i){throw i.message.includes("polyfill")?i:Go(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ib{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Go(Pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=G3(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function q3(t){const e=new ib(t);return e.base64?rb(Pn.BASE64,e.rest):W3(e.rest)}function K3(t){return new ib(t).contentType}function G3(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){let r=0,i="";Q_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q_(this.data_)){const r=this.data_,i=z3(r,e,n);return i===null?null:new Sr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Sr(r,!0)}}static getBlob(...e){if(Bg()){const n=e.map(r=>r instanceof Sr?r.data_:r);return new Sr($3.apply(null,n))}else{const n=e.map(o=>zg(o)?H3(Pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Sr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){let e;try{e=JSON.parse(t)}catch{return null}return N3(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Y3(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ob(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(t,e){return e}class Pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||X3}}let Hl=null;function J3(t){return!zg(t)||t.length<2?t:ob(t)}function ab(){if(Hl)return Hl;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(s,o){return J3(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pt("size");return i.xform=r,t.push(i),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),Hl=t,Hl}function Z3(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Gt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ej(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Z3(r,t),r}function lb(t,e,n){const r=sb(e);return r===null?null:ej(t,r,n)}function tj(t,e,n,r){const i=sb(e);if(i===null||!zg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,p=t.fullPath,m="/b/"+o(h)+"/o/"+o(p),x=Hg(m,n,r),P=tb({alt:"media",token:c});return x+P})[0]}function nj(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ub{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){if(!t)throw $g()}function rj(t,e){function n(r,i){const s=lb(t,i,e);return cb(s!==null),s}return n}function ij(t,e){function n(r,i){const s=lb(t,i,e);return cb(s!==null),tj(s,i,t.host,t._protocol)}return n}function db(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=y3():i=g3():n.getStatus()===402?i=m3(t.bucket):n.getStatus()===403?i=v3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function sj(t){const e=db(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=p3(t.path)),s.serverResponse=i.serverResponse,s}return n}function oj(t,e,n){const r=e.fullServerUrl(),i=Hg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ub(i,s,ij(t,n),o);return a.errorHandler=sj(e),a}function aj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aj(null,e)),r}function uj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let N=0;N<2;N++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=lj(e,r,i),h=nj(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",x=Sr.getBlob(p,r,m);if(x===null)throw I3();const P={name:c.fullPath},T=Hg(s,t.host,t._protocol),R="POST",v=t.maxUploadRetryTime,g=new ub(T,R,rj(t,n),v);return g.urlParams=P,g.headers=o,g.body=x.uploadData(),g.errorHandler=db(e),g}class cj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw To("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw To("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw To("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw To("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw To("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dj extends cj{initXhr(){this.xhr_.responseType="text"}}function hb(){return new dj}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this._service=e,n instanceof Gt?this._location=n:this._location=Gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new Gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ob(this._location.path)}get storage(){return this._service}get parent(){const e=Q3(this._location.path);if(e===null)return null;const n=new Gt(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw k3(e)}}function hj(t,e,n){t._throwIfRoot("uploadBytes");const r=uj(t.storage,t._location,ab(),new Sr(e,!0),n);return t.storage.makeRequestWithTokens(r,hb).then(i=>({metadata:i,ref:t}))}function fj(t){t._throwIfRoot("getDownloadURL");const e=oj(t.storage,t._location,ab());return t.storage.makeRequestWithTokens(e,hb).then(n=>{if(n===null)throw b3();return n})}function pj(t,e){const n=Y3(t._location.path,e),r=new Gt(t._location.bucket,n);return new Ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mj(t){return/^[A-Za-z]+:\/\//.test(t)}function gj(t,e){return new Ri(t,e)}function fb(t,e){if(t instanceof Wg){const n=t;if(n._bucket==null)throw T3();const r=new Ri(n,n._bucket);return e!=null?fb(r,e):r}else return e!==void 0?pj(t,e):t}function yj(t,e){if(e&&mj(e)){if(t instanceof Wg)return gj(t,e);throw Vp("To use ref(service, url), the first argument must be a Storage instance.")}else return fb(t,e)}function X_(t,e){const n=e==null?void 0:e[ZI];return n==null?null:Gt.makeFromBucketSpec(n,t)}function vj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:tS(i,t.app.options.projectId))}class Wg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=JI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=h3,this._maxUploadRetryTime=f3,this._requests=new Set,i!=null?this._bucket=Gt.makeFromBucketSpec(i,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Gt.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new R3(eb());{const o=F3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const J_="@firebase/storage",Z_="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="storage";function _j(t,e,n){return t=ze(t),hj(t,e,n)}function wj(t){return t=ze(t),fj(t)}function Ej(t,e){return t=ze(t),yj(t,e)}function Sj(t=Xm(),e){t=ze(t);const r=td(t,pb).getImmediate({identifier:e}),i=J1("storage");return i&&Tj(r,...i),r}function Tj(t,e,n,r={}){vj(t,e,n,r)}function Ij(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wg(n,r,i,e,Ai)}function bj(){Ei(new $r(pb,Ij,"PUBLIC").setMultipleInstances(!0)),On(J_,Z_,""),On(J_,Z_,"esm2017")}bj();const xj={apiKey:"AIzaSyDt93Neo4zMnYOVql77kTyR49WYCqyMFfE",authDomain:"foodmaster-1cbb6.firebaseapp.com",projectId:"foodmaster-1cbb6",storageBucket:"foodmaster-1cbb6.appspot.com",messagingSenderId:"309998506044",appId:"1:309998506044:web:2426c75a08d90913837339"},qg=iS(xj),ys=fd(qg);Zr(qg);const kj=Sj(qg),Rj=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(0),[i,s]=V.useState(""),[o,a]=V.useState(""),[u,c]=V.useState("Desserts"),[h,p]=V.useState([]),[m,x]=V.useState(null),P=["Desserts","BBQ","Breakfast","Lunch","Dinner","Vegetarian","Fitness"];V.useEffect(()=>{const w=Zr().currentUser;w&&x({uid:w.uid,email:w.email,username:w.displayName||w.email.split("@")[0]})},[]);const T=g=>{if(g.target.files.length>5){alert("You can only upload up to 5 photos.");return}p(Array.from(g.target.files))},R=async g=>{const w=Ej(kj,`recipes/${m.uid}/${g.name}`);try{const N=await _j(w,g);return await wj(N.ref)}catch(N){throw console.error("Error uploading photo:",N),N}},v=async g=>{if(g.preventDefault(),!m){console.error("User not authenticated");return}if(!t.trim()||!i.trim()||!o.trim()||!u.trim()){alert("Please fill in all required fields.");return}const w={title:t,ingredients:i,instructions:o,category:u,createdBy:m.username,createdByUid:m.uid,createdAt:new Date,saves:n};try{const N=await YD(qa(ys,"recipes"),w),D=await Promise.all(h.map(R));await ds(N,{photos:D});const L=At(ys,"users",m.uid),b=await _d(L);b.exists()||await Sp(L,{recipes:[],recipeCount:0});const E=(b.exists()?b.data():{recipeCount:0}).recipeCount+1;await ds(L,{recipes:JD({recipeId:N.id,title:w.title}),recipeCount:E}),console.log("Recipe written with ID: ",N.id),await Sp(At(ys,`users/${m.uid}/recipes`,N.id),w),e(""),s(""),a(""),c("Desserts"),p([])}catch(N){console.error("Error adding document: ",N)}};return _.jsxs("form",{onSubmit:v,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),_.jsx("input",{type:"text",id:"title",value:t,onChange:g=>e(g.target.value),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"ingredients",className:"block text-sm font-medium text-gray-700",children:"Ingredients"}),_.jsx("textarea",{id:"ingredients",value:i,onChange:g=>s(g.target.value),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"instructions",className:"block text-sm font-medium text-gray-700",children:"Instructions"}),_.jsx("textarea",{id:"instructions",value:o,onChange:g=>a(g.target.value),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",required:!0})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),_.jsx("select",{id:"category",value:u,onChange:g=>c(g.target.value),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",required:!0,children:P.map(g=>_.jsx("option",{value:g,children:g},g))})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"photo",className:"block text-sm font-medium text-gray-700",children:"Photo"}),_.jsx("input",{type:"file",id:"photo",accept:"image/*",multiple:!0,onChange:T,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"})]}),_.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded-md",children:"Add Recipe"})]})},Pj=()=>_.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h1",{className:"text-3xl",children:"Add New Recipe"}),_.jsx(Rj,{})]}),Cj="/assets/user_icon-MBedxnpu.jpeg",mb="/assets/FoodMaster-DSgZKuci.png",Aj=()=>{const t=Zr(),e=La(),n=Hs(),[r,i]=V.useState(null),[s,o]=V.useState(!1),[a,u]=V.useState(!1),[c,h]=V.useState(!1);V.useEffect(()=>{const P=sI(t,async T=>{if(T)try{const R=At(ys,"users",T.uid);(await _d(R)).exists()?(o(T.uid==="dSbFF2d0vYVDeL6u7lsQY6c6GwC2"),localStorage.setItem("isLoggedIn","true"),i(T)):console.log("User document does not exist")}catch(R){console.error("Error fetching user data:",R)}else localStorage.setItem("isLoggedIn","false"),i(null),o(!1)});return()=>P()},[t]);const p=()=>{t.signOut().then(()=>{localStorage.setItem("isLoggedIn","false"),e("/login")})},m=()=>{u(!a)},x=()=>{h(!c)};return _.jsx("nav",{className:"bg-white border-gray-200 dark:bg-gray-900",children:_.jsxs("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[_.jsxs(Ee,{to:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:[_.jsx("img",{src:mb,className:"h-10",alt:"Logo"}),_.jsx("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"FoodMaster"})]}),_.jsxs("div",{className:"flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse",children:[r&&_.jsxs(_.Fragment,{children:[_.jsxs("button",{type:"button",className:"flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",id:"user-menu-button","aria-expanded":a,onClick:m,children:[_.jsx("span",{className:"sr-only",children:"Open user menu"}),_.jsx("img",{className:"w-8 h-8 rounded-full",src:Cj,alt:"user photo"})]}),a&&_.jsxs("div",{className:"z-50 fixed top-16 right-4 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600",id:"user-dropdown",children:[_.jsx("div",{className:"px-4 py-3",children:_.jsx("span",{className:"block text-sm text-gray-500 truncate dark:text-gray-400",children:r.email})}),_.jsxs("ul",{className:"py-2","aria-labelledby":"user-menu-button",children:[_.jsx("li",{children:_.jsx(Ee,{to:"/profile",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Profile"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/settings",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Settings"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/saved-recipes",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Saved Recipes"})}),_.jsx("li",{children:_.jsx("button",{onClick:p,className:"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]})]})]}),!r&&_.jsxs(_.Fragment,{children:[_.jsx(Ee,{to:"/signup",children:_.jsx("button",{type:"button",className:"text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Get started"})}),_.jsx(Ee,{to:"/login",children:_.jsx("button",{type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Login"})})]}),_.jsxs("button",{type:"button",onClick:x,className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-user","aria-expanded":"false",children:[_.jsx("span",{className:"sr-only",children:"Open main menu"}),_.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:_.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]})]}),_.jsx("div",{className:`items-center justify-between w-full md:hidden ${c?"block":"hidden"}`,id:"navbar-user",children:_.jsxs("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[_.jsx("li",{children:_.jsx(Ee,{to:"/",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,"aria-current":"page",children:"Home"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/about",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/about"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"About"})}),_.jsx(Ee,{to:"/add-recipe",children:_.jsx("button",{type:"button",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/add-recipe"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"Add new recipe"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/recipes",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/recipes"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"Recipes"})}),s&&_.jsx("li",{children:_.jsx(Ee,{to:"/admin-panel",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/admin-panel"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"Admin"})})]})}),_.jsx("div",{className:`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${c?"block":"hidden"}`,id:"navbar-user",children:_.jsxs("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[_.jsx("li",{children:_.jsx(Ee,{to:"/",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,"aria-current":"page",children:"Home"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/about",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/about"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"About"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/recipes",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/recipes"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"Recipes"})}),s&&_.jsx("li",{children:_.jsx(Ee,{to:"/admin-panel",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/admin-panel"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"Admin"})}),r&&_.jsx("li",{children:_.jsx(Ee,{to:"/add-recipe",className:`block py-2 px-3 md:p-0 rounded ${n.pathname==="/add-recipe"?"text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500":"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`,children:"Add new recipe"})})]})})]})})},Jh=({children:t})=>Zr().currentUser!=null?t:_.jsx(aP,{to:"/login"}),Nj=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState(""),o=La(),a=async u=>{u.preventDefault();const c=Zr();try{await YL(c,t,n),o("/")}catch(h){s(h.message)}};return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-2xl mb-4",children:"Login"}),_.jsxs("form",{onSubmit:a,children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-gray-700",children:"Email"}),_.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-gray-700",children:"Password"}),_.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),i&&_.jsx("p",{className:"text-red-500",children:i}),_.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded",children:"Login"})]}),_.jsxs("p",{className:"mt-4 text-gray-600",children:["Don't have an account? ",_.jsx(Ee,{to:"/signup",className:"text-blue-500",children:"Sign up"})]})]})},Oj=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,a]=V.useState(""),u=La(),c=async h=>{h.preventDefault();const p=Zr();try{const x=(await QL(p,t,n)).user;await Sp(At(ys,"users",x.uid),{uid:x.uid,email:t,username:i,savedRecipes:[],recipeCount:0,recipes:[]}),u("/")}catch(m){a(m.message)}};return _.jsxs("div",{className:"container mx-auto p-4",children:[_.jsx("h2",{className:"text-2xl mb-4",children:"Sign Up"}),_.jsxs("form",{onSubmit:c,children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-gray-700",children:"Email"}),_.jsx("input",{type:"email",value:t,onChange:h=>e(h.target.value),className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-gray-700",children:"Password"}),_.jsx("input",{type:"password",value:n,onChange:h=>r(h.target.value),className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-gray-700",children:"Username"}),_.jsx("input",{type:"text",value:i,onChange:h=>s(h.target.value),className:"w-full p-2 border border-gray-300 rounded",required:!0})]}),o&&_.jsx("p",{className:"text-red-500",children:o}),_.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded",children:"Sign Up"})]}),_.jsxs("p",{className:"mt-4 text-gray-600",children:["Already have an account? ",_.jsx(Ee,{to:"/login",className:"text-blue-500",children:"Login"})]})]})},Dj=()=>{const t=new Date().getFullYear();return _.jsx("footer",{className:"bg-white rounded-lg shadow dark:bg-gray-900 m-4",children:_.jsxs("div",{className:"w-full max-w-screen-xl mx-auto p-4 md:py-8",children:[_.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[_.jsxs(Ee,{to:"/",className:"flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse",children:[_.jsx("img",{className:"h-12",src:mb,alt:"FoodMaster Logo"}),_.jsx("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"FoodMaster"})]}),_.jsxs("ul",{className:"flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400",children:[_.jsx("li",{children:_.jsx(Ee,{to:"/",className:"hover:underline me-4 md:me-6",children:"Home"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/about",className:"hover:underline me-4 md:me-6",children:"About"})}),_.jsx("li",{children:_.jsx(Ee,{to:"/recipes",className:"hover:underline me-4 md:me-6",children:"Recipes"})}),localStorage.getItem("isLoggedIn")==="true"&&_.jsx("li",{children:_.jsx(Ee,{to:"/add-recipe",className:"hover:underline me-4 md:me-6",children:"Add New Recipe"})})]})]}),_.jsx("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),_.jsxs("span",{className:"block text-sm text-gray-500 sm:text-center dark:text-gray-400",children:["© ",t," ",_.jsx(Ee,{to:"/",className:"hover:underline",children:"FoodMaster "}),". All Rights Reserved."]})]})})},Lj=()=>{const[t,e]=V.useState([]),n=async()=>{try{const s=(await wd(qa(ys,"recipes"))).docs.map(o=>({id:o.id,...o.data()}));e(s)}catch(i){console.error("Error fetching recipes: ",i)}};V.useEffect(()=>{n()},[]);const r={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return _.jsxs("div",{className:"container mx-auto px-4 py-8",children:[_.jsx("h1",{className:"text-3xl font-bold text-center mb-8",children:"Recipe List"}),_.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",children:t.map(i=>_.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[_.jsx("div",{className:"bg-gray-200 h-48 flex justify-center items-center",children:i.photos&&i.photos.length>0?i.photos.length===1?_.jsx("img",{src:i.photos[0],alt:"Recipe",className:"object-cover w-full h-48"}):_.jsx(XI,{...r,className:"w-full h-full",children:i.photos.map((s,o)=>_.jsx("div",{children:_.jsx("img",{src:s,alt:`Recipe ${o}`,className:"object-cover w-full h-48"})},o))}):_.jsx("span",{className:"text-gray-400",children:"No photo available"})}),_.jsxs("div",{className:"p-8 max-w-lg mx-auto bg-white shadow-md rounded-lg",children:[_.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 border-b pb-2",children:i.title}),_.jsxs("div",{className:"mb-6",children:[_.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-700",children:"Ingredients:"}),_.jsx("ul",{className:"list-disc list-inside space-y-1 text-gray-600",children:i.ingredients.split(`
`).map((s,o)=>_.jsx("li",{children:s},o))})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-700",children:"Instructions:"}),_.jsx("p",{className:"text-gray-600",children:i.instructions})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-700",children:"Category:"}),_.jsx("p",{className:"text-gray-600",children:i.category})]}),_.jsxs("p",{className:"italic text-gray-500 text-right",children:["by ",i.createdBy]})]})]},i.id))})]})},Mj=()=>_.jsx("div",{children:_.jsx(Lj,{})}),Vj=()=>_.jsxs("div",{className:"container mx-auto p-6 text-center",children:[_.jsx("h1",{className:"text-5xl font-bold mb-4 animate-fade-in text-blue-600",children:"Welcome to FoodMaster!"}),_.jsx("p",{className:"text-lg mb-8 animate-fade-in text-gray-700",children:"At FoodMaster, we believe in the power of great recipes to bring people together. Whether you're a professional chef or a home cook, our platform offers a wealth of resources to help you create delicious meals."}),_.jsxs("div",{className:"flex flex-wrap justify-center gap-6",children:[_.jsxs("div",{className:"feature-card w-64 p-6 bg-gray-100 rounded-lg shadow-lg animate-zoom-in",children:[_.jsx("h2",{className:"text-2xl font-semibold mb-2 text-blue-600",children:"Discover Recipes"}),_.jsx("p",{className:"text-gray-700",children:"Explore a wide variety of recipes from different cuisines, crafted by our community of food enthusiasts."})]}),_.jsxs("div",{className:"feature-card w-64 p-6 bg-gray-100 rounded-lg shadow-lg animate-zoom-in",children:[_.jsx("h2",{className:"text-2xl font-semibold mb-2 text-blue-600",children:"Share Your Creations"}),_.jsx("p",{className:"text-gray-700",children:"Upload your own recipes and photos to inspire others and showcase your culinary skills."})]}),_.jsxs("div",{className:"feature-card w-64 p-6 bg-gray-100 rounded-lg shadow-lg animate-zoom-in",children:[_.jsx("h2",{className:"text-2xl font-semibold mb-2 text-blue-600",children:"Save Recipes"}),_.jsx("p",{className:"text-gray-700",children:"Join our community and save recipes to your FoodMaster profile."})]}),_.jsxs("div",{className:"feature-card w-64 p-6 bg-gray-100 rounded-lg shadow-lg animate-zoom-in",children:[_.jsx("h2",{className:"text-2xl font-semibold mb-2 text-blue-600",children:"Connect with Chefs"}),_.jsx("p",{className:"text-gray-700",children:"Follow and connect with professional chefs and home cooks to learn and share ideas."})]}),_.jsxs("div",{className:"feature-card w-64 p-6 bg-gray-100 rounded-lg shadow-lg animate-zoom-in",children:[_.jsx("h2",{className:"text-2xl font-semibold mb-2 text-blue-600",children:"Create Meal Plans"}),_.jsx("p",{className:"text-gray-700",children:"Organize your meals for the week with our easy-to-use meal planning tools."})]})]}),_.jsxs("div",{className:"mt-12 animate-fade-in",children:[_.jsx("h2",{className:"text-3xl font-bold mb-4 text-blue-600",children:"Join FoodMaster Today!"}),_.jsx("p",{className:"text-lg mb-6 text-gray-700",children:"Sign up now to start discovering, sharing, and connecting with the world of culinary delights."}),_.jsx(Ee,{to:"/recipes",children:_.jsx("button",{className:"px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition",children:"Get Started"})})]})]}),jj=()=>_.jsxs("div",{children:[" ",_.jsx(Vj,{})," "]}),Fj=()=>{const[t,e]=V.useState([]),n=fd();V.useEffect(()=>{(async()=>{const s=await wd(qa(n,"users"));e(s.docs.map(o=>({id:o.id,...o.data()})))})()},[n]);const r=async i=>{await xa(At(n,"users",i)),e(t.filter(s=>s.id!==i))};return _.jsx("div",{className:"user-list",children:t.map(i=>_.jsxs("div",{className:"bg-white p-4 rounded shadow mb-4",children:[_.jsx("h3",{className:"text-xl font-semibold mb-2",children:i.username}),_.jsxs("p",{children:["Email: ",i.email]}),_.jsxs("p",{children:["Recipes user uploaded: ",i.recipeCount,"."]}),_.jsx("button",{onClick:()=>r(i.id),className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2",children:"Delete"})]},i.id))})},Uj=()=>{const[t,e]=V.useState([]),[n,r]=V.useState(!1),i=fd(),s=Zr();V.useEffect(()=>{const a=sI(s,async u=>{if(u)try{r(u.uid==="dSbFF2d0vYVDeL6u7lsQY6c6GwC2")}catch(c){console.error("Error fetching user data:",c)}else r(!1)});return()=>a()},[s]),V.useEffect(()=>{(async()=>{if(n)try{const c=(await wd(qa(i,"recipes"))).docs.map(h=>({id:h.id,...h.data()}));e(c)}catch(u){console.error("Error fetching recipes:",u)}})()},[n,i]);const o=async a=>{try{const u=await _d(At(i,"recipes",a));if(u.exists()){console.log("Recipe document data:",u.data());const c=u.data().createdByUid;if(c){await xa(At(i,"recipes",a)),console.log(`Deleted from global recipes collection: ${a}`),await xa(At(i,`users/${c}/recipes`,a)),console.log(`Deleted from user's subcollection: ${a}`);const h=At(i,"users",c);await ds(h,{recipeCount:LT(-1)}),console.log(`Decremented recipe count for user: ${c}`),e(t.filter(p=>p.id!==a))}else console.error(`No user ID found for recipe: ${a}`)}else console.error(`Recipe document not found: ${a}`)}catch(u){console.error("Error deleting recipe:",u)}};return _.jsxs("div",{className:"admin-panel p-6 bg-gray-100 min-h-screen",children:[_.jsx("h1",{className:"text-4xl font-bold mb-8 text-center",children:"Admin Panel"}),_.jsx("div",{className:"mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(a=>_.jsxs("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[_.jsx("div",{className:"bg-gray-200 h-48 flex justify-center items-center",children:a.photos&&a.photos.length>0?_.jsx("img",{src:a.photos[0],alt:"Recipe",className:"object-cover w-full h-48"}):_.jsx("span",{className:"text-gray-400",children:"No photo available"})}),_.jsxs("div",{className:"p-6",children:[_.jsx("h2",{className:"text-xl font-semibold mb-2",children:a.title}),_.jsx("h3",{className:"text-lg font-medium mb-2",children:"Ingredients:"}),_.jsx("p",{className:"text-gray-700 mb-4",children:a.ingredients}),_.jsx("h3",{className:"text-lg font-medium mb-2",children:"Instructions:"}),_.jsx("p",{className:"text-gray-700",children:a.instructions}),_.jsx("h3",{className:"text-lg font-medium mb-2",children:"Category:"}),_.jsx("p",{className:"text-gray-700",children:a.category}),_.jsxs("p",{className:"italic mt-1",children:["by ",a.createdBy]}),_.jsx("button",{onClick:()=>o(a.id),className:"mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"Delete Recipe"})]})]},a.id))}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"All Users"}),_.jsx(Fj,{})]})]})},$j=()=>_.jsx("div",{children:"ProfileSettings"}),zj=()=>_.jsxs("div",{children:[" ",_.jsx($j,{})," "]}),Bj=()=>_.jsx("div",{children:"UserSavedRecipes"}),Hj=()=>_.jsxs("div",{children:[" ",_.jsx(Bj,{})," "]}),Wj=()=>_.jsx(gP,{children:_.jsxs("div",{className:"App",children:[_.jsx(Aj,{}),_.jsxs(uP,{children:[_.jsx(fn,{path:"/",element:_.jsx(wA,{})}),_.jsx(fn,{path:"/login",element:_.jsx(Nj,{})}),_.jsx(fn,{path:"/signup",element:_.jsx(Oj,{})}),_.jsx(fn,{path:"/recipes",element:_.jsx(Mj,{})}),_.jsx(fn,{path:"/about",element:_.jsx(jj,{})}),_.jsx(fn,{path:"/settings",element:_.jsx(zj,{})}),_.jsx(fn,{path:"/saved-recipes",element:_.jsx(Hj,{})}),_.jsx(fn,{path:"/profile",element:_.jsx(Jh,{children:_.jsx(u3,{})})}),_.jsx(fn,{path:"/add-recipe",element:_.jsx(Jh,{children:_.jsx(Pj,{})})}),_.jsx(fn,{path:"/admin-panel",element:_.jsx(Jh,{children:_.jsx(Uj,{})})})]}),_.jsx(Dj,{})]})});ef.createRoot(document.getElementById("root")).render(_.jsx(dw.StrictMode,{children:_.jsx(Wj,{})}));
