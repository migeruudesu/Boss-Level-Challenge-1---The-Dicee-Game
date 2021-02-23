const jsP1Btn = document.querySelector('.p1button');
const jsP2Btn = document.querySelector('.p2button');
const jsImg1 = document.querySelector('.img1');
const jsImg2 = document.querySelector('.img2');


jsP1Btn.addEventListener('click',()=>{
    let rollResult = Math.floor(Math.random()*6 +1);
    jsImg1.src = "images/dice" + rollResult +".png";
})


jsP2Btn.addEventListener('click',()=>{
    let rollResult = Math.floor(Math.random()*6 +1);
    jsImg2.src = "images/dice" + rollResult +".png";
})