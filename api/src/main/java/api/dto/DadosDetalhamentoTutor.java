package api.dto;

import api.model.Endereco;
import api.model.Tutor;

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
