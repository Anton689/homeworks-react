import axios from "axios";


export const RequestsAPI = {
    changeSuccess(success:boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: success})
    }
}