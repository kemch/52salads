$(function(){
	
	var url, t, s, n;
	
	$('.salad-link').click(function(e) {
		t = $(this); 
		s = t.attr('data-salad'); // id of salad
		console.log(s);
		n = $('#' + s + ' h2').text();
		console.log(n);
		url = t.attr('data-href'); // ajax url
		$('body').toggleClass('dim');
		// $('#' + s).attr('style','width:100%;').addClass('open');
		$.ajax({
				url: url,
				cache: false
			})
			.done(function(html) {
				$('#recipe').html(html);
				$('.recipe-wrap h2').html(n);
				$('.close').click(function (e) {
					$('#recipe').html("");
					$('body').toggleClass('dim');
					return false;
					e.preventDefault();
				});
			});
		return false;
		e.preventDefault();
	});

});

var tag = $('.tag');
var item = $('.salad');
// .replace(/\s+/g, '-')
// var tagText = $('.tag').data('filter');
// tagText.replace(/\s+/g, '-');

$('.tag').each(function(){
	tagText = $(this).attr('data-filter');
	newText = tagText.replace(/\s+/g, '-').toLowerCase();
	// console.log(tagText + " -> " + newText);
	$(this).attr('data-filter', newText);
});

tag.click(function(e){
	// hide all salads
	$('.salad').attr('style','display:none;');

	var tagFilter = $(this).data('filter');
	
	console.log('clicked ' + tagFilter);

	$('.' + tagFilter).attr('style','');
	
	// itemFilter = '[data-ingredients~='+tagFilter+']';

	// if ($(this).hasClass('active')) {
	// 	$(itemFilter).addClass('hide');
	// 	// if (item.data('ingredients') === tagFilter) {
	// 	// 	item.addClass('hide');
	// 	// 	console.log('this worked.')
	// 	// }
		
	// } else {
	// 	$(itemFilter).removeClass('hide');
	// }
	$(this).toggleClass('active');
	e.preventDefault();
	return false;
});

// $('#filters a').click(function () {
// 	var selector = $(this).attr('data-filter');
// 	$container.isotope({
// 		filter: selector
// 	});
// 	return false;
// });