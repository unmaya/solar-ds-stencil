/*! For license information please see main.11a3aee3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksolar_ds_stencil=self.webpackChunksolar_ds_stencil||[]).push([[179],{"./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./solar-button.entry.js":["./dist/esm/solar-button.entry.js",113],"./solar-tag.entry.js":["./dist/esm/solar-tag.entry.js",247]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$",module.exports=webpackAsyncContext},"./.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var index_ab645cdb=__webpack_require__("./dist/esm/index-ab645cdb.js");!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)},HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a)}}();var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),global_variables=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/global-variables.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(global_variables.Z,options);global_variables.Z&&global_variables.Z.locals&&global_variables.Z.locals;((win,options)=>{"undefined"==typeof window?Promise.resolve():(0,index_ab645cdb.p)().then((()=>(0,index_ab645cdb.b)([["solar-button",[[1,"solar-button",{label:[1],type:[1],size:[1],counter:[32]}]]],["solar-tag",[[1,"solar-tag",{variant:[1],label:[1],color:[1],counter:[32]}]]]],options)))})();const _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}}},"./dist/esm/index-ab645cdb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>bootstrapLazy,h:()=>h,p:()=>promiseResolve,r:()=>registerInstance});let scopeId,hostTagName,queuePending=!1;const EMPTY_OBJ={},isComplexType=o=>"object"===(o=typeof o)||"function"===o;function queryNonceMetaTagContent(doc){var _a,_b,_c;return null!==(_c=null===(_b=null===(_a=doc.head)||void 0===_a?void 0:_a.querySelector('meta[name="csp-nonce"]'))||void 0===_b?void 0:_b.getAttribute("content"))&&void 0!==_c?_c:void 0}const h=(nodeName,vnodeData,...children)=>{let child=null,simple=!1,lastSimple=!1;const vNodeChildren=[],walk=c=>{for(let i=0;i<c.length;i++)child=c[i],Array.isArray(child)?walk(child):null!=child&&"boolean"!=typeof child&&((simple="function"!=typeof nodeName&&!isComplexType(child))&&(child=String(child)),simple&&lastSimple?vNodeChildren[vNodeChildren.length-1].$text$+=child:vNodeChildren.push(simple?newVNode(null,child):child),lastSimple=simple)};if(walk(children),vnodeData){const classData=vnodeData.className||vnodeData.class;classData&&(vnodeData.class="object"!=typeof classData?classData:Object.keys(classData).filter((k=>classData[k])).join(" "))}const vnode=newVNode(nodeName,null);return vnode.$attrs$=vnodeData,vNodeChildren.length>0&&(vnode.$children$=vNodeChildren),vnode},newVNode=(tag,text)=>{const vnode={$flags$:0,$tag$:tag,$text$:text,$elm$:null,$children$:null,$attrs$:null};return vnode},Host={},rootAppliedStyles=new WeakMap,attachStyles=hostRef=>{const cmpMeta=hostRef.$cmpMeta$,elm=hostRef.$hostElement$,flags=cmpMeta.$flags$,endAttachStyles=(cmpMeta.$tagName$,()=>{}),scopeId=((styleContainerNode,cmpMeta,mode,hostElm)=>{var _a;let scopeId=getScopeId(cmpMeta);const style=styles.get(scopeId);if(styleContainerNode=11===styleContainerNode.nodeType?styleContainerNode:doc,style)if("string"==typeof style){styleContainerNode=styleContainerNode.head||styleContainerNode;let styleElm,appliedStyles=rootAppliedStyles.get(styleContainerNode);if(appliedStyles||rootAppliedStyles.set(styleContainerNode,appliedStyles=new Set),!appliedStyles.has(scopeId)){{styleElm=doc.createElement("style"),styleElm.innerHTML=style;const nonce=null!==(_a=plt.$nonce$)&&void 0!==_a?_a:queryNonceMetaTagContent(doc);null!=nonce&&styleElm.setAttribute("nonce",nonce),styleContainerNode.insertBefore(styleElm,styleContainerNode.querySelector("link"))}appliedStyles&&appliedStyles.add(scopeId)}}else styleContainerNode.adoptedStyleSheets.includes(style)||(styleContainerNode.adoptedStyleSheets=[...styleContainerNode.adoptedStyleSheets,style]);return scopeId})(elm.shadowRoot?elm.shadowRoot:elm.getRootNode(),cmpMeta);10&flags&&(elm["s-sc"]=scopeId,elm.classList.add(scopeId+"-h")),endAttachStyles()},getScopeId=(cmp,mode)=>"sc-"+cmp.$tagName$,setAccessor=(elm,memberName,oldValue,newValue,isSvg,flags)=>{if(oldValue!==newValue){let isProp=isMemberInElement(elm,memberName),ln=memberName.toLowerCase();if("class"===memberName){const classList=elm.classList,oldClasses=parseClassList(oldValue),newClasses=parseClassList(newValue);classList.remove(...oldClasses.filter((c=>c&&!newClasses.includes(c)))),classList.add(...newClasses.filter((c=>c&&!oldClasses.includes(c))))}else isProp||"o"!==memberName[0]||"n"!==memberName[1]||(memberName="-"===memberName[2]?memberName.slice(3):isMemberInElement(win,ln)?ln.slice(2):ln[2]+memberName.slice(3),oldValue&&plt.rel(elm,memberName,oldValue,!1),newValue&&plt.ael(elm,memberName,newValue,!1))}},parseClassListRegex=/\s/,parseClassList=value=>value?value.split(parseClassListRegex):[],updateElement=(oldVnode,newVnode,isSvgMode,memberName)=>{const elm=11===newVnode.$elm$.nodeType&&newVnode.$elm$.host?newVnode.$elm$.host:newVnode.$elm$,oldVnodeAttrs=oldVnode&&oldVnode.$attrs$||EMPTY_OBJ,newVnodeAttrs=newVnode.$attrs$||EMPTY_OBJ;for(memberName in oldVnodeAttrs)memberName in newVnodeAttrs||setAccessor(elm,memberName,oldVnodeAttrs[memberName],void 0);for(memberName in newVnodeAttrs)setAccessor(elm,memberName,oldVnodeAttrs[memberName],newVnodeAttrs[memberName])},createElm=(oldParentVNode,newParentVNode,childIndex,parentElm)=>{const newVNode=newParentVNode.$children$[childIndex];let elm,childNode,i=0;if(null!==newVNode.$text$)elm=newVNode.$elm$=doc.createTextNode(newVNode.$text$);else if(elm=newVNode.$elm$=doc.createElement(newVNode.$tag$),updateElement(null,newVNode),null!=scopeId&&elm["s-si"]!==scopeId&&elm.classList.add(elm["s-si"]=scopeId),newVNode.$children$)for(i=0;i<newVNode.$children$.length;++i)childNode=createElm(oldParentVNode,newVNode,i),childNode&&elm.appendChild(childNode);return elm},addVnodes=(parentElm,before,parentVNode,vnodes,startIdx,endIdx)=>{let childNode,containerElm=parentElm;for(containerElm.shadowRoot&&containerElm.tagName===hostTagName&&(containerElm=containerElm.shadowRoot);startIdx<=endIdx;++startIdx)vnodes[startIdx]&&(childNode=createElm(null,parentVNode,startIdx),childNode&&(vnodes[startIdx].$elm$=childNode,containerElm.insertBefore(childNode,before)))},removeVnodes=(vnodes,startIdx,endIdx)=>{for(let index=startIdx;index<=endIdx;++index){const vnode=vnodes[index];if(vnode){const elm=vnode.$elm$;elm&&elm.remove()}}},isSameVnode=(leftVNode,rightVNode)=>leftVNode.$tag$===rightVNode.$tag$,patch=(oldVNode,newVNode)=>{const elm=newVNode.$elm$=oldVNode.$elm$,oldChildren=oldVNode.$children$,newChildren=newVNode.$children$,tag=newVNode.$tag$,text=newVNode.$text$;null===text?("slot"===tag||updateElement(oldVNode,newVNode),null!==oldChildren&&null!==newChildren?((parentElm,oldCh,newVNode,newCh)=>{let node,oldStartIdx=0,newStartIdx=0,oldEndIdx=oldCh.length-1,oldStartVnode=oldCh[0],oldEndVnode=oldCh[oldEndIdx],newEndIdx=newCh.length-1,newStartVnode=newCh[0],newEndVnode=newCh[newEndIdx];for(;oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx;)null==oldStartVnode?oldStartVnode=oldCh[++oldStartIdx]:null==oldEndVnode?oldEndVnode=oldCh[--oldEndIdx]:null==newStartVnode?newStartVnode=newCh[++newStartIdx]:null==newEndVnode?newEndVnode=newCh[--newEndIdx]:isSameVnode(oldStartVnode,newStartVnode)?(patch(oldStartVnode,newStartVnode),oldStartVnode=oldCh[++oldStartIdx],newStartVnode=newCh[++newStartIdx]):isSameVnode(oldEndVnode,newEndVnode)?(patch(oldEndVnode,newEndVnode),oldEndVnode=oldCh[--oldEndIdx],newEndVnode=newCh[--newEndIdx]):isSameVnode(oldStartVnode,newEndVnode)?(patch(oldStartVnode,newEndVnode),parentElm.insertBefore(oldStartVnode.$elm$,oldEndVnode.$elm$.nextSibling),oldStartVnode=oldCh[++oldStartIdx],newEndVnode=newCh[--newEndIdx]):isSameVnode(oldEndVnode,newStartVnode)?(patch(oldEndVnode,newStartVnode),parentElm.insertBefore(oldEndVnode.$elm$,oldStartVnode.$elm$),oldEndVnode=oldCh[--oldEndIdx],newStartVnode=newCh[++newStartIdx]):(node=createElm(oldCh&&oldCh[newStartIdx],newVNode,newStartIdx),newStartVnode=newCh[++newStartIdx],node&&oldStartVnode.$elm$.parentNode.insertBefore(node,oldStartVnode.$elm$));oldStartIdx>oldEndIdx?addVnodes(parentElm,null==newCh[newEndIdx+1]?null:newCh[newEndIdx+1].$elm$,newVNode,newCh,newStartIdx,newEndIdx):newStartIdx>newEndIdx&&removeVnodes(oldCh,oldStartIdx,oldEndIdx)})(elm,oldChildren,newVNode,newChildren):null!==newChildren?(null!==oldVNode.$text$&&(elm.textContent=""),addVnodes(elm,null,newVNode,newChildren,0,newChildren.length-1)):null!==oldChildren&&removeVnodes(oldChildren,0,oldChildren.length-1)):oldVNode.$text$!==text&&(elm.data=text)},renderVdom=(hostRef,renderFnResults)=>{const hostElm=hostRef.$hostElement$,oldVNode=hostRef.$vnode$||newVNode(null,null),rootVnode=(node=renderFnResults)&&node.$tag$===Host?renderFnResults:h(null,null,renderFnResults);var node;hostTagName=hostElm.tagName,rootVnode.$tag$=null,rootVnode.$flags$|=4,hostRef.$vnode$=rootVnode,rootVnode.$elm$=oldVNode.$elm$=hostElm.shadowRoot||hostElm,scopeId=hostElm["s-sc"],patch(oldVNode,rootVnode)},attachToAncestor=(hostRef,ancestorComponent)=>{ancestorComponent&&!hostRef.$onRenderResolve$&&ancestorComponent["s-p"]&&ancestorComponent["s-p"].push(new Promise((r=>hostRef.$onRenderResolve$=r)))},scheduleUpdate=(hostRef,isInitialLoad)=>{if(hostRef.$flags$|=16,4&hostRef.$flags$)return void(hostRef.$flags$|=512);attachToAncestor(hostRef,hostRef.$ancestorComponent$);return writeTask((()=>dispatchHooks(hostRef,isInitialLoad)))},dispatchHooks=(hostRef,isInitialLoad)=>{const endSchedule=(hostRef.$cmpMeta$.$tagName$,()=>{}),instance=hostRef.$lazyInstance$;return endSchedule(),enqueue(undefined,(()=>updateComponent(hostRef,instance,isInitialLoad)))},enqueue=(maybePromise,fn)=>isPromisey(maybePromise)?maybePromise.then(fn):fn(),isPromisey=maybePromise=>maybePromise instanceof Promise||maybePromise&&maybePromise.then&&"function"==typeof maybePromise.then,updateComponent=async(hostRef,instance,isInitialLoad)=>{var _a;const elm=hostRef.$hostElement$,endUpdate=(hostRef.$cmpMeta$.$tagName$,()=>{}),rc=elm["s-rc"];isInitialLoad&&attachStyles(hostRef);const endRender=(hostRef.$cmpMeta$.$tagName$,()=>{});callRender(hostRef,instance),rc&&(rc.map((cb=>cb())),elm["s-rc"]=void 0),endRender(),endUpdate();{const childrenPromises=null!==(_a=elm["s-p"])&&void 0!==_a?_a:[],postUpdate=()=>postUpdateComponent(hostRef);0===childrenPromises.length?postUpdate():(Promise.all(childrenPromises).then(postUpdate),hostRef.$flags$|=4,childrenPromises.length=0)}},callRender=(hostRef,instance,elm)=>{try{instance=instance.render(),hostRef.$flags$&=-17,hostRef.$flags$|=2,renderVdom(hostRef,instance)}catch(e){consoleError(e,hostRef.$hostElement$)}return null},postUpdateComponent=hostRef=>{hostRef.$cmpMeta$.$tagName$;const elm=hostRef.$hostElement$,endPostUpdate=()=>{},ancestorComponent=hostRef.$ancestorComponent$;64&hostRef.$flags$?endPostUpdate():(hostRef.$flags$|=64,addHydratedFlag(elm),endPostUpdate(),hostRef.$onReadyResolve$(elm),ancestorComponent||appDidLoad()),hostRef.$onRenderResolve$&&(hostRef.$onRenderResolve$(),hostRef.$onRenderResolve$=void 0),512&hostRef.$flags$&&nextTick((()=>scheduleUpdate(hostRef,!1))),hostRef.$flags$&=-517},appDidLoad=who=>{addHydratedFlag(doc.documentElement),nextTick((()=>((elm,name,opts)=>{const ev=plt.ce(name,opts);return elm.dispatchEvent(ev),ev})(win,"appload",{detail:{namespace:"solar-ds-stencil"}})))},addHydratedFlag=elm=>elm.classList.add("hydrated"),setValue=(ref,propName,newVal,cmpMeta)=>{const hostRef=getHostRef(ref),oldVal=hostRef.$instanceValues$.get(propName),flags=hostRef.$flags$,instance=hostRef.$lazyInstance$;var propValue,propType;propValue=newVal,propType=cmpMeta.$members$[propName][0],newVal=null==propValue||isComplexType(propValue)?propValue:1&propType?String(propValue):propValue;const areBothNaN=Number.isNaN(oldVal)&&Number.isNaN(newVal);8&flags&&void 0!==oldVal||!(newVal!==oldVal&&!areBothNaN)||(hostRef.$instanceValues$.set(propName,newVal),instance&&2==(18&flags)&&scheduleUpdate(hostRef,!1))},proxyComponent=(Cstr,cmpMeta,flags)=>{if(cmpMeta.$members$){const members=Object.entries(cmpMeta.$members$),prototype=Cstr.prototype;if(members.map((([memberName,[memberFlags]])=>{(31&memberFlags||2&flags&&32&memberFlags)&&Object.defineProperty(prototype,memberName,{get(){return propName=memberName,getHostRef(this).$instanceValues$.get(propName);var propName},set(newValue){setValue(this,memberName,newValue,cmpMeta)},configurable:!0,enumerable:!0})})),1&flags){const attrNameToPropName=new Map;prototype.attributeChangedCallback=function(attrName,_oldValue,newValue){plt.jmp((()=>{const propName=attrNameToPropName.get(attrName);if(this.hasOwnProperty(propName))newValue=this[propName],delete this[propName];else if(prototype.hasOwnProperty(propName)&&"number"==typeof this[propName]&&this[propName]==newValue)return;this[propName]=(null!==newValue||"boolean"!=typeof this[propName])&&newValue}))},Cstr.observedAttributes=members.filter((([_,m])=>15&m[0])).map((([propName,m])=>{const attrName=m[1]||propName;return attrNameToPropName.set(attrName,propName),attrName}))}}return Cstr},initializeComponent=async(elm,hostRef,cmpMeta,hmrVersionId,Cstr)=>{if(0==(32&hostRef.$flags$)){hostRef.$flags$|=32;{if((Cstr=loadModule(cmpMeta)).then){const endLoad=()=>{};Cstr=await Cstr,endLoad()}Cstr.isProxied||(proxyComponent(Cstr,cmpMeta,2),Cstr.isProxied=!0);const endNewInstance=(cmpMeta.$tagName$,()=>{});hostRef.$flags$|=8;try{new Cstr(hostRef)}catch(e){consoleError(e)}hostRef.$flags$&=-9,endNewInstance()}if(Cstr.style){let style=Cstr.style;const scopeId=getScopeId(cmpMeta);if(!styles.has(scopeId)){const endRegisterStyles=(cmpMeta.$tagName$,()=>{});((scopeId,cssText,allowCS)=>{let style=styles.get(scopeId);supportsConstructableStylesheets&&allowCS?(style=style||new CSSStyleSheet,"string"==typeof style?style=cssText:style.replaceSync(cssText)):style=cssText,styles.set(scopeId,style)})(scopeId,style,!!(1&cmpMeta.$flags$)),endRegisterStyles()}}}const ancestorComponent=hostRef.$ancestorComponent$,schedule=()=>scheduleUpdate(hostRef,!0);ancestorComponent&&ancestorComponent["s-rc"]?ancestorComponent["s-rc"].push(schedule):schedule()},bootstrapLazy=(lazyBundles,options={})=>{var _a;const endBootstrap=()=>{},cmpTags=[],exclude=options.exclude||[],customElements=win.customElements,head=doc.head,metaCharset=head.querySelector("meta[charset]"),visibilityStyle=doc.createElement("style"),deferredConnectedCallbacks=[];let appLoadFallback,isBootstrapping=!0;Object.assign(plt,options),plt.$resourcesUrl$=new URL(options.resourcesUrl||"./",doc.baseURI).href,lazyBundles.map((lazyBundle=>{lazyBundle[1].map((compactMeta=>{const cmpMeta={$flags$:compactMeta[0],$tagName$:compactMeta[1],$members$:compactMeta[2],$listeners$:compactMeta[3]};cmpMeta.$members$=compactMeta[2];const tagName=cmpMeta.$tagName$,HostElement=class extends HTMLElement{constructor(self){super(self),registerHost(self=this,cmpMeta),1&cmpMeta.$flags$&&self.attachShadow({mode:"open"})}connectedCallback(){appLoadFallback&&(clearTimeout(appLoadFallback),appLoadFallback=null),isBootstrapping?deferredConnectedCallbacks.push(this):plt.jmp((()=>(elm=>{if(0==(1&plt.$flags$)){const hostRef=getHostRef(elm),cmpMeta=hostRef.$cmpMeta$,endConnected=(cmpMeta.$tagName$,()=>{});if(!(1&hostRef.$flags$)){hostRef.$flags$|=1;{let ancestorComponent=elm;for(;ancestorComponent=ancestorComponent.parentNode||ancestorComponent.host;)if(ancestorComponent["s-p"]){attachToAncestor(hostRef,hostRef.$ancestorComponent$=ancestorComponent);break}}cmpMeta.$members$&&Object.entries(cmpMeta.$members$).map((([memberName,[memberFlags]])=>{if(31&memberFlags&&elm.hasOwnProperty(memberName)){const value=elm[memberName];delete elm[memberName],elm[memberName]=value}})),initializeComponent(0,hostRef,cmpMeta)}endConnected()}})(this)))}disconnectedCallback(){plt.jmp((()=>{return elm=this,void(0==(1&plt.$flags$)&&getHostRef(elm));var elm}))}componentOnReady(){return getHostRef(this).$onReadyPromise$}};cmpMeta.$lazyBundleId$=lazyBundle[0],exclude.includes(tagName)||customElements.get(tagName)||(cmpTags.push(tagName),customElements.define(tagName,proxyComponent(HostElement,cmpMeta,1)))}))}));{visibilityStyle.innerHTML=cmpTags+"{visibility:hidden}.hydrated{visibility:inherit}",visibilityStyle.setAttribute("data-styles","");const nonce=null!==(_a=plt.$nonce$)&&void 0!==_a?_a:queryNonceMetaTagContent(doc);null!=nonce&&visibilityStyle.setAttribute("nonce",nonce),head.insertBefore(visibilityStyle,metaCharset?metaCharset.nextSibling:head.firstChild)}isBootstrapping=!1,deferredConnectedCallbacks.length?deferredConnectedCallbacks.map((host=>host.connectedCallback())):plt.jmp((()=>appLoadFallback=setTimeout(appDidLoad,30))),endBootstrap()},hostRefs=new WeakMap,getHostRef=ref=>hostRefs.get(ref),registerInstance=(lazyInstance,hostRef)=>hostRefs.set(hostRef.$lazyInstance$=lazyInstance,hostRef),registerHost=(elm,cmpMeta)=>{const hostRef={$flags$:0,$hostElement$:elm,$cmpMeta$:cmpMeta,$instanceValues$:new Map};return hostRef.$onReadyPromise$=new Promise((r=>hostRef.$onReadyResolve$=r)),elm["s-p"]=[],elm["s-rc"]=[],hostRefs.set(elm,hostRef)},isMemberInElement=(elm,memberName)=>memberName in elm,consoleError=(e,el)=>(0,console.error)(e,el),cmpModules=new Map,loadModule=(cmpMeta,hostRef,hmrVersionId)=>{const exportName=cmpMeta.$tagName$.replace(/-/g,"_"),bundleId=cmpMeta.$lazyBundleId$,module=cmpModules.get(bundleId);return module?module[exportName]:__webpack_require__("./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js`).then((importedModule=>(cmpModules.set(bundleId,importedModule),importedModule[exportName])),consoleError)},styles=new Map,win="undefined"!=typeof window?window:{},doc=win.document||{head:{}},plt={$flags$:0,$resourcesUrl$:"",jmp:h=>h(),raf:h=>requestAnimationFrame(h),ael:(el,eventName,listener,opts)=>el.addEventListener(eventName,listener,opts),rel:(el,eventName,listener,opts)=>el.removeEventListener(eventName,listener,opts),ce:(eventName,opts)=>new CustomEvent(eventName,opts)},promiseResolve=v=>Promise.resolve(v),supportsConstructableStylesheets=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),queueDomReads=[],queueDomWrites=[],queueTask=(queue,write)=>cb=>{queue.push(cb),queuePending||(queuePending=!0,write&&4&plt.$flags$?nextTick(flush):plt.raf(flush))},consume=queue=>{for(let i=0;i<queue.length;i++)try{queue[i](performance.now())}catch(e){consoleError(e)}queue.length=0},flush=()=>{consume(queueDomReads),consume(queueDomWrites),(queuePending=queueDomReads.length>0)&&plt.raf(flush)},nextTick=cb=>promiseResolve().then(cb),writeTask=queueTask(queueDomWrites,!0)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/global-variables.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,":root {\n  --axpo-red: #FF5D64;\n  --axpo-red-light: #F89AA6;\n  --axpo-red-interaction: #F2354D;\n  --axpo-blue: #4545CF;\n  --axpo-blue-medium: #A2A2E7;\n  --axpo-blue-light: #DADAF5;\n  --axpo-aqua: #00ECD1;\n  --axpo-aqua-light: #AAF9F0;\n  --axpo-yellow: #FFED57;\n  --axpo-yellow-light: #FFEDB3;\n  --axpo-tech-renewables: #85BE4C;\n  --axpo-tech-biomass: #F1D392;\n  --axpo-tech-batteries: #F5B700;\n  --axpo-tech-hydro: var(--axpo-blue);\n  --axpo-tech-hydro-1: var(--axpo-blue-light);\n  --axpo-tech-hydro-2: var(--axpo-blue-medium);\n  --axpo-tech-hydro-3: #7474DC;\n  --axpo-tech-pv: var(--axpo-yellow);\n  --axpo-tech-pv-1: #FFF8D9;\n  --axpo-tech-pv-2: #FFF6AB;\n  --axpo-tech-wind: var(--axpo-aqua); \n  --axpo-tech-wind-1: var(--axpo-aqua-light); \n  --axpo-tech-wind-2: #55F2E0; \n  --axpo-tech-nuclear: ##5F5F5F;\n  --axpo-tech-hydrogen: #00C5AE;\n  --axpo-tech-hydrogen-1: #009D8A;\n  --axpo-tech-gas: var(--axpo-gray-light);\n  --axpo-other-1: var(--axpo-red);\n  --axpo-other-2: #81A4CD;\n  --axpo-other-3: #C589E8;\n  --axpo-other-4: #C69DA5;\n  --axpo-other-5: #215169;\n  --axpo-success: #00A486;\n  --axpo-danger: #B00020;\n  --axpo-disabled: #ECDCDD;\n  --axpo-gray-dark: #3D3D3D;\n  --axpo-gray-light: #D8D8D8;\n  --axpo-gray-0: #F8F8F8;\n  --axpo-gray-1: #EFEFEF;\n  --axpo-gray-2: #D6D6D6;\n  --axpo-gray-3: #BEBEBE;\n  --axpo-gray-4: #9E9E9E;\n  --axpo-gray-5: #7E7E7E;\n  --axpo-gray-6: #5D5D5D;\n  --axpo-gray-7: #3D3D3D;\n  --axpo-gray-8: #292929;\n  --axpo-gray-9: #1F1F1F;\n}\n\nhtml,\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n  padding: 32px;\n}\n\nh1 {\n  font-family: Almarena Mono;\n  font-size: 52px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nh2 {\n  font-family: Almarena;\n  font-size: 30px;\n  line-height: 1.2;\n}","",{version:3,sources:["webpack://./src/global-variables.css"],names:[],mappings:"AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,+BAA+B;EAC/B,oBAAoB;EACpB,2BAA2B;EAC3B,0BAA0B;EAC1B,oBAAoB;EACpB,0BAA0B;EAC1B,sBAAsB;EACtB,4BAA4B;EAC5B,+BAA+B;EAC/B,4BAA4B;EAC5B,8BAA8B;EAC9B,mCAAmC;EACnC,2CAA2C;EAC3C,4CAA4C;EAC5C,4BAA4B;EAC5B,kCAAkC;EAClC,yBAAyB;EACzB,yBAAyB;EACzB,kCAAkC;EAClC,0CAA0C;EAC1C,2BAA2B;EAC3B,6BAA6B;EAC7B,6BAA6B;EAC7B,+BAA+B;EAC/B,uCAAuC;EACvC,+BAA+B;EAC/B,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;EACzB,0BAA0B;EAC1B,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;AAClB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');\n\n:root {\n  --axpo-red: #FF5D64;\n  --axpo-red-light: #F89AA6;\n  --axpo-red-interaction: #F2354D;\n  --axpo-blue: #4545CF;\n  --axpo-blue-medium: #A2A2E7;\n  --axpo-blue-light: #DADAF5;\n  --axpo-aqua: #00ECD1;\n  --axpo-aqua-light: #AAF9F0;\n  --axpo-yellow: #FFED57;\n  --axpo-yellow-light: #FFEDB3;\n  --axpo-tech-renewables: #85BE4C;\n  --axpo-tech-biomass: #F1D392;\n  --axpo-tech-batteries: #F5B700;\n  --axpo-tech-hydro: var(--axpo-blue);\n  --axpo-tech-hydro-1: var(--axpo-blue-light);\n  --axpo-tech-hydro-2: var(--axpo-blue-medium);\n  --axpo-tech-hydro-3: #7474DC;\n  --axpo-tech-pv: var(--axpo-yellow);\n  --axpo-tech-pv-1: #FFF8D9;\n  --axpo-tech-pv-2: #FFF6AB;\n  --axpo-tech-wind: var(--axpo-aqua); \n  --axpo-tech-wind-1: var(--axpo-aqua-light); \n  --axpo-tech-wind-2: #55F2E0; \n  --axpo-tech-nuclear: ##5F5F5F;\n  --axpo-tech-hydrogen: #00C5AE;\n  --axpo-tech-hydrogen-1: #009D8A;\n  --axpo-tech-gas: var(--axpo-gray-light);\n  --axpo-other-1: var(--axpo-red);\n  --axpo-other-2: #81A4CD;\n  --axpo-other-3: #C589E8;\n  --axpo-other-4: #C69DA5;\n  --axpo-other-5: #215169;\n  --axpo-success: #00A486;\n  --axpo-danger: #B00020;\n  --axpo-disabled: #ECDCDD;\n  --axpo-gray-dark: #3D3D3D;\n  --axpo-gray-light: #D8D8D8;\n  --axpo-gray-0: #F8F8F8;\n  --axpo-gray-1: #EFEFEF;\n  --axpo-gray-2: #D6D6D6;\n  --axpo-gray-3: #BEBEBE;\n  --axpo-gray-4: #9E9E9E;\n  --axpo-gray-5: #7E7E7E;\n  --axpo-gray-6: #5D5D5D;\n  --axpo-gray-7: #3D3D3D;\n  --axpo-gray-8: #292929;\n  --axpo-gray-9: #1F1F1F;\n}\n\nhtml,\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n  padding: 32px;\n}\n\nh1 {\n  font-family: Almarena Mono;\n  font-size: 52px;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nh2 {\n  font-family: Almarena;\n  font-size: 30px;\n  line-height: 1.2;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/solar-ds/solar-button/button.stories":["./src/components/solar-ds/solar-button/button.stories.ts",349],"./components/solar-ds/solar-button/button.stories.ts":["./src/components/solar-ds/solar-button/button.stories.ts",349],"./components/solar-tag/tag.stories":["./src/components/solar-tag/tag.stories.ts",292],"./components/solar-tag/tag.stories.ts":["./src/components/solar-tag/tag.stories.ts",292],"./stories/Button.stories":["./src/stories/Button.stories.js",256],"./stories/Button.stories.js":["./src/stories/Button.stories.js",256]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/html/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.js")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[319],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);