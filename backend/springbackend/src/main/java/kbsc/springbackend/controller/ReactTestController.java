package kbsc.springbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
public class ReactTestController {

    @GetMapping("/test")
    public String time(){
        return "안녕하세요. 현재 서버의 시간은 "+new Date() +" 입니다!";
    }


}
