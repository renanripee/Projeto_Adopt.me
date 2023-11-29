create table tutores(
    
    id int(11) not null auto_increment,
    nome varchar(100) not null,
    telefone char(14) not null,
    cpf char(11) not null unique,
    cep char(8) not null,
    rua varchar(50) not null,
    bairro varchar(30) not null,
    numero  varchar(5) not null,

    primary key(id)

);