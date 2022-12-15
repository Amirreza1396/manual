"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[8461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},o="Load balance",i={unversionedId:"profile-format/proxygroup/load-balance",id:"profile-format/proxygroup/load-balance",title:"Load balance",description:"A group of proxies, selection will be randomly chosen.",source:"@site/docs/profile-format/proxygroup/load-balance.md",sourceDirName:"profile-format/proxygroup",slug:"/profile-format/proxygroup/load-balance",permalink:"/docs/profile-format/proxygroup/load-balance",draft:!1,editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/proxygroup/load-balance.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fallback",permalink:"/docs/profile-format/proxygroup/fallback"},next:{title:"[Rule]",permalink:"/docs/profile-format/rule/"}},p={},u=[{value:"Sample",id:"sample",level:2},{value:"Profile sample",id:"profile-sample",level:3},{value:"Policy path sample",id:"policy-path-sample",level:3},{value:"Format",id:"format",level:2},{value:"Param",id:"param",level:2}],d={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"load-balance"},"Load balance"),(0,n.kt)("p",null,"A group of proxies, selection will be randomly chosen."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Load balance group selection can not be changed manually")),(0,n.kt)("h2",{id:"sample"},"Sample"),(0,n.kt)("h3",{id:"profile-sample"},"Profile sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"[Proxy Group]\nLoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS\n\n[Rule]\n# traffic match 'www.google.com' will be redirect through AutoTestGroup's selected proxy\nDOMAIN, www.google.com, LoadBalanceGroup\n")),(0,n.kt)("h3",{id:"policy-path-sample"},"Policy path sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"ProxyHTTP = http, 1.2.3.4, 443, username, password\nProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com\nProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false\n")),(0,n.kt)("p",null,"Just like ",(0,n.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy"},"[Proxy]")," Section definition but without section header in it."),(0,n.kt)("p",null,"Use policy path can separate proxies and rules definition, and reduce profile complexity. "),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"{group name} = load-balance, {proxies, ...}, {policy-path}, {policy-regex-filter}, hidden = {hidden}, include-all-proxies = {include-all-proxies}\n")),(0,n.kt)("h2",{id:"param"},"Param"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:null},"Note"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group name"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"name of group, will be used like a key to the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"proxies"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of proxy name defined in ",(0,n.kt)("inlineCode",{parentName:"td"},"[Proxy]")," section, divided by comma")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"policy-path"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"A list of proxy defined in url content. Content format will be presented below:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("code",null,"ProxyHTTP1 = http, 1.2.3.4, 443, username, password",(0,n.kt)("br",null),"ProxyHTTP2 = http, 1.2.3.4, 443, username, password"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"policy-regex-filter"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Usable if policy-path defined.",(0,n.kt)("br",null),"A regular expression which will apply on proxy name in policy-path url content, only proxies which match expression will be reserved.  Be aware this is a complete matching regular expression.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hidden"),(0,n.kt)("td",{parentName:"tr",align:null},"true",(0,n.kt)("br",null),"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to display this proxy group in user interface, even set to false, this group will still take effect.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"include-all-proxies"),(0,n.kt)("td",{parentName:"tr",align:null},"true",(0,n.kt)("br",null),"false"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Include all proxies defined in whole profile, can be used with ",(0,n.kt)("inlineCode",{parentName:"td"},"policy-regex-filter")," to filter some of the proxies")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"{proxies} and {policy-path} can be used together in the same proxy group")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can use a profile url as policy path url, only proxies defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"[Proxy]")," section will be used")))}s.isMDXComponent=!0}}]);