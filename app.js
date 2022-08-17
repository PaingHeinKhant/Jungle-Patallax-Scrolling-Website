let bird1 =document.getElementById('bird1');
let bird2 =document.getElementById('bird2');
let forest =document.getElementById('forest');
let btn =document.getElementById('btn');
let rocks =document.getElementById('rocks');
let text =document.getElementById('text');
let water =document.getElementById('water');


window.addEventListener("scroll", function (){
    let value = window.scrollY;

    console.log(value);

    text.style.top =30+ value * -0.2 + '%';
    bird1.style.top = value * -0.5 + 'px';
    // bird1.style.left = value *  3+ 'px';
    bird2.style.top = value * -0.5 + 'px';
    // bird2.style.left = value * -3 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top =value * 0.25 + 'px';
})
