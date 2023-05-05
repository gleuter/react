import React from "react";
import { Title, Form, Repos } from './style'
import logo from '../../assests/logo.svg'
import { Repo } from "../Repo";
import {FiChevronRight} from 'react-icons/fi'

export const Dashbaord: React.FC = () => {
    return (
        <>
            <img src={logo} alt="GitCollection" />
            <Title>Catalogo de repositorios do Github</Title>
            <Form>
                <input placeholder="username/repository_name" />
                <button type="submit">Buscar</button>
            </Form>

            <Repos>
                <a href="/repositories">
                    <img
                        src="https://avatars.githubusercontent.com/u/68967867?v=4"
                        alt="Repositorio"
                    />
                    <div>
                        <strong>aluiziodeveloper/mini-curso-reactjs</strong>
                        <p>Repositorio do mini curso gratuito de reactjs</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repos>
        </>


    )
}