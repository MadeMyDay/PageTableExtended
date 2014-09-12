$(document).ready(function() {

	// collapse hidden parts
	$('.InputfieldPageTableContainer table tbody').on('sortcreate', function(event, ui){
		console.log(event);
		$('div.renderedLayout:not(.pte-open)').hide();
	})

	if($(".InputfieldPageTableExtended table").length >0){
		InputfieldPageTableSortable($(".InputfieldPageTableExtended table"));
		$('.InputfieldPageTableExtended').on('click',' a.toggleRenderedLayout',function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			$(this).next('span').toggleClass('pte-open');
			var $this = $(this).find('i').eq(0);
			$(this).nextAll('div.renderedLayout').eq(0).slideToggle(300,function(){
				if($this.hasClass('fa-angle-down')){
					$this.removeClass('fa-angle-down').addClass('fa-angle-right');
				} else {
					$this.removeClass('fa-angle-right').addClass('fa-angle-down');
				}
			});
		})
	}
}); 
