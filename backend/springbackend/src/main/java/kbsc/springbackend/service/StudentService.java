package kbsc.springbackend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import javax.annotation.PostConstruct;
import java.sql.SQLException;

@Slf4j
@Service
public class StudentService {
    private WebClient webClient;

    @PostConstruct
    public void initWebClient(){
        webClient = WebClient.create("http://localhost:5000");
    }

    public String verification(String studentId) throws SQLException {
        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("studentId", studentId);

        return webClient.post()
                .uri("/identification")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters.fromFormData(formData))
                .retrieve()
                .bodyToMono(String.class)
//                .subscribe(ss -> log.info("result is {}", ss))
                .block();

    }

}
