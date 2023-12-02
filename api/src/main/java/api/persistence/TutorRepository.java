package api.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import api.model.tutor.Tutor;

public interface TutorRepository extends JpaRepository<Tutor, Integer> {
    Tutor findByCpf(String cpf);
}
