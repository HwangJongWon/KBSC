package kbsc.springbackend.controller;


import kbsc.springbackend.mapper.UserMapper;
import kbsc.springbackend.service.UserService;
import kbsc.springbackend.vo.UserVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600) // CORS해결하기위한 Annotation
//@RestController
@Controller
@RequiredArgsConstructor //생성자 자동생성
//@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    UserMapper userMapper;


    @PostMapping("/users") // 회원가입
    public String signUp(@RequestBody UserVo userVo){
        userService.joinUser(userVo);
        userMapper.insertUser(userVo);
        System.out.println("회원가입 성공");
        return "redirect:/login";
    }

    @GetMapping("/user_access")
    public String userAccess(Model model, Authentication authentication){
        //Authentication 객체를 통해 유저 정보를 가져올 수 있다.
        UserVo userVo = (UserVo) authentication.getPrincipal(); //userDetail객체를 가져옴
        model.addAttribute("info", userVo.getUserId() + "의"+ userVo.getUsername()+ "님");
        return "user_access";
    }
}
