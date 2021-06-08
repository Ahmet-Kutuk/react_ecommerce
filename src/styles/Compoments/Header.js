import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eaeaeb;
`;
export const Nav = styled.nav`
  text-alignn: right;
  height: 70px;
  line-height: 70px;
  width: 1200px;
`;

export const Menu = styled.div`
  margin: 0 30px 0 0;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: none;
    box-shadow: 0 0 15px 0 black;
  }
`;

export const MenuItem = styled.span`
  text-decoration: none;
  color: grey;
  margin: 0 80px;
  line-height: 70px;
  clear: right;

  @media (max-width: 768px) {
    display: block;
    border-bottom: 1px solid #eaeaeb;
    margin: 0;
  }
`;

export const Active = styled.span`
  color: #bf1363;
`;
