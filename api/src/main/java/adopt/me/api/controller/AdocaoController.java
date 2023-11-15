package adopt.me.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import adopt.me.api.domain.adocao.AdocaoDeAnimais;
import adopt.me.api.domain.adocao.AdocaoRepository;
import adopt.me.api.domain.adocao.DadosCadastroAdocao;
import adopt.me.api.domain.adocao.DadosEdicaoAdocao;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoRepository repository;
    @Autowired
    private AdocaoDeAnimais adocao;

    @PostMapping
    @Transactional
    public void adotar(@RequestBody @Valid DadosCadastroAdocao dados) {
        adocao.adotar(dados);
    }

    @GetMapping
    public List<DadosCadastroAdocao> listar() {
        return repository.findAll().stream().map(DadosCadastroAdocao::new).toList();
    }

    @PutMapping
    @Transactional
    public void editar(@RequestBody @Valid DadosEdicaoAdocao dados) {
        var adocao = repository.getReferenceById(dados.id());
        adocao.editarDados(dados);
    }

}
