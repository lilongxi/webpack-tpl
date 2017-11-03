!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=lib},function(e,t,n){e.exports=n(0)(0)},function(e,t,n){e.exports=n(0)(83)},function(e,t,n){e.exports=n(0)(248)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.REQUEST_POSTS="REQUEST_POSTS",t.RECEIVE_POSTS="RECEIVE_POSTS",t.INVALIDATE_SUBREDDIT="INVALIDATE_SUBREDDIT",t.SELECT_SUBREDDIT="SELECT_SUBREDDIT"},function(e,t,n){"use strict";(function(e,t,r){var o=n(7),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(13),u=e,c=u.Provider;!function(){t.render(r.createElement(c,{store:a.store},r.createElement(i.default,null)),document.getElementById("root"))}();a.store.subscribe(function(){})}).call(t,n(3),n(6),n(1))},function(e,t,n){e.exports=n(0)(33)},function(e,t,n){"use strict";(function(e,r,o,i){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,s,f,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(9),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(p),v=n(11),b=n(12),g=function(e){return e&&e.__esModule?e:{default:e}}(b),y=e,m=y.connect,E=function(e){var t=e.selectSubreddit,n=e.postsBySubreddit,r=n[t]||{isFetching:!0,items:[]};return{selectSubreddit:t,isFetching:r.isFetching,posts:r.items,lastUpdate:r.lastUpdate}},S=function(e){return{actions:r.bindActionCreators(h,e)}},w=(l=m(E,S),s=o(g.default,{allowMultiple:!0}),l(f=s(f=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selectSubreddit;e.actions.fetchPostsIfNeed(t)}},{key:"componentWillReceiveProps",value:function(e){if(e.selectSubreddit!==this.props.selectSubreddit){var t=e.selectSubreddit;this.props.actions.fetchPostsIfNeed(t)}}},{key:"onRefresh",value:function(e){e.preventDefault();var t=this.props,n=t.selectSubreddit,r=t.actions;r.invalidatePosts(n),r.fetchPostsIfNeed(n)}},{key:"handleChange",value:function(e){this.props.actions.selectSubreddit(e)}},{key:"render",value:function(){var e=this.props,t=e.selectSubreddit,n=e.lastUpdate,r=e.isFetching,o=e.posts,a={value:t,options:["reactjs","frontend"],onChange:this.handleChange.bind(this)},u=0===o.length;return i.createElement("div",null,i.createElement("h2",{styleName:"head title"},t),i.createElement(v.Picker,a),i.createElement("p",null,n&&i.createElement("span",null,"lastUpdate: ",new Date(n).toLocaleTimeString()),!r&&i.createElement("button",{onClick:this.onRefresh.bind(this)},"点击刷新")),u||r?i.createElement("h2",{styleName:"head title"},"Loading..."):i.createElement(v.Posts,{posts:o}))}}]),t}(i.Component))||f)||f);t.default=w}).call(t,n(3),n(2),n(8),n(1))},function(e,t,n){e.exports=n(0)(124)},function(e,t,n){"use strict";(function(e){function r(e){return{type:c.SELECT_SUBREDDIT,subreddit:e}}function o(e){return{type:c.REQUEST_POSTS,subreddit:e}}function i(e){return{type:c.INVALIDATE_SUBREDDIT,subreddit:e}}function a(e,t){return{type:c.RECEIVE_POSTS,subreddit:e,posts:t.data.children.map(function(e){return e.data}),lastUpdate:Date.now()}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=e.postsBySubreddit[t];return!n||!n.isFetching&&n.didInvalidate}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPostsIfNeed=void 0,t.selectSubreddit=r,t.requestsPosts=o,t.invalidatePosts=i,t.receivePosts=a;var c=n(4),l=function(t){return function(n,r){return n(o(t)),e("http://www.subreddit.com/r/"+t+".json").then(function(e){return e.json()}).then(function(e){return n(a(t,e))})}};t.fetchPostsIfNeed=function(e){return function(t,n){if(u(n(),e))return t(l(e));Promise.resolve()}}}).call(t,n(10))},function(e,t,n){e.exports=n(0)(95)},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});t.Picker=function(t){var n=t.value,r=t.options,o=t.onChange;return e.createElement("div",null,e.createElement("select",{onChange:function(e){return o(e.target.value)},value:n},r&&r.map(function(t,n){return e.createElement("option",{value:t,key:n},t)})))},t.Posts=function(t){var n=t.posts;return e.createElement("ul",null,n.map(function(t,n){return e.createElement("li",{key:n},t.title)}))}}).call(t,n(1))},function(e,t){e.exports={title:"index_title_1M3A_r6e",head:"index_head_24g6AVdG"}},function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var i=n(14),a=(r(i),n(16)),u=r(a),c=n(17),l=r(c),s=e,f=s.createStore,d=s.applyMiddleware,p=[l.default];t.store=d.apply(void 0,o(p))(f)(u.default)}).call(t,n(2))},function(e,t,n){(function(e){!function(e,n){n(t)}(0,function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,n){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function c(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function l(e){var t=void 0===e?"undefined":A(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function s(e,t,n,r,f,d,p){f=f||[],p=p||[];var h=f.slice(0);if(void 0!==d){if(r){if("function"==typeof r&&r(h,d))return;if("object"===(void 0===r?"undefined":A(r))){if(r.prefilter&&r.prefilter(h,d))return;if(r.normalize){var v=r.normalize(h,d,e,t);v&&(e=v[0],t=v[1])}}}h.push(d)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var b=void 0===e?"undefined":A(e),g=void 0===t?"undefined":A(t),y="undefined"!==b||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==g||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!y&&m)n(new i(h,t));else if(!m&&y)n(new a(h,e));else if(l(e)!==l(t))n(new o(h,e,t));else if("date"===l(e)&&e-t!=0)n(new o(h,e,t));else if("object"===b&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&n(new o(h,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var E;for(e.length,E=0;E<e.length;E++)E>=t.length?n(new u(h,E,new a(void 0,e[E]))):s(e[E],t[E],n,r,h,E,p);for(;E<t.length;)n(new u(h,E,new i(void 0,t[E++])))}else{var S=Object.keys(e),w=Object.keys(t);S.forEach(function(o,i){var a=w.indexOf(o);a>=0?(s(e[o],t[o],n,r,h,o,p),w=c(w,a)):s(e[o],void 0,n,r,h,o,p)}),w.forEach(function(e){s(void 0,t[e],n,r,h,e,p)})}p.length=p.length-1}else e!==t&&("number"===b&&isNaN(e)&&isNaN(t)||n(new o(h,e,t)))}function f(e,t,n,r){return r=r||[],s(e,t,function(e){e&&r.push(e)},n),r.length?r:void 0}function d(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":d(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":d(e[t],n.index,n.item);break;case"D":e=c(e,t);break;case"E":case"N":e[t]=n.rhs}return e}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":d(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function h(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":h(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":h(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=c(e,t)}return e}function v(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":h(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}}function b(e,t,n){if(e&&t){s(e,t,function(r){n&&!n(e,t,r)||p(e,t,r)})}}function g(e){return"color: "+C[e].color+"; font-weight: bold"}function y(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}function m(e,t,n,r){var o=f(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach(function(e){var t=e.kind,r=y(e);n.log.apply(n,["%c "+C[t].text,g(t)].concat(k(r)))}):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function E(e,t,n,r){switch(void 0===e?"undefined":A(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,k(n)):e[r];case"function":return e(t);default:return e}}function S(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function w(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,i=void 0===o?S(t):o,a=t.collapsed,u=t.colors,c=t.level,l=t.diff,s=void 0===t.titleFormatter;e.forEach(function(o,f){var d=o.started,p=o.startedTime,h=o.action,v=o.prevState,b=o.error,g=o.took,y=o.nextState,S=e[f+1];S&&(y=S.prevState,g=S.started-d);var w=r(h),_="function"==typeof a?a(function(){return y},h,o):a,P=T(p),D=u.title?"color: "+u.title(w)+";":"",O=["color: gray; font-weight: lighter;"];O.push(D),t.timestamp&&O.push("color: gray; font-weight: lighter;"),t.duration&&O.push("color: gray; font-weight: lighter;");var j=i(w,P,g);try{_?u.title&&s?n.groupCollapsed.apply(n,["%c "+j].concat(O)):n.groupCollapsed(j):u.title&&s?n.group.apply(n,["%c "+j].concat(O)):n.group(j)}catch(e){n.log(j)}var x=E(c,w,[v],"prevState"),A=E(c,w,[w],"action"),k=E(c,w,[b,v],"error"),I=E(c,w,[y],"nextState");if(x)if(u.prevState){var C="color: "+u.prevState(v)+"; font-weight: bold";n[x]("%c prev state",C,v)}else n[x]("prev state",v);if(A)if(u.action){var N="color: "+u.action(w)+"; font-weight: bold";n[A]("%c action    ",N,w)}else n[A]("action    ",w);if(b&&k)if(u.error){var R="color: "+u.error(b,v)+"; font-weight: bold;";n[k]("%c error     ",R,b)}else n[k]("error     ",b);if(I)if(u.nextState){var U="color: "+u.nextState(y)+"; font-weight: bold";n[I]("%c next state",U,y)}else n[I]("next state",y);l&&m(v,y,n,_);try{n.groupEnd()}catch(e){n.log("—— log end ——")}})}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},N,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var n=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(n,l))return e(l);var s={};c.push(s),s.started=x.now(),s.startedTime=new Date,s.prevState=r(n()),s.action=l;var f=void 0;if(a)try{f=e(l)}catch(e){s.error=o(e)}else f=e(l);s.took=x.now()-s.started,s.nextState=r(n());var d=t.diff&&"function"==typeof u?u(n,l):t.diff;if(w(c,Object.assign({},t,{diff:d})),c.length=0,s.error)throw s.error;return f}}}}var P,D,O=function(e,t){return new Array(t+1).join(e)},j=function(e,t){return O("0",t-e.toString().length)+e},T=function(e){return j(e.getHours(),2)+":"+j(e.getMinutes(),2)+":"+j(e.getSeconds(),2)+"."+j(e.getMilliseconds(),3)},x="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},I=[];P="object"===(void 0===e?"undefined":A(e))&&e?e:"undefined"!=typeof window?window:{},D=P.DeepDiff,D&&I.push(function(){void 0!==D&&P.DeepDiff===f&&(P.DeepDiff=D,D=void 0)}),n(o,r),n(i,r),n(a,r),n(u,r),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:s,enumerable:!0},applyDiff:{value:b,enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:v,enumerable:!0},isConflict:{value:function(){return void 0!==D},enumerable:!0},noConflict:{value:function(){return I&&(I.forEach(function(e){e()}),I=null),f},enumerable:!0}});var C={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},N={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?_()({dispatch:t,getState:n}):void 0};t.defaults=N,t.createLogger=_,t.logger=R,t.default=R,Object.defineProperty(t,"__esModule",{value:!0})})}).call(t,n(15))},function(e,t,n){e.exports=n(0)(17)},function(e,t,n){"use strict";(function(e){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case c.SELECT_SUBREDDIT:return t.subreddit;default:return e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case c.REQUEST_POSTS:return u({},e,{isFetching:!0,didInvalidate:!1});case c.RECEIVE_POSTS:return u({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdate:t.lastUpdate});case c.INVALIDATE_SUBREDDIT:return u({},e,{didInvalidate:!0});default:return e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case c.INVALIDATE_SUBREDDIT:case c.REQUEST_POSTS:case c.RECEIVE_POSTS:return u({},e,r({},t.subreddit,i(e[t.subreddit],t)));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(4),l={isFetching:!1,didInvalidate:!1,items:[]},s="reactjs";t.default=e.combineReducers({selectSubreddit:o,postsBySubreddit:a})}).call(t,n(2))},function(e,t,n){e.exports=n(0)(97)}]);