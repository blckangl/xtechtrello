import styled from "styled-components";
import Image from "next/image";

import Logo from "public/images/Logo.png";
import Boards from "public/images/Boards.png";
import Bell from "public/images/bell-outline@2x.png";
import AlertCircle from "public/images/alert-circle-outline@2x.png";
import plusCircle from "public/images/plus-circle-outline@2x.png";
import Search from "public/images/search-outline@2x.png";
import TrelloMark from "public/images/trello-mark-blue@2x.png";

const Container = styled.div`
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
`;
const InnerContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
const LeftInnerContainer = styled(InnerContainer)`
  flex-grow: 1;
`;
const LogoItem = styled.a`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Divider = styled.span`
  display: inline-block;
  height: 32px;
  width: 1px;
  background-color: hsla(0, 0%, 0%, 0.1);
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    background-color: transparent;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const Title = styled.span`
  margin-left: 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  max-width: 512px;
  background: #f4f4f4;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 30px;
  border-radius: 25px;
  position: relative;
  @media only screen and (max-width: 768px) {
    background-color: transparent;
  }
`;
const Mark = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
const Input = styled.input`
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
const SearchButton = styled.a`
  text-decoration: none;
  position: absolute;
  right: 16px;
  line-height: 16px;
  @media only screen and (max-width: 768px) {
    position: relative;
    right: 0;
  }
`;
const MenuItems = styled.ul`
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
const ProfileMenu = styled.a`
  img {
    border-radius: 50%;
  }
`;
const src = `https://via.placeholder.com/150`;

const NavHeader = () => {
  return (
    <Container>
      <LeftInnerContainer>
        <LogoItem>
          <Image src={Logo} alt="trello logo" />
        </LogoItem>

        <Divider />
        <Mark>
          <Image layout="fill" src={TrelloMark} alt="trello mark" />
        </Mark>
        <Title>Boards</Title>
        <Divider />
        <SearchContainer>
          <Input placeholder="search" />
          <SearchButton href="#">
            <Image width="16" height="16" src={Search} alt="search button" />
          </SearchButton>
        </SearchContainer>
      </LeftInnerContainer>
      <InnerContainer>
        <MenuItems>
          <li>
            <a>
              <Image src={plusCircle} alt="Plus icon" />
            </a>
          </li>
          <li>
            <a>
              <Image src={AlertCircle} alt="Alert icon" />
            </a>
          </li>
          <li>
            <a>
              <Image src={Bell} alt="Bell icon" />
            </a>
          </li>
        </MenuItems>
        <ProfileMenu href="#">
          <Image
            width="40"
            height="40"
            loader={() => src}
            src={src}
            alt="profile picture"
          />
        </ProfileMenu>
      </InnerContainer>
    </Container>
  );
};
export default NavHeader;
