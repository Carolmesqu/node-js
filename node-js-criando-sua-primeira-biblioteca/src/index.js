import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo';    
}

function trataErro(erro) {    
    throw new Error((chalk.blue.bgRed.bold(erro.code, 'não há arquivo no diretório')));
}

// PROMISES COM async/await

async function pegaArquivo(caminhoDoArquivo) {
    //No caso de sucesso do código inserimos o bloco de códigos no try
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch(erro) {
        trataErro(erro)
    }
}

// PROMISES COM then()
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//     //readFile devolve uma promessa
//     .readFile(caminhoDoArquivo, encoding)
//     //que vai ser tratada/resolvida pelo then
//     .then((texto) => console.log(chalk.green(texto)))
//     //se durante o processo do then ocorrer algum erro, esse erro será lançado pro catch
//     .catch(trataErro)
// }

// VERSÃO SÍNCRONA, PORÉM NÃO ENVOLVE PROMESSAS
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.blue.underline.bold(texto));
//     })
// }

pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/');

// \[^[\]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)

export default pegaArquivo;

