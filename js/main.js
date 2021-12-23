let prog = document.querySelectorAll(".progress span")  
let section = document.querySelector(".skills")

window.onload = function(){

    prog.forEach((a)=>a.style.width = "0")

}

window.onscroll = function(){

    if(window.scrollY >= section.offsetTop - 200){

        prog.forEach((a)=>a.style.width = a.dataset.width)
    }
}
