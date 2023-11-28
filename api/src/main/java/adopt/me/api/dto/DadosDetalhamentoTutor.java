package adopt.me.api.dto;

import adopt.me.api.model.Endereco;
import adopt.me.api.model.Tutor;

public record DadosDetalhamentoTutor(
        
        int id,
        String nome,
        String telefone,
        String cpf,
        Endereco endereco) {

    public DadosDetalhamentoTutor(Tutor tutor) {
        this(tutor.getId(), tutor.getNome(), tutor.getTelefone(), tutor.getCpf(), tutor.getEndereco());
    }

}
