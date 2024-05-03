// Script for navigation bar
var nav = document.querySelector('#navbar')
document.querySelector('#bar').addEventListener('click',()=>{
        nav.style.right = '0px'
})
document.querySelector('#close').addEventListener('click',()=>{
        nav.style.right = '-300px'
})

// Script for image display
document.querySelectorAll('.small-img-col').forEach((elem)=>{
    elem.addEventListener('click',()=>{
        document.querySelector('#Mainimg').src = elem.children[0].src
    })
})
document.querySelectorAll('.pro').forEach((elem)=>{
    elem.addEventListener('click',()=>{
        window.location.href='sproduct.html'
    })
})