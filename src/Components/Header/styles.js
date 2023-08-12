import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.Colors.Green};

    > img {
        height: 45px;
    }
   
    > input {
        height: 46px;
        width: 240px;
      ;
      
        color: ${({ theme }) => theme.Colors.GrayText};
        background-color: ${({ theme }) => theme.Colors.GrayWhite};
      

        border: none;
        border-radius: 5px;

        padding: 0 10px;
        outline: none;
    }
`;