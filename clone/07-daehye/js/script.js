//slick.js 
$(function(){
    $('.visual .slide').slick({
    arrow: true,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpead:4000,
    pauseOnHover:false,
    pauseOnFocus:false
    
    });
});

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