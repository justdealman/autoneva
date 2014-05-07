jQuery(document).ready(function($) {
	
				$("#scrollx1").mCustomScrollbar({
					horizontalScroll:true,
					advanced:{
						autoExpandHorizontalScroll:true
					}
				});
				$("#scrollx2").mCustomScrollbar({
					horizontalScroll:true,
					advanced:{
						autoExpandHorizontalScroll:true
					}
				});
				$("#scrollx3").mCustomScrollbar({
					horizontalScroll:true,
					advanced:{
						autoExpandHorizontalScroll:true
					}
				});
				$("#scrollx4").mCustomScrollbar({
					horizontalScroll:true,
					advanced:{
						autoExpandHorizontalScroll:true
					}
				});
				
				$("#scrolly1").mCustomScrollbar({
					scrollInertia:0
				});
				
				$("#scrolly2").mCustomScrollbar({
					scrollInertia:0
				});
				
				$("#scrolly3").mCustomScrollbar({
					scrollInertia:0
				});
				
				$("#scrolly4").mCustomScrollbar({
					scrollInertia:0
				});
				$("#scrolly5").mCustomScrollbar({
					scrollInertia:0
				});
				$("#scrolly6").mCustomScrollbar({
					scrollInertia:0
				});
				
				
				
				
				
				var str = $('input#minCost').val();
				var str2 = $('input#maxCost').val();
				jQuery("#slider").slider({
				min: 0,
				max: 150000000,
				values: [25000000,100000000],
				range: true,
			    stop: function(event, ui) {
					jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
					jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
					function number_format( str ){
						return str.replace(/(\s)+/g, '').replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ');
					}
					$('input#minCost, input#maxCost').each(function(event){ 
					  $(this).val( number_format ( $(this).val() ) );
					}); 
				 },
				 slide: function(event, ui){
				  jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
				  jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
				  function number_format( str ){
						return str.replace(/(\s)+/g, '').replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ');
					}
					$('input#minCost, input#maxCost').each(function(event){ 
					  $(this).val( number_format ( $(this).val() ) );
					});
				 }
				});
				
				jQuery("#slider2").slider({
				min: 1950,
				max: 2013,
				values: [1961,2001],
				range: true,
			    stop: function(event, ui) {
					jQuery("input#minCost1").val(jQuery("#slider2").slider("values",0));
					jQuery("input#maxCost1").val(jQuery("#slider2").slider("values",1));
				 },
				 slide: function(event, ui){
				  jQuery("input#minCost1").val(jQuery("#slider2").slider("values",0));
				  jQuery("input#maxCost1").val(jQuery("#slider2").slider("values",1));
				 }
				});
				
				jQuery("#slider3").slider({
				min: 1,
				max: 5,
				values: [2,4],
				range: true,
			    stop: function(event, ui) {
					jQuery("input#minCost2").val(jQuery("#slider3").slider("values",0));
					jQuery("input#maxCost2").val(jQuery("#slider3").slider("values",1));
				 },
				 slide: function(event, ui){
				  jQuery("input#minCost2").val(jQuery("#slider3").slider("values",0));
				  jQuery("input#maxCost2").val(jQuery("#slider3").slider("values",1));
				 }
				});
				
				jQuery("#slider4").slider({
				min: 1,
				max: 5,
				values: [2,4],
				range: true,
			    stop: function(event, ui) {
					jQuery("input#minCost3").val(jQuery("#slider4").slider("values",0));
					jQuery("input#maxCost3").val(jQuery("#slider4").slider("values",1));
				 },
				 slide: function(event, ui){
				  jQuery("input#minCost3").val(jQuery("#slider4").slider("values",0));
				  jQuery("input#maxCost3").val(jQuery("#slider4").slider("values",1));
				 }
				});
				
function number_format( str ){
   return str.replace(/(\s)+/g, '').replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ');
}
$('input#minCost, input#maxCost').each(function(event){ 
  $(this).val( number_format ( $(this).val() ) );
});
$('input#minCost, input#maxCost').keyup(function(event){ 
  $(this).val( number_format ( $(this).val() ) );
}); 

				

				
				var params = {
			changedEl: "select"
		}
	cuSel(params);
				
				
			});