# amplimax

Envio e recebimento de mensagens SMS com NodeJS, utilizando um roteador 4g Elsys da Amplimax.

Hoje, o pr�prio roteador disponibiliza uma funcionalidade de envio e recebimento de SMS, por�m consiste num processo manual, podendo ser automatizado para a sua necessidade. Como a interface administrativa do roteador � via browser, � poss�vel realizar requisi��es restfull diretamente na API de envio e recebimento de SMS.

Voc� poder� utilizar o algoritmo para ser utilizado para a confirma��o do cadastro do usu�rio, em cen�rios que precisam de uma valida��o do n�mero de telefone celular, ou at� mesmo:

> "informe o codigo 2345 para continuar o cadastro"

> "PIZZA JA: seu pedido ABC12345 saiu para entrega"

> "fa�a a recarga para continuar com os beneficios"

entre outros...

## Instala��o (depend�ncias)
```
npm install
```

## Vari�veis

|vari�vel|descri��o|
|------------- | ------------- |
| USER|usu�rio de acesso ao roteador (padr�o admin)|
| PASSWORD|senha do usu�rio de acesso ao roteador (padr�o admin)|
|ADDRESS|IP do roteador (padr�o 192.168.10.254)|

## Enviando SMS
```
node send-sms
```

## Recebendo SMS
```
node read-sms
```

## Notas
- O envio e recebimento de SMS possui depend�ncias que se encontram em modelo experimental, o que faz surgir warnings no console.
- O m�dulo fetch apresenta incompatibilidade com o protocolo HTTP/1. Isso significa que a resposta das requisi��es n�o s�o tratadas dentro do then(), mas sim no catch().
- Utilize o algoritmo com modera��o. Ap�s o uso frequente, a operadora poder� bloquear o envio de SMS.
- N�o utilize o algoritmo para a realiza��o de SPAM.

## Para comprar o roteador
https://www.elsys.com.br/modem-4g-para-internet/p

<img src="send-sms.png" alt="Enviando SMS com roteador Amplimax"/>

<img src="read-sms.png" alt="Recebendo SMS com roteador Amplimax"/>