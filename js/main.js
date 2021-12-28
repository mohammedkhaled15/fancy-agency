
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

// Loading skills when you scroll to its section

// We have first to store the value of width of each skill in a custom attr called for example (data-width)

// Declaring necessary variables
let prog = document.querySelectorAll(".progress span")  
let section = document.querySelector(".skills")

// Making sure that all width are 00 when the window load
window.addEventListener("load",function(){

    prog.forEach((a)=>a.style.width = "0")

})

// using onscroll event to read the prop scrollY of window 
window.addEventListener("scroll",function(){

     // when the value of scrollY reaches the sectiom offsetTop which mean it is on your screen now
    // 200 here means before the value of offsettop with 200px
    if(window.scrollY >= section.offsetTop - 200){

        // making the width of each skill equal to the value stored in the custom attr
        prog.forEach((a)=>a.style.width = a.dataset.width)

    }
})

/***************************************************************************************************************/

// Making percentage counters increase to its values when scroll to its position

// Declaring variable storing our counters to be able to access over it
let counters = document.querySelectorAll(".skills .content .skills-rates .progress h5")

// declaring variable with default value "false"
// IMPORTANT NOTE: THIS VARIABLE USED TO PREVENT THE FUNCTION FROM WORKING CONTINUOSLY WITH SCROLLING UP AND DOWN EVEN IF THE CONDITION OF REACHING OUR GOAL ACHIEVED, SO WHEN THE CONDITION ACHIEVED WE WILL CHANGE ITS VALUE TO TRUE, WHICH MEAN THAT THE FUNCTION WILL WORK JUST ONE TIME NOT EVERY TIME WE SCROLL
let started = false;

// // Making sure that all numbers are 0% when the window load
window.addEventListener("load",function(){

    counters.forEach((a)=>a.textContent = "0")

})

// Making our main function
function count (el){

    // Storing required goal value in variable using written data-goal custom attr in html
    let goal = el.dataset.goal

    // Store our setinterval function in variable to be able to stop it using clearinterval method 
    let sem = setInterval(()=>{

        // increament of the text content by 1 each certain period of time
        el.textContent++ ;

        // using if condition to check when th  increament value reches the required goal value
        if(el.textContent == goal){

            // stop the setinterval func when reaching the required goal value
            clearInterval(sem);

            // adding "%" beside the final result
            el.textContent = `${el.textContent}%`    
        }

    // dividing required period of time by the goal to make all counter finish at the same time    
    },900 / goal)
}

// excuting our main function when srolling down to the section
window.addEventListener("scroll",function(){

    // when the value of scrollY reaches the section offsetTop which mean it is on your screen now
   // 200 here means before the value of offsettop with 200px
    if(window.scrollY >= section.offsetTop - 200){

        if(!started){

        // making the width of each skill equal to the value stored in the custom attr
        counters.forEach((a)=>count(a))

        }

    // CHANGING THE VALUE OF "started" VARIABLE after making sure that our function finished excution one time   
    started = true

    }
})

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

/***********************************************************************************************************/

// Making prices count from zero

// storing prices in variables
let prices = document.querySelectorAll(".pricing .content .card h1")

// storing our section in variable
let pricePlans = document.getElementById("pricing")

// IMPORTANT NOTE: THIS VARIABLE USED TO PREVENT THE FUNCTION FROM WORKING CONTINUOSLY WITH SCROLLING UP AND DOWN EVEN IF THE CONDITION OF REACHING OUR GOAL ACHIEVED, SO WHEN THE CONDITION ACHIEVED WE WILL CHANGE ITS VALUE TO TRUE, WHICH MEAN THAT THE FUNCTION WILL WORK JUST ONE TIME NOT EVERY TIME WE SCROLL
let done = false;

// // Making sure that all numbers are $ 0 when the window load
window.addEventListener("load",function(){

    prices.forEach((a)=>a.textContent = "0")

})

