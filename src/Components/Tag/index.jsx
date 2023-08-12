import { Container } from './styles';

export function Tag({title}){
    return(
        <Container type='button'>
          {title}
        </Container>
    );
}
