package adopt.me.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import adopt.me.api.controller.tutor.DadosCadastroTutor;
import adopt.me.api.controller.tutor.DadosEdicaoTutor;
import adopt.me.api.controller.tutor.Tutor;
import adopt.me.api.controller.tutor.TutorRepository;
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
    public void cadastrar(@RequestBody @Valid DadosCadastroTutor dados){
        // realiza o insert no banco de dados
        repository.save(new Tutor(dados));
    }

    @GetMapping
    public List<Tutor> listar(){
        return repository.findAll();
    }

    @PutMapping
    @Transactional
    public void editar(@RequestBody @Valid DadosEdicaoTutor dados){
        var tutor = repository.getReferenceById(dados.id());
        tutor.editarDados(dados);
    }

}