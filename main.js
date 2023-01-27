const buttonNav = document.querySelector('.bar')

buttonNav.addEventListener('click', 
    () => {
    document.querySelector('.nav-bar-right').classList.toggle('enable');
    }
)