import { Container } from './styles'
import { Header } from '../../Components/Header'
import { Briefing } from '../../Components/Briefing'

export function MyNotesPreview (){
    return(
        <Container>

            <Header/>

            <section>
                <h2>meus projetos</h2>
                <button> + new </button>
            </ section>

            <Briefing />
            <Briefing />

        </Container>
    );
}