import {
  Container,
  InnerContainer,
  Input,
  LeftInnerContainer,
  LogoItem,
  Mark,
  MenuItems,
  ProfileMenu,
  SearchButton,
  SearchContainer,
  Title,
} from "./nav-header.styles";
import { Divider } from "components/shared/styles";
import Image from "next/image";

import Logo from "public/images/Logo.png";
import Boards from "public/images/Boards.png";
import Bell from "public/images/bell-outline@2x.png";
import AlertCircle from "public/images/alert-circle-outline@2x.png";
import plusCircle from "public/images/plus-circle-outline@2x.png";
import Search from "public/images/search-outline@2x.png";
import TrelloMark from "public/images/trello-mark-blue@2x.png";
import React from "react";

const src = `https://via.placeholder.com/300`;

const NavHeader: React.FC = () => {
  return (
    <Container>
      <LeftInnerContainer>
        <LogoItem>
          <Image src={Logo} alt="trello logo" />
        </LogoItem>

        <Divider hideOnMobile margin={20} />
        <Mark>
          <Image layout="fill" src={TrelloMark} alt="trello mark" />
        </Mark>
        <Title>Boards</Title>
        <Divider hideOnMobile margin={20} />
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
            unoptimized={true}
            src={src}
            alt="profile picture"
          />
        </ProfileMenu>
      </InnerContainer>
    </Container>
  );
};

export default NavHeader;
