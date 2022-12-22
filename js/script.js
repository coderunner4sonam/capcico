//hover
$(document).ready(function(){
	$('ul.nav li.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn();
		
	}, function(){
		
		$('.dropdown-menu', this).fadeOut('fast');
		
	}); 
	
}); 


//menu toggle
$(document).ready(function(){
	$("#wrapper").toggleClass("menuDisplayed");
$("#toggle-btn").click(function(e){
	e.preventDefault();
	$("#wrapper").toggleClass("menuDisplayed");	
});
});
