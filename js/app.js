const path = anime.path('.star path');
const btn = document.querySelector('.btn');
const tl = anime.timeline({
    defaults: {
        duration: 750,
        easing: 'easeOutBounce'
    }
});

const tlname = anime.timeline({
    defaults: {
        duration: 750,
        easing: 'easeOutBounce'
    }
});

btn.addEventListener('click', nameDraw);
function nameDraw() {
    tl.add({
        targets: '.star path',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 4000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        opacity: 1
    });

    tl.add({
        targets: '.ico',
        opacity: 1,
    });

    anime({
        targets: '.ico',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        delay: 6000,
        duration: 3000
    });


    tlname.add({
        targets: '.line',
        strokeDashoffset: [1545, 0],
        easing: 'easeInOutSine',
        opacity: 1,
        duration: 3000
    }).add({
        targets: '.name path.back_name',    // 뒷 이름
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: function(el, i) { return i*250},
        opacity: 1,
        duration: 2500
    }).add({
        targets: '.name path.lastname',     // 앞 이름 채움
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 1000
    }).add({
        targets: '.name path.lastname-line',    // 앞 이름 테두리
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        delay: function(el, i) { return i*250},
        opacity: [0, 1],
        duration: 2500
    });
}