package adopt.me.api.controller;

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
import org.springframework.web.bind.annotation.RestController;

import adopt.me.api.domain.tutor.DadosCadastroTutor;
import adopt.me.api.domain.tutor.DadosDetalhamentoTutor;
import adopt.me.api.domain.tutor.DadosEdicaoTutor;
import adopt.me.api.domain.tutor.Tutor;
import adopt.me.api.domain.tutor.TutorRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("tutores")
public class TutorController {
    
    // Mecanismo de injeção de dependências - O próprio Spring Boot instância o repository uma vez que já é uma estrutura que ele reconhece, já que extende da JPARepository

    @Autowired
    private TutorRepository repository;

    // @RequestBody é responsável por receber os dados .json enviados ao chamar o caminho "/tutores"
    @PostMapping
    @Transactional // necessário para qualquer escrita no banco de dados
    public ResponseEntity<Object> cadastrar(@RequestBody @Valid DadosCadastroTutor dados){
        // realiza o insert no banco de dados
        repository.save(new Tutor(dados));
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Tutor>> listar(){
        var tutores = repository.findAll();
        return ResponseEntity.ok(tutores);
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> detalhar(@PathVariable int id){
        var tutor = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoTutor(tutor));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<Object> editar(@RequestBody @Valid DadosEdicaoTutor dados){
        var tutor = repository.getReferenceById(dados.id());
        tutor.editarDados(dados);
        return ResponseEntity.ok(new DadosDetalhamentoTutor(tutor));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> excluir(@PathVariable int id) throws Exception{
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}