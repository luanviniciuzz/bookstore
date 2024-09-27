# Projeto: Livraria Online

Explicação de como foi projetado:

FRONTEND ( REACT + REDUX) ----> GET /api/products ----> BACKEND ( API REST - DJANGO + POSTGRESQL)

ROTAS:
- GET: /api/products
- POST: /api/products/create
- PUT: /api/products/update
- DELETE: /api/products/delete

##### O projeto possui:
- Catalogo de Livros  com descrição e preço.
- Carrinho de compras.
- Confirmação do pagamento
- Histórico de compra de livros

### Passo a passo para iniciar o projeto

### API Django REST com PostgreSQL

Este projeto é uma API construída com Django REST Framework e utiliza o PostgreSQL como banco de dados. Siga o guia abaixo para inicializar a API.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Python 3.8+
- Pip
- PostgreSQL
- Virtualenv

## Instalação

1. **Clone o repositório**

    ```bash
    git clone https://github.com/luanviniciuzz/bookstore.git
    cd bookstore/backend
    ```

2. **Crie um ambiente virtual**

    ```bash
    virtualenv venv
    ```

3. **Ative o ambiente virtual**

    No Windows:
    ```bash
    venv\Scripts\activate
    ```

    No macOS/Linux:
    ```bash
    source venv/bin/activate
    ```

4. **Instale as dependências**

    ```bash
    pip install -r requirements.txt
    ```

    Certifique-se de que `requirements.txt` contém as bibliotecas necessárias, como `Django`, `djangorestframework` e `psycopg2`.

5. **Configure o Banco de Dados**

    No arquivo `settings.py`, localize a configuração do banco de dados e substitua pelos detalhes do seu banco de dados:

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'nome_do_banco',
            'USER': 'nome_do_usuario',
            'PASSWORD': 'sua_senha',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }
    ```

6. **Realize as migrações**

    ```bash
    python manage.py migrate
    ```

7. **Crie um superusuário (opcional)**

    ```bash
    python manage.py createsuperuser
    ```

    Siga as instruções para criar um usuário administrador.

8. **Inicie o servidor**

    ```bash
    python manage.py runserver
    ```

    Sua API estará disponível em `http://127.0.0.1:8000/`.
#### Logando como ADM
Apos restaurar o banco de dados acesse:

`http://127.0.0.1:8000/admin`

usuario: luan
email: luan@email.com
senha: 123


### Projeto React.js

Este projeto é uma aplicação frontend construída com React.js. Siga o guia abaixo para inicializar o projeto.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js
- npm ou yarn

## Instalação

1. **Clone o repositório**

    ```bash
    git clone https://github.com/luanviniciuzz/bookstore.git
    cd bookstore/frontend
    ```

2. **Instale as dependências**

    Com npm:
    ```bash
    npm install
    ```

    Ou com yarn:
    ```bash
    yarn install
    ```

3. **Inicie o servidor de desenvolvimento**

    Com npm:
    ```bash
    npm run dev
    ```

    Ou com yarn:
    ```bash
    yarn start
    ```

    A aplicação estará disponível em `http://localhost:5173/`.



