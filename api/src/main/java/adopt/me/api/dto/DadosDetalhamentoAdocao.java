package adopt.me.api.dto;

import java.time.LocalDateTime;

import adopt.me.api.model.Adocao;

public record DadosDetalhamentoAdocao(
    int id,
    LocalDateTime data,
    DadosDetalhamentoAnimal animal,
    DadosDetalhamentoTutor tutor
    ){

        public DadosDetalhamentoAdocao(Adocao adocao){
            this(adocao.getId(), adocao.getData(), new DadosDetalhamentoAnimal(adocao.getAnimal()), new DadosDetalhamentoTutor(adocao.getTutor()));
        }
}
