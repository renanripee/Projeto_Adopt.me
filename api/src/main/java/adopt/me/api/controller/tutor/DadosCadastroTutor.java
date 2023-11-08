package adopt.me.api.controller.tutor;

import adopt.me.api.controller.endereco.DadosEndereco;

public record DadosCadastroTutor(String nome, String telefone, String cpf, String cep, String rua, String bairro, String numero, DadosEndereco endereco) {
    
}
