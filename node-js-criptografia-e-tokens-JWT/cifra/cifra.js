const mensagemSecreta = "minhamensagemsecreta";

//console.log(mensagemSecreta);


//Função que recebe uma mensagem e uma quantidade de movimentos, parecido com Cifra de Cesar
function cifraMensagem(mensagem, movimentos) {

/**
 * Vamos separar cada caractere e fazer uma operação para descobrirmos qual caractere x que vem depois.
 * Utilizamos o split que vai transformar um string em um array de caracteres, temos que passar um (''),
 * para comunicar que cada caractere é para separar um string. Vamos passar por cada uma dessas posições
 * e operar os caracteres, vamos utilizar o método map para percorrer os valores. Dentro do map temos que
 * ter uma função que vai realizar essa operação. Criamos uma nova variavel e pegamos qual é o código 
 * desse caractere, na posição zero. Como estamos dentro do map ele só vai ter uma posição única, que é
 * a posição de indice zero e vamos retornar o caractere que está movimento, após esses caracteres e vamos
 * utilizar o método de String o fromCharCode e passamos para ele o que encontramos codigoCaractere + 
 * movimentos
 */
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos)
    })

    //Utilizamos o join para unir novamente os caracteres
    return mensagemCifrada.join('');
}

//Cifra mensagem secreta e 3 
const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
console.log(mensagemCifrada);

function decifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    })

    //Utilizamos o join para unir novamente os caracteres
    return mensagemCifrada.join('');
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);
console.log(mensagemDecifrada);

const senhaSecreta = "alura";

function cifrarMensagem (mensagem, movimentos){
 const mensagemCifrada = mensagem.split('').map((caractere) => {
 const codigoCaractere = caractere.charCodeAt(0);
 return String.fromCharCode(codigoCaractere + movimentos)
})
 return mensagemCifrada.join("")
}

const mensagemCifradaExemplo = cifrarMensagem(senhaSecreta, 4);
console.log(mensagemCifradaExemplo);