webpackJsonp([2,0],{0:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=u(59),l=n(r),a=u(46),o=n(a),f=u(60),d=n(f),i=u(48),c=n(i),s=u(47),_=n(s),p=u(2),m=n(p),v=u(96),y=n(v),E=u(214),h=n(E),T=u(113),b=u(72),M=u(297),g=u(213),O=n(g),S=(0,b.useRouterHistory)(M.createHistory)({basename:""}),P=document.getElementById("app"),I=function(e){function t(){return(0,o["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,_["default"])(t,e),(0,d["default"])(t,[{key:"render",value:function(){return m["default"].createElement("div",null,m["default"].createElement(T.Provider,{store:h["default"]},m["default"].createElement("div",null,m["default"].createElement(b.Router,{history:S,routes:(0,O["default"])(h["default"])}))))}}]),t}(m["default"].Component);y["default"].render(m["default"].createElement(I,null),P)},76:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(300),l=n(r);t["default"]=(0,l["default"])({GET_SITE_DATA:null,GET_SITE_INFO:null,GET_SITE_STATS:null,GET_ALL_NODES:null,GET_TOPICS_LATEST:null,GET_TOPICS_HOT:null,GET_TOPIC_BY_ID:null,GET_TOPIC_BY_NODE:null,GET_TOPIC_BY_USER:null,GET_TOPIC_REPLIES:null,GET_USER_INFO:null}),e.exports=t["default"]},125:function(e,t,u){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=u(22),a=r(l),o=u(218),f=n(o);t["default"]=(0,a["default"])({},f),e.exports=t["default"]},126:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(299),r=(0,n.Record)({name:"react redux - jzb fe framework",siteInfo:"test"});t["default"]=r,e.exports=t["default"]},127:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments[1],r=t[n.type];return r&&n.content?r(u,n.content):r?r(u,n.payload.data,n.params):u}}function l(e,t){var u=t||"yyyy-MM-dd",n=e,r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(u)&&(u=u.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var l in r)r.hasOwnProperty(l)&&new RegExp("("+l+")").test(u)&&(u=u.replace(RegExp.$1,1===RegExp.$1.length?r[l]:("00"+r[l]).substr((""+r[l]).length)));return u}function a(e){return i.IMAGE_HOST_PROD+e}function o(e){if(null!==e&&"object"===("undefined"==typeof e?"undefined":(0,d["default"])(e)))return e.promise&&"function"==typeof e.promise.then}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=void 0;var f=u(77),d=n(f);t.createReducer=r,t.dateFormat=l,t.imgTrustUrl=a,t.isPromise=o;var i=u(212);t.noop=function(){}},212:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IMAGE_HOST_TEST="http://res.ikaibei.com/uploadtest/",t.IMAGE_HOST_PROD="http://res.ikaibei.com/upload/"},213:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=function(e,t,u){u()};return a["default"].createElement(o.Route,null,a["default"].createElement(o.Route,{component:d["default"],onEnter:t},a["default"].createElement(o.Route,{path:"/",component:c["default"]}),a["default"].createElement(o.Route,{path:"*",component:_["default"]})))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var l=u(2),a=n(l),o=u(72),f=u(221),d=n(f),i=u(222),c=n(i),s=u(223),_=n(s);e.exports=t["default"]},214:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(58),l=u(421),a=n(l),o=u(72),f=u(196),d=u(420),i=n(d),c=u(217),s=n(c),_=u(216),p=n(_),m=u(220),v=n(m),y=u(215),E=n(y),h=(0,i["default"])({level:"info",collapsed:!0}),T=(0,r.applyMiddleware)(a["default"],(0,s["default"])({promiseTypeSuffixes:["PENDING","SUCCESS","ERROR"]}),p["default"],h,(0,f.syncHistory)(o.browserHistory))(r.createStore),b=T(v["default"],E["default"]);t["default"]=b,e.exports=t["default"]},215:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(126),l=n(r),a={global:new l["default"]};t["default"]=a,e.exports=t["default"]},216:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(76);n(r);t["default"]=function(e){return function(e){return function(t){e(t)}}},e.exports=t["default"]},217:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.promiseTypeSuffixes||i;return function(e){var u=e.dispatch;return function(e){return function(n){if(!(0,d.isPromise)(n.payload))return e(n);var r=n.type,l=n.payload,o=n.meta,i=n.params,c=void 0===i?{}:i,s=l.promise,_=l.data,p=(o||{}).promiseTypeSuffixes||t,m=(0,f["default"])(p,3),v=m[0],y=m[1],E=m[2];e((0,a["default"])({type:r+"_"+v},_?{payload:_,params:c}:{},o?{meta:o}:{}));var h=function(e){return e&&(e.meta||e.payload)},T=function(e){return"function"==typeof e},b=function(e){return(0,a["default"])({type:r+"_"+(e?E:y)},o?{meta:o}:{},e?{error:!0}:{})};return n.payload.promise=s.then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=b();return u(T(e)?e.bind(null,t):(0,a["default"])({},t,h(e)?e:(0,a["default"])({},!!e&&{payload:e,params:c})))},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=b(!0);return u(T(e)?e.bind(null,t):(0,a["default"])({},t,h(e)?e:(0,a["default"])({},!!e&&{payload:e,params:c})))}),n}}}}Object.defineProperty(t,"__esModule",{value:!0});var l=u(22),a=n(l),o=u(231),f=n(o);t["default"]=r;var d=u(127),i=["PENDING","FULFILLED","REJECTED"];e.exports=t["default"]},218:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return{type:a["default"].GET_SITE_INFO,content:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getSiteInfo=r;var l=u(76),a=n(l)},219:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r,l=u(21),a=n(l),o=u(127),f=u(76),d=n(f),i=u(126),c=n(i);t["default"]=(0,o.createReducer)(new c["default"],(r={},(0,a["default"])(r,d["default"].GET_SITE_INFO,function(e,t){return t}),(0,a["default"])(r,d["default"].GET_SITE_STATS+"_SUCCESS",function(e,t){return e.set("siteStats",t)}),(0,a["default"])(r,d["default"].GET_ALL_NODES+"_SUCCESS",function(e,t){return e.set("nodes",t)}),r)),e.exports=t["default"]},220:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(58),l=u(196),a=u(219),o=n(a);t["default"]=(0,r.combineReducers)({global:o["default"],router:l.routeReducer}),e.exports=t["default"]},221:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,l,a,o,f=u(59),d=n(f),i=u(46),c=n(i),s=u(60),_=n(s),p=u(48),m=n(p),v=u(47),y=n(v),E=u(22),h=n(E),T=u(2),b=n(T),M=u(58),g=u(113),O=u(125),S=n(O),P=(r=(0,g.connect)(function(e){return(0,h["default"])({},e)},function(e){return(0,M.bindActionCreators)(S["default"],e)}),r((o=a=function(e){function t(){(0,c["default"])(this,t);var e=(0,m["default"])(this,(t.__proto__||(0,d["default"])(t)).call(this));return e.state={names:"jzb fe framework"},e}return(0,y["default"])(t,e),(0,_["default"])(t,[{key:"render",value:function(){return b["default"].createElement("div",{className:"main-container"},b["default"].createElement("div",{className:"main-wrapper"},this.props.children))}}]),t}(b["default"].Component),a.propTypes={children:b["default"].PropTypes.element},l=o))||l);t["default"]=P,e.exports=t["default"]},222:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,l,a=(u(204),u(203)),o=n(a),f=u(59),d=n(f),i=u(46),c=n(i),s=u(60),_=n(s),p=u(48),m=n(p),v=u(47),y=n(v),E=u(22),h=n(E),T=(u(202),u(201)),b=n(T),M=u(2),g=n(M),O=u(58),S=u(113),P=u(125),I=n(P),C=u(72),x=b["default"].TabPane,R=(r=(0,S.connect)(function(e){return(0,h["default"])({},e)},function(e){return(0,O.bindActionCreators)(I["default"],e)}),r(l=function(e){function t(){(0,c["default"])(this,t);var e=(0,m["default"])(this,(t.__proto__||(0,d["default"])(t)).call(this));return e.state={val:"route go"},e}return(0,y["default"])(t,e),(0,_["default"])(t,[{key:"callback",value:function(e){console.log(e)}},{key:"render",value:function(){return g["default"].createElement("div",{style:{padding:"0.3rem 0"}},g["default"].createElement(o["default"],null,this.props.global.name),g["default"].createElement(o["default"],{size:"md"},this.props.global.data,g["default"].createElement(C.Link,{to:{pathname:"/not"}},this.state.val)),g["default"].createElement(o["default"],null,g["default"].createElement(b["default"],{defaultActiveKey:"2",onChange:this.callback.bind(this)},g["default"].createElement(x,{tab:"选项卡一",key:"1"},g["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"5rem",backgroundColor:"#fff"}},"选项卡一内容")),g["default"].createElement(x,{tab:"选项卡二",key:"2"},g["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"5rem",backgroundColor:"#fff"}},"选项卡二内容")),g["default"].createElement(x,{tab:"选项卡三",key:"3"},g["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"5rem",backgroundColor:"#fff"}},"选项卡三内容")))))}}]),t}(g["default"].Component))||l);t["default"]=R,e.exports=t["default"]},223:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=u(59),l=n(r),a=u(46),o=n(a),f=u(60),d=n(f),i=u(48),c=n(i),s=u(47),_=n(s),p=u(2),m=n(p),v=function(e){function t(){return(0,o["default"])(this,t),(0,c["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,_["default"])(t,e),(0,d["default"])(t,[{key:"render",value:function(){return m["default"].createElement("div",null,"页面找不到")}}]),t}(m["default"].Component);t["default"]=v,e.exports=t["default"]},274:function(e,t){},275:function(e,t){},276:function(e,t){},277:function(e,t){}});
//# sourceMappingURL=app.d1aa75402c3759fc7043.js.map