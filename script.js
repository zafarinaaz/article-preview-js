const btn = document.querySelector(".share-icon .icon");
const sosmedBar = document.querySelector(".share-container");
const icon= document.querySelector(".icon");
const profile= document.querySelector('.profile-wrap');
const iconImg= document.querySelector('.icon img');
const i3= document.querySelector('.i3');
const share= document.querySelector('.share-wrap');
btn.onclick = ()=> {
    sosmedBar.classList.toggle('show');
    icon.classList.toggle('show');
    iconImg.classList.toggle('show');
    i3.classList.toggle('show');
    profile.classList.toggle('show');
    share.classList.toggle('show');
}