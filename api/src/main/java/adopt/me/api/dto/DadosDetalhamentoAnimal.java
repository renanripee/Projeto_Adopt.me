package adopt.me.api.dto;

import adopt.me.api.model.Animal;

public record DadosDetalhamentoAnimal(
        
        int id,
        String nome,
        int idade,
        String tipo,
        String raca,
        String descricao) {

        public DadosDetalhamentoAnimal(Animal animal) {
                this(animal.getId(), animal.getNome(), animal.getIdade(), animal.getTipo(), animal.getRaca(), animal.getDescricao());
        }

}
