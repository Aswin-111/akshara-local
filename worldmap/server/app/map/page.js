(()=>{var e={};e.id=883,e.ids=[883],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7790:e=>{"use strict";e.exports=require("assert")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},5240:e=>{"use strict";e.exports=require("https")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},4175:e=>{"use strict";e.exports=require("tty")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},3991:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d}),r(2139),r(6765),r(996);var i=r(170),a=r(5002),s=r(3876),o=r.n(s),n=r(6299),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["map",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2139)),"E:\\sde\\worldmap\\src\\app\\map\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6765)),"E:\\sde\\worldmap\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\sde\\worldmap\\src\\app\\map\\page.js"],u="/map/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/map/page",pathname:"/map",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3604:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},6371:()=>{},8945:(e,t,r)=>{Promise.resolve().then(r.bind(r,7774))},5889:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(352),a=r(6870),s=r(7247),o=a._(r(8964)),n=i._(r(6817)),l=i._(r(9901)),d=r(1807),c=r(1098),u=r(8127);r(8963);let p=r(1579),f=i._(r(9857)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,a,s,o){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let x=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:a,height:n,width:l,decoding:d,className:c,style:u,fetchPriority:p,placeholder:f,loading:m,unoptimized:x,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:j,sizesInput:A,onLoad:S,onError:P,..._}=e;return(0,s.jsx)("img",{..._,...h(p),loading:m,width:l,height:n,decoding:d,"data-nimg":y?"fill":"1",className:c,style:u,sizes:a,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,f,b,v,w,x,A))},[r,f,b,v,w,P,x,A,t]),onLoad:e=>{g(e.currentTarget,f,b,v,w,x,A)},onError:e=>{j(!0),"empty"!==f&&w(!0),P&&P(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&n.default.preload?(n.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),i=(0,o.useContext)(u.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=m||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:n,onLoadingComplete:l}=e,g=(0,o.useRef)(n);(0,o.useEffect)(()=>{g.current=n},[n]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[b,v]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:A,meta:S}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:b,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{...A,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,s.jsx)(y,{isAppRouter:!r,imgAttributes:A}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8679:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.AmpContext},5142:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.HeadManagerContext},8127:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.ImageConfigContext},1579:(e,t,r)=>{"use strict";e.exports=r(4573).vendored.contexts.RouterContext},7892:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1807:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),r(8963);let i=r(8226),a=r(1098);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var r;let n,l,d,{src:c,sizes:u,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:x,height:y,fill:b=!1,style:v,overrideSrc:w,onLoad:j,onLoadingComplete:A,placeholder:S="empty",blurDataURL:P,fetchPriority:_,layout:E,objectFit:C,objectPosition:k,lazyBoundary:O,lazyRoot:N,...M}=e,{imgConf:z,showAltText:I,blurComplete:D,defaultLoader:R}=t,F=z||a.imageConfigDefault;if("allSizes"in F)n=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);n={...F,allSizes:e,deviceSizes:t}}if(void 0===R)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let $=M.loader||R;delete M.loader,delete M.srcSet;let q="__next_img_default"in $;if(q){if("custom"===n.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=$;$=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!u&&(u=t)}let G="",T=o(x),B=o(y);if("object"==typeof(r=c)&&(s(r)||void 0!==r.src)){let e=s(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,G=e.src,!b){if(T||B){if(T&&!B){let t=T/e.width;B=Math.round(e.height*t)}else if(!T&&B){let t=B/e.height;T=Math.round(e.width*t)}}else T=e.width,B=e.height}}let U=!f&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,U=!1),n.unoptimized&&(p=!0),q&&c.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(p=!0),f&&(_="high");let L=o(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:k}:{},I?{}:{color:"transparent"},v),W=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:B,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:H.objectFit})+'")':'url("'+S+'")',Y=W?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Q=function(e){let{config:t,src:r,unoptimized:i,width:a,quality:s,sizes:o,loader:n}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}}(t,a,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>n({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:n({config:t,src:r,quality:s,width:l[c]})}}({config:n,src:c,unoptimized:p,width:T,quality:L,sizes:u,loader:$});return{props:{...M,loading:U?"lazy":m,fetchPriority:_,width:T,height:B,decoding:"async",className:g,style:{...H,...Y},sizes:Q.sizes,srcSet:Q.srcSet,src:w||Q.src},meta:{unoptimized:p,priority:f,placeholder:S,fill:b}}}},9901:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return u}});let i=r(352),a=r(6870),s=r(7247),o=a._(r(8964)),n=i._(r(8070)),l=r(8679),d=r(5142),c=r(7892);function u(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(8963);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return a=>{let s=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=a.props[t],r=i[t]||new Set;("name"!==t||!o)&&r.has(e)?s=!1:(r.add(e),i[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),i=(0,o.useContext)(d.HeadManagerContext);return(0,s.jsx)(n.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8226:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:a,blurDataURL:s,objectFit:o}=e,n=i?40*i:t,l=a?40*a:r,d=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1098:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1561:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return n}});let i=r(352),a=r(1807),s=r(5889),o=i._(r(9857));function n(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},9857:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},8070:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=r(8964),a=()=>{},s=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function n(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),n(),a(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),a(()=>(r&&(r._pendingUpdate=n),()=>{r&&(r._pendingUpdate=n)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},7774:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eg});var i,a=r(7247),s=r(8964),o=r(1561),n=r.n(o);let l={src:"/_next/static/media/logo.40042dde.png",height:55,width:56,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAw0lEQVR42mMAgdhJgYxQWh6ITRmAwGlacPLCOu+1DDAQNymQGSgZFdfrx1jZ48ccPTnoYGFfQAuyblkgdoCyG4Ea/kVODtoM4jBBBINEovsDuIB8PSDeBsS3gYrOMsBAZI8/Y9yUoBCgxFYgvhY3OegbkJ4MNhqoMi5uUtCCmIkBG4D8EqBkaOzEwIDEGaFyIAV+QJ3uAfWuygxCDBkMDAxhQBwPxFkMogzuDEhAUtJKREPeQUpPxlbcTMpa1FHCUlgfANPOR+KN26zLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var d=r(863);let c={data:""},u=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||c,p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,g=(e,t)=>{let r="",i="",a="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+o+";":i+="f"==s[1]?g(o,s):s+"{"+g(o,"k"==s[1]?"":t)+"}":"object"==typeof o?i+=g(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=g.p?g.p(s,o):s+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+i},h={},x=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+x(e[r]);return t}return e},y=(e,t,r,i,a)=>{let s=x(e),o=h[s]||(h[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!h[o]){let t=s!==e?e:(e=>{let t,r,i=[{}];for(;t=p.exec(e.replace(f,""));)t[4]?i.shift():t[3]?(r=t[3].replace(m," ").trim(),i.unshift(i[0][r]=i[0][r]||{})):i[0][t[1]]=t[2].replace(m," ").trim();return i[0]})(e);h[o]=g(a?{["@keyframes "+o]:t}:t,r?"":"."+o)}let n=r&&h.g?h.g:null;return r&&(h.g=h[o]),((e,t,r,i)=>{i?t.data=t.data.replace(i,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(h[o],t,i,n),o},b=(e,t,r)=>e.reduce((e,i,a)=>{let s=t[a];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":g(e,""):!1===e?"":e}return e+i+(null==s?"":s)},"");function v(e){let t=this||{},r=e.call?e(t.p):e;return y(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,u(t.target),t.g,t.o,t.k)}v.bind({g:1});let w,j,A,S=v.bind({k:1});function P(e,t){let r=this||{};return function(){let i=arguments;function a(s,o){let n=Object.assign({},s),l=n.className||a.className;r.p=Object.assign({theme:j&&j()},n),r.o=/ *go\d+/.test(l),n.className=v.apply(r,i)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),A&&d[0]&&A(n),w(d,n)}return t?t(a):a}}var _=e=>"function"==typeof e,E=(e,t)=>_(e)?e(t):e,C=(()=>{let e=0;return()=>(++e).toString()})(),k=(()=>{let e;return()=>e})(),O=new Map,N=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),R({type:4,toastId:e})},1e3);O.set(e,t)},M=e=>{let t=O.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&M(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?z(e,{type:1,toast:r}):z(e,{type:0,toast:r});case 3:let{toastId:i}=t;return i?N(i):e.toasts.forEach(e=>{N(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},I=[],D={toasts:[],pausedAt:void 0},R=e=>{D=z(D,e),I.forEach(e=>{e(D)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[t,r]=(0,s.useState)(D);(0,s.useEffect)(()=>(I.push(r),()=>{let e=I.indexOf(r);e>-1&&I.splice(e,1)}),[t]);let i=t.toasts.map(t=>{var r,i;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...t,toasts:i}},q=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),G=e=>(t,r)=>{let i=q(t,e,r);return R({type:2,toast:i}),i.id},T=(e,t)=>G("blank")(e,t);T.error=G("error"),T.success=G("success"),T.loading=G("loading"),T.custom=G("custom"),T.dismiss=e=>{R({type:3,toastId:e})},T.remove=e=>R({type:4,toastId:e}),T.promise=(e,t,r)=>{let i=T.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(T.success(E(t.success,e),{id:i,...r,...null==r?void 0:r.success}),e)).catch(e=>{T.error(E(t.error,e),{id:i,...r,...null==r?void 0:r.error})}),e};var B=(e,t)=>{R({type:1,toast:{id:e,height:t}})},U=()=>{R({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:r}=$(e);(0,s.useEffect)(()=>{if(r)return;let e=Date.now(),i=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),r)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[t,r]);let i=(0,s.useCallback)(()=>{r&&R({type:6,time:Date.now()})},[r]),a=(0,s.useCallback)((e,r)=>{let{reverseOrder:i=!1,gutter:a=8,defaultPosition:s}=r||{},o=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...i?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:B,startPause:U,endPause:i,calculateOffset:a}}},H=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,W=S`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=S`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Q=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=S`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,Z=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=S`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,X=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ee=P("div")`
  position: absolute;
