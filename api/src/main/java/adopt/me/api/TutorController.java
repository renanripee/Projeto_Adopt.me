package adopt.me.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import adopt.me.api.controller.tutor.DadosCadastroTutor;
import adopt.me.api.controller.tutor.Tutor;
import adopt.me.api.controller.tutor.TutorRepository;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("tutores")
public class TutorController {
    
    // Mecanismo de injeção de dependências - O próprio Spring Boot instância o repository uma vez que já é uma estrutura que ele reconhece, já que extende da JPARepository

    @Autowired
    private TutorRepository repository;

    // @RequestBody é responsável por receber os dados .json enviados ao chamar o caminho "/tutores"
    @PostMapping
    @Transactional
    public void cadastrar(@RequestBody DadosCadastroTutor dados){
        // realiza o insert no banco de dados
        repository.save(new Tutor(dados));
    }


}