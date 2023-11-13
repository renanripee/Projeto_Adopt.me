package adopt.me.api.domain.animal;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroAnimal(
    @NotBlank
    String nome,
    
    @NotBlank
    int idade,
    
    @NotBlank
    String tipo,
    
    @NotBlank
    String raca,
    
    String descricao){
}
