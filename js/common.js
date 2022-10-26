$(document).ready(function (){  //문서준비이벤트


//상단팝업
$('.popup_close').click(function(){
    $('#popup').slideUp(); 

});


//sitemap
$('.all_wrap').hide();
$('.all_menu').click(function(){
  $('.all_wrap').fadeIn();
});
  $('.all_close').click(function(){
$('.all_wrap').fadeOut();
  });



//gnb
$('.depth2,.depth2_bg').hide();

$('.gnb > li').mouseenter(function(){
 $(this).find('.depth2').stop().fadeIn();
 $('.depth2_bg').stop().fadeIn();

});

$('.gnb > li').mouseleave(function(){
    $(this).find('.depth2').stop().fadeOut();
    $('.depth2_bg').stop().fadeOut();
   
});


//mdepth2
$('.mdepth2').hide();
$('.mgnb > li').click(function(){
  $(this).children('.mdepth2').stop().slideDown();
  $(this).siblings().children('.mdepth2').stop().slideUp();
}); 

//mgnb
$('.ham').click(function(){
  $('.mgnb_wrap').animate({
    left:'0'
  },3000); //3초동안

});

$('.mgnb_close').click(function(){
  $('.mgnb_wrap').animate({
    left:'100%'
  });

});





//language
$('.language ul').hide();

$('.language').click(function(){
    $('.language ul').stop().slideToggle();
    $('.down').toggleClass('active')
});






//메인배너 슬라이드
const mb = new Swiper('.mb', {

    // 옵션
    autoplay : {
        delay : 5000,  // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      loop : true,  // 슬라이드 반복 여부


      // 방향 버튼 지정
navigation : {   
    nextEl : '.swiper-button-next',  // 다음 버튼
    prevEl : '.swiper-button-prev',  // 이전 버튼
    },

      // 페이저 버튼 지정
pagination : {
    el : '.swiper-pagination',  // 버튼 태그 설정
    type : 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
    clickable : true,  // 버튼 클릭 여부
    },


});

 
//메인슬라이드 재생정지

$('.mb_play').hide();
$('.mb_pause').on('click', function () {
    mb.autoplay.stop();
    $('.mb_pause').hide();
    $('.mb_play').show();
});
$('.mb_play').on('click', function () {
    mb.autoplay.start();
    $('.mb_pause').show();
    $('.mb_play').hide();
});




//제품 슬라이드
const product_list = new Swiper('.product_list', {

// 자동 슬라이드 설정, 비활성화 false
autoplay : {
    delay : 3000,  // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  
  // 스크롤바 여부
 scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
   },
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    slidesPerView : '2',  // 한 슬라이드에 보여줄 갯수
    spaceBetween : 40,  // 슬라이드 사이 여백
    

      // 반응형 슬라이드
     breakpoints: {
    1024: {  // 가로해상도가 1024px 이상일 경우
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1600: {  // 가로해상도가 1600px 이상일 경우
      slidesPerView: 6,
      spaceBetween: 40,
    },
   
  },


  loop : true,  // 슬라이드 반복 여부
  speed : 1000  // 슬라이드 동작 속도
  

});

//탭메뉴
$('.brand_list li:first-child').addClass('active');
$('.brand_list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});


 
//  아코디언배너.museum_list li 중 첫번째 요소에 active 츨래스 추가

$('.museum_list li:first-child').addClass('active');
$('.museum_list li').mouseenter(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });


    //gotop 
    $('.gotop').hide();

    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.gotop').fadeIn();
      } else {
        $('.gotop').fadeOut();
      }
    });

$('.gotop').click(function(){
  $('html,body').animate({
  scrollTop: '0'
},1500);
});

}); //문서 종료 이벤트