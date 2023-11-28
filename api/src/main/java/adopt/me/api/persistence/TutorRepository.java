package adopt.me.api.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import adopt.me.api.model.Tutor;

public interface TutorRepository extends JpaRepository<Tutor, Integer>{
    
}
