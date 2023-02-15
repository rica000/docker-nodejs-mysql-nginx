## Serviço Node.js com Nginx proxy e MySQL

Estrutura:
```
├── README.md
├── docker-compose.yml
├── nginx.conf
├── init.sql
└── src
    ├── package.json
    └── server.js

1 diretório, 6 arquivos
```
> ℹ️ **INFO**  
> A título de teste, o projeto não inclui nenhum `Dockerfile` estando o `docker-compose.yml` incumbido de executar todos os spripts.

## Testando

Navegar para `http://localhost:8080` com a qs `name`:

```
curl localhost:8080?name=Joao
["Joao"]
```

```
curl localhost:8080?name=Ricardo
["Joao", "Ricardo"]
```