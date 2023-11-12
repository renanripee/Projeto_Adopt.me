# Informações sobre a API Rest

## Tabela de Opções

- [Descrição](#descricao)
- [Configurações do Projeto](#configuracoes)
- [Guias](#guias)
- [Referências](#referencias)
- [Endpoints](#endpoints)

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

Método HTTP: GET, POST, PUT, DELETE, etc.

Endpoint: O URL para acessar o endpoint.

Descrição: Uma breve descrição do que o endpoint faz.

Requisitos de Autenticação: Se o endpoint requer autenticação, inclua detalhes sobre como autenticar as solicitações.

Parâmetros: Lista de parâmetros de consulta ou corpo, se aplicável.

Exemplo de Solicitação: Forneça um exemplo de como fazer uma solicitação para o endpoint.

Exemplo de Resposta: Mostre um exemplo de resposta do endpoint.
