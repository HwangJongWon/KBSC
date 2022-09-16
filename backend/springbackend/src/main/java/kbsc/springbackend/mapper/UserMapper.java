package kbsc.springbackend.mapper;

import kbsc.springbackend.vo.UserVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper { //유저 정보를 DB에 저장하기 위한 Mapper 인터페이스
    //로그인
    UserVo getUserAccount(String userId);


    //회원가입
//    void saveUser(UserVo userVo);


    List<UserVo> userList();
    //UserVo fetchUserByID(String userId);
    //void updateUser(UserVo user);
    void insertUser(UserVo user);

    //void deleteUser(int userId);
}
