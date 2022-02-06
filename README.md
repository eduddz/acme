# Acme

## Neste projeto vamos usar:

    - Framework - Reactjs
    - Banco de cados - Mysql

## Serão duas pastas:

    - Client - para o front-end
    - Server - para o back-end
  
## Rotas

    - get('/pacientes') - para acessar todos os usuários
    - post('/pacientes/registrar') - para cadastrar novo usuários
    - put('/pacientes/alterar/:cpf') - para alterar usuário
    - get('/create-table') - para criar a tabela
  
## Código

### Iniciar o projeto Back-End

    cd server >
    |
    yarn init
    |
    yarn
    |

### Bibliotecas Back-End

Cors - compartilhamento de recursos com origens diferentes - usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta.

    yarn add cors

Express - para acessar rotas

    yarn add express

Mysql - para conectar o banco de dados mysql ao projeto

    yarn add mysql

Nodemon - para que quando houver alteração no código, não precise reiniciar o servidor

    yarn add Nodemon


Middleware - são funções que processam a solicitação e envia a resposta. Não é necessário para solicitações GET e DELETE, mas sim para POST e PUT, porque ambas enviam dados para o servidor e solicita ao servidor que aceite ou armazene esse dados, que está incluído em um corpo (req.body)
