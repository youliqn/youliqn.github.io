(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const m={context:void 0,registry:void 0};function U(e){m.context=e}const St=(e,t)=>e===t,sr=Symbol("solid-proxy"),Et=Symbol("solid-track"),he={equals:St};let se=null,Xe=nt;const j=1,oe=2,Ge={owned:null,cleanups:null,context:null,owner:null},be={};var p=null;let f=null,x=null,I=null,$=null,pe=0;const[xt,Ie]=N(!1);function G(e,t){const n=x,s=p,r=e.length===0,i=t===void 0?s:t,l=r?Ge:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>T(()=>W(l)));p=l,x=null;try{return M(o,!0)}finally{x=n,p=s}}function N(e,t){t=t?Object.assign({},he,t):he;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(f&&f.running&&f.sources.has(n)?r=r(n.tValue):r=r(n.value)),tt(n,r));return[et.bind(n),s]}function Me(e,t,n){const s=ae(e,t,!0,j);Z(s)}function q(e,t,n){const s=ae(e,t,!1,j);Z(s)}function Ye(e,t,n){Xe=kt;const s=ae(e,t,!1,j),r=K&&F(K);r&&(s.suspense=r),(!n||!n.render)&&(s.user=!0),$?$.push(s):Z(s)}function A(e,t,n){n=n?Object.assign({},he,n):he;const s=ae(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Z(s),et.bind(s)}function vt(e,t,n){let s,r,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,i=t||{}):(s=e,r=t,i=n||{});let l=null,o=be,a=null,u=!1,c=!1,h="initialValue"in i,d=typeof s=="function"&&A(s);const y=new Set,[E,w]=(i.storage||N)(i.initialValue),[R,O]=N(void 0),[P,k]=N(void 0,{equals:!1}),[L,_]=N(h?"ready":"unresolved");if(m.context){a=`${m.context.id}${m.context.count++}`;let g;i.ssrLoadFrom==="initial"?o=i.initialValue:m.load&&(g=m.load(a))&&(o=g[0])}function B(g,b,C,V){return l===g&&(l=null,V!==void 0&&(h=!0),(g===o||b===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(V,{value:b})),o=be,f&&g&&u?(f.promises.delete(g),u=!1,M(()=>{f.running=!0,ee(b,C)},!1)):ee(b,C)),b}function ee(g,b){M(()=>{b===void 0&&w(()=>g),_(b!==void 0?"errored":h?"ready":"unresolved"),O(b);for(const C of y.keys())C.decrement();y.clear()},!1)}function te(){const g=K&&F(K),b=E(),C=R();if(C!==void 0&&!l)throw C;return x&&!x.user&&g&&Me(()=>{P(),l&&(g.resolved&&f&&u?f.promises.add(l):y.has(g)||(g.increment(),y.add(g)))}),b}function v(g=!0){if(g!==!1&&c)return;c=!1;const b=d?d():s;if(u=f&&f.running,b==null||b===!1){B(l,T(E));return}f&&l&&f.promises.delete(l);const C=o!==be?o:T(()=>r(b,{value:E(),refetching:g}));return typeof C!="object"||!(C&&"then"in C)?(B(l,C,void 0,b),C):(l=C,c=!0,queueMicrotask(()=>c=!1),M(()=>{_(h?"refreshing":"pending"),k()},!1),C.then(V=>B(C,V,void 0,b),V=>B(C,void 0,it(V),b)))}return Object.defineProperties(te,{state:{get:()=>L()},error:{get:()=>R()},loading:{get(){const g=L();return g==="pending"||g==="refreshing"}},latest:{get(){if(!h)return te();const g=R();if(g&&!l)throw g;return E()}}}),d?Me(()=>v(!1)):v(!1),[te,{refetch:v,mutate:w}]}function ir(e){return M(e,!1)}function T(e){if(x===null)return e();const t=x;x=null;try{return e()}finally{x=t}}function Je(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const a=T(()=>t(o,r,l));return r=o,a}}function or(e){Ye(()=>T(e))}function J(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function At(e,t){se||(se=Symbol("error")),p=ae(void 0,void 0,!0),p.context={...p.context,[se]:[t]},f&&f.running&&f.sources.add(p);try{return e()}catch(n){ue(n)}finally{p=p.owner}}function lr(){return x}function Qe(){return p}function Pt(e,t){const n=p,s=x;p=e,x=null;try{return M(t,!0)}catch(r){ue(r)}finally{p=n,x=s}}function Ze(e){if(f&&f.running)return e(),f.done;const t=x,n=p;return Promise.resolve().then(()=>{x=t,p=n;let s;return K&&(s=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(r=>s.resolve=r)),s.running=!0),M(e,!1),x=p=null,s?s.done:void 0})}function cr(){return[xt,Ze]}function Ct(e){$.push.apply($,e),e.length=0}function Q(e,t){const n=Symbol("context");return{id:n,Provider:Ot(n),defaultValue:e}}function F(e){return p&&p.context&&p.context[e.id]!==void 0?p.context[e.id]:e.defaultValue}function ke(e){const t=A(e),n=A(()=>Pe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let K;function Rt(){return K||(K=Q())}function et(){const e=f&&f.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===j)Z(this);else{const t=I;I=null,M(()=>me(this),!1),I=t}if(x){const t=this.observers?this.observers.length:0;x.sources?(x.sources.push(this),x.sourceSlots.push(t)):(x.sources=[this],x.sourceSlots=[t]),this.observers?(this.observers.push(x),this.observerSlots.push(x.sources.length-1)):(this.observers=[x],this.observerSlots=[x.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function tt(e,t,n){let s=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(f){const r=f.running;(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&M(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=f&&f.running;l&&f.disposed.has(i)||((l?!i.tState:!i.state)&&(i.pure?I.push(i):$.push(i),i.observers&&rt(i)),l?i.tState=j:i.state=j)}if(I.length>1e6)throw I=[],new Error},!1)}return t}function Z(e){if(!e.fn)return;W(e);const t=p,n=x,s=pe;x=p=e,je(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,s),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{M(()=>{f&&(f.running=!0),x=p=e,je(e,e.tValue,s),x=p=null},!1)}),x=n,p=t}function je(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(f&&f.running?(e.tState=j,e.tOwned&&e.tOwned.forEach(W),e.tOwned=void 0):(e.state=j,e.owned&&e.owned.forEach(W),e.owned=null)),e.updatedAt=n+1,ue(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?tt(e,s,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function ae(e,t,n,s=j,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=s),p===null||p!==Ge&&(f&&f.running&&p.pure?p.tOwned?p.tOwned.push(i):p.tOwned=[i]:p.owned?p.owned.push(i):p.owned=[i]),i}function ge(e){const t=f&&f.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===oe)return me(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<pe);){if(t&&f.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let r=e,i=n[s+1];for(;(r=r.owner)&&r!==i;)if(f.disposed.has(r))return}if((t?e.tState:e.state)===j)Z(e);else if((t?e.tState:e.state)===oe){const r=I;I=null,M(()=>me(e,n[0]),!1),I=r}}}function M(e,t){if(I)return e();let n=!1;t||(I=[]),$?n=!0:$=[],pe++;try{const s=e();return Tt(n),s}catch(s){n||($=null),I=null,ue(s)}}function Tt(e){if(I&&(nt(I),I=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const s=f.sources,r=f.disposed;$.push.apply($,f.effects),t=f.resolve;for(const i of $)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,M(()=>{for(const i of r)W(i);for(const i of s){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)W(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Ie(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,$),$=null,Ie(!0);return}}const n=$;$=null,n.length&&M(()=>Xe(n),!1),t&&t()}function nt(e){for(let t=0;t<e.length;t++)ge(e[t])}function kt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ge(s)}if(m.context){if(m.count){m.effects||(m.effects=[]),m.effects.push(...e.slice(0,n));return}else m.effects&&(e=[...m.effects,...e],n+=m.effects.length,delete m.effects);U()}for(t=0;t<n;t++)ge(e[t])}function me(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const i=n?r.tState:r.state;i===j?r!==t&&(!r.updatedAt||r.updatedAt<pe)&&ge(r):i===oe&&me(r,t)}}}function rt(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=oe:s.state=oe,s.pure?I.push(s):$.push(s),s.observers&&rt(s))}}function W(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)W(e.tOwned[t]);delete e.tOwned}st(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)W(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0}function st(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)st(e.owned[n])}function it(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ve(e,t,n){try{for(const s of t)s(e)}catch(s){ue(s,n&&n.owner||null)}}function ue(e,t=p){const n=se&&t&&t.context&&t.context[se],s=it(e);if(!n)throw s;$?$.push({fn(){Ve(s,n,t)},state:j}):Ve(s,n,t)}function Pe(e){if(typeof e=="function"&&!e.length)return Pe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Pe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ot(e,t){return function(s){let r;return q(()=>r=T(()=>(p.context={...p.context,[e]:s.value},ke(()=>s.children))),void 0),r}}const Lt=Symbol("fallback");function Be(e){for(let t=0;t<e.length;t++)e[t]()}function $t(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return J(()=>Be(i)),()=>{let a=e()||[],u,c;return a[Et],T(()=>{let d=a.length,y,E,w,R,O,P,k,L,_;if(d===0)l!==0&&(Be(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[Lt],r[0]=G(B=>(i[0]=B,n.fallback())),l=1);else if(l===0){for(r=new Array(d),c=0;c<d;c++)s[c]=a[c],r[c]=G(h);l=d}else{for(w=new Array(d),R=new Array(d),o&&(O=new Array(d)),P=0,k=Math.min(l,d);P<k&&s[P]===a[P];P++);for(k=l-1,L=d-1;k>=P&&L>=P&&s[k]===a[L];k--,L--)w[L]=r[k],R[L]=i[k],o&&(O[L]=o[k]);for(y=new Map,E=new Array(L+1),c=L;c>=P;c--)_=a[c],u=y.get(_),E[c]=u===void 0?-1:u,y.set(_,c);for(u=P;u<=k;u++)_=s[u],c=y.get(_),c!==void 0&&c!==-1?(w[c]=r[u],R[c]=i[u],o&&(O[c]=o[u]),c=E[c],y.set(_,c)):i[u]();for(c=P;c<d;c++)c in w?(r[c]=w[c],i[c]=R[c],o&&(o[c]=O[c],o[c](c))):r[c]=G(h);r=r.slice(0,l=d),s=a.slice(0)}return r});function h(d){if(i[c]=d,o){const[y,E]=N(c);return o[c]=E,t(a[c],y)}return t(a[c])}}}function S(e,t){return T(()=>e(t||{}))}function Se(e){let t,n;const s=r=>{const i=m.context;if(i){const[o,a]=N();m.count||(m.count=0),m.count++,(n||(n=e())).then(u=>{U(i),m.count--,a(()=>u.default),U()}),t=o}else if(!t){const[o]=vt(()=>(n||(n=e())).then(a=>a.default));t=o}let l;return A(()=>(l=t())&&T(()=>{if(!i)return l(r);const o=m.context;U(i);const a=l(r);return U(o),a}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Nt=0;function _t(){const e=m.context;return e?`${e.id}${e.count++}`:`cl-${Nt++}`}const ot=e=>`Stale read from <${e}>.`;function ar(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A($t(()=>e.each,e.children,t||void 0))}function Oe(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return A(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?T(()=>r(t?s:()=>{if(!T(n))throw ot("Show");return e.when})):r}return e.fallback},void 0,void 0)}function ur(e){let t=!1;const n=(i,l)=>i[0]===l[0]&&(t?i[1]===l[1]:!i[1]==!l[1])&&i[2]===l[2],s=ke(()=>e.children),r=A(()=>{let i=s();Array.isArray(i)||(i=[i]);for(let l=0;l<i.length;l++){const o=i[l].when;if(o)return t=!!i[l].keyed,[l,o,i[l]]}return[-1]},void 0,{equals:n});return A(()=>{const[i,l,o]=r();if(i<0)return e.fallback;const a=o.children;return typeof a=="function"&&a.length>0?T(()=>a(t?l:()=>{if(T(r)[0]!==i)throw ot("Match");return o.when})):a},void 0,void 0)}function fr(e){return e}let X;function lt(){X&&[...X].forEach(e=>e())}function It(e){let t,n;m.context&&m.load&&(n=m.load(m.context.id+m.context.count))&&(t=n[0]);const[s,r]=N(t,void 0);return X||(X=new Set),X.add(r),J(()=>X.delete(r)),A(()=>{let i;if(i=s()){const l=e.fallback;return typeof l=="function"&&l.length?T(()=>l(i,()=>r())):l}return At(()=>e.children,r)},void 0,void 0)}const Mt=Q();function jt(e){let t=0,n,s,r,i,l;const[o,a]=N(!1),u=Rt(),c={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:o,effects:[],resolved:!1},h=Qe();if(m.context&&m.load){const E=m.context.id+m.context.count;let w=m.load(E);if(w&&(r=w[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[R,O]=N(void 0,{equals:!1});i=R,r.then(P=>{if(P||m.done)return P&&(l=P),O();m.gather(E),U(s),O(),U()})}}const d=F(Mt);d&&(n=d.register(c.inFallback));let y;return J(()=>y&&y()),S(u.Provider,{value:c,get children(){return A(()=>{if(l)throw l;if(s=m.context,i)return i(),i=void 0;s&&r==="$$f"&&U();const E=A(()=>e.children);return A(w=>{const R=c.inFallback(),{showContent:O=!0,showFallback:P=!0}=n?n():{};if((!R||r&&r!=="$$f")&&O)return c.resolved=!0,y&&y(),y=s=r=void 0,Ct(c.effects),E();if(P)return y?w:G(k=>(y=k,s&&(U({id:s.id+"f",count:0}),s=void 0),e.fallback),h)})})}})}const dr=void 0,Vt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Bt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Vt]),Ut=new Set(["innerHTML","textContent","innerText","children"]),qt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ft=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Dt(e,t){const n=Ft[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ht=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Wt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Kt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,a=t[r-1].nextSibling,u=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const c=i<s?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<r;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!u){u=new Map;let h=o;for(;h<i;)u.set(n[h],h++)}const c=u.get(t[l]);if(c!=null)if(o<c&&c<i){let h=l,d=1,y;for(;++h<r&&h<i&&!((y=u.get(t[h]))==null||y!==c+d);)d++;if(d>c-o){const E=t[l];for(;o<c;)e.insertBefore(n[o++],E)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Ue="_$DX_DELEGATE";function zt(e,t,n,s={}){let r;return G(i=>{r=i,t===document?e():Re(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function Xt(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>T(()=>document.importNode(s||(s=r()),!0)):()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function Le(e,t=window.document){const n=t[Ue]||(t[Ue]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,tn))}}function Ce(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Gt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Yt(e,t){t==null?e.removeAttribute("class"):e.className=t}function ct(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function Jt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(qe(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(qe(e,o,!0),n[o]=a)}return n}function Qt(e,t,n){if(!t)return n?Ce(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function le(e,t={},n,s){const r={};return s||q(()=>r.children=Y(e,t.children,r.children)),q(()=>t.ref&&t.ref(e)),q(()=>Zt(e,t,n,!0,r,!0)),r}function hr(e,t,n){return T(()=>e(t,n))}function Re(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);q(r=>Y(e,t(),r,n),s)}function Zt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Fe(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||Y(e,t.children);continue}const o=t[l];r[l]=Fe(e,l,o,r[l],n,i)}}function en(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function qe(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Fe(e,t,n,s,r,i){let l,o,a,u,c;if(t==="style")return Qt(e,n,s);if(t==="classList")return Jt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s),n&&e.addEventListener(h,n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),d=Ht.has(h);if(!d&&s){const y=Array.isArray(s)?s[0]:s;e.removeEventListener(h,y)}(d||n)&&(ct(e,h,n,d),d&&Le([h]))}else if(t.slice(0,5)==="attr:")Ce(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=Ut.has(t))||!r&&((u=Dt(t,e.tagName))||(o=Bt.has(t)))||(l=e.nodeName.includes("-")))c&&(t=t.slice(5),o=!0),t==="class"||t==="className"?Yt(e,n):l&&!o&&!a?e[en(t)]=n:e[u||t]=n;else{const h=r&&t.indexOf(":")>-1&&Wt[t.split(":")[0]];h?Gt(e,h,t,n):Ce(e,qt[t]||t,n)}return n}function tn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,s,r){if(m.context){!n&&(n=[...e.childNodes]);let o=[];for(let a=0;a<n.length;a++){const u=n[a];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():o.push(u)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(m.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=z(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(m.context)return n;n=z(e,n,s)}else{if(i==="function")return q(()=>{let o=t();for(;typeof o=="function";)o=o();n=Y(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(Te(o,t,n,r))return q(()=>n=Y(e,o,n,s,!0)),()=>n;if(m.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=z(e,n,s),l)return n}else a?n.length===0?De(e,o,s):Kt(e,n,o):(n&&z(e),De(e,o));n=o}else if(t.nodeType){if(m.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=z(e,n,s,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Te(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=Te(e,o,a)||r;else if(u==="function")if(s){for(;typeof o=="function";)o=o();r=Te(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return r}function De(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function z(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}function nn(e){return m.context?void 0:e.children}const at=!1,rn="modulepreload",sn=function(e){return"/"+e},He={},fe=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=sn(i),i in He)return;He[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!s)for(let c=r.length-1;c>=0;c--){const h=r[c];if(h.href===i&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":rn,l||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),l)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};function on(e,t){e&&t&&zt(e,t===document?t.body:t)}const $e=Q(),ln=["title","meta"],We=e=>e.tag+(e.name?`.${e.name}"`:""),cn=e=>{if(!m.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,i=>i.parentNode.removeChild(i))}const t=new Map;function n(r){if(r.ref)return r.ref;let i=document.querySelector(`[data-sm="${r.id}"]`);return i?(i.tagName.toLowerCase()!==r.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(r.tag)),i.removeAttribute("data-sm")):i=document.createElement(r.tag),i}const s={addClientTag:r=>{let i=We(r);if(ln.indexOf(r.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),a=o.length;o=[...o,r],t.set(i,o);{let u=n(r);r.ref=u,le(u,r.props);let c=null;for(var l=a-1;l>=0;l--)if(o[l]!=null){c=o[l];break}u.parentNode!=document.head&&document.head.appendChild(u),c&&c.ref&&document.head.removeChild(c.ref)}return a}{let o=n(r);r.ref=o,le(o,r.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(r,i)=>{const l=We(r);if(r.ref){const o=t.get(l);if(o){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let a=i-1;a>=0;a--)o[a]!=null&&document.head.appendChild(o[a].ref)}o[i]=null,t.set(l,o)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return S($e.Provider,{value:s,get children(){return e.children}})},Ne=(e,t,n)=>{const s=_t();if(!F($e))throw new Error("<MetaProvider /> should be in the tree");return an({tag:e,props:t,setting:n,id:s,get name(){return t.name||t.property}}),null};function an(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=F($e);q(()=>{{let r=t(e);J(()=>n(e,r))}})}const un=e=>Ne("title",e,{escape:!0,close:!0}),Ee=e=>Ne("meta",e),xe=e=>Ne("link",e);function fn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function dn([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function hn(e){try{return document.querySelector(e)}catch{return null}}function gn(e,t){const n=hn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function mn(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=dn(N(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!r&&t(o),o));return n&&J(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function pn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function yn(){return mn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),gn(window.location.hash.slice(1),n)},e=>fn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function wn(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:a=>{a&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const bn=/^(?:[a-z0-9]+:)?\/\//i,Sn=/^\/+|(\/)\/+$/g;function ie(e,t=!1){const n=e.replace(Sn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(bn.test(t))return;const s=ie(e),r=n&&ie(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+ie(t,!i)}function En(e,t){if(e==null)throw new Error(t);return e}function ut(e,t){return ie(e).replace(/\/*(\*.*)?$/g,"")+ie(t)}function xn(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function vn(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),l=i.length;return o=>{const a=o.split("/").filter(Boolean),u=a.length-l;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:l?"":"/",params:{}},h=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const y=i[d],E=a[d],w=y[0]===":",R=w?y.slice(1):y;if(w&&ve(E,h(R)))c.params[R]=E;else if(w||!ve(E,y))return null;c.path+=`/${E}`}if(r){const d=u?a.slice(-u).join("/"):"";if(ve(d,h(r)))c.params[r]=d;else return null}return c}}function ve(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function An(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function ft(e){const t=new Map,n=Qe();return new Proxy({},{get(s,r){return t.has(r)||Pt(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Pn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([r,i])=>{i==null||i===""?n.delete(r):n.set(r,String(i))});const s=n.toString();return s?`?${s}`:""}function dt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return dt(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const Cn=100,ht=Q(),ye=Q(),we=()=>En(F(ht),"Make sure your app is wrapped in a <Router />");let ce;const _e=()=>ce||F(ye)||we().base,gt=()=>we().navigatorFactory(),Rn=()=>we().location,gr=()=>_e().params,mr=()=>{const e=Rn(),t=gt(),n=(s,r)=>{const i=T(()=>e.pathname+Pn(e.search,s)+e.hash);t(i,{scroll:!1,resolve:!1,...r})};return[e.query,n]};function Tn(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>S(s,{}):()=>{const{element:a}=e;return a===void 0&&n?S(n,{}):a},preload:e.component?s.preload:e.preload,data:r};return mt(e.path).reduce((a,u)=>{for(const c of dt(u)){const h=ut(t,c),d=l?h:h.split("/*",1)[0];a.push({...o,originalPath:c,pattern:d,matcher:vn(d,!l,e.matchFilters)})}return a},[])}function kn(e,t=0){return{routes:e,score:An(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function mt(e){return Array.isArray(e)?e:[e]}function pt(e,t="",n,s=[],r=[]){const i=mt(e);for(let l=0,o=i.length;l<o;l++){const a=i[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=Tn(a,t,n);for(const c of u){s.push(c);const h=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!h)pt(a.children,c.pattern,n,s,r);else{const d=kn([...s],r.length);r.push(d)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function On(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Ln(e,t){const n=new URL("http://sar"),s=A(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),r=A(()=>s().pathname),i=A(()=>s().search,!0),l=A(()=>s().hash),o=A(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:ft(Je(i,()=>xn(s())))}}function $n(e,t="",n,s){const{signal:[r,i],utils:l={}}=pn(e),o=l.parsePath||(v=>v),a=l.renderPath||(v=>v),u=l.beforeLeave||wn(),c=de("",t),h=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[d,y]=N(!1),E=async v=>{y(!0);try{await Ze(v)}finally{y(!1)}},[w,R]=N(r().value),[O,P]=N(r().state),k=Ln(w,O),L=[],_={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(v){return de(c,v)}};if(n)try{ce=_,_.data=n({data:void 0,params:{},location:k,navigate:ee(_)})}finally{ce=void 0}function B(v,g,b){T(()=>{if(typeof g=="number"){g&&(l.go?u.confirm(g,b)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:C,resolve:V,scroll:D,state:ne}={replace:!1,resolve:!0,scroll:!0,...b},H=V?v.resolvePath(g):de("",g);if(H===void 0)throw new Error(`Path '${g}' is not a routable path`);if(L.length>=Cn)throw new Error("Too many redirects");const re=w();if((H!==re||ne!==O())&&!at){if(u.confirm(H,b)){const bt=L.push({value:re,replace:C,scroll:D,state:O()});E(()=>{R(H),P(ne),lt()}).then(()=>{L.length===bt&&te({value:H,state:ne})})}}})}function ee(v){return v=v||F(ye)||_,(g,b)=>B(v,g,b)}function te(v){const g=L[0];g&&((v.value!==g.value||v.state!==g.state)&&i({...v,replace:g.replace,scroll:g.scroll}),L.length=0)}q(()=>{const{value:v,state:g}=r();T(()=>{v!==w()&&E(()=>{R(v),P(g)})})});{let v=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const b=g.composedPath().find(re=>re instanceof Node&&re.nodeName.toUpperCase()==="A");if(!b||!b.hasAttribute("link"))return;const C=b.href;if(b.target||!C&&!b.hasAttribute("state"))return;const V=(b.getAttribute("rel")||"").split(/\s+/);if(b.hasAttribute("download")||V&&V.includes("external"))return;const D=new URL(C);if(D.origin!==window.location.origin||c&&D.pathname&&!D.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const ne=o(D.pathname+D.search+D.hash),H=b.getAttribute("state");g.preventDefault(),B(_,ne,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:H&&JSON.parse(H)})};Le(["click"]),document.addEventListener("click",v),J(()=>document.removeEventListener("click",v))}return{base:_,out:h,location:k,isRouting:d,renderPath:a,parsePath:o,navigatorFactory:ee,beforeLeave:u}}function Nn(e,t,n,s,r){const{base:i,location:l,navigatorFactory:o}=e,{pattern:a,element:u,preload:c,data:h}=s().route,d=A(()=>s().path);c&&c();const y={parent:t,pattern:a,get child(){return n()},path:d,params:r,data:t.data,outlet:u,resolvePath(E){return de(i.path(),E,d())}};if(h)try{ce=y,y.data=h({data:t.data,params:r,location:l,navigate:o(y)})}finally{ce=void 0}return y}const _n=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||yn(),o=$n(l,s,r);return S(ht.Provider,{value:o,get children(){return e.children}})},In=e=>{const t=we(),n=_e(),s=ke(()=>e.children),r=A(()=>pt(s(),ut(n.pattern,e.base||""),Mn)),i=A(()=>On(r(),t.location.pathname)),l=ft(()=>{const c=i(),h={};for(let d=0;d<c.length;d++)Object.assign(h,c[d].params);return h});t.out&&t.out.matches.push(i().map(({route:c,path:h,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:h,params:d})));const o=[];let a;const u=A(Je(i,(c,h,d)=>{let y=h&&c.length===h.length;const E=[];for(let w=0,R=c.length;w<R;w++){const O=h&&h[w],P=c[w];d&&O&&P.route.key===O.route.key?E[w]=d[w]:(y=!1,o[w]&&o[w](),G(k=>{o[w]=k,E[w]=Nn(t,E[w-1]||n,()=>u()[w+1],()=>i()[w],l)}))}return o.splice(c.length).forEach(w=>w()),d&&y?d:(a=E[0],E)}));return S(Oe,{get when(){return u()&&a},keyed:!0,children:c=>S(ye.Provider,{value:c,get children(){return c.outlet()}})})},Mn=()=>{const e=_e();return S(Oe,{get when(){return e.child},keyed:!0,children:t=>S(ye.Provider,{value:t,get children(){return t.outlet()}})})},jn=[{component:Se(()=>fe(()=>import("./_...404_-d1c1bd12.js"),[])),path:"/*404"},{component:Se(()=>fe(()=>import("./index-04701af0.js"),["assets/index-04701af0.js","assets/index-9b0cab61.js","assets/index-84227e3a.css"])),path:"/"},{component:Se(()=>fe(()=>import("./_session_-cacfc5fc.js"),["assets/_session_-cacfc5fc.js","assets/index-9b0cab61.js","assets/index-84227e3a.css"])),path:"/session/:session"}],Vn=()=>jn,yt=Q({}),Bn=In,pr=gt,Un="$FETCH",qn=Xt('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre>');function Fn(e){return S(It,{fallback:(t,n)=>S(Oe,{get when(){return!e.fallback},get fallback(){return A(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return S(Dn,{error:t})}}),get children(){return e.children}})}function Dn(e){return Ye(()=>console.error(e.error)),(()=>{const t=qn(),n=t.firstChild,s=n.firstChild,r=s.nextSibling,i=r.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),s.style.setProperty("font-weight","bold"),Re(s,()=>e.error.message),ct(r,"click",lt,!0),r.style.setProperty("color","rgba(252, 165, 165)"),r.style.setProperty("background-color","rgb(153, 27, 27)"),r.style.setProperty("border-radius","5px"),r.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),Re(i,()=>e.error.stack),t})()}Le(["click"]);const Hn=!1,Wn=!1,Kn=!1;function zn(){return F(yt),[Wn,Kn,S(nn,{get children(){return at}}),Hn]}function Xn(e){return le(document.documentElement,e,!1,!0),e.children}function Gn(e){return le(document.head,e,!1,!0),e.children}function Yn(e){return le(document.body,e,!1,!0),e.children}function Jn(e){return S(un,{get children(){return["ChatGPT",A(()=>e.children?" | "+e.children:"")]}})}function Qn(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:l}=e;let o,a;const u=async(h=!0)=>{await a};async function c(){if("serviceWorker"in navigator){const{Workbox:h}=await fe(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);o=new h("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),o.addEventListener("installed",d=>{d.isUpdate||s?.()}),o.register({immediate:t}).then(d=>{i?i("/sw.js",d):r?.(d)}).catch(d=>{l?.(d)})}}return a=c(),u}function Zn(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:i,onRegisterError:l}=e,[o,a]=N(!1),[u,c]=N(!1),h=Qn({immediate:t,onOfflineReady(){c(!0),s?.()},onNeedRefresh(){a(!0),n?.()},onRegistered:r,onRegisteredSW:i,onRegisterError:l});return{needRefresh:[o,a],offlineReady:[u,c],updateServiceWorker:h}}const Ke={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}};function er(){return Zn({immediate:!0}),S(Xn,{lang:"zh-cn",get children(){return[S(Gn,{get children(){return[S(Jn,{}),S(Ee,{charset:"utf-8"}),S(xe,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),S(Ee,{name:"viewport",content:"width=device-width, initial-scale=1"}),S(xe,{rel:"apple-touch-icon",href:"/apple-touch-icon.png",sizes:"192x192"}),A(()=>A(()=>!!Ke?.webManifest?.href)()?S(xe,{rel:"manifest",get href(){return Ke.webManifest.href}}):""),S(Ee,{name:"theme-color",content:"#f6f8fa"})]}}),S(Yn,{get children(){return[S(jt,{get children(){return S(Fn,{get children(){return S(Bn,{get children(){return S(Vn,{})}})}})}}),S(zn,{})]}})]}})}const ze=Object.values(Object.assign({}))[0],tr=ze?ze.default:void 0,nr=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:Un,fetch};function t(n){return S(_n,n)}return S(yt.Provider,{value:e,get children(){return S(cn,{get children(){return S(t,{get base(){return"/"},data:tr,get children(){return S(er,{})}})}})}})};var wt=(e=>(e.GLOBALSETTINGS="gpt-global-settings",e.THEME="gpt-theme",e.PREFIXSESSION="gpt-session-",e))(wt||{});const Ae=localStorage.getItem(wt.THEME)||"",rr=window.matchMedia("(prefers-color-scheme: dark)").matches;(!Ae||Ae==="auto"?rr:Ae==="dark")&&document.documentElement.classList.add("dark");Array.prototype.at||(Array.prototype.at=function(e){if(e=e<0?e+this.length:e,e>=0&&e<this.length)return this[e]});on(()=>S(nr,{}),document);export{sr as $,mr as A,dr as D,ar as F,wt as L,fr as M,Jn as P,Oe as S,fe as _,gr as a,Et as b,S as c,ir as d,N as e,Qe as f,lr as g,or as h,G as i,Ye as j,A as k,Re as l,ct as m,Ce as n,J as o,q as p,Yt as q,Le as r,m as s,Xt as t,pr as u,hr as v,ur as w,Jt as x,T as y,cr as z};
