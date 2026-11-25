// cotação de moedas do dia.
const USD = 4.87
const EUR = 5.23
const GBP = 6.08


// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o event de submit (enviar) do formulário.
form.onsubmit = function(event) {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}


// função para converter a moeda.
function convertCurrency(amount, price, symbol){
    console.log(amount, price, symbol)
}