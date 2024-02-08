(()=>{var t,e,n,r,a,o,i,u,c,s,l,f,d,p,y={506:t=>{t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},713:t=>{t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},525:(t,e,n)=>{var r=n(331);function a(e,n,o){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=a=Reflect.get:t.exports=a=function(t,e,n){var a=r(t,e);if(a){var o=Object.getOwnPropertyDescriptor(a,e);return o.get?o.get.call(n):o.value}},a(e,n,o||e)}t.exports=a},754:t=>{function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},205:(t,e,n)=>{var r=n(489);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},318:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}}},585:(t,e,n)=>{var r=n(8),a=n(506);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?a(t):e}},489:t=>{function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},331:(t,e,n)=>{var r=n(754);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},8:t=>{function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},886:(t,e,n)=>{var r=n(318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(713)),o=r(n(575)),i=r(n(913));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c=function(){function t(e,n){var r=n.elementType,a=void 0===r?"":r,i=n.elementId,u=void 0===i?"":i,c=n.isSupported,s=void 0===c?function(){return!0}:c;(0,o.default)(this,t),this.gateway=e,this.elementType=a,this.elementId=u,this.isSupported=s,this.msgElement=null}return(0,i.default)(t,[{key:"getElementType",value:function(){return this.elementType}},{key:"createMessage",value:function(){if(this.isSupported(this.gateway)&&this.createMessageElement()){var t=this.getElementContainer();t&&this.mount(t)}}},{key:"createMessageElement",value:function(){try{var t,e;this.msgElement?this.msgElement.update(this.getMessageOptions()):this.msgElement=null===(t=this.gateway)||void 0===t||null===(e=t.elements)||void 0===e?void 0:e.create(this.getElementType(),this.getMessageOptions())}catch(t){}return this.msgElement}},{key:"getMessageOptions",value:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({amount:this.getTotalPriceCents(),currency:this.gateway.get_currency()},this.gateway.params.messageOptions)}},{key:"mount",value:function(t){try{this.msgElement.mount(t)}catch(t){console.log(t)}}},{key:"getElementContainer",value:function(){}},{key:"getTotalPriceCents",value:function(){var t;return null===(t=this.gateway.get_gateway_data())||void 0===t?void 0:t.total_cents}},{key:"getTotalPrice",value:function(){var t;return null===(t=this.gateway.get_gateway_data())||void 0===t?void 0:t.total}}]),t}();e.default=c},450:(t,e,n)=>{var r=n(318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(575)),o=r(n(913)),i=r(n(205)),u=r(n(585)),c=r(n(754)),s=r(n(567));var l=function(t){(0,i.default)(l,t);var e,n,r=(e=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,c.default)(e);if(n){var a=(0,c.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,u.default)(this,t)});function l(t,e){var n;return(0,a.default)(this,l),(n=r.call(this,t,e)).containerId=e.containerId,n.initialize(),n}return(0,o.default)(l,[{key:"initialize",value:function(){(0,s.default)(document.body).on("updated_wc_div",this.updatedHtml.bind(this)),(0,s.default)(document.body).on("updated_cart_totals",this.updatedHtml.bind(this)),this.createMessage()}},{key:"updatedHtml",value:function(){this.gateway.has_gateway_data()&&this.createMessage()}},{key:"getElementContainer",value:function(){return(0,s.default)("#".concat(this.elementId)).length||(0,s.default)(".cart_totals table.shop_table > tbody").append('<tr id="'.concat(this.containerId,'"><td colspan="2"><div id="').concat(this.elementId,'"></div></td></tr>')),document.getElementById(this.elementId)}}]),l}(r(n(886)).default);e.default=l},628:(t,e,n)=>{var r=n(318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(713)),o=r(n(575)),i=r(n(913));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(){function t(e,n,r){(0,o.default)(this,t),this.id=r.id,this.elementType=r.elementType,this.props=r,this.stripe=e,this.elements=e.elements({locale:"auto"}),this.data=n,this.initialize()}return(0,i.default)(t,[{key:"initialize",value:function(){this.createMessages()}},{key:"createMessages",value:function(){if(this.props.isSupported(this)){var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(this.data.products);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.isSupportedProduct(n)&&this.createMessage(n)}}catch(t){e.e(t)}finally{e.f()}}}},{key:"createMessage",value:function(t){try{var e=this.elements.create(this.elementType,this.getMessageOptions(t)),n=this.getMessageContainer(t);n&&e.mount(n)}catch(t){console.log(t)}}},{key:"isSupportedProduct",value:function(t){var e=this.data.product_types.includes(t.product_type);return e&&this.props.isSupportedProduct&&(e=this.props.isSupportedProduct(this,t)),e}},{key:"getMessageContainer",value:function(t){var e="".concat(this.id,"-").concat(t.id);return e="wc-stripe-shop-message-".concat(e),document.getElementById("".concat(e))}},{key:"getMessageOptions",value:function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({amount:t.price_cents,currency:this.data.currency},this.data[this.id].messageOptions)}}]),t}();e.default=s},663:(t,e,n)=>{var r=n(318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(575)),o=r(n(913)),i=r(n(525)),u=r(n(205)),c=r(n(585)),s=r(n(754)),l=r(n(567));var f=function(t){(0,u.default)(f,t);var e,n,r=(e=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,s.default)(e);if(n){var a=(0,s.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,c.default)(this,t)});function f(){var t;(0,a.default)(this,f);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=r.call.apply(r,[this].concat(n))).initialize(),t}return(0,o.default)(f,[{key:"isEnabled",value:function(){return this.gateway.params.payment_sections.includes("checkout")}},{key:"initialize",value:function(){this.isEnabled()&&((0,l.default)(document.body).on("updated_checkout",this.updatedCheckout.bind(this)),this.gateway.has_gateway_data()&&this.createMessage())}},{key:"updatedCheckout",value:function(){this.createMessage()}},{key:"createMessage",value:function(){this.gateway.has_gateway_data()&&(0,i.default)((0,s.default)(f.prototype),"createMessage",this).call(this)}},{key:"getElementContainer",value:function(){return(0,l.default)("#".concat(this.elementId)).length||(0,l.default)('label[for="payment_method_'.concat(this.gateway.gateway_id,'"]')).append('<div id="'.concat(this.elementId,'"></div>')),document.getElementById(this.elementId)}}]),f}(r(n(886)).default);e.default=f},264:(t,e,n)=>{var r=n(318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(575)),o=r(n(913)),i=r(n(525)),u=r(n(205)),c=r(n(585)),s=r(n(754)),l=r(n(567));var f=function(t){(0,u.default)(f,t);var e,n,r=(e=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,s.default)(e);if(n){var a=(0,s.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,c.default)(this,t)});function f(){return(0,a.default)(this,f),r.apply(this,arguments)}return(0,o.default)(f,[{key:"getMessageOptions",value:function(){var t=(0,i.default)((0,s.default)(f.prototype),"getMessageOptions",this).call(this),e=(0,l.default)("#billing_country").val();return"string"==typeof e&&e.length>0&&(t.countryCode=e),t}}]),f}(r(n(663)).default);e.default=f},579:(t,e,n)=>{var r=n(318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(575)),o=r(n(913)),i=r(n(205)),u=r(n(585)),c=r(n(754)),s=r(n(567));var l=function(t){(0,i.default)(l,t);var e,n,r=(e=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,c.default)(e);if(n){var a=(0,c.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,u.default)(this,t)});function l(){var t;(0,a.default)(this,l);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=r.call.apply(r,[this].concat(n))).initialize(),t}return(0,o.default)(l,[{key:"initialize",value:function(){(0,s.default)(document.body).on("change",'[name="quantity"]',this.createMessage.bind(this,!0)),(0,s.default)("form.cart").on("found_variation",this.foundVariation.bind(this)),(0,s.default)("form.cart").on("reset_data",this.resetVariationData.bind(this)),this.createMessage()}},{key:"foundVariation",value:function(){var t;(t=this.gateway).found_variation.apply(t,arguments),this.createMessage()}},{key:"resetVariationData",value:function(){var t;(t=this.gateway).reset_variation_data.apply(t,arguments),this.createMessage()}},{key:"getElementContainer",value:function(){return(0,s.default)("#".concat(this.elementId)).length||((0,s.default)(".summary .price").length?(0,s.default)(".summary .price").append('<div id="'.concat(this.elementId,'"></div>')):(0,s.default)(".price").length&&(0,s.default)((0,s.default)(".price")[0]).append('<div id="'.concat(this.elementId,'"></div>'))),document.getElementById(this.elementId)}},{key:"getTotalPriceCents",value:function(){var t,e;return this.gateway.has_gateway_data()?(null===(t=this.gateway.get_gateway_data())||void 0===t||null===(e=t.product)||void 0===e?void 0:e.price_cents)*this.getQuantity():0}},{key:"getQuantity",value:function(){var t=(0,s.default)('[name="quantity"]').val();return isNaN(t)&&(t=0),parseInt(t)}}]),l}(r(n(886)).default);e.default=l},567:t=>{"use strict";t.exports=window.jQuery},707:t=>{"use strict";t.exports=window.wc_stripe}},h={};function v(t){var e=h[t];if(void 0!==e)return e.exports;var n=h[t]={exports:{}};return y[t](n,n.exports,v),n.exports}t=v(318),e=t(v(575)),n=t(v(205)),r=t(v(585)),a=t(v(754)),o=v(707),i=t(v(450)),u=t(v(264)),c=t(v(628)),s=t(v(579)),d="paymentMethodMessaging",p=function(t){(0,n.default)(c,t);var o,i,u=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,a.default)(o);if(i){var n=(0,a.default)(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return(0,r.default)(this,t)});function c(t){return(0,e.default)(this,c),u.call(this,t)}return c}(o.BaseGateway),"undefined"!=typeof wc_stripe_klarna_cart_params&&new i.default(new p(wc_stripe_klarna_cart_params),{elementType:d,elementId:"wc-stripe-klarna-cart-msg",containerId:"wc-stripe-klarna-cart-container"}),"undefined"!=typeof wc_stripe_klarna_product_params&&(Object.assign(p.prototype,o.ProductGateway.prototype),new s.default(new p(wc_stripe_klarna_product_params),{elementType:d,elementId:"wc-stripe-klarna-product-msg"})),"undefined"!=typeof wc_stripe_local_payment_params&&null!==(l=wc_stripe_local_payment_params)&&void 0!==l&&null!==(f=l.gateways)&&void 0!==f&&f.stripe_klarna&&new u.default(new p(wc_stripe_local_payment_params.gateways.stripe_klarna),{elementType:d,elementId:"wc-stripe-klarna-message-container"}),"undefined"!=typeof wc_stripe_bnpl_shop_params&&new c.default(o.stripe,wc_stripe_bnpl_shop_params,{id:"stripe_klarna",elementType:d,isSupported:function(){return!0}})})();
//# sourceMappingURL=klarna-message.js.map