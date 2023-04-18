/**
 * Já que estávamos falando sobre APIs REST, vamos ver um exemplo usando a 
 * Fetch API do JavaScript para buscar dados e convertê-los para o formato JSON.
 */

function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
   }
   
   getUser(1);

   /**
    * Destrinchando o código acima: a função getUser() recebe um id de usuário 
    * como parâmetro, para que seja passado para o endpoint REST fictício. 
    * A função fetch() recebe como parâmetro o endpoint e retorna uma Promise.
    * 
    * No exemplo acima: ao iniciarmos uma cadeia de promessas - no caso, para 
    * fazer uma requisição HTTP - enquanto a resposta está pendente ela retorna 
    * um Promise object. O objeto, por sua vez, define uma instância do método 
    * .then(). Ao invés de passar o retorno da função callback diretamente para 
    * a função inicial, ela é passada para .then(). Quando o resultado da 
    * requisição HTTP chega, o corpo da requisição é convertido para JSON e este 
    * valor convertido é passado para o próximo método .then().
    * 
    * A cadeia de funções fetch().then().then() não significa que há múltiplas 
    * funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que 
    * cada instância de .then() retorna, por sua vez, um new Promise(). Toda a 
    * cadeia é lida de forma síncrona na primeira execução, e em seguida executada 
    * de forma assíncrona.
    */

   function getUserSegundo(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
      .catch(error => console.log(error))
      .finally(() => /*{ aviso de fim de carregamento }*/)
   }
   
   getUserSegundo(1);

   /**
    * Além do método .then() que recebe o objeto-Promise para ser resolvido, 
    * o método .catch() retorna no caso de rejeição da Promise. Além disso, 
    * o último método, .finally(), é chamado independente de sucesso ou falha 
    * da promessa e a função callback deste método é sempre executada por último. 
    * Esta função pode ser usada, por exemplo, para fechar uma conexão ou dar 
    * algum aviso de fim de carregamento.
    */

    /**
     * No caso de várias promessas que devem ser resolvidas pelo programa 
     * (por exemplo, alguns dados em endpoints REST diferentes), 
     * pode-se utilizar Promise.all:
     */

   const endpoints = [
    "https://api.com/api/user/1",
    "https://api.com/api/user/2",
    "https://api.com/api/user/3",
    "https://api.com/api/user/4"
   ]
   
   const promises = endpoints.map(url => fetch(url).then(res => res.json()))
   
   Promise.all(promises)
    .then(body => console.log(body.name))

/**
 * No exemplo acima, um array de endpoints (endpoints) é percorrido com .map e as 
 * promessas resultantes do fetch passadas para a variável promises em um novo array. 
 * Todo este array de promessas será percorrido e resolvido por Promise.all - no 
 * exemplo acima a função callback apenas passa para console.log a propriedade fictícia name.
 * 
 * Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled). Os estados possíveis, 
 * uma vez que uma Promise está settled, são "concluída" (fulfilled) ou "rejeitada" (rejected). 
 * Após passar de pending para settled e se definir como fulfilled ou rejected, a Promise não 
 * muda mais de estado.
 */