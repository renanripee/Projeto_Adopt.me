package api.controller;

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

import api.dto.DadosCadastroAdocao;
import api.dto.DadosDetalhamentoAdocao;
import api.dto.DadosEdicaoAdocao;
import api.persistence.AdocaoRepository;
import api.service.AdocaoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoRepository repository;
    @Autowired
    private AdocaoService service;

    @PostMapping
    @Transactional
    public ResponseEntity<Object> adotar(@RequestBody @Valid DadosCadastroAdocao dados) {
        service.adotar(dados);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<DadosDetalhamentoAdocao>> listar() {
        var adocoes = repository.findAll().stream().map(DadosDetalhamentoAdocao::new).toList();
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
    public ResponseEntity<Object> excluir(@PathVariable int id) throws Exception {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

}
