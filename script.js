window.document.addEventListener("DOMContentLoaded", function(){
    /* Botão letramaiuscula*/
    window.document.querySelector("#btnMai").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })

    window.document.querySelector("#btnmin").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })
})