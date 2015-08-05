$(function() {

	// jQuery Goes here!

	// **** Start of hamburger icon click ****
	// When the hamburger menu icon is clicked...
	$('.fa-bars').on('click', function(){

		// Add a class of showNav and bounceInDown to the ul.mainNav 
		$('ul.mainNav').addClass('showNav bounceInDown');
		$('.fa-close').show().addClass('bounceInDown');
		$(this).hide();


		// When the animation is complete...
		$('ul.mainNav').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {

			//Remove the animate.css class name so it's ready for the next animation.
			$('ul.mainNav').removeClass('bounceInDown');
			$('.fa-close').removeClass('bounceInDown');
		});
	});

	// When a key on the keyboard is pressed....
	$(document).on('keyup', function(e){
		
		// If the keycode is the 'Escape' key...
		if (e.keyCode === 27) {

			// Add a class of bounceOutUp for the ul and the close icon
			$('ul.mainNav').addClass('bounceOutUp');
			$('.fa-close').addClass('bounceOutUp');

			// When the animation is complete...
			$('ul.mainNav').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
				
				// Remove the animated classname
				$('ul.mainNav').removeClass('bounceOutUp');
				// Remove the .showNav class
				$('ul.mainNav').removeClass('showNav');
				// Remove the animation of the close button
				$('.fa-close').removeClass('bounceOutUp').hide();
				// Show the hamburger menu icon
				$('.fa-bars').show();
			});
			
		}
	});


	// When the close icon is clicked....
	$('.fa-close').on('click', function() {

		// Add a class of bounceOutUp for the ul and the close icon
		$('ul.mainNav').addClass('bounceOutUp');
		$('.fa-close').addClass('bounceOutUp');

		
		// When the animation is complete...
		$('ul.mainNav').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			
			// Remove the animated classname
			$('ul.mainNav').removeClass('bounceOutUp');
			// Remove the .showNav class
			$('ul.mainNav').removeClass('showNav');
			// Remove the animation of the close button
			$('.fa-close').removeClass('bounceOutUp').hide();
			// Show the hamburger menu icon
			$('.fa-bars').show();
		});
	});

});