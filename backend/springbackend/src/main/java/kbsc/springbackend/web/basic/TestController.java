package kbsc.springbackend.web.basic;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;


@Slf4j
@Controller
//@RequestMapping("/basic")
@RequiredArgsConstructor
public class TestController {


    @GetMapping("hello")
    public String hello(String name, Model model){
        //http://localhost:8080/hello?name=karim
        model.addAttribute("name", name);
        log.info("{} => {}", "name", name);
        //html 이름
        return "basic/hello";
    }
}
