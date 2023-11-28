package adopt.me.api.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotNull;

public record DadosEdicaoAdocao(
    @NotNull
    int id,
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm")
    LocalDateTime data){
}
