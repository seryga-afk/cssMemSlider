const boxBox = document.querySelector('.boxbox')
const box = document.querySelector('.box')

const radioRadio = document.querySelectorAll('.radio-radio')

let memeObj = {
    "1":{
        "img":"./assets/img/3zlqxf_copy.0.jpg",
        "mem":"keep mask on"
    },
    "2":{
        "img":"./assets/img/unnamed.jpg",
        "mem":"make meme about great"
    },
    "3":{
        "img":"./assets/img/twitter-meme-maker-1.png",
        "mem":"memes founder"
    },
    "4":{
        "img":"./assets/img/X6BLS9y.png",
        "mem":"keep mask on"
    },
}
for (const key in memeObj) {
    let boxMem = document.createElement('div')
    boxMem.classList.add("box-meme")

    let boxImg = document.createElement('img')
    boxImg.classList.add('box-img')
    boxImg.src = memeObj[key]['img']
    boxImg.alt = key

    let boxJoke = document.createElement("p")
    boxJoke.classList.add('box-joke')
    boxJoke.innerHTML = memeObj[key]['mem']

    console.log(memeObj[key]['img'], memeObj[key]['mem'])
    boxMem.appendChild(boxImg)
    boxMem.appendChild(boxJoke)
    boxBox.appendChild(boxMem)
}

radioRadio.forEach(r=>{
    
    r.addEventListener('click',()=>{
        boxBox.style.left = -([...radioRadio].indexOf(r) * box.clientWidth) + "px"
    })
})
