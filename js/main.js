$(document).ready(function (){
	function showElem(element, hideElemenent, hideElemenentBtn) {
		$(element).hide();
		$(hideElemenent).fadeIn("slow");
		$(hideElemenentBtn).click(function(){
			$(element).css({'display' : 'block'});
			$(hideElemenent).css({'display' : 'none'});
		});
	};
	$(".services-item1 button").click(function(){
		showElem('.services-item1', '#services-item1', 'button#times1');
	});
	$(".services-item2 button").click(function(){
		showElem('.services-item2', '#services-item2', 'button#times2');
	});
	$(".services-item3 button").click(function(){
		showElem('.services-item3', '#services-item3', 'button#times3');
	});
	$(".services-item4 button").click(function(){
		showElem('.services-item4', '#services-item4', 'button#times4');
	});
	$(".services-item5 button").click(function(){
		showElem('.services-item5', '#services-item5', 'button#times5');
	});
	$(".services-item6 button").click(function(){
		showElem('.services-item6', '#services-item6', 'button#times6');
	});
});
function posMouse(e){
	var mouX = 0, mouY = 0;
	if (!e) e = window.event;
	if (e.pageX || e.pageY) {
		mouX = e.pageX;
		mouY = e.pageY;
	} else if (e.clientX || e.clientY) {
		mouX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
		mouY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
	}
	return {"x":mouX, "y":mouY}
}

$(document).ready(function(){
	$('.team img').mouseover(function(){
		$(this).next().slideDown('slow');
	})
	.mouseout(function(e){
		var elem = $(this).next(), mou = posMouse(e);
		if ((mou.x < elem.offset().left) || (mou.x > elem.offset().left + elem.width()) || (mou.y < elem.offset().top))
			elem.slideUp('slow');
	});
	$('#box').mouseout(function(){
		$(this).slideUp('slow');
	});
});

$(document).ready(function(){
	function showMore(btn, element) {
		var flag = true;
		$(btn).click(function(){
			if(flag == true){
				$(element).show('slow');
				flag = !flag;
			} else {
				$(element).hide('slow');
				flag = !flag;
			}
		});
	};

	showMore('#email-btn', '#email');
	showMore('#phone-btn', '#phone');
	showMore('#message-btn', '#message');
	showMore('#address-btn', '#address');
});