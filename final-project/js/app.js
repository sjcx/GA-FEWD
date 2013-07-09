$(document).ready(function(){
	$('.level_2').hide();
	
	$('.level_1').hover(function(){
		$(this).children('.level_2').show();},
		function(){
		$(this).children('.level_2').hide();
	});
	


})	
	