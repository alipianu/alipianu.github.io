(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(432)},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){},410:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){},413:function(e,t,a){},414:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},429:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);a(186),a(200),a(399);var n=a(0),r=a.n(n),l=a(181),i=a.n(l),c=(a(404),a(405),a(18)),o=a(19),s=a(21),u=a(20),d=a(56),m=a(22),h=(a(406),a(64)),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(h.api,"/").concat(e).concat(t),{redirect:"follow"}).then(function(e){var t=e.json();return e.ok||(t=t.then(function(e){return Promise.reject(e)})),t})},f=function(e){return p("v1/static","/content/".concat(e,"/version/").concat(h.version.replace(/\./g,"0")))},b=a(434),E=(a(407),a(4)),g=a.n(E),y=function(e){return r.a.createElement("div",{className:g()("body-collapse",e.expanded?"expanded":"")},e.children)},v=(a(408),r.a.forwardRef(function(e,t){return r.a.createElement("div",{ref:t,className:g()("head-collapse",e.body?"has-body":"",e.id===e.expandedId?"expanded":""),onClick:function(){return e.body&&e.onToggle(e.id)}},e.children)})),k=r.a.forwardRef(function(e,t){return r.a.createElement(b.a,{sm:e.sm,md:e.md,lg:e.lg},r.a.createElement(v,{ref:t,id:e.id,expandedId:e.expandedId,onToggle:e.onToggle,body:e.body},e.children),e.body&&r.a.createElement(y,{expanded:e.id===e.expandedId&&!e.isDesktop},e.body))});k.displayName="Collapsible.Col";var w=k,j=a(435),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isDesktop:!1,headList:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"updateIsDesktop",value:function(){var e=this.state.headList.length;e>1&&this.setState({isDesktop:this.state.headList[0].getBoundingClientRect().top===this.state.headList[e-1].getBoundingClientRect().top})}},{key:"componentDidMount",value:function(){this.updateIsDesktop(),window.addEventListener("resize",this.updateIsDesktop.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateIsDesktop.bind(this))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{className:g()(this.props.className)},r.a.Children.map(this.props.children||[],function(t,a){return"Collapsible.Col"!==t.type.displayName?t:r.a.cloneElement(t,{id:"".concat(e.props.id,"-").concat(a),expandedId:e.props.expandedId,isDesktop:e.state.isDesktop,onToggle:e.props.onToggle,ref:function(t){return t&&e.state.headList.push(t)}})})),r.a.Children.map(this.props.children||[],function(t,a){return t.props.body&&r.a.createElement(y,{expanded:"".concat(e.props.id,"-").concat(a)===e.props.expandedId&&e.state.isDesktop},t.props.body)}))}}]),t}(r.a.Component);O.displayName="Collapsible.Row";var N={Col:w,Row:O,Grid:function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={expandedId:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onToggle",value:function(e){this.setState({expandedId:this.state.expandedId&&this.state.expandedId===e?null:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:g()(this.props.className)},r.a.Children.map(this.props.children||[],function(t,a){return"Collapsible.Row"!==t.type.displayName?t:r.a.cloneElement(t,{id:a,expandedId:e.state.expandedId,onToggle:e.onToggle.bind(e)})}))}}]),t}(r.a.Component)},x=0,I={},C=new IntersectionObserver(function(e){e.forEach(function(e){var t=I[e.target.getAttribute("id")];t&&t(e)})}),M={threshold:0,unregisterOnIntersect:!1},S={trackVisibility:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a){function n(e){var a;return Object(c.a)(this,n),(a=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={id:"track-visible-".concat(x++),ref:r.a.createRef(),threshold:t.threshold||M.threshold,wasIntersected:!1,isIntersected:!1,unregisterOnIntersect:t.unregisterOnIntersect||M.unregisterOnIntersect},a.updateVisibility=a.updateVisibility.bind(Object(d.a)(a)),a}return Object(m.a)(n,a),Object(o.a)(n,[{key:"componentWillUnmount",value:function(){this.unregisterTarget()}},{key:"componentDidMount",value:function(){this.registerTarget()}},{key:"unregisterTarget",value:function(){delete I[this.state.id],C.unobserve(this.state.ref.current)}},{key:"registerTarget",value:function(){I[this.state.id]=this.updateVisibility,C.observe(this.state.ref.current)}},{key:"updateVisibility",value:function(e){e.intersectionRatio>this.state.threshold?this.state.unregisterOnIntersect?(this.setState({wasIntersected:!0}),this.unregisterTarget()):this.setState({wasIntersected:!0,isIntersected:!0}):this.setState({isIntersected:!1})}},{key:"render",value:function(){return r.a.createElement("div",{id:this.state.id,ref:this.state.ref,className:g()("track-visible",this.state.wasIntersected?"was-visible":"",this.state.isIntersected?"is-visible":"")},r.a.createElement(e,this.props))}}]),n}(r.a.Component)}},D=(a(409),function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement(Y,{className:"footer-button",ariaLabel:"Email",href:"mailto:alexlipianu@live.ca?subject=Website%20Redirect",icon:"envelope"}),r.a.createElement(Y,{className:"footer-button",ariaLabel:"LinkedIn",href:"https://ca.linkedin.com/in/alipianu",prefix:"fab",icon:"linkedin"}),r.a.createElement(Y,{className:"footer-button",ariaLabel:"GitHub",href:"https://github.com/alipianu",prefix:"fab",icon:"github"}),r.a.createElement(Y,{className:"footer-button",ariaLabel:"CodePen",href:"https://codepen.io/alipianu/",prefix:"fab",icon:"codepen"})),r.a.createElement("div",null,r.a.createElement("p",null,"@ ",e," Alexander Lipianu"),r.a.createElement("p",null,"All rights reserved")))}),L=(a(410),function(e){return r.a.createElement("a",{className:"link","aria-label":e.ariaLabel||"",href:e.href||"#",target:"_blank",rel:"noopener noreferrer"},e.children)}),T=a(37),R=function(e){var t=RegExp("(\\{\\{(".concat(Object(T.a)(e.links.keys()).join("|"),")\\}\\})"));return e.children.split("\n").map(function(a,n){var l=[];do{var i=t.exec(a);if(!i)break;l.push(r.a.createElement("span",{key:"".concat(n,"-").concat(l.length)},a.substring(0,i.index)));var c=e.links[i[2]];l.push(r.a.createElement(L,{key:"".concat(n,"-").concat(l.length),ariaLabel:c.label,href:c.href},c.label)),a=a.substring(i.index+i[0].length)}while(a.length>4);return l.push(r.a.createElement("span",{key:"".concat(n,"-").concat(l.length)},a)),r.a.createElement("p",{key:n},l)})},A=(a(411),a(438)),_=function(e){return r.a.createElement(A.a,{className:"project"},r.a.createElement("div",null,e.image&&r.a.createElement(A.a.Img,{variant:"top",src:e.image,alt:"".concat(e.title," thumbnail")})),e.links&&r.a.createElement("div",{className:"card-buttons"},e.links.download&&r.a.createElement(Y,{className:"project-button",ariaLabel:"Download",href:e.links.download,prefix:"fas",icon:"download"}),e.links.github&&r.a.createElement(Y,{className:"project-button",ariaLabel:"GitHub",href:e.links.github,prefix:"fab",icon:"github"})),r.a.createElement(A.a.Body,null,e.title&&r.a.createElement(A.a.Title,null,e.title),e.description&&r.a.createElement(A.a.Text,null,e.description),e.tools&&r.a.createElement("div",{className:"tools"},Object.keys(e.tools).map(function(t){return e.tools[t].map(function(a,n){return r.a.createElement(J,{key:n,type:t,typeMap:e.tagMap,label:a})})}))))},P=(a(412),a(436)),F=function(e){return r.a.createElement("section",{className:g()(e.theme,e.className)},r.a.createElement(P.a,null,e.title&&r.a.createElement("h2",null,e.title),e.description&&r.a.createElement("p",null,e.description),e.headshot?r.a.createElement(j.a,{className:"align-items-center"},r.a.createElement(b.a,{md:5,lg:4},r.a.createElement("img",{src:e.headshot,className:"headshot",alt:"headshot"})),r.a.createElement(b.a,{md:6,lg:7,className:"offset-md-1"},e.children)):e.children))},V=(a(413),S.trackVisibility(function(e){return r.a.createElement("div",{className:"skill skill-".concat(e.level||"none")},e.label&&r.a.createElement("div",{className:"label"},e.label),r.a.createElement("div",{className:"skill-bar"},r.a.createElement("div",null)))},{unregisterOnIntersect:!0})),W=(a(414),function(e){return r.a.createElement("div",{className:"splash",style:{backgroundImage:"url(".concat(e.src,")")}},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.children)))))}),B=(a(415),"transparent"),G="circle",H=function(e){return e.data&&e.data.length&&r.a.createElement("ul",{className:"timeline"},e.data.map(function(t,a){return r.a.createElement("li",{key:a,style:{width:"".concat(100/e.data.length,"%")}},t.year&&r.a.createElement("div",{className:"timeline-label"},t.year),r.a.createElement("table",{className:"timeline-ribbon"},r.a.createElement("tbody",{style:{backgroundColor:t.color||B}},r.a.createElement("tr",{style:{backgroundColor:t.color||B}},r.a.createElement("th",{key:0,className:"ribbon",style:{backgroundColor:t.color||B}},r.a.createElement("div",null)),t.entries.map(function(e,n){return e.content&&r.a.createElement("th",{key:n+1,className:"ribbon timeline-entry",style:{backgroundColor:t.color||B}},r.a.createElement("div",{className:e.shape||G}),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                      ul.timeline li:nth-child(".concat(a+1,") th.timeline-entry:nth-child(").concat(n+2,") > div:after {\n                        content: '").concat(e.content,"';\n                        background-color: ").concat(t.color||B,";\n                    ")}}))}),r.a.createElement("th",{key:t.entries.length+1,className:"ribbon",style:{backgroundColor:t.color||B}},r.a.createElement("div",null))))))}))},U=(a(416),S.trackVisibility(function(e){return r.a.createElement(r.a.Fragment,null,r.a.Children.map(e.children,function(e){return r.a.cloneElement(e,{className:"typewrite"})}),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n      .track-visible.was-visible .typewrite {\n        width: ".concat(e.width||"100%",";\n      }\n    ")}}))},{unregisterOnIntersect:!0})),z=(a(417),a(96)),Y=function(e){return r.a.createElement("a",{className:g()("icon-button",e.className),"aria-label":e.ariaLabel||"".concat(e.icon," button"),href:e.href||"#",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(z.a,{icon:[e.prefix||"fas",e.icon]}))},J=(a(423),function(e){var t=e.typeMap&&e.typeMap[e.type];return r.a.createElement("div",{style:t?{backgroundColor:t.color,borderColor:t.accent}:{},className:g()("tag","tag-".concat(e.type||"none"),e.className)},r.a.createElement("span",null,e.label||""))}),X=(a(424),function(e){return r.a.createElement("div",{className:"codepen"},r.a.createElement("iframe",{height:e.height,style:{width:"100%"},scrolling:"no",title:e.title,src:"//codepen.io/alipianu/embed/".concat(e.hash,"/?height=").concat(e.height,"&theme-id=").concat(e.themeId,"&default-tab=").concat(e.defaultTab),frameBorder:"no",allowtransparency:"true",allowFullScreen:!0},"See the Pen ",r.a.createElement("a",{href:"https://codepen.io/".concat(e.user,"/pen/").concat(e.hash,"/")},e.title),"by ",e.user," (",r.a.createElement("a",{href:"https://codepen.io/".concat(e.user)},"@",e.user),") on ",r.a.createElement("a",{href:"https://codepen.io"},"CodePen"),"."))}),$=(a(425),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={elapsed:0,maxDots:4,loaded:!1,error:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){return e.setState({elapsed:(e.state.elapsed+1)%e.state.maxDots})},2e3);this.props.loader?this.props.loader().then(function(a){e.props.onSuccess&&e.props.onSuccess(a),e.setState({loaded:!0},function(){return clearInterval(t)})},function(a){e.props.onError&&e.props.onSuccess(a),e.setState({error:a},function(){return clearInterval(t)})}):this.setState({loaded:!0},function(){return clearInterval(t)})}},{key:"loadingText",value:function(){for(var e=[],t=!1,a=this.state.elapsed,n=this.state.maxDots;n>0;--n)t||a%n||0===a||(t=!0),e=[r.a.createElement("span",{key:n,className:g()("loader-text",t?"":"hidden")},".")].concat(Object(T.a)(e));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"loader-text"},"LOADING"),e)}},{key:"render",value:function(){return!this.state.error&&this.state.loaded?this.props.children:r.a.createElement("div",{className:g()("loader",this.state.error?"error":"",this.state.loaded?"loaded":"loading")},this.props.animation&&r.a.createElement(this.props.animation,{title:this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"loader-text"},"ERROR:"),r.a.createElement("p",{className:"loader-text"},this.props.errorMessage?this.props.errorMessage:"An unexpected error has occured")):r.a.createElement("h2",null,this.loadingText())}))}}]),t}(r.a.Component)),q=(a(426),a(437)),K=(a(427),0),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).id=K++,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:g()("shape",this.props.type,this.props.animated===this.id&&"animated")},r.a.Children.map(this.props.children||[],function(t){return r.a.cloneElement(t,{parentId:e.id,animationChange:e.props.animationChange})}))}}]),t}(r.a.Component),Z=(a(428),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={color:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.subscription=this.props.animationChange.subscribe({next:function(t){return e.props.parentId===t&&e.updateColor()}})}},{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"updateColor",value:function(){var e=function(){var e=function(){return Math.floor(256*Math.random())};return"rgba(".concat(e(),", ").concat(e(),", ").concat(e(),", 0.7)")},t="rect"===this.props.type?{backgroundColor:e()}:{borderColor:"transparent transparent ".concat(e()," transparent")};this.setState({color:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:g()("shape-face",this.props.type),style:this.state.color})}}]),t}(r.a.Component)),ee=function(e,t){return Math.floor(Math.random()*(t-e))+e},te=function(){var e="rotateY(0deg) rotateX(0deg) scale(0)",t="rotateY(".concat(ee(-400,400),"deg) rotateX(").concat(ee(-400,400),"deg) scale(1)");return"\n    @-webkit-keyframes spin-shapes {\n      from {\n        -webkit-transform: ".concat(e,";\n      }\n      to {\n        -webkit-transform: ").concat(t,";\n      }\n    }\n    @-moz-keyframes spin-shapes {\n      from {\n        -webkit-transform: ").concat(e,";\n      }\n      to {\n        -webkit-transform: ").concat(t,";\n      }\n    }\n    @keyframes spin-shapes {\n      from {\n        -webkit-transform: ").concat(e,";\n            -ms-transform: ").concat(e,";\n                transform: ").concat(e,";\n      }\n      to {\n        -webkit-transform: ").concat(t,";\n            -ms-transform: ").concat(t,";\n                transform: ").concat(t,";\n      }\n    }\n  ")},ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={animated:null,animationChange:new q.a,keyframe:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=ee(0,K);this.setState({animated:t,keyframe:te()},function(){return e.state.animationChange.next(t)}),this.animationInterval=setInterval(function(){do{var t=ee(0,K)}while(t===e.state.animated);e.setState({animated:t,keyframe:te()},function(){return e.state.animationChange.next(t)})},11e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.animationInterval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"scene"},r.a.createElement("div",{className:"shapes"},r.a.createElement(Q,{type:"tetrahedron",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null)),r.a.createElement(Q,{type:"triang-prism",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,{type:"rect"})),r.a.createElement(Q,{type:"cube",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(Z,{type:"rect"}),r.a.createElement(Z,{type:"rect"}),r.a.createElement(Z,{type:"rect"}),r.a.createElement(Z,{type:"rect"}),r.a.createElement(Z,{type:"rect"}),r.a.createElement(Z,{type:"rect"})),r.a.createElement(Q,{type:"octahedron",animated:this.state.animated,animationChange:this.state.animationChange},r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null))),this.props.title,r.a.createElement("style",{dangerouslySetInnerHTML:{__html:this.state.keyframe}}))}}]),t}(r.a.Component),ne=function(e){return r.a.createElement(F,{className:"about",theme:"dark",title:e.title,headshot:e.headshot},e.message&&e.message.width&&e.message.text&&r.a.createElement(U,{width:"".concat(e.message.width,"px")},r.a.createElement("h4",null,e.message.text)),r.a.createElement("br",null),r.a.createElement("br",null),e.description&&e.description.text&&r.a.createElement(R,{links:e.description.links},e.description.text))},re=(a(429),function(e){var t=Math.floor(12/e.data.length);return r.a.createElement(F,{theme:"light",title:e.title,description:e.description},r.a.createElement(N.Grid,{className:"grid-experience"},r.a.createElement(N.Row,null,e.data.map(function(e,a){return r.a.createElement(N.Col,{key:a,md:t,body:e.details},r.a.createElement(z.a,{icon:e.icon}),e.label&&r.a.createElement("h5",null,e.label))}))))}),le=function(e){var t=Math.round(e.entriesPerRow||0),a=Math.floor(12/e.entriesPerRow);return r.a.createElement(F,{theme:"light",title:e.title,description:e.description},r.a.createElement(P.a,null,Object(T.a)(Array(Math.ceil(e.data.length/t)).keys()).map(function(n){var l=n*t;return r.a.createElement(j.a,{key:n,className:"justify-content-md-center"},e.data.slice(l,l+t).map(function(e,t){return r.a.createElement(b.a,{key:t,md:a},r.a.createElement(X,{title:e.title,hash:e.hash,user:"alipianu",height:300,defaultTab:"result"}))}))})))},ie=a(184),ce=function(e){var t=Math.round(e.entriesPerRow||0),a=Math.floor(12/e.entriesPerRow);return r.a.createElement(F,{theme:"dark",title:e.title,description:e.description},r.a.createElement(P.a,null,Object(T.a)(Array(Math.ceil(e.data.projects.length/t)).keys()).map(function(n){var l=n*t;return r.a.createElement(j.a,{key:n,className:"justify-content-md-center"},e.data.projects.slice(l,l+t).map(function(t,n){return r.a.createElement(b.a,{key:n,md:a},r.a.createElement(_,Object(ie.a)({},t,{tagMap:e.data.tagMap})))}))})))},oe=(a(430),function(e){var t=Math.round(e.entriesPerRow||0),a=Math.floor(12/t);return r.a.createElement(F,{theme:"dark",title:e.title,description:e.description},r.a.createElement(N.Grid,{className:"grid-skills"},e.groups.map(function(e){return[r.a.createElement("h6",null,e.name,":")].concat(Object(T.a)(Object(T.a)(Array(Math.ceil(e.data.length/t)).keys()).map(function(n){var l=n*t;return r.a.createElement(N.Row,{key:n},e.data.slice(l,l+t).map(function(e,t){return r.a.createElement(N.Col,{key:t,md:a,body:Array.isArray(e.details)&&e.details.length?r.a.createElement("ul",null,e.details.map(function(e,t){return r.a.createElement("li",{key:t},e)})):e.details},r.a.createElement(V,{label:e.label,level:e.level}))}))})))})))}),se=(a(431),function(e){return r.a.createElement(W,{src:e.src},r.a.createElement("h1",{id:"name"},e.name||""),r.a.createElement("p",{id:"title"},e.title||""))}),ue=function(e){return r.a.createElement(F,{theme:"light",title:e.title,description:e.description},r.a.createElement(P.a,null,r.a.createElement(H,{data:e.data})))},de=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e)))._contentID=0,a.state={data:null,errorMessage:"api.alexlipianu.com is currently unavailable or cannot be reached"},a.loader=a.loader.bind(Object(d.a)(a)),a.onSuccess=a.onSuccess.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loader",value:function(){return f(this._contentID)}},{key:"onSuccess",value:function(e){var t=e.data;this.setState({data:t})}},{key:"render",value:function(){return r.a.createElement($,{loader:this.loader,animation:ae,onSuccess:this.onSuccess,errorMessage:this.state.errorMessage},this.state.data&&r.a.createElement(r.a.Fragment,null,r.a.createElement(se,this.state.data.splash),r.a.createElement(ne,this.state.data.about),r.a.createElement(ue,this.state.data.timeline),r.a.createElement(oe,this.state.data.skills),r.a.createElement(re,this.state.data.experience),r.a.createElement(ce,this.state.data.projects),r.a.createElement(le,this.state.data.pens),r.a.createElement(D,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(78),he=a(49),pe=a(97);me.b.add(he.b,he.a,he.f,he.e,he.c,he.d,he.g,pe.b,pe.c,pe.a),i.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e){e.exports={version:"1.0.0",api:"https://api.alexlipianu.com"}}},[[185,1,2]]]);
//# sourceMappingURL=main.c71e61ab.chunk.js.map