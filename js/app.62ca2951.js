(function(t){function e(e){for(var s,i,r=e[0],c=e[1],u=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todolist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("page-title",{attrs:{title:t.title}}),n("div",{staticClass:"todo-list"},[n("tasks-list",{attrs:{tasks:t.tasks},on:{remove:t.taskRemove}}),n("task-new",{attrs:{tasks:t.tasks},on:{add:t.taskAdd}})],1)],1)},o=[],i=(n("498a"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"title"},[t._v(t._s(t.title))])}),r=[],c={props:["title"]},u=c,l=(n("e6b6"),n("2877")),d=Object(l["a"])(u,i,r,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{attrs:{name:"list-item",tag:"ul"}},t._l(t.tasks,(function(e,s){return n("li",{key:e.id,staticClass:"task",class:{done:e.status}},[n("div",{staticClass:"task__checkbox",on:{click:function(t){e.status=!e.status}}},[n("font-awesome-icon",{attrs:{icon:"check-circle"}})],1),n("span",{staticClass:"task__title"},[t._v(t._s(e.title))]),n("div",{staticClass:"task__button-remove",on:{click:function(e){return t.taskRemoveEmit(s)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)])})),0)},k=[],m={props:["tasks"],methods:{taskRemoveEmit:function(t){this.$emit("remove",t)}}},h=m,v=(n("5ab8"),Object(l["a"])(h,p,k,!1,null,null,null)),b=v.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.taskNew,expression:"taskNew"}],staticClass:"task-new__input",attrs:{type:"text",placeholder:"New task"},domProps:{value:t.taskNew},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.taskAddEmit()},input:function(e){e.target.composing||(t.taskNew=e.target.value)}}}),n("button",{staticClass:"task-new__button-add",on:{click:function(e){return t.taskAddEmit()}}},[n("font-awesome-icon",{attrs:{icon:"plus-circle"}})],1)])},_=[],g={data:function(){return{taskNew:"",count:this.tasks.length+1}},props:["tasks"],methods:{taskAddEmit:function(){this.$emit("add",this.taskNew,this.count),this.count++,this.taskNew=""}}},y=g,O=(n("b88d"),Object(l["a"])(y,w,_,!1,null,null,null)),x=O.exports,j={components:{PageTitle:f,TasksList:b,TaskNew:x},data:function(){return{title:"Things Todo",tasks:[{id:1,title:"Do something awesome!",status:!1},{id:2,title:"Buy toilet paper",status:!1},{id:3,title:"Learn Vue",status:!1}]}},mounted:function(){if(localStorage.getItem("tasks"))try{this.tasks=JSON.parse(localStorage.getItem("tasks"))}catch(t){localStorage.removeItem("tasks")}},watch:{tasks:{handler:function(){localStorage.setItem("tasks",JSON.stringify(this.tasks))},deep:!0}},methods:{taskAdd:function(t,e){var n=t.trim();n&&this.tasks.push({id:e,title:n,status:!1})},taskRemove:function(t){this.tasks.splice(t,1)}}},N=j,S=(n("5c0b"),Object(l["a"])(N,a,o,!1,null,null,null)),C=S.exports,E=n("ecee"),P=n("c074"),T=n("ad3d");E["c"].add(P["c"],P["a"],P["b"]),s["a"].component("font-awesome-icon",T["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(C)}}).$mount("#app")},"5ab8":function(t,e,n){"use strict";n("9cba")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7a36":function(t,e,n){},"9a0d":function(t,e,n){},"9c0c":function(t,e,n){},"9cba":function(t,e,n){},b88d:function(t,e,n){"use strict";n("7a36")},e6b6:function(t,e,n){"use strict";n("9a0d")}});
//# sourceMappingURL=app.62ca2951.js.map