import styled from "styled-components";
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
export const CardFooter = styled("div")`
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;

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
