import styled from "styled-components";

export const Container = styled.div`

    text-align: center;
    max-width: 390px;
    margin: auto;

    color: ${({ theme }) => theme.Colors.GrayText};

    > button {
        margin: 20px auto;
    }

    >a {

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: ${({ theme }) => theme.Colors.GrayText};

        font-size: 16px;

    }

`;

export const HeaderLogo = styled.div`
    height: 50px;
    background-color: ${({ theme }) => theme.Colors.Green};

    display: flex;
    justify-content: center;
    
    > img {
        width: 150px;
    }

`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    background-color: ${({ theme }) => theme.Colors.Green};
    width: 170px;
    height: 170px;

    margin: 50px auto 25px auto;
    border-radius: 50%;

    > img {
        width: 155px;
        height: 155px;
        
    }

    > label {

        width: 38px;
        height: 38px;
        background-color: ${({theme}) => theme.Colors.Green};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.Colors.White};
        }  
    }
      
`;
