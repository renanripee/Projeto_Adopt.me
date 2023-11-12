package adopt.me.api.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import adopt.me.api.domain.animal.Animal;
import adopt.me.api.domain.animal.AnimalRepository;
import adopt.me.api.domain.animal.DadosCadastroAnimal;
import adopt.me.api.domain.animal.DadosEdicaoAnimal;
import adopt.me.api.service.UploadImagemService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

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

    @GetMapping
    public List<Animal> listar(){
        return repository.findAll();
    }

    @PutMapping
    @Transactional
    public void editar(@RequestBody @Valid DadosEdicaoAnimal dados){
        var animal = repository.getReferenceById(dados.id());
        animal.editarDados(dados);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable int id) throws IOException{
        var animal = repository.getReferenceById(id);
        service.excluirImagem(animal.getFoto());
        repository.deleteById(id);
    }

}
