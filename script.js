const newPizza = [
    {
        photo:'new-pizza-1.jpeg',
        name:'Crispy Cheese Pepperoni',
        details:'Pizza sousu, Pepperoni, Ekstra Panko Mozzarella'
    },
    {
        photo:'new-pizza-2.jpeg',
        name:'Crispy Cheese 4 Pendir',
        details:'Pizza sousu, Panko Mozzarella, Feta, Parmezan və Cheddar pendirləri'
    },
    {
        photo:'new-pizza-3.jpeg',
        name:'Crispy Cheese Spaysi İtalyan',
        details:'Pizza sousu, Ekstra İtalyan sosisi, Pepperoni, Panko Mozzarella, Pul bibər'
    },
    {
        photo:'new-pizza-4.jpeg',
        name:'Crispy Cheese Çiken Ranç',
        details:'Ranç sousu, Qril Toyuğu, Pomidor, Panko Mozzarella'
    },
    {
        photo:'new-pizza-5.jpg',
        name:'Star Çiken Barbekyu',
        details:'Təzə xəmir, pendirlə doldurulmuş ulduz kənarları və unudulmaz dad – yeni Star pizzalarını sınayın!'
    },
    {
        photo:'new-pizza-6.jpg',
        name:'Star Klassik Pepperoni',
        details:'Təzə xəmir, pendirlə doldurulmuş ulduz kənarları və unudulmaz dad – yeni Star pizzalarını sınayın!'
    },
    {
        photo:'new-pizza-7.jpg',
        name:'Star Marqarita',
        details:'Təzə xəmir, pendirlə doldurulmuş ulduz kənarları və unudulmaz dad – yeni Star pizzalarını sınayın!'
    },
    {
        photo:'new-pizza-8.jpg',
        name:'Star Vestern Barbekyu',
        details:'Təzə xəmir, pendirlə doldurulmuş ulduz kənarları və unudulmaz dad – yeni Star pizzalarını sınayın!'
    },
    
]
let order = 1
let last
let slider = document.querySelector(".slider")
let sliderNav = document.querySelector(".slider_nav")
let newDishes = document.getElementById('all_new_dishes')
let timer
let sliderIMG = ['slider10.png', 'slider1.png', 'slider2.png',
    'slider3.png', 'slider4.png', 'slider5.png', 'slider6.png',
    'slider7.png', 'slider8.png', 'slider9.png', 'slider10.png', 'slider1.png']

for (let i in sliderIMG) {
    slider.innerHTML += `<img src="img/${sliderIMG[i]}" alt="">`
    if (i <= 9) {
        sliderNav.innerHTML += `<div onclick = 'changeSliderClick(${+i + 1})' id='slider_nav_${+i + 1}'></div>`
    }
}
let imgWidth = document.querySelector('.slider img').clientWidth
let sliderGap = 20
window.addEventListener('resize' , () => {
   imgWidth =  document.querySelector('.slider img').clientWidth
} )
function changeSlider() {
    slider.style.left = `${-(imgWidth + sliderGap) * order}px`
    slider.style.transform = `translateX(${((window.innerWidth - (imgWidth + sliderGap * 2)) / 2)}px)`
    changeNavColor()
}
function changeSliderClick(a) {
    order = a
    stopInterval()
    changeSlider()
    startTimer()    
}
changeSlider()
startTimer()
function startTimer() {
    timer = setInterval(() => {
        if (order < 10) {
            order++
        }
        else {
            order = 1
        }
        changeSlider()
    }, 3000);
}

function stopInterval() {
    clearInterval(timer)
}
function changeNavColor() {
    for (let i = 1; i <= 10; i++) {
        if (i == order) {
            document.getElementById(`slider_nav_${i}`).style.backgroundColor = '#222'
        }else{
            document.getElementById(`slider_nav_${i}`).style.backgroundColor = '#22222266'
        }
    }
}
newPizza.map(item => {
    newDishes.innerHTML += `
        <div>
            <img src = 'img/${item.photo}'>
            <div class = 'info'>
                <h5>${item.name}</h5>
                <p>${item.details}</p>
                <a>Sifarish et</a>
            </div>
        </div>

    `
})
