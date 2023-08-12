import { Container, HeaderLogo, Avatar } from './styles'
import  Logo  from '../../assets/Logo/logo-hb.svg'
import ImgProfile from '../../assets/Img/raimundo.png'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiCamera, FiUser, FiMail, FiKey } from "react-icons/fi";
import { Header } from '../../Components/Header'
 
export function Profile () {
    return(

        <Container>

            <HeaderLogo>
                <img src={Logo} alt="Logo BriefingNotes" />
            </HeaderLogo>

            <Avatar>

                 <img src={ImgProfile} alt="Avatar do usuário" />

                 <label> 
                        <FiCamera />
                        <input id="avatar" type="file" />
                 </label>

            </Avatar>

            <Input type="text" placeholder="nome:" icon={FiUser} />
            <Input type="text" placeholder="e-mail:" icon={FiMail} />
            <Input type="password" placeholder="senha:" icon={FiKey} />
           
            <Button title='salvar >' />

            <a href="/SignIn"> voltar ao início</a>


        </Container>
    );
}