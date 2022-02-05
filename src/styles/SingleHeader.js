import styled from "styled-components";

export const SingleHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items:center;
    .single__logo{
        display:flex;
        align-items:center;
        .single__image{
            width:40px;
            height:40px;
            margin-right:10px;
        }
    }
    p {
      color: var(--color-grey);
    }
`;