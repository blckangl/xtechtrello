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
      <List
        ondrop={(ev) => {
          ev.preventDefault();
          let data = ev.dataTransfer.getData("text");
          console.log("data", data);
        }}
        ondragover={(event) => {
          event.preventDefault();
          console.log("drag over");
        }}
      >
        {boards.map((board) => {
          return <BoardCard key={board._id} board={board} />;
        })}

        <CardEmpty />
      </List>
    </Container>
  );
};
export default BoardList;
