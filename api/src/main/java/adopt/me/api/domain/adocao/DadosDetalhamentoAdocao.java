package adopt.me.api.domain.adocao;

import java.time.LocalDateTime;

import adopt.me.api.domain.animal.DadosDetalhamentoAnimal;
import adopt.me.api.domain.tutor.DadosDetalhamentoTutor;

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
