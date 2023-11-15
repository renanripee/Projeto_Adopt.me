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

- React - v18.2.0
- Spring Boot - v3.1.5
- PostgreSQL - v16


## Estrutura de Diretório

<a name="estrutura-diretorio"></a>

```sh
.
|-- Documentação/
|   |-- Diagramas/
|   |-- Requisitos/
|-- Padrões Adotados/
|-- api/
|   |-- inserir
|-- web/
    |-- inserir
|-- README.md
|-- .gitignore
```
## Regras e Padrões de uso do Git

<a name="regras-padroes"></a>

- Descrever de maneira clara e concisa o propósito do commit.
- Usar gerúndio para definir a mensagem do commit (Ex.: "Adicionando funcionalidade X").
- Manter os commits atômicos, abordando apenas uma alteração lógica por vez.
- Manter os commits devidamente mapeados com as issues cadastradas no backlog.
- Utilizar as branches "back" e "front" para códigos de back-end e front-end, respectivamente.
- Realizar merge das branches anteriormente citadas com a branch main somente após a fase de testes e garantia de corretude das funcionalidades criadas.
- Criar branches específicas para correções críticas.
- Manter uma estrutura clara de diretório, separando a documentação do código.
- Inserir no arquivo .gitignore a extensão dos arquivos que são gerados durante o processo de compilação ou log (Ex.: .class, .jar, .log).
- Inserir no arquivo .gitignore pastas e extensões de arquivos relacionados a dependências externas. (Ex.:/.mvn/, /target/).
- Inserir no arquivo .gitignore a extensão dos arquivos de configuração que são específicos para o ambiente de desenvolvimento local. (Ex.: .env).
