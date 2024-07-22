const toggel = document.getElementById("toggel");
const navlist = document.getElementById("navlist");

toggel.addEventListener("click", () => {
    navlist.classList.toggle("navlist-active")
});

