package adopt.me.api.infra.file;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import adopt.me.api.domain.animal.Animal;
import adopt.me.api.domain.animal.AnimalRepository;
import adopt.me.api.domain.animal.DadosCadastroAnimal;

@Service
public class AnimalAndFileService {

    @Value("${upload.path}")
    private String caminho;
    @Autowired
    private AnimalRepository repository;

    private String atualizarNomeArquivo(String nome) {
        nome.replaceAll("[^a-zA-Z0-9\\.\\-]", "_");
        nome = System.currentTimeMillis() + "_" + nome;
        return nome;
    }

    private void armazenarImagem(MultipartFile imagem, String nomeArquivo) throws Exception {

        Path destinoArquivo = Paths.get(caminho).resolve(Paths.get("imagens")).resolve(nomeArquivo)
                .normalize().toAbsolutePath();

        if (!Files.exists(destinoArquivo.getParent())) {
            Files.createDirectories(destinoArquivo.getParent());
        }

        try {
            InputStream inputStream = imagem.getInputStream();
            Files.copy(inputStream, destinoArquivo, StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            System.out.println(e.getLocalizedMessage());
            throw new Exception("Não foi possível armazenar o arquivo");
        }
    }

    private void excluirImagem(String nomeFoto) throws IOException {
        Path caminhoArquivo = Paths.get(caminho).resolve(Paths.get("imagens")).resolve(nomeFoto).normalize();
        Files.deleteIfExists(caminhoArquivo);
    }

    public void cadastrar(DadosCadastroAnimal dados, MultipartFile imagem) throws Exception {

        try {

            String nomeArquivo = StringUtils.cleanPath(imagem.getOriginalFilename());
            nomeArquivo = atualizarNomeArquivo(nomeArquivo);

            Animal animal = new Animal(dados);
            animal.setFoto(nomeArquivo);
            repository.save(animal);

            armazenarImagem(imagem, nomeArquivo);

        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityViolationException(
                    "Não foi possível salvar a imagem.\nVariável muito longa para a coluna \"Foto\"");
        }
    }

    public void excluir(Animal animal) throws IOException {
        excluirImagem(animal.getFoto());
        repository.deleteById(animal.getId());
    }

}
