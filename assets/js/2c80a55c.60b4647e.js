/*! For license information please see 2c80a55c.60b4647e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[979280],{195455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(824246),o=n(511151);const c={id:"writing-tests-for-actions",title:"Writing Tests For Actions",description:"How to write tests for actions"},i="Unit Testing Custom Actions",a={id:"features/software-templates/writing-tests-for-actions",title:"Writing Tests For Actions",description:"How to write tests for actions",source:"@site/../docs/features/software-templates/writing-tests-for-actions.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/writing-tests-for-actions",permalink:"/docs/features/software-templates/writing-tests-for-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/writing-tests-for-actions.md",tags:[],version:"current",frontMatter:{id:"writing-tests-for-actions",title:"Writing Tests For Actions",description:"How to write tests for actions"},sidebar:"docs",previous:{title:"Writing Custom Actions",permalink:"/docs/features/software-templates/writing-custom-actions"},next:{title:"Writing Custom Field Extensions",permalink:"/docs/features/software-templates/writing-custom-field-extensions"}},s={},u=[{value:"Mocking the Context",id:"mocking-the-context",level:2},{value:"Mocking a Workspace within the Context object",id:"mocking-a-workspace-within-the-context-object",level:3},{value:"Mocking a Config Core Service",id:"mocking-a-config-core-service",level:2},{value:"Mocking a Cache Core Service",id:"mocking-a-cache-core-service",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"unit-testing-custom-actions",children:"Unit Testing Custom Actions"}),"\n",(0,r.jsxs)(t.p,{children:["Unit tests help prevent regressions in custom action functionality. The ",(0,r.jsx)(t.code,{children:"createTemplateAction"})," function that is the core of a custom action can be difficult to mock. There are helper methods that can assist."]}),"\n",(0,r.jsx)(t.h2,{id:"mocking-the-context",children:"Mocking the Context"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"handler"})," property of the ",(0,r.jsx)(t.code,{children:"createTemplateAction"})," input object expects a context. You can create a mock context using the code below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { createMockActionContext } from '@backstage/plugin-scaffolder-node-test-utils';\n\nconst mockContext = createMockActionContext({\n  input: { repoUrl: 'dev.azure.com?repo=repo&owner=owner&organization=org' },\n});\n\nawait action.handler(mockContext);\n\nexpect(mockContext.output).toHaveBeenCalledWith(\n  'remoteUrl',\n  'https://dev.azure.com/organization/project/_git/repo',\n);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"mocking-a-workspace-within-the-context-object",children:"Mocking a Workspace within the Context object"}),"\n",(0,r.jsxs)(t.p,{children:["One thing to be aware about: if you would like to call ",(0,r.jsx)(t.code,{children:"createMockActionContext"})," inside ",(0,r.jsx)(t.code,{children:"it"}),",\nyou have to provide a ",(0,r.jsx)(t.code,{children:"workspacePath"}),". By default, ",(0,r.jsx)(t.code,{children:"createMockActionContext"})," uses\n",(0,r.jsx)(t.code,{children:"import { createMockDirectory } from '@backstage/backend-test-utils';"})," to create it for you. You can use the code below to customize the ",(0,r.jsx)(t.code,{children:"workspacePath"})," without using the default workspace of the ",(0,r.jsx)(t.code,{children:"createMockActionContext"})," function."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"describe('github:autolinks:create', async () => {\n  const workspacePath = createMockDirectory().resolve('workspace');\n  // ...\n\n  it('should call the githubApis for creating alphanumeric autolink reference', async () => {\n    // ...\n    await action.handler(\n      createMockActionContext({\n        input: {\n          repoUrl: 'github.com?repo=repo&owner=owner',\n          keyPrefix: 'TICKET-',\n          urlTemplate: 'https://example.com/TICKET?query=<num>',\n        },\n        workspacePath,\n      }),\n    );\n    //...\n  });\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"mocking-a-config-core-service",children:"Mocking a Config Core Service"}),"\n",(0,r.jsxs)(t.p,{children:["If your custom Action requires the Config Core Service within execution of the ",(0,r.jsx)(t.code,{children:"handler(ctx)"})," such as the custom action below, mocking the context object can be done by building a ",(0,r.jsx)(t.code,{children:"mockContext"})," with the ",(0,r.jsx)(t.code,{children:"ConfigReader"})," function within the ",(0,r.jsx)(t.code,{children:"@backstage/config"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// custom-action.ts\nimport { Config } from '@backstage/config';\n\nexport const customActionRequiringConfigCoreService = (config: Config) => {\n  const fieldRequiringValueFromConfig = config.getString('app.service.url');\n  return createTemplateAction({\n    ...\n    async handler(ctx) {\n      // Some code requiring the config const\n      ctx.logger.info(fieldRequiringValueFromConfig);\n    }\n  })\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// custom-action.test.ts\nimport { ConfigReader } from '@backstage/config';\nimport { customActionRequiringConfigCoreService } from './custom-action.ts';\n...\nconst mockConfig = new ConfigReader({\n  app: {\n    service: {\n      url: 'https://api.service.io/graphql',\n      apiKeyId: '123',\n      apiKeySecret: '123abc',\n    },\n  },\n});\n...\nconst action = customActionRequiringConfigCoreService(mockConfig);\nawait action.handler({\n  ...mockContext\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"mocking-a-cache-core-service",children:"Mocking a Cache Core Service"}),"\n",(0,r.jsxs)(t.p,{children:["Similar to the ",(0,r.jsx)(t.code,{children:"Mocking a Config Core Service"})," section above, if your custom action expects a Cache Core Service Object as part of the function input, you can mock it out with the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { CacheService } from '@backstage/backend-plugin-api';\n\nconst mockCacheServiceMethods = {\n  get: jest.fn(),\n  set: jest.fn(),\n  delete: jest.fn(),\n};\n\nconst mockCacheService = mockCacheServiceMethods as unknown as CacheService;\n\nconst action = customActionRequiringCacheCoreService(mockCacheService);\n...\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,c={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:a.current}}t.Fragment=c,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function k(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var x=v.prototype=new k;x.constructor=v,m(x,y.prototype),x.isPureReactComponent=!0;var C=Array.isArray,w=Object.prototype.hasOwnProperty,b={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var o,c={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(c[o]=t[o]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:a,props:c,_owner:b.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,o,c,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===c?"."+E(s,0):c,C(i)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),A(i,t,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(s=0,c=""===c?".":c+":",C(e))for(var u=0;u<e.length;u++){var l=c+E(a=e[u],u);s+=A(a,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)s+=A(a=a.value,t,o,l=c+E(a,u++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],o=0;return A(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},O={transition:null},P={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:O,ReactCurrentOwner:b};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=b.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)w.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:n,type:e.type,key:c,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(667294);const o={},c=r.createContext(o);function i(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);