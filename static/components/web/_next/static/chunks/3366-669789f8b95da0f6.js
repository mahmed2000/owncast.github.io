(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3366],{83366:function(e,t,a){"use strict";a.r(t),a.d(t,{ChatContainer:function(){return eO}});var s,n,r,l,o,i=a(85893),c=a(26246),d=a(67294),u=a(91951),h=a(15143),m=a.n(h),x=a(94184),g=a.n(x),p=a(94199),_=a(4480),C=a(5152),j=a.n(C),f=a(63108),v=a(41366),b=a(2252);class E extends b.M{match(e){let{highlightString:t}=this.options;if(!t)return null;let a=e.match(t);return a?{index:a.index,length:a[0].length,match:a[0],valid:!0}:null}replaceWith(e,t){let{key:a}=t;return d.createElement("mark",{key:a},e)}asTag(){return"mark"}}var N=a(50547),M=a.n(N),y=a(77278);function T(e){let t=new Date(e);if(Number.isNaN(t))return"";let a=(0,y.Xb)(e);if(a>=1){let e=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"".concat(e," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var w=a(77466),S=a(40343),k=a.n(S);let G=e=>{let{badge:t,userColor:a,title:s}=e;return(0,i.jsx)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},className:k().badge,title:s,children:t})},O=j()(()=>Promise.all([a.e(2074),a.e(7719)]).then(a.t.bind(a,27719,23)),{loadableGenerated:{webpack:()=>[27719]},ssr:!1}),A=e=>{let{userColor:t}=e;return(0,i.jsx)(G,{badge:(0,i.jsx)(O,{}),userColor:t,title:"Authenticated"})},D=j()(()=>Promise.all([a.e(2074),a.e(710)]).then(a.t.bind(a,20710,23)),{loadableGenerated:{webpack:()=>[20710]},ssr:!1}),F=e=>{let{userColor:t}=e;return(0,i.jsx)(G,{badge:(0,i.jsx)(D,{}),userColor:t,title:"Moderator"})},P=j()(()=>Promise.all([a.e(2074),a.e(6133)]).then(a.t.bind(a,56133,23)),{loadableGenerated:{webpack:()=>[56133]},ssr:!1}),B=e=>{let{userColor:t}=e;return(0,i.jsx)(G,{badge:(0,i.jsx)(P,{}),userColor:t,title:"Bot"})},L=j()(()=>Promise.all([a.e(173),a.e(164),a.e(4931),a.e(5402),a.e(8014),a.e(4041),a.e(3698),a.e(3013),a.e(4398),a.e(8091),a.e(505),a.e(4860)]).then(a.bind(a,94860)).then(e=>e.ChatModerationActionMenu),{loadableGenerated:{webpack:()=>[94860]},ssr:!1}),R=e=>{let{children:t,user:a}=e,{displayName:s,createdAt:n}=a,r="".concat(s," first joined ").concat(T(n));return(0,i.jsx)(p.Z,{title:r,placement:"topLeft",mouseEnterDelay:1,children:t})},I=e=>{let{message:t,highlightString:a,showModeratorMenu:s,sentBySelf:n,sameUserAsLast:r,isAuthorModerator:l,isAuthorAuthenticated:o,isAuthorBot:c}=e,{id:d,body:u,user:h,timestamp:m}=t,{id:x,displayName:C,displayColor:j}=h,b=(0,_.sJ)(w.FI),N="var(--theme-color-users-".concat(j,")"),y="Sent ".concat(T(m)),S=[];return l&&S.push((0,i.jsx)(F,{userColor:j},"mod")),o&&S.push((0,i.jsx)(A,{userColor:j},"auth")),c&&S.push((0,i.jsx)(B,{userColor:j},"bot")),(0,i.jsx)("div",{className:g()(M().messagePadding,r&&M().messagePaddingCollapsed,"chat-message_user"),children:(0,i.jsxs)("div",{className:g()(M().root,{[M().ownMessage]:n}),style:{borderColor:N},children:[(0,i.jsx)("div",{className:M().background,style:{color:N}}),!r&&(0,i.jsx)(R,{user:h,children:(0,i.jsxs)("div",{className:M().user,style:{color:N},children:[(0,i.jsx)("span",{className:M().userName,children:C}),(0,i.jsx)("span",{children:S})]})}),(0,i.jsx)(p.Z,{title:y,mouseEnterDelay:1,children:(0,i.jsx)(f.wZ,{className:M().message,content:u,matchers:[new v.xc("url",{validateTLD:!1}),new E("highlight",{highlightString:a})]})}),s&&(0,i.jsx)("div",{className:M().modMenuWrapper,children:(0,i.jsx)(L,{messageID:d,accessToken:b,userID:x,userDisplayName:C})})]})})};var U=a(55241),W=a(77493),V=a(96391),H=a(55006),Z=a.n(H);let z=j()(()=>Promise.all([a.e(7741),a.e(1559)]).then(a.bind(a,51559)).then(e=>e.EmojiPicker),{loadableGenerated:{webpack:()=>[51559]},ssr:!1}),J=j()(()=>Promise.all([a.e(2074),a.e(1194)]).then(a.t.bind(a,73366,23)),{loadableGenerated:{webpack:()=>[73366]},ssr:!1}),Y=j()(()=>Promise.all([a.e(2074),a.e(2348)]).then(a.t.bind(a,92348,23)),{loadableGenerated:{webpack:()=>[92348]},ssr:!1}),X=e=>{let{attributes:t,element:a,children:s}=e,n=(0,V.vt)(),r=(0,V.UE)();return(0,i.jsxs)("span",{...t,contentEditable:!1,children:[(0,i.jsx)("img",{alt:a.alt,src:a.src,title:a.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(n&&r?"0 0 0 3px #B4D5FF":"none")}}),s]})},K=e=>{let{isVoid:t}=e;return e.isVoid=e=>"image"===e.type||t(e),e.isInline=e=>"image"===e.type,e},q=e=>{let t;if(W.xv.isText(e)){let t=e.text;return t}if(0===e.children.length)t=[{text:""}];else{var a;t=null===(a=e.children)||void 0===a?void 0:a.map(e=>q(e)).join("")}switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},Q=e=>{if(W.xv.isText(e))return e.text.length;if("image"===e.type)return 5;let t=0;return e.children.forEach(e=>{t+=Q(e)}),t},$=e=>{let{defaultText:t,enabled:a}=e,[s,n]=(0,d.useState)(!1),[r,l]=(0,d.useState)(null==t?void 0:t.length),o=(0,_.sJ)(w.Gt),c=(0,d.useMemo)(()=>(0,V.BU)(K((0,W.Jh)())),[]),h=()=>{if(!o){console.log("websocketService is not defined");return}let e=q(c);o.send({type:u.C.CHAT,body:e}),W.YR.delete(c,{at:{anchor:W.ML.start(c,[]),focus:W.ML.end(c,[])}}),l(0)},m=(e,t,a)=>({type:"image",alt:e,src:t,name:a,children:[{text:""}]}),x=(e,t)=>{if(!e)return;let a=m(t,e,t);W.YR.insertNodes(c,a),W.ML.normalize(c,{force:!0})},p=e=>{V.F3.focus(c),W.YR.insertText(c,e)},C=(e,t)=>{V.F3.focus(c),x(t,e)},j=e=>{let t=Q(c)+1;if("Enter"===e.key){e.preventDefault(),h();return}if("Backspace"===e.key){l(t-1);return}t+1>300&&e.preventDefault(),l(t+1)},f=e=>{let t=e.clipboardData.getData("text/plain"),{length:a}=t;r+a>300&&e.preventDefault()},v=e=>"image"===e.element.type?(0,i.jsx)(X,{...e}):(0,i.jsx)("p",{...e});return(0,i.jsx)("div",{className:Z().root,children:(0,i.jsxs)("div",{className:g()(Z().inputWrap,r>=300&&Z().maxCharacters),children:[(0,i.jsxs)(V.mH,{editor:c,value:[{type:"paragraph",children:[{text:t||""}]}],children:[(0,i.jsx)(V.CX,{className:"chat-text-input",onKeyDown:j,onPaste:f,disabled:!a,readOnly:!a,renderElement:v,placeholder:a?"Send a message to chat":"Chat is currently unavailable.",style:{width:"100%"},role:"textbox","aria-label":"Chat text input",autoFocus:!0}),(0,i.jsx)(U.Z,{content:(0,i.jsx)(z,{onEmojiSelect:p,onCustomEmojiSelect:C}),trigger:"click",placement:"topRight",onOpenChange:e=>n(e),open:s})]}),a&&(0,i.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,i.jsx)("button",{type:"button",className:Z().emojiButton,title:"Emoji picker button",onClick:()=>n(!s),children:(0,i.jsx)(Y,{})}),(0,i.jsx)("button",{type:"button",className:Z().sendButton,title:"Send message Button",onClick:h,children:(0,i.jsx)(J,{})})]})]})})};var ee=a(30568),et=a.n(ee);function ea(){return(ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var es=function(e){return d.createElement("svg",ea({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg"},e),s||(s=d.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},d.createElement("stop",{offset:0,stopColor:"#2087e2"}),d.createElement("stop",{offset:1,stopColor:"#b63fff"}))),n||(n=d.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),r||(r=d.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),l||(l=d.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),o||(o=d.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))};let en=()=>(0,i.jsxs)("div",{className:et().chatModerationNotification,children:[(0,i.jsx)(es,{className:et().icon}),"You are now a moderator."]});var er=a(86518),el=a.n(er);let eo=e=>{let{message:{body:t,user:{displayName:a}},highlightString:s}=e;return(0,i.jsxs)("div",{className:g()([el().chatSystemMessage,"chat-message_system"]),children:[(0,i.jsx)("div",{className:el().user,children:(0,i.jsx)("span",{className:el().userName,children:a})}),(0,i.jsx)(f.wZ,{className:el().message,content:t,matchers:[new v.xc("url",{validateTLD:!1}),new E("highlight",{highlightString:s})]})]})};var ei=a(57631),ec=a.n(ei);let ed=j()(()=>Promise.all([a.e(2074),a.e(8725)]).then(a.t.bind(a,8725,23)),{loadableGenerated:{webpack:()=>[8725]},ssr:!1}),eu=e=>{let{isAuthorModerator:t,userColor:a,displayName:s}=e;return(0,i.jsxs)("div",{className:ec().root,children:[(0,i.jsxs)("span",{style:{color:"var(--theme-color-users-".concat(a,")")},children:[(0,i.jsx)("span",{style:{padding:"0 10px"},children:(0,i.jsx)(ed,{})}),(0,i.jsx)("span",{style:{fontWeight:"bold"},children:s}),t&&(0,i.jsx)("span",{children:(0,i.jsx)(F,{userColor:a})})]})," ","joined the chat."]})};var eh=a(71577);let em=j()(()=>Promise.all([a.e(2074),a.e(437)]).then(a.t.bind(a,20437,23)),{loadableGenerated:{webpack:()=>[20437]},ssr:!1}),ex=e=>{let{onClick:t}=e;return(0,i.jsx)("div",{className:m().toBottomWrap,children:(0,i.jsx)(eh.Z,{type:"default",style:{color:"currentColor"},icon:(0,i.jsx)(em,{}),onClick:t,children:"Go to last message"})})};var eg=a(37302),ep=a.n(eg);let e_=e=>{let{body:t}=e;return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t},className:ep().chatAction})};var eC=a(71230),ej=a(15746),ef=a(24093),ev=a(4157),eb=a.n(ev);let eE=j()(()=>a.e(9069).then(a.bind(a,49069)),{loadableGenerated:{webpack:()=>[49069]},ssr:!1}),eN=j()(()=>a.e(5584).then(a.bind(a,15584)),{loadableGenerated:{webpack:()=>[15584]},ssr:!1}),eM=j()(()=>a.e(7268).then(a.bind(a,97268)),{loadableGenerated:{webpack:()=>[97268]},ssr:!1}),ey=e=>{let t,{message:a}=e,{body:s,title:n,image:r,link:l,type:o}=a;switch(o.toString()){case"FEDIVERSE_ENGAGEMENT_FOLLOW":t=eE;break;case"FEDIVERSE_ENGAGEMENT_LIKE":t=eN;break;case"FEDIVERSE_ENGAGEMENT_REPOST":t=eM}return(0,i.jsx)("div",{className:g()([eb().follower,"chat-message_social"]),children:(0,i.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(eC.Z,{wrap:!1,children:[(0,i.jsxs)(ej.Z,{span:6,className:eb().avatarColumn,children:[(0,i.jsx)(ef.C,{src:r,alt:"Avatar",className:eb().avatar,size:"large",children:n.charAt(0).toUpperCase()}),(0,i.jsx)(t,{className:eb().icon})]}),(0,i.jsxs)(ej.Z,{children:[(0,i.jsx)(eC.Z,{className:eb().account,children:n}),(0,i.jsx)(eC.Z,{className:eb().body,dangerouslySetInnerHTML:{__html:s}})]})]})})})};var eT=a(183),ew=a.n(eT);let eS=j()(()=>Promise.all([a.e(2074),a.e(1668)]).then(a.t.bind(a,51668,23)),{loadableGenerated:{webpack:()=>[51668]},ssr:!1}),ek=e=>{let{message:t}=e,{oldName:a,user:s}=t,{displayName:n,displayColor:r}=s,l="var(--theme-color-users-".concat(r,")");return(0,i.jsxs)("div",{className:ew().nameChangeView,children:[(0,i.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,i.jsx)(eS,{})}),(0,i.jsxs)("div",{className:ew().nameChangeText,children:[(0,i.jsx)("span",{style:{color:l},children:a}),(0,i.jsx)("span",{className:ew().plain,children:" is now known as "}),(0,i.jsx)("span",{style:{color:l},children:n})]})]})};function eG(e){let{user:{scopes:t}}=e;return!!t&&0!==t.length&&t.includes("MODERATOR")}let eO=e=>{let{messages:t,usernameToHighlight:a,chatUserId:s,isModerator:n,showInput:r,height:l,chatAvailable:o}=e,[h,x]=(0,d.useState)(!1),[g,p]=(0,d.useState)(!1),_=(0,d.useRef)(null),C=(0,d.useRef)(null),j=(0,d.useRef)(null),f=new Set,v=e=>{C.current=setTimeout(()=>{x(e)},1500)};(0,d.useEffect)(()=>()=>{clearTimeout(C.current),clearTimeout(j.current)},[]);let b=e=>(0,i.jsx)(ey,{message:e}),E=e=>{let{user:{displayName:t,displayColor:a}}=e,s=eG(e);return(0,i.jsx)(eu,{displayName:t,userColor:a,isAuthorModerator:s})},N=e=>{let{body:t}=e;return(0,i.jsx)(e_,{body:t})},M=e=>{let t=eG(e);return t?(0,i.jsx)(en,{}):(0,i.jsx)("div",{style:{width:"1px",height:"1px"}})},y=(e,r)=>{var l,o,c,d,h,m;let x=function(e,t,a){if(e.length<2)return!1;let s=e[t];if(!s||!s.user)return!1;let{user:{id:n}}=s,r=e[t-1];if((null==r?void 0:r.type)!==u.C.CHAT||!(null==r?void 0:r.timestamp)||!s.timestamp)return!1;let l=new Date(null==r?void 0:r.timestamp).getTime(),o=new Date(s.timestamp).getTime();return!(o-l>6e4)&&n===(null==r?void 0:r.user.id)&&!(a.size>=5)}(t,e,f);return x?f.add(r.id):f.clear(),(0,i.jsx)(I,{message:r,showModeratorMenu:n,highlightString:a,sentBySelf:(null===(l=r.user)||void 0===l?void 0:l.id)===s,sameUserAsLast:x,isAuthorModerator:null===(o=r.user)||void 0===o?void 0:null===(c=o.scopes)||void 0===c?void 0:c.includes("MODERATOR"),isAuthorBot:null===(d=r.user)||void 0===d?void 0:null===(h=d.scopes)||void 0===h?void 0:h.includes("BOT"),isAuthorAuthenticated:null===(m=r.user)||void 0===m?void 0:m.authenticated},r.id)},T=(e,t)=>{switch(t.type){case u.C.CHAT:return y(e,t);case u.C.NAME_CHANGE:return(0,i.jsx)(ek,{message:t});case u.C.CONNECTED_USER_INFO:return M(t);case u.C.USER_JOINED:return E(t);case u.C.CHAT_ACTION:return N(t);case u.C.SYSTEM:return(0,i.jsx)(eo,{message:t,highlightString:a},t.id);case u.C.FEDIVERSE_ENGAGEMENT_FOLLOW:case u.C.FEDIVERSE_ENGAGEMENT_LIKE:case u.C.FEDIVERSE_ENGAGEMENT_REPOST:return b(t);default:return null}},w=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth";clearTimeout(j.current),clearTimeout(C.current),j.current=setTimeout(()=>{var s;null===(s=e.current)||void 0===s||s.scrollToIndex({index:t.length-1,behavior:a}),p(!0),x(!1)},100)};(0,d.useEffect)(()=>{setTimeout(()=>{w(_,"auto"),v(!1)},500)},[]);let S=(0,d.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.OO,{id:"virtuoso",style:{height:l},className:m().virtuoso,ref:_,data:t,itemContent:(e,t)=>T(e,t),initialTopMostItemIndex:t.length-1,followOutput:()=>(clearTimeout(C.current),g)?(x(!1),w(_,"auto"),"smooth"):(v(!0),!1),alignToBottom:!0,atBottomThreshold:70,atBottomStateChange:e=>{p(e),e?x(!1):v(!0)}}),h&&(0,i.jsx)(ex,{onClick:()=>{w(_,"auto")}})]}),[t,a,s,n,h,g]);return(0,i.jsxs)("div",{id:"chat-container",className:m().chatContainer,children:[S,r&&(0,i.jsx)("div",{className:m().chatTextField,children:(0,i.jsx)($,{enabled:o})})]})};eO.defaultProps={showInput:!0,height:"auto"}},37302:function(e){e.exports={chatAction:"ChatActionMessage_chatAction__x9Xsg"}},15143:function(e){e.exports={toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz",chatTextField:"ChatContainer_chatTextField__OqCGL"}},57631:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa"}},30568:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},183:function(e){e.exports={nameChangeView:"ChatNameChangeMessage_nameChangeView__z4WoO",nameChangeText:"ChatNameChangeMessage_nameChangeText__PTEQP",plain:"ChatNameChangeMessage_plain__heTPn"}},4157:function(e){e.exports={follower:"ChatSocialMessage_follower__TyNGH",avatar:"ChatSocialMessage_avatar__QbcNk",avatarColumn:"ChatSocialMessage_avatarColumn__inCWq",body:"ChatSocialMessage_body__aY2Oa",account:"ChatSocialMessage_account__uGSKr",icon:"ChatSocialMessage_icon__fiCk6"}},86518:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},55006:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",maxCharacters:"ChatTextField_maxCharacters__yGT4s",emojiButton:"ChatTextField_emojiButton__ON_Cu",sendButton:"ChatTextField_sendButton__MOmD4"}},40343:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},50547:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);