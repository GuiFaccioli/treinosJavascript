console.log('Olá');




let cores = ["Azul", "Amarelo", "Verde", "Vermelho"];



if (!cores.includes ("Marrom")) { 

    cores.push("Marrom"); 



} if (!cores.includes ("Preto")) {

    cores.push("Preto")
} else {

    cores.push ("Branco")
}

console.log(cores)







const produtos = ["Frigideira", "Panela", "Talheres"];



if (!produtos.includes ("Fogão")) {

    produtos.push("Fogão");


console.log(produtos)
}



let quarto = ["Cama", "Abajour", "Travesseiros","Lençol"];

console.log(quarto);

if (!quarto.includes ("Cobertor")) {

    quarto.push("Cobertor");

    console.log(quarto)
}

if (!quarto.includes ("Cabeceira")) {

    quarto.push("Cabeceira") 

    console.log(quarto)


}


if (quarto.includes ("Abajour")) {

    console.log("Abajour já faz parte do quarto")
} 