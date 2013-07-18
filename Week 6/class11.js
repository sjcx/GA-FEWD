$(document).ready(function(){
	
	var howMany = $(window).width() * $(window).height()/(100*100)
	
	goCrazy({
		numBoxes: howMany,
		initialFlickerTime: 10000,
		boxCSS: {
			'background-image': 'url(http://placekitten.com/100/100)',
			'width': '100px',
			'height': '100px',
			'transition': 'all 200ms linear',
			'border-radius': '50%',
			
		}
	})
})

