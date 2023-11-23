package adopt.me.api;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import adopt.me.api.domain.usuario.UsuarioService;

@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
    public CommandLineRunner init(UsuarioService service) {
        return args -> {
            service.criarAdmin();
        };
    }

}
