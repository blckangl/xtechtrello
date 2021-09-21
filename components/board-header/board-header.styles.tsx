import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 22px;
  flex-wrap: wrap;
  .status {
    flex-grow: 1;
    padding-left: 100px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      color: #cbcbcb;
      text-decoration: none;
    }
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
  }
  .title {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 16px;
    }
  }
  .actions {
    display: flex;
    align-items: center;
  }
`;
