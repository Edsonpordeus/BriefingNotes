import { Container, HeaderNone } from "./styles"
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button';
import  Logo  from '../../assets/Logo/logo-vb.svg'
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiKey } from "react-icons/fi";
import { Briefing } from "../../Components/Briefing";

export function SignUp () {
    return(
        <Container>
            <HeaderNone />            
            <img src={Logo} alt="Logo BriefingNotes" />
            <p>Todos os seus projetos num só lugar</p>

            <h2>cadastre-se</h2>

            <Input type="text" placeholder="nome:" icon={FiUser} />
            <Input type="text" placeholder="e-mail:" icon={FiMail} />
            <Input type="password" placeholder="senha:" icon={FiKey} />
           

            <Button title='cadastrar >' />

            <a href="/Signin">voltar para o login</a>

            <Briefing />

        </Container>
    )
};