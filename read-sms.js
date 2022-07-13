import http from 'http';
import { format } from 'path';
import querystring from "querystring";
import MD5 from "crypto-js/md5.js";

const USER='admin';
const PASSWORD ='admin';
const ADDRESS ='192.168.10.254';

console.log('=============================================');
console.log('Recebe SMS');
console.log('---------------------------------------------');

console.log('');
console.log('Recebendo mensagens...');
let md5_data = [];

while(true)
{
  let data=[];

    data = await  receber();

  
  for(let i=0;i<data.length;i++)
  {
   
    if(md5_data.indexOf(MD5(data[i].data).toString())==-1)
    {
      md5_data.push(MD5(data[i].data).toString());

      console.log(data[i]);
      console.log('');
    }
  }
  process.stdout.write(".");

  await sleep(2000);
}





async function receber()
{
  const resp = await fetch("http://"+ADDRESS+"/boafrm/formGetSms", {
    "method": "POST",  
    "headers": {
      "authorization": "Basic "+ Buffer.from(USER+':'+PASSWORD).toString('base64'),
      },
    "body": "submit-url=%2Findex.html%3Fler-sms"
    
  }).then(function(res) {
  }).catch(function(error) {
    let dados = parseSMS(error.cause.data);
    return dados;
   });
   return resp;
}

async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

function parseSMS(str)
{
  var smsArr = str.replace('AT+CMGL="ALL"\n\n\n', "").replace("\n\n\n\nOK\n\n", "").split("+CMGL: ");
  let arr = [];

  for (var i = 0; i < smsArr.length; i++){
      if (smsArr[i].length != 0) {
          var splitIndex = smsArr[i].indexOf("\n\n");
          let header = smsArr[i].substr(0,splitIndex).replaceAll('"', '').split(",");
          
          if('undefined'.indexOf(header)!=-1)
            continue;

          arr.push({
            "data":header[4]+' '+header[5],
            "origem":header[2].substring(0,8)+'xxxx',
            "mensagem":smsArr[i].substr(splitIndex).replaceAll('\n','')
          });

      }

  }
  return arr; 
}
 