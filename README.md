---

# API Para Teste

Este é um projeto de backend API desenvolvido em JavaScript, projetado para fornecer uma interface RESTful para gerenciamento de tarefas.

## Tecnologias Principais Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js, utilizado para construir a API.
- **MongoDB**: Banco de dados NoSQL, utilizado para armazenar dados de tarefas, através do Mongoose para modelagem de dados.

## Dependências Principais

- **express**: Framework web para Node.js.
- **mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando a interação com o banco de dados.
- **mongodb**: Driver oficial do MongoDB.
- **cors**: Middleware para habilitar Cross-Origin Resource Sharing, permitindo que a API seja consumida por aplicações frontend em diferentes domínios.
- **dotenv**: Para gerenciamento de variáveis de ambiente, facilitando a configuração do ambiente de desenvolvimento.

## Características do Projeto

- **API RESTful**: A API segue os princípios REST, permitindo operações CRUD (Criar, Ler, Atualizar, Deletar) para tarefas.
- **Validação Assíncrona**: Implementa validação assíncrona para garantir que o título da tarefa não seja duplicado.
- **Middleware de Validação**: Utiliza middleware para validar dados de entrada antes de processar as requisições.
- **Configuração para Desenvolvimento**: O projeto possui um script de desenvolvimento configurado no `package.json`, permitindo iniciar o servidor com o comando:

  ```bash
  npm run dev
  ```

- **Estrutura Modular**: O código está organizado em módulos, facilitando a manutenção e escalabilidade do projeto.

## Estrutura do Projeto

```
/src
  ├── /controllers        # Controladores para gerenciar a lógica de negócios
  ├── /middlewares        # Middlewares para validação e tratamento de erros
  ├── /models             # Modelos de dados para o MongoDB
  ├── /routes             # Definição das rotas da API
  ├── /validations        # Esquemas de validação usando Zod
  └── /config             # Configurações do banco de dados e variáveis de ambiente
```

## Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_DIRETORIO>
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão do MongoDB:

     ```
     MONGO_URI=<SUA_STRING_DE_CONEXAO>
     ```

4. **Inicie o servidor**:

   ```bash
   npm run dev
   ```

5. **Acesse a API**:
   - A API estará disponível em `http://localhost:3000/api/tasks`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é de código aberto e pode ser utilizado conforme a licença [MIT](LICENSE).

---
