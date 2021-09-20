import { NextComponentType } from "next";
import { Container, Title, List } from "./board-list.styles";
import BoardCard from "components/board-card";
import CardEmpty from "components/board-card-empty";
import React from "react";
import { capitalize } from "utils/string_utilities";

interface BoardListProps {
  title: string;
}
const BoardList: React.FC<BoardListProps> = ({ title }) => {
  return (
    <Container>
      <Title>{capitalize(title)}</Title>
      <List>
        <BoardCard profiles={50} />
        <BoardCard profiles={20} />
        <BoardCard profiles={20} />
        <BoardCard profiles={20} />
        <CardEmpty />
      </List>
    </Container>
  );
};
export default BoardList;
