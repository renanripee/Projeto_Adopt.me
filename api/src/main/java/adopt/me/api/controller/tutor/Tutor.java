package adopt.me.api.controller.tutor;

import adopt.me.api.controller.endereco.Endereco;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

// @Getter - gera todos os getters
// @NoArgsConstructor - gera o construtor padrão sem argumentos exigido pela JPA
// @AllArgsConstructor - gera um construtor com todos os campos

@Table(name = "tutores")
@Entity(name = "Tutor")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Tutor {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private String telefone;
    private String cpf;
    
    @Embedded
    private Endereco endereco;

    public Tutor(DadosCadastroTutor dados){
        this.nome = dados.nome();
        this.telefone = dados.telefone();
        this.cpf = dados.cpf();
        this.endereco = new Endereco(dados.endereco());
    }

    public void editarDados(@Valid DadosEdicaoTutor dados) {
        if(dados.nome() != null){
            this.nome = dados.nome();
        }
        if(dados.telefone() != null){
            this.telefone = dados.telefone();
        }
        if(dados.cpf() != null){
            this.cpf = dados.cpf();
        }
        if(dados.endereco() != null){
            this.endereco.editarDados(dados.endereco());
        }

    }

}
