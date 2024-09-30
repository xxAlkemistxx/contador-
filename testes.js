let contador = 0 
let res = document.querySelector('section#result')


function clicks() {
    contador ++ 
    res.innerHTML = `<p>clicks <mark>${contador}</mark>.</p>`
}
function zerar () {
    contador = 0
    res.innerHTML = `<p>clcks<mark>${contador}</mark>.</p>`
}
