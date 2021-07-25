import axios from 'axios'

const baseUrl = 'http://localhost:8080'

type loginType = {
    email: string,
    senha: string
}

export default class ApiServices{
    
    static salvarUsuario(obj:{}){
        return axios.post(`${baseUrl}/api/usuarios`, obj)
    }

    static autenticar(obj:loginType){
        return axios.post(`${baseUrl}/api/usuarios/autenticar`, obj);
    }
}