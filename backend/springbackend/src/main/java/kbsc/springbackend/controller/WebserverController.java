package kbsc.springbackend.controller;


import kbsc.springbackend.dto.CrawlDto;
import kbsc.springbackend.dto.FromTextRequestDto;
import kbsc.springbackend.service.FromTextService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;

//@CrossOrigin(origins = "*", maxAge = 3600) // CORS해결하기위한 Annotation
@Slf4j
@RestController
@RequiredArgsConstructor
public class WebserverController {

    private final FromTextService fromTextService;
    @PostMapping("/fromtext")
    public CrawlDto FromText(@RequestBody FromTextRequestDto fromTextRequestDto) throws SQLException, IOException {
        String text = fromTextRequestDto.getText();
        System.out.println(text);

        CrawlDto crawlDto = fromTextService.verification(text);
        System.out.println("verification="+crawlDto.getList());
        return crawlDto;
    }
}
