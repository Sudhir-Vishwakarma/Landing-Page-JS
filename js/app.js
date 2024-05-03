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