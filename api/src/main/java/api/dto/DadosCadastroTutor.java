package api.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record DadosCadastroTutor(
    
    @NotBlank
    String nome, 
    
    @NotBlank
    @Pattern(regexp = "\\(\\d{2}\\)\\d{5}-\\d{4}")
    String telefone, 
    
    @NotBlank
    @Pattern(regexp = "\\d{11}")
    String cpf, 
    
    @NotNull @Valid DadosEndereco endereco) { 
    
}
