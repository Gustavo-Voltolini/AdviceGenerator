var url = "https://api.adviceslip.com/advice";

function getAdvice() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const advice = document.querySelector('.frase');
            advice.innerHTML = '"' + data.slip.advice + '"';
        })
}  