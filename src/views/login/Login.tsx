import React, {useState} from 'react'
import './Login.css'
import ApiServices from '../../services/ApiServices'
import {mensagemErro} from '../../components/Toarst'
import FormGroup from '../../components/formGroup/FormGroup'

function Login(props){

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    function entrar(){
        ApiServices.autenticar({email, senha})
            .then(response => {
                localStorage.setItem('_usuario_logado', JSON.stringify(response.data))
                //contexto.iniciarSessao(response.data)
                props.history.push('/cadastro-usuario')
            })
            .catch(erro => {
                mensagemErro(erro.response.data)
            })
    }

    return(
        <div className="login">
            <div className="logo">
                <h1 className="title">Minhas Finanças</h1>
                <a className="nav-link" aria-current="page" href="/cadastro-usuario"> Criar conta</a>
            </div>

            <div className="form">
                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                    <input type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Digite o Email"/>
                </FormGroup>
                
                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                    <input type="password" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Password"/>
                </FormGroup>

                <button className="btn btn-success" onClick={entrar}>
                    Entrar
                </button>
            </div>
            
        </div>
    )
}

export default Login