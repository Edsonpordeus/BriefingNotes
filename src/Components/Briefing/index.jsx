import { Container } from './styles'
import { Tag } from '../../Components/Tag'

export function Briefing () {
    return(

        <Container>
                <h3> título  </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo unde officia perferendis, reiciendis dicta molestiae illum sequi! Repellendus fuga, dolore deserunt quidem sed consequuntur voluptatibus non aliquid, facere repudiandae neque.</p>
               
                <div className='tagLocation'>
                
                    <Tag title="Choripan" />
                    <Tag title="Mau" />
               
                </div>
                
        </Container>
    );
}