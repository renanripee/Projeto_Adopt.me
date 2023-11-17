package adopt.me.api.domain.tutor;

import adopt.me.api.domain.endereco.DadosEndereco;
import jakarta.validation.constraints.NotNull;

public record DadosEdicaoTutor(
    @NotNull
    int id,    
    String nome,
    String telefone, 
    String cpf,
    DadosEndereco endereco) {
}
