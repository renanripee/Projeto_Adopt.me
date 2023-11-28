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

import adopt.me.api.dto.DadosCadastroTutor;
import adopt.me.api.dto.DadosDetalhamentoTutor;
import adopt.me.api.dto.DadosEdicaoTutor;
import adopt.me.api.model.Tutor;
import adopt.me.api.persistence.TutorRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("tutores")
public class TutorController {
    
    @Autowired
    private TutorRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity<Object> cadastrar(@RequestBody @Valid DadosCadastroTutor dados){
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