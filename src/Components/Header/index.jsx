import { Container } from "./styles"
import  Icon  from '../../assets/Logo/iconWhite.svg'
import { FiSearch } from "react-icons/fi";
import ImgProfile from '../../assets/Img/raimundo.png'

export function Header(){
    return(
        <Container>

            <img src={Icon} alt="Logo do BriefingNotes" />

            <input type="text" placeholder="pesquisar:" icon={FiSearch} style={{ height: '40px'}}/>

            <img src={ImgProfile} alt="Avatar do usuário" />

        </Container>
    );
}

