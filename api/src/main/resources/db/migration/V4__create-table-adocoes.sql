create table adocoes(
    
    id int(11) not null auto_increment,
    data datetime not null,
    id_tutor int(11) not null,
    id_animal int(11) not null,
    
    primary key(id),
    constraint fk_adocao_id_tutor foreign key(id_tutor) references tutores(id),
    constraint fk_adocao_id_animal foreign key(id_animal) references animais(id)

);