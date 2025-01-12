function changeTheme(theme){
    document.body.classList.remove('dark-theme','light-theme');

    if(theme === 'dark'){
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme','dark');
    }else if(theme === 'light'){
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
}
function changeFontSize(size){
    document.body.classList.remove('small-font','medium-font','large-font');
    
    if (size === 'small'){
        document.body.classList.add('small-font');
        localStorage.setItem('fontSize', 'small');
    }else if (size === 'medium'){
        document.body.classList.add('medium-font');
        localStorage.setItem('fontSize', 'medium');
    }else if (size === 'large'){
        document.body.classList.add('large-font');
        localStorage.body.setItem('fontSize', 'large');
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedTheme){
        changeTheme(savedTheme);
    }
    if (savedFontSize){
        changeFontSize(savedFontSize);
    }

});

