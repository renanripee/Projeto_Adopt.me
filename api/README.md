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
#### /login (POST)
*Descrição:* Verifica se o usuário e senha são iguais aos cadastrados. Retorna um token de acesso válido por 2 horas.

### Animal
#### /animais
*Requisitos de Autenticação:* Requer autenticação a partir do TOKEN gerado pelo Login

- **POST**
  *Descrição:* Cadastra o animal no banco de dados.
  *Observações:* Deve-se passar os dados do animal (`"animal"`) e o arquivo de imagem (`"imagem"`). Os dados passam por uma validação.

- **GET**
  *Descrição:* Listagem dos animais no banco de dados.

- **/id**
  *Descrição:* Lista o animal com o ID passado.

- **/disponiveis**
  *Descrição:* Lista os animais disponíveis para adoção.

- **PUT**
  *Descrição:* Altera o animal no banco de dados.
  *Observações:* Necessário passar o ID a partir do JSON. Os dados passam por uma validação.

- **DELETE**
  *Descrição:* Deleta o animal no banco de dados.
  *Observações:* O ID do animal a ser deletado deve ser passado a partir da URL ("/id").

### Tutor
#### /tutores
*Requisitos de Autenticação:* Requer autenticação a partir do TOKEN gerado pelo Login

- **POST**
  *Descrição:* Cadastra o tutor no banco de dados.
  *Observações:* Os dados passam por uma validação.

- **GET**
  *Descrição:* Listagem dos tutores no banco de dados.

- **/id**
  *Descrição:* Lista o tutor com o ID passado.

- **PUT**
  *Descrição:* Altera o tutor no banco de dados.
  *Observações:* Necessário passar o ID a partir do JSON. Os dados passam por uma validação.

- **DELETE**
  *Descrição:* Deleta o tutor no banco de dados.
  *Observações:* O ID do tutor a ser deletado deve ser passado a partir da URL ("/id").

### Adoção
#### /adocoes
*Requisitos de Autenticação:* Requer autenticação a partir do TOKEN gerado pelo Login

- **POST**
  *Descrição:* Cadastra uma adoção no banco de dados.
  *Observações:* Os dados passam por uma validação.

- **GET**
  *Descrição:* Listagem das adoções no banco de dados.

- **/id**
  *Descrição:* Lista a adoção com o ID passado.

- **PUT**
  *Descrição:* Altera a adoção no banco de dados.
  *Observações:* Necessário passar o ID a partir do JSON. Os dados passam por uma validação.

- **DELETE**
  *Descrição:* Deleta a adoção no banco de dados.
  *Observações:* O ID da adoção a ser deletada deve ser passado a partir da URL ("/id").
