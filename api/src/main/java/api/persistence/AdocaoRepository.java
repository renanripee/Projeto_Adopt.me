package api.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import api.model.Adocao;

public interface AdocaoRepository extends JpaRepository<Adocao, Integer>{
    
}
