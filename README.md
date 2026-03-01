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
- ✅ Migrations versionadas com TypeORM
- ✅ Seed automático de dados iniciais
- ✅ Documentação automática com Swagger
- ✅ Ambiente containerizado com Docker

O projeto foi desenvolvido seguindo boas práticas de arquitetura em NestJS, separação de responsabilidades e versionamento de banco de dados.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- NestJS
- TypeORM
- MySQL
- Jest (testes unitários)
- Swagger
- ESLint
- Docker & Docker Compose

---

## 📂 Estrutura do Projeto

```
src/
├── products/
├── raw-materials/
├── product-raw-materials/
├── manufacturing-plan/
│
├── database/
│   ├── migrations/
│   └── seeds/
│
├── app.module.ts
└── main.ts

docker/
└── entrypoint.sh
```

Cada módulo contém:

- Controller (exposição dos endpoints)
- Service (regra de negócio)
- Entity (modelo de dados)
- DTOs (validação e contratos)
- Testes unitários

---

# ⚙️ Como Executar o Projeto

Você pode rodar o projeto de duas formas:

1. 🔥 Usando Docker (recomendado)
2. 🧪 Rodando localmente

---

# 🐳 Executando com Docker (Recomendado)

## 1️⃣ Subir containers

```bash
docker compose up --build
```

Isso irá:

- Subir o MySQL
- Aguardar o banco estar pronto
- Rodar automaticamente as migrations
- Executar o seed inicial
- Subir a API

---

## 🔁 Rodar novamente do zero (resetando banco)

```bash
docker compose down -v
docker compose up --build
```

O `-v` remove o volume do banco.

---

## 🌍 API disponível em:

```
http://localhost:3000
```

---

# 📦 Migrations

As migrations são responsáveis por versionar e criar a estrutura do banco de dados.

## Gerar uma migration

```bash
npm run migration:generate
```

## Rodar migrations manualmente (ambiente local)

```bash
npm run migration:run
```

No ambiente Docker, as migrations são executadas automaticamente na inicialização da aplicação.

---

# 🌱 Seed

O projeto possui um script de seed responsável por popular dados iniciais.

## Rodar manualmente (ambiente local)

```bash
npm run seed
```

No ambiente Docker, o seed é executado automaticamente após as migrations.

O seed é idempotente (não duplica dados).

---

# 🧪 Executando Localmente (Sem Docker)

## 1️⃣ Instalar dependências

```bash
npm install
```

---

## 2️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_NAME=autoflex
```

---

## 3️⃣ Rodar migrations

```bash
npm run migration:run
```

---

## 4️⃣ Rodar aplicação

```bash
npm run start:dev
```

---

# 📘 Documentação Swagger

Após iniciar o projeto, acesse:

```
http://localhost:3000/docs
```

---

# 🔗 Endpoints da API

---

## 📦 Products

| Método | Rota          | Descrição             |
| ------ | ------------- | --------------------- |
| POST   | /products     | Criar produto         |
| GET    | /products     | Listar produtos       |
| GET    | /products/:id | Buscar produto por ID |
| PATCH  | /products/:id | Atualizar produto     |
| DELETE | /products/:id | Remover produto       |

---

## 🧱 Raw Materials

| Método | Rota               | Descrição              |
| ------ | ------------------ | ---------------------- |
| POST   | /raw-materials     | Criar matéria-prima    |
| GET    | /raw-materials     | Listar matérias-primas |
| PATCH  | /raw-materials/:id | Atualizar estoque      |

---

## 🔗 Product Raw Materials

| Método | Rota                   | Descrição                        |
| ------ | ---------------------- | -------------------------------- |
| POST   | /product-raw-materials | Associar matéria-prima a produto |
| GET    | /product-raw-materials | Listar associações               |

---

## 🏭 Manufacturing Plan

| Método | Rota                | Descrição                                   |
| ------ | ------------------- | ------------------------------------------- |
| GET    | /manufacturing-plan | Consulta de fabricação possível por produto |

---

# 🏗️ Arquitetura

A API segue o padrão modular do NestJS:

- Separação por domínio
- Services responsáveis pela regra de negócio
- Controllers responsáveis apenas por entrada/saída
- Repositórios via TypeORM
- Migrations versionadas
- Seed inicial automatizado
- Testes unitários com dependências mockadas
- Docker multi-stage build para ambiente de produção

---

# 🔥 Melhorias Futuras

- Autenticação JWT
- Controle de permissões
- Testes E2E
- CI/CD Pipeline
- Deploy em ambiente cloud (AWS, Azure ou GCP)
- Kubernetes

---

## 👨‍💻 Autor

Projeto desenvolvido como desafio técnico aplicando boas práticas de engenharia de software, arquitetura limpa e containerização profissional.
