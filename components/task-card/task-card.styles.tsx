import styled from "styled-components";

export const Card = styled.div`
  padding: 16px;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 100%;
  margin-top: 16px;

  .header {
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    img {
      width: 322px;
      border-radius: 10px;
    }
  }
  .body {
    .title {
      font-size: 16px;
      font-weight: 700;
      color: black;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .description {
      font-size: 13px;
      color: #939393;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 8px;
    .actions {
      display: flex;
      align-items: center;

      .action {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-left: 12px;
        span {
          font-size: 14px;
          color: #c2c2c2;
        }
      }
    }
  }
`;
