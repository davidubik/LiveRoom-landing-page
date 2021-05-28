onload = () =>{

    const cover = document.querySelector('.cover');

const fadeOutEffect = e => { // FONCTION QUI JOUE SUR L'OPACITÉ DE LA DIV COVER
    const fadeTarget = document.querySelector('.cover');
    const fadeEffect = setInterval( () => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.4;     
        } else {
            clearInterval(fadeEffect); 
            enableScrolling();
        }
    }, 200);
    slideUp();
}

function slideUp() {
    var elem = document.getElementById('cover');
    elem.style.transition = "all 1.5s ease-in-out";
    elem.style.height = "0px";
  }

cover.addEventListener('wheel', fadeOutEffect)

const disableScrolling = () => { //FONCTION QUI BLOQUE LE SCROLL DE LA PAGE
    const x=window.scrollX;
    const y=window.scrollY;
    window.onscroll = () => {window.scrollTo(x, y);};
}

const enableScrolling = () =>{ // FONCTION QUI RESTAURE LE SCROLL SUR LA PAGE
    window.onscroll = () => {};
}
 
disableScrolling();


}

