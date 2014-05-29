jQuery(document).ready(function($){	
(function($){
$.fn.clearDefault = function(){
return this.each(function(){
var default_value = $(this).val();
$(this).focus(function(){
if ($(this).val() == default_value) $(this).val("");
});
$(this).blur(function(){
if ($(this).val() == "") $(this).val(default_value);
});
});
};
})(jQuery); 
$('.search input[type=text]').clearDefault();
$('.search2 input[type=text]').clearDefault();

$('.linksrvn').click(function(){
	$(this).parents('.link').find('.more_link').toggle();
	return;
});

$('.link_selection a').click(function(){
	$('.pop').show();
	$('.models').show();
});

$('#log').click(function(){
	$('.pop').show();
	$('.login_box').show();
});

$('.town .twn, .town .c_gray').click(function(){
	$('.town .hint').hide();
	$('.pop').show();
	$('.town_box').show();
	return false;
});

$('.town .c_blue').click(function(){
	$('.town .hint').hide();
	return false;
});

$(window).scroll(function(){
	if($(window).scrollTop() > 300) {$('.go_top').fadeIn()} else {$('.go_top').fadeOut()}
});

$('.go_top a').click(function(){
	$('html, body').animate({scrollTop:0}, 'middle');
});

$('.close').click(function(){
	$('.pop').hide();
	$(this).parent().hide();
});

$('.pop_bg').click(function(){
	$('.pop').hide();
	$('.models').hide();
	$('.login_box').hide();
	$('.town_box').hide();
});

$('.corp a').click(function(){
	$(this).toggleClass('on');
});

$('.ad_box a').hover(function(){
$(this).parent().parent().find('a').addClass('hover');	
},
function(){
$('.ad_box a').removeClass('hover');
});

$('.filter_auto .named').hover(function(){
	$('.hide_box').hide();
	$(this).parents('tr').find('.hide_box').show();
	return false;
},function(){
	$('.hide_box').hide();
});

$('.image_anonce a').hover(function(){
$(this).parent().parent().find('.name a').addClass('hover');	
},
function(){
$('.name a').removeClass('hover');
});

$('.add_rev.false a').hover(function(){
	$(this).parent().find('.hint').show();
},function(){
	$(this).parent().find('.hint').hide();
});

$('.table_stroke a').click(function(){
	$(this).toggleClass('on');
	if(!$(this).hasClass('all')) {$(this).parents('tr').find('.all').removeClass('on');}
	return false;
});

$('.kuzov a').click(function(){
	$(this).toggleClass('on');
	if(!$(this).hasClass('all')) {$(this).parents('tr').find('.all').removeClass('on');}
	return false;
});

$('.size_kuzov a').click(function(){
	$(this).toggleClass('on');
	if(!$(this).hasClass('all')) {$(this).parents('tr').find('.all').removeClass('on');}
	return false;
});

$('.open_search').click(function(){
	$(this).parents('.search_box').toggleClass('closed_box');
	$(this).toggleClass('on');
	if (!$(this).parents('.search_box').hasClass('closed_box')) {
		$(this).parents('.search_box').find('.filter').fadeIn(800);
		
	} else {
		$(this).parents('.search_box').find('.filter').hide();
	}
	return false;
});


$('.table_stroke .all').click(function(){
	$(this).parents('tr').find('a').removeClass('on');
	$(this).toggleClass('on');
});

$('.sh_stroke a').click(function(){
	$(this).toggleClass('active');
	if ($(this).hasClass('active')) {
	$('.solutions .tab a').removeClass('current');
	$('.solutions .bl_tab').slideUp(150);
	} 
	else {
	$('.solutions .tab a').removeClass('current');
	$('.solutions .bl_tab').hide(); 
	$('#tab1').slideDown(150); $('#tabs1 a').eq(0).addClass('current');
	}
});

$('.tab .popular').click(function(){
	$('#tabs2 a').removeClass('current');
	$(this).addClass('current');
	$('.bl_tab2 .corp').hide();
	$('.bl_tab2 .popular-corp').show();
});

$('.tab .all').click(function(){
	$('#tabs2 a').removeClass('current');
	$(this).addClass('current');
	$('.bl_tab2 .corp').show();
});

$('.filter .name a').click(function(){
		
	$(this).toggleClass('on');
	$(this).parent().next('.filt').slideToggle(350);
	setTimeout(function(){
	var sorth = $('.filter').height();
		$('.used.modal').animate({'top': + sorth/2},1);
	},500)
	
});

$('.video .image a, .video .name a').hover(function(){
	$(this).parents('.video').find('.name a, .image a').addClass('hover');
},
function(){
	$(this).parents('.video').find('.name a, .image a').removeClass('hover');
});

$('.marka .bl_tab2 a').click(function(){
	$(this).toggleClass('on');
	return false;
});

$('#tabs3 .popular').click(function(){
	$('#tabs3 a').removeClass('current');
	$(this).addClass('current');
	$('.marka .bl_tab2 a').hide();
	$('.marka .bl_tab2 a.popular').show();
});

$('#tabs3 .all').click(function(){
	$('#tabs3 a').removeClass('current');
	$(this).addClass('current');
	$('.marka .bl_tab2 a').show();
});

$('#tabs4 .favorite').click(function(){
	$('#tabs4 a').removeClass('current');
	$(this).addClass('current');
	$('.tag_mark a').hide();
	$('.tag_mark a.popular').show();
});

$('#tabs4 .full').click(function(){
	$('#tabs4 a').removeClass('current');
	$(this).addClass('current');
	$('.tag_mark a').show();
});

$('#tabs5 .popular').click(function(){
	$('#tabs5 a').removeClass('current');
	$(this).addClass('current');
	$('.word_box .word_item').hide();
	$('.word_box .fav').show();
	$('.sort_word a').addClass('gray');
	$('.sort_word .fav').removeClass('gray');
});

$('#tabs5 .all').click(function(){
	$('#tabs5 a').removeClass('current');
	$(this).addClass('current');
	$('.word_box .word_item').show();
	$('.sort_word a').removeClass('gray');
});

$('.sort_mark .favorite').click(function(){
	$('.sort_mark a').removeClass('current');
	$(this).addClass('current');
	$('.select_mark .list1 p').hide();
	$('.select_mark .list1 .fav').show();
	return false;
});

$('.sort_mark .full').click(function(){
	$('.sort_mark a').removeClass('current');
	$(this).addClass('current');
	$('.select_mark .list1 p').show();
	return false;
});

$('.news_link').click(function(){
	$(this).toggleClass('on');
	$(this).parent().find('.select_mark').fadeToggle();
});

$('.novetly .image a').hover(function(){
	$(this).parents('.novetly').find('.name a').css('text-decoration','underline');
}, function(){
	$(this).parents('.novetly').find('.name a').css('text-decoration','none');
});

$('.novetly .image div a').hover(function() {
	$('.novetly .name a').css('text-decoration','none');
});

$('.sort_word a').click(function(){
	$('.sort_word a').removeClass('curr');
	$(this).addClass('curr');
	var val = $(this).attr('href');
	var pos = val.replace('#','');
	$('.word_box').removeClass('active');
	$('#'+pos+'').addClass('active');
});

$('.sort_word a[href^="#"]').bind('click.smoothscroll',function (e) {
	e.preventDefault();
  
	var target = this.hash,
	$target = $(target);
  
	$('html, body').stop().animate({
		'scrollTop': $target.offset().top-20
	}, 900, 'swing', function () {
//		window.location.hash = target;
	});
});

$('.srv').click(function(){
	$(this).toggleClass('del');
	$(this).parents('.image').find('.vsr').toggleClass('on');
	if ($(this).hasClass('del')) {$(this).html('Удалить')} else {
		$(this).html('Сравнить');	
	}
	$(this).parents('.novetly2').toggleClass('eco2');
	return false;
});

$('.vsr a').click(function(){
	$(this).toggleClass('on');
	if ($(this).hasClass('on')) {$(this).html('в сравнении')} else {
		$(this).html('cравнить');	
	}
	$(this).parents('.novetly2').toggleClass('eco2');
	return false;	
});


$(window).scroll(function(){
	var sorth = $('.filter').height();
	$('.used.modal').animate({'top': + $(document).scrollTop() + 80},1);
	if ($(document).scrollTop() > (sorth - 180)) {$('.used.modal').stop()};
});
	
	
	$('.srt .all').click(function(){
		$('.srt a').removeClass('on');
		$(this).addClass('on');
		$('.contact #scrolly8 p').show();
		return false;
	});
	
	$('.srt .fav').click(function(){
		$('.srt a').removeClass('on');
		$(this).addClass('on');
		$('.contact #scrolly8 p').hide();
		$('.contact #scrolly8 .popular').show();
		return false;
	});
	
$(".sravnenie td").mouseover(function() {
        var tds = $( this ).parent().find("td"),
            index = $.inArray( this, tds );

        $(".sravnenie td:nth-child("+( index + 1 )+") .image div").show();
    }).mouseout(function() {
        $(".sravnenie td .image div").hide();
    });
	
	$('.add_srv').click(function(){
		$('.block_srv .hint').fadeIn(350);
		setTimeout(function(){$('.block_srv .hint').fadeOut(350)},2000);
		return false;
	});
	
	$('.yandex .closed').click(function(){
		$(this).parent().fadeOut(500);
		return false;
	});
	
	$('.slist').click(function(){
		$(this).toggleClass('on')
		$(this).parent().next('ul').slideToggle();
	});
	
	
	$('.complect_list input[type=checkbox]:checked').parent().addClass('on')
	
	$('.complect_list label').click(function(){
		var it = parseInt($('.price_out span').html());
		var r = parseInt($(this).parents('tr').find('.price span').html());
		if (!$(this).parents('tr').find('input[type=checkbox]').is(':checked')) {
			$(this).parents('tr').find('.check').addClass('on');
			var ic = (it+r);
			$('.price_out span').html(ic);
			var it = parseInt($('.price_out span').html());
		} else {
			$(this).parents('tr').find('.check').removeClass('on');
			var ic = (it-r);
			$('.price_out span').html(ic);
		}
	});
	
	
	$('.complect_list input[type=checkbox]').click(function(){
		var it = parseInt($('.price_out span').html());
		var r = parseInt($(this).parents('tr').find('.price span').html());
		if ($(this).parents('tr').find('input[type=checkbox]').is(':checked')) {
			$(this).parents('tr').find('.check').addClass('on');
			var ic = (it+r);
			$('.price_out span').html(ic);
			var it = parseInt($('.price_out span').html());
		} else {
			$(this).parents('tr').find('.check').removeClass('on');
			var ic = (it-r);
			$('.price_out span').html(ic);
			it = parseInt($('.price_out span').html());
		}
	});
	
	$('.complect_info .post .image').hover(function(){
		$(this).parent().find('p a').css('text-decoration','underline');
	},function(){
		$(this).parent().find('p a').css('text-decoration','none');	
	});
	
	$('.gallery_item .image').hover(function(){
		$(this).parent().find('p a').css('text-decoration','underline');
	},function(){
		$(this).parent().find('p a').css('text-decoration','none');
	});
	
	
	$('.param_box.js .param_name').click(function(){
		$(this).parent().find('table').toggle();
	});
	
	$('.text_box .sravn, .text_box .bookmark').click(function(){
		$(this).toggleClass('on');
		return false;
	});
	
	$("a.del").live("click", function(){
	var myIndex = $(this).closest("td").prevAll("td").length;
		$(this).parents("#scrollx4").find("tr").each(function(){
			$(this).find("td:eq("+myIndex+")").animate({width: "0"}, 1000, function(){
				$(this).remove();
			});
		});
		return false;
	});

	$('.subscribe input[type="checkbox"]').uniform();
	
	$('.subscribe .click').bind('click', function() {
		if ( $(this).hasClass('active') ) {
			$(this).parent('.subscribe').find('.drop').hide().removeClass('bottom');
			$(this).removeClass('active');
		}
		else {
			$(this).parent('.subscribe').find('.drop').css({'left': $(this).width()+78+'px'}).show();
			$(this).addClass('active');
			if ( ($(this).parent('.subscribe').find('.drop').offset().left + $(this).parent('.subscribe').find('.drop').width() + 36) > $(window).width() ) {
				$(this).parent('.subscribe').find('.drop').addClass('bottom');
			}
		}
		return false;
	});
	
	$('.subscribe .drop .submit').bind('click', function() {
		$(this).parents('.subscribe').find('.drop').hide().removeClass('bottom');
		$(this).parents('.subscribe').find('.click').removeClass('active');
		return false;
	});
	
	$('.root').click(function() {
		$('.subscribe .drop').hide().removeClass('bottom');
		$('.subscribe .click').removeClass('active');
	});
	
	$('.subscribe .drop').click(function(event){
		event.stopPropagation();
	});

	$('a.bubble').bind('click', function() {
		$('div.bubble.'+$(this).attr('href')).siblings('.bubble').stop(true, true).fadeOut(0);
		$('div.bubble.'+$(this).attr('href')).stop(true, true).fadeIn(150).delay(2500).fadeOut(150);
		return false;
	});
	
});

var current = $(this);
function show_tab(i, current){
	$('.bl_tab').hide();
	$('#tab'+ i).show();
	$('#tabs1 a').removeClass('current');
	$(current).addClass('current');
};

function show(i, current){
	$('.big_image p').hide();
	$('#photo'+ i).show();
	$('.thumbnails a').removeClass('current');
	$(current).addClass('current');
};


	




