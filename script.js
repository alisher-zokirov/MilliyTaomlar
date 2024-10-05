const themes = {
    light: {
        '--body-bg': '#f4f4f4',
        '--text-color': 'black',
        '--background-color': '#fff',
        '--button-color': 'black',
        '--button-text': 'white',
        '--border-color': 'white'
    },

    dark: {
        '--body-bg': 'black',
        '--text-color': 'white',
        '--background-color': 'black',
        '--button-color': 'white',
        '--button-text': 'black',
        '--border-color': 'white'
    }
}

const btnTheme = document.querySelector(".button");
btnTheme.addEventListener("click", selectTheme)

function selectTheme() {
    if (btnTheme.classList.contains("btn-light")) {
        btnTheme.classList.remove('btn-light');
        btnTheme.innerHTML = "Dark"
        btnTheme.classList.add('btn-dark')
        btnTheme.setAttribute('data-theme', 'dark')
    } else {
        btnTheme.innerHTML = "Light"
        btnTheme.classList.remove('btn-dark')
        btnTheme.classList.add('btn-light')
        btnTheme.setAttribute('data-theme', 'light')
    }

    const themeAttr = btnTheme.getAttribute('data-theme')
    const themeObj = themes[themeAttr];
    let themeStr = ''

    for (const key in themeObj) {
        themeStr += `${key}: ${themeObj[key]};`
    }

    document.documentElement.style = themeStr;
}