$(document).ready(function() {

	// $(document).on('click', '.InputfieldPageTableAdd, .InputfieldPageTableEdit', InputfieldPageTableDialog); 
	// $(document).on('click', 'a.InputfieldPageTableDelete', InputfieldPageTableDelete); 
	if($(".InputfieldPageTableExtended table").length >0){
		InputfieldPageTableSortable($(".InputfieldPageTableExtended table"));
		$('.InputfieldPageTableExtended').on('click',' a.toggleRenderedLayout',function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			$(this).next('span').toggleClass('inactive');
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
