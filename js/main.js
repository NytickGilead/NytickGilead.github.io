		$(document).ready(function (){
			$(".services-item1 button").click(function(){
				$('.services-item1').hide("slow");
				$('#services-item1').show('slow');
				$("button#times1").click(function(){
					$('.services-item1').css({'display' : 'block'});
					$('#services-item1').css({'display' : 'none'});
				});
			});
			$(".services-item2 button").click(function(){
				$('.services-item2').hide("slow");
				$('#services-item2').show('slow');
				$("button#times2").click(function(){
					$('.services-item2').css({'display' : 'block'});
					$('#services-item2').css({'display' : 'none'});
				});
			});
			$(".services-item3 button").click(function(){
				$('.services-item3').hide("slow");
				$('#services-item3').show('slow');
				$("button#times3").click(function(){
					$('.services-item3').css({'display' : 'block'});
					$('#services-item3').css({'display' : 'none'});
				});
			});
			$(".services-item4 button").click(function(){
				$('.services-item4').hide("slow");
				$('#services-item4').show('slow');
				$("button#times4").click(function(){
					$('.services-item4').css({'display' : 'block'});
					$('#services-item4').css({'display' : 'none'});
				});
			});
			$(".services-item5 button").click(function(){
				$('.services-item5').hide("slow");
				$('#services-item5').show('slow');
				$("button#times5").click(function(){
					$('.services-item5').css({'display' : 'block'});
					$('#services-item5').css({'display' : 'none'});
				});
			});
			$(".services-item6 button").click(function(){
				$('.services-item6').hide("slow");
				$('#services-item6').show('slow');
				$("button#times6").click(function(){
					$('.services-item6').css({'display' : 'block'});
					$('#services-item6').css({'display' : 'none'});
				});
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