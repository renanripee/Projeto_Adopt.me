package adopt.me.api.domain.endereco;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

    public void editarDados(DadosEndereco dados) {
        if(dados.cep() != null){
            this.cep = dados.cep();
        }
        if(dados.rua() != null){
            this.rua = dados.rua();
        }
        if(dados.bairro() != null){
            this.bairro = dados.bairro();
        }
        if(dados.numero() != null){
            this.numero = dados.numero();
        }
    }

}