`,et=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,er=S`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ei=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${er} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ea=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return void 0!==t?"string"==typeof t?s.createElement(ei,null,t):t:"blank"===r?null:s.createElement(et,null,s.createElement(J,{...i}),"loading"!==r&&s.createElement(ee,null,"error"===r?s.createElement(Q,{...i}):s.createElement(X,{...i})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,en=P("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,el=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ed=(e,t)=>{let r=e.includes("top")?1:-1,[i,a]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(r),eo(r)];return{animation:t?`${S(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${S(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ec=s.memo(({toast:e,position:t,style:r,children:i})=>{let a=e.height?ed(e.position||t||"top-center",e.visible):{opacity:0},o=s.createElement(ea,{toast:e}),n=s.createElement(el,{...e.ariaProps},E(e.message,e));return s.createElement(en,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof i?i({icon:o,message:n}):s.createElement(s.Fragment,null,o,n))});i=s.createElement,g.p=void 0,w=i,j=void 0,A=void 0;var eu=({id:e,className:t,style:r,onHeightUpdate:i,children:a})=>{let o=s.useCallback(t=>{if(t){let r=()=>{i(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return s.createElement("div",{ref:o,className:t,style:r},a)},ep=(e,t)=>{let r=e.includes("top"),i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...i}},ef=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,em=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:a,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:d}=L(r);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let o=r.position||t,n=ep(o,d.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return s.createElement(eu,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ef:"",style:n},"custom"===r.type?E(r.message,r):a?a(r):s.createElement(ec,{toast:r,position:o}))}))};function eg(){let e=(0,s.useRef)(null),[t,r]=(0,s.useState)(null),[i,o]=(0,s.useState)(""),[c,u]=(0,s.useState)(0),[p,f]=(0,s.useState)([]),[m,g]=(0,s.useState)([]),[h,x]=(0,s.useState)({}),[y,b]=(0,s.useState)({clicked:!1,char:0}),[v,w]=(0,s.useState)({toggle:!1,char:0}),[j,A]=(0,s.useState)(!1),[S,P]=(0,s.useState)(!1),[_,E]=(0,s.useState)([]),C=()=>{_.forEach(e=>{e.setMap(null)}),E([])},k=async e=>{try{let r=await d.Z.post("http://localhost:7000/api/v1/map/language-details",{language:e}),i=["id","Sl No","createdAt","updatedAt"],a={},s=r.data.languageDetails;if(Object.entries(s).map(([e,t])=>{!i.includes(e.toString())&&t&&(a[e]=t)}),w({toggle:!v.toggle,char:e}),x(r.data.languageDetails),P(!0),C(),r.data.polygons&&t){let e=[];r.data.polygons.forEach((r,i)=>{r.coordinates&&Array.isArray(r.coordinates)&&r.coordinates.forEach((r,i)=>{if(Array.isArray(r)&&r.length>0){let i=r.map(e=>{if(Array.isArray(e)&&2===e.length){let[t,r]=e.map(parseFloat);if(isFinite(r)&&isFinite(t))return{lat:r,lng:t}}return null}).filter(e=>null!==e);if(i.length>2){let r=new window.google.maps.Polygon({paths:i,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35});r.setMap(t),e.push(r)}}})}),E(e)}}catch(e){console.error("Error fetching language details:",e)}},O=e=>{let t=m.filter(t=>t.startsWith(e));!1===y.clicked&&0===y.char?t.length>0&&(b({clicked:!0,char:e}),f(t)):y.char===e?(b({clicked:!1,char:0}),f(m)):t.length>0&&(b({clicked:!0,char:e}),f(t))};return(0,a.jsxs)("div",{className:"flex",children:[a.jsx("div",{children:a.jsx(em,{})}),j&&(0,a.jsxs)("div",{className:"w-[20vw] h-[100vh] bg-white flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center absolute bottom-[16vh]",children:[a.jsx(n(),{src:l,className:"w-11 h-11",alt:"logo"}),a.jsx("h3",{className:"text-black font-semibold text-xl mt-5",children:i}),(0,a.jsxs)("p",{className:"text-black mt-3",children:["Total Languages ",c]})]}),!1===S?(0,a.jsxs)("div",{className:"w-full px-4 overflow-y-scroll flex justify-center",children:[a.jsx("div",{className:"flex gap-y-5 flex-col absolute left-3 mt-5 max-h-[55vh] overflow-y-scroll",children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((e,t)=>a.jsx("div",{className:`px-2 py-2 border-2 flex justify-center items-center ${!0===y.clicked&&y.char===e?"border-green-500 bg-[#5f9253] text-white":"border-slate-400 text-black"} rounded-xl cursor-pointer`,onClick:()=>O(e),children:e},t))}),a.jsx("div",{className:"w-[40%] max-h-[55vh]",children:p.map((e,t)=>a.jsx("div",{style:{overflowX:"hidden"},className:`px-7 py-3 mt-5 border-2 ${!0===v.toggle&&v.char===e?"text-white bg-[#5f9253] border-green-500":"text-black border-slate-400"} flex justify-center rounded-[0.7rem] cursor-pointer`,onClick:()=>k(e),children:e},t))})]}):a.jsx("div",{children:a.jsx("div",{className:"w-full py-5 text-black text-[1rem] rounded-xl",children:v.toggle&&(0,a.jsxs)("div",{className:"w-full flex flex-col items-center px-10",children:[a.jsx("div",{className:"overflow-y-scroll overflow-x-hidden w-[16vw] h-[30vh] rounded-xl px-10 bg-white",children:a.jsx("div",{className:"w-full",children:h&&Object.keys(h).length>0?Object.entries(h).map(([e,t])=>a.jsx("h2",{className:"text-black mt-3 text-sm",children:t&&!["id","Sl_No","createdAt","updatedAt"].includes(String(e).trim())?`${e.replace(/_/g," ")} : ${null!=t?t.toString():""}`:""},e)):a.jsx("p",{className:"text-black mt-3 text-xl",children:"No data available"})})}),a.jsx("button",{className:"w-[60%] bg-red-400 text-white py-3 rounded-xl mt-3",onClick:()=>{w({toggle:!v.toggle,char:0}),P(!1),b({clicked:!1,char:0}),f(m),C()},children:"Close"})]})})})]}),a.jsx("div",{className:"main",children:a.jsx("div",{ref:e,className:`${j?"w-[80vw] h-[100vh] relative":"w-[100vw] h-[100vh] relative"}`,id:"map"})})]})}},6765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>o});var i=r(2051),a=r(8979),s=r.n(a);r(5023);let o={title:"Akshara worldmap",description:"Generated by create next app"};function n({children:e}){return(0,i.jsxs)("html",{lang:"en","data-theme":"light",children:[i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.jsx("body",{className:s().className,children:e})]})}},2139:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(5347).createProxy)(String.raw`E:\sde\worldmap\src\app\map\page.js#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(4564);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[379,682,564,863],()=>r(3991));module.exports=i})();