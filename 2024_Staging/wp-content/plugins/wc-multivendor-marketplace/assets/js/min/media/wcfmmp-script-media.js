/*! DO NOT EDIT THIS FILE. This file is a auto generated on 2023-03-25 */
jQuery(document).ready(function(a){$media_vendor="",$wcfm_media_table=a("#wcfm-media").DataTable({processing:!0,serverSide:!0,pageLength:parseInt(dataTables_config.pageLength),bFilter:!1,responsive:!0,language:a.parseJSON(dataTables_language),columns:[{responsivePriority:1},{responsivePriority:1},{responsivePriority:5},{responsivePriority:4},{responsivePriority:2},{responsivePriority:3},{responsivePriority:1}],columnDefs:[{targets:0,orderable:!1},{targets:1,orderable:!1},{targets:2,orderable:!1},{targets:3,orderable:!1},{targets:4,orderable:!1},{targets:5,orderable:!1},{targets:6,orderable:!1}],ajax:{type:"POST",url:wcfm_params.ajax_url,data:function(e){e.action="wcfm_ajax_controller",e.controller="wcfm-media",e.media_vendor=$media_vendor,e.wcfm_ajax_nonce=wcfm_params.wcfm_ajax_nonce},complete:function(){initiateTip(),a(document.body).trigger("updated_wcfm-media")}}}),a(document.body).on("updated_wcfm-media",function(){a(".wcfm_media_dalete").each(function(){a(this).click(function(e){e.preventDefault();e=confirm(wcfm_dashboard_messages.review_status_update_confirm);if(e){e=a(this);jQuery("#wcfm-media_wrapper").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),e={action:"wcfmmp_media_delete",mediaid:e.data("mediaid"),wcfm_ajax_nonce:wcfm_params.wcfm_ajax_nonce},jQuery.ajax({type:"POST",url:wcfm_params.ajax_url,data:e,success:function(e){$wcfm_media_table&&$wcfm_media_table.ajax.reload(),jQuery("#wcfm-media_wrapper").unblock()}})}return!1})})}),a(".bulk_action_checkbox_all").click(function(){a(this).is(":checked")?(a(".bulk_action_checkbox_all").attr("checked",!0),a(".bulk_action_checkbox_single").attr("checked",!0)):(a(".bulk_action_checkbox_all").attr("checked",!1),a(".bulk_action_checkbox_single").attr("checked",!1))}),a("#wcfm_bulk_mark_delete").click(function(e){if(e.preventDefault(),a("#wcfm-media_wrapper").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),$selected_media=[],a(".bulk_action_checkbox_single").each(function(){a(this).is(":checked")&&$selected_media.push(a(this).val())}),0===$selected_media.length)return alert(wcfm_dashboard_messages.wcfm_bulk_action_no_option),a("#wcfm-media_wrapper").unblock(),!1;confirm(wcfm_dashboard_messages.wcfm_bulk_action_confirm)?(e={action:"wcfmmp_bulk_media_delete",selected_media:$selected_media,wcfm_ajax_nonce:wcfm_params.wcfm_ajax_nonce},a.ajax({type:"POST",url:wcfm_params.ajax_url,data:e,success:function(e){e&&$wcfm_media_table&&$wcfm_media_table.ajax.reload(),a("#wcfm-media_wrapper").unblock()}})):a("#wcfm-media_wrapper").unblock()}),0<a("#dropdown_vendor").length&&a("#dropdown_vendor").on("change",function(){$media_vendor=a("#dropdown_vendor").val(),$wcfm_media_table.ajax.reload()}).select2($wcfm_vendor_select_args),0<a(".wcfm_filters_wrap").length&&(a(".dataTable").before(a(".wcfm_filters_wrap")),a(".wcfm_filters_wrap").css("display","inline-block")),a(document.body).on("updated_wcfm-media",function(){a.each(wcfm_media_screen_manage,function(e,a){$wcfm_media_table.column(e).visible(!1)})})});