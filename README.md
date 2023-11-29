# Projeto_Adopt.me

<p align="center">
  <img src="https://github.com/renanripee/Projeto_Adopt.me/assets/102258510/36cff716-1294-45fb-9a4a-fbf4af8582ba" alt="Adopt Me" width="321" height="90">
</p>

<p align="center"> Projeto Final da disciplina de Engenharia de Software - Universidade Federal de Lavras </p>

## Tabela de Opções

- [Visão Geral](#visao-geral)
- [Tecnologias Utilizadas](#tecnologias)
- [Estrutura de Diretório](#estrutura-diretorio)
- [Regras e Padrões de uso do Git](#regras-padroes)
- [Regras e Boas Práticas de Codificação](#regras-codificacao)
- [Desenvolvedores](#desenvolvedores)

## Visão Geral

<a name="visao-geral"></a>

Adopt.me é um sistema local desenvolvido para controlar a adoção de animais. 
As principais funcionalidades são:

<ul>
  <li>Listagem de animais</li>
  <li>Controle sobre as informações dos animais (adicionar, excluir, alterar)</li>
  <li>Listagem de tutores</li>
  <li>Controle sobre as informações dos tutores (adicionar, excluir, alterar)</li>
  <li>Listagem de adoções</li>
  <li>Controle sobre as informações das adoções (adicionar, excluir, alterar)</li>
  <li>Login do Administrador</li>
</ul>

### Tipos de Usuários

O sistema prevê o <b>Administrador</b> como único usuário.


## Tecnologias Utilizadas

<a name="tecnologias"></a>

### Front-end
- React - v18.2.0

### Back-end
- Spring Boot - v3.1.5

### Banco de Dados
- MySQL - v8.0.32

### Servidor
- Definir

## Estrutura de Diretório

<a name="estrutura-diretorio"></a>

```sh
Projeto_Adopt.me/
|-- Documentação/
|   |-- Diagramas/
|   |-- Requisitos/
|-- Padrões Adotados/
|-- Implementação/
|   |-- api/
|   |   |-- inserir
|   |-- web/
|   |   |-- inserir
|-- README.md
```
## Regras e Padrões de uso do Git

<a name="regras-padroes"></a>

### Commits

- Descrever de maneira clara e concisa o propósito do commit.
- Usar gerúndio para definir a mensagem do commit (Ex.: "Adicionando funcionalidade X").
- Manter os commits atômicos, abordando apenas uma alteração lógica por vez.
- Manter os commits devidamente mapeados com as issues cadastradas no backlog.

### Branches

- Utilizar as branches "back" e "front" para códigos de back-end e front-end, respectivamente.
- Realizar merge das branches anteriormente citadas com a branch main somente após a fase de testes e garantia de corretude das funcionalidades criadas.
- Criar branches específicas para correções críticas.
- Utilizar apenas letras minúsculas para nomear branches.

### Organização
- Manter uma estrutura clara de diretório, separando a documentação do código.

### Arquivos ignorados
- Inserir no arquivo .gitignore a extensão dos arquivos que são gerados durante o processo de compilação ou log (Ex.: .class, .jar, .log).
- Inserir no arquivo .gitignore pastas e extensões de arquivos relacionados a dependências externas. (Ex.:/.mvn/, /target/).
- Inserir no arquivo .gitignore a extensão dos arquivos de configuração que são específicos para o ambiente de desenvolvimento local. (Ex.: .env).

## Regras e Boas Práticas de Codificação

<a name="regras-codificacao"></a>

- Identar o código corretamente, definindo de forma clara o escopo das classes, métodos, estruturas condicionais, estruturas de repetição, entre outros.
- Nomear classes, métodos e variáveis de maneira intuitiva.
- Utilizar a convenção de nomenclatura Camel Case em classes, métodos e variáveis.
- Uma classe não deve ser forçada a implementar interfaces que ela não utiliza. Em vez de ter interfaces monolíticas, é melhor ter interfaces mais específicas que são implementadas apenas por classes que precisam da funcionalidade específica.
- Cada função, classe ou módulo deve ter uma responsabilidade única e fazer uma coisa bem. Isso facilita a compreensão do propósito de cada parte do código.
- Se necessário, usar comentários para explicar por que o código está fazendo algo específico. No entanto, a meta é escrever código que seja autoexplicativo, minimizando a necessidade de comentários.
- Evitar repetição de código. A duplicação pode levar a erros e tornar o código mais difícil de manter.
- Organizar o código de uma maneira lógica, com funções relacionadas agrupadas e conceitos relacionados próximos uns dos outros.
- Nos diretórios "api" e "web" nomear os arquivos iniciando com letra maiúscula e as pastas com letra minúscula, exceto aqueles que possuam formatação padrão especificada.

## Desenvolvedores

<a name="desenvolvedores"></a>

`João Pedro Ramalho de Sousa` <br>
`Matheus Bertoldo` <br>
`Renan Ribeiro Pereira`
