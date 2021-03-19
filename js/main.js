let menu = document.getElementsByClassName('menu')[0]
let btn = document.getElementById('burger-btn')
let btnClose = document.getElementById('close-btn')
let btnBack = document.getElementById('back-btn')

btn.addEventListener('click',function(){
    menu.classList.remove('menu-hide')
    menu.classList.add('menu-show');
})

btnClose.addEventListener('click',function(){
    menu.classList.remove('menu-show')
    menu.classList.add('menu-hide')
})

btnBack.addEventListener('click',function(){
    projects.classList.remove('show-projects')
    menu.classList.add('menu-show');    
})

let anchorEl = document.getElementsByTagName('a')

let projects = document.getElementsByClassName('projects')[0]
anchorEl[0].onclick = function(){    
    projects.classList.add('show-projects')
}

let loginSubmit = document.querySelector('#login #submit')
let loginEmail = document.querySelector('#email')
let loginPass = document.querySelector('#pass')
let alertMsg = document.querySelector('#alertMsg');

function blockShowDanger(){
    alertMsg.classList.add('alert-danger');
    alertMsg.style.display ='block'
    setTimeout(() => {
    alertMsg.style.display ='none'           
    alertMsg.classList.remove('alert-danger');
}, 3000);
}

let welcomePage = document.querySelector('.welcomePage');
let loginPage = document.querySelector('.loginPage');


loginSubmit.addEventListener('click',(e)=>{
    if(loginEmail.value ==='' || loginPass.value === ''){
        alertMsg.textContent='Enter all fields'
        blockShowDanger()   
    }else if(loginEmail.value && loginPass.value =='admin'){
        alertMsg.textContent ='Success!'
        alertMsg.classList.add('alert-success')
        alertMsg.style.display ='block'
        setTimeout(() => {
            welcomePage.style.display = 'block'
            welcomePage.style.animation = 'fadeIn 1.5s'
            loginPage.style.display ='none'
        }, 1000);
    }else{
        alertMsg.textContent='Email or password is incorrect'
        blockShowDanger()
    }
})

let regBtn = document.querySelector('#login #reg')
let loginForm = document.querySelector('#login')
let regForm = document.querySelector('#register')

regBtn.addEventListener('click',(e)=>{
    loginForm.classList.add('loginAnim')
    regForm.style.display ='block'
    regForm.style.position = 'absolute'
    regForm.style.animation = 'regAnim 0.2s 2800ms linear both'
})