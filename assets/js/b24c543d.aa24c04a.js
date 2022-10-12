"use strict";(self.webpackChunkgpms_docker_install_docs=self.webpackChunkgpms_docker_install_docs||[]).push([[421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||l[f]||c;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<c;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={},s=void 0,a={unversionedId:"Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker",id:"Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker",title:"Windows11\u5b89\u88c5Docker",description:"Docker\u4e0b\u8f7d\u5730\u5740 https://docs.docker.com/desktop/install/windows-install/",source:"@site/docs/Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker.mdx",sourceDirName:"Step02-\u5b89\u88c5Docker",slug:"/Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker",permalink:"/docs/Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Step02-\u5b89\u88c5Docker/Windows11\u5b89\u88c5Docker.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows10\u5b89\u88c5Docker",permalink:"/docs/Step02-\u5b89\u88c5Docker/Windows10\u5b89\u88c5Docker"}},i={},p=[],d={toc:p};function l(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docker\u4e0b\u8f7d\u5730\u5740 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"https://docs.docker.com/desktop/install/windows-install/")),(0,o.kt)("h1",{id:"\u5f00\u542fhyper-v"},"\u5f00\u542fHyper-V"),(0,o.kt)("p",null,"\u524d\u5f80\u63a7\u5236\u9762\u677f\u5f00\u542f windows\u529f\u80fd Hyper-V \u7136\u540e\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf"),(0,o.kt)("img",{src:r(2786).Z}),(0,o.kt)("h1",{id:"\u5b89\u88c5docker"},"\u5b89\u88c5docker"),(0,o.kt)("p",null,'\u5728\u5b89\u88c5\u9009\u62e9\u914d\u7f6e\u9879\u7684\u65f6\u5019\u4e0d\u52fe\u9009 "use WSL2 instead of Hyper-V (recommebed)";'),(0,o.kt)("img",{src:r(104).Z}),"\u5b89\u88c5\u5b8c\u4e4b\u540e\u91cd\u542f\u7cfb\u7edf")}l.isMDXComponent=!0},2786:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/StartHyper-V-5c7e73c65bd3efdc1925da6e58db1299.jpg"},104:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/install-docker-3dfaeccbddd527d4d2f97ad29efd667a.jpg"}}]);