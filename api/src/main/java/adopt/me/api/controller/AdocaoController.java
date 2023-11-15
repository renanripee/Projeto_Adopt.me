package adopt.me.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import adopt.me.api.domain.adocao.AdocaoDeAnimais;
import adopt.me.api.domain.adocao.DadosCadastroAdocao;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoDeAnimais adocao;

    @PostMapping
    @Transactional
    public void adotar(@RequestBody @Valid DadosCadastroAdocao dados){
        adocao.adotar(dados);
    }

}
