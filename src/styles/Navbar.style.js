import styled from "styled-components";

export const NavbarWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width:1200px;
  width:80%;
  margin:auto;
  justify-content:space-between;
  .navbar__icon {
    display: flex;
    align-items: center;
    .navbar__logo {
      width: 40px;
      height: 40px;
      margin-right: 2rem;
    }
  }

  .navbar__user{
    display:flex;
    align-items:center;
    .user__info{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }
  }
`;
