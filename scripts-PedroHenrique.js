const buttonConsult = document.querySelector(".btn")
const result = document.querySelector(".result")

function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if (min >= max) {
        alert("Valor mínimo deve ser menor que o valor máximo");
    }

    else {
        const result = Math.floor(Math.random() * (max - min) + min);
        document.querySelector(".result").value = result;
    }
    // alert(result)
}

buttonConsult.addEventListener("click", generateNumber);