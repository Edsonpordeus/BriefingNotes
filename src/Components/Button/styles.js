import styled from "styled-components";


export const Container = styled.button`

 display: flex;
 justify-content: center;

 background-color: ${({ theme }) => theme.Colors.Green};
 color: ${({ theme }) => theme.Colors.White};
 font-size: 18px;

 border: none;
 border-radius: 5px;
 padding: 10px;
 

 width: 268px;
 margin: 5px auto;

 cursor: pointer;

`;
