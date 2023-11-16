package adopt.me.api.domain.tutor;

import adopt.me.api.domain.endereco.Endereco;

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
