const btnform = document.querySelector("#btn-form");
const contactFieldset = document.querySelector('.contact-fieldset');
const inputs = document.querySelectorAll('fieldset .contact-inputs'); // array com todos os inputs selecionados
const message = document.querySelector('#message');

contactFieldset.onchange = () => {
    // for (let i = 0; i < inputs.length; i++) {
    //     if (inputs[i].value.length == 0) btnform.disabled = true;
    //     else btnform.disabled = false;
    // } // processo simples porém caro para fazer verificação de preenchimento de informações

    let ativado = true;
    let i = 0;
    while (i < inputs.length && ativado) {
        if (inputs[i].value.length === 0 || inputs[i].value.length === null || !inputs[i].checkValidity()) ativado = false;

        inputs[i].classList.remove('borda-vermelha');

        if (!ativado) inputs[i].classList.add('borda-vermelha');

        i++;
    } // checkValidity() verifica se o tipo do dado inserido é válido (só funciona para email)

    if (message.value.length === 0 || message.value.length === null) {
        message.classList.add('borda-vermelha');
        ativado = false;
    } else
        message.classList.remove('borda-vermelha');

    btnform.disabled = !ativado;

}