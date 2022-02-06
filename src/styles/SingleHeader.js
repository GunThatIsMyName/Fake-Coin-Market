import styled from "styled-components";

export const SingleWrapper = styled.div`
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
    .single__date {
      color: var(--color-grey);
    }
`;

export const HashTagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    li {
      border-radius: 5px;
      color: var(--color-white);
      background-color: var(--color-grey);
      margin-right: 5px;
      padding: 5px;
      margin-bottom:10px;
    }
`;