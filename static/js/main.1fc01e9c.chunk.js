(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(25).concat([function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),c=(a(30),a(4)),o=a(5),s=a(7),u=a(6),d=a(13),m=a(8),h=(a(31),a(58)),p=(a(32),a(1)),f=a.n(p),b=function(e){return r.a.createElement("div",{className:f()("body-collapse",e.expanded?"expanded":"")},e.children)},E=(a(33),r.a.forwardRef(function(e,t){return r.a.createElement("div",{ref:t,className:f()("head-collapse",e.body?"has-body":"",e.id===e.expandedId?"expanded":""),onClick:function(){return e.body&&e.onToggle(e.id)}},e.children)})),g=r.a.forwardRef(function(e,t){return r.a.createElement(h.a,{sm:e.sm,md:e.md,lg:e.lg},r.a.createElement(E,{ref:t,id:e.id,expandedId:e.expandedId,onToggle:e.onToggle,body:e.body},e.children),e.body&&r.a.createElement(b,{expanded:e.id===e.expandedId&&!e.isDesktop},e.body))});g.displayName="Collapsible.Col";var y=g,v=a(59),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isDesktop:!1,headList:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"updateIsDesktop",value:function(){var e=this.state.headList.length;e>1&&this.setState({isDesktop:this.state.headList[0].getBoundingClientRect().top===this.state.headList[e-1].getBoundingClientRect().top})}},{key:"componentDidMount",value:function(){this.updateIsDesktop(),window.addEventListener("resize",this.updateIsDesktop.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateIsDesktop.bind(this))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:f()(this.props.className)},r.a.Children.map(this.props.children||[],function(t,a){return"Collapsible.Col"!==t.type.displayName?t:r.a.cloneElement(t,{id:"".concat(e.props.id,"-").concat(a),expandedId:e.props.expandedId,isDesktop:e.state.isDesktop,onToggle:e.props.onToggle,ref:function(t){return t&&e.state.headList.push(t)}})})),r.a.Children.map(this.props.children||[],function(t,a){return t.props.body&&r.a.createElement(b,{expanded:"".concat(e.props.id,"-").concat(a)===e.props.expandedId&&e.state.isDesktop},t.props.body)}))}}]),t}(r.a.Component);k.displayName="Collapsible.Row";var j={Col:y,Row:k,Grid:function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={expandedId:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onToggle",value:function(e){this.setState({expandedId:this.state.expandedId&&this.state.expandedId===e?null:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:f()(this.props.className)},r.a.Children.map(this.props.children||[],function(t,a){return"Collapsible.Row"!==t.type.displayName?t:r.a.cloneElement(t,{id:a,expandedId:e.state.expandedId,onToggle:e.onToggle.bind(e)})}))}}]),t}(r.a.Component)},O=0,w={},N=new IntersectionObserver(function(e){e.forEach(function(e){var t=w[e.target.getAttribute("id")];t&&t(e)})}),x={threshold:0,unregisterOnIntersect:!1},C={trackVisibility:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){function n(e){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={id:"track-visible-".concat(O++),ref:r.a.createRef(),threshold:t.threshold||x.threshold,wasIntersected:!1,isIntersected:!1,unregisterOnIntersect:t.unregisterOnIntersect||x.unregisterOnIntersect},a.updateVisibility=a.updateVisibility.bind(Object(d.a)(a)),a}return Object(m.a)(n,a),Object(o.a)(n,[{key:"componentWillUnmount",value:function(){this.unregisterTarget()}},{key:"componentDidMount",value:function(){this.registerTarget()}},{key:"unregisterTarget",value:function(){delete w[this.state.id],N.unobserve(this.state.ref.current)}},{key:"registerTarget",value:function(){w[this.state.id]=this.updateVisibility,N.observe(this.state.ref.current)}},{key:"updateVisibility",value:function(e){e.intersectionRatio>this.state.threshold?this.state.unregisterOnIntersect?(this.setState({wasIntersected:!0}),this.unregisterTarget()):this.setState({wasIntersected:!0,isIntersected:!0}):this.setState({isIntersected:!1})}},{key:"render",value:function(){return r.a.createElement("div",{id:this.state.id,ref:this.state.ref,className:f()("track-visible",this.state.wasIntersected?"was-visible":"",this.state.isIntersected?"is-visible":"")},r.a.createElement(e,this.props))}}]),n}(r.a.Component)}},I=(a(34),function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement(H,{className:"footer-button",ariaLabel:"Email",href:"mailto:alexlipianu@live.ca?subject=Website%20Redirect",icon:"envelope"}),r.a.createElement(H,{className:"footer-button",ariaLabel:"LinkedIn",href:"https://ca.linkedin.com/in/alipianu",prefix:"fab",icon:"linkedin"}),r.a.createElement(H,{className:"footer-button",ariaLabel:"GitHub",href:"https://github.com/alipianu",prefix:"fab",icon:"github"}),r.a.createElement(H,{className:"footer-button",ariaLabel:"CodePen",href:"https://codepen.io/alipianu/",prefix:"fab",icon:"codepen"})),r.a.createElement("div",null,r.a.createElement("p",null,"@ ",e," Alexander Lipianu"),r.a.createElement("p",null,"All rights reserved")))}),M=(a(35),function(e){return r.a.createElement("a",{className:"link","aria-label":e.ariaLabel||"",href:e.href||"#",target:"_blank",rel:"noopener noreferrer"},e.children)}),S=a(11),L=function(e){var t=RegExp("(\\{\\{(".concat(Object(S.a)(e.links.keys()).join("|"),")\\}\\})"));return e.children.split("\n").map(function(a,n){var l=[];do{var i=t.exec(a);if(!i)break;l.push(r.a.createElement("span",{key:"".concat(n,"-").concat(l.length)},a.substring(0,i.index)));var c=e.links[i[2]];l.push(r.a.createElement(M,{key:"".concat(n,"-").concat(l.length),ariaLabel:c.label,href:c.href},c.label)),a=a.substring(i.index+i[0].length)}while(a.length>4);return l.push(r.a.createElement("span",{key:"".concat(n,"-").concat(l.length)},a)),r.a.createElement("p",{key:n},l)})},R=(a(36),a(62)),T=function(e){return r.a.createElement(R.a,{className:"project"},r.a.createElement("div",null,e.image&&r.a.createElement(R.a.Img,{variant:"top",src:e.image,alt:"".concat(e.title," thumbnail")})),e.links&&r.a.createElement("div",{className:"card-buttons"},e.links.download&&r.a.createElement(H,{className:"project-button",ariaLabel:"Download",href:e.links.download,prefix:"fas",icon:"download"}),e.links.github&&r.a.createElement(H,{className:"project-button",ariaLabel:"GitHub",href:e.links.github,prefix:"fab",icon:"github"})),r.a.createElement(R.a.Body,null,e.title&&r.a.createElement(R.a.Title,null,e.title),e.description&&r.a.createElement(R.a.Text,null,e.description),e.tools&&r.a.createElement("div",{className:"tools"},Object.keys(e.tools).map(function(t){return e.tools[t].map(function(a,n){return r.a.createElement(U,{key:n,type:t,typeMap:e.tagMap,label:a})})}))))},D=(a(37),a(60)),A=function(e){return r.a.createElement("section",{className:f()(e.theme,e.className)},r.a.createElement(D.a,null,e.title&&r.a.createElement("h2",null,e.title),e.description&&r.a.createElement("p",null,e.description),e.headshot?r.a.createElement(v.a,{className:"align-items-center"},r.a.createElement(h.a,{md:5,lg:4},r.a.createElement("img",{id:"headshot",src:e.headshot,className:"img-responsive img-fluid rounded-circle",alt:"headshot"})),r.a.createElement(h.a,{md:6,lg:7,className:"offset-md-1"},e.children)):e.children))},P=(a(38),C.trackVisibility(function(e){return r.a.createElement("div",{className:"skill skill-".concat(e.level||"none")},e.label&&r.a.createElement("div",{className:"label"},e.label),r.a.createElement("div",{className:"skill-bar"},r.a.createElement("div",{className:"skill-bar-bg"}),r.a.createElement("div",{className:"skill-bar-progress"})))},{unregisterOnIntersect:!0})),V=(a(39),function(e){return r.a.createElement("div",{className:"splash",style:{backgroundImage:"url(".concat(e.src,")")}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.children)))))}),W=(a(40),"transparent"),_="circle",B=function(e){return e.data&&e.data.length&&r.a.createElement("ul",{className:"timeline"},e.data.map(function(t,a){return r.a.createElement("li",{key:a,style:{width:"".concat(100/e.data.length,"%")}},t.year&&r.a.createElement("div",{className:"timeline-label"},t.year),r.a.createElement("table",{className:"timeline-ribbon"},r.a.createElement("tbody",{style:{backgroundColor:t.color||W}},r.a.createElement("tr",{style:{backgroundColor:t.color||W}},r.a.createElement("th",{key:0,className:"ribbon",style:{backgroundColor:t.color||W}},r.a.createElement("div",null)),t.entries.map(function(e,n){return e.content&&r.a.createElement("th",{key:n+1,className:"ribbon timeline-entry",style:{backgroundColor:t.color||W}},r.a.createElement("div",{className:e.shape||_}),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                      ul.timeline li:nth-child(".concat(a+1,") th.timeline-entry:nth-child(").concat(n+2,") > div:after {\n                        content: '").concat(e.content,"';\n                        background-color: ").concat(t.color||W,";\n                    ")}}))}),r.a.createElement("th",{key:t.entries.length+1,className:"ribbon",style:{backgroundColor:t.color||W}},r.a.createElement("div",null))))))}))},F=(a(41),C.trackVisibility(function(e){return r.a.createElement(r.a.Fragment,null,r.a.Children.map(e.children,function(e){return r.a.cloneElement(e,{className:"typewrite"})}),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n      .track-visible.was-visible .typewrite {\n        width: ".concat(e.width||"100%",";\n      }\n    ")}}))},{unregisterOnIntersect:!0})),G=(a(42),a(18)),H=function(e){return r.a.createElement("a",{className:f()("icon-button",e.className),"aria-label":e.ariaLabel||"".concat(e.icon," button"),href:e.href||"#",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(G.a,{icon:[e.prefix||"fas",e.icon]}))},U=(a(48),function(e){var t=e.typeMap&&e.typeMap[e.type];return r.a.createElement("div",{style:t?{backgroundColor:t.color,borderColor:t.accent}:{},className:f()("tag","tag-".concat(e.type||"none"),e.className)},r.a.createElement("span",null,e.label||""))}),z=function(e){return r.a.createElement("iframe",{height:e.height,style:{width:"100%"},scrolling:"no",title:e.title,src:"//codepen.io/alipianu/embed/".concat(e.hash,"/?height=").concat(e.height,"&theme-id=").concat(e.themeId,"&default-tab=").concat(e.defaultTab),frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen ",r.a.createElement("a",{href:"https://codepen.io/".concat(e.user,"/pen/").concat(e.hash,"/")},e.title),"by ",e.user," (",r.a.createElement("a",{href:"https://codepen.io/".concat(e.user)},"@",e.user),") on ",r.a.createElement("a",{href:"https://codepen.io"},"CodePen"),".")},J=(a(49),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={elapsed:0,maxDots:4,loaded:!1,error:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){return e.setState({elapsed:(e.state.elapsed+1)%e.state.maxDots})},2e3);this.props.loader?this.props.loader().then(function(a){e.props.onSuccess&&e.props.onSuccess(a),e.setState({loaded:!0},function(){return clearInterval(t)})},function(a){e.props.onError&&e.props.onSuccess(a),e.setState({error:a},function(){return clearInterval(t)})}):this.setState({loaded:!0},function(){return clearInterval(t)})}},{key:"loadingText",value:function(){for(var e=[],t=!1,a=this.state.elapsed,n=this.state.maxDots;n>0;--n)t||a%n||0===a||(t=!0),e=[r.a.createElement("span",{key:n,className:f()("loader-text",t?"":"hidden")},".")].concat(Object(S.a)(e));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"loader-text"},"Loading"),e)}},{key:"render",value:function(){return!this.state.error&&this.state.loaded?this.props.children:r.a.createElement("div",{className:f()("loader",this.state.error?"error":"",this.state.loaded?"loaded":"loading")},this.props.animation&&r.a.createElement(this.props.animation,{title:this.state.error?r.a.createElement("span",{className:"loader-text"},"ERROR: An error occured"):this.loadingText()}))}}]),t}(r.a.Component)),Y=(a(50),a(61)),$=(a(51),0),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).id=$++,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:f()("shape",this.props.type,this.props.animated===this.id&&"animated")},r.a.Children.map(this.props.children||[],function(t){return r.a.cloneElement(t,{parentId:e.id,animationChange:e.props.animationChange})}))}}]),t}(r.a.Component),K=(a(52),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={color:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.subscription=this.props.animationChange.subscribe({next:function(t){return e.props.parentId===t&&e.updateColor()}})}},{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"updateColor",value:function(){var e=function(){var e=function(){return Math.floor(256*Math.random())};return"rgba(".concat(e(),", ").concat(e(),", ").concat(e(),", 0.7)")},t="rect"===this.props.type?{backgroundColor:e()}:{borderColor:"transparent transparent ".concat(e()," transparent")};this.setState({color:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:f()("shape-face",this.props.type),style:this.state.color})}}]),t}(r.a.Component)),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={animated:null,animationChange:new Y.a},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.animationInterval=setInterval(function(){do{var t=Math.floor(Math.random()*($+1))}while(t===e.state.animated);e.setState({animated:t},function(){return e.state.animationChange.next(t)})},11e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.animationInterval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"scene"},r.a.createElement("div",{className:"shapes"},r.a.createElement(q,{type:"tetrahedron",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null)),r.a.createElement(q,{type:"triang-prism",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,{type:"rect"})),r.a.createElement(q,{type:"cube",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(K,{type:"rect"}),r.a.createElement(K,{type:"rect"}),r.a.createElement(K,{type:"rect"}),r.a.createElement(K,{type:"rect"}),r.a.createElement(K,{type:"rect"}),r.a.createElement(K,{type:"rect"})),r.a.createElement(q,{type:"octahedron",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null),r.a.createElement(K,null))),this.props.title&&r.a.createElement("h3",null,this.props.title))}}]),t}(r.a.Component),X=function(e){return r.a.createElement(A,{className:"about",theme:"dark",title:e.title,headshot:e.headshot},e.message&&e.message.width&&e.message.text&&r.a.createElement(F,{width:"".concat(e.message.width,"px")},r.a.createElement("h4",null,e.message.text)),r.a.createElement("br",null),r.a.createElement("br",null),e.description&&e.description.text&&r.a.createElement(L,{links:e.description.links},e.description.text))},Z=(a(53),function(e){var t=Math.floor(12/e.data.length);return r.a.createElement(A,{theme:"light",title:e.title,description:e.description},r.a.createElement(j.Grid,{className:"grid-experience"},r.a.createElement(j.Row,null,e.data.map(function(e,a){return r.a.createElement(j.Col,{key:a,md:t,body:e.details},r.a.createElement(G.a,{icon:e.icon}),e.label&&r.a.createElement("h5",null,e.label))}))))}),ee=function(e){var t=Math.round(e.entriesPerRow||0),a=Math.floor(12/e.entriesPerRow);return r.a.createElement(A,{theme:"light",title:e.title,description:e.description},r.a.createElement(D.a,null,Object(S.a)(Array(Math.ceil(e.data.length/t)).keys()).map(function(n){var l=n*t;return r.a.createElement(v.a,{key:n,className:"justify-content-md-center"},e.data.slice(l,l+t).map(function(e,t){return r.a.createElement(h.a,{key:t,md:a},r.a.createElement(z,{title:e.title,hash:e.hash,user:"alipianu",height:300,defaultTab:"result"}))}))})))},te=a(24),ae=function(e){var t=Math.round(e.entriesPerRow||0),a=Math.floor(12/e.entriesPerRow);return r.a.createElement(A,{theme:"dark",title:e.title,description:e.description},r.a.createElement(D.a,null,Object(S.a)(Array(Math.ceil(e.data.projects.length/t)).keys()).map(function(n){var l=n*t;return r.a.createElement(v.a,{key:n,className:"justify-content-md-center"},e.data.projects.slice(l,l+t).map(function(t,n){return r.a.createElement(h.a,{key:n,md:a},r.a.createElement(T,Object(te.a)({},t,{tagMap:e.data.tagMap})))}))})))},ne=(a(54),function(e){var t=Math.round(e.entriesPerRow||0),a=Math.floor(12/t);return r.a.createElement(A,{theme:"dark",title:e.title,description:e.description},r.a.createElement(j.Grid,{className:"grid-skills"},e.groups.map(function(e){return[r.a.createElement("h6",null,e.name)].concat(Object(S.a)(Object(S.a)(Array(Math.ceil(e.data.length/t)).keys()).map(function(n){var l=n*t;return r.a.createElement(j.Row,{key:n},e.data.slice(l,l+t).map(function(e,t){return r.a.createElement(j.Col,{key:t,md:a,body:e.details},r.a.createElement(P,{label:e.label,level:e.level}))}))})))})))}),re=(a(55),function(e){return r.a.createElement(V,{src:e.src},r.a.createElement("h1",{id:"name"},e.name||""),r.a.createElement("p",{id:"title"},e.title||""))}),le=function(e){return r.a.createElement(A,{theme:"light",title:e.title,description:e.description},r.a.createElement(D.a,null,r.a.createElement(B,{data:e.data})))},ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={data:null},a.loader=a.loader.bind(Object(d.a)(a)),a.onSuccess=a.onSuccess.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loader",value:function(){return fetch("https://api.alexlipianu.com").then(function(e){return e.json()})}},{key:"onSuccess",value:function(e){var t={};["splash","about","timeline","skills","experience","projects","pens"].forEach(function(a){var n=e.find(function(e){return e._id===a});n&&(t[a]=n)}),this.setState({data:t})}},{key:"render",value:function(){return r.a.createElement(J,{loader:this.loader,animation:Q,onSuccess:this.onSuccess,onError:this.onError},this.state.data&&r.a.createElement(r.a.Fragment,null,r.a.createElement(re,this.state.data.splash),r.a.createElement(X,this.state.data.about),r.a.createElement(le,this.state.data.timeline),r.a.createElement(ne,this.state.data.skills),r.a.createElement(Z,this.state.data.experience),r.a.createElement(ae,this.state.data.projects),r.a.createElement(ee,this.state.data.pens),r.a.createElement(I,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(16),oe=a(12),se=a(19);ce.b.add(oe.b,oe.a,oe.f,oe.e,oe.c,oe.d,oe.g,se.b,se.c,se.a),i.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[25,1,2]]]);
//# sourceMappingURL=main.1fc01e9c.chunk.js.map