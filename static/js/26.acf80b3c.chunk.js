(this["webpackJsonpdevias-material-kit-pro"]=this["webpackJsonpdevias-material-kit-pro"]||[]).push([[26],{1033:function(e,a,t){"use strict";var n=t(10),r=t(18),l=t(0),i=t.n(l),s=t(2),o=t(200),c=t(7),u=t(1034),p=t.n(u);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var f=Object(o.a)((function(e){return{root:d({},e.typography.button,{listStyle:"none",userSelect:"none",display:"flex",alignItems:"center"}),active:{},activeLink:{},break:{},breakLink:{},disabled:{},next:{marginLeft:e.spacing(1)},nextLink:{padding:"6px 16px",outline:"none",cursor:"pointer",borderRadius:4,"&:hover":{backgroundColor:c.a.blueGrey[50]}},page:{},pageLink:{color:e.palette.text.secondary,padding:e.spacing(1),outline:"none",cursor:"pointer",width:40,height:40,borderRadius:"50%",display:"block",textAlign:"center","&:hover":{backgroundColor:c.a.blueGrey[50],color:e.palette.text.primary},"&$activeLink":{backgroundColor:c.a.blueGrey[50],color:e.palette.text.primary}},previous:{marginRight:e.spacing(1)},previousLink:{padding:"6px 16px",outline:"none",cursor:"pointer",borderRadius:4,"&:hover":{backgroundColor:c.a.blueGrey[50]}}}}));function g(e){var a=e.pageCount,t=e.pageRangeDisplayed,r=e.onPageChange,l=e.className,o=Object(n.a)(e,["pageCount","pageRangeDisplayed","onPageChange","className"]),c=f();return i.a.createElement(p.a,Object.assign({activeClassName:c.active,activeLinkClassName:c.activeLink,breakClassName:c.break,breakLabel:"...",breakLinkClassName:c.breakLink,containerClassName:Object(s.a)(c.root,l),disabledClassName:c.disabled,marginPagesDisplayed:2,nextClassName:c.next,nextLabel:"next",nextLinkClassName:c.nextLink,onPageChange:r,pageClassName:c.page,pageCount:a,pageLinkClassName:c.pageLink,pageRangeDisplayed:t,previousClassName:c.previous,previousLabel:"previous",previousLinkClassName:c.previousLink,subContainerClassName:"pages pagination"},o))}g.defaultProps={onPageChange:function(){},pageCount:3,pageRangeDisplayed:5},a.a=g},1034:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,r=t(1035),l=(n=r)&&n.__esModule?n:{default:n};a.default=l.default},1035:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),r=t(0),l=c(r),i=c(t(6)),s=c(t(1036)),o=c(t(1037));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,s=a.breakLabel,c=a.breakClassName,u=a.breakLinkClassName,p=t.state.selected;if(r<=n)for(var m=0;m<r;m++)e.push(t.getPageElement(m));else{var d=n/2,f=n-d;p>r-n/2?d=n-(f=r-p):p<n/2&&(f=n-(d=p));var g=void 0,b=void 0,v=void 0,h=function(e){return t.getPageElement(e)};for(g=0;g<r;g++)(b=g+1)<=i?e.push(h(g)):b>r-i?e.push(h(g)):g>=p-d&&g<=p+f?e.push(h(g)):s&&e[e.length-1]!==v&&(v=l.default.createElement(o.default,{key:g,breakLabel:s,breakClassName:c,breakLinkClassName:u,onClick:t.handleBreakClick.bind(null,g)}),e.push(v))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,i=t.activeClassName,o=t.activeLinkClassName,c=t.extraAriaContext;return l.default.createElement(s.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:i,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,r=e.pageCount,i=e.containerClassName,s=e.previousLinkClassName,o=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,p=this.state.selected,m=t+(0===p?" "+a:""),d=n+(p===r-1?" "+a:""),f=0===p?"true":"false",g=p===r-1?"true":"false";return l.default.createElement("ul",{className:i},l.default.createElement("li",{className:m},l.default.createElement("a",{onClick:this.handlePreviousPage,className:s,href:this.hrefBuilder(p-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":f},o)),this.pagination(),l.default.createElement("li",{className:d},l.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(p+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":g},u)))}}]),a}(r.Component);u.propTypes={pageCount:i.default.number.isRequired,pageRangeDisplayed:i.default.number.isRequired,marginPagesDisplayed:i.default.number.isRequired,previousLabel:i.default.node,nextLabel:i.default.node,breakLabel:i.default.oneOfType([i.default.string,i.default.node]),hrefBuilder:i.default.func,onPageChange:i.default.func,initialPage:i.default.number,forcePage:i.default.number,disableInitialCallback:i.default.bool,containerClassName:i.default.string,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,previousClassName:i.default.string,nextClassName:i.default.string,previousLinkClassName:i.default.string,nextLinkClassName:i.default.string,disabledClassName:i.default.string,breakClassName:i.default.string,breakLinkClassName:i.default.string,extraAriaContext:i.default.string,ariaLabelBuilder:i.default.func},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},1036:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(t(0)),r=l(t(6));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.onClick,l=e.href,i=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),s=null;return e.selected&&(s="page",i=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:r,role:"button",className:t,href:l,tabIndex:"0","aria-label":i,"aria-current":s,onKeyPress:r},e.page))};i.propTypes={onClick:r.default.func.isRequired,selected:r.default.bool.isRequired,pageClassName:r.default.string,pageLinkClassName:r.default.string,activeClassName:r.default.string,activeLinkClassName:r.default.string,extraAriaContext:r.default.string,href:r.default.string,ariaLabel:r.default.string,page:r.default.number.isRequired},a.default=i},1037:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(t(0)),r=l(t(6));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,l=e.onClick,i=t||"break";return n.default.createElement("li",{className:i},n.default.createElement("a",{className:r,onClick:l,role:"button",tabIndex:"0",onKeyPress:l},a))};i.propTypes={breakLabel:r.default.oneOfType([r.default.string,r.default.node]),breakClassName:r.default.string,breakLinkClassName:r.default.string,onClick:r.default.func.isRequired},a.default=i},1462:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(0),l=t.n(r),i=t(200),s=t(915),o=t(40),c=t(34),u=t(90),p=t(1033),m=t(971),d=t(10),f=t(20),g=t(2),b=t(161),v=t(404),h=Object(i.a)((function(){return{root:{}}}));var C=function(e){var a=e.className,t=Object(d.a)(e,["className"]),n=h();return l.a.createElement("div",Object.assign({},t,{className:Object(g.a)(n.root,a)}),l.a.createElement(b.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},l.a.createElement(b.a,{item:!0},l.a.createElement(o.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Management"),l.a.createElement(o.a,{component:"h1",variant:"h3"},"Projects")),l.a.createElement(b.a,{item:!0},l.a.createElement(v.a,{color:"primary",component:f.a,to:"/projects/create",variant:"contained"},"Add project"))))},y=t(18),N=t(5),k=t.n(N),E=t(7),j=t(797),O=t(799),x=t(252),P=t(405),L=t(116),w=Object(i.a)((function(e){var a;return{root:{display:"flex",alignItems:"center",flexWrap:"wrap",marginBottom:e.spacing(2)},content:(a={padding:e.spacing(2),flexGrow:1,display:"flex",alignItems:"center",justifyContent:"space-between"},Object(y.a)(a,e.breakpoints.down("sm"),{width:"100%",flexWrap:"wrap"}),Object(y.a)(a,"&:last-child",{paddingBottom:e.spacing(2)}),a),header:Object(y.a)({maxWidth:"100%",width:240,display:"flex"},e.breakpoints.down("sm"),{marginBottom:e.spacing(2),flexBasis:"100%"}),avatar:{marginRight:e.spacing(2)},stats:Object(y.a)({padding:e.spacing(1)},e.breakpoints.down("sm"),{flexBasis:"50%"}),actions:Object(y.a)({padding:e.spacing(1)},e.breakpoints.down("sm"),{flexBasis:"50%"})}}));var D=function(e){var a=e.project,t=e.className,n=Object(d.a)(e,["project","className"]),r=w(),i={"In progress":E.a.orange[600],Canceled:E.a.grey[600],Completed:E.a.green[600]};return l.a.createElement(j.a,Object.assign({},n,{className:Object(g.a)(r.root,t)}),l.a.createElement(O.a,{className:r.content},l.a.createElement("div",{className:r.header},l.a.createElement(x.a,{alt:"Author",className:r.avatar,src:a.author.avatar},Object(L.a)(a.author.name)),l.a.createElement("div",null,l.a.createElement(P.a,{color:"textPrimary",component:f.a,noWrap:!0,to:"#",variant:"h5"},a.title),l.a.createElement(o.a,{variant:"body2"},"by"," ",l.a.createElement(P.a,{color:"textPrimary",component:f.a,to:"/management/customers/1",variant:"h6"},a.author.name)))),l.a.createElement("div",{className:r.stats},l.a.createElement(o.a,{variant:"h6"},a.currency,a.price),l.a.createElement(o.a,{variant:"body2"},"Project price")),l.a.createElement("div",{className:r.stats},l.a.createElement(o.a,{variant:"h6"},a.members),l.a.createElement(o.a,{variant:"body2"},"Team members")),l.a.createElement("div",{className:r.stats},l.a.createElement(o.a,{variant:"h6"},k()(a.start_date).format("DD MMMM YYYY")),l.a.createElement(o.a,{variant:"body2"},"Project started")),l.a.createElement("div",{className:r.stats},l.a.createElement(o.a,{variant:"h6"},k()(a.end_date).format("DD MMMM YYYY")),l.a.createElement(o.a,{variant:"body2"},"Project deadline")),l.a.createElement("div",{className:r.stats},l.a.createElement(o.a,{style:{color:i[a.status]},variant:"h6"},a.status),l.a.createElement(o.a,{variant:"body2"},"Project status")),l.a.createElement("div",{className:r.actions},l.a.createElement(v.a,{color:"primary",size:"small",variant:"outlined"},"View"))))},S=Object(i.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},results:{marginTop:e.spacing(3)},paginate:{marginTop:e.spacing(3),display:"flex",justifyContent:"center"}}}));a.default=function(){var e=S(),a=Object(r.useState)(10),t=Object(n.a)(a,1)[0],i=Object(r.useState)(0),d=Object(n.a)(i,1)[0],f=Object(r.useState)([]),g=Object(n.a)(f,2),b=g[0],v=g[1];return Object(r.useEffect)((function(){var e=!0;return c.a.get("/api/projects").then((function(a){e&&v(a.data.projects)})),function(){e=!1}}),[]),l.a.createElement(u.a,{className:e.root,title:"Project Management List"},l.a.createElement(s.a,{maxWidth:!1},l.a.createElement(C,null),l.a.createElement(m.a,{onFilter:function(){},onSearch:function(){}}),l.a.createElement("div",{className:e.results},l.a.createElement(o.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},"".concat(b.length," Records found. Page ").concat(d+1," of ").concat(Math.ceil(b.length/t))),b.map((function(e){return l.a.createElement(D,{key:e.id,project:e})}))),l.a.createElement("div",{className:e.paginate},l.a.createElement(p.a,{pageCount:3}))))}},971:function(e,a,t){"use strict";var n=t(14),r=t(10),l=t(0),i=t.n(l),s=t(2),o=t(200),c=t(161),u=t(404),p=t(963),m=t.n(p),d=t(157),f=t(408),g=t(202),b=t.n(g),v=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center"},search:{flexGrow:1,height:42,padding:e.spacing(0,2),display:"flex",alignItems:"center"},searchIcon:{marginRight:e.spacing(2),color:e.palette.icon},searchInput:{flexGrow:1},searchButton:{backgroundColor:e.palette.common.white,marginLeft:e.spacing(2)}}}));var h=function(e){e.onSearch;var a=e.className,t=Object(r.a)(e,["onSearch","className"]),n=v();return i.a.createElement("div",Object.assign({},t,{className:Object(s.a)(n.root,a)}),i.a.createElement(d.a,{className:n.search,elevation:1},i.a.createElement(b.a,{className:n.searchIcon}),i.a.createElement(f.a,{className:n.searchInput,disableUnderline:!0,placeholder:"S\xf8k"})))},C=(t(137),t(18)),y=t(898),N=t(906),k=t(40),E=t(1469),j=t(1442),O=t(960),x=t(920),P=t(952),L=t.n(P),w=t(930),D=t.n(w);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function B(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(t,!0).forEach((function(a){Object(C.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var R=Object(o.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},drawer:{width:420,maxWidth:"100%"},header:{padding:e.spacing(2,1),flexShrink:0,display:"flex",justifyContent:"space-between"},buttonIcon:{marginRight:e.spacing(1)},content:{padding:e.spacing(0,3),flexGrow:1},contentSection:{padding:e.spacing(2,0)},contentSectionHeader:{display:"flex",justifyContent:"space-between",cursor:"pointer"},contentSectionContent:{},formGroup:{padding:e.spacing(2,0)},fieldGroup:{display:"flex",alignItems:"center"},field:{marginTop:0,marginBottom:0},flexGrow:{flexGrow:1},addButton:{marginLeft:e.spacing(1)},tags:{marginTop:e.spacing(1)},minAmount:{marginRight:e.spacing(3)},maxAmount:{marginLeft:e.spacing(3)},radioGroup:{},actions:{padding:e.spacing(3),"& > * + *":{marginTop:e.spacing(2)}}}})),I=["Nei","Halv\xe5r","Hel\xe5r"],_=["Ingen","Altibox","Telenor","Telia","GlobalConnect"],G={aktivOptions:"",grupperinger:"",slettet:"",amount:[1,4]};var A=function(e){var a=e.open,t=e.onClose,o=e.onFilter,c=e.className,p=Object(r.a)(e,["open","onClose","onFilter","className"]),m=R(),d=Object(l.useState)(!0),f=Object(n.a)(d,2),g=(f[0],f[1],Object(l.useState)(!1)),b=Object(n.a)(g,2),v=(b[0],b[1],Object(l.useState)(B({},G))),h=Object(n.a)(v,2),P=h[0],w=h[1],S=function(e,a,t){e&&e.persist(),w((function(e){return B({},e,Object(C.a)({},a,t))}))};return i.a.createElement(y.a,{anchor:"right",classes:{paper:m.drawer},onClose:t,open:a,variant:"temporary"},i.a.createElement("form",Object.assign({},p,{className:Object(s.a)(m.root,c),onSubmit:function(e){e.preventDefault(),o&&o(P)}}),i.a.createElement("div",{className:m.header},i.a.createElement(u.a,{onClick:t,size:"small"},i.a.createElement(L.a,{className:m.buttonIcon}),"Lukk")),i.a.createElement("div",{className:m.content},i.a.createElement("div",{className:m.contentSectionContent},i.a.createElement("div",{className:m.formGroup},i.a.createElement(N.a,{className:m.field,fullWidth:!0,label:"Aktiv",margin:"dense",name:"aktivOptions",onChange:function(e){return S(e,"aktivOptions",e.target.value)},select:!0,SelectProps:{native:!0},value:P.aktivOptions,variant:"outlined"},i.a.createElement("option",{disabled:!0,value:""}),I.map((function(e){return i.a.createElement("option",{key:e,value:e},e)})))),i.a.createElement("div",{className:m.formGroup},i.a.createElement(k.a,{component:"p",gutterBottom:!0,variant:"overline"},"Tilbyder st\xf8rrelse"),i.a.createElement("div",{className:m.fieldGroup},i.a.createElement(k.a,{className:m.minAmount,variant:"body1"},P.amount[0]),i.a.createElement(E.a,{className:m.flexGrow,max:5,min:1,onChange:function(e,a){return S(e,"amount",a)},value:P.amount,valueLabelDisplay:"auto"}),i.a.createElement(k.a,{className:m.maxAmount,variant:"body1"},P.amount[1]))),i.a.createElement("div",{className:m.formGroup},i.a.createElement(k.a,{component:"p",gutterBottom:!0,variant:"overline"},"Slettet i Brreg"),i.a.createElement("div",{className:m.fieldGroup},i.a.createElement(j.a,{className:m.radioGroup,name:"slettet",onChange:function(e){return S(e,"slettet",e.target.value)},value:P.slettet},i.a.createElement(O.a,{control:i.a.createElement(x.a,{color:"primary"}),label:"Nei",value:"nei"}),i.a.createElement(O.a,{control:i.a.createElement(x.a,{color:"primary"}),label:"Ja",value:"ja"}))),i.a.createElement("div",{className:m.formGroup},i.a.createElement(N.a,{className:m.field,fullWidth:!0,label:"Gruppering",margin:"dense",name:"grupperinger",onChange:function(e){return S(e,"grupperinger",e.target.value)},select:!0,SelectProps:{native:!0},value:P.grupperinger,variant:"outlined"},i.a.createElement("option",{disabled:!0,value:""}),_.map((function(e){return i.a.createElement("option",{key:e,value:e},e)}))))))),i.a.createElement("div",{className:m.actions},i.a.createElement(u.a,{fullWidth:!0,onClick:function(){w(B({},G))},variant:"contained"},i.a.createElement(D.a,{className:m.buttonIcon}),"Clear"),i.a.createElement(u.a,{color:"primary",fullWidth:!0,type:"submit",variant:"contained",onClick:t},"Apply filters"))))},M=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},search:{flexGrow:1,maxWidth:480,flexBasis:480},filterButton:{marginLeft:"auto"},filterIcon:{marginRight:e.spacing(1)}}}));a.a=function(e){var a=e.onFilter,t=e.onSearch,o=e.className,p=Object(r.a)(e,["onFilter","onSearch","className"]),d=M(),f=Object(l.useState)(!1),g=Object(n.a)(f,2),b=g[0],v=g[1];return i.a.createElement(c.a,Object.assign({},p,{className:Object(s.a)(d.root,o),container:!0,spacing:3}),i.a.createElement(c.a,{item:!0},i.a.createElement(h,{className:d.search,onSearch:t})),i.a.createElement(c.a,{item:!0},i.a.createElement(u.a,{className:d.filterButton,color:"primary",onClick:function(){v(!0)},size:"small",variant:"outlined"},i.a.createElement(m.a,{className:d.filterIcon})," ","Vis filter")),i.a.createElement(A,{onClose:function(){v(!1)},onFilter:a,open:b}))}}}]);
//# sourceMappingURL=26.acf80b3c.chunk.js.map