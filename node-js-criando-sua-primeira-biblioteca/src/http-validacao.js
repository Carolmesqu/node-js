import chalk from "chalk";

function extraLinks (arrLinks) {
   //Essa função callback abaixo retorna apenas os valores de uma lista 
    return arrLinks.map((objetoLink) => 
        Object.values(objetoLink).join())
        //o join pega o conteúdo de uma array e converte em string
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try {
                 //await fetch significa que fetch é uma função assincrona 
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return manejaErros(erro)
            }
           
        })
    )
    return arrStatus;
}

function manejaErros (erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro'
    }
}

export default async function listaValidada (listaDeLinks) {
    const links = extraLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}
