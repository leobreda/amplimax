# amplimax

Envio de mensagens SMS com NodeJS, utilizando um roteador 4g Elsys da Amplimax.

Hoje, o próprio roteador disponibiliza uma funcionalidade de envio de SMS, porém consiste num processo manual, podendo ser automatizado para a sua necessidade. Como a interface administrativa do roteador é página web, foi possível identificar o padrão de informações que são processadas via POST, no momento do envio do SMS.

Você poderá utilizar o algoritmo para ser utilizado para a confirmação do cadastro do usuário, em cenários que precisam de uma validação do número de telefone celular, ou até mesmo:

> "informe o codigo 2345 para continuar o cadastro"

> "PIZZA JÁ: seu pedido ABC12345 saiu para entrega"

> "faça a recarga para continuar com os beneficios"

entre outros...

## Variáveis

|variável|descrição|
|------------- | ------------- |
| user|usuário de acesso ao painel administrativo|
| passwd|senha do usuário de acesso ao painel administrativo|
|address|IP do roteador. O valor padrão é 192.168.10.254|
|phonenumber|Número do celular destino, composto por DDD + número do telefone|