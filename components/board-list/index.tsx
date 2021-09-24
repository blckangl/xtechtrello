import { Container, Title, List } from "./board-list.styles";
import BoardCard from "components/board-card";
import CardEmpty from "components/board-card-empty";
import React from "react";
import { capitalize } from "utils/string_utilities";
import { Board } from "interfaces/board.model";

interface BoardListProps {
  title: string;
  boards: Board[];
}
const BoardList: React.FC<BoardListProps> = ({ title, boards }) => {
  return (
    <Container>
      <Title>{capitalize(title)}</Title>
      <List>
        {boards.map((board) => {
          return <BoardCard key={board._id} board={board} />;
        })}

        <CardEmpty />
      </List>
    </Container>
  );
};
export default BoardList;
