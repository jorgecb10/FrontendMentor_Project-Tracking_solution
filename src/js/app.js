document.addEventListener('DOMContentLoaded', () => {
    console.log('documento listo');

    const iconoMenu = document.getElementById('menu-desplegable')
    const menu = document.querySelector('.menu')

    iconoMenu.addEventListener('click', () => {
        const img = iconoMenu

        if(img.src.includes('icon-hamburger.svg')) {
            img.src = './src/images/icon-close.svg'
        } else {
            img.src ='./src/images/icon-hamburger.svg'
        }

        menu.classList.toggle('mostrar')
    })
})