(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[23],{1038:function(e,a,t){"use strict";var n=t(14),c=t(10),r=t(0),i=t.n(r),s=t(104),l=t(2),o=t(200),m=t(797),u=t(799),d=t(157),p=t(408),f=t(136),g=t(158),b=t(784),v=t(256),h=t.n(v),E=t(938),N=t.n(E),O=t(937),j=t.n(O),y=Object(o.a)((function(e){return{root:{},content:{display:"flex",alignItems:"center"},paper:{flexGrow:1,padding:e.spacing(.5,2)},input:{width:"100%"},divider:{width:1,height:24},fileInput:{display:"none"}}}));a.a=function(e){var a=e.className,t=Object(c.a)(e,["className"]),o=y(),v=Object(r.useRef)(null),E=Object(r.useState)(""),O=Object(n.a)(E,2),k=O[0],w=O[1],x=Object(s.d)((function(e){return e.session})),C=function(){v.current.click()};return i.a.createElement(m.a,Object.assign({},t,{className:Object(l.a)(o.root,a)}),i.a.createElement(u.a,{className:o.content},i.a.createElement(d.a,{className:o.paper,elevation:1},i.a.createElement(p.a,{className:o.input,disableUnderline:!0,onChange:function(e){e.persist(),w(e.target.value)},placeholder:"What's on your mind, ".concat(x.user.first_name)})),i.a.createElement(f.a,{title:"Send"},i.a.createElement(g.a,{color:k.length>0?"primary":"default"},i.a.createElement(h.a,null))),i.a.createElement(b.a,{className:o.divider}),i.a.createElement(f.a,{title:"Attach image"},i.a.createElement(g.a,{edge:"end",onClick:C},i.a.createElement(N.a,null))),i.a.createElement(f.a,{title:"Attach file"},i.a.createElement(g.a,{edge:"end",onClick:C},i.a.createElement(j.a,null))),i.a.createElement("input",{className:o.fileInput,ref:v,type:"file"})))}},1039:function(e,a,t){"use strict";var n=t(19);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t(0)),r=(0,n(t(22)).default)(c.default.createElement(c.default.Fragment,null,c.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),c.default.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"AccessTime");a.default=r},1046:function(e,a,t){"use strict";var n=t(10),c=t(0),r=t.n(c),i=t(20),s=t(2),l=t(5),o=t.n(l),m=t(200),u=t(797),d=t(798),p=t(252),f=t(40),g=t(405),b=t(799),v=t(1426),h=t(959),E=t(784),N=t(1039),O=t.n(N),j=t(14),y=t(7),k=t(136),w=t(158),x=t(404),C=t(268),S=t.n(C),I=t(269),V=t.n(I),A=t(265),B=t.n(A),P=Object(m.a)((function(e){return{root:{display:"flex",alignItems:"center"},likeButton:{},likedButton:{color:y.a.red[600]},shareButton:{marginLeft:"auto"},shareIcon:{marginRight:e.spacing(1)}}}));var z=function(e){var a=e.post,t=e.className,i=Object(n.a)(e,["post","className"]),l=P(),o=Object(c.useState)(a.liked),m=Object(j.a)(o,2),u=m[0],d=m[1],p=Object(c.useState)(a.likes),g=Object(j.a)(p,2),b=g[0],v=g[1];return r.a.createElement("div",Object.assign({},i,{className:Object(s.a)(l.root,t)}),u?r.a.createElement(k.a,{title:"Unlike"},r.a.createElement(w.a,{className:l.likedButton,onClick:function(){d(!1),v((function(e){return e-1}))},size:"small"},r.a.createElement(S.a,null))):r.a.createElement(k.a,{title:"Like"},r.a.createElement(w.a,{className:l.likeButton,onClick:function(){d(!0),v((function(e){return e+1}))},size:"small"},r.a.createElement(V.a,null))),r.a.createElement(f.a,{color:"textSecondary",variant:"h6"},b),r.a.createElement(x.a,{className:l.shareButton,size:"small",variant:"contained"},r.a.createElement(B.a,{className:l.shareIcon}),"Share"))},M=Object(m.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},bubble:{flexGrow:1,padding:e.spacing(1),marginLeft:e.spacing(2),borderRadius:e.shape.borderRadius,backgroundColor:e.palette.background.default},header:{display:"flex",alignItems:"center"},time:{marginLeft:"auto"},message:{marginTop:e.spacing(1)}}}));var R=function(e){var a=e.comment,t=e.className,c=Object(n.a)(e,["comment","className"]),l=M();return r.a.createElement("div",Object.assign({},c,{className:Object(s.a)(l.root,t)}),r.a.createElement(p.a,{alt:"Person",component:i.a,src:a.author.avatar,to:"/profile/1/timeline"}),r.a.createElement("div",{className:l.bubble},r.a.createElement("div",{className:l.header},r.a.createElement(g.a,{color:"textPrimary",component:i.a,to:"/profile/1/timeline",variant:"h6"},a.author.name),r.a.createElement(f.a,{className:l.time,variant:"body2"},o()(a.created_at).fromNow())),r.a.createElement(f.a,{className:l.message,variant:"body1"},a.message)))},T=t(157),_=t(408),H=t(256),L=t.n(H),F=t(938),G=t.n(F),U=t(937),$=t.n(U),J=Object(m.a)((function(e){return{root:{display:"flex",alignItems:"center"},paper:{flexGrow:1,marginLeft:e.spacing(2),padding:e.spacing(.5,2)},input:{width:"100%"},divider:{width:1,height:24},fileInput:{display:"none"}}}));var W=function(e){var a=e.className,t=Object(n.a)(e,["className"]),i=J(),l=Object(c.useRef)(null),o=Object(c.useState)(""),m=Object(j.a)(o,2),u=m[0],d=m[1],f=function(){l.current.click()};return r.a.createElement("div",Object.assign({},t,{className:Object(s.a)(i.root,a)}),r.a.createElement(p.a,{alt:"Person",src:"/images/avatars/avatar_11.png"}),r.a.createElement(T.a,{className:i.paper,elevation:1},r.a.createElement(_.a,{className:i.input,disableUnderline:!0,onChange:function(e){e.persist(),d(e.target.value)},placeholder:"Leave a message"})),r.a.createElement(k.a,{title:"Send"},r.a.createElement(w.a,{color:u.length>0?"primary":"default"},r.a.createElement(L.a,null))),r.a.createElement(E.a,{className:i.divider}),r.a.createElement(k.a,{title:"Attach image"},r.a.createElement(w.a,{edge:"end",onClick:f},r.a.createElement(G.a,null))),r.a.createElement(k.a,{title:"Attach file"},r.a.createElement(w.a,{edge:"end",onClick:f},r.a.createElement($.a,null))),r.a.createElement("input",{className:i.fileInput,ref:l,type:"file"}))},q=Object(m.a)((function(e){return{root:{},subheader:{display:"flex",alignItems:"center"},accessTimeIcon:{color:e.palette.text.secondary,fontSize:"14px",height:14,width:14,marginRight:6},content:{paddingTop:0},message:{marginBottom:e.spacing(2)},mediaArea:{marginBottom:e.spacing(2)},media:{height:400,backgroundPosition:"initial"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}));a.a=function(e){var a=e.post,t=e.className,c=Object(n.a)(e,["post","className"]),l=q();return r.a.createElement(u.a,Object.assign({},c,{className:Object(s.a)(l.root,t)}),r.a.createElement(d.a,{avatar:r.a.createElement(p.a,{alt:"Person",className:l.avatar,component:i.a,src:a.author.avatar,to:"/profile/1/timeline"}),disableTypography:!0,subheader:r.a.createElement("div",{className:l.subheader},r.a.createElement(O.a,{className:l.accessTimeIcon}),r.a.createElement(f.a,{variant:"body2"},o()(a.created_at).fromNow())),title:r.a.createElement(g.a,{color:"textPrimary",component:i.a,to:"/profile/1/timeline",variant:"h6"},a.author.name)}),r.a.createElement(b.a,{className:l.content},r.a.createElement(f.a,{className:l.message,variant:"body1"},a.message),a.media&&r.a.createElement(v.a,{className:l.mediaArea},r.a.createElement(h.a,{className:l.media,image:a.media})),r.a.createElement(z,{className:l.reactions,post:a}),r.a.createElement(E.a,{className:l.divider}),a.comments&&r.a.createElement("div",{className:l.comments},a.comments.map((function(e){return r.a.createElement(R,{comment:e,key:e.id})}))),r.a.createElement(E.a,{className:l.divider}),r.a.createElement(W,null)))}},1426:function(e,a,t){"use strict";var n=t(1),c=t(4),r=t(0),i=t.n(r),s=(t(6),t(2)),l=t(9),o=t(201),m=i.a.forwardRef((function(e,a){var t=e.children,r=e.classes,l=e.className,m=e.focusVisibleClassName,u=Object(c.a)(e,["children","classes","className","focusVisibleClassName"]);return i.a.createElement(o.a,Object(n.a)({className:Object(s.a)(r.root,l),focusVisibleClassName:Object(s.a)(m,r.focusVisible),ref:a},u),t,i.a.createElement("span",{className:r.focusHighlight}))}));a.a=Object(l.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(m)},1468:function(e,a,t){"use strict";t.r(a);var n=t(14),c=t(0),r=t.n(c),i=t(200),s=t(915),l=t(34),o=t(90),m=t(1046),u=t(1038),d=t(10),p=t(2),f=t(40),g=Object(i.a)((function(){return{root:{}}}));var b=function(e){var a=e.className,t=Object(d.a)(e,["className"]),n=g();return r.a.createElement("div",Object.assign({},t,{className:Object(p.a)(n.root,a)}),r.a.createElement(f.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Social Feed"),r.a.createElement(f.a,{component:"h1",variant:"h3"},"Here's what your connections posted"))},v=Object(i.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},addPost:{marginTop:e.spacing(3)},posts:{marginTop:e.spacing(3)},post:{marginBottom:e.spacing(3)}}}));a.default=function(){var e=v(),a=Object(c.useState)([]),t=Object(n.a)(a,2),i=t[0],d=t[1];return Object(c.useEffect)((function(){var e=!0;return l.a.get("/api/social-feed").then((function(a){e&&d(a.data.posts)})),function(){e=!1}}),[]),r.a.createElement(o.a,{className:e.root,title:"Social Feed"},r.a.createElement(s.a,{maxWidth:"lg"},r.a.createElement(b,null),r.a.createElement(u.a,{className:e.addPost}),r.a.createElement("div",{className:e.posts},i.map((function(a){return r.a.createElement(m.a,{className:e.post,key:a.id,post:a})})))))}},937:function(e,a,t){"use strict";var n=t(19);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t(0)),r=(0,n(t(22)).default)(c.default.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");a.default=r},938:function(e,a,t){"use strict";var n=t(19);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(t(0)),r=(0,n(t(22)).default)(c.default.createElement("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");a.default=r},959:function(e,a,t){"use strict";var n=t(1),c=t(4),r=t(0),i=t.n(r),s=(t(6),t(2)),l=t(9),o=["video","audio","picture","iframe","img"],m=i.a.forwardRef((function(e,a){var t=e.children,r=e.classes,l=e.className,m=e.component,u=void 0===m?"div":m,d=e.image,p=e.src,f=e.style,g=Object(c.a)(e,["children","classes","className","component","image","src","style"]);var b=-1!==o.indexOf(u),v=!b&&d?Object(n.a)({backgroundImage:'url("'.concat(d,'")')},f):f;return i.a.createElement(u,Object(n.a)({className:Object(s.a)(r.root,l,b&&r.media,-1!=="picture img".indexOf(u)&&r.img),ref:a,style:v,src:b?d||p:void 0},g),t)}));a.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(m)}}]);
//# sourceMappingURL=23.917bc97f.chunk.js.map