(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[37],{1457:function(e,t,a){"use strict";a.r(t);var n=a(137),r=a(14),o=a(18),c=a(0),l=a.n(c),i=a(5),d=a.n(i),u=a(1134),s=a(1049),m=a(1136),p=a(1137),f=a(1138),b=a(1139),g=a(200),v=a(7),y=a(31),h=a(785),E=a(915),O=a(797),j=a(799),D=a(253),w=(a(1140),a(1141),a(1142),a(1143),a(34)),k=a(90),C=a(10),N=a(2),P=a(3),A=a.n(P),x=a(40),M=a(906),S=a(960),W=a(1144),Y=a(784),T=a(909),B=a(158),V=a(404),G=a(930),R=a.n(G);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=Object(g.a)((function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none",boxShadow:e.shadows[20],width:700,maxHeight:"100%",overflowY:"auto",maxWidth:"100%"},field:{marginTop:e.spacing(3)},cancelButton:{marginLeft:"auto"},confirmButton:{color:e.palette.common.white,backgroundColor:v.a.green[600],"&:hover":{backgroundColor:v.a.green[900]}}}})),z={title:"Event title",desc:"Event description",allDay:!1,start:d()().toDate(),end:d()().toDate()},F=Object(c.forwardRef)((function(e,t){var a=e.event,n=e.onDelete,i=e.onCancel,u=e.onAdd,s=e.onEdit,m=e.className,p=Object(C.a)(e,["event","onDelete","onCancel","onAdd","onEdit","className"]),f=J(),b=Object(c.useState)(a||I({},z)),g=Object(r.a)(b,2),v=g[0],y=g[1],h=a?"edit":"add",E=function(e){e.persist(),y((function(t){return I({},t,Object(o.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))}))};return l.a.createElement(O.a,Object.assign({},p,{className:Object(N.a)(f.root,m),ref:t}),l.a.createElement("form",null,l.a.createElement(j.a,null,l.a.createElement(x.a,{align:"center",gutterBottom:!0,variant:"h3"},"add"===h?"Add Event":"Edit Event"),l.a.createElement(M.a,{className:f.field,fullWidth:!0,label:"Title",name:"title",onChange:E,value:v.title,variant:"outlined"}),l.a.createElement(M.a,{className:f.field,fullWidth:!0,label:"Description",name:"desc",onChange:E,value:v.desc,variant:"outlined"}),l.a.createElement(S.a,{className:f.field,control:l.a.createElement(W.a,{checked:v.allDay,name:"allDay",onChange:E}),label:"All day"}),l.a.createElement(M.a,{className:f.field,defaultValue:d()(v.start).format("YYYY-MM-DDThh:mm:ss"),fullWidth:!0,label:"Start date",name:"start",onChange:E,type:"datetime-local",variant:"outlined"}),l.a.createElement(M.a,{className:f.field,defaultValue:d()(v.end).format("YYYY-MM-DDThh:mm:ss"),disabled:v.allDay,fullWidth:!0,label:"End date",name:"end",onChange:E,type:"datetime-local",variant:"outlined"})),l.a.createElement(Y.a,null),l.a.createElement(T.a,null,l.a.createElement(B.a,{edge:"start",onClick:function(){n&&n(a)}},l.a.createElement(R.a,null)),l.a.createElement(V.a,{className:f.cancelButton,onClick:i,variant:"contained"},"Cancel"),"add"===h?l.a.createElement(V.a,{className:f.confirmButton,onClick:function(){v.title&&v.desc&&u(I({},v,{id:A()()}))},variant:"contained"},"Add"):l.a.createElement(V.a,{className:f.confirmButton,onClick:function(){v.title&&v.desc&&s(v)},variant:"contained"},"Save"))))})),L=a(161),q=a(900),K=a(921),Q=a(136),U=a(1145),X=a.n(U),Z=a(999),$=a.n(Z),_=a(1146),ee=a.n(_),te=a(1147),ae=a.n(te),ne=Object(g.a)((function(){return{root:{}}})),re=[{label:"Month",value:"dayGridMonth",icon:X.a},{label:"Week",value:"timeGridWeek",icon:$.a},{label:"Day",value:"timeGridDay",icon:ee.a},{label:"Agenda",value:"listWeek",icon:ae.a}];var oe=function(e){var t=e.date,a=e.view,n=e.onDatePrev,r=e.onDateNext,o=e.onEventAdd,c=e.onViewChange,i=e.onDateToday,u=e.className,s=Object(C.a)(e,["date","view","onDatePrev","onDateNext","onEventAdd","onViewChange","onDateToday","className"]),m=ne();return l.a.createElement("div",Object.assign({},s,{className:Object(N.a)(m.root,u)}),l.a.createElement(L.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},l.a.createElement(L.a,{item:!0},l.a.createElement(x.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Calendar"),l.a.createElement(x.a,{component:"h1",variant:"h3"},"Here's what you planned")),l.a.createElement(L.a,{item:!0},l.a.createElement(V.a,{color:"primary",onClick:o,variant:"contained"},"Add event"))),l.a.createElement(L.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},l.a.createElement(L.a,{item:!0},l.a.createElement(q.a,null,l.a.createElement(V.a,{onClick:n},"Prev"),l.a.createElement(V.a,{onClick:i},"Today"),l.a.createElement(V.a,{onClick:r},"Next"))),l.a.createElement(K.a,{smDown:!0},l.a.createElement(L.a,{item:!0},l.a.createElement(x.a,{variant:"h3"},d()(t).format("MMMM YYYY"))),l.a.createElement(L.a,{item:!0},re.map((function(e){var t=e.icon;return l.a.createElement(Q.a,{key:e.value,title:e.label},l.a.createElement(B.a,{color:e.value===a?"primary":"default",onClick:function(){return c(e.value)}},l.a.createElement(t,null)))}))))))};function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie=Object(g.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3),"& .fc-unthemed td":{borderColor:e.palette.divider},"& .fc-widget-header":{backgroundColor:v.a.grey[50]},"& .fc-axis":le({},e.typography.body2),"& .fc-list-item-time":le({},e.typography.body2),"& .fc-list-item-title":le({},e.typography.body1),"& .fc-list-heading-main":le({},e.typography.h6),"& .fc-list-heading-alt":le({},e.typography.h6),"& .fc th":{borderColor:e.palette.divider},"& .fc-day-header":le({},e.typography.subtitle2,{fontWeight:500,color:e.palette.text.secondary,padding:e.spacing(1),backgroundColor:v.a.grey[50]}),"& .fc-day-top":le({},e.typography.body2),"& .fc-highlight":{backgroundColor:v.a.blueGrey[50]},"& .fc-event":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderWidth:2,opacity:.9,"& .fc-time":le({},e.typography.h6,{color:"inherit"}),"& .fc-title":le({},e.typography.body1,{color:"inherit"})},"& .fc-list-empty":le({},e.typography.subtitle1)},card:{marginTop:e.spacing(3)}}}));t.default=function(){var e=ie(),t=Object(c.useRef)(null),a=Object(y.a)(),o=Object(h.a)(a.breakpoints.down("sm")),i=Object(c.useState)(o?"listWeek":"dayGridMonth"),g=Object(r.a)(i,2),v=g[0],C=g[1],N=Object(c.useState)(d()("2019-07-30 08:00:00").toDate()),P=Object(r.a)(N,2),A=P[0],x=P[1],M=Object(c.useState)([]),S=Object(r.a)(M,2),W=S[0],Y=S[1],T=Object(c.useState)({open:!1,event:null}),B=Object(r.a)(T,2),V=B[0],G=B[1],R=function(){G({open:!1,event:null})};return Object(c.useEffect)((function(){var e=!0;return e&&w.a.get("/api/calendar").then((function(e){return Y(e.data.events)})),function(){e=!1}}),[]),Object(c.useEffect)((function(){var e=t.current.getApi(),a=o?"listWeek":"dayGridMonth";e.changeView(a),C(a)}),[o]),l.a.createElement(k.a,{className:e.root,title:"Calendar"},l.a.createElement(E.a,{maxWidth:!1},l.a.createElement(oe,{date:A,onDateNext:function(){var e=t.current.getApi();e.next(),x(e.getDate())},onDatePrev:function(){var e=t.current.getApi();e.prev(),x(e.getDate())},onDateToday:function(){var e=t.current.getApi();e.today(),x(e.getDate())},onEventAdd:function(){G({open:!0,event:null})},onViewChange:function(e){t.current.getApi().changeView(e),C(e)},view:v}),l.a.createElement(O.a,{className:e.card},l.a.createElement(j.a,null,l.a.createElement(u.a,{allDayMaintainDuration:!0,defaultDate:A,defaultView:v,droppable:!0,editable:!0,eventClick:function(e){var t=W.find((function(t){return t.id===e.event.id}));G({open:!0,event:t})},eventResizableFromStart:!0,events:W,header:!1,height:800,plugins:[s.d,m.a,p.a,f.a,b.a],ref:t,rerenderDelay:10,selectable:!0,weekends:!0}))),l.a.createElement(D.a,{onClose:R,open:V.open},l.a.createElement(F,{event:V.event,onAdd:function(e){Y((function(t){return[].concat(Object(n.a)(t),[e])})),G({open:!1,event:null})},onCancel:R,onDelete:function(e){Y((function(t){return t.filter((function(t){return t.id!==e.id}))})),G({open:!1,event:null})},onEdit:function(e){Y((function(t){return t.map((function(t){return t.id===e.id?e:t}))})),G({open:!1,event:null})}}))))}}}]);
//# sourceMappingURL=37.dc31f7e9.chunk.js.map