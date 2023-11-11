package adopt.me.api.controller.animal;

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
