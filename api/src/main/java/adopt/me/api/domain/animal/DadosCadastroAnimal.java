package adopt.me.api.domain.animal;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroAnimal(
    @NotBlank
    String nome,
    
    @NotNull
    int idade,
    
    @NotBlank
    String tipo,
    
    @NotBlank
    String raca,
    
    String descricao){
}
