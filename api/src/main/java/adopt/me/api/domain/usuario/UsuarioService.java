package adopt.me.api.domain.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {
    
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public void criarAdmin() {
        // Verifica se o usuário já existe
        var usuario = repository.findByUsuario("admin");
        if (usuario == null) {
            Usuario admin = new Usuario("admin", passwordEncoder.encode("#adoroanimais123"));
            repository.save(admin);
        }
    }
}
