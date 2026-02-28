# 🚀 Autoflex API

API REST desenvolvida em **NestJS** para gerenciamento de produtos, matérias-primas e planejamento de fabricação.

---

## 📌 Sobre o Projeto

A aplicação permite:

- ✅ Cadastro de produtos
- ✅ Cadastro de matérias-primas
- ✅ Associação de matérias-primas a produtos
- ✅ Consulta de fabricação possível (`manufacturing-plan`) com base no estoque disponível
- ✅ Estrutura modular e testável
- ✅ Documentação automática com Swagger

O projeto foi desenvolvido seguindo boas práticas de arquitetura em NestJS, separação de responsabilidades e testes unitários.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- NestJS
- TypeORM
- PostgreSQL (ou outro banco configurado)
- Jest (testes unitários)
- Swagger (documentação)
- ESLint
- Docker (opcional)

---

## 📂 Estrutura do Projeto

```
src/
├── products/
│   ├── dto/
│   ├── entities/
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── *.spec.ts
│
├── raw-materials/
├── product-raw-materials/
├── manufacturing-plan/
│
├── app.module.ts
└── main.ts
```

Cada módulo contém:

- Controller (exposição dos endpoints)
- Service (regra de negócio)
- Entity (modelo de dados)
- DTOs (validação e contratos)
- Testes unitários

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar repositório

```bash
git clone <url-do-repositorio>
cd autoflex-api
```

---

### 2️⃣ Instalar dependências

```bash
npm install
```

---

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=autoflex
```

---

### 4️⃣ Rodar aplicação

```bash
npm run start:dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 📘 Documentação Swagger

Após iniciar o projeto, acesse:

```
http://localhost:3000/docs
```

---

## 🧪 Executar Testes

### Rodar testes unitários

```bash
npm run test
```

### Rodar cobertura de testes

```bash
npm run test:cov
```

---

## 🔗 Endpoints da API

---

### 📦 Products

| Método | Rota          | Descrição             |
| ------ | ------------- | --------------------- |
| POST   | /products     | Criar produto         |
| GET    | /products     | Listar produtos       |
| GET    | /products/:id | Buscar produto por ID |
| PATCH  | /products/:id | Atualizar produto     |
| DELETE | /products/:id | Remover produto       |

---

### 🧱 Raw Materials

| Método | Rota               | Descrição              |
| ------ | ------------------ | ---------------------- |
| POST   | /raw-materials     | Criar matéria-prima    |
| GET    | /raw-materials     | Listar matérias-primas |
| PATCH  | /raw-materials/:id | Atualizar estoque      |

---

### 🔗 Product Raw Materials

| Método | Rota                   | Descrição                        |
| ------ | ---------------------- | -------------------------------- |
| POST   | /product-raw-materials | Associar matéria-prima a produto |
| GET    | /product-raw-materials | Listar associações               |

---

### 🏭 Manufacturing Plan

| Método | Rota                | Descrição                                   |
| ------ | ------------------- | ------------------------------------------- |
| GET    | /manufacturing-plan | Consulta de fabricação possível por produto |

---

## 🏗️ Arquitetura

A API segue o padrão modular do NestJS:

- Separação por domínio
- Services responsáveis pela regra de negócio
- Controllers responsáveis apenas por entrada/saída
- Repositórios via TypeORM
- DTOs para validação
- Testes unitários com dependências mockadas

---

## 🔥 Melhorias Futuras

- Autenticação JWT
- Controle de permissões
- Testes E2E
- Docker Compose com banco integrado
- Deploy em ambiente cloud (AWS, Azure ou GCP)

---

## 👨‍💻 Autor

Projeto desenvolvido como desafio técnico aplicando boas práticas de engenharia de software e arquitetura limpa.

---
