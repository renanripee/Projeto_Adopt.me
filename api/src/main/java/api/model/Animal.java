package api.model;

import api.dto.DadosCadastroAnimal;
import api.dto.DadosEdicaoAnimal;
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

@Table(name = "animais")
@Entity(name = "Animal")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Animal {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private int idade;
    private String tipo;
    private String raca;
    private String descricao;
    private String foto;
    private boolean adotado;
   
    public Animal(DadosCadastroAnimal dados) {
        this.nome = dados.nome();
        this.idade = dados.idade();
        this.tipo = dados.tipo();
        this.raca = dados.raca();
        this.descricao = dados.descricao();
        this.adotado = false;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setAdotado(boolean adotado) {
        this.adotado = adotado;
    }

    public void editarDados(@Valid DadosEdicaoAnimal dados) {
        
        this.idade = dados.idade();
        
        if(dados.nome() != null){
            this.nome = dados.nome();
        }
        if(dados.tipo() != null){
            this.tipo = dados.tipo();
        }
        if(dados.raca() != null){
            this.raca = dados.raca();
        }
        if(dados.descricao() != null){
            this.descricao = dados.descricao();
        }
    }

}
