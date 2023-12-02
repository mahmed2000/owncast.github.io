/*! For license information please see chat-ChatJoinMessage-ChatJoinMessage-stories.81db3564.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[7086],{"./components/chat/ChatJoinMessage/ChatJoinMessage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Moderator:()=>Moderator,Regular:()=>Regular,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Regular$parameters,_Regular$parameters2,_Moderator$parameters,_Moderator$parameters2,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_ChatJoinMessage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/chat/ChatJoinMessage/ChatJoinMessage.tsx"),_stories_assets_mocks_chatmessage_action_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/assets/mocks/chatmessage-action.png");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_tmp_tmp_CUFbKHieil_owncast_web_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Chat/Messages/Chat Join",component:_ChatJoinMessage__WEBPACK_IMPORTED_MODULE_1__.C,argTypes:{userColor:{options:["0","1","2","3","4","5","6","7"],control:{type:"select"}}},parameters:{design:{type:"image",url:_stories_assets_mocks_chatmessage_action_png__WEBPACK_IMPORTED_MODULE_2__.Z},docs:{description:{component:"This is the message design an action takes place, such as a join or a name change."}}}};var Regular={args:{displayName:"RandomChatter",isAuthorModerator:!1,userColor:3}},Moderator={args:{displayName:"RandomChatter",isAuthorModerator:!0,userColor:2}};Regular.parameters=_objectSpread(_objectSpread({},Regular.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Regular$parameters=Regular.parameters)||void 0===_Regular$parameters?void 0:_Regular$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    displayName: 'RandomChatter',\n    isAuthorModerator: false,\n    userColor: 3\n  }\n}"},null===(_Regular$parameters2=Regular.parameters)||void 0===_Regular$parameters2||null===(_Regular$parameters2=_Regular$parameters2.docs)||void 0===_Regular$parameters2?void 0:_Regular$parameters2.source)})}),Moderator.parameters=_objectSpread(_objectSpread({},Moderator.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Moderator$parameters=Moderator.parameters)||void 0===_Moderator$parameters?void 0:_Moderator$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    displayName: 'RandomChatter',\n    isAuthorModerator: true,\n    userColor: 2\n  }\n}"},null===(_Moderator$parameters2=Moderator.parameters)||void 0===_Moderator$parameters2||null===(_Moderator$parameters2=_Moderator$parameters2.docs)||void 0===_Moderator$parameters2?void 0:_Moderator$parameters2.source)})});const __namedExportsOrder=["Regular","Moderator"]},"./stories/assets/mocks/chatmessage-action.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/chatmessage-action.830f1bbb.png",height:53,width:450,blurDataURL:"static/media/chatmessage-action.830f1bbb.png"}},"./components/chat/ChatJoinMessage/ChatJoinMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>ChatJoinMessage});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),ModerationBadge=__webpack_require__("./components/chat/ChatUserBadge/ModerationBadge.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ChatJoinMessage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatJoinMessage/ChatJoinMessage.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ChatJoinMessage_module.Z,options);const ChatJoinMessage_ChatJoinMessage_module=ChatJoinMessage_module.Z&&ChatJoinMessage_module.Z.locals?ChatJoinMessage_module.Z.locals:void 0;var __jsx=react.createElement,UsergroupAddOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(9051),__webpack_require__.e(2074),__webpack_require__.e(8713)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/UsergroupAddOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/UsergroupAddOutlined.js"]}}}),ChatJoinMessage=function ChatJoinMessage(_ref){var isAuthorModerator=_ref.isAuthorModerator,userColor=_ref.userColor,displayName=_ref.displayName,color="var(--theme-color-users-".concat(userColor,")");return __jsx("div",{className:ChatJoinMessage_ChatJoinMessage_module.root},__jsx("span",{style:{color}},__jsx("span",{className:ChatJoinMessage_ChatJoinMessage_module.icon},__jsx(UsergroupAddOutlined,null)),__jsx("span",{className:ChatJoinMessage_ChatJoinMessage_module.user},displayName),isAuthorModerator&&__jsx("span",{className:ChatJoinMessage_ChatJoinMessage_module.moderatorBadge},__jsx(ModerationBadge.a,{userColor}))),"joined the chat.")};ChatJoinMessage.displayName="ChatJoinMessage";try{ChatJoinMessage.displayName="ChatJoinMessage",ChatJoinMessage.__docgenInfo={description:"",displayName:"ChatJoinMessage",props:{isAuthorModerator:{defaultValue:null,description:"",name:"isAuthorModerator",required:!0,type:{name:"boolean"}},userColor:{defaultValue:null,description:"",name:"userColor",required:!0,type:{name:"number"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatJoinMessage/ChatJoinMessage.tsx#ChatJoinMessage"]={docgenInfo:ChatJoinMessage.__docgenInfo,name:"ChatJoinMessage",path:"components/chat/ChatJoinMessage/ChatJoinMessage.tsx#ChatJoinMessage"})}catch(__react_docgen_typescript_loader_error){}},"./components/chat/ChatUserBadge/ChatUserBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>ChatUserBadge});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ChatUserBadge_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatUserBadge/ChatUserBadge.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ChatUserBadge_module.Z,options);const ChatUserBadge_ChatUserBadge_module=ChatUserBadge_module.Z&&ChatUserBadge_module.Z.locals?ChatUserBadge_module.Z.locals:void 0;var __jsx=react.createElement,ChatUserBadge=function ChatUserBadge(_ref){var badge=_ref.badge,userColor=_ref.userColor,title=_ref.title,color="var(--theme-color-users-".concat(userColor,")");return __jsx("span",{style:{color},className:classnames_default()([ChatUserBadge_ChatUserBadge_module.badge,"chat-user-badge"]),title},badge)};ChatUserBadge.displayName="ChatUserBadge";try{ChatUserBadge.displayName="ChatUserBadge",ChatUserBadge.__docgenInfo={description:"",displayName:"ChatUserBadge",props:{badge:{defaultValue:null,description:"",name:"badge",required:!0,type:{name:"ReactNode"}},userColor:{defaultValue:null,description:"",name:"userColor",required:!0,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatUserBadge/ChatUserBadge.tsx#ChatUserBadge"]={docgenInfo:ChatUserBadge.__docgenInfo,name:"ChatUserBadge",path:"components/chat/ChatUserBadge/ChatUserBadge.tsx#ChatUserBadge"})}catch(__react_docgen_typescript_loader_error){}},"./components/chat/ChatUserBadge/ModerationBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>ModerationBadge});var next_dynamic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dynamic.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_ChatUserBadge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/chat/ChatUserBadge/ChatUserBadge.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,StarFilled=next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()((function(){return Promise.all([__webpack_require__.e(9051),__webpack_require__.e(2074),__webpack_require__.e(710)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/StarFilled.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/StarFilled.js"]}}}),ModerationBadge=function ModerationBadge(_ref){var userColor=_ref.userColor;return __jsx(_ChatUserBadge__WEBPACK_IMPORTED_MODULE_2__.o,{badge:__jsx(StarFilled,null),userColor,title:"Moderator"})};ModerationBadge.displayName="ModerationBadge";try{ModerationBadge.displayName="ModerationBadge",ModerationBadge.__docgenInfo={description:"",displayName:"ModerationBadge",props:{userColor:{defaultValue:null,description:"",name:"userColor",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatUserBadge/ModerationBadge.tsx#ModerationBadge"]={docgenInfo:ModerationBadge.__docgenInfo,name:"ModerationBadge",path:"components/chat/ChatUserBadge/ModerationBadge.tsx#ModerationBadge"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatJoinMessage/ChatJoinMessage.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".lu0YK_HGo2lGn27fcsIQ{display:inline-flex;padding:10px 0;color:var(--theme-color-components-chat-text);font-weight:400;font-size:var(--chat-message-text-size)}.lu0YK_HGo2lGn27fcsIQ .RUuIj6_9jQYhMeoXWLG_,.lu0YK_HGo2lGn27fcsIQ .Lx0BFnmRjX9vHdEqlgks{margin-right:5px}.DLIc4v2heFiITI4lWqtl{padding:0 var(--chat-notification-icon-padding) 0 16px}","",{version:3,sources:["webpack://./components/chat/ChatJoinMessage/ChatJoinMessage.module.scss"],names:[],mappings:"AAAA,sBACE,mBAAA,CACA,cAAA,CACA,6CAAA,CACA,eAAA,CACA,uCAAA,CAEA,wFAEE,gBAAA,CAIJ,sBACE,sDAAA",sourcesContent:[".root {\n  display: inline-flex;\n  padding: 10px 0;\n  color: var(--theme-color-components-chat-text);\n  font-weight: 400;\n  font-size: var(--chat-message-text-size);\n\n  .moderatorBadge,\n  .user {\n    margin-right: 5px;\n  }\n}\n\n.icon {\n  padding: 0 var(--chat-notification-icon-padding) 0 16px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"lu0YK_HGo2lGn27fcsIQ",moderatorBadge:"RUuIj6_9jQYhMeoXWLG_",user:"Lx0BFnmRjX9vHdEqlgks",icon:"DLIc4v2heFiITI4lWqtl"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatUserBadge/ChatUserBadge.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".SCtg8LRcxtjPI1lYSBHR{color:#fff;background-color:var(--color-owncast-palette-0);height:16px;width:16px;border-radius:calc(.4*var(--theme-rounded-corners));text-align:center;padding:2px;display:inline-flex;justify-content:center;align-items:center;overflow:hidden;font-size:.65rem}","",{version:3,sources:["webpack://./components/chat/ChatUserBadge/ChatUserBadge.module.scss"],names:[],mappings:"AAAA,sBACE,UAAA,CACA,+CAAA,CACA,WAAA,CACA,UAAA,CACA,mDAAA,CACA,iBAAA,CACA,WAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,gBAAA",sourcesContent:[".badge {\n  color: white;\n  background-color: var(--color-owncast-palette-0);\n  height: 16px;\n  width: 16px;\n  border-radius: calc(0.4 * var(--theme-rounded-corners));\n  text-align: center;\n  padding: 2px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  font-size: 0.65rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={badge:"SCtg8LRcxtjPI1lYSBHR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{noSSR:function(){return noSSR},default:function(){return dynamic}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablesharedruntime=_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js")),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>_react.default.createElement(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")}}]);