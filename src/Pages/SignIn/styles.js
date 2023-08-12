import styled from "styled-components";



export const Container = styled.div`
    height: 100hv;
    background-color: ${({ theme }) => theme.Colors.White};

    text-align: center;
    max-width: 390px;
    margin: auto;

    color: ${({ theme }) => theme.Colors.GrayText};
    font-size: 20px;

    >p {
    width: 266px;
    margin: -60px auto;
    margin-bottom: 25px;
    line-height: 23px;
 }
    
    >a {
        text-decoration: none;
        color: ${({ theme }) => theme.Colors.GrayText};

        font-size: 16px;       
    }

    >a:hover {
            color: ${({ theme }) => theme.Colors.Green};
    } 

    >h2 {
        font-size: 24px;
        color: ${({ theme }) => theme.Colors.Green};
        margin-top: 40px;
    }

    >button {
        margin-bottom: 25px;
        margin-top: 20px;
    }

    >img {
        height: 270px;
        margin-top: -20px;
    };
`;


export const HeaderNone = styled.div`
    height: 50px;
    background-color: ${({ theme }) => theme.Colors.Green};
`;


