package adopt.me.api.domain.adocao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import adopt.me.api.domain.animal.AnimalRepository;
import adopt.me.api.domain.tutor.TutorRepository;
import jakarta.validation.ValidationException;

@Service
public class AdocaoDeAnimais {

    @Autowired
    private AdocaoRepository adocaoRepository;
    @Autowired
    private TutorRepository tutorRepository;
    @Autowired
    private AnimalRepository animalRepository;

    public void adotar(DadosCadastroAdocao dados) {

        // Verifica se no banco de dados existem tutores e animais com o id
        if (!tutorRepository.existsById(dados.id_tutor())) {
            throw new ValidationException("O id do Tutor não existe!");
        }
        if (!animalRepository.existsById(dados.id_animal())) {
            throw new ValidationException("O id do Animal não existe!");
        }

        var animal = animalRepository.findById(dados.id_animal()).get();
        if (animal.isAdotado()) {
            throw new ValidationException("O animal já foi adotado.");
        }

        var tutor = tutorRepository.findById(dados.id_tutor()).get();
        // atualizando booleano de adotado do animal
        animal.setAdotado(true);

        var adocao = new Adocao(0, dados.data(), tutor, animal);

        adocaoRepository.save(adocao);
        System.out.println(adocao);
    }

}
