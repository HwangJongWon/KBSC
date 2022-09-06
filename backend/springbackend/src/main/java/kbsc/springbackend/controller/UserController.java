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

    /*
    localhost:8080 시 login 으로 redirect
    @return
     */
//    @GetMapping
//    public String root(){
//        return "redirect:/login";
//    }

//    @GetMapping("/{userId}") //로그인
//    @GetMapping("/users/signin")
//    public UserVo fetchUserByID(@PathVariable String userId){
//        System.out.println(userMapper.fetchUserByID(userId));
//        UserVo fetchUser = userMapper.fetchUserByID(userId);
//        return fetchUser;
//    }

    /*
    로그인폼
    @return
     */
//    @PostMapping("/users/login_proc")  //  로그인
//    public String login(@RequestBody UserVo userVo, Model model){
//        String userId = userVo.getUserId();
//        String userPw = userVo.getUserPw();
//        model.addAttribute("userId", userId);
//        model.addAttribute("userPw", userPw);
//        System.out.println("로그인성공");
//        return "login_proc";
//    }


    @PostMapping(value = "/users/login_proc")  //  로그인
    public String login(@RequestParam Map map){
        System.out.println(("map= " + map));
        return "login_proc";
    }



    @PostMapping("/users") // 회원가입
    public String signUp(@RequestBody UserVo userVo){
        userService.joinUser(userVo);
        userMapper.insertUser(userVo);
        System.out.println("회원가입 성공");
        return "redirect:/login";
    }

//  스프링 시큐리티 회원가입 , 로그인 기능
//    /*
//    로그인폼
//    @return
//     */
//    @GetMapping("/login")
//    public String login(){
//        return "login";
//    }
//
//    /**
//     * 회원가입 폼
//     * @return
//     */
//    @GetMapping("/signUp")
//    public String signUpForm(){
//
//        return "signup";
//    }
//    /*
//    로그인 실패폼
//    @return
//     */
//    @GetMapping("/access_denied")
//    public String accessDenied(){
//        return "access_denied";
//    }
//
//    /**
//     * 회원가입 진행
//     * @paramuser
//     * @return
//     */
//
//    @PostMapping("/signUp")
//    public String signUp(UserVo userVo){
//        userService.joinUser(userVo);
//        return "redirect:/login"; //로그인 구현예정
//    }
//
    /*
    유저페이지
    @param model
    @param authentication
    @return
     */
    @GetMapping("/user_access")
    public String userAccess(Model model, Authentication authentication){
        //Authentication 객체를 통해 유저 정보를 가져올 수 있다.
        UserVo userVo = (UserVo) authentication.getPrincipal(); //userDetail객체를 가져옴
        model.addAttribute("info", userVo.getUserId() + "의"+ userVo.getUsername()+ "님");
        return "user_access";
    }
}
