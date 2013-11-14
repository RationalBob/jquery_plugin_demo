$(document).ready(function(){

	var opts = {
		chars_preset: 'alphanum',
		align: 'left',
		width: 11
    };
	$('input.display').flapper(opts).val('HELLO THERE').change();
	
	var inputValue = $("#flapperInput").val().toUpperCase();
	
	$('#change').click(function() {
		$('input.display').val(inputValue).change();
	});
	
	
	$("#commentForm").validate();
	
	$(function(){
		$("ul#ticker").liScroll();
	});
	
	$(".fancybox").fancybox({
		openEffect:"elastic",
		closeEffect:"elastic"		
	});
	
	$(".raptor").raptorize();
	
});
