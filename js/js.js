$(document).ready(function(){

$('#program').mouseover(function(){
		$('#program').css({"color":"white","z-index":"50","cursor":"url('images/cursor.svg'),pointer", "transition":"1s","width":"90%"});
		$('#program').text("узнать всю программу смены нашего лагеря");
		$('#pointer-circle').css({"width":"150px", "height":"150px", "transition":".2s"});
		$('.mouse-parallax').css({"opacity":"1","transition":"1s"});
		$('.mouse-parallax-bg').css({"background-image":"url('images/program-bg.png')"});
		$('#desc-title').text("расписание смены");
		$('.description').css({"opacity":"1"});
		$('header').css({"display":"none"});
		$('#book').css({"opacity":"0"});
		$('#house').css({"opacity":"0"});
		$('#shop').css({"opacity":"0"});
		$('h1').css({"display":"none"});
	});

$('#program').mouseout(function(){
		$('#program').css({"color":"red","z-index":"50","cursor":"none", "transition":"1s","width":"70%"});
		$('#program').text("проведи насыщенные дни  смены и получи");
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s"});
		$('.mouse-parallax').css({"opacity":"0","transition":"1s"});
		$('.description').css({"opacity":"0","transition":".5s"});
		$('header').css({"display":"flex"});
		$('#book').css({"opacity":"1"});
		$('#house').css({"opacity":"1"});
		$('#shop').css({"opacity":"1"});
		$('h1').css({"display":"block"});
	});

$('#book').mouseover(function(){
		$('#book').css({"color":"white","z-index":"50","cursor":"url('images/cursor.svg'),pointer", "transition":"1s","width":"90%"});
		$('#book').text("читать отзыв об опыте прохождения лагеря");
		$('#pointer-circle').css({"width":"150px", "height":"150px", "transition":".2s"});
		$('.mouse-parallax').css({"opacity":"1","transition":"1s"});
		$('.mouse-parallax-bg').css({"background-image":"url('images/book-bg.png')"});
		$('#desc-title').text("отзыв");
		$('.description').css({"opacity":"1"});
		$('header').css({"display":"none"});
		$('#program').css({"opacity":"0"});
		$('#house').css({"opacity":"0"});
		$('#shop').css({"opacity":"0"});
		$('h1').css({"display":"none"});
	});

$('#book').mouseout(function(){
		$('#book').css({"color":"red","z-index":"50","cursor":"none", "transition":"1s","width":"90%"});
		$('#book').text("уникальный опыт проработки защитных механизмов психики");
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s"});
		$('.mouse-parallax').css({"opacity":"0","transition":"1s"});
		$('.description').css({"opacity":"0","transition":".5s"});
		$('header').css({"display":"flex"});
		$('#program').css({"opacity":"1"});
		$('#house').css({"opacity":"1"});
		$('#shop').css({"opacity":"1"});
		$('h1').css({"display":"block"});
	});

$('#house').mouseover(function(){
		$('#house').css({"color":"white","z-index":"50","cursor":"url('images/cursor.svg'),pointer", "transition":"1s","width":"60%"});
		$('#house').text("посмотреть обзор здания лагеря");
		$('#pointer-circle').css({"width":"150px", "height":"150px", "transition":".2s"});
		$('.mouse-parallax').css({"opacity":"1","transition":"1s"});
		$('.mouse-parallax-bg').css({"background-image":"url('images/house_bg.png')","width":"120%","height":"120%"});
		$('#desc-title').text("здание");
		$('.description').css({"opacity":"1"});
		$('header').css({"display":"none"});
		$('#program').css({"opacity":"0"});
		$('#book').css({"opacity":"0"});
		$('#shop').css({"opacity":"0"});
		$('h1').css({"display":"none"});
	});

$('#house').mouseout(function(){
		$('#house').css({"color":"red","z-index":"50","cursor":"none", "transition":"1s","width":"80%"});
		$('#house').text("в стенах здания,  где каждый найдет свое место,");
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s"});
		$('.mouse-parallax').css({"opacity":"0","transition":"1s"});
		$('.description').css({"opacity":"0","transition":".5s"});
		$('header').css({"display":"flex"});
		$('#program').css({"opacity":"1"});
		$('#book').css({"opacity":"1"});
		$('#shop').css({"opacity":"1"});
		$('h1').css({"display":"block"});
	});

$('#shop').mouseover(function(){
		$('#shop').css({"color":"white","z-index":"50","cursor":"url('images/cursor.svg'),pointer", "transition":"1s","width":"90%"});
		$('#shop').text("купить мерч лагерного  коммьюнити");
		$('#pointer-circle').css({"width":"150px", "height":"150px", "transition":".2s"});
		$('.mouse-parallax').css({"opacity":"1","transition":"1s"});
		$('.mouse-parallax-bg').css({"background-image":"url('images/shop-bg.png')","width":"120%","height":"120%"});
		$('#desc-title').text("мерч");
		$('.description').css({"opacity":"1"});
		$('header').css({"display":"none"});
		$('#program').css({"opacity":"0"});
		$('#book').css({"opacity":"0"});
		$('#house').css({"opacity":"0"});
		$('h1').css({"display":"none"});
	});

$('#shop').mouseout(function(){
		$('#shop').css({"color":"red","z-index":"50","cursor":"none", "transition":"1s","width":"90%"});
		$('#shop').text("в окружении сплоченного коммьюнити");
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s"});
		$('.mouse-parallax').css({"opacity":"0","transition":"1s"});
		$('.description').css({"opacity":"0","transition":".5s"});
		$('header').css({"display":"flex"});
		$('#program').css({"opacity":"1"});
		$('#book').css({"opacity":"1"});
		$('#house').css({"opacity":"1"});
		$('h1').css({"display":"block"});
	});


$(document).mousemove(function(e){
	$('#pointer').css({'left':e.pageX, 'top':e.pageY});
	$('#pointer-circle').css({'left':e.pageX, 'top':e.pageY});
	let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
	$('.mouse-parallax-bg').css({"transform": "translate(-" + x * 400 + 'px, -' + y * 200 + "px)"})
});






$(window).scroll(function(){ $('#pointer-circle').css({"transition":"0s"});
});

setTimeout(textType,1000);

function textType(){
		var $text = "РУКА ОБ РУКУ";
		var $count = 0;
		var $maxspeed = 400;

		function character(start, end, text) {
			return text.substring(start,end);
		}

		function type() {
			var $random = Math.floor(Math.random()* $maxspeed);
			setTimeout(type, $random);
			$('#h1').append(character($count, $count+1, $text));
			$count++;
		}
		type();
}


$('a').mouseover(function(){
		$('#pointer').css({"transform":"scale(2,2)", "transition":".5s", "filter":"blur(30px)","opacity":"1"});
		$('#pointer-circle').css({"width":"100px", "height":"100px", "transition":".5s","border-color":"white"});
		$('a').css({"cursor":"url('images/cursor.svg'),pointer"});
	});

$('a').mouseout(function(){
		$('#pointer').css({"transform":"scale(1,1)", "transition":".1s", "filter":"blur(20px)","opacity":"0"});
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s","border-color":"red"});
		$('a').css({"cursor":"none"});
	});

$('#floor1').mouseover(function(){
		$('#floor2').css({"opacity":"0.2"});
		$('#floor3').css({"opacity":"0.2"});
		$('#floor4').css({"opacity":"0.2"});
		$('#f1').css({"display":"block"});
		$('#f2').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(2,2)", "transition":".5s", "filter":"blur(30px)","opacity":"1"});
		$('#pointer-circle').css({"width":"100px", "height":"100px", "transition":".5s","border-color":"white"});
		$('#floor1').css({"cursor":"url('images/cursor.svg'),pointer"});
	});

$('#floor1').mouseout(function(){
		$('#floor1').css({"opacity":"1"});
		$('#floor2').css({"opacity":"1"});
		$('#floor3').css({"opacity":"1"});
		$('#floor4').css({"opacity":"1"});
		$('#f1').css({"display":"block"});
		$('#f2').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(1,1)", "transition":".1s", "filter":"blur(20px)","opacity":"0"});
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s","border-color":"red"});
		$('#floor1').css({"cursor":"none"});
	});


$('#floor2').mouseover(function(){
		$('#floor1').css({"opacity":"0.2"});
		$('#floor3').css({"opacity":"0.2"});
		$('#floor4').css({"opacity":"0.2"});
		$('#f2').css({"display":"block"});
		$('#f1').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(2,2)", "transition":".5s", "filter":"blur(30px)","opacity":"1"});
		$('#pointer-circle').css({"width":"100px", "height":"100px", "transition":".5s","border-color":"white"});
		$('#floor2').css({"cursor":"url('images/cursor.svg'),pointer"});
	});

$('#floor2').mouseout(function(){
		$('#floor1').css({"opacity":"1"});
		$('#floor2').css({"opacity":"1"});
		$('#floor3').css({"opacity":"1"});
		$('#floor4').css({"opacity":"1"});
		$('#f1').css({"display":"block"});
		$('#f2').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(1,1)", "transition":".1s", "filter":"blur(20px)","opacity":"0"});
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s","border-color":"red"});
		$('#floor2').css({"cursor":"none"});
	});

$('#floor3').mouseover(function(){
		$('#floor1').css({"opacity":"0.2"});
		$('#floor2').css({"opacity":"0.2"});
		$('#floor4').css({"opacity":"0.2"});
		$('#f3').css({"display":"block"});
		$('#f1').css({"display":"none"});
		$('#f2').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(2,2)", "transition":".5s", "filter":"blur(30px)","opacity":"1"});
		$('#pointer-circle').css({"width":"100px", "height":"100px", "transition":".5s","border-color":"white"});
		$('#floor3').css({"cursor":"url('images/cursor.svg'),pointer"});
	});

$('#floor3').mouseout(function(){
		$('#floor1').css({"opacity":"1"});
		$('#floor2').css({"opacity":"1"});
		$('#floor3').css({"opacity":"1"});
		$('#floor4').css({"opacity":"1"});
		$('#f1').css({"display":"block"});
		$('#f2').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(1,1)", "transition":".1s", "filter":"blur(20px)","opacity":"0"});
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s","border-color":"red"});
		$('#floor3').css({"cursor":"none"});
	});

$('#floor4').mouseover(function(){
		$('#floor1').css({"opacity":"0.2"});
		$('#floor2').css({"opacity":"0.2"});
		$('#floor3').css({"opacity":"0.2"});
		$('#f4').css({"display":"block"});
		$('#f1').css({"display":"none"});
		$('#f2').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#pointer').css({"transform":"scale(2,2)", "transition":".5s", "filter":"blur(30px)","opacity":"1"});
		$('#pointer-circle').css({"width":"100px", "height":"100px", "transition":".5s","border-color":"white"});
		$('#floor4').css({"cursor":"url('images/cursor.svg'),pointer"});
	});

$('#floor4').mouseout(function(){
		$('#floor1').css({"opacity":"1"});
		$('#floor2').css({"opacity":"1"});
		$('#floor3').css({"opacity":"1"});
		$('#floor4').css({"opacity":"1"});
		$('#f1').css({"display":"block"});
		$('#f2').css({"display":"none"});
		$('#f3').css({"display":"none"});
		$('#f4').css({"display":"none"});
		$('#pointer').css({"transform":"scale(1,1)", "transition":".1s", "filter":"blur(20px)","opacity":"0"});
		$('#pointer-circle').css({"width":"20px", "height":"20px", "transition":".05s","border-color":"red"});
		$('#floor4').css({"cursor":"none"});
	});


$('.review-btn').mouseover(function(){
		$('#pointer').css({"transform":"scale(3,3)", "transition":".5s", "filter":"blur(20px)","opacity":"1","z-index":"1"});
		$('#pointer-circle').css({"opacity":"0"});
		$('.btn-arrow').css({"background-image":"url('images/btn-arrow-hover.svg"});
	});

$('.review-btn').mouseout(function(){
		$('#pointer').css({"transform":"scale(1,1)", "transition":".1s", "filter":"blur(20px)","opacity":"0","z-index":"100"});
		$('#pointer-circle').css({"opacity":"1"});
		$('.btn-arrow').css({"background-image":"url('images/btn-arrow.svg"});
	});

	
for (var i=0; i<5; i++){

$('.container').append('<img src="images/bg_circle.png" class="bg_circle">');

    $('.bg_circle').each(function(){
        $(this).css({"left": Math.random() * 0.9*parseInt($('.container').css("width")) - 0.3*parseInt($('.container').css("width")) , 
          "top": Math.random() * parseInt($('.container').css("height"))-0.5*parseInt($('.container').css("height")),
          "width": (Math.random() * 1200 + 400) +'px',
          "opacity": Math.random() * 0.6 + 0.2
      });      
      });

        

        function move() {
        	$('.bg_circle').each(function(){
  				$(this).addClass('bg_circle2');
  			})
  			$('.bg_circle2').each(function(){
        $(this).css({"left": Math.random() * 0.9*parseInt($('.container').css("width")) - 0.3*parseInt($('.container').css("width")) , 
          "top": Math.random() * parseInt($('.container').css("height"))-0.5*parseInt($('.container').css("height")),
          "width": (Math.random() * 1200 + 400) +'px',
          "opacity": Math.random() * 0.6 + 0.2
      });      
      });
		}
		setInterval(move, 1000);
}

		mainScroll();

		function mainScroll() {
			$(window).scroll(function(){ 

			if ($(window).scrollTop()>0.33*parseInt($('.wrapper1').css('height'))){
				$('#h1').css({"color": "white", "opacity":"0.5"});
			} else {
				$('#h1').css({"color": "red", "opacity":"1"});
			}
				
			if ($(window).scrollTop() > 0.4*parseInt($('.wrapper1').css('height'))){
				$('#program').css({"color": "red", "opacity":"1","pointer-events":"none"});
			} else {
				$('#program').css({"color": "red", "opacity":"0","pointer-events":"none"});
			}
			if ($(window).scrollTop() > 0.4*parseInt($('.wrapper1').css('height'))+200){
				$('#book').css({"color": "red", "opacity":"1","pointer-events":"none"});
			} else {
				$('#book').css({"color": "red", "opacity":"0","pointer-events":"none"});
			}
			if ($(window).scrollTop() > 0.4*parseInt($('.wrapper1').css('height'))+400){
				$('#house').css({"color": "red", "opacity":"1","pointer-events":"none"});
			} else {
				$('#house').css({"color": "red", "opacity":"0","pointer-events":"none"});
			}
			if ($(window).scrollTop() > 0.4*parseInt($('.wrapper1').css('height'))+600){
				$('#shop').css({"color": "red", "opacity":"1","pointer-events":"auto"});
				$('#program').css({"pointer-events":"auto"});
				$('#book').css({"pointer-events":"auto"});
				$('#house').css({"pointer-events":"auto"});
			} else {
				$('#shop').css({"color": "red", "opacity":"0","pointer-events":"none"});
			}	
			})
		}




});

