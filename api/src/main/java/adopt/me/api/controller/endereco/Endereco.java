package adopt.me.api.controller.endereco;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// Embeddable considera que os atributos parte da classe a qual Endereco foi Embedded, não sendo uma representação de uma nova tabela e servindo apenas para organização de código.

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Endereco {

    private String cep;
    private String rua;
    private String bairro;
    private String numero;
    
    public Endereco(DadosEndereco dados) {
        this.cep = dados.cep();
        this.rua = dados.rua();
        this.bairro = dados.bairro();
        this.numero = dados.numero();
    }

}
