package adopt.me.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import adopt.me.api.persistence.UsuarioRepository;

@Service
public class AutenticationService implements UserDetailsService{

    @Autowired
    private UsuarioRepository repository;

    // Método chamado pelo Spring sempre que é realizado um login

    @Override
    public UserDetails loadUserByUsername(String usuario) throws UsernameNotFoundException {
        return repository.findByUsuario(usuario);
    }
    
}
