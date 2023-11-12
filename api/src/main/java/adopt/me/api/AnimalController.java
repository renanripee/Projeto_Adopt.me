package adopt.me.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import adopt.me.api.controller.animal.Animal;
import adopt.me.api.controller.animal.AnimalRepository;
import adopt.me.api.controller.animal.DadosCadastroAnimal;
import adopt.me.api.service.UploadImagemService;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("animais")
public class AnimalController {
    
    @Autowired
    private AnimalRepository repository;
    @Autowired
    private UploadImagemService service;

    @PostMapping
    @Transactional // necessário para qualquer escrita no banco de dados
    public void cadastrar(@RequestPart("animal") DadosCadastroAnimal dados, @RequestPart("imagem") MultipartFile imagem) throws Exception{   
        Animal animal = new Animal(dados);
        animal.setFoto(service.salvarImagem(imagem));
        repository.save(animal);
    }

}
