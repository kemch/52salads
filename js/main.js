
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