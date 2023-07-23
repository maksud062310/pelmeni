// new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
let d = document
let prays = d.querySelector('#prays')
let cata = d.querySelector('#cata')
let sells = d.querySelector('#sells')
let deliv = d.querySelector('#deliv')
let about = d.querySelector('#about')
let kont = d.querySelector('#kont')
let btn_h = d.querySelector('.button_head')
prays.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 87, left: 0, behavior: "smooth" })
})
cata.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 666, left: 0, behavior: "smooth" })
})
sells.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 1354, left: 0, behavior: "smooth" })
})
deliv.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 4356 - 50, left: 0, behavior: "smooth" })
})
about.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 5111 - 50, left: 0, behavior: "smooth" })
})
kont.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 7306, left: 0, behavior: "smooth" })
})

let md1 = d.querySelector('.md')
let btn_dow = d.querySelector('.btn_sec1')
let close1 = d.querySelector('.x')
let subscribe = d.querySelector('.subscribe')

btn_dow.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md1.style.display = "flex"
    d.body.style.overflow = 'hidden'
})

close1.addEventListener('click', () => {
    subscribe.style.display = 'none'
    md1.style.display = "none"
    d.body.style.overflow = 'visible'
})

d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        subscribe.style.display = 'none'
        md1.style.display = 'none'
        d.body.style.overflow = '';

    }
});
let rating = d.querySelector('.rating')

let oc = d.querySelector('#oc')

oc.addEventListener("click", () => [
    rating.style.display = "flex"
])



let md2 = d.querySelector('.md_2')
let btn_buy = d.querySelector('.sell_much1')
let btn_info = d.querySelector('.more_info')
let del = d.querySelector('.x2')

btn_buy.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
})

btn_info.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
})

del.addEventListener('click', () => {
    subscribe.style.display = 'none'
    md2.style.display = "none"
    d.body.style.overflow = 'visible'
})

d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        subscribe.style.display = 'none'
        md2.style.display = 'none'
        d.body.style.overflow = '';

    }
});

let btn2 = d.querySelector('#btn')
btn2.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
});
let btn3 = d.querySelector('#btn2')
btn3.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
});
let btn4 = d.querySelector('#btn4')
btn4.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
});
let btn5 = d.querySelector('#btn5')
btn5.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
});

let ord = d.querySelector('.order-btn')
ord.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    md2.style.display = "flex"
    d.body.style.overflow = 'hidden'
});



// let burg = d.querySelector('.burger_menu')
// let panel = d.querySelector('.bg_wh')
// let zak = d.querySelector('.x3')

// burg.addEventListener('click', () => {
//     // subscribe.style.display = 'flex'
//     panel.style.display = "flex"
//     d.body.style.overflow = 'hidden'
// })

// zak.addEventListener('click', () => {
//     // subscribe.style.display = 'none'
//     panel.style.display = "none"
//     d.body.style.overflow = 'visible'
// })
