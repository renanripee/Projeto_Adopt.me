package api.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import api.dto.DadosCadastroTutor;
import api.dto.DadosEdicaoTutor;
import api.dto.DadosEndereco;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
public class TutorControllerTest {
    
    @Autowired
    private MockMvc mvc;
    @Autowired
    private JacksonTester<DadosCadastroTutor> dadosCadatroTutor;
    @Autowired
    private JacksonTester<DadosEdicaoTutor> dadosEdicaoTutor;
        
    @Test
    @DisplayName("Cadastro normal sem erros.")
    @WithMockUser
    void testCadastrar() throws Exception {
        DadosEndereco endereco = new DadosEndereco("12123123", "Rua", "Bairro", "12A");
        DadosCadastroTutor dadosTutor = new DadosCadastroTutor("Danilo", "(35)98899-3212", "12334500014",
                        endereco);
        var response = mvc
            .perform(
                    post("/tutores")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(dadosCadatroTutor.write(dadosTutor).getJson())
                    )
                    .andReturn().getResponse();
            

        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
    
    }

    @Test
    void testEditar() throws Exception{
        DadosEdicaoTutor dadosTutor = new DadosEdicaoTutor(2, "Carlos", null, null, null);
        var response = mvc
            .perform(
                put("/tutores")
                .contentType(MediaType.APPLICATION_JSON)
                .content(dadosEdicaoTutor.write(dadosTutor).getJson())
            )
            .andReturn().getResponse();

            assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
    }

    @Test
    void testExcluir() throws Exception{
        var response = mvc 
            .perform(
                delete("/tutores/1")
            )
            .andReturn().getResponse();

            assertThat(response.getStatus()).isEqualTo(HttpStatus.NO_CONTENT.value());
    }
}
