package adopt.me.api.domain.animal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{
    List<Animal> findByAdotado(boolean adotado);
}