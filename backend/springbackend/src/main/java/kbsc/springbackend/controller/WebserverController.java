package kbsc.springbackend.controller;


import kbsc.springbackend.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.sql.SQLException;

@Slf4j
@RestController
public class WebserverController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/student/{studentId}")
    public String postStudentVerification(@PathVariable String studentId) throws SQLException{
        return studentService.verification(studentId);
    }
}
