import TaskCard from "components/task-card";
import { Board } from "interfaces/board.model";
import { BoardSection } from "interfaces/boardsection.model";
import React from "react";
import { capitalize } from "utils/string_utilities";
import { Container, Title } from "./task-list.styles";

const TaskList: React.FC<{ boardSection: BoardSection }> = ({
  boardSection,
}) => {
  return (
    <Container>
      <Title>{capitalize(boardSection.title)}</Title>
      {boardSection.tasks.map((task) => {
        return <TaskCard task={task} key={task._id}></TaskCard>;
      })}
    </Container>
  );
};

export default TaskList;
