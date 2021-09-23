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
