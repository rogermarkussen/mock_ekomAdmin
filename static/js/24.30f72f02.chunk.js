(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[24],{1014:function(e,a,t){"use strict";var r=t(10),n=t(0),c=t.n(n),i=t(20),l=t(2),o=t(5),s=t.n(o),m=t(200),d=t(797),u=t(798),v=t(252),g=t(40),p=t(405),E=t(799),f=t(784),b=t(161),h=t(116),y=t(955),j=Object(m.a)((function(e){return{root:{},header:{paddingBottom:0},subheader:{flexWrap:"wrap",display:"flex",alignItems:"center"},stars:{display:"flex",alignItems:"center",marginRight:e.spacing(1)},rating:{marginLeft:e.spacing(1),fontWeight:e.typography.fontWeightBold},content:{padding:0,"&:last-child":{paddingBottom:0}},message:{padding:e.spacing(2,3)},details:{padding:e.spacing(2,3)}}}));a.a=function(e){var a=e.review,t=e.className,n=Object(r.a)(e,["review","className"]),o=j();return c.a.createElement(d.a,Object.assign({},n,{className:Object(l.a)(o.root,t)}),c.a.createElement(u.a,{avatar:c.a.createElement(v.a,{alt:"Reviewer",className:o.avatar,src:a.reviewer.avatar},Object(h.a)(a.reviewer.name)),className:o.header,disableTypography:!0,subheader:c.a.createElement("div",{className:o.subheader},c.a.createElement("div",{className:o.stars},c.a.createElement(y.a,{value:a.rating}),c.a.createElement(g.a,{className:o.rating,variant:"h6"},a.rating)),c.a.createElement(g.a,{variant:"body2"},"| Reviewd by"," ",c.a.createElement(p.a,{color:"textPrimary",component:i.a,to:"/profile/1/timeline",variant:"h6"},a.reviewer.name)," ","|"," ",s()(a.created_at).fromNow())),title:c.a.createElement(p.a,{color:"textPrimary",component:i.a,to:"/projects/1/overview",variant:"h5"},a.project.title)}),c.a.createElement(E.a,{className:o.content},c.a.createElement("div",{className:o.message},c.a.createElement(g.a,{variant:"subtitle2"},a.message)),c.a.createElement(f.a,null),c.a.createElement("div",{className:o.details},c.a.createElement(b.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},c.a.createElement(b.a,{item:!0},c.a.createElement(g.a,{variant:"h5"},a.currency,a.project.price),c.a.createElement(g.a,{variant:"body2"},"Project price")),c.a.createElement(b.a,{item:!0},c.a.createElement(g.a,{variant:"h5"},a.currency,a.pricePerHour),c.a.createElement(g.a,{variant:"body2"},"Per project")),c.a.createElement(b.a,{item:!0},c.a.createElement(g.a,{variant:"h5"},a.hours),c.a.createElement(g.a,{variant:"body2"},"Hours"))))))}},1279:function(e,a,t){var r=t(3),n=t(1280),c=n;c.v1=r,c.v4=n,e.exports=c},1280:function(e,a,t){var r=t(418),n=t(419);e.exports=function(e,a,t){var c=a&&t||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,a)for(var l=0;l<16;++l)a[c+l]=i[l];return a||n(i)}},1458:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(1279),i=t.n(c),l=t(5),o=t.n(l),s=t(200),m=t(7),d=t(915),u=t(40),v=t(784),g=t(161),p=t(90),E=t(264),f=t(1014),b=t(10),h=t(2),y=t(797),j=t(798),N=t(158),O=t(783),w=t(782),k=t(908),x=t(252),C=t(160),S=t(909),I=t(404),P=t(203),M=t.n(P),_=t(65),B=t.n(_),L=Object(s.a)((function(e){return{root:{},avatar:{fontSize:16,fontWeight:e.typography.fontWeightBold,backgroundColor:m.a.red[600],height:32,width:32},actions:{justifyContent:"flex-end"},iconAfter:{marginLeft:e.spacing(1)}}})),H=[{id:1,initials:"GH",title:"GitHub",value:"28,400"},{id:2,initials:"TW",title:"Twitter",value:"25,421"},{id:3,initials:"HN",title:"Hacker News",value:"22,421"},{id:4,initials:"SO",title:"StackOverflow",value:"21,223"}];var T=function(e){var a=e.className,t=Object(b.a)(e,["className"]),r=L();return n.a.createElement(y.a,Object.assign({},t,{className:Object(h.a)(r.root,a)}),n.a.createElement(j.a,{action:n.a.createElement(N.a,{size:"small"},n.a.createElement(M.a,null)),title:"Card Header"}),n.a.createElement(v.a,null),n.a.createElement(O.a,{disablePadding:!0},H.map((function(e){return n.a.createElement(w.a,{divider:!0,key:e.id},n.a.createElement(k.a,null,n.a.createElement(x.a,{className:r.avatar},e.initials)),n.a.createElement(C.a,{primary:e.title,primaryTypographyProps:{variant:"h6"}}),n.a.createElement(u.a,{variant:"subtitle2"},e.value))}))),n.a.createElement(S.a,{className:r.actions},n.a.createElement(I.a,{color:"secondary"},"See All Results",n.a.createElement(B.a,{className:r.iconAfter}))))},z=t(959),R=t(799),W=Object(s.a)((function(e){return{root:{},media:{height:126},content:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:-60},avatar:{height:72,width:72,marginBottom:e.spacing(1),border:"4px solid ".concat(e.palette.common.white)},actions:{justifyContent:"space-between"},containedSuccess:{color:e.palette.common.white,backgroundColor:m.a.green[600],"&:hover":{backgroundColor:m.a.green[900],"@media (hover: none)":{backgroundColor:m.a.green[600]}}}}}));var F=function(e){var a=e.className,t=Object(b.a)(e,["className"]),r=W();return n.a.createElement(y.a,Object.assign({},t,{className:Object(h.a)(r.root,a)}),n.a.createElement(z.a,{className:r.media,image:"/images/covers/cover_2.jpg"}),n.a.createElement(R.a,{className:r.content},n.a.createElement(x.a,{className:r.avatar,src:"/images/avatars/avatar_3.png"},"CM"),n.a.createElement(u.a,{gutterBottom:!0,variant:"h6"},"Carmelita Marsham"),n.a.createElement(u.a,{variant:"body2"},"Working on the latest API integration.")),n.a.createElement(v.a,null),n.a.createElement(S.a,{className:r.actions},n.a.createElement(I.a,null,"Dismiss User"),n.a.createElement(I.a,{className:r.containedSuccess},"Accept Request")))},A=Object(s.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},divider:{backgroundColor:m.a.grey[300],marginTop:e.spacing(3),marginBottom:e.spacing(3)}}}));a.default=function(){var e=A();return n.a.createElement(p.a,{className:e.root,title:"Cards"},n.a.createElement(d.a,{maxWidth:"lg"},n.a.createElement(u.a,{variant:"overline"},"Components"),n.a.createElement(u.a,{gutterBottom:!0,variant:"h3"},"Cards"),n.a.createElement(v.a,{className:e.divider}),n.a.createElement(g.a,{container:!0,spacing:3},n.a.createElement(g.a,{item:!0,lg:6,xs:12},n.a.createElement(T,null)),n.a.createElement(g.a,{item:!0,lg:6,xs:12},n.a.createElement(F,null)),n.a.createElement(g.a,{item:!0,xs:12},n.a.createElement(E.a,{project:{id:i()(),title:"Develop a PDF Editor",author:{name:"Sasha Moreno",avatar:"/images/avatars/avatar_6.png"},price:"12,500",currency:"$",type:"Full-Time",location:"Europe",members:5,tags:[{text:"HTML",color:m.a.green[600]},{text:"React JS",color:m.a.blue[600]}],start_date:o()(),end_date:o()(),updated_at:o()().subtract(8,"days")}})),n.a.createElement(g.a,{item:!0,xs:12},n.a.createElement(f.a,{review:{id:i()(),rating:4,message:"Shen was really great during the all time session we created the project",reviewer:{name:"Ekaterina Tankova",avatar:"/images/avatars/avatar_2.png"},project:{title:"Mella Full Screen Slider",price:"5,240.00"},pricePerHour:"43.00",hours:31,currency:"$",created_at:o()().subtract(4,"hours")}})))))}},940:function(e,a,t){"use strict";var r=t(19);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(22)).default)(n.default.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");a.default=c},941:function(e,a,t){"use strict";var r=t(19);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(22)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Star");a.default=c},955:function(e,a,t){"use strict";var r=t(10),n=t(0),c=t.n(n),i=t(2),l=t(3),o=t.n(l),s=t(200),m=t(7),d=t(941),u=t.n(d),v=t(940),g=t.n(v),p=Object(s.a)((function(e){return{root:{display:"inline-flex",alignItems:"center"},starIcon:{fontSize:18,height:18,width:18},starFilledIcon:{color:m.a.amber[400]},starBorderIcon:{color:e.palette.icon}}}));function E(e){for(var a=e.value,t=e.starCount,n=e.className,l=Object(r.a)(e,["value","starCount","className"]),s=p(),m=[],d=1;d<=t;d++){var v=o()(),E=d<=a?c.a.createElement(u.a,{className:Object(i.a)(s.starIcon,s.starFilledIcon),key:v}):c.a.createElement(g.a,{className:Object(i.a)(s.starIcon,s.starBorderIcon),key:v});m.push(E)}return c.a.createElement("div",Object.assign({},l,{className:Object(i.a)(s.root,n)}),m)}E.defaultProps={value:0,starCount:5},a.a=E},959:function(e,a,t){"use strict";var r=t(1),n=t(4),c=t(0),i=t.n(c),l=(t(6),t(2)),o=t(9),s=["video","audio","picture","iframe","img"],m=i.a.forwardRef((function(e,a){var t=e.children,c=e.classes,o=e.className,m=e.component,d=void 0===m?"div":m,u=e.image,v=e.src,g=e.style,p=Object(n.a)(e,["children","classes","className","component","image","src","style"]);var E=-1!==s.indexOf(d),f=!E&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},g):g;return i.a.createElement(d,Object(r.a)({className:Object(l.a)(c.root,o,E&&c.media,-1!=="picture img".indexOf(d)&&c.img),ref:a,style:f,src:E?u||v:void 0},p),t)}));a.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(m)}}]);
//# sourceMappingURL=24.30f72f02.chunk.js.map