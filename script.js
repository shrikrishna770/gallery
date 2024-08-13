let logo=document.querySelector(".logo");
let active = document.querySelector(".mainchild");

logo.addEventListener("click",()=>{
    active.classList.toggle("active")
})