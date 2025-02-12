
const bannerTop = $('.banner-top');

// 쿠키 설정 함수
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// 쿠키 읽기 함수
function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookie = cookieArr[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring((name + '=').length);
        }
    }
    return null;
}

// "오늘 하루 보지 않기" 체크 및 닫기 버튼 클릭 이벤트
$('.btn-close').on('click', function () {
    if ($('#notoday').is(':checked')) {
        setCookie('bannerHidden', 'true', 1); // 1일 동안 유지
    }
    bannerTop.hide();
})

// 페이지 로드 시 쿠키 확인
if (getCookie('bannerHidden') === 'true') {
    bannerTop.hide();
}

