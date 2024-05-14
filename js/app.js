// Navigation Bar //
const closeSidebar = document.querySelector(".fa-xmark");
const openSidebar = document.querySelector(".fa-bars");
const sideBarClose = document.querySelector(".nav-sidebar");
const sideBarOpen = document.querySelector(".nav-sidebar")

closeSidebar.addEventListener("click", ()=>{
    sideBarClose.style.display = "none";
});

openSidebar.addEventListener("click", ()=>{
    sideBarOpen.style.display = "block";
});


// Signup //
const sideBarSignUp = document.getElementById("signup-id");
const openSignup = document.querySelector(".nav-signup-btn");
const closeSignUp = document.querySelector(".signup-mark");
const signupclose = document.querySelector(".signup-bg");


closeSignUp.addEventListener("click", ()=>{
    signupclose.style.display= "none";
});
openSignup.addEventListener("click", ()=>{
    signupclose.style.display = "block";
 })
 sideBarSignUp.addEventListener("click", ()=>{
    signupclose.style.display = "block";
    sideBarClose.style.display = "none";
 })


// Login //
const loginOpen = document.getElementById("login-id");
const loginClose = document.querySelector(".login-xmark");
const closeLogin = document.querySelector(".login-bg");
const openLogin = document.querySelector(".nav-login-btn");

loginClose.addEventListener("click", ()=>{  
    closeLogin.style.display = "none";
});

openLogin.addEventListener("click", ()=>{
    closeLogin.style.display = "block";
});

loginOpen.addEventListener("click", ()=>{
    closeLogin.style.display = "block";
    sideBarClose.style.display = "none";
});


// Login to Register and Register to login //
const registerToLogin = document.querySelector(".signup-login-btn");

registerToLogin.addEventListener("click", ()=>{
    closeLogin.style.display = "block";
    signupclose.style.display = "none";
    console.log("Button Clicked");
});

const loginToRegister = document.querySelector(".login-signup-btn");

loginToRegister.addEventListener("click", ()=>{
    signupclose.style.display = "block";
    closeLogin.style.display = "none";
})


// Slider //
const left = document.querySelector(".fa-client-left");
const right = document.querySelector(".fa-client-right");
const slider = document.querySelector(".clients-container2");

left.addEventListener("click", ()=>{
    slider.scrollBy({
        left: -330, 
        behavior: 'smooth'
    });
});

right.addEventListener("click", ()=>{
    slider.scrollBy({
        left: 330,
        behavior: 'smooth'
    });
})


// Accordion //
const accordion = document.querySelector(".accordion1");
const plus = document.querySelector(".fa-accordion-plus");
const minus = document.querySelector(".fa-accordion-minus");

plus.addEventListener("click", ()=>{
    accordion.style.height = "220px";
    plus.style.display = "none";
    minus.style.display = "block";
    console.log("Plus Button Clicked");
});
minus.addEventListener("click", ()=>{
    accordion.style.height = "100px";
    minus.style.display = "none";
    plus.style.display = "block";

});

const accordion1 = document.querySelector(".accor1");
const plus1 = document.querySelector(".accor-plus1");
const minus1 = document.querySelector(".accor-minus1");

plus1.addEventListener("click", ()=>{
    accordion1.style.height = "220px";
    plus1.style.display = "none";
    minus1.style.display = "block";
    console.log("Plus Button Clicked");
});
minus1.addEventListener("click", ()=>{
    accordion1.style.height = "100px";
    minus1.style.display = "none";
    plus1.style.display = "block";
});
const accordion2 = document.querySelector(".accor2");
const plus2 = document.querySelector(".accor-plus2");
const minus2 = document.querySelector(".accor-minus2");

plus2.addEventListener("click", ()=>{
    accordion2.style.height = "220px";
    plus2.style.display = "none";
    minus2.style.display = "block";
    console.log("Plus Button Clicked");
});
minus2.addEventListener("click", ()=>{
    accordion2.style.height = "100px";
    minus2.style.display = "none";
    plus2.style.display = "block";
});
const accordion3 = document.querySelector(".accor3");
const plus3 = document.querySelector(".accor-plus3");
const minus3 = document.querySelector(".accor-minus3");

plus3.addEventListener("click", ()=>{
    accordion3.style.height = "220px";
    plus3.style.display = "none";
    minus3.style.display = "block";
    console.log("Plus Button Clicked");
});
minus3.addEventListener("click", ()=>{
    accordion3.style.height = "100px";
    minus3.style.display = "none";
    plus3.style.display = "block";
});

const accordion4 = document.querySelector(".accor4");
const plus4 = document.querySelector(".accor-plus4");
const minus4 = document.querySelector(".accor-minus4");

plus4.addEventListener("click", ()=>{
    accordion4.style.height = "220px";
    plus4.style.display = "none";
    minus4.style.display = "block";
    console.log("Plus Button Clicked");
});
minus4.addEventListener("click", ()=>{
    accordion4.style.height = "100px";
    minus4.style.display = "none";
    plus4.style.display = "block";
});