// Making our main function
function countPrice (el){

    // Storing required goal value in variable using written data-goal custom attr in html
    let goal = el.dataset.goal

    // Store our setinterval function in variable to be able to stop it using clearinterval method 
    let sem = setInterval(()=>{

        // increament of the text content by 1 each certain period of time
        el.textContent++ ;

        // using if condition to check when th  increament value reches the required goal value
        if(el.textContent == goal){

            // stop the setinterval func when reaching the required goal value
            clearInterval(sem);

            // adding "%" beside the final result
            el.textContent = `$ ${el.textContent}`    
        }

    // dividing required period of time by the goal to make all counter finish at the same time    
    },900 / goal)
}

// excuting our main function when srolling down to the section
window.addEventListener("scroll",function(){

    // when the value of scrollY reaches the section offsetTop which mean it is on your screen now
   // 200 here means before the value of offsettop with 200px
    if(window.scrollY >= pricePlans.offsetTop - 200){

        if(!done){

        // making the number of each price equal to the value stored in the custom attr
        prices.forEach((a)=>countPrice(a))

        }

    // CHANGING THE VALUE OF "started" VARIABLE after making sure that our function finished excution one time   
    done = true

    }
})

/*********************************************************************************************************/

// Playing with video section

// Storing our video titles in variable
let videoName = document.querySelectorAll(".videos .content .menu ul li")

// Storing title of the playing video in variable
let playingVideoName = document.querySelector(".videos .content .preview .comment p")

let source = document.querySelector(".videos .content .preview .video-player video")

// Adding event for each li when clicked
videoName.forEach((a)=>{
    a.addEventListener("click", function () {

        // console.log(a)
        source.setAttribute("src",`videos/${a.children[0].textContent}.mp4`)

        // Changing the title of the playing video to the one which clicked
        playingVideoName.textContent = a.children[0].textContent
    })
})

/**********************************************************************************************************/

// Increasing numbers of stats when reaching it

// Storing our spans numbers
let stats = document.querySelectorAll(".stats .content .card span:first-of-type")

// Storing our main section in variable
let statsSection = document.getElementById("stats")

// Storing boolean value to check if the fun worked or not
let finishedStats = false

// Making sure all numbers are zero when the page load
window.onload = function(){
    stats.forEach((stat)=>stat.textContent = "0")
}
// Making our main function
let countStats = function(stat){

    // Storing the value of our custom attr
    let goal = stat.dataset.goal

    //Making our interval function
    let countStat = setInterval(function(){

        // increament of the text content by 1 each certain period of time
        stat.textContent++

        // using if condition to check when th  increament value reches the required goal value
        if(stat.textContent == goal){

            // stop the setinterval func when reaching the required goal value
            clearInterval(countStat)
        }

    // dividing required period of time by the goal to make all counter finish at the same time
    }, 1000 / (goal))
}

// Making event of increament triggered when the page scrolled to our section
window.addEventListener("scroll", function(){
    
    // when the value of scrollY reaches the section offsetTop which mean it is on your screen now
   // 200 here means before the value of offsettop with 200px
    if(window.scrollY > statsSection.offsetTop - 50){
        
        if(finishedStats == false){

            // Applying our main func on all stats
            stats.forEach((a)=>countStats(a))

        }

        // CHANGING THE VALUE OF "started" VARIABLE after making sure that our function finished excution one time  
        finishedStats = true
        
    }
})

/*************************************************************************************************************/

// Making Typing Effect

// Storing our text from custom attr in a variable
let mypr = document.querySelector(".landing-section .intro p").dataset.text

// Storing our text holder element in our page
let place = document.querySelector(".landing-section .intro p")


// making the function excute each load for the window
window.addEventListener("load", function(){
    
    // Declaring variable used as a counter
    let i = 0

    // Making our core function which depend on the idea of adding new letter for the text content
    let typing = setInterval(function(){
            
        // Starting adding our text content letter by letter
        place.textContent += mypr[i]

        // Increasing counter by one to get the next letter 
        i +=1

        // Making condition to stop the function when the text letters finished
        if(i > mypr.length-1){

            clearInterval(typing)

        }
    },90)
})