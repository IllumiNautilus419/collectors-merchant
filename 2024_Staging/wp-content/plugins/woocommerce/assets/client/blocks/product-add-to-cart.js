(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5800],{6271:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},495:(e,t,r)=>{"use strict";r.d(t,{Z:()=>We});var s=r(9196),o=r(3849),a=r.n(o),n=r(9307),c=r(5736),i=r(9530),l=r(2684),u=r(9818),d=r(4801);const E={PRISTINE:"pristine",IDLE:"idle",DISABLED:"disabled",PROCESSING:"processing",BEFORE_PROCESSING:"before_processing",AFTER_PROCESSING:"after_processing"},p={status:E.PRISTINE,hasError:!1,quantity:0,processingResponse:null,requestParams:{}},m={SET_PRISTINE:"set_pristine",SET_IDLE:"set_idle",SET_DISABLED:"set_disabled",SET_PROCESSING:"set_processing",SET_BEFORE_PROCESSING:"set_before_processing",SET_AFTER_PROCESSING:"set_after_processing",SET_PROCESSING_RESPONSE:"set_processing_response",SET_HAS_ERROR:"set_has_error",SET_NO_ERROR:"set_no_error",SET_QUANTITY:"set_quantity",SET_REQUEST_PARAMS:"set_request_params"},{SET_PRISTINE:_,SET_IDLE:h,SET_DISABLED:S,SET_PROCESSING:b,SET_BEFORE_PROCESSING:v,SET_AFTER_PROCESSING:R,SET_PROCESSING_RESPONSE:f,SET_HAS_ERROR:g,SET_NO_ERROR:C,SET_QUANTITY:y,SET_REQUEST_PARAMS:T}=m,w=()=>({type:h}),A=(e=!0)=>({type:e?g:C}),{SET_PRISTINE:P,SET_IDLE:I,SET_DISABLED:O,SET_PROCESSING:N,SET_BEFORE_PROCESSING:k,SET_AFTER_PROCESSING:D,SET_PROCESSING_RESPONSE:L,SET_HAS_ERROR:x,SET_NO_ERROR:F,SET_QUANTITY:B,SET_REQUEST_PARAMS:M}=m,{PRISTINE:q,IDLE:j,DISABLED:Q,PROCESSING:Y,BEFORE_PROCESSING:G,AFTER_PROCESSING:V}=E,K=(e=p,{quantity:t,type:r,data:s})=>{let o;switch(r){case P:o=p;break;case I:o=e.status!==j?{...e,status:j}:e;break;case O:o=e.status!==Q?{...e,status:Q}:e;break;case B:o=t!==e.quantity?{...e,quantity:t}:e;break;case M:o={...e,requestParams:{...e.requestParams,...s}};break;case L:o={...e,processingResponse:s};break;case N:o=e.status!==Y?{...e,status:Y,hasError:!1}:e,o=!1===o.hasError?o:{...o,hasError:!1};break;case k:o=e.status!==G?{...e,status:G,hasError:!1}:e;break;case D:o=e.status!==V?{...e,status:V}:e;break;case x:o=e.hasError?e:{...e,hasError:!0},o=e.status===Y||e.status===G?{...o,status:j}:o;break;case F:o=e.hasError?{...e,hasError:!1}:e}return o!==e&&r!==P&&o.status===q&&(o.status=j),o};let H=function(e){return e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback",e}({});const W={},U=(e=W,{type:t,eventType:r,id:s,callback:o,priority:a})=>{const n=e.hasOwnProperty(r)?new Map(e[r]):new Map;switch(t){case H.ADD_EVENT_CALLBACK:return n.set(s,{priority:a,callback:o}),{...e,[r]:n};case H.REMOVE_EVENT_CALLBACK:return n.delete(s),{...e,[r]:n}}},Z=(e,t)=>(r,s=10)=>{const o=((e,t,r=10)=>({id:Math.floor(Math.random()*Date.now()).toString(),type:H.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}))(e,r,s);return t(o),()=>{var r;t((r=e,{id:o.id,type:H.REMOVE_EVENT_CALLBACK,eventType:r}))}},$="add_to_cart_before_processing",X="add_to_cart_after_processing_with_success",J="add_to_cart_after_processing_with_error",z=e=>({onAddToCartAfterProcessingWithSuccess:Z(X,e),onAddToCartProcessingWithError:Z(J,e),onAddToCartBeforeProcessing:Z($,e)});var ee=r(7998);const te=(e,t)=>e[t]?Array.from(e[t].values()).sort(((e,t)=>e.priority-t.priority)):[];let re=function(e){return e.SUCCESS="success",e.FAIL="failure",e.ERROR="error",e}({});const se=(e,t)=>(0,ee.Kn)(e)&&"type"in e&&e.type===t,oe=e=>se(e,re.ERROR),ae=e=>se(e,re.FAIL),ne=e=>(0,ee.Kn)(e)&&(0,ee.$n)(e,"type"),ce=async(e,t,r)=>{const s=[],o=te(e,t);for(const e of o)try{const t=await Promise.resolve(e.callback(r));if(!ne(t))continue;if(!t.hasOwnProperty("type"))throw new Error("Returned objects from event emitter observers must return an object with a type property");if(oe(t)||ae(t))return s.push(t),s;s.push(t)}catch(e){return console.error(e),s.push({type:re.ERROR}),s}return s},ie=(0,n.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:e=>{},onAddToCartAfterProcessingWithError:e=>{},onAddToCartBeforeProcessing:e=>{}},dispatchActions:{resetForm:()=>{},submitForm:()=>{},setQuantity:e=>{},setHasError:e=>{},setAfterProcessing:e=>{},setRequestParams:e=>{}}}),le=()=>(0,n.useContext)(ie),ue=({children:e,product:t,showFormElements:r})=>{var o,a,m,h;const[g,C]=(0,n.useReducer)(K,p),[P,I]=(0,n.useReducer)(U,{}),O=(0,i.s)(P),{createErrorNotice:N}=(0,u.useDispatch)("core/notices"),{setValidationErrors:k}=(0,u.useDispatch)(d.VALIDATION_STORE_KEY),D=(0,n.useMemo)((()=>({onAddToCartAfterProcessingWithSuccess:z(I).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:z(I).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:z(I).onAddToCartBeforeProcessing})),[I]),L=(0,n.useMemo)((()=>({resetForm:()=>{C({type:_})},submitForm:()=>{C({type:v})},setQuantity:e=>{C((e=>({type:y,quantity:e}))(e))},setHasError:e=>{C(A(e))},setRequestParams:e=>{C((e=>({type:T,data:e}))(e))},setAfterProcessing:e=>{C({type:f,data:e}),C({type:R})}})),[]);(0,n.useEffect)((()=>{const e=g.status,r=!t.id||!(0,l.L)(t);e!==E.DISABLED||r?e!==E.DISABLED&&r&&C({type:S}):C(w())}),[g.status,t,C]),(0,n.useEffect)((()=>{g.status===E.BEFORE_PROCESSING&&(((e,t)=>{const r=(0,u.select)("core/notices").getNotices(t),{removeNotice:s}=(0,u.dispatch)("core/notices");r.filter((e=>"error"===e.status)).forEach((e=>s(e.id,t)))})(0,"wc/add-to-cart"),(async(e,t,r)=>{const s=te(e,t),o=[];for(const e of s)try{const t=await Promise.resolve(e.callback(r));"object"==typeof t&&o.push(t)}catch(e){console.error(e)}return!o.length||o})(O,$,{}).then((e=>{!0!==e?(Array.isArray(e)&&e.forEach((({errorMessage:e,validationErrors:t})=>{e&&N(e,{context:"wc/add-to-cart"}),t&&k(t)})),C(w())):C({type:b})})))}),[g.status,k,N,C,O,null==t?void 0:t.id]),(0,n.useEffect)((()=>{if(g.status===E.AFTER_PROCESSING){const e={processingResponse:g.processingResponse},r=e=>{let t=!1;return e.forEach((e=>{const{message:r,messageContext:s}=e;(oe(e)||ae(e))&&r&&(t=!0,N(r,s?{context:s}:void 0))})),t};if(g.hasError)return void ce(O,J,e).then((s=>{if(!r(s)){var o;const r=(null===(o=e.processingResponse)||void 0===o?void 0:o.message)||(0,c.__)("Something went wrong. Please contact us for assistance.","woocommerce");N(r,{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`})}C(w())}));ce(O,X,e).then((e=>{r(e)?C(A(!0)):C(w())}))}}),[g.status,g.hasError,g.processingResponse,L,N,O,null==t?void 0:t.id]);const x=(0,l.K)(t),F={product:t,productType:t.type||"simple",productIsPurchasable:(0,l.L)(t),productHasOptions:t.has_options||!1,supportsFormElements:x,showFormElements:r&&x,quantity:g.quantity||(null==t||null===(o=t.add_to_cart)||void 0===o?void 0:o.minimum)||1,minQuantity:(null==t||null===(a=t.add_to_cart)||void 0===a?void 0:a.minimum)||1,maxQuantity:(null==t||null===(m=t.add_to_cart)||void 0===m?void 0:m.maximum)||99,multipleOf:(null==t||null===(h=t.add_to_cart)||void 0===h?void 0:h.multiple_of)||1,requestParams:g.requestParams,isIdle:g.status===E.IDLE,isDisabled:g.status===E.DISABLED,isProcessing:g.status===E.PROCESSING,isBeforeProcessing:g.status===E.BEFORE_PROCESSING,isAfterProcessing:g.status===E.AFTER_PROCESSING,hasError:g.hasError,eventRegistration:D,dispatchActions:L};return(0,s.createElement)(ie.Provider,{value:F},e)};var de=r(6989),Ee=r.n(de),pe=r(2629),me=r(2592),_e=r(9477);const he=()=>{const{dispatchActions:e,product:t,quantity:r,eventRegistration:s,hasError:o,isProcessing:a,requestParams:i}=le(),{showAllValidationErrors:l}=(0,u.useDispatch)(d.VALIDATION_STORE_KEY),E=(0,u.useSelect)((e=>e(d.VALIDATION_STORE_KEY).hasValidationErrors)),{createErrorNotice:p,removeNotice:m}=(0,u.useDispatch)("core/notices"),{receiveCart:_}=(0,_e.b)(),[h,S]=(0,n.useState)(!1),b=!o&&a,v=(0,n.useCallback)((()=>!E()||(l(),{type:"error"})),[E,l]);(0,n.useEffect)((()=>{const e=s.onAddToCartBeforeProcessing(v,0);return()=>{e()}}),[s,v]);const R=(0,n.useCallback)((()=>{S(!0),m("add-to-cart",`woocommerce/single-product/${(null==t?void 0:t.id)||0}`);const s={id:t.id||0,quantity:r,...i};Ee()({path:"/wc/store/v1/cart/add-item",method:"POST",data:s,cache:"no-store",parse:!1}).then((r=>{Ee().setNonce(r.headers),r.json().then((function(s){r.ok?_(s):(s.body&&s.body.message?p((0,pe.decodeEntities)(s.body.message),{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`}):p((0,c.__)("Something went wrong. Please contact us for assistance.","woocommerce"),{id:"add-to-cart",context:`woocommerce/single-product/${(null==t?void 0:t.id)||0}`}),e.setHasError()),(0,me.Q9)({preserveCartData:!0}),e.setAfterProcessing(s),S(!1)}))})).catch((t=>{t.json().then((function(t){var r;null!==(r=t.data)&&void 0!==r&&r.cart&&_(t.data.cart),e.setHasError(),e.setAfterProcessing(t),S(!1)}))}))}),[t,p,m,_,e,r,i]);return(0,n.useEffect)((()=>{b&&!h&&R()}),[b,R,h]),null},Se=({children:e,product:t,showFormElements:r})=>(0,s.createElement)(ue,{product:t,showFormElements:r},e,(0,s.createElement)(he,null));var be=r(2864),ve=r(4696),Re=r(721),fe=(r(354),r(3871));r(1029),r(7440);const ge=()=>(0,s.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"}),Ce=({className:e,showSpinner:t=!1,children:r,variant:o="contained",...n})=>{const c=a()("wc-block-components-button","wp-element-button",e,o,{"wc-block-components-button--loading":t});return(0,s.createElement)(fe.Z,{className:c,...n},t&&(0,s.createElement)(ge,null),(0,s.createElement)("span",{className:"wc-block-components-button__text"},r))};var ye=r(2911),Te=r(202),we=r(8360),Ae=r(7001);const Pe=({className:e,href:t,text:r,onClick:o})=>(0,s.createElement)(Ce,{className:e,href:t,onClick:o,rel:"nofollow"},r),Ie=({className:e,quantityInCart:t,isProcessing:r,isDisabled:o,isDone:a,onClick:n})=>(0,s.createElement)(Ce,{className:e,disabled:o,showSpinner:r,onClick:n},a&&t>0?(0,c.sprintf)(/* translators: %s number of products in cart. */ /* translators: %s number of products in cart. */
(0,c._n)("%d in cart","%d in cart",t,"woocommerce"),t):(0,c.__)("Add to cart","woocommerce"),!!a&&(0,s.createElement)(ye.Z,{icon:Te.Z})),Oe=()=>{const{showFormElements:e,productIsPurchasable:t,productHasOptions:r,product:o,productType:a,isDisabled:i,isProcessing:l,eventRegistration:u,hasError:d,dispatchActions:E}=le(),{parentName:p}=(0,be.useInnerBlockLayoutContext)(),{dispatchStoreEvent:m}=(0,we.n)(),{cartQuantity:_}=(0,Ae.c)(o.id||0),[h,S]=(0,n.useState)(!1),b=o.add_to_cart||{url:"",text:""};return(0,n.useEffect)((()=>{const e=u.onAddToCartAfterProcessingWithSuccess((()=>(d||S(!0),!0)),0);return()=>{e()}}),[u,d]),(e||!r&&"simple"===a)&&t?(0,s.createElement)(Ie,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:_,isDisabled:i,isProcessing:l,isDone:h,onClick:()=>{E.submitForm(`woocommerce/single-product/${(null==o?void 0:o.id)||0}`),m("cart-add-item",{product:o,listName:p})}}):(0,s.createElement)(Pe,{className:"wc-block-components-product-add-to-cart-button",href:b.url,text:b.text||(0,c.__)("View Product","woocommerce"),onClick:()=>{m("product-view-link",{product:o,listName:p})}})};var Ne=r(2600);const ke=({disabled:e,min:t,max:r,step:o=1,value:a,onChange:n})=>{const c=void 0!==r,i=(0,Ne.y1)((e=>{let s=e;c&&(s=Math.min(s,Math.floor(r/o)*o)),s=Math.max(s,Math.ceil(t/o)*o),s=Math.floor(s/o)*o,s!==e&&(null==n||n(s))}),300);return(0,s.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:a,min:t,max:r,step:o,hidden:1===r,disabled:e,onChange:e=>{null==n||n(e.target.value),i(Number(e.target.value))}})},De=({reason:e=(0,c.__)("Sorry, this product cannot be purchased.","woocommerce")})=>(0,s.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},e),Le=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:o,multipleOf:a,dispatchActions:n,isDisabled:i}=le();return e.id&&!e.is_purchasable?(0,s.createElement)(De,null):e.id&&!e.is_in_stock?(0,s.createElement)(De,{reason:(0,c.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(ke,{value:t,min:r,max:o,step:a,disabled:i,onChange:n.setQuantity}),(0,s.createElement)(Oe,null))};r(5425);var xe=r(7507),Fe=r(711);const Be={value:"",label:(0,c.__)("Select an option","woocommerce")},Me=({attributeName:e,options:t=[],value:r="",onChange:o=(()=>{}),errorMessage:i=(0,c.__)("Please select a value.","woocommerce")})=>{const l=e,{setValidationErrors:E,clearValidationError:p}=(0,u.useDispatch)(d.VALIDATION_STORE_KEY),{error:m}=(0,u.useSelect)((e=>({error:e(d.VALIDATION_STORE_KEY).getValidationError(l)||{}})));return(0,n.useEffect)((()=>{r?p(l):E({[l]:{message:i,hidden:!0}})}),[r,l,i,p,E]),(0,n.useEffect)((()=>()=>{p(l)}),[l,p]),(0,s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},(0,s.createElement)(xe.Z,{label:(0,pe.decodeEntities)(e),value:r||"",options:[Be,...t],onChange:o,required:!0,className:a()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":(null==m?void 0:m.message)&&!(null!=m&&m.hidden)})}),(0,s.createElement)(Fe.ValidationInputError,{propertyName:l,elementId:l}))};var qe=r(1469);const je=(e,t,r)=>{const s=Object.values(t).map((({id:e})=>e));if(Object.values(r).every((e=>""===e)))return s;const o=Object.keys(e);return s.filter((e=>o.every((s=>{const o=r[s]||"",a=t["id:"+e].attributes[s];return""===o||null===a||a===o}))))},Qe=({attributes:e,variationAttributes:t,setRequestParams:r})=>{const o=(0,i.s)(e),a=(0,i.s)(t),[c,l]=(0,n.useState)(0),[u,d]=(0,n.useState)({}),[E,p]=(0,n.useState)(!1),m=(0,n.useMemo)((()=>((e,t,r)=>{const s={},o=Object.keys(e),a=Object.values(r).filter(Boolean).length>0;return o.forEach((o=>{const n=e[o],c={...r,[o]:null},i=a?je(e,t,c):null,l=null!==i?i.map((e=>t["id:"+e].attributes[o])):null;s[o]=((e,t=null)=>Object.values(e).map((({name:e,slug:r})=>null===t||t.includes(null)||t.includes(r)?{value:r,label:(0,pe.decodeEntities)(e)}:null)).filter(Boolean))(n.terms,l)})),s})(o,a,u)),[u,o,a]);return(0,n.useEffect)((()=>{if(!E){const t=(e=>(0,ee.Kn)(e)?0===Object.keys(e).length?{}:Object.values(e).reduce(((e,t)=>{const r=t.terms.filter((e=>e.default));var s;return r.length>0&&(e[t.name]=null===(s=r[0])||void 0===s?void 0:s.slug),e}),{}):{})(e);t&&d({...t}),p(!0)}}),[u,e,E]),(0,n.useEffect)((()=>{Object.values(u).filter((e=>""!==e)).length===Object.keys(o).length?l(((e,t,r)=>je(e,t,r)[0]||0)(o,a,u)):c>0&&l(0)}),[u,c,o,a]),(0,n.useEffect)((()=>{r({id:c,variation:Object.keys(u).map((e=>({attribute:e,value:u[e]})))})}),[r,c,u]),(0,s.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(o).map((e=>(0,s.createElement)(Me,{key:e,attributeName:e,options:m[e].filter(Boolean),value:u[e],onChange:t=>{d({...u,[e]:t})}}))))},Ye=({dispatchers:e,product:t})=>{const r=(e=>e?(0,qe.V)(Object.values(e).filter((({has_variations:e})=>e)),"name"):{})(t.attributes),o=(e=>{if(!e)return{};const t={};return e.forEach((({id:e,attributes:r})=>{t[`id:${e}`]={id:e,attributes:r.reduce(((e,{name:t,value:r})=>(e[t]=r,e)),{})}})),t})(t.variations);return 0===Object.keys(r).length||0===Object.keys(o).length?null:(0,s.createElement)(Qe,{attributes:r,variationAttributes:o,setRequestParams:e.setRequestParams})},Ge=()=>{const{product:e,quantity:t,minQuantity:r,maxQuantity:o,multipleOf:a,dispatchActions:n,isDisabled:i}=le();return e.id&&!e.is_purchasable?(0,s.createElement)(De,null):e.id&&!e.is_in_stock?(0,s.createElement)(De,{reason:(0,c.__)("This product is currently out of stock and cannot be purchased.","woocommerce")}):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(Ye,{product:e,dispatchers:n}),(0,s.createElement)(ke,{value:t,min:r,max:o,step:a,disabled:i,onChange:n.setQuantity}),(0,s.createElement)(Oe,null))},Ve=()=>(0,s.createElement)(Oe,null),Ke=()=>(0,s.createElement)("p",null,"This is a placeholder for the grouped products form element."),He=()=>{const{showFormElements:e,productType:t}=le();return e?"variable"===t?(0,s.createElement)(Ge,null):"grouped"===t?(0,s.createElement)(Ke,null):"external"===t?(0,s.createElement)(Ve,null):"simple"===t||"variation"===t?(0,s.createElement)(Le,null):null:(0,s.createElement)(Oe,null)},We=(0,Re.withProductDataContext)((({className:e,showFormElements:t})=>{const{product:r}=(0,be.useProductDataContext)(),o=a()(e,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":(0,ve.x)(r)});return(0,s.createElement)(Se,{product:r,showFormElements:t},(0,s.createElement)("div",{className:o},(0,s.createElement)(He,null)))}))},3975:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(721),o=r(495),a=r(6271);const n=(0,s.withFilteredAttributes)(a.Z)(o.Z)},8971:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(4617),o=r(5736),a=r(9060),n=r(3243),c=r(8752);const i=e=>{const t={};return void 0!==e.label&&(t.label=e.label),void 0!==e.required&&(t.required=e.required),void 0!==e.hidden&&(t.hidden=e.hidden),void 0===e.label||e.optionalLabel||(t.optionalLabel=(0,o.sprintf)(/* translators: %s Field label. */ /* translators: %s Field label. */
(0,o.__)("%s (optional)","woocommerce"),e.label)),e.priority&&((0,a.h)(e.priority)&&(t.index=e.priority),(0,n.H)(e.priority)&&(t.index=parseInt(e.priority,10))),e.hidden&&(t.required=!1),t},l=Object.entries(c.vr).map((([e,t])=>[e,Object.entries(t).map((([e,t])=>[e,i(t)])).reduce(((e,[t,r])=>(e[t]=r,e)),{})])).reduce(((e,[t,r])=>(e[t]=r,e)),{}),u=(e,t,r="")=>{const o=r&&void 0!==l[r]?l[r]:{};return e.map((e=>({key:e,...s.defaultFields[e]||{},...o[e]||{},...t[e]||{}}))).sort(((e,t)=>e.index-t.index))}},6112:(e,t,r)=>{"use strict";r.d(t,{O:()=>d});var s=r(9307),o=r(4801),a=r(9818),n=r(7845),c=r(2592);const i=e=>{const t=null==e?void 0:e.detail;t&&t.preserveCartData||(0,a.dispatch)(o.CART_STORE_KEY).invalidateResolutionForStore()},l=e=>{(null!=e&&e.persisted||"back_forward"===(0,n.f)())&&(0,a.dispatch)(o.CART_STORE_KEY).invalidateResolutionForStore()},u=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},d=()=>{(0,s.useEffect)((()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(e=window.wcBlocksStoreCartListeners)||void 0===e?void 0:e.count)>0)return void window.wcBlocksStoreCartListeners.count++;var e;document.body.addEventListener("wc-blocks_added_to_cart",i),document.body.addEventListener("wc-blocks_removed_from_cart",i),window.addEventListener("pageshow",l);const t=(0,c.Es)("added_to_cart","wc-blocks_added_to_cart"),r=(0,c.Es)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",i),document.body.removeEventListener("wc-blocks_removed_from_cart",i),window.removeEventListener("pageshow",l),t(),r()}})(),u)),[])}},9477:(e,t,r)=>{"use strict";r.d(t,{b:()=>S});var s=r(9262),o=r.n(s),a=r(9307),n=r(4801),c=r(9818),i=r(2629),l=r(9040),u=r(8449),d=r(6112);const E={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},p={...E,email:""},m={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:n.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},_=e=>Object.fromEntries(Object.entries(e).map((([e,t])=>[e,(0,i.decodeEntities)(t)]))),h={cartCoupons:n.EMPTY_CART_COUPONS,cartItems:n.EMPTY_CART_ITEMS,cartFees:n.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:n.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:m,cartIsLoading:!0,cartErrors:n.EMPTY_CART_ERRORS,billingAddress:p,shippingAddress:E,shippingRates:n.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentMethods:n.EMPTY_PAYMENT_METHODS,paymentRequirements:n.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:n.EMPTY_EXTENSIONS},S=(e={shouldSelect:!0})=>{const{isEditor:t,previewData:r}=(0,u._)(),s=null==r?void 0:r.previewCart,{shouldSelect:i}=e,m=(0,a.useRef)();(0,d.O)();const S=(0,c.useSelect)(((e,{dispatch:r})=>{if(!i)return h;if(t)return{cartCoupons:s.coupons,cartItems:s.items,crossSellsProducts:s.cross_sells,cartFees:s.fees,cartItemsCount:s.items_count,cartItemsWeight:s.items_weight,cartNeedsPayment:s.needs_payment,cartNeedsShipping:s.needs_shipping,cartItemErrors:n.EMPTY_CART_ITEM_ERRORS,cartTotals:s.totals,cartIsLoading:!1,cartErrors:n.EMPTY_CART_ERRORS,billingData:p,billingAddress:p,shippingAddress:E,extensions:n.EMPTY_EXTENSIONS,shippingRates:s.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:s.has_calculated_shipping,paymentRequirements:s.paymentRequirements,receiveCart:"function"==typeof(null==s?void 0:s.receiveCart)?s.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==s?void 0:s.receiveCartContents)?s.receiveCartContents:()=>{}};const o=e(n.CART_STORE_KEY),a=o.getCartData(),c=o.getCartErrors(),u=o.getCartTotals(),d=!o.hasFinishedResolution("getCartData"),m=o.isCustomerDataUpdating(),{receiveCart:S,receiveCartContents:b}=r(n.CART_STORE_KEY),v=_(a.billingAddress),R=a.needsShipping?_(a.shippingAddress):v,f=a.fees.length>0?a.fees.map((e=>_(e))):n.EMPTY_CART_FEES;return{cartCoupons:a.coupons.length>0?a.coupons.map((e=>({...e,label:e.code}))):n.EMPTY_CART_COUPONS,cartItems:a.items,crossSellsProducts:a.crossSells,cartFees:f,cartItemsCount:a.itemsCount,cartItemsWeight:a.itemsWeight,cartNeedsPayment:a.needsPayment,cartNeedsShipping:a.needsShipping,cartItemErrors:a.errors,cartTotals:u,cartIsLoading:d,cartErrors:c,billingData:(0,l.QI)(v),billingAddress:(0,l.QI)(v),shippingAddress:(0,l.QI)(R),extensions:a.extensions,shippingRates:a.shippingRates,isLoadingRates:m,cartHasCalculatedShipping:a.hasCalculatedShipping,paymentRequirements:a.paymentRequirements,receiveCart:S,receiveCartContents:b}}),[i]);return m.current&&o()(m.current,S)||(m.current=S),m.current}},7001:(e,t,r)=>{"use strict";r.d(t,{c:()=>l});var s=r(9307),o=r(9818),a=r(4801),n=r(2629),c=r(9477);const i=(e,t)=>{const r=e.find((({id:e})=>e===t));return r?r.quantity:0},l=e=>{const{addItemToCart:t}=(0,o.useDispatch)(a.CART_STORE_KEY),{cartItems:r,cartIsLoading:l}=(0,c.b)(),{createErrorNotice:u,removeNotice:d}=(0,o.useDispatch)("core/notices"),[E,p]=(0,s.useState)(!1),m=(0,s.useRef)(i(r,e));return(0,s.useEffect)((()=>{const t=i(r,e);t!==m.current&&(m.current=t)}),[r,e]),{cartQuantity:Number.isFinite(m.current)?m.current:0,addingToCart:E,cartIsLoading:l,addToCart:(r=1)=>(p(!0),t(e,r).then((()=>{d("add-to-cart")})).catch((e=>{u((0,n.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{p(!1)})))}}},8360:(e,t,r)=>{"use strict";r.d(t,{n:()=>n});var s=r(2694),o=r(9818),a=r(9307);const n=()=>({dispatchStoreEvent:(0,a.useCallback)(((e,t={})=>{try{(0,s.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,a.useCallback)(((e,t={})=>{try{(0,s.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,o.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])})},8449:(e,t,r)=>{"use strict";r.d(t,{_:()=>a}),r(9196);var s=r(9307);r(9818);const o=(0,s.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),a=()=>(0,s.useContext)(o)},9530:(e,t,r)=>{"use strict";r.d(t,{s:()=>n});var s=r(9307),o=r(9127),a=r.n(o);function n(e){const t=(0,s.useRef)(e);return a()(e,t.current)||(t.current=e),t.current}},9040:(e,t,r)=>{"use strict";r.d(t,{QI:()=>a});var s=r(8971),o=(r(6483),r(2629),r(8752));const a=e=>{const t=(0,s.Z)(o.lB,{},e.country),r=Object.assign({},e);return t.forEach((({key:t="",hidden:s=!1})=>{s&&((e,t)=>e in t)(t,e)&&(r[t]="")})),r}},7845:(e,t,r)=>{"use strict";r.d(t,{f:()=>s});const s=()=>window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""},2592:(e,t,r)=>{"use strict";r.d(t,{Es:()=>n,Q9:()=>a});const s=window.CustomEvent||null,o=(e,{bubbles:t=!1,cancelable:r=!1,element:o,detail:a={}})=>{if(!s)return;o||(o=document.body);const n=new s(e,{bubbles:t,cancelable:r,detail:a});o.dispatchEvent(n)},a=({preserveCartData:e=!1})=>{o("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:e}})},n=(e,t,r=!1,s=!1)=>{if("function"!=typeof jQuery)return()=>{};const a=()=>{o(t,{bubbles:r,cancelable:s})};return jQuery(document).on(e,a),()=>jQuery(document).off(e,a)}},2684:(e,t,r)=>{"use strict";r.d(t,{K:()=>o,L:()=>s});const s=e=>e.is_purchasable||!1,o=e=>["simple","variable"].includes(e.type||"simple")},2893:(e,t,r)=>{"use strict";r.d(t,{F:()=>s});const s=e=>null===e},9060:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});const s=e=>"number"==typeof e},7998:(e,t,r)=>{"use strict";r.d(t,{$n:()=>a,Kn:()=>o,Qr:()=>n});var s=r(2893);const o=e=>!(0,s.F)(e)&&e instanceof Object&&e.constructor===Object;function a(e,t){return o(e)&&t in e}const n=e=>0===Object.keys(e).length},3243:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});const s=e=>"string"==typeof e},5425:()=>{},354:()=>{},1029:()=>{},7440:()=>{}}]);