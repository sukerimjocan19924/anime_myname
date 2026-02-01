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



    anime({
        targets: '.name path.back_name',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function(el, i) { return i*250},
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 4000,
        Storage: 1000
    })  // 뒷 이름

    anime({
        // targets: '.name path.lastname',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function(el, i) { return i*250},
        duration: 3000,
        easing: 'easeInOutSine',
        opacity: [0, 1]
    })  // 앞 이름 색상
    
    anime({
        // targets: '.name path.lastname-line',
        strokeDashoffset: [anime.setDashoffset, 0],
        delay: function(el, i) { return i*250},
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 3000,
    })  // 앞 이름 테두리
    
    
    
    
    anime({
        targets: '.line',
        strokeDashoffset: [1545, 0],
        opacity: [0, 1],
        duration: 3000,
        easing: 'easeInOutSine'
    });
}