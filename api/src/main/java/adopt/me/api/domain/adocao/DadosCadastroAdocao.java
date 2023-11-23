package adopt.me.api.domain.adocao;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotNull;

public record DadosCadastroAdocao(
    int id,
    @NotNull
    int id_tutor,
    @NotNull
    int id_animal,
    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    LocalDateTime data){

        public DadosCadastroAdocao(Adocao adocao){
            this(adocao.getId(), adocao.getTutor().getId(), adocao.getAnimal().getId(), adocao.getData());
        }

}
