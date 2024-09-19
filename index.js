const bar=document.querySelector('.icon'),
menu=document.querySelector('.menu'),
change=document.querySelector('.daynight'),
body=document.querySelector('body'),
text=document.querySelector(".text"),
li=document.querySelectorAll("header li");
bar.addEventListener('click',()=>{
    bar.classList.toggle('cross');
    menu.classList.toggle('nav');
});
change.addEventListener('click',()=>{
    change.classList.toggle('change');
    body.classList.toggle('black')
});
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "React Js Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });
  li.forEach(element => {
    element.addEventListener("click",()=>{
        bar.classList.toggle('cross');
        menu.classList.toggle('nav');
    })
  });