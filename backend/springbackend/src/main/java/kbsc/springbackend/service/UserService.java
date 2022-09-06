package kbsc.springbackend.service;


import kbsc.springbackend.mapper.UserMapper;
import kbsc.springbackend.vo.UserVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService{ //DAO를 호출하는 Service 구현
    SimpleDateFormat format = new SimpleDateFormat( "yyyy-MM-dd HH:mm:sss");
    Date time = new Date();
    String localTime = format.format(time);

    //@Autowired //의존관계 자동 설정 (DAO 객체 주입)
    private final UserMapper userMapper;
    @Transactional //트랜잭션 보장이 된 메소드로 설정
    public void joinUser(UserVo userVo){

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userVo.setUserPw(passwordEncoder.encode(userVo.getUserPw()));
        userVo.setUserAuth("USER");
        userVo.setAppendDate(localTime);
        userVo.setAppendDate(localTime);
        //userMapper.insertUser(userVo);
    }

    @Override
    public UserVo loadUserByUsername(String userId) throws UsernameNotFoundException{
        //여기서 받은 유저 패스워드와 비교하여 로그인 인증

        UserVo userVo = userMapper.getUserAccount(userId);


        if(userVo == null){
            throw new UsernameNotFoundException("User not authorized.");
        }
        System.out.println("여긴 loadUserByUsername입니다");
        return userVo;

    }

}
