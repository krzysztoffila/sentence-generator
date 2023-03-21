let sentences = ['walcz', 'nie poddawaj sie'];
const input = document.querySelector('input');

const addSentence = event => {
    event.preventDefault();
    sentence = input.value;
    sentences.push(sentence);
    console.log(sentences);
}
const cleanSentences = event => {
    event.preventDefault();
    sentences = [];
    console.log(sentences);
}
const showAdvice = event => {
    event.preventDefault();
    const h1 = document.querySelector('h1');
    let sentencePrefix = Math.floor(Math.random() * sentences.length)
    h1.innerHTML = sentences[sentencePrefix];
}
const showOptions = event => {
    event.preventDefault();
    alert(sentences);
}


document.querySelector('.add').addEventListener('click', addSentence)
document.querySelector('.clean').addEventListener('click', cleanSentences)
document.querySelector('.showAdvice').addEventListener('click', showAdvice)
document.querySelector('.showOptions').addEventListener('click', showOptions)