"use strict";(self.webpackChunksuperheroes_test_task_client=self.webpackChunksuperheroes_test_task_client||[]).push([[251],{5251:function(e,t,o){o.r(t),o.d(t,{Heroes:function(){return Be}});var a=o(4165),r=o(5861),n=o(9439),i=o(2791),s=o(493),c=o(890),l=o(7689),d=o(1087),u=o(4852),p=o(7462),v=o(3366),m=o(8182),g=o(4419),h=o(6934),f=o(1402),x=o(5527),Z=o(5878),b=o(1217);function y(e){return(0,b.Z)("MuiCard",e)}(0,Z.Z)("MuiCard",["root"]);var C=o(184),w=["className","raised"],M=(0,h.ZP)(x.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),k=i.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiCard"}),a=o.className,r=o.raised,n=void 0!==r&&r,i=(0,v.Z)(o,w),s=(0,p.Z)({},o,{raised:n}),c=function(e){var t=e.classes;return(0,g.Z)({root:["root"]},y,t)}(s);return(0,C.jsx)(M,(0,p.Z)({className:(0,m.Z)(c.root,a),elevation:n?8:void 0,ref:t,ownerState:s},i))})),N=o(4942);function R(e){return(0,b.Z)("MuiCardActionArea",e)}var P=(0,Z.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),S=o(2982),j=["children","className","focusVisibleClassName"],z=(0,h.ZP)(S.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,o=e.theme;return t={display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%"},(0,N.Z)(t,"&:hover .".concat(P.focusHighlight),{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,N.Z)(t,"&.".concat(P.focusVisible," .").concat(P.focusHighlight),{opacity:(o.vars||o).palette.action.focusOpacity}),t})),O=(0,h.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),B=i.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiCardActionArea"}),a=o.children,r=o.className,n=o.focusVisibleClassName,i=(0,v.Z)(o,j),s=o,c=function(e){var t=e.classes;return(0,g.Z)({root:["root"],focusHighlight:["focusHighlight"]},R,t)}(s);return(0,C.jsxs)(z,(0,p.Z)({className:(0,m.Z)(c.root,r),focusVisibleClassName:(0,m.Z)(n,c.focusVisible),ref:t,ownerState:s},i,{children:[a,(0,C.jsx)(O,{className:c.focusHighlight,ownerState:s})]}))}));function L(e){return(0,b.Z)("MuiCardMedia",e)}(0,Z.Z)("MuiCardMedia",["root","media","img"]);var I=["children","className","component","image","src","style"],A=(0,h.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState,a=o.isMediaComponent,r=o.isImageComponent;return[t.root,a&&t.media,r&&t.img]}})((function(e){var t=e.ownerState;return(0,p.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),F=["video","audio","picture","iframe","img"],H=["picture","img"],W=i.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiCardMedia"}),a=o.children,r=o.className,n=o.component,i=void 0===n?"div":n,s=o.image,c=o.src,l=o.style,d=(0,v.Z)(o,I),u=-1!==F.indexOf(i),h=!u&&s?(0,p.Z)({backgroundImage:'url("'.concat(s,'")')},l):l,x=(0,p.Z)({},o,{component:i,isMediaComponent:u,isImageComponent:-1!==H.indexOf(i)}),Z=function(e){var t=e.classes,o={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,g.Z)(o,L,t)}(x);return(0,C.jsx)(A,(0,p.Z)({className:(0,m.Z)(Z.root,r),as:i,role:!u&&s?"img":void 0,ref:t,style:h,ownerState:x,src:u?s||c:void 0},d,{children:a}))}));function V(e){return(0,b.Z)("MuiCardContent",e)}(0,Z.Z)("MuiCardContent",["root"]);var T=["className","component"],_=(0,h.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),q=i.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiCardContent"}),a=o.className,r=o.component,n=void 0===r?"div":r,i=(0,v.Z)(o,T),s=(0,p.Z)({},o,{component:n}),c=function(e){var t=e.classes;return(0,g.Z)({root:["root"]},V,t)}(s);return(0,C.jsx)(_,(0,p.Z)({as:n,className:(0,m.Z)(c.root,a),ownerState:s,ref:t},i))})),E=o(8298),G={p:0,flexBasis:"calc((100% - 64px) / 3)",minWidth:"300px"},U={position:"relative",minWidth:"100%",borderRadius:"16px",boxShadow:3},D={height:"500px"},J={height:"100%"},K={position:"absolute",bottom:"16px",left:0,zIndex:10,width:"100%",bgcolor:"rgba(255, 255, 255, 0.8)",boxShadow:3},Q={fontWeight:700,fontSize:"22px",color:"primary.darker",textTransform:"uppercase"},X=function(e){var t=e.id,o=e.nickname,a=e.images,r=(0,l.TH)(),n=a[0];return(0,C.jsx)(u.ZP,{sx:G,children:(0,C.jsx)(k,{sx:U,children:(0,C.jsxs)(B,{sx:D,component:d.rU,to:"/heroes/".concat(t),state:{from:r},children:[(0,C.jsx)(W,{component:"img",image:n||E,alt:o,width:300,sx:J}),(0,C.jsx)(q,{sx:K,children:(0,C.jsx)(c.Z,{sx:Q,children:o})})]})})})},Y={p:0,display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"32px"},$=function(e){var t=e.heroes;return(0,C.jsx)(C.Fragment,{children:t?(0,C.jsx)(s.Z,{sx:Y,children:t.map((function(e){var t=e._id,o=e.nickname,a=e.images;return(0,C.jsx)(X,{id:t,nickname:o,images:a},t)}))}):(0,C.jsx)(c.Z,{children:"Oops! Something went wrong."})})},ee=o(1413);function te(e){return(0,b.Z)("MuiPagination",e)}(0,Z.Z)("MuiPagination",["root","ul","outlined","text"]);var oe=o(3433),ae=o(8959),re=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var ne=o(2065);function ie(e){return(0,b.Z)("MuiPaginationItem",e)}var se=(0,Z.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),ce=o(3967),le=o(4036),de=o(9201),ue=(0,de.Z)((0,C.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),pe=(0,de.Z)((0,C.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ve=(0,de.Z)((0,C.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),me=(0,de.Z)((0,C.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ge=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],he=function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,le.Z)(o.size))],"text"===o.variant&&t["text".concat((0,le.Z)(o.color))],"outlined"===o.variant&&t["outlined".concat((0,le.Z)(o.color))],"rounded"===o.shape&&t.rounded,"page"===o.type&&t.page,("start-ellipsis"===o.type||"end-ellipsis"===o.type)&&t.ellipsis,("previous"===o.type||"next"===o.type)&&t.previousNext,("first"===o.type||"last"===o.type)&&t.firstLast]},fe=(0,h.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:he})((function(e){var t=e.theme,o=e.ownerState;return(0,p.Z)({},t.typography.body2,(0,N.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto"},"&.".concat(se.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),"small"===o.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===o.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),xe=(0,h.ZP)(S.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:he})((function(e){var t,o,a=e.theme,r=e.ownerState;return(0,p.Z)({},a.typography.body2,(o={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary},(0,N.Z)(o,"&.".concat(se.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,N.Z)(o,"&.".concat(se.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,N.Z)(o,"transition",a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short})),(0,N.Z)(o,"&:hover",{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,N.Z)(o,"&.".concat(se.selected),(t={backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selected," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,ne.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}}},(0,N.Z)(t,"&.".concat(se.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.selected," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,ne.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),(0,N.Z)(t,"&.".concat(se.disabled),{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}),t)),o),"small"===r.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===r.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:a.typography.pxToRem(15)},"rounded"===r.shape&&{borderRadius:(a.vars||a).shape.borderRadius})}),(function(e){var t=e.theme,o=e.ownerState;return(0,p.Z)({},"text"===o.variant&&(0,N.Z)({},"&.".concat(se.selected),(0,p.Z)({},"standard"!==o.color&&(0,N.Z)({color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}},"&.".concat(se.focusVisible),{backgroundColor:(t.vars||t).palette[o.color].dark}),(0,N.Z)({},"&.".concat(se.disabled),{color:(t.vars||t).palette.action.disabled}))),"outlined"===o.variant&&(0,N.Z)({border:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(se.selected),(0,p.Z)({},"standard"!==o.color&&(0,N.Z)({color:(t.vars||t).palette[o.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / 0.5)"):(0,ne.Fq)(t.palette[o.color].main,.5)),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.activatedOpacity,")"):(0,ne.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,ne.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(se.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[o.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,ne.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}),(0,N.Z)({},"&.".concat(se.disabled),{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}))))})),Ze=(0,h.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(e,t){return t.icon}})((function(e){var t=e.theme,o=e.ownerState;return(0,p.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===o.size&&{fontSize:t.typography.pxToRem(18)},"large"===o.size&&{fontSize:t.typography.pxToRem(22)})})),be=i.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiPaginationItem"}),a=o.className,r=o.color,n=void 0===r?"standard":r,i=o.component,s=o.components,c=void 0===s?{}:s,l=o.disabled,d=void 0!==l&&l,u=o.page,h=o.selected,x=void 0!==h&&h,Z=o.shape,b=void 0===Z?"circular":Z,y=o.size,w=void 0===y?"medium":y,M=o.slots,k=void 0===M?{}:M,N=o.type,R=void 0===N?"page":N,P=o.variant,S=void 0===P?"text":P,j=(0,v.Z)(o,ge),z=(0,p.Z)({},o,{color:n,disabled:d,selected:x,shape:b,size:w,type:R,variant:S}),O=(0,ce.Z)(),B=function(e){var t=e.classes,o=e.color,a=e.disabled,r=e.selected,n=e.size,i=e.shape,s=e.type,c=e.variant,l={root:["root","size".concat((0,le.Z)(n)),c,i,"standard"!==o&&"".concat(c).concat((0,le.Z)(o)),a&&"disabled",r&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,g.Z)(l,ie,t)}(z),L=("rtl"===O.direction?{previous:k.next||c.next||me,next:k.previous||c.previous||ve,last:k.first||c.first||ue,first:k.last||c.last||pe}:{previous:k.previous||c.previous||ve,next:k.next||c.next||me,first:k.first||c.first||ue,last:k.last||c.last||pe})[R];return"start-ellipsis"===R||"end-ellipsis"===R?(0,C.jsx)(fe,{ref:t,ownerState:z,className:(0,m.Z)(B.root,a),children:"\u2026"}):(0,C.jsxs)(xe,(0,p.Z)({ref:t,ownerState:z,component:i,disabled:d,className:(0,m.Z)(B.root,a)},j,{children:["page"===R&&u,L?(0,C.jsx)(Ze,{as:L,ownerState:z,className:B.icon}):null]}))})),ye=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ce=(0,h.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant]]}})({}),we=(0,h.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(e,t){return t.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Me(e,t,o){return"page"===e?"".concat(o?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var ke=i.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiPagination"}),a=o.boundaryCount,r=void 0===a?1:a,i=o.className,s=o.color,c=void 0===s?"standard":s,l=o.count,d=void 0===l?1:l,u=o.defaultPage,h=void 0===u?1:u,x=o.disabled,Z=void 0!==x&&x,b=o.getItemAriaLabel,y=void 0===b?Me:b,w=o.hideNextButton,M=void 0!==w&&w,k=o.hidePrevButton,N=void 0!==k&&k,R=o.renderItem,P=void 0===R?function(e){return(0,C.jsx)(be,(0,p.Z)({},e))}:R,S=o.shape,j=void 0===S?"circular":S,z=o.showFirstButton,O=void 0!==z&&z,B=o.showLastButton,L=void 0!==B&&B,I=o.siblingCount,A=void 0===I?1:I,F=o.size,H=void 0===F?"medium":F,W=o.variant,V=void 0===W?"text":W,T=(0,v.Z)(o,ye),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,o=void 0===t?1:t,a=e.componentName,r=void 0===a?"usePagination":a,i=e.count,s=void 0===i?1:i,c=e.defaultPage,l=void 0===c?1:c,d=e.disabled,u=void 0!==d&&d,m=e.hideNextButton,g=void 0!==m&&m,h=e.hidePrevButton,f=void 0!==h&&h,x=e.onChange,Z=e.page,b=e.showFirstButton,y=void 0!==b&&b,C=e.showLastButton,w=void 0!==C&&C,M=e.siblingCount,k=void 0===M?1:M,N=(0,v.Z)(e,re),R=(0,ae.Z)({controlled:Z,default:l,name:r,state:"page"}),P=(0,n.Z)(R,2),S=P[0],j=P[1],z=function(e,t){Z||j(t),x&&x(e,t)},O=function(e,t){var o=t-e+1;return Array.from({length:o},(function(t,o){return e+o}))},B=O(1,Math.min(o,s)),L=O(Math.max(s-o+1,o+1),s),I=Math.max(Math.min(S-k,s-o-2*k-1),o+2),A=Math.min(Math.max(S+k,o+2*k+2),L.length>0?L[0]-2:s-1),F=[].concat((0,oe.Z)(y?["first"]:[]),(0,oe.Z)(f?[]:["previous"]),(0,oe.Z)(B),(0,oe.Z)(I>o+2?["start-ellipsis"]:o+1<s-o?[o+1]:[]),(0,oe.Z)(O(I,A)),(0,oe.Z)(A<s-o-1?["end-ellipsis"]:s-o>o?[s-o]:[]),(0,oe.Z)(L),(0,oe.Z)(g?[]:["next"]),(0,oe.Z)(w?["last"]:[])),H=function(e){switch(e){case"first":return 1;case"previous":return S-1;case"next":return S+1;case"last":return s;default:return null}},W=F.map((function(e){return"number"===typeof e?{onClick:function(t){z(t,e)},type:"page",page:e,selected:e===S,disabled:u,"aria-current":e===S?"true":void 0}:{onClick:function(t){z(t,H(e))},type:e,page:H(e),selected:!1,disabled:u||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?S>=s:S<=1)}}));return(0,p.Z)({items:W},N)}((0,p.Z)({},o,{componentName:"Pagination"})),q=_.items,E=(0,p.Z)({},o,{boundaryCount:r,color:c,count:d,defaultPage:h,disabled:Z,getItemAriaLabel:y,hideNextButton:M,hidePrevButton:N,renderItem:P,shape:j,showFirstButton:O,showLastButton:L,siblingCount:A,size:H,variant:V}),G=function(e){var t=e.classes,o={root:["root",e.variant],ul:["ul"]};return(0,g.Z)(o,te,t)}(E);return(0,C.jsx)(Ce,(0,p.Z)({"aria-label":"pagination navigation",className:(0,m.Z)(G.root,i),ownerState:E,ref:t},T,{children:(0,C.jsx)(we,{className:G.ul,ownerState:E,children:q.map((function(e,t){return(0,C.jsx)("li",{children:P((0,p.Z)({},e,{color:c,"aria-label":y(e.type,e.page,e.selected),shape:j,size:H,variant:V}))},t)}))})}))})),Ne=ke,Re={mt:"36px",display:"flex",justifyContent:"center"},Pe={"&.Mui-selected\t":{color:"primary.light",borderColor:"primary.light"},fontWeight:700,color:"neutral.light",borderColor:"neutral.light"},Se=function(e){var t=e.onChange,o=e.page,a=e.count;return(0,C.jsx)(Ne,{page:o,count:a,variant:"outlined",shape:"rounded",size:"large",color:"secondary",onChange:t,sx:Re,renderItem:function(e){return(0,C.jsx)(be,(0,ee.Z)({sx:Pe},e))}})},je=o(3669),ze=o(7287),Oe=o(862),Be=function(){var e=(0,i.useState)([]),t=(0,n.Z)(e,2),o=t[0],s=t[1],c=(0,i.useState)(1),l=(0,n.Z)(c,2),d=l[0],u=l[1],p=(0,i.useState)(0),v=(0,n.Z)(p,2),m=v[0],g=v[1],h=(0,i.useState)(!1),f=(0,n.Z)(h,2),x=f[0],Z=f[1],b=(0,i.useState)(!1),y=(0,n.Z)(b,2),w=y[0],M=y[1],k=Math.ceil(m/5);return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,o,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.next=3,(0,Oe.oc)(d);case 3:if(t=e.sent){e.next=8;break}return M(!0),Z(!1),e.abrupt("return");case 8:o=t.heroes,r=t.totalHits,s(o),g(r),Z(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d]),(0,C.jsxs)(C.Fragment,{children:[w&&(0,C.jsx)(ze.C,{}),x&&(0,C.jsx)(je.a,{}),(0,C.jsx)($,{heroes:o}),k>1&&(0,C.jsx)(Se,{page:d,count:k,onChange:function(e,t){u(t),window.scrollTo({top:0,behavior:"smooth"})}})]})}}}]);
//# sourceMappingURL=251.432083e0.chunk.js.map