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

import adopt.me.api.domain.adocao.AdocaoDeAnimais;
import adopt.me.api.domain.adocao.AdocaoRepository;
import adopt.me.api.domain.adocao.DadosCadastroAdocao;
import adopt.me.api.domain.adocao.DadosDetalhamentoAdocao;
import adopt.me.api.domain.adocao.DadosEdicaoAdocao;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoRepository repository;
    @Autowired
    private AdocaoDeAnimais service;

    @PostMapping
    @Transactional
    public ResponseEntity<Object> adotar(@RequestBody @Valid DadosCadastroAdocao dados) {
        service.adotar(dados);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<DadosCadastroAdocao>> listar() {
        var adocoes = repository.findAll().stream().map(DadosCadastroAdocao::new).toList();
        return ResponseEntity.ok(adocoes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> detalhar(@PathVariable int id) {
        var adocao = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoAdocao(adocao));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<Object> editar(@RequestBody @Valid DadosEdicaoAdocao dados) {
        var adocao = repository.getReferenceById(dados.id());
        adocao.editarDados(dados);
        return ResponseEntity.ok(new DadosCadastroAdocao(adocao));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Object> excluir(@PathVariable int id) throws Exception{
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

}
