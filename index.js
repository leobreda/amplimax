import fetch from "node-fetch";
import querystring from "querystring";

let user='';
let passwd='';
let address='192.168.10.254';
let phonenumber=11999998888;
let message='Informe o codigo 23452 para continuar'

let args = {
	'number':phonenumber,
	'msgText':message,
	'submit-url':'/index.html?escrever-sms'};

fetch('http://'+address+'/boafrm/formWriteSms', {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6,hu;q=0.5,cy;q=0.4,ru;q=0.3",
    "authorization": "Basic "+ Buffer.from(user+':'+passwd).toString('base64'),
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "Referer": 'http://'+address+'/index.html?escrever-sms',
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": querystring.stringify(args),
  "method": "POST"
}).then(res => res.text())
    .then(text => console.log(text));