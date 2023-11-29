package api.dto;

import java.time.LocalDate;

import api.model.Adocao;

public record DadosDetalhamentoAdocao(
    int id,
    LocalDate data,
    DadosDetalhamentoAnimal animal,
    DadosDetalhamentoTutor tutor
    ){

        public DadosDetalhamentoAdocao(Adocao adocao){
            this(adocao.getId(), adocao.getData(), new DadosDetalhamentoAnimal(adocao.getAnimal()), new DadosDetalhamentoTutor(adocao.getTutor()));
        }
}
