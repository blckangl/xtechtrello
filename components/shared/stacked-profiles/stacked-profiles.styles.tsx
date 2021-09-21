import styled from "styled-components";
export const Profiles = styled("a")<{
  profiles: number;
}>`
  padding-left: 14px;
  display: flex;
  position: relative;
  ${setProfilesPostion()}
  .profile {
    display: none;
    img {
      border-radius: 50%;
    }
  }

  .profile:last-child {
    background-color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    img {
      display: none !important;
    }
    &:after {
      content: "+${(props) => props.profiles}";
      color: white;
      line-height: 30px;
      text-align: center;
      position: absolute;
      left: 35%;
      font-size: 9px;
    }
  }
`;

function imagePosition(i: number) {
  return `
        .profile:nth-child(${i}) {
            display:block;
            position:relative;
          left: ${`calc(${i} * -14px)`};
         }
      `;
}

function setProfilesPostion() {
  let str = "";
  for (let index = 1; index <= 10; index++) {
    str += imagePosition(index);
  }
  return str;
}
