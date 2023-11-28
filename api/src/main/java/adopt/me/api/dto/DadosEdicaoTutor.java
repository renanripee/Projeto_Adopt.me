package adopt.me.api.dto;

import jakarta.validation.constraints.NotNull;

public record DadosEdicaoTutor(
    @NotNull
    int id,    
    String nome,
    String telefone, 
    String cpf,
    DadosEndereco endereco) {
}
