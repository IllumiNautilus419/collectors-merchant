jQuery((function(t){t(".tips").tooltip(),t(".dokan-settings-radio-image button").on("click",(function(e){e.preventDefault();var i=t(this),n=i.data("template"),a=i.data("input"),r=i.parents(".dokan-settings-radio-image-container");t("#"+a).val(n),r.find(".active").removeClass("active").addClass("not-active"),i.parents(".dokan-settings-radio-image").addClass("active").removeClass("not-active")})),t(document.body).on("wc_add_error_tip",(function(e,i,n){var a=i.position();0===i.parent().find(".wc_error_tip").length&&(i.after('<div class="wc_error_tip '+n+'">'+dokan[n]+"</div>"),i.parent().find(".wc_error_tip").css("left",a.left+i.width()-i.width()/2-t(".wc_error_tip").width()/2).css("top",a.top+i.height()).fadeIn("100"))})).on("wc_remove_error_tip",(function(e,i,n){i.parent().find(".wc_error_tip."+n).fadeOut("100",(function(){t(this).remove()}))})).on("click",(function(){t(".wc_error_tip").fadeOut("100",(function(){t(this).remove()}))})).on("blur",".wc_input_decimal[type=text], .wc_input_price[type=text], .wc_input_country_iso[type=text]",(function(){t(".wc_error_tip").fadeOut("100",(function(){t(this).remove()}))})).on("change",".wc_input_price[type=text], .wc_input_decimal[type=text], .wc-order-totals #refund_amount[type=text]",(function(){var e,i,n=dokan.decimal_point;(t(this).is(".wc_input_price")||t(this).is("#refund_amount"))&&(n=dokan.mon_decimal_point),e=new RegExp("[^-0-9%\\"+n+"]+","gi"),i=new RegExp("\\"+n+"+","gi");var a=t(this).val(),r=a.replace(e,"").replace(i,n);a!==r&&t(this).val(r)})).on("keyup",".wc_input_price[type=text], .wc_input_decimal[type=text], .wc_input_country_iso[type=text], .wc-order-totals #refund_amount[type=text]",(function(){var e,i,n,a=!1;t(this).is(".wc_input_price")||t(this).is("#refund_amount")?(a=!0,e=new RegExp("[^-0-9%\\"+dokan.mon_decimal_point+"]+","gi"),n=new RegExp("[^\\"+dokan.mon_decimal_point+"]","gi"),i="i18n_mon_decimal_error"):t(this).is(".wc_input_country_iso")?(e=new RegExp("([^A-Z])+|(.){3,}","im"),i="i18n_country_iso_error"):(a=!0,e=new RegExp("[^-0-9%\\"+dokan.decimal_point+"]+","gi"),n=new RegExp("[^\\"+dokan.decimal_point+"]","gi"),i="i18n_decimal_error");var r=t(this).val(),o=r.replace(e,"");a&&1<o.replace(n,"").length&&(o=o.replace(n,"")),r!==o?t(document.body).triggerHandler("wc_add_error_tip",[t(this),i]):t(document.body).triggerHandler("wc_remove_error_tip",[t(this),i])})).on("change","#_sale_price.wc_input_price[type=text], .wc_input_price[name^=variable_sale_price]",(function(){var e,i=t(this);e=-1!==i.attr("name").indexOf("variable")?i.parents(".variable_pricing").find(".wc_input_price[name^=variable_regular_price]"):t("#_regular_price"),parseFloat(window.accounting.unformat(i.val(),dokan.mon_decimal_point))>=parseFloat(window.accounting.unformat(e.val(),dokan.mon_decimal_point))&&t(this).val("")})).on("keyup","#_sale_price.wc_input_price[type=text], .wc_input_price[name^=variable_sale_price]",(function(){var e,i=t(this);e=-1!==i.attr("name").indexOf("variable")?i.parents(".variable_pricing").find(".wc_input_price[name^=variable_regular_price]"):t("#_regular_price"),parseFloat(window.accounting.unformat(i.val(),dokan.mon_decimal_point))>=parseFloat(window.accounting.unformat(e.val(),dokan.mon_decimal_point))?t(document.body).triggerHandler("wc_add_error_tip",[t(this),"i18n_sale_less_than_regular_error"]):t(document.body).triggerHandler("wc_remove_error_tip",[t(this),"i18n_sale_less_than_regular_error"])})).on("init_tooltips",(function(){t(".tips, .help_tip, .woocommerce-help-tip").tipTip({attribute:"data-tip",fadeIn:50,fadeOut:50,delay:200}),t(".column-wc_actions .wc-action-button").tipTip({fadeIn:50,fadeOut:50,delay:200}),t(".parent-tips").each((function(){t(this).closest("a, th").attr("data-tip",t(this).data("tip")).tipTip({attribute:"data-tip",fadeIn:50,fadeOut:50,delay:200}).css("cursor","help")}))}))}));