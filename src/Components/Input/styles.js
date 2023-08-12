
import styled from "styled-components";

export const  Container = styled.div`

    width: 268px;
    background-color: ${({ theme }) => theme.Colors.GrayWhite};

    display: flex;
    align-items: center;

    margin: 10px auto;
    border-radius: 5px;
    padding: 0 10px;
    
> input {
        height: 56px;
        width: 268px;
      
        color: ${({ theme }) => theme.Colors.GrayText};
        background: transparent;
      

        border: none;
        border-radius: 5px;

        padding: 0 10px;
        margin: 0 0;
        outline: none;

         
    }

`;
