
// no topo do arquivo importamos o código
import chalk from 'chalk';

/**
 * No dia a dia de desenvolvimento usamos muitos códigos que não somos nós quem escrevemos. 
 * Eles podem ser funções e métodos nativos do JavaScript ou até trechos de código pronto 
 * que importamos de libs externas para dentro dos nossos projetos, usando, por exemplo, 
 * o comando npm install <nome da lib>.
 * É por isso que a leitura da documentação é importante: por meio dela descobrimos como escrever 
 * o código para acessar os recursos de determinada biblioteca ou framework, com exemplos e casos 
 * de uso.
 * Vamos praticar um pouco mais com o chalk e identificar as partes do código:
 
 * Todos os arquivos que a lib chalk precisa para funcionar foram importados para dentro do diretório 
 * node_modules pelo Node.js (através do repositório do NPM) e ficam disponíveis para uso no projeto.
 * O código da linha acima atribui o conteúdo da biblioteca à constante chalk. Por convenção, criamos a 
 * const com o mesmo nome da lib, mas funcionaria da mesma forma com outro nome. Por exemplo:
 * 
 * OU
 * import libChalk from 'chalk';
 * console.log(libChalk.blue.bgWhite.bold('Alura'));

 * Isso acontece por que os identificadores (tanto chalk como libChalk) se comportam como variáveis.
 * Agora que já importamos a lib para o arquivo index.js, podemos utilizar os métodos que ela disponibiliza.
 * Sabendo que métodos são funções, temos que lembrar que uma função só é executada corretamente se receber 
 * argumentos corretos como parâmetro. Este é o tipo de informação importante que obtemos com a documentação. Veja o exemplo:
 */

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));
//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'Node.js'));
//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

/**
 * Por isso, leia a documentação e faça testes no seu código!
 * O que fizemos acima é padrão para qualquer código que utilizamos em nossos projetos. 
 * Através da documentação procuramos respostas para as seguintes perguntas:
 * Como eu importo os métodos da lib para o meu código?
 * Quais são os métodos e/ou palavras-chaves que a lib disponibiliza e quais os usos?
 * Quais (e quantos) são os argumentos que devo passar como parâmetro para que estes métodos funcionem? Strings? Números? Um array de informações?
 */