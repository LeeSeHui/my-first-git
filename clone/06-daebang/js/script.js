$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
    });
    //preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다

// slick.js
$(function(){
    $('.visual .slide').slick({
        arrows:true,
        dots:true,
        fade:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false

    });
    $('.slick-prev').text("prev");

    $('.slide2').slick({
        arrows:false,
        dots:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplay:true,
        Infinite:true,
        autoplaySpeed:6000,
        pauseOnHover:false,
        pauseOnFocus:false
    });
    $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무 용지")
    $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티 2차")
    $('.slide2 #slick-slide-control12').text("서울 마곡지구 대방디엠시티 더 센텀")
    $('.slide2 #slick-slide-control13').text("광주 수원 대방노블렌드 6차")
});

// splitting.js
$(function(){
    Splitting();
});

// gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus',function(){
    let gnbIndex = $('.gnb > li > a').index($(this));
    //alert(gnbIndex);
    // console.log(gnbIndex);

        // 지앤비 리스트 에이에 (이벤트)온클래스. 마우스가 엔터되는 이벤트가 일어날때 (펑션)다음과같은 이벤트가 호출되어라
// 이벤트가 일어나는 this자신(마우스가 엔터되는 자신)에 변수index값에 ()=은 저장)
// . alert(gnbIndex)->몇번 인덱스인지 경고창으로 확인하는 함수. console.log(gnbIndex)는 개발자도구 콘솔에서 인덱스값 확인하는 함수
// 라는 뜻!!!!!!!!!!!!!!!!!!!
    $('.gnb .inner').removeClass('on')
    // on클래스를 제거하면 어쩌구 제거된다. 이걸 먼저 해야 마우스뗴면 사라짐!
    $('.gnb .inner:eq('+ gnbIndex +')').addClass('on');
// eq매소드는 index번호를 가져오는 매소드. add클래스는 온클래스를 불러오는 것. 
    });
    $('header').on('mouseleave blur',function(){
        $('.gnb .inner').removeClass('on');
    })
});

// 스크롤라
$(function () {
    // scrolla
    $('.animate').scrolla({
      mobile: true,
      once: false
    });
  });

    // 애니메이트클래스에 스크롤라를 호출해라. 모바일일때 활성화돼라 ->트루
    // 한번만하겠니? 아니 -> ONCE:FALSE

    // scrollDown
    $(function(){
        $('.scroll').on('click', function(){
            var scrollBtn = $('#scrollPos').offset().top;
            $('html,body').animate({scrollTop:(scrollBtn)},400)
        })
    });

    // video
    $(function(){
        $('.videoBox .mask').on('click',function(){
            $(this).css({display:'none'});
    })
});



