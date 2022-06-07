let factText = document.querySelector('#number-factText');

function getFactFetch(){
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(data => {
                factText.innerText = data;
    })
    .catch(err => console.log(err));

    const { translate } = require('free-translate');

    (async () => {
    const translatedText = await translate('Hello World', { from: 'en', to: 'ja' });

    console.log(translatedText); // こんにちは世界
    })();
}