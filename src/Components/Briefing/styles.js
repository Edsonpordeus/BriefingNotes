import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    text-align: left;

    background-color: ${({ theme }) => theme.Colors.GrayWhite};

    width: 85vw;
    padding: 20px;
    margin: 0 auto 15px auto;

    border-radius: 10px;

    .tagLocation {
        display: flex;
    }
    
    >h3 {
        font-size: 24px;
        letter-spacing: 1px;
        margin-top: 5px;
        
    }

    >p {
        font-size: 18px;
        margin-top: 15px;
        color: ${({ theme }) => theme.Colors.GrayTextWhite};
    }
    
`;