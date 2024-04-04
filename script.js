//for login and register pop-up

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

//To send push notifications

const notifi = document.querySelector('.notifi')

notifi.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        alert(perm)
    })
})


//for refreshing page on clicking 'Home' button

function reloadPage(){
    
    location.reload();

}