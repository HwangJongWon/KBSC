import axios from 'axios';
import qs from 'query-string';
const USER_API_BASE_URL = "/users";

class ApiService{
    // register(username, email, password){
    //     return axios.post(USER_API_BASE_URL +"signup",{
    //         username, email, password
    //     });
    // }

    loginUsers(user){

        return axios.post(USER_API_BASE_URL+'/login_proc', qs.stringfy(user));
    }

    fetchUsers(){
    return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' +userId);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
}

export default new ApiService();
