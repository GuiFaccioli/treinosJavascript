 
function adicionar() {
  let digitado = document.getElementById("textoDigitado").value;
  let novoItem = document.createElement("li");
  novoItem.innerText = digitado;
  document.getElementById("lista").appendChild(novoItem);

    }

   