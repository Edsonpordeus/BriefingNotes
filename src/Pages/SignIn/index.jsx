import { Container, HeaderNone } from "./styles"
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button';
import  Logo  from '../../assets/Logo/logo-vv.svg'
import { FiUser, FiMail } from "react-icons/fi";


export function SignIn () {
    return(
        <Container>
            <HeaderNone />            
            <img src={Logo} alt="Logo BriefingNotes" />
            <p>Todos os seus projetos num só lugar</p>

            <h2>login</h2>

            <Input type="text" placeholder="nome:" icon={FiUser} />
            <Input type="text" placeholder="e-mail:" icon={FiMail} />
           

            <Button title='entrar >' />

            <a href="/SignUp"> criar conta</a>

        </Container>
    )
};