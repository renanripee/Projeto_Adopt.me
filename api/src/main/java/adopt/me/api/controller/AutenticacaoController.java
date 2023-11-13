package adopt.me.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import adopt.me.api.domain.usuario.DadosAutenticacao;
import adopt.me.api.domain.usuario.Usuario;
import adopt.me.api.infra.security.DadosTokenJWT;
import adopt.me.api.infra.security.TokenService;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {
    
    @Autowired
    private AuthenticationManager manager;
    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity<Object> efetuarLogin(@RequestBody @Valid DadosAutenticacao dados){
        
        var authenticationToken = new UsernamePasswordAuthenticationToken(dados.usuario(), dados.senha());
        System.out.println(authenticationToken);
        var authentication = manager.authenticate(authenticationToken);
        System.out.println("AIKALICA");
        var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());
        System.out.println(tokenJWT);

        return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
    }
}