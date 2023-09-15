let Boxchanging = document.querySelectorAll('.changeBox');
let opentab = document.querySelector('.logo');
let tab = document.querySelector('.tab');
let facebo = document.getElementById('FBtab');
let instagr = document.getElementById('IGtab');

let FB_app = document.querySelector('.faceBook');
let IG_app = document.querySelector('.instaGram');

let i = 0;
let k = 0;
let l = 0;

function changing(event) {
    event.target.classList.add('changing');
}
function unchanging(event){
    event.target.classList.remove('changing');
}

opentab.addEventListener('click',()=>{
    console.log(i)
    if (i===0){
        tab.classList.remove('hide')
        i++;
    }
    else {
        tab.classList.add('hide')
        i--;
    }
})

Boxchanging.forEach((thisBox)=>{
    thisBox.addEventListener('mouseover',changing);
    thisBox.addEventListener('mouseout',unchanging);
})

facebo.addEventListener('click',()=>{
    console.log(1)
    if(k===0){
        FB_app.classList.replace('hide','show');
        if(l===1){
            IG_app.classList.replace('show','hide');
            l=0;
        }
        k=1;
    }
    else{
        FB_app.classList.replace('show','hide');
        k=0;
    }
})

instagr.addEventListener('click',()=>{
    if(l===0){
        IG_app.classList.replace('hide','show');
        if(k===1){
            FB_app.classList.replace('show','hide');
            k=0;
        }
        l=1;
    }
    else{
        IG_app.classList.replace('show','hide');
        l=0;
    }
})

function openweb(event){
    console.log(event.key);
    if (event.key==='k' & k===1){
        window.open('https://www.facebook.com/');
    }
    else if (event.key==='k' & l===1){
        window.open('https://www.instagram.com/');
    }
}
document.addEventListener('keyup',openweb)