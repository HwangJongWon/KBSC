package kbsc.springbackend.service;


import kbsc.springbackend.dto.CrawlDto;
import lombok.RequiredArgsConstructor;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import javax.annotation.PostConstruct;

import java.io.IOException;
import java.nio.charset.Charset;
import java.sql.SQLException;

@Service
@RequiredArgsConstructor

public class FromTextService {


    private WebClient webClient;


    @PostConstruct
    public void initWebClient() {


        webClient = WebClient.builder()
                .baseUrl("http://localhost:5000")
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();
//        webClient = WebClient.create("http://localhost:5000");
    }


    public CrawlDto verification(String text) throws SQLException, IOException {


        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
        formData.add("text", text);
        System.out.println("text=" + text);
        return webClient.post()
                .uri("/fromtext")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .acceptCharset(Charset.forName("UTF-8"))
                .body(BodyInserters.fromValue(formData))
                .retrieve()
//                .bodyToMono(FromResource.class);
                .bodyToMono(CrawlDto.class)
                .block();

    }
}
//                .block();


//        return webClient.post()
//                .uri("/fromtext")
//                .contentType(MediaType.APPLICATION_JSON)
//                .accept(MediaType.APPLICATION_JSON)
//                .acceptCharset(Charset.forName("UTF-8"))
//                .body(BodyInserters.fromValue(formData))
//                .retrieve()
////                .bodyToMono(FromResource.class);
//                .bodyToMono(CrawlDto.class);
////                .block();

//



//        return webClient.post()
//                .uri("/fromtext")
////                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
//                .contentType(MediaType.APPLICATION_JSON)
//                .acceptCharset(Charset.forName("UTF-8"))
////                .body(BodyInserters.fromFormData(jsonString))
//                .body(BodyInserters.fromValue(formData))
//                .retrieve()
//                .bodyToMono(String.class)
////                .subscribe(ss -> log.info("result is {}", ss))
//                .block();

//    }
//}
