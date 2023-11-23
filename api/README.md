# Informações sobre a API Rest

## Tabela de Opções

- [Descrição](#descricao)
- [Configurações do Projeto](#configuracoes)
- [Guias](#guias)
- [Referências](#referencias)
- [Endpoints](#endpoints)
    - [Login](#login)
    - [Animal](#animal)
    - [Tutor](#tutor)
    - [Adoção](#adocao)

## Descrição

<a name="descricao"></a>

A API Rest do projeto Adopt.me é responsável pelo processo de login do administrador e armazenar de forma segura e otimizada os dados de animais, tutores e adoções.

## Configurações do Projeto

<a name="configuracoes"></a>

Projeto Criado com: [Spring Initializr](start.spring.io)

Projeto: Maven
Spring Boot: 3.1.5
Packaging: JAR
Java: 17

Dependências:
- Spring Boot DevTools
- Spring Web
- Spring Data JPA
- Lombok
- Flyway Migration
- MySQL Driver
- Validation (Consulte a documentação [aqui](https://jakarta.ee/specifications/bean-validation/3.0/jakarta-bean-validation-spec-3.0.html#builtinconstraints) para detalhes sobre as restrições incorporadas)

## Referências de Documentação
<a name="referencias"></a>

Para referências, considere as seguintes secções:

* [Documentação Oficial do Apache Maven](https://maven.apache.org/guides/index.html)
* [Guia de Referência para Spring Boot Maven Plugin](https://docs.spring.io/spring-boot/docs/3.1.5/maven-plugin/reference/html/)
* [Criar uma imagem OCI](https://docs.spring.io/spring-boot/docs/3.1.5/maven-plugin/reference/html/#build-image)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/3.1.5/reference/htmlsingle/index.html#using.devtools)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.1.5/reference/htmlsingle/index.html#web)

## Guias
<a name="guias"></a>

Os guias a seguir ilustram como usar alguns recursos:

* [Construindo uma RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Hospedando um conteúdo Web com Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Construindo REST services com Spring](https://spring.io/guides/tutorials/rest/)

## Endpoints
<a name="endpoints"></a>

### Login
<a name="login"></a>
    O usuário e senha criptografada do administrador já são previamente adicionadas ao banco de dados.

    POST
    Descrição: Verifica se usuario e senha são iguais a cadastrada.
    Observações: É retornada um token de acesso que dura 2 horas. Após isso, é necessário relogar.

### Animal

<a name="animal"></a>

Entidade: Animal

Endpoint: /animais
Requisitos de Autenticação: Requer autenticação a partir do TOKEN gerado pelo Login

POST
Descrição: Cadastra o animal no banco de dados. 
Observações: Deve-se passar os dados do animal ("animal") e o arquivo de imagem ("imagem").
Os dados passam por uma validação.

GET
Descrição: Listagem dos animais no banco de dados.

/id
Lista o animal com id passado

/disponiveis
Lista os animais disponíveis para adoção

PUT
Descrição: Altera o animal no banco de dados.
Observações: Necessário passar o id a partir do JSON. Os dados passam por uma validação.

DELETE
Descrição: Deleta o animal no banco de dados.
Observações: O id do animal a ser deletado deve ser passado a partir da URL ("/id").


### Tutor
<a name="tutor"></a>

Entidade: Tutor

Endpoint: /tutores
Requisitos de Autenticação: Requer autenticação a partir do TOKEN gerado pelo Login

POST
Descrição: Cadastra o tutor no banco de dados. 
Observações: Os dados passam por uma validação.

GET
Descrição: Listagem dos tutores no banco de dados.

/id
Lista o tutor com id passado

PUT
Descrição: Altera o tutor no banco de dados.
Observações: Necessário passar o id a partir do JSON. Os dados passam por uma validação.

DELETE
Descrição: Deleta o tutor no banco de dados.
Observações: O id do tutor a ser deletado deve ser passado a partir da URL ("/id").



### Adoção
<a name="adocao"></a>
Entidade: Adoção

Endpoint: /adocoes
Requisitos de Autenticação: Requer autenticação a partir do TOKEN gerado pelo Login

POST
Descrição: Cadastra uma adoção no banco de dados. 
Observações: Os dados passam por uma validação.

/id
Lista a adoção com id passado

GET
Descrição: Listagem das adoções no banco de dados.

PUT
Descrição: Altera a adoção no banco de dados.
Observações: Necessário passar o id a partir do JSON. Os dados passam por uma validação.

DELETE
Descrição: Deleta a adoção no banco de dados.
Observações: O id da adoção a ser deletado deve ser passado a partir da URL ("/id").

