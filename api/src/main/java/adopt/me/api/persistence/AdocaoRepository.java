package adopt.me.api.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import adopt.me.api.model.Adocao;

public interface AdocaoRepository extends JpaRepository<Adocao, Integer>{
    
}
