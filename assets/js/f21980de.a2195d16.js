/*! For license information please see f21980de.a2195d16.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[385019],{212477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=r(824246),o=r(511151);const s={id:"catalog-client.getentitiesbyrefsrequest.entityrefs",title:"GetEntitiesByRefsRequest.entityRefs",description:"API reference for GetEntitiesByRefsRequest.entityRefs"},u=void 0,i={id:"reference/catalog-client.getentitiesbyrefsrequest.entityrefs",title:"GetEntitiesByRefsRequest.entityRefs",description:"API reference for GetEntitiesByRefsRequest.entityRefs",source:"@site/../docs/reference/catalog-client.getentitiesbyrefsrequest.entityrefs.md",sourceDirName:"reference",slug:"/reference/catalog-client.getentitiesbyrefsrequest.entityrefs",permalink:"/docs/reference/catalog-client.getentitiesbyrefsrequest.entityrefs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.getentitiesbyrefsrequest.entityrefs.md",tags:[],version:"current",frontMatter:{id:"catalog-client.getentitiesbyrefsrequest.entityrefs",title:"GetEntitiesByRefsRequest.entityRefs",description:"API reference for GetEntitiesByRefsRequest.entityRefs"}},c={},a=[{value:"Remarks",id:"remarks",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.getentitiesbyrefsrequest",children:(0,n.jsx)(t.code,{children:"GetEntitiesByRefsRequest"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.getentitiesbyrefsrequest.entityrefs",children:(0,n.jsx)(t.code,{children:"entityRefs"})})]}),"\n",(0,n.jsx)(t.p,{children:"The list of entity refs to fetch."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"entityRefs: string[];\n"})}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"The returned list of entities will be in the same order as the refs, and null will be returned in those positions that were not found."})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var g=v.prototype=new b;g.constructor=v,h(g,_.prototype),g.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,s={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,o)&&!E.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:u,ref:i,props:s,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,s,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===s?"."+C(c,0):s,R(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),t.push(u)),1;if(c=0,s=""===s?".":s+":",R(e))for(var a=0;a<e.length;a++){var f=s+C(i=e[a],a);c+=$(i,t,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(i=e.next()).done;)c+=$(i=i.value,t,o,f=s+C(i,a++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function q(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:q,forEach:function(e,t,r){q(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return q(e,(function(){t++})),t},toArray:function(e){return q(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=u,t.PureComponent=v,t.StrictMode=s,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),s=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=S.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)k.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){c=Array(a);for(var f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:r,type:e.type,key:s,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,r){return P.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,r){return P.current.useReducer(e,t,r)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return P.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>u});var n=r(667294);const o={},s=n.createContext(o);function u(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);