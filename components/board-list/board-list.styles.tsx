import styled from "styled-components";
export const Container = styled.div`
  padding: 30px;
`;
export const Title = styled.p`
  font-size: 26px;
  margin-bottom: 20px;
`;
export const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 20px;
  & > * {
    flex: 0 0 auto;
    margin-right: 30px;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) => props.theme.colors.secondary};
  }
`;
