import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 58px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  flex-flow: row wrap;
  flex-basis: 58px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
  white-space: nowrap;
  color: ${(props) => props.theme.colors.text_primary};
`;
export const InnerContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-flow: row wrap;
  }
`;
export const LeftInnerContainer = styled(InnerContainer)`
  flex-grow: 1;
`;
export const LogoItem = styled.a`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.span`
  margin-left: 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  max-width: 512px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 30px;
  border-radius: 25px;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: auto;
    background-color: transparent;
  }
`;
export const Mark = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  height: 100%;
  text-align: left;
  padding-right: 32px;
  padding-left: 16px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const SearchButton = styled.a`
  text-decoration: none;
  position: absolute;
  right: 16px;
  line-height: 16px;
  @media only screen and (max-width: 768px) {
    position: relative;
    right: 0;
  }
`;
export const MenuItems = styled.ul`
  li {
    display: inline;
    list-style: none;
    margin-left: 18px;
    margin-right: 18px;
    @media only screen and (max-width: 768px) {
      margin-left: 14px;
      margin-right: 14px;
    }
    a {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
export const ProfileMenu = styled.a`
  img {
    border-radius: 50%;
  }
`;
