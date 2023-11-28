package api.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import api.model.Tutor;

public interface TutorRepository extends JpaRepository<Tutor, Integer>{
    
}
