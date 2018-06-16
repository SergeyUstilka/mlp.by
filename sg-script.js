jQuery(document).ready(function() {

// Izmenenbie zagolovka stranicy korziny
jQuery('#site-header-cart li:first-child').prepend('<h3>Корзина</h3>')

//Script for category menu
for (var i=0; i<jQuery('.product-categories>li').length;i++){
	if (jQuery('.product-categories>li').eq(i).children().length > 1){
		jQuery('.product-categories>li').eq(i).append('<span class="menu-arrow"><span class="menu-arrow-sub"></span></span>')
	}

	
}
for (var i=0; i<jQuery('.product-categories>li .menu-arrow').length;i++){
	jQuery('.product-categories>li .menu-arrow').eq(i).click(function(){
		if (jQuery(this).parent().children().eq(1).css('display') == 'block'){
			jQuery(this).parent().removeClass('open');
		}
		else {
			
			jQuery(this).parent().addClass('open');
		}
		jQuery(this).parent().children().eq(1).slideToggle();
	});
	
}


	if(jQuery('.single-post .woocommerce-breadcrumb').children().eq(2).text() == 'Блог'){
		jQuery('.single-post .woocommerce-breadcrumb').children().eq(2).attr('href', "http://mlp.by/blog/");
	}

});