const changementThemeBtn = document.querySelector('.changement')
let toggleTheme = 0;

changementThemeBtn.addEventListener('click', () => {
    if(toggleTheme === 0){
        document.documentElement.style.setProperty('--ecriture', 'gold');
        document.documentElement.style.setProperty('--background-color', 'black');
        toggleTheme++;

    }else {
        document.documentElement.style.setProperty('--background-color', 'whitesmoke');
        document.documentElement.style.setProperty('--ecriture', 'black');
        toggleTheme--;
    }
})