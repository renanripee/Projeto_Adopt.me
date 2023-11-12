create table animais(
    
    id int(11) not null auto_increment,
    nome varchar(100) not null,
    idade int(11) not null,
    tipo varchar(20) not null,
    raca varchar(20) not null,
    descricao varchar(300) null default null,
    foto varchar(30) not null,
    adotado  tinyint(4) not null default 0,

    primary key(id)

);