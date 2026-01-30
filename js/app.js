const path = anime.path('.star path');
const btn = document.querySelector('.btn');
const tl = anime.timeline({
    defaults: {
        duration: 750,
        easing: 'easeOutBounce'
    }
});

btn.addEventListener('click', nameDraw);
function nameDraw() {
    // 1) 별 경로 그리기
    tl.add({
        targets: '.star path',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 2500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        opacity: 1
    });

    // 2) 아이콘 나타나기
    tl.add({
        targets: '.ico',
        opacity: 1
    });

    // 3) 아이콘이 경로를 따라 움직임
    anime({
        targets: '.ico',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        duration: 4000
    });

    // 1) 뒤쪽 이름 윤곽선 그리기
    // anime({
    //     targets: '.name-basic',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     duration: 3000,
    //     easing: 'easeInOutSine',
    // });

    anime({
        targets: '.name-basic path',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 1000,
        delay: function(el, i) { return i*250},
        easing: 'easeInOutSine'
    })

    // 2) 배경 나타나기 (윤곽선 다 그려진 뒤)
    anime({
        targets: '.name-bg',
        opacity: [0, 1],
        duration: 2000,
        delay: 3500,
        easing: 'easeInOutQuad'
    });

    // 3) 앞쪽 테두리 그리기 (배경이 나타난 뒤)
    anime({
        targets: '.name-outline',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 2500,
        delay: 5500,
        easing: 'easeOutQuad'
    });


    // 7) 라인 애니메이션
    anime({
        targets: '.line',
        strokeDashoffset: [1545, 0],
        opacity: [0, 1],
        duration: 3000,
        easing: 'easeInOutSine'
    });
}