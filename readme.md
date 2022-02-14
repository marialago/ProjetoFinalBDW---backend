## Backend do projeto da disciplina de banco de dados para WEB

Neste projeto desenvolvemos um ecommerce a fim de aplicarmos o que aprendemos durante o semestre sobre manipulação e criação de banco de dados.

## Tecnologias
    - TypeScript https://www.typescriptlang.org/
    - Nodejs https://nodejs.org/en/
    - Prisma https://prisma.io/
    - PostgreSQL https://postgresql.org/

### Rodando...
 - Para a criação de tabelas no banco de dados atraves do prisma: 
    -  yarn  add typescript ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt -D
   
    - yarn add prisma -D
    
    - yarn  add express bcrypt jsonwebtoken @prisma/client

    - yarn install -g typescript
    
    - yarn tsc --init
    
    - digite no terminal o seguinte comando para iniciar a criação de tabelas:  yarn prisma migrate dev
        - caso esse comando não rode, digitar o yarn prisma generate, esse comando irá fazer a formatação e criar as tabelas no prisma a partir da pasta de migrations
 
 - Para rodar o projeto digite no terminal: yarn dev
