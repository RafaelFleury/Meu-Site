
backgroundcolor = localStorage.getItem("backgroundColor");
//console.log(backgroundcolor);

if ( backgroundcolor == null ) {
    localStorage.setItem("backgroundColor", 0);
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
}

// document.querySelector('body').style.backgroundColor = 'red';





// const objs = [
//     {
//         "nome": "Matheus",
//         "idade": 30,
//         "esta_trabalhando": true,
//         "detalhes_profissao": {
//             "profissao": "Programador",
//             "empresa": "Empresa X"
//         },
//         "hobbies": ["Programar", "Correr", "Ler"]
//     },
//     {
//         "nome": "João",
//         "idade": 25,
//         "esta_trabalhando": false,
//         "detalhes_profissao": {
//             "profissao": null,
//             "empresa": null
//         },
//         "hobbies": ["Jogar", "Academia"]
//     }
// ]

//JSON
// converter objeto para JSON
// const jsonData = JSON.stringify(objs)
// console.log(objs)
// console.log(typeof objs)

// converter JSON para objeto
// const objData = JSON.parse(jsonData)
// console.log(objData)
// console.log(typeof objData)