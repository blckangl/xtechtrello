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
  Actions,
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
import React, { useEffect, useState } from "react";
import Link from "next/link";
import userService from "../../services/user.service";
// @ts-ignore
import * as eva from "eva-icons";

const NavHeader: React.FC = () => {
  useEffect(() => {
    eva.replace();
  }, []);
  const [showActions, setShowActions] = useState(false);
  return (
    <Container>
      <LeftInnerContainer>
        <Link href="/">
          <LogoItem>
            <Image src={Logo} alt="trello logo" />
          </LogoItem>
        </Link>
        <Divider hideOnMobile margin={20} />
        <Mark>
          <Link href="/">
            <a>
              <Image layout="fill" src={TrelloMark} alt="trello mark" />
            </a>
          </Link>
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
      {userService.userValue && (
        <InnerContainer>
          <MenuItems>
            <li>
              <a href="#">
                <Image src={plusCircle} alt="Plus icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={AlertCircle} alt="Alert icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Bell} alt="Bell icon" />
              </a>
            </li>
          </MenuItems>
          <ProfileMenu
            href="#"
            onClick={(event) => {
              setShowActions(!showActions);
            }}
          >
            <Image
              width="40"
              height="40"
              loader={() => userService.userValue.avatar}
              unoptimized={true}
              src={userService.userValue.avatar}
              alt="profile picture"
            />
            {showActions ? (
              <Actions>
                <ul>
                  <li
                    onClick={() => {
                      userService.logout();
                    }}
                  >
                    <i
                      data-eva-height="19"
                      data-eva-fill="#929292"
                      data-eva="close-circle-outline"
                      data-eva-hover="true"
                    />
                    Logout
                  </li>
                </ul>
              </Actions>
            ) : (
              ""
            )}
          </ProfileMenu>
        </InnerContainer>
      )}
      {!userService.userValue && (
        <InnerContainer>
          <MenuItems>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          </MenuItems>
        </InnerContainer>
      )}
    </Container>
  );
};

export default NavHeader;
