console.log('FERRAMENTAS ESTÃO OK!');
const tmi = require('tmi.js');
const NOME_DO_BOT = 'NOME DA SUA CONTA DE BOT';
const NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR = 'NOME DO CANAL';
const O_TOKEN_DO_PASSO_4 = 'TOKEN';

// Definir opções de configuração
const opts = {
  identity: {
    username: NOME_DO_BOT,
    password: O_TOKEN_DO_PASSO_4
  },
  channels: [NOME_DO_CANAL_QUE_O_BOT_VAI_FICAR]
};
// Cria um cliente tmi com  nossas opções
const client = new tmi.client(opts);
//intercepta mensagem do chat
function mensagemChegou(alvo, contexto, mensagem, ehBot) {
  if (ehBot) {
    return;
  } //se for mensagens do nosso bot ele não faz nada

  // remove espaço em branco da mensagem para verificar o comando
  const nomeDoComando = mensagem.trim();
  // checando o nosso comando
  if (nomeDoComando === '!comandoUM') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
  } else if (nomeDoComando === '!comandoDOIS') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
  } else {
    console.log(`* Não conheço o comando ${nomeDoComando}`);
  }
}

function entrouNoChatDaTwitch(endereco, porta) {
  console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}

// Registra nossas funções
client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);

// Connecta na Twitch:
client.connect();
