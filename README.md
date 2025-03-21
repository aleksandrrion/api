# API de Consulta de CPF

API simples para consultar CPF através de uma API externa.

## Instalação

```bash
# Instalar dependências
npm install
```

## Execução Local

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Modo produção
npm start
```

O servidor será iniciado na porta 3000 (ou na porta definida na variável de ambiente PORT).

## Endpoints

### Consulta CPF

```
GET /consulta/:cpf
```

## Deploy no Railway

1. Crie uma conta no [Railway](https://railway.app/)
2. Conecte seu repositório GitHub
3. Selecione este repositório para deploy
4. O Railway detectará automaticamente que é um app Node.js
5. Não é necessário configuração adicional, o Railway usará o script "start" do package.json
