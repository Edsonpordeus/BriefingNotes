import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    max-width: 390px;
    margin: 0 auto 0 auto;

    background-color: ${({ theme }) => theme.Colors.Green};

    text-align: center;
    font-size: 20px;

    color: ${({ theme }) => theme.Colors.GrayText};

    >p {
    width: 266px;
    margin: -60px auto 0 auto;
    line-height: 23px;
 }
    
    >a {
        text-decoration: none;
        color: ${({ theme }) => theme.Colors.GrayText};

        font-size: 16px;       
    }

    >a:hover {
        color: ${({ theme }) => theme.Colors.White};
    } 

    >h2 {
        font-size: 24px;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.Colors.White};
        margin-top: 40px;
    }

    >button {
        margin-bottom: 25px;
        margin-top: 20px;
        background-color: ${({ theme }) => theme.Colors.GreenWhite};
    }

    >img {
        height: 270px;
        margin-top: -20px;
    }

    >input {
        background-color: ${({ theme }) => theme.Colors.GreenWhite};
    }
`;


export const HeaderNone = styled.div`
    height: 50px;
    background-color: ${({ theme }) => theme.Colors.GreenWhite};
`;


