package kbsc.springbackend.controller;

import kbsc.springbackend.configuration.JwtTokenProvider;
import kbsc.springbackend.configuration.UserAuthentication;

import kbsc.springbackend.model.Token;
import kbsc.springbackend.service.UserService;
import kbsc.springbackend.vo.UserVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@RequestMapping
public class AuthRestController {
    static final String URL_PREFIX =  "/auth";
    static final String LOGIN = "/login";

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

//    @RequestMapping(
//            value = LOGIN,
//            method = RequestMethod.POST,
//            produces = MediaType.APPLICATION_JSON_VALUE
//    )
    @PostMapping("/auth")
    public ResponseEntity<?> login(@RequestBody Token.Request request) throws Exception {

        UserVo user = userService.loadUserByUsername(request.getUserId());
//        String user = "jent50";
        System.out.println("여기까지 오나요?");
//        if(!request.getSecret().equals(user.getPassword())){
//            throw new IllegalArgumentException("비밀번호를 확인하세요.");
//        }

        Authentication authentication = new UserAuthentication(request.getUserId(), null, null);
        String token = JwtTokenProvider.generateToken(authentication);

        Token.Response response = Token.Response.builder().token(token).build();

        return ResponseEntity.ok(response);
    }

}