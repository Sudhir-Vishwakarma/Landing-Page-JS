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