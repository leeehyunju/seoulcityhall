



// sc-slide 슬라이드
// news-slide
newsSlide = new Swiper('.news-slide',{
    pagination:{
        el:".swiper-pagination",
        type:"fraction"
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev"
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
})

// citizen-slide
citizenSlide = new Swiper('.citizen-slide',{
    pagination:{
        el:".swiper-pagination",
        type:"fraction"
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev"
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
})
citizenSlide.autoplay.stop()







// 파란 버튼 클릭했을때 작동
$('.sc-slide .content .title a').click(function(e){
    // 클릭했을때 새로고침이 되지않게해주는 코드
    e.preventDefault();
    // alert();

    // .content가 news라는 클래스를 가지고 있으면,
    if ($(this).parents('.content').hasClass('news')) {
        // 뉴스클릭시
        // on이 없을때 = 재생되고 있을때
        if (!$('.news .auto').hasClass('on')) {
            newsSlide.autoplay.start()
        }
        // 시민참여 슬라이드는 멈춤
        citizenSlide.autoplay.stop()
        
    } else {
        // 시민참여클릭시
        // on이 없을때 = 재생되고 있을때
        if (!$('.citizen .auto').hasClass('on')) {
            citizenSlide.autoplay.start()
        }
        // 뉴스슬라이드는 멈춤
        newsSlide.autoplay.stop()
        
    }

    // 모든게 빠지고나서, 선택한것만 동작
    $('.sc-slide .content').removeClass('active')
    $(this).parents('.content').addClass('active');
})





// news-slide auto 자동재생 정지
$('.news-slide .auto').click(function(e){
    // alert();

    // 조건문
    // 만약에, 내가 선택한auto에 on이 있으면 (2번 클릭했을때)
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        newsSlide.autoplay.start();
    }else{
        $(this).addClass('on');
        newsSlide.autoplay.stop();
    }

})

// citizen-slide auto 자동재생 정지
$('.citizen-slide .auto').click(function(e){
    // alert();

    // 조건문
    // 만약에, 내가 선택한auto에 on이 있으면 (2번 클릭했을때)
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        citizenSlide.autoplay.start();
    }else{
        $(this).addClass('on');
        citizenSlide.autoplay.stop();
    }
})

// btn-all 전체보기
$('.sc-slide .btn-all').click(function(){
    // alert();
    $('body').addClass('scroll-hidden');
    $('.pop-slide').addClass('show');

})

// pop-slide close버튼 닫기
$('.pop-slide .close').click(function(){
    // alert();
    $('body').removeClass('scroll-hidden');
    $('.pop-slide').removeClass('show');

})





// lang-site 링크로 가기
$('.select-btn').click(function(){
    // alert();

    url=$('#city-lang').val()
    // 새창으로 열기
    window.open(url)
})





// fix-btn 작동
$(window).scroll(function(){
    // 현재값
    curr = $(this).scrollTop();

    // 20 이상이면, 작동하게 해라
    if (curr >=20) {
        $('.fix-btn').addClass('show')
    // 그렇지 않다면,
    }else{
        $('.fix-btn').removeClass('show')
    }
})

// fix-btn 맨 위 페이지로 이동
$('.btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})





// sc-banner 슬라이드
var bannerSlide = new Swiper(".banner-slide", {
    slidesPerView: 3,
    spaceBetween: 43,
    pagination:{
        // 위에서 겹치는 control 클래스이므로 꼭 부모클래스를 써줘야함
        el:".sc-banner .swiper-pagination",
        type:"fraction"
    },
    navigation:{
        // 위에서 겹치는 control 클래스이므로 꼭 부모클래스를 써줘야함
        nextEl:".sc-banner .next",
        prevEl:".sc-banner .prev"
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});

// sc-banner auto 자동재생 정지
$('.sc-banner .auto').click(function(e){
    // alert();

    // 조건문
    // 만약에, 내가 선택한auto에 on이 있으면 (2번 클릭했을때)
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        bannerSlide.autoplay.start();
    }else{
        $(this).addClass('on');
        bannerSlide.autoplay.stop();
    }
})





// sc-relate 버튼 눌렀을때
$('.relate-site .site-list .btn-relate.hov').click(function(){
    // alert();

    // 내가 클릭한거에 'on'이 있으면,
    if ( $(this).hasClass('on')) {
        // 빼라                                                       / 모든 형제 다빼고, 슬라이드 닫아버려라 
        $('.relate-site .site-list .btn-relate.hov').removeClass('on').siblings('.sub').slideUp();
    }else{
        // 전체 다 빠진상태에서,                                        / 모든 형제 다빼고, 슬라이드 닫아버려라 
        $('.relate-site .site-list .btn-relate.hov').removeClass('on').siblings('.sub').slideUp();
        // 'on'이 작동하고, 형제인 'sub'가 슬라이드다운되게 해라
        $(this).addClass('on').siblings('.sub').slideDown();
    }

})

// tab키로 메뉴 열고닫기 
// keydown 키를 누른 순간 반응
// keyup 키를 떼는 순간 반응
// $('.relate-site .sub-list .sub-item:first-child').keydown(function(e){
//     code =e.keyCode;

//     console.log(code);
    
//     // tab의 키보드 숫자는 9
//     // 코드가 9번, 그리고 shift누르면서 tab을 눌렀을때 
//     if (code === 9 && e.shiftKey) {
//         // alert();
//         // 모든 형제 다빼고, 슬라이드 닫기
//         $('.relate-site .site-list .btn-relate.hov').removeClass('on').siblings('.sub').slideUp();
//     }
// })
// $('.relate-site .sub-list .sub-item:last-child').keydown(function(e){
//     code =e.keyCode;

//     console.log(code);
    
//     // tab의 키보드 숫자는 9
//     // 코드가 9번, 그리고 shift누르지않고 tab만 눌렀을때 
//     if (code === 9 && !e.shiftKey) {
//         // alert();
//         // 모든 형제 다빼고, 슬라이드 닫기
//         $('.relate-site .site-list .btn-relate.hov').removeClass('on').siblings('.sub').slideUp();
//     }
// })


// 위 코드랑 동일한 코드지만 개선된 코드
$('.relate-site .sub-list .sub-item').keydown(function(e){
    const code = e.keyCode; // 키보드 코드
    const isFirstChild = $(this).is(':first-child'); // 첫번째 항목인지 확인
    const isLastChild = $(this).is(':last-child'); // 마지막 항목인지 확인

    console.log(code);
    
    if (code === 9) {
        // || : 또는
        // 첫번째의 탭을 shift키와 함께 tab키가 눌렀을 때나, 마지막번째 탭을 shift키 없이 tab키만 눌렀을때
        if ((isFirstChild && e.shiftKey) || (isLastChild && !e.shiftKey)) {
            // 슬라이드 닫혀라
            $('.relate-site .site-list .btn-relate.hov')
                .removeClass('on')
                .siblings('.sub')
                .slideUp();
        }
    }
});