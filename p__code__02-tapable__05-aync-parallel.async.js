"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[219],{82764:function(E,r,o){o.r(r);var l=o(21140),c=o.n(l),d=o(63466),P=o.n(d),a=o(62086),u=function(n){return new Promise(function(e,_){setTimeout(function(){console.log("a"),e()},1e3)})},i=function(n){return new Promise(function(e,_){setTimeout(function(){console.log("b"),e()},1e3)})},m=function(n){return new Promise(function(e,_){setTimeout(function(){console.log("c"),e()},1e3)})};console.time("time1");var f=function(){for(var n=arguments.length,e=new Array(n),_=0;_<n;_++)e[_]=arguments[_];var h=e.map(function(j){return j()});return Promise.all(h)};f(u,i,m).then(function(){console.timeEnd("time1")});var p=function(){function t(n){c()(this,t),this.tasks=[],this.name=n}return P()(t,[{key:"tapPromise",value:function(e){this.tasks.push(e)}},{key:"promise",value:function(){var e=this.tasks.map(function(_){return _()});return Promise.all(e)}}]),t}(),s=new p("name");s.tapPromise(u),s.tapPromise(i),s.tapPromise(m),console.time("time2"),s.promise("Hello-2").then(function(){return console.timeEnd("time2")}),r.default=function(){return(0,a.jsx)(a.Fragment,{})}}}]);