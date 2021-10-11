import styled from "styled-components";

export const Divider = styled("span")<{
  margin: number;
  hideOnMobile?: boolean;
}>`
  display: inline-block;
  height: 32px;
  width: 1px;
  background-color: hsla(0, 0%, 0%, 0.1);
  margin-left: ${(props) => props.margin}px;
  margin-right: ${(props) => props.margin}px;

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    `
    @media only screen and (max-width: 768px) {
    background-color: transparent;
    margin-left: 5px;
    margin-right: 5px;
  }
  `}
`;

export const TaskType = styled("span")<{ color: string }>`
  width: 60px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin-right: 8px;
`;

export const ErrorMessage = styled("div")`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  .container {
    display: flex;
    overflow-x: scroll;
    /* position: absolute; */
    bottom: 0;
    top: 0;
    left: 0;
    height: calc(100vh - 120px);
    ::-webkit-scrollbar {
      width: 14px;
    }

    ::-webkit-scrollbar-track {
      background: #f4f4f4;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #a8a8a8;
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      position: inherit;

      height: 100%;
    }
  }
`;
export const Alert = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  margin: 6px;
  background-color: #c62828;
  color: white;
  font-size: 10px;
  text-align: center;
`;
