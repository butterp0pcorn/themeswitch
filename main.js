const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
});
let themeSwitch = document.querySelector(".themeSwitch");
let body = document.querySelector("body");
themeSwitch.onclick = function () {
  themeSwitch.classList.toggle("active");
  body.classList.toggle("dark");
};

