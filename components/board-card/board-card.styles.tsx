import styled from "styled-components";
const maxStackedProfilePics = 4;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 362px;
  min-height: 144px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    max-width: 362px;
    width: 90%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .title {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text_primary};
    margin: 0;
  }
  .description {
    font-size: 13px;
    color: ${(props) => props.theme.colors.text_secondary};
    margin-top: 16px;
  }
`;
export const CardFooter = styled("div")<{ profiles: number }>`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  .profiles {
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

    .profile:nth-child(${maxStackedProfilePics}) {
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
  }
  .action {
    position: relative;
    width: 20px;
    height: 20px;
    a {
      position: relative;
      width: 100%;
      height: 100%;
      text-decoration: none !important;
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
  for (let index = 1; index <= maxStackedProfilePics; index++) {
    str += imagePosition(index);
  }
  return str;
}
