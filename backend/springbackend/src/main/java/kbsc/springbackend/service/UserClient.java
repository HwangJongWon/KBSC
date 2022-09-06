package kbsc.springbackend.service;


import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@Slf4j
@Component
public class UserClient {
    public Flux<User> get(long id){
        return WebClient.create("https://localhost:5000")
                .get()
                .uri("/streaming/{id}", id)
                .retrieve()
                .bodyToFlux(User.class);

    }
}
