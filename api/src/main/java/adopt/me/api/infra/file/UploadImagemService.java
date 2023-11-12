package adopt.me.api.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadImagemService {

    @Value("${upload.path}")
    private String caminho; // Configurado no application.properties

    public String salvarImagem(MultipartFile imagem) throws Exception {

        try {
            String nomeAntigoArquivo = StringUtils.cleanPath(imagem.getOriginalFilename());
            nomeAntigoArquivo = nomeAntigoArquivo.replaceAll("[^a-zA-Z0-9\\.\\-]", "_");
            String nomeNovoArquivo = System.currentTimeMillis() + "_" + nomeAntigoArquivo;

            Path destinoArquivo = Paths.get(caminho).resolve(Paths.get("imagens")).resolve(nomeNovoArquivo)
                    .normalize().toAbsolutePath();

            if (!Files.exists(destinoArquivo.getParent())) {
                Files.createDirectories(destinoArquivo.getParent());
            }

            try (InputStream inputStream = imagem.getInputStream()) {
                Files.copy(inputStream, destinoArquivo, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                throw new Exception("Erro ao armazenar arquivo.", e);
            }

            return nomeNovoArquivo;

        } catch (Exception e) {
            throw new Exception("Erro ao salvar a imagem.", e);
        }
    }

    public void excluirImagem(String nomeFoto) throws IOException {
        Path caminhoArquivo = Paths.get(caminho).resolve(Paths.get("imagens")).resolve(nomeFoto).normalize();
        Files.deleteIfExists(caminhoArquivo);
    }
}
