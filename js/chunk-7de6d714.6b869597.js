(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de6d714"],{"0e4b":function(t,e,r){},"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),i=r("785a"),o=r("17c2"),u=r("9112"),l=function(t){if(t&&t.forEach!==o)try{u(t,"forEach",o)}catch(e){t.forEach=o}};for(var a in c)c[a]&&l(n[a]&&n[a].prototype);l(i)},"17a3":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c={class:"list row"},i={class:"col-md-6"},o=Object(n["e"])("h4",null,"Tutorials List",-1),u={class:"list-group"},l=["onClick"],a={class:"col-md-6"},s={key:0},b={key:1},f=Object(n["e"])("br",null,null,-1),d=Object(n["e"])("p",null,"Please click on a Tutorial...",-1),p=[f,d];function h(t,e,r,f,d,h){var O=Object(n["x"])("tutorial-details");return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["e"])("div",i,[o,Object(n["e"])("ul",u,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(d.tutorials,(function(t,e){return Object(n["q"])(),Object(n["d"])("li",{class:Object(n["m"])(["list-group-item",{active:e==d.currentIndex}]),key:e,onClick:function(r){return h.setActiveTutorial(t,e)}},Object(n["z"])(t.title),11,l)})),128))]),Object(n["e"])("button",{class:"m-3 btn btn-sm btn-danger",onClick:e[0]||(e[0]=function(){return h.removeAllTutorials&&h.removeAllTutorials.apply(h,arguments)})}," Remove All ")]),Object(n["e"])("div",a,[d.currentTutorial?(Object(n["q"])(),Object(n["d"])("div",s,[Object(n["g"])(O,{tutorial:d.currentTutorial,onRefreshList:h.refreshList},null,8,["tutorial","onRefreshList"])])):(Object(n["q"])(),Object(n["d"])("div",b,p))])])}r("d3b7"),r("159b"),r("a4d3"),r("e01a");var O=r("f652"),j={key:0,class:"edit-form"},v=Object(n["e"])("h4",null,"Tutorial",-1),g={class:"form-group"},m=Object(n["e"])("label",{for:"title"},"Title",-1),y={class:"form-group"},T=Object(n["e"])("label",{for:"description"},"Description",-1),k={class:"form-group"},w=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Status:")],-1),P={key:1},D=Object(n["e"])("br",null,null,-1),E=Object(n["e"])("p",null,"Please click on a Tutorial...",-1),x=[D,E];function A(t,e,r,c,i,o){return i.currentTutorial?(Object(n["q"])(),Object(n["d"])("div",j,[v,Object(n["e"])("form",null,[Object(n["e"])("div",g,[m,Object(n["E"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=function(t){return i.currentTutorial.title=t})},null,512),[[n["B"],i.currentTutorial.title]])]),Object(n["e"])("div",y,[T,Object(n["E"])(Object(n["e"])("input",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[1]||(e[1]=function(t){return i.currentTutorial.description=t})},null,512),[[n["B"],i.currentTutorial.description]])]),Object(n["e"])("div",k,[w,Object(n["f"])(" "+Object(n["z"])(i.currentTutorial.published?"Published":"Pending"),1)])]),i.currentTutorial.published?(Object(n["q"])(),Object(n["d"])("button",{key:0,class:"badge badge-primary mr-2",onClick:e[2]||(e[2]=function(t){return o.updatePublished(!1)})}," UnPublish ")):(Object(n["q"])(),Object(n["d"])("button",{key:1,class:"badge badge-primary mr-2",onClick:e[3]||(e[3]=function(t){return o.updatePublished(!0)})}," Publish ")),Object(n["e"])("button",{class:"badge badge-danger mr-2",onClick:e[4]||(e[4]=function(){return o.deleteTutorial&&o.deleteTutorial.apply(o,arguments)})}," Delete "),Object(n["e"])("button",{type:"submit",class:"badge badge-success",onClick:e[5]||(e[5]=function(){return o.updateTutorial&&o.updateTutorial.apply(o,arguments)})}," Update "),Object(n["e"])("p",null,Object(n["z"])(i.message),1)])):(Object(n["q"])(),Object(n["d"])("div",P,x))}r("b64b"),r("4de4"),r("e439"),r("dbb4");function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var U={name:"tutorial",props:["tutorial"],data:function(){return{currentTutorial:null,message:""}},watch:{tutorial:function(t){this.currentTutorial=L({},t),this.message=""}},methods:{updatePublished:function(t){var e=this;O["a"].update(this.currentTutorial.key,{published:t}).then((function(){e.currentTutorial.published=t,e.message="The status was updated successfully!"})).catch((function(t){console.log(t)}))},updateTutorial:function(){var t=this,e={title:this.currentTutorial.title,description:this.currentTutorial.description};O["a"].update(this.currentTutorial.key,e).then((function(){t.message="The tutorial was updated successfully!"})).catch((function(t){console.log(t)}))},deleteTutorial:function(){var t=this;O["a"].delete(this.currentTutorial.key).then((function(){t.$emit("refreshList")})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.currentTutorial=L({},this.tutorial)}},I=(r("edcf"),r("6b0d")),z=r.n(I);const B=z()(U,[["render",A]]);var R=B,S={name:"tutorials-list",components:{TutorialDetails:R},data:function(){return{tutorials:[],currentTutorial:null,currentIndex:-1}},methods:{onDataChange:function(t){var e=[];t.forEach((function(t){var r=t.key,n=t.val();e.push({key:r,title:n.title,description:n.description,published:n.published})})),this.tutorials=e},refreshList:function(){this.currentTutorial=null,this.currentIndex=-1},setActiveTutorial:function(t,e){this.currentTutorial=t,this.currentIndex=e},removeAllTutorials:function(){var t=this;O["a"].deleteAll().then((function(){t.refreshList()})).catch((function(t){console.log(t)}))}},mounted:function(){O["a"].getAll().on("value",this.onDataChange)},beforeUnmount:function(){O["a"].getAll().off("value",this.onDataChange)}};r("31ca");const J=z()(S,[["render",h]]);e["default"]=J},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),i=c("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),c=r("b622"),i=r("2d00"),o=c("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"31ca":function(t,e,r){"use strict";r("0e4b")},"3ff3":function(t,e,r){},"4de4":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").filter,i=r("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),i=r("df75"),o=r("d039"),u=o((function(){i(1)}));n({target:"Object",stat:!0,forced:u},{keys:function(t){return i(c(t))}})},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),i=r("56ef"),o=r("fc6a"),u=r("06cf"),l=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),c=u.f,a=i(n),s={},b=0;while(a.length>b)r=c(n,e=a[b++]),void 0!==r&&l(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),i=r("fc6a"),o=r("06cf").f,u=r("83ab"),l=c((function(){o(1)})),a=!u||l;n({target:"Object",stat:!0,forced:a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},edcf:function(t,e,r){"use strict";r("3ff3")}}]);
//# sourceMappingURL=chunk-7de6d714.6b869597.js.map