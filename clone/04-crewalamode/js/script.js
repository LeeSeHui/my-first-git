
//splitting.js
$(function(){
    Splitting();  //대문자로쓴다!!!
  });



$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

// a 클릭시 위로 튕김 방지
$(document).on('click','a[href="#"]', function(e){
	e.preventDefault();
})
	
$(window).on('scroll resize',function(){
	var scrollPos = 0;
	scrollPos= $(document).scrollTop();
	// consoLe.Log(scrollPos);
	fixHeader();
	fix();
	fixList();

	function fixHeader(){
if(scrollPos > 80){$('header').addClass('on');}
else{$('header').removeClass('on')}
}

	function fix(){
		if(scrollPos > 1250){ $('.fix .text').addClass('on')}
		else { $('.fix .text').removeClass('on')}
		if(scrollPos > 2700){$('.fix .text').removeClass('on')}
	}
	function fixList(){
		if(scrollPos > 1250) {
			$('.approach .inner .list li a').removeClass('on')
			$('.approach .inner .list li:eq(0) a').addClass('on');
		}
		if(scrollPos > 1650) {
			$('.approach .inner .list li a').removeClass('on')
			$('.approach .inner .list li:eq(1) a').addClass('on');
		}
		if(scrollPos > 2050) {
			$('.approach .inner .list li a').removeClass('on')
			$('.approach .inner .list li:eq(2) a').addClass('on');
		}
		if(scrollPos > 2550) {
			$('.approach .inner .list li a').removeClass('on')
			$('.approach .inner .list li:eq(3) a').addClass('on');
		}
	}
})
//  eq() : 인덱스 값을 사용해 원하는 위치의 요소를 선택해 가져올 수 있는 선택자 매소드

$(function(){

	$('.gnbbtn').on('click',function(){
		$('nav.gnb').toggleClass('on');

	});

});




	

// // fixHeader
// var scrollTop = 0;
// // console.log(scrollTop);

// scrollTop = $(document).scrollTop();
// fixHeader();

// $(window).on('scroll resize', function(){
//     scrollTop = $(document).scrollTop();
//     fixHeader();
// })

// function fixHeader (){
//     if(scrollTop > 150){
//         $('header').addClass('on');
//     } else{
//         $('header').removeClass('on');
//     }
// }

// // gnbMenu
// $(function(){
//     $('.menuOpen').on('click', function(){
//         $('.gnb').addClass('on');
//     });
//     $('.close').on('click',function(){
//         $('.gnb').removeClass('on');
//     })

//  });

// //  TOP버튼 상단으로 부드럽게 이동
// $(function(){
//     $('.goTop').on('click',function(){
//      const top = $('body').offset().top;
//     // offset()함수는 원하는 선택자의 위치값을 .top .left...형식으로 반환
//     $('html, body').animate({scrollTop :(top)},800);
//     })
// });








