package api.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import api.model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{
    List<Animal> findByAdotado(boolean adotado);
}