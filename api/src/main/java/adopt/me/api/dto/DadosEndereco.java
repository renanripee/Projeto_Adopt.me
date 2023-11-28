package adopt.me.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record DadosEndereco(
    
    @NotBlank
    @Pattern(regexp = "\\d{8}")
    String cep,
    
    @NotBlank
    String rua,
    
    @NotBlank
    String bairro,
    
    @NotBlank
    String numero){
}
