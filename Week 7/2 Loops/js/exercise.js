$(document).ready(function(){
	for(i=0; i<20; i++){
		console.log(i);
		var bubble = $('<div>');
		bubble.addClass('bubble');
		bubble.css({'background-color':'yellow',
		 'height':'10px',
		 'margin-bottom':'10px'
		 })
		$('body').append(bubble);
	}
})
