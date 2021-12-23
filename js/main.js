
// adding event of click on Other Links button to show up the mega menu

// Declaring necessary variables
let myBtn = document.querySelector("header .nav .container .main-list > li:last-child")
let menu = document.querySelector("header .nav .container .main-list > li:last-child .mega-menu")

// adding event of click on the link
myBtn.addEventListener("click",function(){
    
    //IMPORTANT NOTE: YOUHAVE TO DELETE (href:"") FROM ANCHOR TAG TO PREVENT PAGE FROM RELOADING WITH CLICK


    //Check of the mega menu hidden or not .. if hidden show it up .. if not hidden hide it
    // ALL using css properties

    if(menu.style.opacity === "0"){

        document.querySelector("header .nav .container .main-list > li:last-child .mega-menu").style.cssText = "opacity: 1;top: 100%;visibility:visible"
        
    }else{

        document.querySelector("header .nav .container .main-list > li:last-child .mega-menu").style.cssText = "opacity: 0;top: calc(100% + 50px);visibility:hidden"
    }
})

//*************************************************************************************************************/

//Loading skills when you scroll to its section

//We have first to store the value of width of each skill in a custom attr called for example (data-width)

//Declaring necessary variables
let prog = document.querySelectorAll(".progress span")  
let section = document.querySelector(".skills")

//Making sure that all width are 00 when the window load
window.onload = function(){

    prog.forEach((a)=>a.style.width = "0")

}

//using onscroll event to read the prop scrollY of window 
window.onscroll = function(){

    //when the value of scrollY reaches the sectiom offsetTop which mean it is on your screen now
    // 200 here means before the value of offsettop with 200px
    if(window.scrollY >= section.offsetTop - 200){

        //making the width of each skill equal to the value stored in the custom attr
        prog.forEach((a)=>a.style.width = a.dataset.width)

    }
}

/***************************************************************************************************************/

// Making Counter for My birthday 1 / 5 

// get number of milliseconds till my birthday
let myBirthDay = new Date("May 01, 2022 18:00:00").getTime()

// Use setinterval function as anonymos function which repeat doing something each period of time 
setInterval(function(){

    // storing current time in variable
    let dateNow = new Date().getTime()

    // storing difference between totoal millescond of birthday and date now
    let diffTime = myBirthDay - dateNow
    
    // get number of days
    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    // storing our result in our span in the page
    document.querySelector(".latest-events .content .info .counter .days span:first-child").innerHTML = days

    // get number of hours by using the remaing of division of days using modulus operator
    let hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
    
    // storing our result in our span in the page
    document.querySelector(".latest-events .content .info .counter .hours span:first-child").innerHTML = hours
    
    // get number of minuts using the remaing of division of hours using modulus operator
    let minuts = Math.floor(diffTime % (1000 * 60 * 60 ) / (1000 *60))
    
    // storing our result in our span in the page
    document.querySelector(".latest-events .content .info .counter .minuts span:first-child").innerHTML = minuts

    // get number of seconds using the remaing of division of minuts using modulus operator
    let seconds = Math.floor(diffTime % (1000 * 60) / (1000))
    
    // storing our result in our span in the page
    document.querySelector(".latest-events .content .info .counter .seconds span:first-child").innerHTML = seconds

},1000)

