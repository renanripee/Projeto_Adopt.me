package api.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;

@RestController
@RequestMapping("/imagens")
public class ImagemController {

    @Value("${upload.path}")
    private String caminho;

    @GetMapping("/{nomeDaImagem}")
    public ResponseEntity<byte[]> getImage(@PathVariable String nomeDaImagem) throws IOException {

        Resource resource = new ClassPathResource("static/imagens/" + nomeDaImagem);
        System.out.println(caminho + "/" + nomeDaImagem);

        byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(imageBytes);
    }
}
