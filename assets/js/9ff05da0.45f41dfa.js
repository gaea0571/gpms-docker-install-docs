"use strict";(self.webpackChunkgpms_docker_install_docs=self.webpackChunkgpms_docker_install_docs||[]).push([[357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,k=u["".concat(s,".").concat(f)]||u[f]||l[f]||c;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={},i=void 0,a={unversionedId:"Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker",id:"Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker",title:"Windows10\u5b89\u88c5Docker",description:"Docker\u4e0b\u8f7d\u5730\u5740 https://docs.docker.com/desktop/install/windows-install/",source:"@site/docs/Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker.mdx",sourceDirName:"Step02-\u5b89\u88c5Docker",slug:"/Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker",permalink:"/docs/Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u524d\u987b\u77e5",permalink:"/docs/Step02-\u5b89\u88c5Docker/\u5b89\u88c5\u524d\u987b\u77e5"},next:{title:"Windows11\u5b89\u88c5Docker",permalink:"/docs/Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker"}},s={},p=[],d={toc:p};function l(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docker\u4e0b\u8f7d\u5730\u5740 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"https://docs.docker.com/desktop/install/windows-install/")),(0,o.kt)("h1",{id:"\u5f00\u542fhyper-v"},"\u5f00\u542fHyper-V"),(0,o.kt)("p",null,"\u524d\u5f80\u63a7\u5236\u9762\u677f\u5f00\u542f windows\u529f\u80fd Hyper-V \u7136\u540e\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StartHyper",src:r(7503).Z,width:"1108",height:"804"})),(0,o.kt)("h1",{id:"\u5b89\u88c5docker"},"\u5b89\u88c5docker"),(0,o.kt)("p",null,'\u5728\u5b89\u88c5\u9009\u62e9\u914d\u7f6e\u9879\u7684\u65f6\u5019\u4e0d\u52fe\u9009 "use WSL2 instead of Hyper-V (recommebed)";\n',(0,o.kt)("img",{alt:"docker",src:r(6054).Z,width:"1026",height:"818"}),"\n\u5b89\u88c5\u5b8c\u4e4b\u540e\u91cd\u542f\u7cfb\u7edf"))}l.isMDXComponent=!0},7503:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/StartHyper-V-5c7e73c65bd3efdc1925da6e58db1299.jpg"},6054:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/install-docker-3dfaeccbddd527d4d2f97ad29efd667a.jpg"}}]);