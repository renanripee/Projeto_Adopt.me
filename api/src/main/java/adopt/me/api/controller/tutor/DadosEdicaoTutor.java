package adopt.me.api.controller.tutor;

import adopt.me.api.controller.endereco.DadosEndereco;
import jakarta.validation.constraints.NotNull;

public record DadosEdicaoTutor(
    // obrigatório para fazer a pesquisa
    @NotNull
    int id,    
    String nome,
    String telefone, 
    String cpf,
    DadosEndereco endereco) {
}
