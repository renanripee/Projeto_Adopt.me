package adopt.me.api.controller.animal;

import jakarta.validation.constraints.NotNull;

public record DadosEdicaoAnimal(
    @NotNull
    int id,
    String nome,
    int idade,
    String tipo,
    String raca,
    String descricao){
}
