# Conceitos API REST

## Este projeto contempla:

- Express
    - Rotas:
        - Get;
        - Post;
        - Delete;
        - Update;
    - Middlewares;
    - Validações básicas;
- Nodemon
    - Uso;
    - Adicionado Sucrase e adaptação com o nodemon.json;
- ESlint & Prettier;
- Build;

## Passos para executar:

#### Para baixar todas as dependências execute no terminal:
` 
  yarn
` 

#### Para iniciar o projeto:
`
  yarn dev
`
- O projeto executa na porta 7000;

### Operações possíves:
- OBS: Use Insomnia ou Postman;

#### Inserir (POST) => http://localhost:7000/project
- No corpo da requisição informe via JSON:
`
{
	"title": "Mongo",
	"owner": "Fábio dos Santos"
}
`
- Resposta: Projeto inserido;

#### Listar todos (GET) => http://localhost:7000/project
- Não informe nada no corpo da requisição;
- Resposta: Lista de todos os projetos cadastrados;

### Atualizar (PUT) => http://localhost:7000/project/ID-PROJETO-UUID
- No corpo da requisição deve ser informado o novo title e o novo owner:
`
{
	"title": "Mongo",
	"owner": "Fábio dos Santos"
}
`
- Resposta: Projeto atualizado;

### Excluir (DELETE) => http://localhost:7000/project/ID-PROJETO-UUID
- No corpo da requisição não deve ser informado nada;
- Resposta: Corpo da requisição em branco;




