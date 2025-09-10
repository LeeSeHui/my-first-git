// 항상 제일먼저 넣기. 위로 튕기는거 방지 코드.
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
})

// svg길이 구하기 공식
$(function(){
    $('.svgAni').find('path').each(function(i,path){
        const length =path.getTotalLength();
        // alert(length); -> 경고창뜨게해서 길이 확인하는 법
        // console.log(length); -> 콘솔 눌러서 길이 확인하는 법.
    })
});
// svgAni를 찾아서 각각의 패스의 총길이를 가져와라...

//scrolla.js
$(function() {
    $('.animate').scrolla({
    mobile: true, //모바일버전시 활성화
    once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
});

//menuWrap
$(function(){
    $('.menuOpen button.open').on('click',function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click',function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});

$(window).on('scroll resize', function(){
    let scrollPos = $(document).scrollTop();
    console.log(scrollPos);
    bgColor();

    function bgColor(){
        if(scrollPos > 1400){$('body').addClass('on')}
        else{$('body').removeClass('on')}
        if(scrollPos > 2700){$('body').removeClass('on')};
    }
});


