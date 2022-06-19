backgroundcolor = localStorage.getItem("backgroundColor");

if ( backgroundcolor == null ) {
    localStorage.setItem("backgroundColor", 0);
} else if ( backgroundcolor == 0 ) {
    document.querySelector('body').style.background = '#111522';
} else {
    document.querySelector('body').style.background = backgroundcolor;
}

function clicando() {
    console.log("clicou");
    input = document.querySelector('#background-color').value;
    localStorage.setItem("backgroundColor", input);
    backgroundcolor = localStorage.getItem("backgroundColor");
    console.log(input);
    document.querySelector('body').style.background = backgroundcolor;
    if (backgroundcolor == 0) {
        document.querySelector('body').style.background = '#111522';
        localStorage.setItem("backgroundColor", 0);
    }
}