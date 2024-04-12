(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({77:"chat-ChatJoinMessage-ChatJoinMessage-stories",127:"screenshots-windows-Screenshots-windows-chrome-stories-mdx",508:"common-OwncastLogo-OwncastLogo-stories",562:"examples-CDNInfrastructureExamples-stories-mdx",1001:"chat-ChatUserBadge-ChatUserBadge-stories",1145:"chat-ChatNameChangeMessage-ChatNameChangeMessage-stories",1149:"screenshots-iphone-Screenshots-iPhone-safari-landscape-stories-mdx",1404:"video-VideoPoster-VideoPoster-stories",1413:"WebComponents-stories-mdx",1425:"modals-FediAuthModal-FediAuthModal-stories",1649:"modals-AuthModal-AuthModal-stories",1973:"chat-ChatUserMessage-ChatUserMessage-stories",2297:"ui-Statusbar-StatusBar-stories",2735:"modals-IndieAuthModal-IndieAuthModal-stories",3036:"screenshots-windows-Screenshots-windows-firefox-stories-mdx",3129:"action-buttons-ActionButtonMenu-ActionButtonMenu-stories",3325:"ProductDefinition-stories-mdx",3473:"modals-NameChangeModal-NameChangeModal-stories",3485:"Tshirt-stories-mdx",3559:"ui-OfflineEmbed-OfflineEmbed-stories",3717:"examples-BasicInfrastructureExamples-stories-mdx",3757:"chat-ChatSystemMessage-ChatSystemMessage-stories",3860:"common-ContentHeader-ContentHeader-stories",3901:"ui-Modal-Modal-stories",4193:"modals-FollowModal-FollowModal-stories",4429:"ui-followers-FollowerCollection-FollowerCollection-stories",4502:"screenshots-android-Screenshots-android-stock-browser-landscape-stories-mdx",4593:"chat-ChatPartMessage-ChatPartMessage-stories",4797:"ui-SocialLinks-SocialLinks-stories",4829:"ui-Header-Header-stories",5137:"chat-ChatSocialMessage-ChatSocialMessage-stories",5194:"screenshots-android-Screenshots-android-stock-browser-portrait-stories-mdx",5229:"colors-OwncastColorPalette-stories-mdx",5349:"Emoji-stories-mdx",5581:"chat-ChatModerationDetailsModal-ChatModerationDetailsModal-stories",5687:"screenshots-ipad-Screenshots-iPad-portrait-safari-stories-mdx",5704:"video-OwncastPlayer-OwncastPlayer-stories",5762:"Typography-stories-mdx",5877:"modals-ChatModal-ChatModal-stories",5987:"colors-UserColors-stories-mdx",6029:"ui-CustomPageContent-CustomPageContent-stories",6165:"ui-OfflineBanner-OfflineBanner-stories",6247:"screenshots-macos-Screenshots-macOS-chrome-stories-mdx",6391:"examples-S3InfrastructureExamples-stories-mdx",6472:"layouts-Main-Main-stories",6541:"chat-ChatContainer-ChatContainer-stories",6677:"config-federation-stories",6763:"SocialPlatformImages-stories-mdx",7075:"Design-stories-mdx",7323:"screenshots-ipad-Screenshots-iPad-landscape-safari-stories-mdx",7383:"colors-ComponentColors-stories-mdx",7638:"ReadwriteChat-stories",7647:"PageLogo-stories",7732:"screenshots-macos-Screenshots-macOS-firefox-stories-mdx",7975:"screenshots-iphone-Screenshots-iPhone-safari-portrait-stories-mdx",8025:"screenshots-macos-Screenshots-macOS-safari-stories-mdx",8125:"chat-ChatActionMessage-ChatActionMessage-stories",8241:"examples-CDN-S3InfrastructureExamples-stories-mdx",8447:"modals-FatalErrorStateModal-FatalErrorStateModal-stories",8548:"Development-stories-mdx",8815:"Images-stories-mdx",8929:"ui-ComponentError-ComponentError-stories",8934:"common-UserDropdown-UserDropdown-stories",8965:"ui-NotifyReminderPopup-NotifyReminderPopup-stories",9127:"action-buttons-ActionButton-ActionButton-stories",9129:"chat-ChatTextField-ChatTextField-stories",9225:"LogosAndGraphics-stories-mdx",9245:"action-buttons-ActionButtonRow-ActionButtonRow-stories",9343:"ReadonlyChat-stories",9403:"modals-BrowserNotifyModal-BrowserNotifyModal-stories",9461:"ui-followers-SingleFollower-SingleFollower-stories",9721:"chat-ChatModerationActionMenu-ChatModerationActionMenu-stories",9885:"ui-Footer-Footer-stories",9961:"chat-ChatModeratorNotification-ChatModeratorNotification-stories"}[chunkId]||chunkId)+"."+{8:"38e45fc3",77:"fcb6c117",118:"55d53516",127:"021a6304",192:"050d308f",284:"a5d29f9d",348:"51fa8619",400:"3c5794d8",404:"c9cf1426",409:"094c8f43",453:"84b76f2d",461:"5851a445",508:"14198e6a",511:"ddfc1df0",562:"02f41a2d",675:"98f0bc20",710:"04e6062f",740:"86a88382",857:"a80a4031",1001:"b366f7ee",1052:"0f1306bd",1106:"027eaeb4",1145:"d54ef50a",1149:"e34f8ae3",1186:"79a30aa1",1342:"cc05960a",1404:"29d2f77c",1413:"d3595574",1425:"bbd10473",1491:"2ade3dc8",1511:"da01e381",1516:"0da5f50f",1649:"c1bbe5a3",1721:"e4f4171f",1918:"c5a1b570",1971:"640b7cf2",1973:"72aab05a",2067:"44e82ed8",2297:"afc7d354",2482:"3d58c697",2735:"f7a67572",2818:"9f67b285",2840:"7f1468d5",2899:"444610b5",3002:"0bcb6dab",3036:"0990ea64",3041:"270b93da",3100:"7a41529a",3129:"463a2660",3143:"66913399",3184:"87df57d8",3191:"f8865fd1",3219:"bc93add3",3257:"39adb84a",3325:"e47a160b",3353:"a0c3ed68",3387:"3928f787",3459:"23391545",3473:"975303b9",3485:"39f25ba7",3498:"6ba7dcef",3559:"6d13460f",3595:"cbb6d1c5",3717:"366ef7d7",3757:"63c594b6",3803:"4326bc93",3827:"eb8347c7",3851:"0edab5a3",3860:"8d8d8b53",3901:"f43620ab",4070:"a1ec8c74",4071:"e1d0e2a2",4084:"7ba5f564",4193:"f4b46b67",4241:"0a705e10",4291:"4872e0f6",4311:"2837dd05",4429:"7dbcbd29",4454:"2865964c",4487:"8608c469",4502:"6fa8cd74",4523:"94c35097",4548:"d7b43cb0",4593:"eb94094b",4614:"d0518f1e",4746:"c93e405b",4797:"70d7dce5",4829:"188728a9",4884:"2babd845",5044:"98205a80",5137:"c0feab92",5153:"03211ce3",5194:"18876a50",5229:"a98eee26",5269:"d6398ce7",5349:"81e09407",5351:"228d2d23",5358:"8b7977c3",5367:"1505f1b8",5417:"0c23d3db",5422:"c8082bf2",5425:"8b53a830",5453:"56a7f948",5489:"2650f6a2",5581:"32759740",5633:"1e2b2f05",5645:"e6968d30",5647:"4bb8fbf2",5687:"914d8283",5696:"5f4fcd8b",5704:"392cf1cb",5722:"4512fef7",5723:"326f2794",5732:"583ff133",5738:"b844eac2",5762:"74b1131b",5792:"720038e5",5877:"30d02d34",5887:"5d2bde39",5987:"723207d7",6029:"7063c02b",6036:"fefd2ac5",6098:"1910d35a",6103:"dd6209c4",6128:"d6f40d32",6165:"c79af09d",6230:"86f14a0c",6247:"985e2571",6271:"e37beb76",6335:"0b39cb23",6391:"debb4a4d",6405:"8df3d04c",6408:"1be81775",6472:"417a2aaf",6492:"e2765194",6541:"0bc8b1ff",6650:"1efd90b5",6677:"a96aaeba",6763:"f217c123",6875:"40a0cd58",6895:"277ae672",6897:"876df2d5",6904:"555191fd",6960:"75496a79",7016:"50481639",7075:"4689ded7",7085:"a6500849",7114:"d97432f8",7142:"09bb5762",7145:"eba3ae44",7161:"d3c3fddf",7183:"b94c1cd6",7192:"f59767db",7194:"b0f77da6",7232:"bf3488b6",7297:"48419901",7323:"c786967b",7338:"e1e5ce05",7345:"ff30381a",7383:"ef257404",7404:"e3728370",7437:"4dd8b093",7444:"853809a2",7503:"c8b8d9a3",7521:"fc9561d7",7638:"9fcce37e",7647:"348b85a3",7652:"b6ba9090",7729:"fd10e47e",7732:"eb28d51e",7748:"459ed1ef",7816:"9afb90d8",7931:"3fc65156",7952:"3c18d555",7975:"5d3ed879",7997:"f3515646",8025:"521ab881",8086:"87769d2f",8109:"9fc3edd5",8125:"e6a8e363",8241:"aa5cd153",8275:"9ceba1c8",8288:"c2f6f217",8295:"1460a342",8447:"ec743dea",8548:"eb1035c6",8567:"65f666cf",8609:"fde1a7df",8644:"4a990e23",8689:"a358c7e7",8784:"bbdc5363",8815:"6a5d6057",8863:"c9a1cc59",8929:"8d3d86ff",8934:"e6173e94",8936:"af7dee33",8964:"dbd26b84",8965:"3942040f",8969:"3668acfa",9005:"d582bfb9",9047:"f3587829",9105:"202cef25",9127:"07acb726",9129:"b8ecf0e9",9144:"bd74164f",9167:"1529dde0",9209:"9e5fb443",9210:"9f758743",9215:"1be707a3",9221:"269030b4",9225:"185f6596",9245:"b942b870",9297:"34bf0637",9323:"a850b932",9343:"1fe3a459",9403:"a6104ae2",9461:"36d6f542",9479:"044a8cf6",9537:"15a27139",9551:"a329f3e1",9552:"73afa527",9670:"55194c9f",9705:"92c791ae",9721:"f602b2ff",9796:"573a7449",9830:"da07fe3c",9885:"4b9b7344",9901:"431dcb05",9961:"9ecabf1c",9965:"c5dbc3b6",9973:"4ff9b528",9980:"ffa4ad9c"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="owncast-web:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","owncast-web:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkowncast_web=self.webpackChunkowncast_web||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();