package api.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotNull;

public record DadosEdicaoAdocao(
    @NotNull
    int id,
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate data){
}
