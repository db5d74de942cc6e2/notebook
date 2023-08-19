var Dp=Object.defineProperty;var xp=(n,e,t)=>e in n?Dp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ml=(n,e,t)=>(xp(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var jr,U,Nu,Ut,Pl,Ou,po,pr={},Lu=[],Np=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Qo=Array.isArray;function vt(n,e){for(var t in e)n[t]=e[t];return n}function Mu(n){var e=n.parentNode;e&&e.removeChild(n)}function Op(n,e,t){var i,r,s,o={};for(s in e)s=="key"?i=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?jr.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)o[s]===void 0&&(o[s]=n.defaultProps[s]);return er(n,o,i,r,null)}function er(n,e,t,i,r){var s={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Nu};return r==null&&U.vnode!=null&&U.vnode(s),s}function Gt(n){return n.children}function tr(n,e){this.props=n,this.context=e}function Jn(n,e){if(e==null)return n.__?Jn(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Jn(n):null}function Pu(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Pu(n)}}function Ul(n){(!n.__d&&(n.__d=!0)&&Ut.push(n)&&!gr.__r++||Pl!==U.debounceRendering)&&((Pl=U.debounceRendering)||Ou)(gr)}function gr(){var n,e,t,i,r,s,o,a;for(Ut.sort(po);n=Ut.shift();)n.__d&&(e=Ut.length,i=void 0,r=void 0,o=(s=(t=n).__v).__e,(a=t.__P)&&(i=[],(r=vt({},s)).__v=s.__v+1,Yo(a,s,r,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,i,o??Jn(s),s.__h),Bu(i,s),s.__e!=o&&Pu(s)),Ut.length>e&&Ut.sort(po));gr.__r=0}function Uu(n,e,t,i,r,s,o,a,l,u){var c,h,f,d,m,E,T,b=i&&i.__k||Lu,N=b.length;for(t.__k=[],c=0;c<e.length;c++)if((d=t.__k[c]=(d=e[c])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?er(null,d,null,null,d):Qo(d)?er(Gt,{children:d},null,null,null):d.__b>0?er(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=t,d.__b=t.__b+1,(f=b[c])===null||f&&d.key==f.key&&d.type===f.type)b[c]=void 0;else for(h=0;h<N;h++){if((f=b[h])&&d.key==f.key&&d.type===f.type){b[h]=void 0;break}f=null}Yo(n,d,f=f||pr,r,s,o,a,l,u),m=d.__e,(h=d.ref)&&f.ref!=h&&(T||(T=[]),f.ref&&T.push(f.ref,null,d),T.push(h,d.__c||m,d)),m!=null?(E==null&&(E=m),typeof d.type=="function"&&d.__k===f.__k?d.__d=l=Fu(d,l,n):l=$u(n,d,f,b,m,l),typeof t.type=="function"&&(t.__d=l)):l&&f.__e==l&&l.parentNode!=n&&(l=Jn(f))}for(t.__e=E,c=N;c--;)b[c]!=null&&(typeof t.type=="function"&&b[c].__e!=null&&b[c].__e==t.__d&&(t.__d=Vu(i).nextSibling),Hu(b[c],b[c]));if(T)for(c=0;c<T.length;c++)zu(T[c],T[++c],T[++c])}function Fu(n,e,t){for(var i,r=n.__k,s=0;r&&s<r.length;s++)(i=r[s])&&(i.__=n,e=typeof i.type=="function"?Fu(i,e,t):$u(t,i,i,r,i.__e,e));return e}function $u(n,e,t,i,r,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==n)n.appendChild(r),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<i.length;l+=1)if(a==r)break e;n.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function Vu(n){var e,t,i;if(n.type==null||typeof n.type=="string")return n.__e;if(n.__k){for(e=n.__k.length-1;e>=0;e--)if((t=n.__k[e])&&(i=Vu(t)))return i}return null}function Lp(n,e,t,i,r){var s;for(s in t)s==="children"||s==="key"||s in e||mr(n,s,null,t[s],i);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||mr(n,s,e[s],t[s],i)}function Fl(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Np.test(e)?t:t+"px"}function mr(n,e,t,i,r){var s;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Fl(n.style,e,"");if(t)for(e in t)i&&t[e]===i[e]||Fl(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?i||n.addEventListener(e,s?Vl:$l,s):n.removeEventListener(e,s?Vl:$l,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,t))}}function $l(n){return this.l[n.type+!1](U.event?U.event(n):n)}function Vl(n){return this.l[n.type+!0](U.event?U.event(n):n)}function Yo(n,e,t,i,r,s,o,a,l){var u,c,h,f,d,m,E,T,b,N,$,q,K,X,we,ee=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(l=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(u=U.__b)&&u(e);try{e:if(typeof ee=="function"){if(T=e.props,b=(u=ee.contextType)&&i[u.__c],N=u?b?b.props.value:u.__:i,t.__c?E=(c=e.__c=t.__c).__=c.__E:("prototype"in ee&&ee.prototype.render?e.__c=c=new ee(T,N):(e.__c=c=new tr(T,N),c.constructor=ee,c.render=Pp),b&&b.sub(c),c.props=T,c.state||(c.state={}),c.context=N,c.__n=i,h=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),ee.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=vt({},c.__s)),vt(c.__s,ee.getDerivedStateFromProps(T,c.__s))),f=c.props,d=c.state,c.__v=e,h)ee.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(ee.getDerivedStateFromProps==null&&T!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(T,N),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(T,c.__s,N)===!1||e.__v===t.__v){for(e.__v!==t.__v&&(c.props=T,c.state=c.__s,c.__d=!1),c.__e=!1,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(Ke){Ke&&(Ke.__=e)}),$=0;$<c._sb.length;$++)c.__h.push(c._sb[$]);c._sb=[],c.__h.length&&o.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(T,c.__s,N),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,d,m)})}if(c.context=N,c.props=T,c.__P=n,q=U.__r,K=0,"prototype"in ee&&ee.prototype.render){for(c.state=c.__s,c.__d=!1,q&&q(e),u=c.render(c.props,c.state,c.context),X=0;X<c._sb.length;X++)c.__h.push(c._sb[X]);c._sb=[]}else do c.__d=!1,q&&q(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++K<25);c.state=c.__s,c.getChildContext!=null&&(i=vt(vt({},i),c.getChildContext())),h||c.getSnapshotBeforeUpdate==null||(m=c.getSnapshotBeforeUpdate(f,d)),Uu(n,Qo(we=u!=null&&u.type===Gt&&u.key==null?u.props.children:u)?we:[we],e,t,i,r,s,o,a,l),c.base=e.__e,e.__h=null,c.__h.length&&o.push(c),E&&(c.__E=c.__=null),c.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Mp(t.__e,e,t,i,r,s,o,l);(u=U.diffed)&&u(e)}catch(Ke){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),U.__e(Ke,e,t)}}function Bu(n,e){U.__c&&U.__c(e,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(i){i.call(t)})}catch(i){U.__e(i,t.__v)}})}function Mp(n,e,t,i,r,s,o,a){var l,u,c,h=t.props,f=e.props,d=e.type,m=0;if(d==="svg"&&(r=!0),s!=null){for(;m<s.length;m++)if((l=s[m])&&"setAttribute"in l==!!d&&(d?l.localName===d:l.nodeType===3)){n=l,s[m]=null;break}}if(n==null){if(d===null)return document.createTextNode(f);n=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),s=null,a=!1}if(d===null)h===f||a&&n.data===f||(n.data=f);else{if(s=s&&jr.call(n.childNodes),u=(h=t.props||pr).dangerouslySetInnerHTML,c=f.dangerouslySetInnerHTML,!a){if(s!=null)for(h={},m=0;m<n.attributes.length;m++)h[n.attributes[m].name]=n.attributes[m].value;(c||u)&&(c&&(u&&c.__html==u.__html||c.__html===n.innerHTML)||(n.innerHTML=c&&c.__html||""))}if(Lp(n,f,h,r,a),c)e.__k=[];else if(Uu(n,Qo(m=e.props.children)?m:[m],e,t,i,r&&d!=="foreignObject",s,o,s?s[0]:t.__k&&Jn(t,0),a),s!=null)for(m=s.length;m--;)s[m]!=null&&Mu(s[m]);a||("value"in f&&(m=f.value)!==void 0&&(m!==n.value||d==="progress"&&!m||d==="option"&&m!==h.value)&&mr(n,"value",m,h.value,!1),"checked"in f&&(m=f.checked)!==void 0&&m!==n.checked&&mr(n,"checked",m,h.checked,!1))}return n}function zu(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(i){U.__e(i,t)}}function Hu(n,e,t){var i,r;if(U.unmount&&U.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||zu(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){U.__e(s,e)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&Hu(i[r],e,t||typeof n.type!="function");t||n.__e==null||Mu(n.__e),n.__=n.__e=n.__d=void 0}function Pp(n,e,t){return this.constructor(n,t)}function Up(n,e,t){var i,r,s;U.__&&U.__(n,e),r=(i=typeof t=="function")?null:t&&t.__k||e.__k,s=[],Yo(e,n=(!i&&t||e).__k=Op(Gt,null,[n]),r||pr,pr,e.ownerSVGElement!==void 0,!i&&t?[t]:r?null:e.firstChild?jr.call(e.childNodes):null,s,!i&&t?t:r?r.__e:e.firstChild,i),Bu(s,n)}jr=Lu.slice,U={__e:function(n,e,t,i){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(n)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),o=r.__d),o)return r.__E=r}catch(a){n=a}throw n}},Nu=0,tr.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=vt({},this.state),typeof n=="function"&&(n=n(vt({},t),this.props)),n&&vt(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Ul(this))},tr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Ul(this))},tr.prototype.render=Gt,Ut=[],Ou=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,po=function(n,e){return n.__v.__b-e.__v.__b},gr.__r=0;var Gr,ie,Vs,Bl,yr=0,qu=[],nr=[],zl=U.__b,Hl=U.__r,ql=U.diffed,jl=U.__c,Gl=U.unmount;function Xo(n,e){U.__h&&U.__h(ie,n,yr||e),yr=0;var t=ie.__H||(ie.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:nr}),t.__[n]}function _n(n){return yr=1,Fp(Gu,n)}function Fp(n,e,t){var i=Xo(Gr++,2);if(i.t=n,!i.__c&&(i.__=[t?t(e):Gu(void 0,e),function(a){var l=i.__N?i.__N[0]:i.__[0],u=i.t(l,a);l!==u&&(i.__N=[u,i.__[1]],i.__c.setState({}))}],i.__c=ie,!ie.u)){var r=function(a,l,u){if(!i.__c.__H)return!0;var c=i.__c.__H.__.filter(function(f){return f.__c});if(c.every(function(f){return!f.__N}))return!s||s.call(this,a,l,u);var h=!1;return c.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(h=!0)}}),!(!h&&i.__c.props===a)&&(!s||s.call(this,a,l,u))};ie.u=!0;var s=ie.shouldComponentUpdate,o=ie.componentWillUpdate;ie.componentWillUpdate=function(a,l,u){if(this.__e){var c=s;s=void 0,r(a,l,u),s=c}o&&o.call(this,a,l,u)},ie.shouldComponentUpdate=r}return i.__N||i.__}function Jo(n,e){var t=Xo(Gr++,3);!U.__s&&ju(t.__H,e)&&(t.__=n,t.i=e,ie.__H.__h.push(t))}function go(n){return yr=5,$p(function(){return{current:n}},[])}function $p(n,e){var t=Xo(Gr++,7);return ju(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function Vp(){for(var n;n=qu.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(ir),n.__H.__h.forEach(mo),n.__H.__h=[]}catch(e){n.__H.__h=[],U.__e(e,n.__v)}}U.__b=function(n){ie=null,zl&&zl(n)},U.__r=function(n){Hl&&Hl(n),Gr=0;var e=(ie=n.__c).__H;e&&(Vs===ie?(e.__h=[],ie.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=nr,t.__N=t.i=void 0})):(e.__h.forEach(ir),e.__h.forEach(mo),e.__h=[])),Vs=ie},U.diffed=function(n){ql&&ql(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(qu.push(e)!==1&&Bl===U.requestAnimationFrame||((Bl=U.requestAnimationFrame)||Bp)(Vp)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==nr&&(t.__=t.__V),t.i=void 0,t.__V=nr})),Vs=ie=null},U.__c=function(n,e){e.some(function(t){try{t.__h.forEach(ir),t.__h=t.__h.filter(function(i){return!i.__||mo(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],U.__e(i,t.__v)}}),jl&&jl(n,e)},U.unmount=function(n){Gl&&Gl(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{ir(i)}catch(r){e=r}}),t.__H=void 0,e&&U.__e(e,t.__v))};var Wl=typeof requestAnimationFrame=="function";function Bp(n){var e,t=function(){clearTimeout(i),Wl&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,100);Wl&&(e=requestAnimationFrame(t))}function ir(n){var e=ie,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),ie=e}function mo(n){var e=ie;n.__c=n.__(),ie=e}function ju(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Gu(n,e){return typeof e=="function"?e(n):e}/**
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
 */const Wu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zp=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,u=l?n[r+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),i.push(t[c],t[h],t[f],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||u==null||h==null)throw new Hp;const f=s<<2|a>>4;if(i.push(f),u!==64){const d=a<<4&240|u>>2;if(i.push(d),h!==64){const m=u<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qp=function(n){const e=Wu(n);return Ku.encodeByteArray(e,!0)},_r=function(n){return qp(n).replace(/\./g,"")},Qu=function(n){try{return Ku.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gp=()=>jp().__FIREBASE_DEFAULTS__,Wp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Kp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qu(n[1]);return e&&JSON.parse(e)},Zo=()=>{try{return Gp()||Wp()||Kp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yu=n=>{var e,t;return(t=(e=Zo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qp=n=>{const e=Yu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Yp=()=>{var n;return(n=Zo())===null||n===void 0?void 0:n.config},Xu=n=>{var e;return(e=Zo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Xp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Jp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[_r(JSON.stringify(t)),_r(JSON.stringify(o)),a].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function eg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ng(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ig(){try{return typeof indexedDB=="object"}catch{return!1}}function rg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const sg="FirebaseError";class ft extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=sg,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?og(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ft(r,a,i)}}function og(n,e){return n.replace(ag,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const ag=/\{\$([^}]+)}/g;function lg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Kl(s)&&Kl(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Kl(n){return n!==null&&typeof n=="object"}/**
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
 */function pi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function cg(n,e){const t=new ug(n,e);return t.subscribe.bind(t)}class ug{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");hg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Bs),r.error===void 0&&(r.error=Bs),r.complete===void 0&&(r.complete=Bs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bs(){}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pt="[DEFAULT]";/**
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
 */class dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Xp;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pg(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fg(n){return n===Pt?void 0:n}function pg(n){return n.instantiationMode==="EAGER"}/**
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
 */class gg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const mg={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},yg=H.INFO,_g={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},vg=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=_g[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ea{constructor(e){this.name=e,this._logLevel=yg,this._logHandler=vg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const wg=(n,e)=>e.some(t=>n instanceof t);let Ql,Yl;function Eg(){return Ql||(Ql=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tg(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,yo=new WeakMap,Zu=new WeakMap,zs=new WeakMap,ta=new WeakMap;function Ig(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(wt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ju.set(t,n)}).catch(()=>{}),ta.set(e,n),e}function bg(n){if(yo.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});yo.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kg(n){_o=n(_o)}function Sg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hs(this),e,...t);return Zu.set(i,e.sort?e.sort():[e]),wt(i)}:Tg().includes(n)?function(...e){return n.apply(Hs(this),e),wt(Ju.get(this))}:function(...e){return wt(n.apply(Hs(this),e))}}function Ag(n){return typeof n=="function"?Sg(n):(n instanceof IDBTransaction&&bg(n),wg(n,Eg())?new Proxy(n,_o):n)}function wt(n){if(n instanceof IDBRequest)return Ig(n);if(zs.has(n))return zs.get(n);const e=Ag(n);return e!==n&&(zs.set(n,e),ta.set(e,n)),e}const Hs=n=>ta.get(n);function Cg(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=wt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(wt(o.result),l.oldVersion,l.newVersion,wt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Rg=["get","getKey","getAll","getAllKeys","count"],Dg=["put","add","delete","clear"],qs=new Map;function Xl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qs.get(e))return qs.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Dg.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Rg.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return qs.set(e,s),s}kg(n=>({...n,get:(e,t,i)=>Xl(e,t)||n.get(e,t,i),has:(e,t)=>!!Xl(e,t)||n.has(e,t)}));/**
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
 */class xg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ng(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ng(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vo="@firebase/app",Jl="0.9.8";/**
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
 */const Kt=new ea("@firebase/app"),Og="@firebase/app-compat",Lg="@firebase/analytics-compat",Mg="@firebase/analytics",Pg="@firebase/app-check-compat",Ug="@firebase/app-check",Fg="@firebase/auth",$g="@firebase/auth-compat",Vg="@firebase/database",Bg="@firebase/database-compat",zg="@firebase/functions",Hg="@firebase/functions-compat",qg="@firebase/installations",jg="@firebase/installations-compat",Gg="@firebase/messaging",Wg="@firebase/messaging-compat",Kg="@firebase/performance",Qg="@firebase/performance-compat",Yg="@firebase/remote-config",Xg="@firebase/remote-config-compat",Jg="@firebase/storage",Zg="@firebase/storage-compat",em="@firebase/firestore",tm="@firebase/firestore-compat",nm="firebase",im="9.20.0";/**
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
 */const wo="[DEFAULT]",rm={[vo]:"fire-core",[Og]:"fire-core-compat",[Mg]:"fire-analytics",[Lg]:"fire-analytics-compat",[Ug]:"fire-app-check",[Pg]:"fire-app-check-compat",[Fg]:"fire-auth",[$g]:"fire-auth-compat",[Vg]:"fire-rtdb",[Bg]:"fire-rtdb-compat",[zg]:"fire-fn",[Hg]:"fire-fn-compat",[qg]:"fire-iid",[jg]:"fire-iid-compat",[Gg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Kg]:"fire-perf",[Qg]:"fire-perf-compat",[Yg]:"fire-rc",[Xg]:"fire-rc-compat",[Jg]:"fire-gcs",[Zg]:"fire-gcs-compat",[em]:"fire-fst",[tm]:"fire-fst-compat","fire-js":"fire-js",[nm]:"fire-js-all"};/**
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
 */const wr=new Map,Eo=new Map;function sm(n,e){try{n.container.addComponent(e)}catch(t){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vn(n){const e=n.name;if(Eo.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,n);for(const t of wr.values())sm(t,n);return!0}function na(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const om={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Et=new fi("app","Firebase",om);/**
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
 */class am{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const Dn=im;function eh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:wo,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Et.create("bad-app-name",{appName:String(r)});if(t||(t=Yp()),!t)throw Et.create("no-options");const s=wr.get(r);if(s){if(vr(t,s.options)&&vr(i,s.config))return s;throw Et.create("duplicate-app",{appName:r})}const o=new gg(r);for(const l of Eo.values())o.addComponent(l);const a=new am(t,i,o);return wr.set(r,a),a}function th(n=wo){const e=wr.get(n);if(!e&&n===wo)return eh();if(!e)throw Et.create("no-app",{appName:n});return e}function Tt(n,e,t){var i;let r=(i=rm[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}vn(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lm="firebase-heartbeat-database",cm=1,Zn="firebase-heartbeat-store";let js=null;function nh(){return js||(js=Cg(lm,cm,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Zn)}}}).catch(n=>{throw Et.create("idb-open",{originalErrorMessage:n.message})})),js}async function um(n){try{return(await nh()).transaction(Zn).objectStore(Zn).get(ih(n))}catch(e){if(e instanceof ft)Kt.warn(e.message);else{const t=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(t.message)}}}async function Zl(n,e){try{const i=(await nh()).transaction(Zn,"readwrite");return await i.objectStore(Zn).put(e,ih(n)),i.done}catch(t){if(t instanceof ft)Kt.warn(t.message);else{const i=Et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Kt.warn(i.message)}}}function ih(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hm=1024,dm=30*24*60*60*1e3;class fm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gm(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ec();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=dm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ec(),{heartbeatsToSend:t,unsentEntries:i}=pm(this._heartbeatsCache.heartbeats),r=_r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ec(){return new Date().toISOString().substring(0,10)}function pm(n,e=hm){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),tc(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),tc(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class gm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ig()?rg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await um(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tc(n){return _r(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function mm(n){vn(new Wt("platform-logger",e=>new xg(e),"PRIVATE")),vn(new Wt("heartbeat",e=>new fm(e),"PRIVATE")),Tt(vo,Jl,n),Tt(vo,Jl,"esm2017"),Tt("fire-js","")}mm("");var ym="firebase",_m="9.20.0";/**
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
 */Tt(ym,_m,"app");function ia(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function rh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vm=rh,sh=new fi("auth","Firebase",rh());/**
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
 */const Er=new ea("@firebase/auth");function wm(n,...e){Er.logLevel<=H.WARN&&Er.warn(`Auth (${Dn}): ${n}`,...e)}function rr(n,...e){Er.logLevel<=H.ERROR&&Er.error(`Auth (${Dn}): ${n}`,...e)}/**
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
 */function et(n,...e){throw ra(n,...e)}function Xe(n,...e){return ra(n,...e)}function oh(n,e,t){const i=Object.assign(Object.assign({},vm()),{[e]:t});return new fi("auth","Firebase",i).create(e,{appName:n.name})}function Em(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&et(n,"argument-error"),oh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ra(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return sh.create(n,...e)}function L(n,e,...t){if(!n)throw ra(e,...t)}function st(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rr(e),new Error(e)}function lt(n,e){n||st(e)}/**
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
 */function To(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Tm(){return nc()==="http:"||nc()==="https:"}function nc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Im(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tm()||eg()||"connection"in navigator)?navigator.onLine:!0}function bm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class gi{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=Zp()||tg()}get(){return Im()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sa(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ah{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sm=new gi(3e4,6e4);function lh(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function mi(n,e,t,i,r={}){return ch(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=pi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ah.fetch()(uh(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ch(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},km),e);try{const r=new Cm(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bi(n,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oh(n,c,u);et(n,c)}}catch(r){if(r instanceof ft)throw r;et(n,"network-request-failed",{message:String(r)})}}async function Am(n,e,t,i,r={}){const s=await mi(n,e,t,i,r);return"mfaPendingCredential"in s&&et(n,"multi-factor-auth-required",{_serverResponse:s}),s}function uh(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?sa(n.config,r):`${n.config.apiScheme}://${r}`}class Cm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xe(this.auth,"network-request-failed")),Sm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bi(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Xe(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Rm(n,e){return mi(n,"POST","/v1/accounts:delete",e)}async function Dm(n,e){return mi(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xm(n,e=!1){const t=xe(n),i=await t.getIdToken(e),r=oa(i);L(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Wn(Gs(r.auth_time)),issuedAtTime:Wn(Gs(r.iat)),expirationTime:Wn(Gs(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gs(n){return Number(n)*1e3}function oa(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qu(t);return r?JSON.parse(r):(rr("Failed to decode base64 JWT payload"),null)}catch(r){return rr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Nm(n){const e=oa(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ei(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ft&&Om(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Om({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tr(n){var e;const t=n.auth,i=await n.getIdToken(),r=await ei(n,Dm(t,{idToken:i}));L(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Um(s.providerUserInfo):[],a=Pm(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function Mm(n){const e=xe(n);await Tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Pm(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Um(n){return n.map(e=>{var{providerId:t}=e,i=ia(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Fm(n,e){const t=await ch(n,{},async()=>{const i=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=uh(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ah.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Fm(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new ti;return i&&(L(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(L(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function pt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=ia(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ei(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xm(this,e)}reload(){return Mm(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Tr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ei(this,Rm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,u,c;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(r=t.email)!==null&&r!==void 0?r:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(u=t.createdAt)!==null&&u!==void 0?u:void 0,N=(c=t.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:$,emailVerified:q,isAnonymous:K,providerData:X,stsTokenManager:we}=t;L($&&we,e,"internal-error");const ee=ti.fromJSON(this.name,we);L(typeof $=="string",e,"internal-error"),pt(h,e.name),pt(f,e.name),L(typeof q=="boolean",e,"internal-error"),L(typeof K=="boolean",e,"internal-error"),pt(d,e.name),pt(m,e.name),pt(E,e.name),pt(T,e.name),pt(b,e.name),pt(N,e.name);const Ke=new zt({uid:$,auth:e,email:f,emailVerified:q,displayName:h,isAnonymous:K,photoURL:m,phoneNumber:d,tenantId:E,stsTokenManager:ee,createdAt:b,lastLoginAt:N});return X&&Array.isArray(X)&&(Ke.providerData=X.map(Ue=>Object.assign({},Ue))),T&&(Ke._redirectEventId=T),Ke}static async _fromIdTokenResponse(e,t,i=!1){const r=new ti;r.updateFromServerResponse(t);const s=new zt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Tr(s),s}}/**
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
 */const ic=new Map;function ot(n){lt(n instanceof Function,"Expected a class definition");let e=ic.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ic.set(n,e),e)}/**
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
 */class dh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dh.type="NONE";const rc=dh;/**
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
 */function sr(n,e,t){return`firebase:${n}:${e}:${t}`}class fn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=sr(this.userKey,r.apiKey,s),this.fullPersistenceKey=sr("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new fn(ot(rc),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||ot(rc);const o=sr(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const c=await u._get(o);if(c){const h=zt._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fn(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new fn(s,e,i))}}/**
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
 */function sc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yh(e))return"Blackberry";if(_h(e))return"Webos";if(aa(e))return"Safari";if((e.includes("chrome/")||ph(e))&&!e.includes("edge/"))return"Chrome";if(mh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fh(n=Ce()){return/firefox\//i.test(n)}function aa(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ph(n=Ce()){return/crios\//i.test(n)}function gh(n=Ce()){return/iemobile/i.test(n)}function mh(n=Ce()){return/android/i.test(n)}function yh(n=Ce()){return/blackberry/i.test(n)}function _h(n=Ce()){return/webos/i.test(n)}function Wr(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $m(n=Ce()){var e;return Wr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vm(){return ng()&&document.documentMode===10}function vh(n=Ce()){return Wr(n)||mh(n)||_h(n)||yh(n)||/windows phone/i.test(n)||gh(n)}function Bm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wh(n,e=[]){let t;switch(n){case"Browser":t=sc(Ce());break;case"Worker":t=`${sc(Ce())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dn}/${i}`}async function Eh(n,e){return mi(n,"GET","/v2/recaptchaConfig",lh(n,e))}function oc(n){return n!==void 0&&n.enterprise!==void 0}class Th{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function zm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ih(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Xe("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",zm().appendChild(i)})}function Hm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qm="https://www.google.com/recaptcha/enterprise.js?render=",jm="recaptcha-enterprise";class Gm{constructor(e){this.type=jm,this.auth=yi(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Eh(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Th(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;oc(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&oc(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ih(qm+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Wm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Km{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ac(this),this.idTokenSubscription=new ac(this),this.beforeStateQueue=new Wm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?xe(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}async initializeRecaptchaConfig(){const e=await Eh(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Th(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Gm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yi(n){return xe(n)}class ac{constructor(e){this.auth=e,this.observer=null,this.addObserver=cg(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Qm(n,e){const t=na(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(vr(s,e??{}))return r;et(r,"already-initialized")}return t.initialize({options:e})}function Ym(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Xm(n,e,t){const i=yi(n);L(i._canInitEmulator,i,"emulator-config-failed"),L(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=bh(e),{host:o,port:a}=Jm(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Zm()}function bh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Jm(n){const e=bh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:lc(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:lc(o)}}}function lc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class kh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
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
 */async function pn(n,e){return Am(n,"POST","/v1/accounts:signInWithIdp",lh(n,e))}/**
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
 */const ey="http://localhost";class Qt extends kh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=ia(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Qt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,pn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pi(t)}return e}}/**
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
 */class la{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _i extends la{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends _i{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class yt extends _i{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
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
 */class _t extends _i{constructor(){super("twitter.com")}static credential(e,t){return Qt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _t.credential(t,i)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await zt._fromIdTokenResponse(e,i,r),o=cc(i);return new wn({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=cc(i);return new wn({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function cc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ir extends ft{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Ir(e,t,i,r)}}function Sh(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(n,s,e,i):s})}async function ty(n,e,t=!1){const i=await ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",i)}/**
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
 */async function ny(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await ei(n,Sh(i,r,e,n),t);L(s.idToken,i,"internal-error");const o=oa(s.idToken);L(o,i,"internal-error");const{sub:a}=o;return L(n.uid===a,i,"user-mismatch"),wn._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(i,"user-mismatch"),s}}/**
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
 */async function iy(n,e,t=!1){const i="signIn",r=await Sh(n,i,e),s=await wn._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function ry(n,e,t,i){return xe(n).onIdTokenChanged(e,t,i)}function sy(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function oy(n,e,t,i){return xe(n).onAuthStateChanged(e,t,i)}function ay(n){return xe(n).signOut()}const br="__sak";/**
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
 */class Ah{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ly(){const n=Ce();return aa(n)||Wr(n)}const cy=1e3,uy=10;class Ch extends Ah{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ly()&&Bm(),this.fallbackToPolling=vh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Vm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,uy):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ch.type="LOCAL";const hy=Ch;/**
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
 */class Rh extends Ah{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rh.type="SESSION";const Dh=Rh;/**
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
 */function dy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Kr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await dy(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kr.receivers=[];/**
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
 */function ca(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ca("",20);r.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Je(){return window}function py(n){Je().location.href=n}/**
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
 */function xh(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function gy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function my(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yy(){return xh()?self:null}/**
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
 */const Nh="firebaseLocalStorageDb",_y=1,kr="firebaseLocalStorage",Oh="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qr(n,e){return n.transaction([kr],e?"readwrite":"readonly").objectStore(kr)}function vy(){const n=indexedDB.deleteDatabase(Nh);return new vi(n).toPromise()}function Io(){const n=indexedDB.open(Nh,_y);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(kr,{keyPath:Oh})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(kr)?e(i):(i.close(),await vy(),e(await Io()))})})}async function uc(n,e,t){const i=Qr(n,!0).put({[Oh]:e,value:t});return new vi(i).toPromise()}async function wy(n,e){const t=Qr(n,!1).get(e),i=await new vi(t).toPromise();return i===void 0?null:i.value}function hc(n,e){const t=Qr(n,!0).delete(e);return new vi(t).toPromise()}const Ey=800,Ty=3;class Lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Io(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ty)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kr._getInstance(yy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gy(),!this.activeServiceWorker)return;this.sender=new fy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||my()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Io();return await uc(e,br,"1"),await hc(e,br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uc(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>wy(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Qr(r,!1).getAll();return new vi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ey)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lh.type="LOCAL";const Iy=Lh;new gi(3e4,6e4);/**
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
 */function Mh(n,e){return e?ot(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ua extends kh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function by(n){return iy(n.auth,new ua(n),n.bypassAuthState)}function ky(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),ny(t,new ua(n),n.bypassAuthState)}async function Sy(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),ty(t,new ua(n),n.bypassAuthState)}/**
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
 */class Ph{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return by;case"linkViaPopup":case"linkViaRedirect":return Sy;case"reauthViaPopup":case"reauthViaRedirect":return ky;default:et(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ay=new gi(2e3,1e4);async function Cy(n,e,t){const i=yi(n);Em(n,e,la);const r=Mh(i,t);return new Ft(i,"signInViaPopup",e,r).executeNotNull()}class Ft extends Ph{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ay.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const Ry="pendingRedirect",or=new Map;class Dy extends Ph{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const i=await xy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xy(n,e){const t=Ly(e),i=Oy(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Ny(n,e){or.set(n._key(),e)}function Oy(n){return ot(n._redirectPersistence)}function Ly(n){return sr(Ry,n.config.apiKey,n.name)}async function My(n,e,t=!1){const i=yi(n),r=Mh(i,e),o=await new Dy(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Py=10*60*1e3;class Uy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Uh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Py&&this.cachedEventUids.clear(),this.cachedEventUids.has(dc(e))}saveEventToCache(e){this.cachedEventUids.add(dc(e)),this.lastProcessedEventTime=Date.now()}}function dc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uh(n);default:return!1}}/**
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
 */async function $y(n,e={}){return mi(n,"GET","/v1/projects",e)}/**
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
 */const Vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,By=/^https?/;async function zy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $y(n);for(const t of e)try{if(Hy(t))return}catch{}et(n,"unauthorized-domain")}function Hy(n){const e=To(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!By.test(t))return!1;if(Vy.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const qy=new gi(3e4,6e4);function fc(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jy(n){return new Promise((e,t)=>{var i,r,s;function o(){fc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fc(),t(Xe(n,"network-request-failed"))},timeout:qy.get()})}if(!((r=(i=Je().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=Hm("iframefcb");return Je()[a]=()=>{gapi.load?o():t(Xe(n,"network-request-failed"))},Ih(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ar=null,e})}let ar=null;function Gy(n){return ar=ar||jy(n),ar}/**
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
 */const Wy=new gi(5e3,15e3),Ky="__/auth/iframe",Qy="emulator/auth/iframe",Yy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jy(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sa(e,Qy):`https://${n.config.authDomain}/${Ky}`,i={apiKey:e.apiKey,appName:n.name,v:Dn},r=Xy.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${pi(i).slice(1)}`}async function Zy(n){const e=await Gy(n),t=Je().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:Jy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yy,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},Wy.get());function l(){Je().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const e_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t_=500,n_=600,i_="_blank",r_="http://localhost";class pc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s_(n,e,t,i=t_,r=n_){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},e_),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Ce().toLowerCase();t&&(a=ph(u)?i_:t),fh(u)&&(e=e||r_,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if($m(u)&&a!=="_self")return o_(e||"",a),new pc(null);const h=window.open(e||"",a,c);L(h,n,"popup-blocked");try{h.focus()}catch{}return new pc(h)}function o_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const a_="__/auth/handler",l_="emulator/auth/handler",c_=encodeURIComponent("fac");async function gc(n,e,t,i,r,s){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Dn,eventId:r};if(e instanceof la){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",lg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof _i){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${c_}=${encodeURIComponent(l)}`:"";return`${u_(n)}?${pi(a).slice(1)}${u}`}function u_({config:n}){return n.emulator?sa(n,l_):`https://${n.authDomain}/${a_}`}/**
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
 */const Ws="webStorageSupport";class h_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dh,this._completeRedirectFn=My,this._overrideRedirectResult=Ny}async _openPopup(e,t,i,r){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gc(e,t,i,To(),r);return s_(e,o,ca())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await gc(e,t,i,To(),r);return py(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(lt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Zy(e),i=new Uy(e);return t.register("authEvent",r=>(L(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ws,{type:Ws},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Ws];o!==void 0&&t(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vh()||aa()||Wr()}}const d_=h_;var mc="@firebase/auth",yc="0.23.0";/**
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
 */class f_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function p_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function g_(n){vn(new Wt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),L(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wh(n)},u=new Km(i,r,s,l);return Ym(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vn(new Wt("auth-internal",e=>{const t=yi(e.getProvider("auth").getImmediate());return(i=>new f_(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(mc,yc,p_(n)),Tt(mc,yc,"esm2017")}/**
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
 */const m_=5*60,y_=Xu("authIdTokenMaxAge")||m_;let _c=null;const __=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>y_)return;const r=t==null?void 0:t.token;_c!==r&&(_c=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function v_(n=th()){const e=na(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qm(n,{popupRedirectResolver:d_,persistence:[Iy,hy,Dh]}),i=Xu("authTokenSyncURL");if(i){const s=__(i);sy(t,s,()=>s(t.currentUser)),ry(t,o=>s(o))}const r=Yu("auth");return r&&Xm(t,`http://${r}`),t}g_("Browser");var w_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,ha=ha||{},M=w_||self;function Sr(){}function Yr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function wi(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function E_(n){return Object.prototype.hasOwnProperty.call(n,Ks)&&n[Ks]||(n[Ks]=++T_)}var Ks="closure_uid_"+(1e9*Math.random()>>>0),T_=0;function I_(n,e,t){return n.call.apply(n.bind,arguments)}function b_(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function Se(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=I_:Se=b_,Se.apply(null,arguments)}function zi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function ve(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Dt(){this.s=this.s,this.o=this.o}var k_=0;Dt.prototype.s=!1;Dt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),k_!=0)&&E_(this)};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fh=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function da(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function vc(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(Yr(i)){const r=n.length||0,s=i.length||0;n.length=r+s;for(let o=0;o<s;o++)n[r+o]=i[o]}else n.push(i)}}function Ae(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var S_=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{M.addEventListener("test",Sr,e),M.removeEventListener("test",Sr,e)}catch{}return n}();function Ar(n){return/^[\s\xa0]*$/.test(n)}var wc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Qs(n,e){return n<e?-1:n>e?1:0}function Xr(){var n=M.navigator;return n&&(n=n.userAgent)?n:""}function Ye(n){return Xr().indexOf(n)!=-1}function fa(n){return fa[" "](n),n}fa[" "]=Sr;function A_(n){var e=D_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var C_=Ye("Opera"),En=Ye("Trident")||Ye("MSIE"),$h=Ye("Edge"),bo=$h||En,Vh=Ye("Gecko")&&!(Xr().toLowerCase().indexOf("webkit")!=-1&&!Ye("Edge"))&&!(Ye("Trident")||Ye("MSIE"))&&!Ye("Edge"),R_=Xr().toLowerCase().indexOf("webkit")!=-1&&!Ye("Edge");function Bh(){var n=M.document;return n?n.documentMode:void 0}var Cr;e:{var Ys="",Xs=function(){var n=Xr();if(Vh)return/rv:([^\);]+)(\)|;)/.exec(n);if($h)return/Edge\/([\d\.]+)/.exec(n);if(En)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(R_)return/WebKit\/(\S+)/.exec(n);if(C_)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Xs&&(Ys=Xs?Xs[1]:""),En){var Js=Bh();if(Js!=null&&Js>parseFloat(Ys)){Cr=String(Js);break e}}Cr=Ys}var D_={};function x_(){return A_(function(){let n=0;const e=wc(String(Cr)).split("."),t=wc("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var r=e[o]||"",s=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;n=Qs(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Qs(r[2].length==0,s[2].length==0)||Qs(r[2],s[2]),r=r[3],s=s[3]}while(n==0)}return 0<=n})}var ko;if(M.document&&En){var Ec=Bh();ko=Ec||parseInt(Cr,10)||void 0}else ko=void 0;var N_=ko;function ni(n,e){if(Ae.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Vh){e:{try{fa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:O_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ni.X.h.call(this)}}ve(ni,Ae);var O_={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ei="closure_listenable_"+(1e6*Math.random()|0),L_=0;function M_(n,e,t,i,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ha=r,this.key=++L_,this.ba=this.ea=!1}function Jr(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function pa(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function zh(n){const e={};for(const t in n)e[t]=n[t];return e}const Tc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hh(n,e){let t,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(t in i)n[t]=i[t];for(let s=0;s<Tc.length;s++)t=Tc[s],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function Zr(n){this.src=n,this.g={},this.h=0}Zr.prototype.add=function(n,e,t,i,r){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ao(n,e,i,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new M_(e,this.src,s,!!i,r),e.ea=t,n.push(e)),e};function So(n,e){var t=e.type;if(t in n.g){var i=n.g[t],r=Fh(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Jr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ao(n,e,t,i){for(var r=0;r<n.length;++r){var s=n[r];if(!s.ba&&s.listener==e&&s.capture==!!t&&s.ha==i)return r}return-1}var ga="closure_lm_"+(1e6*Math.random()|0),Zs={};function qh(n,e,t,i,r){if(i&&i.once)return Gh(n,e,t,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)qh(n,e[s],t,i,r);return null}return t=_a(t),n&&n[Ei]?n.N(e,t,wi(i)?!!i.capture:!!i,r):jh(n,e,t,!1,i,r)}function jh(n,e,t,i,r,s){if(!e)throw Error("Invalid event type");var o=wi(r)?!!r.capture:!!r,a=ya(n);if(a||(n[ga]=a=new Zr(n)),t=a.add(e,t,i,o,s),t.proxy)return t;if(i=P_(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)S_||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),i,r);else if(n.attachEvent)n.attachEvent(Kh(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function P_(){function n(t){return e.call(n.src,n.listener,t)}const e=U_;return n}function Gh(n,e,t,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Gh(n,e[s],t,i,r);return null}return t=_a(t),n&&n[Ei]?n.O(e,t,wi(i)?!!i.capture:!!i,r):jh(n,e,t,!0,i,r)}function Wh(n,e,t,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Wh(n,e[s],t,i,r);else i=wi(i)?!!i.capture:!!i,t=_a(t),n&&n[Ei]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Ao(s,t,i,r),-1<t&&(Jr(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ya(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ao(e,t,i,r)),(t=-1<n?e[n]:null)&&ma(t))}function ma(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Ei])So(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Kh(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=ya(e))?(So(t,n),t.h==0&&(t.src=null,e[ga]=null)):Jr(n)}}}function Kh(n){return n in Zs?Zs[n]:Zs[n]="on"+n}function U_(n,e){if(n.ba)n=!0;else{e=new ni(e,this);var t=n.listener,i=n.ha||n.src;n.ea&&ma(n),n=t.call(i,e)}return n}function ya(n){return n=n[ga],n instanceof Zr?n:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(n){return typeof n=="function"?n:(n[eo]||(n[eo]=function(e){return n.handleEvent(e)}),n[eo])}function ge(){Dt.call(this),this.i=new Zr(this),this.P=this,this.I=null}ve(ge,Dt);ge.prototype[Ei]=!0;ge.prototype.removeEventListener=function(n,e,t,i){Wh(this,n,e,t,i)};function _e(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new Ae(e,n);else if(e instanceof Ae)e.target=e.target||n;else{var r=e;e=new Ae(i,n),Hh(e,r)}if(r=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];r=Hi(o,i,!0,e)&&r}if(o=e.g=n,r=Hi(o,i,!0,e)&&r,r=Hi(o,i,!1,e)&&r,t)for(s=0;s<t.length;s++)o=e.g=t[s],r=Hi(o,i,!1,e)&&r}ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Jr(t[i]);delete n.g[e],n.h--}}this.I=null};ge.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};ge.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Hi(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==t){var a=o.listener,l=o.ha||o.src;o.ea&&So(n.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var va=M.JSON.stringify;function F_(){var n=Xh;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class $_{constructor(){this.h=this.g=null}add(e,t){const i=Qh.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Qh=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new V_,n=>n.reset());class V_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function B_(n){M.setTimeout(()=>{throw n},0)}function Yh(n,e){Co||z_(),Ro||(Co(),Ro=!0),Xh.add(n,e)}var Co;function z_(){var n=M.Promise.resolve(void 0);Co=function(){n.then(H_)}}var Ro=!1,Xh=new $_;function H_(){for(var n;n=F_();){try{n.h.call(n.g)}catch(t){B_(t)}var e=Qh;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ro=!1}function es(n,e){ge.call(this),this.h=n||1,this.g=e||M,this.j=Se(this.lb,this),this.l=Date.now()}ve(es,ge);S=es.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_e(this,"tick"),this.ca&&(wa(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wa(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}S.M=function(){es.X.M.call(this),wa(this),delete this.g};function Ea(n,e,t){if(typeof n=="function")t&&(n=Se(n,t));else if(n&&typeof n.handleEvent=="function")n=Se(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(n,e||0)}function Jh(n){n.g=Ea(()=>{n.g=null,n.i&&(n.i=!1,Jh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class q_ extends Dt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jh(this)}M(){super.M(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(n){Dt.call(this),this.h=n,this.g={}}ve(ii,Dt);var Ic=[];function Zh(n,e,t,i){Array.isArray(t)||(t&&(Ic[0]=t.toString()),t=Ic);for(var r=0;r<t.length;r++){var s=qh(e,t[r],i||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function ed(n){pa(n.g,function(e,t){this.g.hasOwnProperty(t)&&ma(e)},n),n.g={}}ii.prototype.M=function(){ii.X.M.call(this),ed(this)};ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ts(){this.g=!0}ts.prototype.Aa=function(){this.g=!1};function j_(n,e,t,i,r,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function G_(n,e,t,i,r,s,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+t+`
`+s+" "+o})}function dn(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+K_(n,t)+(i?" "+i:"")})}function W_(n,e){n.info(function(){return"TIMEOUT: "+e})}ts.prototype.info=function(){};function K_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return va(t)}catch{return e}}var Jt={},bc=null;function ns(){return bc=bc||new ge}Jt.Pa="serverreachability";function td(n){Ae.call(this,Jt.Pa,n)}ve(td,Ae);function ri(n){const e=ns();_e(e,new td(e))}Jt.STAT_EVENT="statevent";function nd(n,e){Ae.call(this,Jt.STAT_EVENT,n),this.stat=e}ve(nd,Ae);function De(n){const e=ns();_e(e,new nd(e,n))}Jt.Qa="timingevent";function id(n,e){Ae.call(this,Jt.Qa,n),this.size=e}ve(id,Ae);function Ti(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){n()},e)}var is={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},rd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ta(){}Ta.prototype.h=null;function kc(n){return n.h||(n.h=n.i())}function sd(){}var Ii={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ia(){Ae.call(this,"d")}ve(Ia,Ae);function ba(){Ae.call(this,"c")}ve(ba,Ae);var Do;function rs(){}ve(rs,Ta);rs.prototype.g=function(){return new XMLHttpRequest};rs.prototype.i=function(){return{}};Do=new rs;function bi(n,e,t,i){this.l=n,this.j=e,this.m=t,this.U=i||1,this.S=new ii(this),this.O=Q_,n=bo?125:void 0,this.T=new es(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new od}function od(){this.i=null,this.g="",this.h=!1}var Q_=45e3,xo={},Rr={};S=bi.prototype;S.setTimeout=function(n){this.O=n};function No(n,e,t){n.K=1,n.v=os(ct(e)),n.s=t,n.P=!0,ad(n,null)}function ad(n,e){n.F=Date.now(),ki(n),n.A=ct(n.v);var t=n.A,i=n.U;Array.isArray(i)||(i=[String(i)]),gd(t.i,"t",i),n.C=0,t=n.l.H,n.h=new od,n.g=Pd(n.l,t?e:null,!n.s),0<n.N&&(n.L=new q_(Se(n.La,n,n.g),n.N)),Zh(n.S,n.g,"readystatechange",n.ib),e=n.H?zh(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),ri(),j_(n.j,n.u,n.A,n.m,n.U,n.s)}S.ib=function(n){n=n.target;const e=this.L;e&&at(n)==3?e.l():this.La(n)};S.La=function(n){try{if(n==this.g)e:{const c=at(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||bo||this.g&&(this.h.h||this.g.fa()||Rc(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ri(3):ri(2)),ss(this);var t=this.g.aa();this.Y=t;t:if(ld(this)){var i=Rc(this.g);n="";var r=i.length,s=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Kn(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,G_(this.j,this.u,this.A,this.m,this.U,c,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var u=a;break t}}u=null}if(t=u)dn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Oo(this,t);else{this.i=!1,this.o=3,De(12),$t(this),Kn(this);break e}}this.P?(cd(this,c,o),bo&&this.i&&c==3&&(Zh(this.S,this.T,"tick",this.hb),this.T.start())):(dn(this.j,this.m,o,null),Oo(this,o)),c==4&&$t(this),this.i&&!this.I&&(c==4?Nd(this.l,this):(this.i=!1,ki(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),$t(this),Kn(this)}}}catch{}finally{}};function ld(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function cd(n,e,t){let i=!0,r;for(;!n.I&&n.C<t.length;)if(r=Y_(n,t),r==Rr){e==4&&(n.o=4,De(14),i=!1),dn(n.j,n.m,null,"[Incomplete Response]");break}else if(r==xo){n.o=4,De(15),dn(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else dn(n.j,n.m,r,null),Oo(n,r);ld(n)&&r!=Rr&&r!=xo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,De(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),xa(e),e.K=!0,De(11))):(dn(n.j,n.m,t,"[Invalid Chunked Response]"),$t(n),Kn(n))}S.hb=function(){if(this.g){var n=at(this.g),e=this.g.fa();this.C<e.length&&(ss(this),cd(this,n,e),this.i&&n!=4&&ki(this))}};function Y_(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?Rr:(t=Number(e.substring(t,i)),isNaN(t)?xo:(i+=1,i+t>e.length?Rr:(e=e.substr(i,t),n.C=i+t,e)))}S.cancel=function(){this.I=!0,$t(this)};function ki(n){n.V=Date.now()+n.O,ud(n,n.O)}function ud(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ti(Se(n.gb,n),e)}function ss(n){n.B&&(M.clearTimeout(n.B),n.B=null)}S.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(W_(this.j,this.A),this.K!=2&&(ri(),De(17)),$t(this),this.o=2,Kn(this)):ud(this,this.V-n)};function Kn(n){n.l.G==0||n.I||Nd(n.l,n)}function $t(n){ss(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,wa(n.T),ed(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Oo(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Lo(t.h,n))){if(!n.J&&Lo(t.h,n)&&t.G==3){try{var i=t.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Nr(t),cs(t);else break e;Da(t),De(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=Ti(Se(t.cb,t),6e3));if(1>=_d(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else Vt(t,11)}else if((n.J||t.g==n)&&Nr(t),!Ar(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const c=u[3];c!=null&&(t.ma=c,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,t.J=i,t.j.info("backChannelRequestTimeoutMs_="+i)),i=t;const d=n.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=i.h;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ka(s,s.h),s.h=null))}if(i.D){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(i.za=E,J(i.F,i.D,E))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),i=t;var o=n;if(i.sa=Md(i,i.H?i.ka:null,i.V),o.J){vd(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(ss(a),ki(a)),i.g=o}else Dd(i);0<t.i.length&&us(t)}else u[0]!="stop"&&u[0]!="close"||Vt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vt(t,7):Ra(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}ri(4)}catch{}}function X_(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Yr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function J_(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Yr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function hd(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Yr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=J_(n),i=X_(n),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],t&&t[s],n)}var dd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),r=null;if(0<=i){var s=n[t].substring(0,i);r=n[t].substring(i+1)}else s=n[t];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ht(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Ht){this.h=e!==void 0?e:n.h,Dr(this,n.j),this.s=n.s,this.g=n.g,xr(this,n.m),this.l=n.l,e=n.i;var t=new si;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Sc(this,t),this.o=n.o}else n&&(t=String(n).match(dd))?(this.h=!!e,Dr(this,t[1]||"",!0),this.s=Hn(t[2]||""),this.g=Hn(t[3]||"",!0),xr(this,t[4]),this.l=Hn(t[5]||"",!0),Sc(this,t[6]||"",!0),this.o=Hn(t[7]||"")):(this.h=!!e,this.i=new si(null,this.h))}Ht.prototype.toString=function(){var n=[],e=this.j;e&&n.push(qn(e,Ac,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(qn(e,Ac,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(qn(t,t.charAt(0)=="/"?nv:tv,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",qn(t,rv)),n.join("")};function ct(n){return new Ht(n)}function Dr(n,e,t){n.j=t?Hn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function xr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Sc(n,e,t){e instanceof si?(n.i=e,sv(n.i,n.h)):(t||(e=qn(e,iv)),n.i=new si(e,n.h))}function J(n,e,t){n.i.set(e,t)}function os(n){return J(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Hn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function qn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ev),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ev(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ac=/[#\/\?@]/g,tv=/[#\?:]/g,nv=/[#\?]/g,iv=/[#\?@]/g,rv=/#/g;function si(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function xt(n){n.g||(n.g=new Map,n.h=0,n.i&&Z_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=si.prototype;S.add=function(n,e){xt(this),this.i=null,n=xn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function fd(n,e){xt(n),e=xn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function pd(n,e){return xt(n),e=xn(n,e),n.g.has(e)}S.forEach=function(n,e){xt(this),this.g.forEach(function(t,i){t.forEach(function(r){n.call(e,r,i,this)},this)},this)};S.oa=function(){xt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const r=n[i];for(let s=0;s<r.length;s++)t.push(e[i])}return t};S.W=function(n){xt(this);let e=[];if(typeof n=="string")pd(this,n)&&(e=e.concat(this.g.get(xn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return xt(this),this.i=null,n=xn(this,n),pd(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function gd(n,e,t){fd(n,e),0<t.length&&(n.i=null,n.g.set(xn(n,e),da(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),n.push(r)}}return this.i=n.join("&")};function xn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function sv(n,e){e&&!n.j&&(xt(n),n.i=null,n.g.forEach(function(t,i){var r=i.toLowerCase();i!=r&&(fd(this,i),gd(this,r,t))},n)),n.j=e}var ov=class{constructor(e,t){this.h=e,this.g=t}};function md(n){this.l=n||av,M.PerformanceNavigationTiming?(n=M.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(M.g&&M.g.Ga&&M.g.Ga()&&M.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var av=10;function yd(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function _d(n){return n.h?1:n.g?n.g.size:0}function Lo(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ka(n,e){n.g?n.g.add(e):n.h=e}function vd(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}md.prototype.cancel=function(){if(this.i=wd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function wd(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return da(n.i)}function Sa(){}Sa.prototype.stringify=function(n){return M.JSON.stringify(n,void 0)};Sa.prototype.parse=function(n){return M.JSON.parse(n,void 0)};function lv(){this.g=new Sa}function cv(n,e,t){const i=t||"";try{hd(n,function(r,s){let o=r;wi(r)&&(o=va(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function uv(n,e){const t=new ts;if(M.Image){const i=new Image;i.onload=zi(qi,t,i,"TestLoadImage: loaded",!0,e),i.onerror=zi(qi,t,i,"TestLoadImage: error",!1,e),i.onabort=zi(qi,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=zi(qi,t,i,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function qi(n,e,t,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Si(n){this.l=n.ac||null,this.j=n.jb||!1}ve(Si,Ta);Si.prototype.g=function(){return new as(this.l,this.j)};Si.prototype.i=function(n){return function(){return n}}({});function as(n,e){ge.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Aa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ve(as,ge);var Aa=0;S=as.prototype;S.open=function(n,e){if(this.readyState!=Aa)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,oi(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||M).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=Aa};S.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ed(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Ed(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}S.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ai(this):oi(this),this.readyState==3&&Ed(this)}};S.Va=function(n){this.g&&(this.response=this.responseText=n,Ai(this))};S.Ua=function(n){this.g&&(this.response=n,Ai(this))};S.ga=function(){this.g&&Ai(this)};function Ai(n){n.readyState=4,n.l=null,n.j=null,n.A=null,oi(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function oi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var hv=M.JSON.parse;function te(n){ge.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Td,this.K=this.L=!1}ve(te,ge);var Td="",dv=/^https?$/i,fv=["POST","PUT"];S=te.prototype;S.Ka=function(n){this.L=n};S.da=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Do.g(),this.C=this.u?kc(this.u):kc(Do),this.g.onreadystatechange=Se(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(s){Cc(this,s);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)t.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())t.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),r=M.FormData&&n instanceof M.FormData,!(0<=Fh(fv,e))||i||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kd(this),0<this.B&&((this.K=pv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.qa,this)):this.A=Ea(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Cc(this,s)}};function pv(n){return En&&x_()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.qa=function(){typeof ha<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function Cc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Id(n),ls(n)}function Id(n){n.D||(n.D=!0,_e(n,"complete"),_e(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,_e(this,"complete"),_e(this,"abort"),ls(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ls(this,!0)),te.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?bd(this):this.fb())};S.fb=function(){bd(this)};function bd(n){if(n.h&&typeof ha<"u"&&(!n.C[1]||at(n)!=4||n.aa()!=2)){if(n.v&&at(n)==4)Ea(n.Ha,0,n);else if(_e(n,"readystatechange"),at(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var r=String(n.H).match(dd)[1]||null;if(!r&&M.self&&M.self.location){var s=M.self.location.protocol;r=s.substr(0,s.length-1)}i=!dv.test(r?r.toLowerCase():"")}t=i}if(t)_e(n,"complete"),_e(n,"success");else{n.m=6;try{var o=2<at(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Id(n)}}finally{ls(n)}}}}function ls(n,e){if(n.g){kd(n);const t=n.g,i=n.C[0]?Sr:null;n.g=null,n.C=null,e||_e(n,"ready");try{t.onreadystatechange=i}catch{}}}function kd(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(M.clearTimeout(n.A),n.A=null)}function at(n){return n.g?n.g.readyState:0}S.aa=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),hv(e)}};function Rc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Td:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sd(n){let e="";return pa(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function Ca(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Sd(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):J(n,e,t))}function Vn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ad(n){this.Ca=0,this.i=[],this.j=new ts,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vn("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vn("baseRetryDelayMs",5e3,n),this.bb=Vn("retryDelaySeedMs",1e4,n),this.$a=Vn("forwardChannelMaxRetries",2,n),this.ta=Vn("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new md(n&&n.concurrentRequestLimit),this.Fa=new lv,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=Ad.prototype;S.ma=8;S.G=1;function Ra(n){if(Cd(n),n.G==3){var e=n.U++,t=ct(n.F);J(t,"SID",n.I),J(t,"RID",e),J(t,"TYPE","terminate"),Ci(n,t),e=new bi(n,n.j,e,void 0),e.K=2,e.v=os(ct(t)),t=!1,M.navigator&&M.navigator.sendBeacon&&(t=M.navigator.sendBeacon(e.v.toString(),"")),!t&&M.Image&&(new Image().src=e.v,t=!0),t||(e.g=Pd(e.l,null),e.g.da(e.v)),e.F=Date.now(),ki(e)}Ld(n)}function cs(n){n.g&&(xa(n),n.g.cancel(),n.g=null)}function Cd(n){cs(n),n.u&&(M.clearTimeout(n.u),n.u=null),Nr(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&M.clearTimeout(n.m),n.m=null)}function us(n){yd(n.h)||n.m||(n.m=!0,Yh(n.Ja,n),n.C=0)}function gv(n,e){return _d(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Ti(Se(n.Ja,n,e),Od(n,n.C)),n.C++,!0)}S.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new bi(this,this.j,n,void 0);let s=this.s;if(this.S&&(s?(s=zh(s),Hh(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var i=this.i[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Rd(this,r,e),t=ct(this.F),J(t,"RID",n),J(t,"CVER",22),this.D&&J(t,"X-HTTP-Session-Id",this.D),Ci(this,t),s&&(this.N?e="headers="+encodeURIComponent(String(Sd(s)))+"&"+e:this.o&&Ca(t,this.o,s)),ka(this.h,r),this.Ya&&J(t,"TYPE","init"),this.O?(J(t,"$req",e),J(t,"SID","null"),r.Z=!0,No(r,t,null)):No(r,t,e),this.G=2}}else this.G==3&&(n?Dc(this,n):this.i.length==0||yd(this.h)||Dc(this))};function Dc(n,e){var t;e?t=e.m:t=n.U++;const i=ct(n.F);J(i,"SID",n.I),J(i,"RID",t),J(i,"AID",n.T),Ci(n,i),n.o&&n.s&&Ca(i,n.o,n.s),t=new bi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Rd(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),ka(n.h,t),No(t,i,e)}function Ci(n,e){n.ia&&pa(n.ia,function(t,i){J(e,i,t)}),n.l&&hd({},function(t,i){J(e,i,t)})}function Rd(n,e,t){t=Math.min(n.i.length,t);var i=n.l?Se(n.l.Ra,n.l,n):null;e:{var r=n.i;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let u=r[l].h;const c=r[l].g;if(u-=s,0>u)s=Math.max(0,r[l].h-100),a=!1;else try{cv(c,o,"req"+u+"_")}catch{i&&i(c)}}if(a){i=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,i}function Dd(n){n.g||n.u||(n.Z=1,Yh(n.Ia,n),n.A=0)}function Da(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Ti(Se(n.Ia,n),Od(n,n.A)),n.A++,!0)}S.Ia=function(){if(this.u=null,xd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Ti(Se(this.eb,this),n)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,De(10),cs(this),xd(this))};function xa(n){n.B!=null&&(M.clearTimeout(n.B),n.B=null)}function xd(n){n.g=new bi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=ct(n.sa);J(e,"RID","rpc"),J(e,"SID",n.I),J(e,"CI",n.L?"0":"1"),J(e,"AID",n.T),J(e,"TYPE","xmlhttp"),Ci(n,e),n.o&&n.s&&Ca(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=os(ct(e)),t.s=null,t.P=!0,ad(t,n)}S.cb=function(){this.v!=null&&(this.v=null,cs(this),Da(this),De(19))};function Nr(n){n.v!=null&&(M.clearTimeout(n.v),n.v=null)}function Nd(n,e){var t=null;if(n.g==e){Nr(n),xa(n),n.g=null;var i=2}else if(Lo(n.h,e))t=e.D,vd(n.h,e),i=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;i=ns(),_e(i,new id(i,t)),us(n)}else Dd(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(i==1&&gv(n,e)||i==2&&Da(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:Vt(n,5);break;case 4:Vt(n,10);break;case 3:Vt(n,6);break;default:Vt(n,2)}}}function Od(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function Vt(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var i=Se(n.kb,n);t||(t=new Ht("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Dr(t,"https"),os(t)),uv(t.toString(),i)}else De(2);n.G=0,n.l&&n.l.va(e),Ld(n),Cd(n)}S.kb=function(n){n?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Ld(n){if(n.G=0,n.la=[],n.l){const e=wd(n.h);(e.length!=0||n.i.length!=0)&&(vc(n.la,e),vc(n.la,n.i),n.h.i.length=0,da(n.i),n.i.length=0),n.l.ua()}}function Md(n,e,t){var i=t instanceof Ht?ct(t):new Ht(t,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),xr(i,i.m);else{var r=M.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ht(null,void 0);i&&Dr(s,i),e&&(s.g=e),r&&xr(s,r),t&&(s.l=t),i=s}return t=n.D,e=n.za,t&&e&&J(i,t,e),J(i,"VER",n.ma),Ci(n,i),i}function Pd(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new te(new Si({jb:!0})):new te(n.ra),e.Ka(n.H),e}function Ud(){}S=Ud.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function Or(){if(En&&!(10<=Number(N_)))throw Error("Environmental error: no available transport.")}Or.prototype.g=function(n,e){return new Pe(n,e)};function Pe(n,e){ge.call(this),this.g=new Ad(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Ar(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Nn(this)}ve(Pe,ge);Pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;De(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Md(n,null,n.V),us(n)};Pe.prototype.close=function(){Ra(this.g)};Pe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=va(n),n=t);e.i.push(new ov(e.ab++,n)),e.G==3&&us(e)};Pe.prototype.M=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,Pe.X.M.call(this)};function Fd(n){Ia.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ve(Fd,Ia);function $d(){ba.call(this),this.status=1}ve($d,ba);function Nn(n){this.g=n}ve(Nn,Ud);Nn.prototype.xa=function(){_e(this.g,"a")};Nn.prototype.wa=function(n){_e(this.g,new Fd(n))};Nn.prototype.va=function(n){_e(this.g,new $d)};Nn.prototype.ua=function(){_e(this.g,"b")};Or.prototype.createWebChannel=Or.prototype.g;Pe.prototype.send=Pe.prototype.u;Pe.prototype.open=Pe.prototype.m;Pe.prototype.close=Pe.prototype.close;is.NO_ERROR=0;is.TIMEOUT=8;is.HTTP_ERROR=6;rd.COMPLETE="complete";sd.EventType=Ii;Ii.OPEN="a";Ii.CLOSE="b";Ii.ERROR="c";Ii.MESSAGE="d";ge.prototype.listen=ge.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var mv=function(){return new Or},yv=function(){return ns()},to=is,_v=rd,vv=Jt,xc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wv=Si,ji=sd,Ev=te;const Nc="@firebase/firestore";/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let On="9.20.0";/**
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
 */const Yt=new ea("@firebase/firestore");function Oc(){return Yt.logLevel}function A(n,...e){if(Yt.logLevel<=H.DEBUG){const t=e.map(Na);Yt.debug(`Firestore (${On}): ${n}`,...t)}}function ut(n,...e){if(Yt.logLevel<=H.ERROR){const t=e.map(Na);Yt.error(`Firestore (${On}): ${n}`,...t)}}function Lr(n,...e){if(Yt.logLevel<=H.WARN){const t=e.map(Na);Yt.warn(`Firestore (${On}): ${n}`,...t)}}function Na(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function O(n="Unexpected state"){const e=`FIRESTORE (${On}) INTERNAL ASSERTION FAILED: `+n;throw ut(e),new Error(e)}function Y(n,e){n||O()}function F(n,e){return n}/**
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
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Vd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class Iv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bv{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const r=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let s=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Y(typeof i.accessToken=="string"),new Vd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ie(e)}}class kv{constructor(e,t,i){this.h=e,this.l=t,this.m=i,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Sv{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new kv(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Av{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cv{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const i=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string"),this.T=t.token,new Av(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Rv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Bd{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Rv(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%e.length))}return i}}function j(n,e){return n<e?-1:n>e?1:0}function Tn(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
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
 */class ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new k(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ae(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new ae(0,0))}static max(){return new P(new ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ai{constructor(e,t,i){t===void 0?t=0:t>e.length&&O(),i===void 0?i=e.length-t:i>e.length-t&&O(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=e.get(r),o=t.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Q extends ai{construct(e,t,i){return new Q(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new k(y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}const Dv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends ai{construct(e,t,i){return new ke(e,t,i)}static isValidIdentifier(e){return Dv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new k(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new k(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new k(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
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
 */class R{constructor(e){this.path=e}static fromPath(e){return new R(Q.fromString(e))}static fromName(e){return new R(Q.fromString(e).popFirst(5))}static empty(){return new R(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Q.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new R(new Q(e.slice()))}}function xv(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=P.fromTimestamp(i===1e9?new ae(t+1,0):new ae(t,i));return new kt(r,R.empty(),e)}function Nv(n){return new kt(n.readTime,n.key,-1)}class kt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new kt(P.min(),R.empty(),-1)}static max(){return new kt(P.max(),R.empty(),-1)}}function Ov(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=R.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
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
 */const Lv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ri(n){if(n.code!==y.FAILED_PRECONDITION||n.message!==Lv)throw n;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):v.reject(t)}static resolve(e){return new v((t,i)=>{t(e)})}static reject(e){return new v((t,i)=>{i(e)})}static waitFor(e){return new v((t,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&t()},l=>i(l))}),o=!0,s===r&&t()})}static or(e){let t=v.resolve(!1);for(const i of e)t=t.next(r=>r?v.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new v((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(c=>{o[u]=c,++a,a===s&&i(o)},c=>r(c))}})}static doWhile(e,t){return new v((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function Di(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>t.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Oa.ct=-1;function hs(n){return n==null}function Mr(n){return n===0&&1/n==-1/0}function Pv(n){return typeof n=="number"&&Number.isInteger(n)&&!Mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Lc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??me.RED,this.left=r??me.EMPTY,this.right=s??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new me(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return me.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(n,e,t,i,r){return this}insert(n,e,t){return new me(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mc(this.data.getIterator())}getIteratorFrom(e){return new Mc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Mc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qe{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new qe([])}unionWith(e){let t=new le(ke.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tn(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Uv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Uv("Invalid base64 string: "+r):r}}(e);return new Re(t)}static fromUint8Array(e){const t=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Fv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(Y(!!n),typeof n=="string"){let e=0;const t=Fv.exec(n);if(Y(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function In(n){return typeof n=="string"?Re.fromBase64String(n):Re.fromUint8Array(n)}/**
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
 */function Hd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function qd(n){const e=n.mapValue.fields.__previous_value__;return Hd(e)?qd(e):e}function li(n){const e=St(n.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class $v{constructor(e,t,i,r,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ci{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Wi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hd(n)?4:Vv(n)?9007199254740991:10:O()}function tt(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return li(n).isEqual(li(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=St(i.timestampValue),o=St(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,r){return In(i.bytesValue).isEqual(In(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,r){return se(i.geoPointValue.latitude)===se(r.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(r.geoPointValue.longitude)}(n,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return se(i.integerValue)===se(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=se(i.doubleValue),o=se(r.doubleValue);return s===o?Mr(s)===Mr(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return Tn(n.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Lc(s)!==Lc(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!tt(s[a],o[a])))return!1;return!0}(n,e);default:return O()}}function ui(n,e){return(n.values||[]).find(t=>tt(t,e))!==void 0}function bn(n,e){if(n===e)return 0;const t=Xt(n),i=Xt(e);if(t!==i)return j(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(r,s){const o=se(r.integerValue||r.doubleValue),a=se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Pc(n.timestampValue,e.timestampValue);case 4:return Pc(li(n),li(e));case 5:return j(n.stringValue,e.stringValue);case 6:return function(r,s){const o=In(r),a=In(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=j(o[l],a[l]);if(u!==0)return u}return j(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,s){const o=j(se(r.latitude),se(s.latitude));return o!==0?o:j(se(r.longitude),se(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=bn(o[l],a[l]);if(u)return u}return j(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===Wi.mapValue&&s===Wi.mapValue)return 0;if(r===Wi.mapValue)return 1;if(s===Wi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=j(a[c],u[c]);if(h!==0)return h;const f=bn(o[a[c]],l[u[c]]);if(f!==0)return f}return j(a.length,u.length)}(n.mapValue,e.mapValue);default:throw O()}}function Pc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=St(n),i=St(e),r=j(t.seconds,i.seconds);return r!==0?r:j(t.nanos,i.nanos)}function kn(n){return Mo(n)}function Mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const r=St(i);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?In(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,R.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Mo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Mo(i.fields[a])}`;return s+"}"}(n.mapValue):O();var e,t}function Uc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Po(n){return!!n&&"integerValue"in n}function La(n){return!!n&&"arrayValue"in n}function Fc(n){return!!n&&"nullValue"in n}function $c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lr(n){return!!n&&"mapValue"in n}function Qn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Qn(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!lr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(t)}setAll(e){let t=ke.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,r),i={},r=[],t=a.popLast()}o?i[a.lastSegment()]=Qn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());lr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];lr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){Ln(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new $e(Qn(this.value))}}function jd(n){const e=[];return Ln(n.fields,(t,i)=>{const r=new ke([t]);if(lr(i)){const s=jd(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new qe(e)}/**
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
 */class be{constructor(e,t,i,r,s,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,P.min(),P.min(),P.min(),$e.empty(),0)}static newFoundDocument(e,t,i,r){return new be(e,1,t,P.min(),i,r,0)}static newNoDocument(e,t){return new be(e,2,t,P.min(),P.min(),$e.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,P.min(),P.min(),$e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pr{constructor(e,t){this.position=e,this.inclusive=t}}function Vc(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],o=n.position[r];if(s.field.isKeyField()?i=R.comparator(R.fromName(o.referenceValue),t.key):i=bn(o,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Bc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Gd{}class oe extends Gd{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Hv(e,t,i):t==="array-contains"?new Gv(e,i):t==="in"?new Wv(e,i):t==="not-in"?new Kv(e,i):t==="array-contains-any"?new Qv(e,i):new oe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new qv(e,i):new jv(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bn(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ge extends Gd{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Ge(e,t)}matches(e){return Wd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Wd(n){return n.op==="and"}function Kd(n){return zv(n)&&Wd(n)}function zv(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function Uo(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+kn(n.value);if(Kd(n))return n.filters.map(e=>Uo(e)).join(",");{const e=n.filters.map(t=>Uo(t)).join(",");return`${n.op}(${e})`}}function Qd(n,e){return n instanceof oe?function(t,i){return i instanceof oe&&t.op===i.op&&t.field.isEqual(i.field)&&tt(t.value,i.value)}(n,e):n instanceof Ge?function(t,i){return i instanceof Ge&&t.op===i.op&&t.filters.length===i.filters.length?t.filters.reduce((r,s,o)=>r&&Qd(s,i.filters[o]),!0):!1}(n,e):void O()}function Yd(n){return n instanceof oe?function(e){return`${e.field.canonicalString()} ${e.op} ${kn(e.value)}`}(n):n instanceof Ge?function(e){return e.op.toString()+" {"+e.getFilters().map(Yd).join(" ,")+"}"}(n):"Filter"}class Hv extends oe{constructor(e,t,i){super(e,t,i),this.key=R.fromName(i.referenceValue)}matches(e){const t=R.comparator(e.key,this.key);return this.matchesComparison(t)}}class qv extends oe{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jv extends oe{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Xd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>R.fromName(i.referenceValue))}class Gv extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return La(t)&&ui(t.arrayValue,this.value)}}class Wv extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ui(this.value.arrayValue,t)}}class Kv extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ui(this.value.arrayValue,t)}}class Qv extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!La(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ui(this.value.arrayValue,i))}}/**
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
 */class Yv{constructor(e,t=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function zc(n,e=null,t=[],i=[],r=null,s=null,o=null){return new Yv(n,e,t,i,r,s,o)}function Ma(n){const e=F(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Uo(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),hs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>kn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>kn(i)).join(",")),e.ft=t}return e.ft}function Pa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Bc(n.startAt,e.startAt)&&Bc(n.endAt,e.endAt)}function Fo(n){return R.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Mn{constructor(e,t=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Xv(n,e,t,i,r,s,o,a){return new Mn(n,e,t,i,r,s,o,a)}function Ua(n){return new Mn(n)}function Hc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fa(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function ds(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Jd(n){return n.collectionGroup!==null}function mn(n){const e=F(n);if(e.dt===null){e.dt=[];const t=ds(e),i=Fa(e);if(t!==null&&i===null)t.isKeyField()||e.dt.push(new gn(t)),e.dt.push(new gn(ke.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new gn(ke.keyField(),s))}}}return e.dt}function ht(n){const e=F(n);if(!e.wt)if(e.limitType==="F")e.wt=zc(e.path,e.collectionGroup,mn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of mn(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new gn(s.field,o))}const i=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;e.wt=zc(e.path,e.collectionGroup,t,e.filters,e.limit,i,r)}return e.wt}function $o(n,e){e.getFirstInequalityField(),ds(n);const t=n.filters.concat([e]);return new Mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ur(n,e,t){return new Mn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fs(n,e){return Pa(ht(n),ht(e))&&n.limitType===e.limitType}function Zd(n){return`${Ma(ht(n))}|lt:${n.limitType}`}function Vo(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(i=>Yd(i)).join(", ")}]`),hs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>kn(i)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>kn(i)).join(",")),`Target(${t})`}(ht(n))}; limitType=${n.limitType})`}function ps(n,e){return e.isFoundDocument()&&function(t,i){const r=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):R.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,i){for(const r of mn(t))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const r of t.filters)if(!r.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!function(r,s,o){const a=Vc(r,s,o);return r.inclusive?a<=0:a<0}(t.startAt,mn(t),i)||t.endAt&&!function(r,s,o){const a=Vc(r,s,o);return r.inclusive?a>=0:a>0}(t.endAt,mn(t),i))}(n,e)}function Jv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ef(n){return(e,t)=>{let i=!1;for(const r of mn(n)){const s=Zv(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Zv(n,e,t){const i=n.field.isKeyField()?R.comparator(e.key,t.key):function(r,s,o){const a=s.data.field(r),l=o.data.field(r);return a!==null&&l!==null?bn(a,l):O()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return O()}}/**
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
 */class Pn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return zd(this.inner)}size(){return this.innerSize}}/**
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
 */const ew=new ce(R.comparator);function dt(){return ew}const tf=new ce(R.comparator);function jn(...n){let e=tf;for(const t of n)e=e.insert(t.key,t);return e}function nf(n){let e=tf;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Bt(){return Yn()}function rf(){return Yn()}function Yn(){return new Pn(n=>n.toString(),(n,e)=>n.isEqual(e))}const tw=new ce(R.comparator),nw=new le(R.comparator);function B(...n){let e=nw;for(const t of n)e=e.add(t);return e}const iw=new le(j);function sf(){return iw}/**
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
 */function of(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function af(n){return{integerValue:""+n}}function rw(n,e){return Pv(e)?af(e):of(n,e)}/**
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
 */class gs{constructor(){this._=void 0}}function sw(n,e,t){return n instanceof Fr?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(t,e):n instanceof hi?cf(n,e):n instanceof di?uf(n,e):function(i,r){const s=lf(i,r),o=qc(s)+qc(i._t);return Po(s)&&Po(i._t)?af(o):of(i.serializer,o)}(n,e)}function ow(n,e,t){return n instanceof hi?cf(n,e):n instanceof di?uf(n,e):t}function lf(n,e){return n instanceof $r?Po(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class Fr extends gs{}class hi extends gs{constructor(e){super(),this.elements=e}}function cf(n,e){const t=hf(e);for(const i of n.elements)t.some(r=>tt(r,i))||t.push(i);return{arrayValue:{values:t}}}class di extends gs{constructor(e){super(),this.elements=e}}function uf(n,e){let t=hf(e);for(const i of n.elements)t=t.filter(r=>!tt(r,i));return{arrayValue:{values:t}}}class $r extends gs{constructor(e,t){super(),this.serializer=e,this._t=t}}function qc(n){return se(n.integerValue||n.doubleValue)}function hf(n){return La(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function aw(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof hi&&i instanceof hi||t instanceof di&&i instanceof di?Tn(t.elements,i.elements,tt):t instanceof $r&&i instanceof $r?tt(t._t,i._t):t instanceof Fr&&i instanceof Fr}(n.transform,e.transform)}class lw{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ms{}function df(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $a(n.key,je.none()):new xi(n.key,n.data,je.none());{const t=n.data,i=$e.empty();let r=new le(ke.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Zt(n.key,i,new qe(r.toArray()),je.none())}}function cw(n,e,t){n instanceof xi?function(i,r,s){const o=i.value.clone(),a=Gc(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Zt?function(i,r,s){if(!cr(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Gc(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(ff(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Xn(n,e,t,i){return n instanceof xi?function(r,s,o,a){if(!cr(r.precondition,s))return o;const l=r.value.clone(),u=Wc(r.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(n,e,t,i):n instanceof Zt?function(r,s,o,a){if(!cr(r.precondition,s))return o;const l=Wc(r.fieldTransforms,a,s),u=s.data;return u.setAll(ff(r)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(c=>c.field))}(n,e,t,i):function(r,s,o){return cr(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function uw(n,e){let t=null;for(const i of n.fieldTransforms){const r=e.data.field(i.field),s=lf(i.transform,r||null);s!=null&&(t===null&&(t=$e.empty()),t.set(i.field,s))}return t||null}function jc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&Tn(t,i,(r,s)=>aw(r,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xi extends ms{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zt extends ms{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ff(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Gc(n,e,t){const i=new Map;Y(n.length===t.length);for(let r=0;r<t.length;r++){const s=n[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ow(o,a,t[r]))}return i}function Wc(n,e,t){const i=new Map;for(const r of n){const s=r.transform,o=t.data.field(r.field);i.set(r.field,sw(s,o,e))}return i}class $a extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hw extends ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dw{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&cw(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Xn(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Xn(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=rf();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(r.key)?null:a;const l=df(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(P.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&Tn(this.mutations,e.mutations,(t,i)=>jc(t,i))&&Tn(this.baseMutations,e.baseMutations,(t,i)=>jc(t,i))}}class Va{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){Y(e.mutations.length===i.length);let r=tw;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Va(e,t,i,r)}}/**
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
 */class fw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pw{constructor(e){this.count=e}}/**
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
 */var re,z;function gw(n){switch(n){default:return O();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function pf(n){if(n===void 0)return ut("GRPC error has no .code"),y.UNKNOWN;switch(n){case re.OK:return y.OK;case re.CANCELLED:return y.CANCELLED;case re.UNKNOWN:return y.UNKNOWN;case re.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case re.INTERNAL:return y.INTERNAL;case re.UNAVAILABLE:return y.UNAVAILABLE;case re.UNAUTHENTICATED:return y.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case re.NOT_FOUND:return y.NOT_FOUND;case re.ALREADY_EXISTS:return y.ALREADY_EXISTS;case re.PERMISSION_DENIED:return y.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case re.ABORTED:return y.ABORTED;case re.OUT_OF_RANGE:return y.OUT_OF_RANGE;case re.UNIMPLEMENTED:return y.UNIMPLEMENTED;case re.DATA_LOSS:return y.DATA_LOSS;default:return O()}}(z=re||(re={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ba{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ki}static getOrCreateInstance(){return Ki===null&&(Ki=new Ba),Ki}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ki=null;/**
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
 */class ys{constructor(e,t,i,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ys(P.min(),r,sf(),dt(),B())}}class Ni{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ni(i,t,B(),B(),B())}}/**
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
 */class ur{constructor(e,t,i,r){this.It=e,this.removedTargetIds=t,this.key=i,this.Tt=r}}class gf{constructor(e,t){this.targetId=e,this.Et=t}}class mf{constructor(e,t,i=Re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class Kc{constructor(){this.At=0,this.Rt=Yc(),this.vt=Re.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=B(),t=B(),i=B();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:O()}}),new Ni(this.vt,this.bt,e,t,i)}xt(){this.Pt=!1,this.Rt=Yc()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class mw{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=dt(),this.qt=Qc(),this.Ut=new le(j)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const i=this.jt(t);switch(e.state){case 0:this.Wt(t)&&i.Dt(e.resumeToken);break;case 1:i.$t(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.$t(),i.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(i.Mt(),i.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),i.Dt(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((i,r)=>{this.Wt(r)&&t(r)})}Jt(e){var t;const i=e.targetId,r=e.Et.count,s=this.Yt(i);if(s){const o=s.target;if(Fo(o))if(r===0){const a=new R(o.path);this.Qt(i,a,be.newNoDocument(a,P.min()))}else Y(r===1);else{const a=this.Zt(i);a!==r&&(this.Ht(i),this.Ut=this.Ut.add(i),(t=Ba.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Fo(a.target)){const l=new R(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,be.newNoDocument(l,e))}s.St&&(t.set(o,s.Ct()),s.xt())}});let i=B();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new ys(e,t,this.Ut,this.Lt,i);return this.Lt=dt(),this.qt=Qc(),this.Ut=new le(j),r}Gt(e,t){if(!this.Wt(e))return;const i=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,i),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,i){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),i&&(this.Lt=this.Lt.insert(t,i))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Kc,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new le(j),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||A("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Kc),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Qc(){return new ce(R.comparator)}function Yc(){return new ce(R.comparator)}/**
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
 */const yw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_w=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vw=(()=>({and:"AND",or:"OR"}))();class ww{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ew(n,e){return Vr(n,e.toTimestamp())}function Ze(n){return Y(!!n),P.fromTimestamp(function(e){const t=St(e);return new ae(t.seconds,t.nanos)}(n))}function za(n,e){return function(t){return new Q(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function _f(n){const e=Q.fromString(n);return Y(Tf(e)),e}function Bo(n,e){return za(n.databaseId,e.path)}function no(n,e){const t=_f(e);if(t.get(1)!==n.databaseId.projectId)throw new k(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new R(vf(t))}function zo(n,e){return za(n.databaseId,e)}function Tw(n){const e=_f(n);return e.length===4?Q.emptyPath():vf(e)}function Ho(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vf(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Xc(n,e,t){return{name:Bo(n,e),fields:t.value.mapValue.fields}}function Iw(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Y(u===void 0||typeof u=="string"),Re.fromBase64String(u||"")):(Y(u===void 0||u instanceof Uint8Array),Re.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?y.UNKNOWN:pf(l.code);return new k(u,l.message||"")}(o);t=new mf(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=no(n,i.document.name),s=Ze(i.document.updateTime),o=i.document.createTime?Ze(i.document.createTime):P.min(),a=new $e({mapValue:{fields:i.document.fields}}),l=be.newFoundDocument(r,s,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];t=new ur(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=no(n,i.document),s=i.readTime?Ze(i.readTime):P.min(),o=be.newNoDocument(r,s),a=i.removedTargetIds||[];t=new ur([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=no(n,i.document),s=i.removedTargetIds||[];t=new ur([],s,r,null)}else{if(!("filter"in e))return O();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new pw(r),o=i.targetId;t=new gf(o,s)}}return t}function bw(n,e){let t;if(e instanceof xi)t={update:Xc(n,e.key,e.value)};else if(e instanceof $a)t={delete:Bo(n,e.key)};else if(e instanceof Zt)t={update:Xc(n,e.key,e.data),updateMask:Ow(e.fieldMask)};else{if(!(e instanceof hw))return O();t={verify:Bo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Fr)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof di)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $r)return{fieldPath:s.field.canonicalString(),increment:o._t};throw O()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Ew(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:O()}(n,e.precondition)),t}function kw(n,e){return n&&n.length>0?(Y(e!==void 0),n.map(t=>function(i,r){let s=i.updateTime?Ze(i.updateTime):Ze(r);return s.isEqual(P.min())&&(s=Ze(r)),new lw(s,i.transformResults||[])}(t,e))):[]}function Sw(n,e){return{documents:[zo(n,e.path)]}}function Aw(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=zo(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=zo(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(l){if(l.length!==0)return Ef(Ge.create(l,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:un(c.field),direction:Dw(c.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||hs(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function Cw(n){let e=Tw(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){Y(i===1);const c=t.from[0];c.allDescendants?r=c.collectionId:e=e.child(c.collectionId)}let s=[];t.where&&(s=function(c){const h=wf(c);return h instanceof Ge&&Kd(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(c=>function(h){return new gn(hn(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;t.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,hs(h)?null:h}(t.limit));let l=null;t.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new Pr(f,h)}(t.startAt));let u=null;return t.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new Pr(f,h)}(t.endAt)),Xv(e,r,o,s,a,"F",l,u)}function Rw(n,e){const t=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function wf(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=hn(e.unaryFilter.field);return oe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const i=hn(e.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hn(e.unaryFilter.field);return oe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hn(e.unaryFilter.field);return oe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return oe.create(hn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ge.create(e.compositeFilter.filters.map(t=>wf(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function Dw(n){return yw[n]}function xw(n){return _w[n]}function Nw(n){return vw[n]}function un(n){return{fieldPath:n.canonicalString()}}function hn(n){return ke.fromServerFormat(n.fieldPath)}function Ef(n){return n instanceof oe?function(e){if(e.op==="=="){if($c(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NAN"}};if(Fc(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($c(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NAN"}};if(Fc(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(e.field),op:xw(e.op),value:e.value}}}(n):n instanceof Ge?function(e){const t=e.getFilters().map(i=>Ef(i));return t.length===1?t[0]:{compositeFilter:{op:Nw(e.op),filters:t}}}(n):O()}function Ow(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Tf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jt{constructor(e,t,i,r,s=P.min(),o=P.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Lw{constructor(e){this.se=e}}function Mw(n){const e=Cw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ur(e,e.limit,"L"):e}/**
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
 */class Pw{constructor(){this.He=new Uw}addToCollectionParentIndex(e,t){return this.He.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(kt.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(kt.min())}updateCollectionGroup(e,t,i){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class Uw{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new le(Q.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new le(Q.comparator)).toArray()}}/**
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
 */class Sn{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Sn(0)}static bn(){return new Sn(-1)}}/**
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
 */class Fw{constructor(){this.changes=new Pn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?v.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $w{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Vw{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&Xn(i.mutation,r,qe.empty(),ae.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,B()).next(()=>i))}getLocalViewOfDocuments(e,t,i=B()){const r=Bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let o=jn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=Bt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,B()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,r){let s=dt();const o=Yn(),a=Yn();return t.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof Zt)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Xn(c.mutation,u,c.mutation.getFieldMask(),ae.now())):o.set(u.key,qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),t.forEach((u,c)=>{var h;return a.set(u,new $w(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Yn();let r=new ce((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let c=i.get(l)||qe.empty();c=a.applyToLocalView(u,c),i.set(l,c);const h=(r.get(a.batchId)||B()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=rf();c.forEach(f=>{if(!s.has(f)){const d=df(t.get(f),i.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i){return function(r){return R.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Jd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i):this.getDocumentsMatchingCollectionQuery(e,t,i)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):v.resolve(Bt());let a=-1,l=s;return o.next(u=>v.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,B())).next(c=>({batchId:a,changes:nf(c)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new R(t)).next(i=>{let r=jn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i){const r=t.collectionGroup;let s=jn();return this.indexManager.getCollectionParents(e,r).next(o=>v.forEach(o,a=>{const l=function(u,c){return new Mn(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r))).next(s=>{r.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=jn();return s.forEach((a,l)=>{const u=r.get(a);u!==void 0&&Xn(u.mutation,l,qe.empty(),ae.now()),ps(t,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Bw{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return v.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var i;return this.Zn.set(t.id,{id:(i=t).id,version:i.version,createTime:Ze(i.createTime)}),v.resolve()}getNamedQuery(e,t){return v.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(i){return{name:i.name,query:Mw(i.bundledQuery),readTime:Ze(i.readTime)}}(t)),v.resolve()}}/**
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
 */class zw{constructor(){this.overlays=new ce(R.comparator),this.ts=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Bt();return v.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.re(e,t,s)}),v.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.ts.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(i)),v.resolve()}getOverlaysForCollection(e,t,i){const r=Bt(),s=t.length+1,o=new R(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return v.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=Bt(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Bt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return v.resolve(a)}re(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(i.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new fw(t,i));let s=this.ts.get(t);s===void 0&&(s=B(),this.ts.set(t,s)),this.ts.set(t,s.add(i.key))}}/**
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
 */class Ha{constructor(){this.es=new le(pe.ns),this.ss=new le(pe.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const i=new pe(e,t);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.us(new pe(e,t))}cs(e,t){e.forEach(i=>this.removeReference(i,t))}hs(e){const t=new R(new Q([])),i=new pe(t,e),r=new pe(t,e+1),s=[];return this.ss.forEachInRange([i,r],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new R(new Q([])),i=new pe(t,e),r=new pe(t,e+1);let s=B();return this.ss.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new pe(e,0),i=this.es.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class pe{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return R.comparator(e.key,t.key)||j(e.ds,t.ds)}static rs(e,t){return j(e.ds,t.ds)||R.comparator(e.key,t.key)}}/**
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
 */class Hw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new le(pe.ns)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dw(s,t,i,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,t){return v.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.ys(i),s=r<0?0:r;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new pe(t,0),r=new pe(t,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,r],o=>{const a=this.gs(o.ds);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new le(j);return t.forEach(r=>{const s=new pe(r,0),o=new pe(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{i=i.add(a.ds)})}),v.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;R.isDocumentKey(s)||(s=s.child(""));const o=new pe(new R(s),0);let a=new le(j);return this._s.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.ds)),!0)},o),v.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(i=>{const r=this.gs(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Y(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this._s;return v.forEach(t.mutations,r=>{const s=new pe(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=i})}En(e){}containsKey(e,t){const i=new pe(t,0),r=this._s.firstAfterOrEqual(i);return v.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class qw{constructor(e){this.Ts=e,this.docs=new ce(R.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return v.resolve(i?i.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let i=dt();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():be.newInvalidDocument(r))}),v.resolve(i)}getDocumentsMatchingQuery(e,t,i,r){let s=dt();const o=t.path,a=new R(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ov(Nv(c),i)<=0||(r.has(c.key)||ps(t,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,t,i,r){O()}Es(e,t){return v.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new jw(this)}getSize(e){return v.resolve(this.size)}}class jw extends Fw{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(i)}),v.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class Gw{constructor(e){this.persistence=e,this.As=new Pn(t=>Ma(t),Pa),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ha,this.targetCount=0,this.bs=Sn.vn()}forEachTarget(e,t){return this.As.forEach((i,r)=>t(r)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Rs&&(this.Rs=t),v.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Sn(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.Sn(t),v.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),v.waitFor(s).next(()=>r)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const i=this.As.get(t)||null;return v.resolve(i)}addMatchingKeys(e,t,i){return this.vs.os(t,i),v.resolve()}removeMatchingKeys(e,t,i){this.vs.cs(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),v.resolve()}getMatchingKeysForTargetId(e,t){const i=this.vs.fs(t);return v.resolve(i)}containsKey(e,t){return v.resolve(this.vs.containsKey(t))}}/**
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
 */class Ww{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Oa(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Gw(this),this.indexManager=new Pw,this.remoteDocumentCache=function(i){return new qw(i)}(i=>this.referenceDelegate.Cs(i)),this.serializer=new Lw(t),this.xs=new Bw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Ps[e.toKey()];return i||(i=new Hw(t,this.referenceDelegate),this.Ps[e.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,i){A("MemoryPersistence","Starting transaction:",e);const r=new Kw(this.Vs.next());return this.referenceDelegate.Ns(),i(r).next(s=>this.referenceDelegate.ks(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Os(e,t){return v.or(Object.values(this.Ps).map(i=>()=>i.containsKey(e,t)))}}class Kw extends Mv{constructor(e){super(),this.currentSequenceNumber=e}}class qa{constructor(e){this.persistence=e,this.$s=new Ha,this.Ms=null}static Fs(e){return new qa(e)}get Bs(){if(this.Ms)return this.Ms;throw O()}addReference(e,t,i){return this.$s.addReference(i,t),this.Bs.delete(i.toString()),v.resolve()}removeReference(e,t,i){return this.$s.removeReference(i,t),this.Bs.add(i.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),v.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(r=>this.Bs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.Bs.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Bs,i=>{const r=R.fromPath(i);return this.Ls(e,r).next(s=>{s||t.removeEntry(r,P.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(i=>{i?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return v.or([()=>v.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class ja{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.Vi=i,this.Si=r}static Di(e,t){let i=B(),r=B();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ja(e,t.fromCache,i,r)}}/**
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
 */class Qw{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,i,r){return this.Ni(e,t).next(s=>s||this.ki(e,t,r,i)).next(s=>s||this.Oi(e,t))}Ni(e,t){if(Hc(t))return v.resolve(null);let i=ht(t);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ur(t,null,"F"),i=ht(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=B(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const u=this.$i(t,a);return this.Mi(t,u,o,l.readTime)?this.Ni(e,Ur(t,null,"F")):this.Fi(e,u,t,l)}))})))}ki(e,t,i,r){return Hc(t)||r.isEqual(P.min())?this.Oi(e,t):this.xi.getDocuments(e,i).next(s=>{const o=this.$i(t,s);return this.Mi(t,o,i,r)?this.Oi(e,t):(Oc()<=H.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vo(t)),this.Fi(e,o,t,xv(r,-1)))})}$i(e,t){let i=new le(ef(e));return t.forEach((r,s)=>{ps(e,s)&&(i=i.add(s))}),i}Mi(e,t,i,r){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Oi(e,t){return Oc()<=H.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Vo(t)),this.xi.getDocumentsMatchingQuery(e,t,kt.min())}Fi(e,t,i,r){return this.xi.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Yw{constructor(e,t,i,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new ce(j),this.qi=new Pn(s=>Ma(s),Pa),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(i)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vw(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function Xw(n,e,t,i){return new Yw(n,e,t,i)}async function If(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.Gi(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=B();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return t.localDocuments.getDocuments(i,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Jw(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=v.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(m=>{const E=l.docVersions.get(d);Y(E!==null),m.version.compareTo(E)<0&&(c.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),u.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(t,i,e,s).next(()=>s.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=B();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function bf(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function Zw(n,e){const t=F(n),i=e.snapshotVersion;let r=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});r=t.Li;const a=[];e.targetChanges.forEach((c,h)=>{const f=r.get(h);if(!f)return;a.push(t.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(s,c.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(Re.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,i)),r=r.insert(h,d),function(m,E,T){return m.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,d,c)&&a.push(t.Ds.updateTargetData(s,d))});let l=dt(),u=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(e0(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!i.isEqual(P.min())){const c=t.Ds.getLastRemoteSnapshotVersion(s).next(h=>t.Ds.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.Li=r,s))}function e0(n,e,t){let i=B(),r=B();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let o=dt();return t.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(P.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:r}})}function t0(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function n0(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.Ds.getTargetData(i,e).next(s=>s?(r=s,v.resolve(r)):t.Ds.allocateTargetId(i).next(o=>(r=new jt(e,o,0,i.currentSequenceNumber),t.Ds.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.Li.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Li=t.Li.insert(i.targetId,i),t.qi.set(e,i.targetId)),i})}async function qo(n,e,t){const i=F(n),r=i.Li.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Di(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function Jc(n,e,t){const i=F(n);let r=P.min(),s=B();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),h=c.qi.get(u);return h!==void 0?v.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(i,o,ht(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.Bi.getDocumentsMatchingQuery(o,e,t?r:P.min(),t?s:B())).next(a=>(i0(i,Jv(e),a),{documents:a,Wi:s})))}function i0(n,e,t){let i=n.Ui.get(e)||P.min();t.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),n.Ui.set(e,i)}class Zc{constructor(){this.activeTargetIds=sf()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r0{constructor(){this.Br=new Zc,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,i){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Zc,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class s0{qr(e){}shutdown(){}}/**
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
 */class eu{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qi=null;function io(){return Qi===null?Qi=268435456+Math.round(2147483648*Math.random()):Qi++,"0x"+Qi.toString(16)}/**
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
 */const o0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class a0{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const Ee="WebChannelConnection";class l0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,i,r,s){const o=io(),a=this.ao(e,t);A("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.ho(l,r,s),this.lo(e,a,l,i).then(u=>(A("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Lr("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",i),u})}fo(e,t,i,r,s,o){return this.co(e,t,i,r,s)}ho(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+On,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ao(e,t){const i=o0[e];return`${this.ro}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,i,r){const s=io();return new Promise((o,a)=>{const l=new Ev;l.setWithCredentials(!0),l.listenOnce(_v.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case to.NO_ERROR:const c=l.getResponseJson();A(Ee,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case to.TIMEOUT:A(Ee,`RPC '${e}' ${s} timed out`),a(new k(y.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const h=l.getStatus();if(A(Ee,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(E){const T=E.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(T)>=0?T:y.UNKNOWN}(d.status);a(new k(m,d.message))}else a(new k(y.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new k(y.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{A(Ee,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(r);A(Ee,`RPC '${e}' ${s} sending request:`,r),l.send(t,"POST",u,i,15)})}wo(e,t,i){const r=io(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mv(),a=yv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new wv({})),this.ho(l.initMessageHeaders,t,i),l.encodeInitMessageHeaders=!0;const u=s.join("");A(Ee,`Creating RPC '${e}' stream ${r}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,f=!1;const d=new a0({Wr:E=>{f?A(Ee,`Not sending because RPC '${e}' stream ${r} is closed:`,E):(h||(A(Ee,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),A(Ee,`RPC '${e}' stream ${r} sending:`,E),c.send(E))},Hr:()=>c.close()}),m=(E,T,b)=>{E.listen(T,N=>{try{b(N)}catch($){setTimeout(()=>{throw $},0)}})};return m(c,ji.EventType.OPEN,()=>{f||A(Ee,`RPC '${e}' stream ${r} transport opened.`)}),m(c,ji.EventType.CLOSE,()=>{f||(f=!0,A(Ee,`RPC '${e}' stream ${r} transport closed`),d.so())}),m(c,ji.EventType.ERROR,E=>{f||(f=!0,Lr(Ee,`RPC '${e}' stream ${r} transport errored:`,E),d.so(new k(y.UNAVAILABLE,"The operation could not be completed")))}),m(c,ji.EventType.MESSAGE,E=>{var T;if(!f){const b=E.data[0];Y(!!b);const N=b,$=N.error||((T=N[0])===null||T===void 0?void 0:T.error);if($){A(Ee,`RPC '${e}' stream ${r} received error:`,$);const q=$.status;let K=function(we){const ee=re[we];if(ee!==void 0)return pf(ee)}(q),X=$.message;K===void 0&&(K=y.INTERNAL,X="Unknown error status: "+q+" with message "+$.message),f=!0,d.so(new k(K,X)),c.close()}else A(Ee,`RPC '${e}' stream ${r} received:`,b),d.io(b)}}),m(a,vv.STAT_EVENT,E=>{E.stat===xc.PROXY?A(Ee,`RPC '${e}' stream ${r} detected buffering proxy`):E.stat===xc.NOPROXY&&A(Ee,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function ro(){return typeof document<"u"?document:null}/**
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
 */function _s(n){return new ww(n,!0)}/**
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
 */class kf{constructor(e,t,i=1e3,r=1.5,s=6e4){this.Ws=e,this.timerId=t,this._o=i,this.mo=r,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),r=Math.max(0,t-i);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Sf{constructor(e,t,i,r,s,o,a,l){this.Ws=e,this.bo=i,this.Po=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new kf(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===y.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.Vo===t&&this.Ko(i,r)},i=>{e(()=>{const r=new k(y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Go(r)})})}Ko(e,t){const i=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{i(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{i(()=>this.Go(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c0 extends Sf{constructor(e,t,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=Iw(this.serializer,e),i=function(r){if(!("targetChange"in r))return P.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?P.min():s.readTime?Ze(s.readTime):P.min()}(e);return this.listener.zo(t,i)}jo(e){const t={};t.database=Ho(this.serializer),t.addTarget=function(r,s){let o;const a=s.target;return o=Fo(a)?{documents:Sw(r,a)}:{query:Aw(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=yf(r,s.resumeToken):s.snapshotVersion.compareTo(P.min())>0&&(o.readTime=Vr(r,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const i=Rw(this.serializer,e);i&&(t.labels=i),this.Fo(t)}Wo(e){const t={};t.database=Ho(this.serializer),t.removeTarget=e,this.Fo(t)}}class u0 extends Sf{constructor(e,t,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=kw(e.writeResults,e.commitTime),i=Ze(e.commitTime);return this.listener.Zo(i,t)}return Y(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Ho(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>bw(this.serializer,i))};this.Fo(t)}}/**
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
 */class h0 extends class{}{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new k(y.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.co(e,t,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new k(y.UNKNOWN,r.toString())})}fo(e,t,i,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,t,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(y.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class d0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ut(t),this.ru=!1):A("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class f0{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{i.enqueueAndForget(async()=>{en(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.du.add(4),await Oi(l),l.mu.set("Unknown"),l.du.delete(4),await vs(l)}(this))})}),this.mu=new d0(i,r)}}async function vs(n){if(en(n))for(const e of n.wu)await e(!0)}async function Oi(n){for(const e of n.wu)await e(!1)}function Af(n,e){const t=F(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),Ka(t)?Wa(t):Un(t).No()&&Ga(t,e))}function Cf(n,e){const t=F(n),i=Un(t);t.fu.delete(e),i.No()&&Rf(t,e),t.fu.size===0&&(i.No()?i.$o():en(t)&&t.mu.set("Unknown"))}function Ga(n,e){n.gu.Ot(e.targetId),Un(n).jo(e)}function Rf(n,e){n.gu.Ot(e),Un(n).Wo(e)}function Wa(n){n.gu=new mw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Un(n).start(),n.mu.ou()}function Ka(n){return en(n)&&!Un(n).xo()&&n.fu.size>0}function en(n){return F(n).du.size===0}function Df(n){n.gu=void 0}async function p0(n){n.fu.forEach((e,t)=>{Ga(n,e)})}async function g0(n,e){Df(n),Ka(n)?(n.mu.au(e),Wa(n)):n.mu.set("Unknown")}async function m0(n,e,t){if(n.mu.set("Online"),e instanceof mf&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.fu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.fu.delete(o),i.gu.removeTarget(o))}(n,e)}catch(i){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Br(n,i)}else if(e instanceof ur?n.gu.Kt(e):e instanceof gf?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(P.min()))try{const i=await bf(n.localStore);t.compareTo(i)>=0&&await function(r,s){const o=r.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.fu.get(l);u&&r.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=r.fu.get(a);if(!l)return;r.fu.set(a,l.withResumeToken(Re.EMPTY_BYTE_STRING,l.snapshotVersion)),Rf(r,a);const u=new jt(l.target,a,1,l.sequenceNumber);Ga(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){A("RemoteStore","Failed to raise snapshot:",i),await Br(n,i)}}async function Br(n,e,t){if(!Di(e))throw e;n.du.add(1),await Oi(n),n.mu.set("Offline"),t||(t=()=>bf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await vs(n)})}function xf(n,e){return e().catch(t=>Br(n,t,e))}async function ws(n){const e=F(n),t=At(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;y0(e);)try{const r=await t0(e.localStore,i);if(r===null){e.lu.length===0&&t.$o();break}i=r.batchId,_0(e,r)}catch(r){await Br(e,r)}Nf(e)&&Of(e)}function y0(n){return en(n)&&n.lu.length<10}function _0(n,e){n.lu.push(e);const t=At(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function Nf(n){return en(n)&&!At(n).xo()&&n.lu.length>0}function Of(n){At(n).start()}async function v0(n){At(n).tu()}async function w0(n){const e=At(n);for(const t of n.lu)e.Yo(t.mutations)}async function E0(n,e,t){const i=n.lu.shift(),r=Va.from(i,e,t);await xf(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ws(n)}async function T0(n,e){e&&At(n).Jo&&await async function(t,i){if(r=i.code,gw(r)&&r!==y.ABORTED){const s=t.lu.shift();At(t).Oo(),await xf(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ws(t)}var r}(n,e),Nf(n)&&Of(n)}async function tu(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const i=en(t);t.du.add(3),await Oi(t),i&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await vs(t)}async function I0(n,e){const t=F(n);e?(t.du.delete(2),await vs(t)):e||(t.du.add(2),await Oi(t),t.mu.set("Unknown"))}function Un(n){return n.yu||(n.yu=function(e,t,i){const r=F(e);return r.nu(),new c0(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Jr:p0.bind(null,n),Zr:g0.bind(null,n),zo:m0.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),Ka(n)?Wa(n):n.mu.set("Unknown")):(await n.yu.stop(),Df(n))})),n.yu}function At(n){return n.pu||(n.pu=function(e,t,i){const r=F(e);return r.nu(),new u0(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Jr:v0.bind(null,n),Zr:T0.bind(null,n),Xo:w0.bind(null,n),Zo:E0.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await ws(n)):(await n.pu.stop(),n.lu.length>0&&(A("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class Qa{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,a=new Qa(e,t,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ya(n,e){if(ut("AsyncQueue",`${e}: ${n}`),Di(n))return new k(y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class yn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||R.comparator(t.key,i.key):(t,i)=>R.comparator(t.key,i.key),this.keyedMap=jn(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new yn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class nu{constructor(){this.Iu=new ce(R.comparator)}track(e){const t=e.doc.key,i=this.Iu.get(t);i?e.type!==0&&i.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&i.type!==1?this.Iu=this.Iu.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Iu=this.Iu.remove(t):e.type===1&&i.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):O():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,i)=>{e.push(i)}),e}}class An{constructor(e,t,i,r,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,r,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new An(e,t,yn.emptySet(t),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class b0{constructor(){this.Eu=void 0,this.listeners=[]}}class k0{constructor(){this.queries=new Pn(e=>Zd(e),fs),this.onlineState="Unknown",this.Au=new Set}}async function S0(n,e){const t=F(n),i=e.query;let r=!1,s=t.queries.get(i);if(s||(r=!0,s=new b0),r)try{s.Eu=await t.onListen(i)}catch(o){const a=Ya(o,`Initialization of query '${Vo(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.listeners.push(e),e.Ru(t.onlineState),s.Eu&&e.vu(s.Eu)&&Xa(t)}async function A0(n,e){const t=F(n),i=e.query;let r=!1;const s=t.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return t.queries.delete(i),t.onUnlisten(i)}function C0(n,e){const t=F(n);let i=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.vu(r)&&(i=!0);o.Eu=r}}i&&Xa(t)}function R0(n,e,t){const i=F(n),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(t);i.queries.delete(e)}function Xa(n){n.Au.forEach(e=>{e.next()})}class D0{constructor(e,t,i){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=i||{}}vu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new An(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.xu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=An.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Lf{constructor(e){this.key=e}}class Mf{constructor(e){this.key=e}}class x0{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=B(),this.mutatedKeys=B(),this.Ku=ef(e),this.Gu=new yn(this.Ku)}get Qu(){return this.Lu}zu(e,t){const i=t?t.ju:new nu,r=t?t.Gu:this.Gu;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((c,h)=>{const f=r.get(c),d=ps(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),E=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let T=!1;f&&d?f.data.isEqual(d.data)?m!==E&&(i.track({type:3,doc:d}),T=!0):this.Wu(f,d)||(i.track({type:2,doc:d}),T=!0,(l&&this.Ku(d,l)>0||u&&this.Ku(d,u)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),T=!0):f&&!d&&(i.track({type:1,doc:f}),T=!0,(l||u)&&(a=!0)),T&&(d?(o=o.add(d),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{Gu:o,ju:i,Mi:a,mutatedKeys:s}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return d(h)-d(f)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(i);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new An(this.query,e.Gu,r,s,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new nu,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=B(),this.Gu.forEach(i=>{this.Zu(i.key)&&(this.Uu=this.Uu.add(i.key))});const t=[];return e.forEach(i=>{this.Uu.has(i)||t.push(new Mf(i))}),this.Uu.forEach(i=>{e.has(i)||t.push(new Lf(i))}),t}Xu(e){this.Lu=e.Wi,this.Uu=B();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return An.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class N0{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class O0{constructor(e){this.key=e,this.ec=!1}}class L0{constructor(e,t,i,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Pn(a=>Zd(a),fs),this.ic=new Map,this.rc=new Set,this.oc=new ce(R.comparator),this.uc=new Map,this.cc=new Ha,this.ac={},this.hc=new Map,this.lc=Sn.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function M0(n,e){const t=j0(n);let i,r;const s=t.sc.get(e);if(s)i=s.targetId,t.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const o=await n0(t.localStore,ht(e));t.isPrimaryClient&&Af(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await P0(t,e,i,a==="current",o.resumeToken)}return r}async function P0(n,e,t,i,r){n.dc=(h,f,d)=>async function(m,E,T,b){let N=E.view.zu(T);N.Mi&&(N=await Jc(m.localStore,E.query,!1).then(({documents:K})=>E.view.zu(K,N)));const $=b&&b.targetChanges.get(E.targetId),q=E.view.applyChanges(N,m.isPrimaryClient,$);return ru(m,E.targetId,q.Yu),q.snapshot}(n,h,f,d);const s=await Jc(n.localStore,e,!0),o=new x0(e,s.Wi),a=o.zu(s.documents),l=Ni.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,l);ru(n,t,u.Yu);const c=new N0(e,t,o);return n.sc.set(e,c),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function U0(n,e){const t=F(n),i=t.sc.get(e),r=t.ic.get(i.targetId);if(r.length>1)return t.ic.set(i.targetId,r.filter(s=>!fs(s,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await qo(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),Cf(t.remoteStore,i.targetId),jo(t,i.targetId)}).catch(Ri)):(jo(t,i.targetId),await qo(t.localStore,i.targetId,!0))}async function F0(n,e,t){const i=G0(n);try{const r=await function(s,o){const a=F(s),l=ae.now(),u=o.reduce((f,d)=>f.add(d.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=dt(),m=B();return a.Ki.getEntries(f,u).next(E=>{d=E,d.forEach((T,b)=>{b.isValidDocument()||(m=m.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(E=>{c=E;const T=[];for(const b of o){const N=uw(b,c.get(b.key).overlayedDocument);N!=null&&T.push(new Zt(b.key,N,jd(N.value.mapValue),je.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,T,o)}).next(E=>{h=E;const T=E.applyToLocalDocumentSet(c,m);return a.documentOverlayCache.saveOverlays(f,E.batchId,T)})}).then(()=>({batchId:h.batchId,changes:nf(c)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new ce(j)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(i,r.batchId,t),await Li(i,r.changes),await ws(i.remoteStore)}catch(r){const s=Ya(r,"Failed to persist write");t.reject(s)}}async function Pf(n,e){const t=F(n);try{const i=await Zw(t.localStore,e);e.targetChanges.forEach((r,s)=>{const o=t.uc.get(s);o&&(Y(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Y(o.ec):r.removedDocuments.size>0&&(Y(o.ec),o.ec=!1))}),await Li(t,i,e)}catch(i){await Ri(i)}}function iu(n,e,t){const i=F(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&Xa(a)}(i.eventManager,e),r.length&&i.nc.zo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $0(n,e,t){const i=F(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.uc.get(e),s=r&&r.key;if(s){let o=new ce(R.comparator);o=o.insert(s,be.newNoDocument(s,P.min()));const a=B().add(s),l=new ys(P.min(),new Map,new le(j),o,a);await Pf(i,l),i.oc=i.oc.remove(s),i.uc.delete(e),Ja(i)}else await qo(i.localStore,e,!1).then(()=>jo(i,e,t)).catch(Ri)}async function V0(n,e){const t=F(n),i=e.batch.batchId;try{const r=await Jw(t.localStore,e);Ff(t,i,null),Uf(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Li(t,r)}catch(r){await Ri(r)}}async function B0(n,e,t){const i=F(n);try{const r=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Y(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(i.localStore,e);Ff(i,e,t),Uf(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Li(i,r)}catch(r){await Ri(r)}}function Uf(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Ff(n,e,t){const i=F(n);let r=i.ac[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function jo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.ic.get(e))n.sc.delete(i),t&&n.nc.wc(i,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(i=>{n.cc.containsKey(i)||$f(n,i)})}function $f(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(Cf(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Ja(n))}function ru(n,e,t){for(const i of t)i instanceof Lf?(n.cc.addReference(i.key,e),z0(n,i)):i instanceof Mf?(A("SyncEngine","Document no longer in limbo: "+i.key),n.cc.removeReference(i.key,e),n.cc.containsKey(i.key)||$f(n,i.key)):O()}function z0(n,e){const t=e.key,i=t.path.canonicalString();n.oc.get(t)||n.rc.has(i)||(A("SyncEngine","New document in limbo: "+t),n.rc.add(i),Ja(n))}function Ja(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new R(Q.fromString(e)),i=n.lc.next();n.uc.set(i,new O0(t)),n.oc=n.oc.insert(t,i),Af(n.remoteStore,new jt(ht(Ua(t.path)),i,2,Oa.ct))}}async function Li(n,e,t){const i=F(n),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,t).then(u=>{if((u||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const c=ja.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),i.nc.zo(r),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>v.forEach(l,h=>v.forEach(h.Vi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>v.forEach(h.Si,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Di(c))throw c;A("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Li.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);u.Li=u.Li.insert(h,m)}}}(i.localStore,s))}async function H0(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const i=await If(t.localStore,e);t.currentUser=e,function(r,s){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new k(y.CANCELLED,s))})}),r.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Li(t,i.Qi)}}function q0(n,e){const t=F(n),i=t.uc.get(e);if(i&&i.ec)return B().add(i.key);{let r=B();const s=t.ic.get(e);if(!s)return r;for(const o of s){const a=t.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function j0(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$0.bind(null,e),e.nc.zo=C0.bind(null,e.eventManager),e.nc.wc=R0.bind(null,e.eventManager),e}function G0(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B0.bind(null,e),e}class su{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_s(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Xw(this.persistence,new Qw,e.initialUser,this.serializer)}createPersistence(e){return new Ww(qa.Fs,this.serializer)}createSharedClientState(e){return new r0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class W0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>iu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=H0.bind(null,this.syncEngine),await I0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new k0}createDatastore(e){const t=_s(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new l0(r));var r;return function(s,o,a,l){return new h0(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>iu(this.syncEngine,a,0),o=eu.D()?new eu:new s0,new f0(t,i,r,s,o);var t,i,r,s,o}createSyncEngine(e,t){return function(i,r,s,o,a,l,u){const c=new L0(i,r,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=F(e);A("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Oi(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class K0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Q0{constructor(e,t,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=Bd.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ya(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function so(n,e){n.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await If(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ou(n,e){n.asyncQueue.verifyOperationInProgress();const t=await X0(n);A("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(r=>tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>tu(e.remoteStore,s)),n._onlineComponents=e}function Y0(n){return n.name==="FirebaseError"?n.code===y.FAILED_PRECONDITION||n.code===y.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function X0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await so(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Y0(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await so(n,new su)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await so(n,new su);return n._offlineComponents}async function Vf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await ou(n,n._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await ou(n,new W0))),n._onlineComponents}function J0(n){return Vf(n).then(e=>e.syncEngine)}async function au(n){const e=await Vf(n),t=e.eventManager;return t.onListen=M0.bind(null,e.syncEngine),t.onUnlisten=U0.bind(null,e.syncEngine),t}/**
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
 */const lu=new Map;/**
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
 */function Bf(n,e,t){if(!t)throw new k(y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Z0(n,e,t,i){if(e===!0&&i===!0)throw new k(y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cu(n){if(!R.isDocumentKey(n))throw new k(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function uu(n){if(R.isDocumentKey(n))throw new k(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Es(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function It(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Es(n);throw new k(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function eE(n,e){if(e<=0)throw new k(y.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class hu{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new k(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Z0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ts{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Tv;switch(t.type){case"firstParty":return new Sv(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new k(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lu.get(e);t&&(A("ComponentProvider","Removing Datastore"),lu.delete(e),t.terminate())}(this),Promise.resolve()}}function tE(n,e,t,i={}){var r;const s=(n=It(n,Ts))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${t}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Ie.MOCK_USER;else{o=Jp(i.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new k(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ie(l)}n._authCredentials=new Iv(new Vd(o,a))}}/**
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
 */class Le{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Nt{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class bt extends Nt{constructor(e,t,i){super(e,t,Ua(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new R(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function du(n,e,...t){if(n=xe(n),Bf("collection","path",e),n instanceof Ts){const i=Q.fromString(e,...t);return uu(i),new bt(n,null,i)}{if(!(n instanceof Le||n instanceof bt))throw new k(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(e,...t));return uu(i),new bt(n.firestore,null,i)}}function Go(n,e,...t){if(n=xe(n),arguments.length===1&&(e=Bd.A()),Bf("doc","path",e),n instanceof Ts){const i=Q.fromString(e,...t);return cu(i),new Le(n,null,new R(i))}{if(!(n instanceof Le||n instanceof bt))throw new k(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(e,...t));return cu(i),new Le(n.firestore,n instanceof bt?n.converter:null,new R(i))}}/**
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
 */class nE{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new kf(this,"async_queue_retry"),this.qc=()=>{const t=ro();t&&A("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=ro();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=ro();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new qt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Di(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(i=>{this.Mc=i,this.Fc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw ut("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Fc=!1,i))));return this.Nc=t,t}enqueueAfterDelay(e,t,i){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=Qa.createAndSchedule(this,e,t,i,s=>this.Qc(s));return this.$c.push(r),r}Uc(){this.Mc&&O()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function fu(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of t)if(r in i&&typeof i[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Cn extends Ts{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new nE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hf(this),this._firestoreClient.terminate()}}function iE(n,e){const t=typeof n=="object"?n:th(),i=typeof n=="string"?n:e||"(default)",r=na(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Qp("firestore");s&&tE(r,...s)}return r}function zf(n){return n._firestoreClient||Hf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Hf(n){var e,t,i;const r=n._freezeSettings(),s=function(o,a,l,u){return new $v(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new Q0(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=r.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class Rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rn(Re.fromBase64String(e))}catch(t){throw new k(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rn(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qf{constructor(e){this._methodName=e}}/**
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
 */class el{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
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
 */const rE=/^__.*__$/;class sE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new xi(e,this.data,t,this.fieldTransforms)}}function jf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class tl{constructor(e,t,i,r,s,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new tl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Zc({path:i,ta:!1});return r.ea(e),r}na(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Zc({path:i,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return zr(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(jf(this.Yc)&&rE.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class oE{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||_s(e)}ua(e,t,i,r=!1){return new tl({Yc:e,methodName:t,oa:i,path:ke.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nl(n){const e=n._freezeSettings(),t=_s(n._databaseId);return new oE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gf(n,e,t,i,r,s={}){const o=n.ua(s.merge||s.mergeFields?2:0,e,t,r);Qf("Data must be an object, but it was:",o,i);const a=Wf(i,o);let l,u;if(s.merge)l=new qe(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=lE(e,h,t);if(!o.contains(f))throw new k(y.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uE(c,f)||c.push(f)}l=new qe(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new sE(new $e(a),l,u)}function aE(n,e,t,i=!1){return il(t,n.ua(i?4:3,e))}function il(n,e){if(Kf(n=xe(n)))return Qf("Unsupported field value:",e,n),Wf(n,e);if(n instanceof qf)return function(t,i){if(!jf(i.Yc))throw i.ia(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ia(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,i){const r=[];let s=0;for(const o of t){let a=il(o,i.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(n,e)}return function(t,i){if((t=xe(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return rw(i.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=ae.fromDate(t);return{timestampValue:Vr(i.serializer,r)}}if(t instanceof ae){const r=new ae(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Vr(i.serializer,r)}}if(t instanceof el)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rn)return{bytesValue:yf(i.serializer,t._byteString)};if(t instanceof Le){const r=i.databaseId,s=t.firestore._databaseId;if(!s.isEqual(r))throw i.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:za(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.ia(`Unsupported field value: ${Es(t)}`)}(n,e)}function Wf(n,e){const t={};return zd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,(i,r)=>{const s=il(r,e.Xc(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function Kf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof el||n instanceof Rn||n instanceof Le||n instanceof qf)}function Qf(n,e,t){if(!Kf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=Es(t);throw i==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+i)}}function lE(n,e,t){if((e=xe(e))instanceof Za)return e._internalPath;if(typeof e=="string")return Yf(n,e);throw zr("Field path arguments must be of type string or ",n,!1,void 0,t)}const cE=new RegExp("[~\\*/\\[\\]]");function Yf(n,e,t){if(e.search(cE)>=0)throw zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Za(...e.split("."))._internalPath}catch{throw zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zr(n,e,t,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new k(y.INVALID_ARGUMENT,a+n+l)}function uE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Xf{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Is("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hE extends Xf{data(){return super.data()}}function Is(n,e){return typeof e=="string"?Yf(n,e):e instanceof Za?e._internalPath:e._delegate._internalPath}/**
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
 */function dE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rl{}class sl extends rl{}function fE(n,e,...t){let i=[];e instanceof rl&&i.push(e),i=i.concat(t),function(r){const s=r.filter(a=>a instanceof ol).length,o=r.filter(a=>a instanceof bs).length;if(s>1||s>0&&o>0)throw new k(y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)n=r._apply(n);return n}class bs extends sl{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new bs(e,t,i)}_apply(e){const t=this._parse(e);return Jf(e._query,t),new Nt(e.firestore,e.converter,$o(e._query,t))}_parse(e){const t=nl(e.firestore);return function(r,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new k(y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){gu(c,u);const f=[];for(const d of c)f.push(pu(a,r,d));h={arrayValue:{values:f}}}else h=pu(a,r,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||gu(c,u),h=aE(o,s,c,u==="in"||u==="not-in");return oe.create(l,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pE(n,e,t){const i=e,r=Is("where",n);return bs._create(r,i,t)}class ol extends rl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ol(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,r){let s=i;const o=r.getFlattenedFilters();for(const a of o)Jf(s,a),s=$o(s,a)}(e._query,t),new Nt(e.firestore,e.converter,$o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class al extends sl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new al(e,t)}_apply(e){const t=function(i,r,s){if(i.startAt!==null)throw new k(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new k(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new gn(r,s);return function(a,l){if(Fa(a)===null){const u=ds(a);u!==null&&Zf(a,u,l.field)}}(i,o),o}(e._query,this._field,this._direction);return new Nt(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new Mn(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function gE(n,e="asc"){const t=e,i=Is("orderBy",n);return al._create(i,t)}class ll extends sl{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new ll(e,t,i)}_apply(e){return new Nt(e.firestore,e.converter,Ur(e._query,this._limit,this._limitType))}}function mE(n){return eE("limit",n),ll._create("limit",n,"F")}function pu(n,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new k(y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jd(e)&&t.indexOf("/")!==-1)throw new k(y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Q.fromString(t));if(!R.isDocumentKey(i))throw new k(y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Uc(n,new R(i))}if(t instanceof Le)return Uc(n,t._key);throw new k(y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Es(t)}.`)}function gu(n,e){if(!Array.isArray(n)||n.length===0)throw new k(y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jf(n,e){if(e.isInequality()){const i=ds(n),r=e.field;if(i!==null&&!i.isEqual(r))throw new k(y.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${r.toString()}'`);const s=Fa(n);s!==null&&Zf(n,r,s)}const t=function(i,r){for(const s of i)for(const o of s.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Zf(n,e,t){if(!t.isEqual(e))throw new k(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class yE{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(In(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){const i={};return Ln(e.fields,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertGeoPoint(e){return new el(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=qd(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const t=St(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Q.fromString(e);Y(Tf(i));const r=new ci(i.get(1),i.get(3)),s=new R(i.popFirst(5));return r.isEqual(t)||ut(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function ep(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class Gn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tp extends Xf{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Is("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class hr extends tp{data(e={}){return super.data(e)}}class _E{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Gn(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new hr(this._firestore,this._userDataWriter,i.key,i,new Gn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new hr(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Gn(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new hr(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Gn(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:vE(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class np extends yE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function wE(n,e,t){n=It(n,Le);const i=It(n.firestore,Cn),r=ep(n.converter,e,t);return cl(i,[Gf(nl(i),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,je.none())])}function EE(n){return cl(It(n.firestore,Cn),[new $a(n._key,je.none())])}function TE(n,e){const t=It(n.firestore,Cn),i=Go(n),r=ep(n.converter,e);return cl(t,[Gf(nl(n.firestore),"addDoc",i._key,r,n.converter!==null,{}).toMutation(i._key,je.exists(!1))]).then(()=>i)}function IE(n,...e){var t,i,r;n=xe(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fu(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fu(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,u,c;if(n instanceof Le)u=It(n.firestore,Cn),c=Ua(n._key.path),l={next:h=>{e[o]&&e[o](bE(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=It(n,Nt);u=It(h.firestore,Cn),c=h._query;const f=new np(u);l={next:d=>{e[o]&&e[o](new _E(u,f,h,d))},error:e[o+1],complete:e[o+2]},dE(n._query)}return function(h,f,d,m){const E=new K0(m),T=new D0(f,E,d);return h.asyncQueue.enqueueAndForget(async()=>S0(await au(h),T)),()=>{E.yc(),h.asyncQueue.enqueueAndForget(async()=>A0(await au(h),T))}}(zf(u),c,a,l)}function cl(n,e){return function(t,i){const r=new qt;return t.asyncQueue.enqueueAndForget(async()=>F0(await J0(t),i,r)),r.promise}(zf(n),e)}function bE(n,e,t){const i=t.docs.get(e._key),r=new np(n);return new tp(n,r,e._key,i,new Gn(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){On=t})(Dn),vn(new Wt("firestore",(t,{instanceIdentifier:i,options:r})=>{const s=t.getProvider("app").getImmediate(),o=new Cn(new bv(t.getProvider("auth-internal")),new Cv(t.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Tt(Nc,"3.10.1",n),Tt(Nc,"3.10.1","esm2017")})();let ip=eh({apiKey:"AIzaSyDoszBGy7YAv8MFD3zsPKn_2Z6RMqon_DE",authDomain:"notebook-33d62.firebaseapp.com",projectId:"notebook-33d62",storageBucket:"notebook-33d62.appspot.com",messagingSenderId:"544920469131",appId:"1:544920469131:web:d2a519a32170087fff5e8e",measurementId:"G-QX73G45716"}),oo=v_(ip),Yi=iE(ip),ye={loginGoogle:async function(){return(await Cy(oo,new rt)).user},logout:async function(){await ay(oo)},onAuthChanged:function(n){return oy(oo,n)},addDoc:async function(n,e){return await TE(du(Yi,n),e)},setDoc:async function(n,e,t){return await wE(Go(Yi,n,e),t,{merge:!0})},deleteDoc:async function(n,e){return await EE(Go(Yi,n,e))},onSnapshot:function(n,e){return IE(n,t=>{let i=[];t.forEach(r=>{let s=r.data();i.push({...s,id:r.id})}),console.debug("firebase reads: "+t.size),e(i)})},query:function(n,...e){return fE(du(Yi,n),...e)},where:pE,orderBy:gE,limit:mE};var kE=0;function g(n,e,t,i,r,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var u={type:n,props:l,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--kE,__source:r,__self:s};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return U.vnode&&U.vnode(u),u}function SE({children:n}){let e=mu(10),t=mu(10),[i,r]=AE(e,t);return g("span",{class:"relative",children:[g("span",{id:e,onclick:()=>r(!i),children:n[0]}),g("span",{id:t,class:"absolute right-0 top-full"+(i?"":" invisible"),children:n[1]})]})}function mu(n){let e="";for(let t=0;t<n;t++){let i=Math.floor(Math.random()*16);e+=i.toString(16)}return e}function AE(n,e){let[t,i]=_n(!1),r=s=>{t&&!yu(s,n)&&!yu(s,e)&&i(!1)};return Jo(()=>(document.addEventListener("click",r),()=>document.removeEventListener("click",r))),[t,i]}function yu(n,e){let t=document.getElementById(e);return t&&t.contains(n.target)}function He(){return JSON.parse(localStorage.getItem("user"))}function CE({children:n}){let[e,t]=_n(JSON.parse(localStorage.getItem("user")));Jo(i);function i(){ye.onAuthChanged(s=>!s&&t(null))}async function r(){let s=await ye.loginGoogle();localStorage.setItem("user",JSON.stringify(s)),t(s)}return g(Gt,{children:e?g(Gt,{children:[g(xE,{user:e}),n]}):g(RE,{onclick:r})})}function RE({onclick:n}){return g("button",{onclick:n,class:"m-auto my-64 flex space-x-2 rounded border px-4 py-2 text-gray-800 shadow-sm hover:bg-gray-50",children:[g(DE,{}),g("span",{children:"Sign in with Google"})]})}function DE(){return g("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",class:"h-6 w-6",children:g("g",{children:[g("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),g("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),g("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),g("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),g("path",{fill:"none",d:"M0 0h48v48H0z"})]})})}function xE({user:n}){return g("div",{class:"float-right",children:g(SE,{children:[g(NE,{name:n.displayName}),g(LE,{name:n.displayName,email:n.email})]})})}function NE({name:n}){return g("figure",{class:"flex cursor-pointer p-4",children:[g("span",{class:"h-7 w-7 rounded-full bg-slate-600 text-center text-sm font-bold leading-[27px] text-white",children:n[0]}),g(OE,{})]})}function OE(){return g("svg",{class:"ml-1 mt-2 h-3 w-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function LE({name:n,email:e}){async function t(){await ye.logout(),localStorage.removeItem("user")}return g("div",{class:"mx-5 w-64 rounded border bg-white text-gray-800 shadow",children:[g("div",{class:"px-6 py-5 text-left",children:[g("div",{class:"mb-1 truncate text-sm",children:n}),g("div",{class:"truncate text-xs tracking-wider text-gray-500",children:e})]}),g("hr",{class:"border-b border-gray-200"}),g("div",{class:"py-1",children:g(ME,{text:"Log out",onclick:t})})]})}function ME({text:n,onclick:e}){return g("div",{onclick:e,class:"flex cursor-pointer px-6 py-2 text-center text-sm hover:bg-gray-100",children:[g(PE,{})," ",n]})}function PE(){return g("svg",{class:"mr-2 w-5 stroke-1 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})})}function UE(n,e=null){let t=localStorage.getItem("cache/"+n);return t?JSON.parse(t):e}function FE(n,e){localStorage.setItem("cache/"+n,JSON.stringify(e))}function ze(n){let e=n.class,t=n.icon;return delete n.class,delete n.icon,g("button",{...n,class:"inline-block rounded-md border border-e bg-white p-3 text-gray-700 shadow-sm outline-0 hover:bg-gray-50 focus:relative"+(e?" "+e:""),children:t()})}function $E(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})}function VE(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}function BE(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}function zE(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11.25l1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 10-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25L12.75 9"})})}function rp(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}function HE(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}function sp(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}function qE(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"})})}function jE(){return g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"})})}function GE({notes:n,books:e,selectedBookId:t,setSelectedBookId:i,showArchived:r,setShowArchived:s}){function o(){let a=e.find(c=>c.id===t),l=prompt("New book name:",a.title);if(l=l&&l.trim(),!l)return;let u=He();ye.setDoc(`users/${u.uid}/books`,a.id,{title:l})}return g("section",{class:"mb-14 flex space-x-4",children:[g("h1",{class:"mr-8 text-3xl",ondblclick:o,children:WE(e,t)}),t!="trash"&&g(QE,{selectedBookId:t}),t!="trash"&&g(YE,{showArchived:r,setShowArchived:s}),t!="default"&&t!="trash"&&!KE(t,n)&&g(XE,{bookId:t,setSelectedBookId:i})]})}function WE(n,e){return e==="default"?"Default":e==="trash"?"Trash":n.find(i=>i.id===e).title}function KE(n,e){return Boolean(e.find(t=>t.bookId===n&&!t.trashed))}function QE({selectedBookId:n}){function e(){let t=He();ye.addDoc(`users/${t.uid}/notes`,{body:"",bookId:n,pinned:!1,archived:!1,trashed:!1,createdAt:new Date().toISOString()})}return g(ze,{icon:sp,onclick:e})}function YE({showArchived:n,setShowArchived:e}){function t(){e(!n)}return g(ze,{icon:jE,onclick:t,class:n?"border-green-400 text-green-700":""})}function XE({bookId:n,setSelectedBookId:e}){function t(){let i=He();ye.deleteDoc(`users/${i.uid}/books`,n),e("default")}return g(ze,{icon:rp,onclick:t,class:"text-red-600"})}function JE({books:n,selectedId:e,setSelectedBookId:t}){let i={id:"default",title:"Default"},r={id:"trash",title:"Trash"};return g("menu",{class:"border-r p-4",children:[g("li",{class:"mb-6 mt-2 block",children:g(ZE,{})}),g(ao,{book:i,selectedId:e,setSelectedId:t}),g("li",{children:g("hr",{class:"my-2"})}),n&&n.map(s=>g(ao,{book:s,selectedId:e,setSelectedId:t})),g("li",{children:g("hr",{class:"my-2"})}),g(ao,{book:r,selectedId:e,setSelectedId:t})]})}function ao({book:n,selectedId:e,setSelectedId:t}){let i=e===n.id;return g("li",{onclick:()=>t(n.id),class:"flex w-48 cursor-pointer truncate rounded px-4 py-1 "+(i?"bg-gray-100":""),children:n.title})}function ZE(){function n(){let e=prompt("New book name:");if(e=e&&e.trim(),!e)return;let t=He();ye.addDoc(`users/${t.uid}/books`,{title:e})}return g(ze,{icon:sp,onclick:n})}/*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */const{entries:op,setPrototypeOf:_u,isFrozen:eT,getPrototypeOf:tT,getOwnPropertyDescriptor:nT}=Object;let{freeze:Ne,seal:We,create:iT}=Object,{apply:Wo,construct:Ko}=typeof Reflect<"u"&&Reflect;Wo||(Wo=function(e,t,i){return e.apply(t,i)});Ne||(Ne=function(e){return e});We||(We=function(e){return e});Ko||(Ko=function(e,t){return new e(...t)});const rT=Ve(Array.prototype.forEach),vu=Ve(Array.prototype.pop),Bn=Ve(Array.prototype.push),dr=Ve(String.prototype.toLowerCase),lo=Ve(String.prototype.toString),sT=Ve(String.prototype.match),Be=Ve(String.prototype.replace),oT=Ve(String.prototype.indexOf),aT=Ve(String.prototype.trim),Me=Ve(RegExp.prototype.test),zn=lT(TypeError);function Ve(n){return function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return Wo(n,e,i)}}function lT(n){return function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Ko(n,t)}}function V(n,e,t){var i;t=(i=t)!==null&&i!==void 0?i:dr,_u&&_u(n,null);let r=e.length;for(;r--;){let s=e[r];if(typeof s=="string"){const o=t(s);o!==s&&(eT(e)||(e[r]=o),s=o)}n[s]=!0}return n}function cn(n){const e=iT(null);for(const[t,i]of op(n))e[t]=i;return e}function Xi(n,e){for(;n!==null;){const i=nT(n,e);if(i){if(i.get)return Ve(i.get);if(typeof i.value=="function")return Ve(i.value)}n=tT(n)}function t(i){return console.warn("fallback value for",i),null}return t}const wu=Ne(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),co=Ne(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),uo=Ne(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),cT=Ne(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ho=Ne(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),uT=Ne(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Eu=Ne(["#text"]),Tu=Ne(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),fo=Ne(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Iu=Ne(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ji=Ne(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),hT=We(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dT=We(/<%[\w\W]*|[\w\W]*%>/gm),fT=We(/\${[\w\W]*}/gm),pT=We(/^data-[\-\w.\u00B7-\uFFFF]/),gT=We(/^aria-[\-\w]+$/),ap=We(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),mT=We(/^(?:\w+script|data):/i),yT=We(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),lp=We(/^html$/i);var bu=Object.freeze({__proto__:null,MUSTACHE_EXPR:hT,ERB_EXPR:dT,TMPLIT_EXPR:fT,DATA_ATTR:pT,ARIA_ATTR:gT,IS_ALLOWED_URI:ap,IS_SCRIPT_OR_DATA:mT,ATTR_WHITESPACE:yT,DOCTYPE_NAME:lp});const _T=()=>typeof window>"u"?null:window,vT=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(i=t.getAttribute(r));const s="dompurify"+(i?"#"+i:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function cp(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_T();const e=C=>cp(C);if(e.version="3.0.3",e.removed=[],!n||!n.document||n.document.nodeType!==9)return e.isSupported=!1,e;const t=n.document,i=t.currentScript;let{document:r}=n;const{DocumentFragment:s,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:u,NamedNodeMap:c=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:h,DOMParser:f,trustedTypes:d}=n,m=l.prototype,E=Xi(m,"cloneNode"),T=Xi(m,"nextSibling"),b=Xi(m,"childNodes"),N=Xi(m,"parentNode");if(typeof o=="function"){const C=r.createElement("template");C.content&&C.content.ownerDocument&&(r=C.content.ownerDocument)}let $,q="";const{implementation:K,createNodeIterator:X,createDocumentFragment:we,getElementsByTagName:ee}=r,{importNode:Ke}=t;let Ue={};e.isSupported=typeof op=="function"&&typeof N=="function"&&K&&K.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ks,ERB_EXPR:Ss,TMPLIT_EXPR:As,DATA_ATTR:_p,ARIA_ATTR:vp,IS_SCRIPT_OR_DATA:wp,ATTR_WHITESPACE:dl}=bu;let{IS_ALLOWED_URI:fl}=bu,ue=null;const pl=V({},[...wu,...co,...uo,...ho,...Eu]);let he=null;const gl=V({},[...Tu,...fo,...Iu,...Ji]);let ne=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Fn=null,Cs=null,ml=!0,Rs=!0,yl=!1,_l=!0,nn=!1,Ot=!1,Ds=!1,xs=!1,rn=!1,Mi=!1,Pi=!1,vl=!0,wl=!1;const Ep="user-content-";let Ns=!0,$n=!1,sn={},on=null;const El=V({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Tl=null;const Il=V({},["audio","video","img","source","image","track"]);let Os=null;const bl=V({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ui="http://www.w3.org/1998/Math/MathML",Fi="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml";let an=nt,Ls=!1,Ms=null;const Tp=V({},[Ui,Fi,nt],lo);let Lt;const Ip=["application/xhtml+xml","text/html"],bp="text/html";let de,ln=null;const kp=r.createElement("form"),kl=function(p){return p instanceof RegExp||p instanceof Function},Ps=function(p){if(!(ln&&ln===p)){if((!p||typeof p!="object")&&(p={}),p=cn(p),Lt=Ip.indexOf(p.PARSER_MEDIA_TYPE)===-1?Lt=bp:Lt=p.PARSER_MEDIA_TYPE,de=Lt==="application/xhtml+xml"?lo:dr,ue="ALLOWED_TAGS"in p?V({},p.ALLOWED_TAGS,de):pl,he="ALLOWED_ATTR"in p?V({},p.ALLOWED_ATTR,de):gl,Ms="ALLOWED_NAMESPACES"in p?V({},p.ALLOWED_NAMESPACES,lo):Tp,Os="ADD_URI_SAFE_ATTR"in p?V(cn(bl),p.ADD_URI_SAFE_ATTR,de):bl,Tl="ADD_DATA_URI_TAGS"in p?V(cn(Il),p.ADD_DATA_URI_TAGS,de):Il,on="FORBID_CONTENTS"in p?V({},p.FORBID_CONTENTS,de):El,Fn="FORBID_TAGS"in p?V({},p.FORBID_TAGS,de):{},Cs="FORBID_ATTR"in p?V({},p.FORBID_ATTR,de):{},sn="USE_PROFILES"in p?p.USE_PROFILES:!1,ml=p.ALLOW_ARIA_ATTR!==!1,Rs=p.ALLOW_DATA_ATTR!==!1,yl=p.ALLOW_UNKNOWN_PROTOCOLS||!1,_l=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,nn=p.SAFE_FOR_TEMPLATES||!1,Ot=p.WHOLE_DOCUMENT||!1,rn=p.RETURN_DOM||!1,Mi=p.RETURN_DOM_FRAGMENT||!1,Pi=p.RETURN_TRUSTED_TYPE||!1,xs=p.FORCE_BODY||!1,vl=p.SANITIZE_DOM!==!1,wl=p.SANITIZE_NAMED_PROPS||!1,Ns=p.KEEP_CONTENT!==!1,$n=p.IN_PLACE||!1,fl=p.ALLOWED_URI_REGEXP||ap,an=p.NAMESPACE||nt,ne=p.CUSTOM_ELEMENT_HANDLING||{},p.CUSTOM_ELEMENT_HANDLING&&kl(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ne.tagNameCheck=p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),p.CUSTOM_ELEMENT_HANDLING&&kl(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ne.attributeNameCheck=p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),p.CUSTOM_ELEMENT_HANDLING&&typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ne.allowCustomizedBuiltInElements=p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),nn&&(Rs=!1),Mi&&(rn=!0),sn&&(ue=V({},[...Eu]),he=[],sn.html===!0&&(V(ue,wu),V(he,Tu)),sn.svg===!0&&(V(ue,co),V(he,fo),V(he,Ji)),sn.svgFilters===!0&&(V(ue,uo),V(he,fo),V(he,Ji)),sn.mathMl===!0&&(V(ue,ho),V(he,Iu),V(he,Ji))),p.ADD_TAGS&&(ue===pl&&(ue=cn(ue)),V(ue,p.ADD_TAGS,de)),p.ADD_ATTR&&(he===gl&&(he=cn(he)),V(he,p.ADD_ATTR,de)),p.ADD_URI_SAFE_ATTR&&V(Os,p.ADD_URI_SAFE_ATTR,de),p.FORBID_CONTENTS&&(on===El&&(on=cn(on)),V(on,p.FORBID_CONTENTS,de)),Ns&&(ue["#text"]=!0),Ot&&V(ue,["html","head","body"]),ue.table&&(V(ue,["tbody"]),delete Fn.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw zn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw zn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');$=p.TRUSTED_TYPES_POLICY,q=$.createHTML("")}else $===void 0&&($=vT(d,i)),$!==null&&typeof q=="string"&&(q=$.createHTML(""));Ne&&Ne(p),ln=p}},Sl=V({},["mi","mo","mn","ms","mtext"]),Al=V({},["foreignobject","desc","title","annotation-xml"]),Sp=V({},["title","style","font","a","script"]),$i=V({},co);V($i,uo),V($i,cT);const Us=V({},ho);V(Us,uT);const Ap=function(p){let _=N(p);(!_||!_.tagName)&&(_={namespaceURI:an,tagName:"template"});const w=dr(p.tagName),G=dr(_.tagName);return Ms[p.namespaceURI]?p.namespaceURI===Fi?_.namespaceURI===nt?w==="svg":_.namespaceURI===Ui?w==="svg"&&(G==="annotation-xml"||Sl[G]):Boolean($i[w]):p.namespaceURI===Ui?_.namespaceURI===nt?w==="math":_.namespaceURI===Fi?w==="math"&&Al[G]:Boolean(Us[w]):p.namespaceURI===nt?_.namespaceURI===Fi&&!Al[G]||_.namespaceURI===Ui&&!Sl[G]?!1:!Us[w]&&(Sp[w]||!$i[w]):!!(Lt==="application/xhtml+xml"&&Ms[p.namespaceURI]):!1},Mt=function(p){Bn(e.removed,{element:p});try{p.parentNode.removeChild(p)}catch{p.remove()}},Fs=function(p,_){try{Bn(e.removed,{attribute:_.getAttributeNode(p),from:_})}catch{Bn(e.removed,{attribute:null,from:_})}if(_.removeAttribute(p),p==="is"&&!he[p])if(rn||Mi)try{Mt(_)}catch{}else try{_.setAttribute(p,"")}catch{}},Cl=function(p){let _,w;if(xs)p="<remove></remove>"+p;else{const Fe=sT(p,/^[\r\n\t ]+/);w=Fe&&Fe[0]}Lt==="application/xhtml+xml"&&an===nt&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");const G=$?$.createHTML(p):p;if(an===nt)try{_=new f().parseFromString(G,Lt)}catch{}if(!_||!_.documentElement){_=K.createDocument(an,"template",null);try{_.documentElement.innerHTML=Ls?q:G}catch{}}const fe=_.body||_.documentElement;return p&&w&&fe.insertBefore(r.createTextNode(w),fe.childNodes[0]||null),an===nt?ee.call(_,Ot?"html":"body")[0]:Ot?_.documentElement:fe},Rl=function(p){return X.call(p.ownerDocument||p,p,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},Cp=function(p){return p instanceof h&&(typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||!(p.attributes instanceof c)||typeof p.removeAttribute!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function")},Vi=function(p){return typeof a=="object"?p instanceof a:p&&typeof p=="object"&&typeof p.nodeType=="number"&&typeof p.nodeName=="string"},it=function(p,_,w){Ue[p]&&rT(Ue[p],G=>{G.call(e,_,w,ln)})},Dl=function(p){let _;if(it("beforeSanitizeElements",p,null),Cp(p))return Mt(p),!0;const w=de(p.nodeName);if(it("uponSanitizeElement",p,{tagName:w,allowedTags:ue}),p.hasChildNodes()&&!Vi(p.firstElementChild)&&(!Vi(p.content)||!Vi(p.content.firstElementChild))&&Me(/<[/\w]/g,p.innerHTML)&&Me(/<[/\w]/g,p.textContent))return Mt(p),!0;if(!ue[w]||Fn[w]){if(!Fn[w]&&Nl(w)&&(ne.tagNameCheck instanceof RegExp&&Me(ne.tagNameCheck,w)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(w)))return!1;if(Ns&&!on[w]){const G=N(p)||p.parentNode,fe=b(p)||p.childNodes;if(fe&&G){const Fe=fe.length;for(let Z=Fe-1;Z>=0;--Z)G.insertBefore(E(fe[Z],!0),T(p))}}return Mt(p),!0}return p instanceof l&&!Ap(p)||(w==="noscript"||w==="noembed")&&Me(/<\/no(script|embed)/i,p.innerHTML)?(Mt(p),!0):(nn&&p.nodeType===3&&(_=p.textContent,_=Be(_,ks," "),_=Be(_,Ss," "),_=Be(_,As," "),p.textContent!==_&&(Bn(e.removed,{element:p.cloneNode()}),p.textContent=_)),it("afterSanitizeElements",p,null),!1)},xl=function(p,_,w){if(vl&&(_==="id"||_==="name")&&(w in r||w in kp))return!1;if(!(Rs&&!Cs[_]&&Me(_p,_))){if(!(ml&&Me(vp,_))){if(!he[_]||Cs[_]){if(!(Nl(p)&&(ne.tagNameCheck instanceof RegExp&&Me(ne.tagNameCheck,p)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(p))&&(ne.attributeNameCheck instanceof RegExp&&Me(ne.attributeNameCheck,_)||ne.attributeNameCheck instanceof Function&&ne.attributeNameCheck(_))||_==="is"&&ne.allowCustomizedBuiltInElements&&(ne.tagNameCheck instanceof RegExp&&Me(ne.tagNameCheck,w)||ne.tagNameCheck instanceof Function&&ne.tagNameCheck(w))))return!1}else if(!Os[_]){if(!Me(fl,Be(w,dl,""))){if(!((_==="src"||_==="xlink:href"||_==="href")&&p!=="script"&&oT(w,"data:")===0&&Tl[p])){if(!(yl&&!Me(wp,Be(w,dl,"")))){if(w)return!1}}}}}}return!0},Nl=function(p){return p.indexOf("-")>0},Ol=function(p){let _,w,G,fe;it("beforeSanitizeAttributes",p,null);const{attributes:Fe}=p;if(!Fe)return;const Z={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:he};for(fe=Fe.length;fe--;){_=Fe[fe];const{name:Qe,namespaceURI:$s}=_;if(w=Qe==="value"?_.value:aT(_.value),G=de(Qe),Z.attrName=G,Z.attrValue=w,Z.keepAttr=!0,Z.forceKeepAttr=void 0,it("uponSanitizeAttribute",p,Z),w=Z.attrValue,Z.forceKeepAttr||(Fs(Qe,p),!Z.keepAttr))continue;if(!_l&&Me(/\/>/i,w)){Fs(Qe,p);continue}nn&&(w=Be(w,ks," "),w=Be(w,Ss," "),w=Be(w,As," "));const Ll=de(p.nodeName);if(xl(Ll,G,w)){if(wl&&(G==="id"||G==="name")&&(Fs(Qe,p),w=Ep+w),$&&typeof d=="object"&&typeof d.getAttributeType=="function"&&!$s)switch(d.getAttributeType(Ll,G)){case"TrustedHTML":{w=$.createHTML(w);break}case"TrustedScriptURL":{w=$.createScriptURL(w);break}}try{$s?p.setAttributeNS($s,Qe,w):p.setAttribute(Qe,w),vu(e.removed)}catch{}}}it("afterSanitizeAttributes",p,null)},Rp=function C(p){let _;const w=Rl(p);for(it("beforeSanitizeShadowDOM",p,null);_=w.nextNode();)it("uponSanitizeShadowNode",_,null),!Dl(_)&&(_.content instanceof s&&C(_.content),Ol(_));it("afterSanitizeShadowDOM",p,null)};return e.sanitize=function(C){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_,w,G,fe;if(Ls=!C,Ls&&(C="<!-->"),typeof C!="string"&&!Vi(C))if(typeof C.toString=="function"){if(C=C.toString(),typeof C!="string")throw zn("dirty is not a string, aborting")}else throw zn("toString is not a function");if(!e.isSupported)return C;if(Ds||Ps(p),e.removed=[],typeof C=="string"&&($n=!1),$n){if(C.nodeName){const Qe=de(C.nodeName);if(!ue[Qe]||Fn[Qe])throw zn("root node is forbidden and cannot be sanitized in-place")}}else if(C instanceof a)_=Cl("<!---->"),w=_.ownerDocument.importNode(C,!0),w.nodeType===1&&w.nodeName==="BODY"||w.nodeName==="HTML"?_=w:_.appendChild(w);else{if(!rn&&!nn&&!Ot&&C.indexOf("<")===-1)return $&&Pi?$.createHTML(C):C;if(_=Cl(C),!_)return rn?null:Pi?q:""}_&&xs&&Mt(_.firstChild);const Fe=Rl($n?C:_);for(;G=Fe.nextNode();)Dl(G)||(G.content instanceof s&&Rp(G.content),Ol(G));if($n)return C;if(rn){if(Mi)for(fe=we.call(_.ownerDocument);_.firstChild;)fe.appendChild(_.firstChild);else fe=_;return(he.shadowroot||he.shadowrootmod)&&(fe=Ke.call(t,fe,!0)),fe}let Z=Ot?_.outerHTML:_.innerHTML;return Ot&&ue["!doctype"]&&_.ownerDocument&&_.ownerDocument.doctype&&_.ownerDocument.doctype.name&&Me(lp,_.ownerDocument.doctype.name)&&(Z="<!DOCTYPE "+_.ownerDocument.doctype.name+`>
`+Z),nn&&(Z=Be(Z,ks," "),Z=Be(Z,Ss," "),Z=Be(Z,As," ")),$&&Pi?$.createHTML(Z):Z},e.setConfig=function(C){Ps(C),Ds=!0},e.clearConfig=function(){ln=null,Ds=!1},e.isValidAttribute=function(C,p,_){ln||Ps({});const w=de(C),G=de(p);return xl(w,G,_)},e.addHook=function(C,p){typeof p=="function"&&(Ue[C]=Ue[C]||[],Bn(Ue[C],p))},e.removeHook=function(C){if(Ue[C])return vu(Ue[C])},e.removeHooks=function(C){Ue[C]&&(Ue[C]=[])},e.removeAllHooks=function(){Ue={}},e}var wT=cp();function up(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let tn=up();function ET(n){tn=n}const hp=/[&<>"']/,TT=new RegExp(hp.source,"g"),dp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,IT=new RegExp(dp.source,"g"),bT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ku=n=>bT[n];function Te(n,e){if(e){if(hp.test(n))return n.replace(TT,ku)}else if(dp.test(n))return n.replace(IT,ku);return n}const kT=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function fp(n){return n.replace(kT,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const ST=/(^|[^\[])\^/g;function W(n,e){n=typeof n=="string"?n:n.source,e=e||"";const t={replace:(i,r)=>(r=r.source||r,r=r.replace(ST,"$1"),n=n.replace(i,r),t),getRegex:()=>new RegExp(n,e)};return t}const AT=/[^\w:]/g,CT=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Su(n,e,t){if(n){let i;try{i=decodeURIComponent(fp(t)).replace(AT,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!CT.test(t)&&(t=NT(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Zi={},RT=/^[^:]+:\/*[^/]*$/,DT=/^([^:]+:)[\s\S]*$/,xT=/^([^:]+:\/*[^/]*)[\s\S]*$/;function NT(n,e){Zi[" "+n]||(RT.test(n)?Zi[" "+n]=n+"/":Zi[" "+n]=fr(n,"/",!0)),n=Zi[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(DT,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(xT,"$1")+e:n+e}const Hr={exec:function(){}};function Au(n,e){const t=n.replace(/\|/g,(s,o,a)=>{let l=!1,u=o;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),i=t.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function fr(n,e,t){const i=n.length;if(i===0)return"";let r=0;for(;r<i;){const s=n.charAt(i-r-1);if(s===e&&!t)r++;else if(s!==e&&t)r++;else break}return n.slice(0,i-r)}function OT(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let i=0,r=0;for(;r<t;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])i++;else if(n[r]===e[1]&&(i--,i<0))return r;return-1}function LT(n,e){!n||n.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(n.sanitize||n.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(n.highlight||n.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),n.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),n.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),n.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),n.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(n.headerIds||n.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Cu(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function Ru(n,e,t,i){const r=e.href,s=e.title?Te(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:t,href:r,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:t,href:r,title:s,text:Te(o)}}function MT(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class ul{constructor(e){this.options=e||tn}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:fr(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],r=MT(i,t[3]||"");return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(/#$/.test(i)){const r=fr(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const i=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:s,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i,r,s,o,a,l,u,c,h,f,d,m,E=t[1].trim();const T=E.length>1,b={type:"list",raw:"",ordered:T,start:T?+E.slice(0,-1):"",loose:!1,items:[]};E=T?`\\d{1,9}\\${E.slice(-1)}`:`\\${E}`,this.options.pedantic&&(E=T?E:"[*+-]");const N=new RegExp(`^( {0,3}${E})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(t=N.exec(e))||this.rules.block.hr.test(e)));){if(i=t[0],e=e.substring(i.length),c=t[2].split(`
`,1)[0].replace(/^\t+/,q=>" ".repeat(3*q.length)),h=e.split(`
`,1)[0],this.options.pedantic?(o=2,d=c.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,d=c.slice(o),o+=t[1].length),l=!1,!c&&/^ *$/.test(h)&&(i+=h+`
`,e=e.substring(h.length+1),m=!0),!m){const q=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),K=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),X=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),we=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(f=e.split(`
`,1)[0],h=f,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(h)||we.test(h)||q.test(h)||K.test(e)));){if(h.search(/[^ ]/)>=o||!h.trim())d+=`
`+h.slice(o);else{if(l||c.search(/[^ ]/)>=4||X.test(c)||we.test(c)||K.test(c))break;d+=`
`+h}!l&&!h.trim()&&(l=!0),i+=f+`
`,e=e.substring(f.length+1),c=h.slice(o)}}b.loose||(u?b.loose=!0:/\n *\n *$/.test(i)&&(u=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(d),r&&(s=r[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:i,task:!!r,checked:s,loose:!1,text:d}),b.raw+=i}b.items[b.items.length-1].raw=i.trimRight(),b.items[b.items.length-1].text=d.trimRight(),b.raw=b.raw.trimRight();const $=b.items.length;for(a=0;a<$;a++)if(this.lexer.state.top=!1,b.items[a].tokens=this.lexer.blockTokens(b.items[a].text,[]),!b.loose){const q=b.items[a].tokens.filter(X=>X.type==="space"),K=q.length>0&&q.some(X=>/\n.*\n/.test(X.raw));b.loose=K}if(b.loose)for(a=0;a<$;a++)b.items[a].loose=!0;return b}}html(e){const t=this.rules.block.html.exec(e);if(t){const i={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(t[0]):Te(t[0]);i.type="paragraph",i.text=r,i.tokens=this.lexer.inline(r)}return i}}def(e){const t=this.rules.block.def.exec(e);if(t){const i=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(t){const i={type:"table",header:Au(t[1]).map(r=>({text:r})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=t[0];let r=i.align.length,s,o,a,l;for(s=0;s<r;s++)/^ *-+: *$/.test(i.align[s])?i.align[s]="right":/^ *:-+: *$/.test(i.align[s])?i.align[s]="center":/^ *:-+ *$/.test(i.align[s])?i.align[s]="left":i.align[s]=null;for(r=i.rows.length,s=0;s<r;s++)i.rows[s]=Au(i.rows[s],i.header.length).map(u=>({text:u}));for(r=i.header.length,o=0;o<r;o++)i.header[o].tokens=this.lexer.inline(i.header[o].text);for(r=i.rows.length,o=0;o<r;o++)for(l=i.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return i}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Te(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Te(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=fr(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=OT(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),Ru(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r){const s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return Ru(i,r,i[0],this.lexer)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(i===""||this.rules.inline.punctuation.exec(i))){const o=r[0].length-1;let a,l,u=o,c=0;const h=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(r=h.exec(t))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=a.length,r[3]||r[4]){u+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){c+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+c);const f=e.slice(0,o+r.index+(r[0].length-a.length)+l);if(Math.min(o,l)%2){const m=f.slice(1,-1);return{type:"em",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}const d=f.slice(2,-2);return{type:"strong",raw:f,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=Te(i,!0),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let r,s;return i[2]==="@"?(r=Te(this.options.mangle?t(i[1]):i[1]),s="mailto:"+r):(r=Te(i[1]),s=r),{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let r,s;if(i[2]==="@")r=Te(this.options.mangle?t(i[0]):i[0]),s="mailto:"+r;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);r=Te(i[0]),i[1]==="www."?s="http://"+i[0]:s=i[0]}return{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):Te(i[0]):i[0]:r=Te(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:r}}}}const x={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Hr,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};x._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;x._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;x.def=W(x.def).replace("label",x._label).replace("title",x._title).getRegex();x.bullet=/(?:[*+-]|\d{1,9}[.)])/;x.listItemStart=W(/^( *)(bull) */).replace("bull",x.bullet).getRegex();x.list=W(x.list).replace(/bull/g,x.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+x.def.source+")").getRegex();x._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";x._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;x.html=W(x.html,"i").replace("comment",x._comment).replace("tag",x._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();x.paragraph=W(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex();x.blockquote=W(x.blockquote).replace("paragraph",x.paragraph).getRegex();x.normal={...x};x.gfm={...x.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};x.gfm.table=W(x.gfm.table).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex();x.gfm.paragraph=W(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",x.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x._tag).getRegex();x.pedantic={...x.normal,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",x._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Hr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(x.normal._paragraph).replace("hr",x.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",x.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const I={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Hr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Hr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};I._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";I.punctuation=W(I.punctuation).replace(/punctuation/g,I._punctuation).getRegex();I.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;I.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;I._comment=W(x._comment).replace("(?:-->|$)","-->").getRegex();I.emStrong.lDelim=W(I.emStrong.lDelim).replace(/punct/g,I._punctuation).getRegex();I.emStrong.rDelimAst=W(I.emStrong.rDelimAst,"g").replace(/punct/g,I._punctuation).getRegex();I.emStrong.rDelimUnd=W(I.emStrong.rDelimUnd,"g").replace(/punct/g,I._punctuation).getRegex();I._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;I._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;I._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;I.autolink=W(I.autolink).replace("scheme",I._scheme).replace("email",I._email).getRegex();I._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;I.tag=W(I.tag).replace("comment",I._comment).replace("attribute",I._attribute).getRegex();I._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;I._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;I._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;I.link=W(I.link).replace("label",I._label).replace("href",I._href).replace("title",I._title).getRegex();I.reflink=W(I.reflink).replace("label",I._label).replace("ref",x._label).getRegex();I.nolink=W(I.nolink).replace("ref",x._label).getRegex();I.reflinkSearch=W(I.reflinkSearch,"g").replace("reflink",I.reflink).replace("nolink",I.nolink).getRegex();I.normal={...I};I.pedantic={...I.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",I._label).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",I._label).getRegex()};I.gfm={...I.normal,escape:W(I.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};I.gfm.url=W(I.gfm.url,"i").replace("email",I.gfm._extended_email).getRegex();I.breaks={...I.gfm,br:W(I.br).replace("{2,}","*").getRegex(),text:W(I.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function PT(n){return n.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Du(n){let e="",t,i;const r=n.length;for(t=0;t<r;t++)i=n.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class Ct{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||tn,this.options.tokenizer=this.options.tokenizer||new ul,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:x.normal,inline:I.normal};this.options.pedantic?(t.block=x.pedantic,t.inline=I.pedantic):this.options.gfm&&(t.block=x.gfm,this.options.breaks?t.inline=I.breaks:t.inline=I.gfm),this.tokenizer.rules=t}static get rules(){return{block:x,inline:I}}static lex(e,t){return new Ct(t).lex(e)}static lexInline(e,t){return new Ct(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,u)=>l+"    ".repeat(u.length));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let u;this.options.extensions.startBlock.forEach(function(c){u=c.call({lexer:this},l),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=t[t.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i,r,s,o=e,a,l,u;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+Cu("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+Cu("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index+a[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(i=c.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,o,u)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e,Du)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,Du))){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const h=e.slice(1);let f;this.options.extensions.startInline.forEach(function(d){f=d.call({lexer:this},h),typeof f=="number"&&f>=0&&(c=Math.min(c,f))}),c<1/0&&c>=0&&(s=e.substring(0,c+1))}if(i=this.tokenizer.inlineText(s,PT)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(u=i.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class hl{constructor(e){this.options=e||tn}code(e,t,i){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,r);s!=null&&s!==e&&(i=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+Te(r)+'">'+(i?e:Te(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:Te(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,i,r){if(this.options.headerIds){const s=this.options.headerPrefix+r.slug(i);return`<h${t} id="${s}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,i){const r=t?"ol":"ul",s=t&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,i){if(e=Su(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+i+"</a>",r}image(e,t,i){if(e=Su(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r=`<img src="${e}" alt="${i}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class pp{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class gp{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,r=0;if(this.seen.hasOwnProperty(i)){r=this.seen[e];do r++,i=e+"-"+r;while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=r,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}}class Rt{constructor(e){this.options=e||tn,this.options.renderer=this.options.renderer||new hl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new pp,this.slugger=new gp}static parse(e,t){return new Rt(t).parse(e)}static parseInline(e,t){return new Rt(t).parseInline(e)}parse(e,t=!0){let i="",r,s,o,a,l,u,c,h,f,d,m,E,T,b,N,$,q,K,X;const we=e.length;for(r=0;r<we;r++){if(d=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(X=this.options.extensions.renderers[d.type].call({parser:this},d),X!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){i+=X||"";continue}switch(d.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(d.tokens),d.depth,fp(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",c="",a=d.header.length,s=0;s<a;s++)c+=this.renderer.tablecell(this.parseInline(d.header[s].tokens),{header:!0,align:d.align[s]});for(h+=this.renderer.tablerow(c),f="",a=d.rows.length,s=0;s<a;s++){for(u=d.rows[s],c="",l=u.length,o=0;o<l;o++)c+=this.renderer.tablecell(this.parseInline(u[o].tokens),{header:!1,align:d.align[o]});f+=this.renderer.tablerow(c)}i+=this.renderer.table(h,f);continue}case"blockquote":{f=this.parse(d.tokens),i+=this.renderer.blockquote(f);continue}case"list":{for(m=d.ordered,E=d.start,T=d.loose,a=d.items.length,f="",s=0;s<a;s++)N=d.items[s],$=N.checked,q=N.task,b="",N.task&&(K=this.renderer.checkbox($),T?N.tokens.length>0&&N.tokens[0].type==="paragraph"?(N.tokens[0].text=K+" "+N.tokens[0].text,N.tokens[0].tokens&&N.tokens[0].tokens.length>0&&N.tokens[0].tokens[0].type==="text"&&(N.tokens[0].tokens[0].text=K+" "+N.tokens[0].tokens[0].text)):N.tokens.unshift({type:"text",text:K}):b+=K),b+=this.parse(N.tokens,T),f+=this.renderer.listitem(b,q,$);i+=this.renderer.list(f,m,E);continue}case"html":{i+=this.renderer.html(d.text,d.block);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(f=d.tokens?this.parseInline(d.tokens):d.text;r+1<we&&e[r+1].type==="text";)d=e[++r],f+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);i+=t?this.renderer.paragraph(f):f;continue}default:{const ee='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(ee);return}else throw new Error(ee)}}}return i}parseInline(e,t){t=t||this.renderer;let i="",r,s,o;const a=e.length;for(r=0;r<a;r++){if(s=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){i+=o||"";continue}switch(s.type){case"escape":{i+=t.text(s.text);break}case"html":{i+=t.html(s.text);break}case"link":{i+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{i+=t.image(s.href,s.title,s.text);break}case"strong":{i+=t.strong(this.parseInline(s.tokens,t));break}case"em":{i+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{i+=t.codespan(s.text);break}case"br":{i+=t.br();break}case"del":{i+=t.del(this.parseInline(s.tokens,t));break}case"text":{i+=t.text(s.text);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return i}}class qr{constructor(e){this.options=e||tn}preprocess(e){return e}postprocess(e){return e}}Ml(qr,"passThroughHooks",new Set(["preprocess","postprocess"]));function UT(n,e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const r="<p>An error occurred:</p><pre>"+Te(i.message+"",!0)+"</pre>";if(e)return Promise.resolve(r);if(t){t(null,r);return}return r}if(e)return Promise.reject(i);if(t){t(i);return}throw i}}function mp(n,e){return(t,i,r)=>{typeof i=="function"&&(r=i,i=null);const s={...i};i={...D.defaults,...s};const o=UT(i.silent,i.async,r);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(LT(i,r),i.hooks&&(i.hooks.options=i),r){const a=i.highlight;let l;try{i.hooks&&(t=i.hooks.preprocess(t)),l=n(t,i)}catch(h){return o(h)}const u=function(h){let f;if(!h)try{i.walkTokens&&D.walkTokens(l,i.walkTokens),f=e(l,i),i.hooks&&(f=i.hooks.postprocess(f))}catch(d){h=d}return i.highlight=a,h?o(h):r(null,f)};if(!a||a.length<3||(delete i.highlight,!l.length))return u();let c=0;D.walkTokens(l,function(h){h.type==="code"&&(c++,setTimeout(()=>{a(h.text,h.lang,function(f,d){if(f)return u(f);d!=null&&d!==h.text&&(h.text=d,h.escaped=!0),c--,c===0&&u()})},0))}),c===0&&u();return}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(t):t).then(a=>n(a,i)).then(a=>i.walkTokens?Promise.all(D.walkTokens(a,i.walkTokens)).then(()=>a):a).then(a=>e(a,i)).then(a=>i.hooks?i.hooks.postprocess(a):a).catch(o);try{i.hooks&&(t=i.hooks.preprocess(t));const a=n(t,i);i.walkTokens&&D.walkTokens(a,i.walkTokens);let l=e(a,i);return i.hooks&&(l=i.hooks.postprocess(l)),l}catch(a){return o(a)}}}function D(n,e,t){return mp(Ct.lex,Rt.parse)(n,e,t)}D.options=D.setOptions=function(n){return D.defaults={...D.defaults,...n},ET(D.defaults),D};D.getDefaults=up;D.defaults=tn;D.use=function(...n){const e=D.defaults.extensions||{renderers:{},childTokens:{}};n.forEach(t=>{const i={...t};if(i.async=D.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let a=r.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:e.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[r.level]?e[r.level].unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){const r=D.defaults.renderer||new hl;for(const s in t.renderer){const o=r[s];r[s]=(...a)=>{let l=t.renderer[s].apply(r,a);return l===!1&&(l=o.apply(r,a)),l}}i.renderer=r}if(t.tokenizer){const r=D.defaults.tokenizer||new ul;for(const s in t.tokenizer){const o=r[s];r[s]=(...a)=>{let l=t.tokenizer[s].apply(r,a);return l===!1&&(l=o.apply(r,a)),l}}i.tokenizer=r}if(t.hooks){const r=D.defaults.hooks||new qr;for(const s in t.hooks){const o=r[s];qr.passThroughHooks.has(s)?r[s]=a=>{if(D.defaults.async)return Promise.resolve(t.hooks[s].call(r,a)).then(u=>o.call(r,u));const l=t.hooks[s].call(r,a);return o.call(r,l)}:r[s]=(...a)=>{let l=t.hooks[s].apply(r,a);return l===!1&&(l=o.apply(r,a)),l}}i.hooks=r}if(t.walkTokens){const r=D.defaults.walkTokens;i.walkTokens=function(s){let o=[];return o.push(t.walkTokens.call(this,s)),r&&(o=o.concat(r.call(this,s))),o}}D.setOptions(i)})};D.walkTokens=function(n,e){let t=[];for(const i of n)switch(t=t.concat(e.call(D,i)),i.type){case"table":{for(const r of i.header)t=t.concat(D.walkTokens(r.tokens,e));for(const r of i.rows)for(const s of r)t=t.concat(D.walkTokens(s.tokens,e));break}case"list":{t=t.concat(D.walkTokens(i.items,e));break}default:D.defaults.extensions&&D.defaults.extensions.childTokens&&D.defaults.extensions.childTokens[i.type]?D.defaults.extensions.childTokens[i.type].forEach(function(r){t=t.concat(D.walkTokens(i[r],e))}):i.tokens&&(t=t.concat(D.walkTokens(i.tokens,e)))}return t};D.parseInline=mp(Ct.lexInline,Rt.parseInline);D.Parser=Rt;D.parser=Rt.parse;D.Renderer=hl;D.TextRenderer=pp;D.Lexer=Ct;D.lexer=Ct.lex;D.Tokenizer=ul;D.Slugger=gp;D.Hooks=qr;D.parse=D;D.options;D.setOptions;D.use;D.walkTokens;D.parseInline;Rt.parse;Ct.lex;const FT="_markdown_1m468_1",$T={markdown:FT};function yp({text:n}){D.use({mangle:!1,headerIds:!1});let e=D.parse(n),t=wT.sanitize(e);return t=t.replace(/([^>])\n/g,"$1<br>"),g("article",{class:"prose-sm "+$T.markdown,dangerouslySetInnerHTML:{__html:t}})}function VT({id:n,children:e}){let t=go();return g("dialog",{id:n,ref:t,class:"fixed top-0 m-0 h-full w-full bg-transparent p-0",children:[g(BT,{dialog:t}),g("article",{class:"fixed inset-16 block overflow-auto rounded-lg bg-white p-16 lg:inset-32",children:[g(zT,{dialog:t}),g("div",{class:"h-full",children:e})]})]})}function BT({dialog:n}){return g("div",{onclick:()=>n.current.close(),class:"fixed top-0 h-full w-full bg-black bg-opacity-25"})}function zT({dialog:n}){return g("button",{onclick:()=>n.current.close(),class:"absolute right-4 top-4 text-gray-500 transition hover:text-gray-600",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-8 w-8",children:g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})})})}function HT(n){document.getElementById(n).showModal()}const qT="_note_30q78_1",jT={note:qT};function GT({note:n,books:e}){let[t,i]=_n(!1),r=go(),s=go();function o(){i(!0),setTimeout(()=>{r.current.focus(),r.current.selectionStart=r.current.value.length})}function a(){let m=He();ye.setDoc(`users/${m.uid}/notes`,n.id,{body:r.current.value}),i(!1)}function l(){i(!1)}function u(){n.pinned=!n.pinned;let m=He();ye.setDoc(`users/${m.uid}/notes`,n.id,{pinned:n.pinned,archived:n.archived&&!n.pinned,trashed:n.trashed&&!n.pinned})}function c(){if(n.archived=!n.archived,n.archived&&!n.body.trim())return f();let m=He();ye.setDoc(`users/${m.uid}/notes`,n.id,{archived:n.archived,pinned:n.pinned&&!n.archived,trashed:n.trashed&&!n.archived})}function h(){if(n.trashed=!n.trashed,n.trashed&&!n.body.trim())return f();let m=He();ye.setDoc(`users/${m.uid}/notes`,n.id,{trashed:n.trashed,pinned:n.pinned&&!n.trashed,archived:n.archived&&!n.trashed})}function f(){let m=He();ye.deleteDoc(`users/${m.uid}/notes`,n.id)}function d(){let m=He();ye.setDoc(`users/${m.uid}/notes`,n.id,{bookId:s.current.value})}return g("div",{class:"h-full",children:[n.trashed&&g(ze,{icon:rp,onclick:f,class:"float-right ml-6 text-red-600"}),g(ze,{icon:HE,onclick:h,class:"float-right mr-2"+(n.trashed?" border-green-400 text-green-700":"")}),g(ze,{icon:qE,onclick:c,class:"float-right mr-2"+(n.archived?" border-green-400 text-green-700":"")}),g(ze,{icon:zE,onclick:u,class:"float-right mr-2"+(n.pinned?" border-green-400 text-green-700":"")}),g("select",{ref:s,class:"float-right mr-8 h-10 outline-0",onchange:d,children:[g("option",{value:"default",selected:!n.bookId||n.bookId==="default",children:"Default"}),e&&e.map(m=>g("option",{value:m.id,selected:n.bookId===m.id,children:m.title}))]}),t?g("div",{class:"space-x-2",children:[g(ze,{icon:VE,onclick:a,class:"text-green-700"}),g(ze,{icon:BE,onclick:l,class:"text-gray-400"})]}):g(ze,{icon:$E,onclick:o}),g("div",{class:"h-full pt-8 text-gray-800",children:t?g("textarea",{ref:r,class:"h-full w-full border p-1 outline-0",children:n.body}):g("div",{class:"h-full border border-white p-1 xl:w-2/3 2xl:w-1/3",children:g(yp,{text:n.body})})})]})}function WT({notes:n,books:e,selectedBookId:t,showArchived:i}){let r=QT(n,t,i);return g("main",{children:Object.keys(r).map(s=>{let o=r[s];return o.length>0&&g(KT,{title:s,notes:o,books:e})})})}function KT({title:n,notes:e,books:t}){return g("section",{class:"mt-6",children:[g("h2",{class:"border-b text-gray-600",children:n}),g("div",{class:"mt-6",children:e&&e.map(i=>g(XT,{note:i,books:t},i.id))})]})}function QT(n,e,t){let i={Pinned:[],Today:[],Yesterday:[],"This week":[],"Last week":[],"This month":[],"Last month":[],"This year":[],"Last year":[],Older:[]},r=YT();return n.map(s=>{if(!(s.archived&&!t)){if(s.trashed&&e!=="trash")return;if(e==="default"&&s.bookId&&s.bookId!=="default")return;if(e==="trash"&&!s.trashed)return;if(!["default","trash"].includes(e)&&s.bookId!==e)return;s.pinned?i.Pinned.push(s):s.createdAt>r.startOfToday?i.Today.push(s):s.createdAt>r.startOfYesterday?i.Yesterday.push(s):s.createdAt>r.startOfThisWeek?i["This week"].push(s):s.createdAt>r.startOfLastWeek?i["Last week"].push(s):s.createdAt>r.startOfThisMonth?i["This month"].push(s):s.createdAt>r.startOfLastMonth?i["Last month"].push(s):s.createdAt>r.startOfThisYear?i["This year"].push(s):s.createdAt>r.startOfLastYear?i["Last year"].push(s):i.Older.push(s)}}),i}function YT(){return{startOfToday:gt(Oe()),startOfYesterday:gt(Oe().setDate(Oe().getDate()-1)),startOfThisWeek:gt(Oe().setDate(Oe().getDate()-Oe().getDay())),startOfLastWeek:gt(Oe().setDate(Oe().getDate()-Oe().getDay()-7)),startOfThisMonth:gt(Oe().setDate(1)),startOfLastMonth:gt(Oe().getFullYear(),Oe().getMonth()-1,1),startOfThisYear:gt(Oe().getFullYear(),0,1),startOfLastYear:gt(Oe().getFullYear()-1,0,1)}}function Oe(){return new Date}function gt(...n){return new Date(new Date(...n).setHours(0,0,0,0)).toISOString()}function XT({note:n,books:e}){return n.archived=n.archived||!1,n.trashed=n.trashed||!1,g(Gt,{children:[g("div",{onclick:()=>HT(n.id),class:"mb-3 me-4 inline-block h-32 w-48 cursor-pointer overflow-hidden rounded-sm border-t-4 border-gray-500 bg-gradient-to-r from-slate-50 p-1.5 text-gray-600 shadow hover:bg-gray-50 "+(n.archived?"border-dotted opacity-50":"")+" "+jT.note,children:g("div",{class:"w-[15rem] origin-top-left scale-75",children:g(yp,{text:n.body})})}),g(VT,{id:n.id,children:g(GT,{note:n,books:e})})]})}function JT(){return g("div",{class:"select-none",children:g(CE,{children:g(ZT,{})})})}function ZT(){let n=He(),e=xu(`users/${n.uid}/notes`,ye.orderBy("createdAt")),t=xu(`users/${n.uid}/books`,ye.orderBy("title")),[i,r]=_n("default"),[s,o]=_n(!1);return g("div",{class:"flex",children:[g(JE,{books:t,selectedId:i,setSelectedBookId:r}),g("div",{class:"p-12",children:[g(GE,{notes:e,books:t,selectedBookId:i,setSelectedBookId:r,showArchived:s,setShowArchived:o}),g(WT,{notes:e,books:t,selectedBookId:i,showArchived:s})]})]})}function xu(n,...e){let[t,i]=_n(UE(n)||[]);return Jo(()=>ye.onSnapshot(ye.query(n,...e),r=>{FE(n,r||[]),i(r||[])}),[]),t}function eI(){return g(JT,{})}Up(g(eI,{}),document.getElementById("index"));
