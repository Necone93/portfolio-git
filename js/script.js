window.addEventListener("scroll", function () {
  var navigation = document.getElementById("lg-navigation");
  navigation.classList.toggle("sticky-lg", window.scrollY > 0);
});
window.addEventListener("scroll", function () {
  var navigationSmall = document.getElementById("nav-small");
  navigationSmall.classList.toggle("sticky", window.scrollY > 0);
});
/* DROPDOWN MENU */

var showHideSmall = document.getElementById("show-hide");
var smallNav = document.getElementById("nav-small-content");

showHideSmall.addEventListener("click", function () {
  smallNav.classList.toggle("show-nav");
});

var menuOptions = document.getElementsByClassName("options");
for (let option of menuOptions) {
  option.addEventListener("click", function () {
    smallNav.classList.remove("show-nav");
  });
}

let aboutBtn = document.getElementById("about-me");
let skillsBtn = document.getElementById("skills");
let aboutMePage = document.getElementById("about-me-container");
let skillsPage = document.getElementById("skills-container");
skillsPage.style.display = "none";
aboutBtn.addEventListener("click", function () {
  aboutMePage.style.display = "block";
  skillsPage.style.display = "none";
  aboutBtn.style.fontWeight = "bold";
  skillsBtn.style.fontWeight = "normal";
  aboutBtn.style.color = "#46a6e9";
  skillsBtn.style.color = "white";
  aboutBtn.style.borderBottom = "1px solid #46a6e9";
  skillsBtn.style.borderBottom = "none";
});
skillsBtn.addEventListener("click", function () {
  skillsPage.style.display = "flex";
  skillsPage.style.flexFlow = "column wrap";

  aboutMePage.style.display = "none";
  skillsBtn.style.fontWeight = "bold";
  aboutBtn.style.fontWeight = "normal";
  skillsBtn.style.color = "#46a6e9";
  aboutBtn.style.color = "white";
  skillsBtn.style.borderBottom = "1px solid #46a6e9";
  aboutBtn.style.borderBottom = "none";
});
