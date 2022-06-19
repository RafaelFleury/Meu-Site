let input = document.querySelector('.input-search');
let btn = document.querySelector('.search-btn');
let searchFieldset = document.querySelector('.search-fieldset');
console.log("oi"); 
console.log(window.location.href);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.hostname);

const Menu = ["menu", "principal", "home", "rafael", "rafael fleury", "café", "cafe", "coffee"]
const SobreMim = ["sobre", "sobre mim", "sobremim"];
const Faculdade = ["puc", "facul", "faculdade", "puc minas", "pucminas", "scratch", "arduino", "tinkercad", "links faculdade"];
const Jogos = ["joj", "jogos", "games", "jogo", "game"];
const ZombieEscape = ["zombie", "zumbi", "zombie escape", "zombieescape"];
const VirandoAesquina = ["esquina", "virandoàesquina", "virandoaesquina", "virando à esquina", "virando a esquina", "aroundthecorner", "around the corner"];
const LinksArduinoScratch = ["linkss", "links arduino - tinkercad e scratch", "tinkercad e scratch", "links arduino", "links scratch", "links tinkercad", "arduino e scratch", "tinkercad e arduino", "arduino e tinkercad", "scratch e arduino", "scratch e tinkercad"];
const Tprojetos = [ "todos", "todos os projetos", "todososprojetos", "todosprojetos", "projetos", "todos projetos", "projeto"];
const Novidades = [ "new", "novidades", "novo", "novos", "news", "novos projetos", "log", "logs", "registros", "registro"];
const Historias = ["story", "storys", "historias", "contos", "livros"];
const MelhoresProjetos = ["top", "melhores projetos", "melhores", "top projetos"];
const Testes = ["test", "testes", "densevolvedor", "opções de desenvolvimento", "opções de desenvolvedor", "teste", "ferramentas de teste", "ferramentas"];
const Calculadora = [ "calc", "calculadora", "números", "numeros", "cálculos", "calculos", "calculando", "number facts"];

const Pages = [SobreMim, Faculdade, Jogos, ZombieEscape, VirandoAesquina, LinksArduinoScratch, Tprojetos, Menu, Novidades, Historias, MelhoresProjetos, Testes, Calculadora];

let i = 0;
const paginas = new Map ([
    [Pages[0], "/menu/sobre-mim/sobre-mim.html"],
    [Pages[1], "/menu/faculdade/faculdade.html"],
    [Pages[2], "/menu/jogos/jogos.html"],
    [Pages[3], "/menu/jogos/zombie-escape/zombie-escape.html"],
    [Pages[4], "/menu/jogos/VirandoEsquina/virandoEsquina.html"],
    [Pages[5], "/menu/faculdade/links-arduino-scratch/links.html"],
    [Pages[6], "/menu/todos-os-projetos/Tprojetos.html"],
    [Pages[7], "/index.html"],
    [Pages[8], "/menu/novidades/novidades.html"],
    [Pages[9], "/menu/historias/historias.html"],
    [Pages[10], "/menu/melhores-projetos/melhores-projetos.html"],
    [Pages[11], "/menu/testes/testes.html"],
    [Pages[12], "/menu/projetos-gerais/calculadora/calculadora.html"]
]);

searchFieldset.onchange = () => {
    for (i = 0; i < Pages.length; i++) {
        if (Pages[i].find(acharValor) != undefined) {
            let pag = paginas.get(Pages[i]);
            console.log("input: " + pag)
            window.location.pathname = pag;
            break;
        }
    }
}

function acharValor(value) {
return value == input.value.toLowerCase();
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchFieldset.onchange();
  }
});

// btn.addEventListener("click", function() {
//     console.log("oi" + input.value)
//     let tela = "http://127.0.0.1:5502/" + input.value;
//     console.log("tela: " + tela);
//     window.location.href = tela;
// })