var $currentImg = $('img[alt="Batman"]');

$currentImg.addClass('shown');
	//$('.name').text('Batman');

$('button.next').on('click',function(){
	$('.gallery .hero').prev().removeClass('shown');
	$('.gallery .hero').next().addClass('shown');
});
