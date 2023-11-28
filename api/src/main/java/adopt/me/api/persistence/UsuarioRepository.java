package adopt.me.api.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import adopt.me.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
    UserDetails findByUsuario(String usuario);
}