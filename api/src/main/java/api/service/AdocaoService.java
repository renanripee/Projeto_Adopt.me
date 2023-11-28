package api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import api.dto.DadosCadastroAdocao;
import api.model.Adocao;
import api.persistence.AdocaoRepository;
import api.persistence.AnimalRepository;
import api.persistence.TutorRepository;
import jakarta.validation.ValidationException;

@Service
public class AdocaoService {

    @Autowired
    private AdocaoRepository adocaoRepository;
    @Autowired
    private TutorRepository tutorRepository;
    @Autowired
    private AnimalRepository animalRepository;

    public void adotar(DadosCadastroAdocao dados) {

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
        animal.setAdotado(true);

        var adocao = new Adocao(0, dados.data(), tutor, animal);

        adocaoRepository.save(adocao);
    }

    public void excluir(int id) throws Exception {

        if(!adocaoRepository.existsById(id)){
            throw new Exception("Não existe uma adoção com o id fornecido!");
        }

        var animal = animalRepository.findById(id).get();
        animal.setAdotado(false);
        adocaoRepository.deleteById(id);
    }

}
