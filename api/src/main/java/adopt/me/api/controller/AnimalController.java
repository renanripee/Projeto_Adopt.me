package adopt.me.api.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
import adopt.me.api.domain.animal.DadosDetalhamentoAnimal;
import adopt.me.api.domain.animal.DadosEdicaoAnimal;
import adopt.me.api.infra.file.AnimalAndFileService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("animais")
public class AnimalController {
    
    @Autowired
    private AnimalRepository repository;
    @Autowired
    private AnimalAndFileService service;

    @PostMapping
    @Transactional // necessário para qualquer escrita no banco de dados
    public ResponseEntity<Object> cadastrar(@RequestPart("animal") @Valid DadosCadastroAnimal dados, @RequestPart("imagem") MultipartFile imagem) throws Exception{   
        service.cadastrar(dados, imagem);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Animal>> listar(){
        var animais = repository.findAll();
        return ResponseEntity.ok().body(animais);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> detalhar(@PathVariable int id){
        var animal = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoAnimal(animal));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<Object> editar(@RequestBody @Valid DadosEdicaoAnimal dados){
        var animal = repository.getReferenceById(dados.id());
        animal.editarDados(dados);
        return ResponseEntity.ok(new DadosDetalhamentoAnimal(animal));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> excluir(@PathVariable int id) throws IOException{
        var animal = repository.getReferenceById(id);
        service.excluir(animal);
        return ResponseEntity.noContent().build();
    }

}
