import styled from "styled-components";

export const Container = styled.div`

    section {
       margin: 50px 0 25px 0;
       display: flex;
       justify-content: space-around;
       align-items: center;

       padding: 0 0px;


    }

    button {
        display: flex;
        justify-content: center;

        background-color: ${({ theme }) => theme.Colors.Green};
        color: ${({ theme }) => theme.Colors.White};
        font-size: 18px;

        border: none;
        border-radius: 5px;
        padding: 10px;
        

        width: 100px;

        cursor: pointer;
    }

    h2 {
        color: ${({ theme }) => theme.Colors.Green};
    }
`;
