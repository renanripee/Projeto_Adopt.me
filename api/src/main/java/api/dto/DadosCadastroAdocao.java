package api.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import api.model.Adocao;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroAdocao(
    int id,
    @NotNull
    int id_tutor,
    @NotNull
    int id_animal,
    @NotNull
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate data){

        public DadosCadastroAdocao(Adocao adocao){
            this(adocao.getId(), adocao.getTutor().getId(), adocao.getAnimal().getId(), adocao.getData());
        }

}
