import React, {useState} from 'react'
import Card from "../../components/card/Card"
import ApiServices from '../../services/ApiServices'
import FormGroup from '../../components/formGroup/FormGroup'
import { withRouter } from 'react-router-dom'

import {mensagemErro, mensagemSucesso}  from '../../components/Toarst'

export type stateType ={
    name: string,
    email: string,
    password: string,
    passwordRepeate: string
}

function UserRegistration(props){

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeate, setPasswordRepeate] = useState<string>('');

    const state: stateType = {
        name: name, 
        email: email,
        password: password,
        passwordRepeate: passwordRepeate
    }

    function validar(){
        const msgs:string[] = []

        if(!state.name){
            msgs.push('O campo nome é obrigatório.')
        }

        if(!state.email){
            msgs.push('O campo email é obrigatório.')
        }else if(!state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Informe um email valido.')
        }

        if(!state.password || !state.passwordRepeate){
            msgs.push('Digite a senha 2x.')
        }else if(state.password !== state.passwordRepeate){
            msgs.push('As senhas não batem.')
        }

        return msgs
    }

    function cadastrar(){
        const msgs = validar()

        if(msgs && msgs.length > 0){
            msgs.forEach((msg, index) => {
                mensagemErro(msg)
            })
            return false
        }

        const usuario = {
            email: state.email,
            nome: state.name,
            senha: state.password
        }
        ApiServices.salvarUsuario(usuario)
        .then(response => {
            mensagemSucesso('Usuario cadastrado com sucesso. Faça o login para acessar o sistema.')
            props.history.push('/login')
        }).catch(error => {
            mensagemErro(error.response.data)
        })
        
    }

    return(
        <Card title="Cadastro de usuario">
            <>
                <h4>Testando os tipos</h4>
                    <FormGroup label="Nome: *" htmlFor="inputNome">
                        <input type="text"
                               id="inputNome"
                               className="form-control"
                               name="nome"
                               onChange={e => setName(e.target.value)}/>
                    </FormGroup>

                    <FormGroup label="Email: *" htmlFor="inputEmail">
                        <input type="email"
                                id="inputEmail"
                                className="form-control"
                                name="email"
                                onChange={e => setEmail(e.target.value)}/>
                    </FormGroup>

                    <FormGroup label="Senha: *" htmlFor="inputSenha">
                        <input type="password"
                                id="inputSenha"
                                className="form-control"
                                name="senha"
                                onChange={e => setPassword(e.target.value)}/>
                    </FormGroup>

                    <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                        <input type="password"
                                id="inputRepitaSenha"
                                className="form-control"
                                name="senha"
                                onChange={e => setPasswordRepeate(e.target.value)}/>
                    </FormGroup>

                    <button onClick={cadastrar} type="button" className="btn btn-success">
                         Salvar
                    </button>
            </>
        </Card>
    )
}

export default withRouter(UserRegistration)