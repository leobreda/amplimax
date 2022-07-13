import querystring from "querystring";
import readline from 'readline-sync';
readline.setDefaultOptions({encoding: 'utf8'});

const USER='admin';
const PASSWORD ='admin';
const ADDRESS ='192.168.10.254';


var arrMensagem = Array('Informe o codigo 12345 para continuar o cadastro',
                    'PIZZA.COM informa: a sua pizza esta a caminho! Confira o valor no ato do pagamento.',
                    'SUPER LOJA: a sua encomenda XYZ12345 saiu para entrega',
                    'MeuApp. Tentativa de login mal sucedida. Se nao for voce, verifique a seguranca do login.');


console.log('=============================================');
console.log('Envia SMS');
console.log('---------------------------------------------');

let ddd='';
let celular='';
let mensagem='';

while(true)
{
  console.log('\x1b[0m','');

  let rl = readline.question('DDD'+(ddd!=''?' ('+ddd+')':'')+': ');

  if(rl!='')
    ddd = rl;
  
    rl = readline.question('Celular'+(celular!=''?' ('+celular+')':'')+': ');
    if(rl!='')
      celular = rl;


   mensagem = comporMensagem();
  
   console.log('\x1b[33m%s\x1b[0m','\nEnviando mensagem...');
   console.log('\x1b[33m%s\x1b[0m',mensagem);
   enviar(ddd,celular,mensagem);

   console.log('\x1b[32m','\nMensagem enviada com sucesso!');
   await sleep(1000);
}

process.exit(0);

function comporMensagem()
{
  console.log('\n\nEscolha uma das mensagens abaixo, ou descreva a mensagem desejada:');

  for(let i=0;i<arrMensagem.length;i++)
    console.log('\t'+(i+1) + '. '+arrMensagem[i]);

  let mensagem = readline.question("Mensagem: ");

  if(parseInt(mensagem)>=0)
    mensagem = arrMensagem[parseInt(mensagem)-1];

  return mensagem;
}


function enviar(ddd,celular,mensagem)
{

  let args = {
    'number':ddd+''+celular,
    'msgText':mensagem,
    'submit-url':'/index.html?escrever-sms'};


    fetch('http://'+ADDRESS+'/boafrm/formWriteSms', {
      "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6,hu;q=0.5,cy;q=0.4,ru;q=0.3",
      "authorization": "Basic "+ Buffer.from(USER+':'+PASSWORD).toString('base64'),
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-requested-with": "XMLHttpRequest",
      "Referer": 'http://'+ADDRESS+'/index.html?escrever-sms',
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": querystring.stringify(args),
    "method": "POST"
    }).then(function(res) {
    }).catch(function(error) {
    });
}

 function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}