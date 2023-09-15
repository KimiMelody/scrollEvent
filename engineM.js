let chooseImg = document.querySelectorAll('.content');
let displayImg = document.querySelector('.Img')

let album = document.getElementById('i1');
let release = document.getElementById('i2');
let recorded = document.getElementById('i3');
let length = document.getElementById('i4');
let producer = document.getElementById('i5');

let abbeyRoad = document.getElementById('c1');
let Help = document.getElementById('c2');
let Imagine = document.getElementById('c3');
let HardDayNight = document.getElementById('c4');
let WallsAndBridges = document.getElementById('c5');
let MindGame = document.getElementById('c6');
let LetItBe = document.getElementById('c7');
let RubbleSoul = document.getElementById('c8');

let flexbox = document.querySelector('.flexbox');
let displayBox = document.querySelector('.displayBox');

let closeButton = document.querySelector('.closeButton');


flexbox.classList.add('notShowF');
displayBox.classList.add('notShowD');
function changeImg(event){
    displayImg.src = event.target.src;
    flexbox.classList.replace('notShowF','ShowF');
    displayBox.classList.replace('notShowD','ShowD');
}

chooseImg.forEach((img) => {

    img.addEventListener('click',changeImg)
    if (img.id === c1){
        console.log(2)
    }



    ///check
    img.addEventListener('click',()=>{
        console.log(1);
    })
    ////check



});

abbeyRoad.addEventListener('click',()=>{
    album.innerHTML = 'Abbey Road - The Beatles';
    release.innerHTML = 'Release : 26 September 1969';
    recorded.innerHTML = 'Recorded : 22 February – 20 August 1969';
    length.innerHTML = 'Length : 47.03';
    producer.innerHTML = 'Producer : George Martin';
})

Help.addEventListener('click',()=>{
    album.innerHTML = 'Help - The Beatles';
    release.innerHTML = 'Release : 6 August 1965';
    recorded.innerHTML = 'Recorded : 15 February – 17 June 1965';
    length.innerHTML = 'Length : 33.44';
    producer.innerHTML = 'Producer : George Martin';
})

Imagine.addEventListener('click',()=>{
    album.innerHTML = 'Imagine - John Lennon';
    release.innerHTML = 'Release : 9 September 1971';
    recorded.innerHTML = 'Recorded : 11–12 February, 24 May – 5 July 1971';
    length.innerHTML = 'Length : 39:29';
    producer.innerHTML = 'Producer : John Lennon ,Yoko Ono ,Phil Spector';
})

HardDayNight.addEventListener('click',()=>{
    album.innerHTML = "A Hard Day's Night - The Beatles";
    release.innerHTML = 'Release : 10 July 1964';
    recorded.innerHTML = 'Recorded : 29 January – 2 June 1964';
    length.innerHTML = 'Length : 30.09';
    producer.innerHTML = 'Producer : George Martin';
})

WallsAndBridges.addEventListener('click',()=>{
    album.innerHTML = 'Walls and Bridges - John Lennon';
    release.innerHTML = 'Release : 26 September 1974';
    recorded.innerHTML = 'Recorded : July–August 1974';
    length.innerHTML = 'Length : 46.02';
    producer.innerHTML = 'Producer : John Lennon';
})

MindGame.addEventListener('click',()=>{
    album.innerHTML = 'Mind Game - John Lennon';
    release.innerHTML = 'Release : 29 October 1973';
    recorded.innerHTML = 'Recorded : July–August 1973';
    length.innerHTML = 'Length : 40.41';
    producer.innerHTML = 'Producer : John Lennon';
})

LetItBe.addEventListener('click',()=>{
    album.innerHTML = 'Let It Be - The Beatles';
    release.innerHTML = 'Release : 8 May 1970';
    recorded.innerHTML = 'Recorded : February 1968 ,January 1969 ,January and April 1970';
    length.innerHTML = 'Length : 35.10';
    producer.innerHTML = 'Producer : Phil Spector';
})

RubbleSoul.addEventListener('click',()=>{
    album.innerHTML = 'Rubble Soul - The Beatles';
    release.innerHTML = 'Release : 3 December 1965';
    recorded.innerHTML = '12 October – 11 November 1965 (except 17 June 1965 for "Wait")';
    length.innerHTML = 'Length : 34.59';
    producer.innerHTML = 'Producer : George Martin';
})





closeButton.addEventListener('mouseover',()=>{
    flexbox.classList.replace('ShowF','notShowF');
    displayBox.classList.replace('ShowD','notShowD');
})