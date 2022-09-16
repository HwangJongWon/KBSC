import axios from "axios";
import React, {Component} from "react";
import ApiService from "../ApiService";
// import qs from'query-string';

class Save{
    saveUser(userId,userName,userPw){
        console.log('안녕하세요 save');
    // const saveUser = (e,p,n) => {
        // e.preventDefault();
        // p.preventDefault();
        // n.preventDefault();
        let user = {
            userId, userName, userPw
        }
    
        ApiService.addUser(user)
        .then( res => {
            this.setState({
                message: user.n + "님이 성공적으로 등록되었습니다."
            })
            console.log(this.state.message);
            this.props.history.push('/');
        })
        .catch( err => {
            console.log('saveUser() 에러', err);
        });
    //      // ApiService.fromText(textRef.current.value)
    // const testtext = "testtesttest";
    // ApiService.fromText(testtext)
    };
    // from(text){
    //     ApiService.fromText(text)
    //     .then( res => {
    //         if(res.ok){
    //             alert('생성이 완료되었습니다.')
    //         }
    //         console.log(this.state.message);
    //         this.props.history.push('/');
    //     })
    //     .catch( err => {
    //         console.log('fromText() 에러', err);
    //     });
    // }

    loginUser(Id, Pw){
        console.log('안녕하세요 login22');
    // const saveUser = (e,p,n) => {
        // e.preventDefault();
        // p.preventDefault();
        // n.preventDefault();
        // let user = {
        //     Id, Pw
        // }
        
        // ApiService.loginUsers(user)
        // .then( res => {
        //     this.setState({
        //         message: user.n + "님이 성공적으로 로그인되었습니다."
        //     })
        //     console.log('안녕하세요 login2');
        //     console.log(this.state.message);
        //     this.props.history.push('/');
        // })
        // .catch( err => {
        //     console.log('loginUser() 에러', err);
        // });
    };
    PostForm = (Id, pw) => {
        const url = "/users/login_proc";
        const axiosConfig = {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        let form = new FormData();
        // const user ={
        //     userId: Id,
        //     userPw: pw
        // }
        const username = 'ccccc1088@naver.com';
        const password = 'mmmm';
        form.append("username", 'ccccc1088@naver.com');
        form.append("password", 'asdfadsf');
        axios.post(url, {username, password})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    
}
export default new Save();
