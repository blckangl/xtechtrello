import TaskCard from "components/task-card";
import { Board } from "interfaces/board.model";
import { BoardSection } from "interfaces/boardsection.model";
import React from "react";
import { capitalize } from "utils/string_utilities";
import { Container, Title } from "./task-list.styles";
import taskService from "../../services/task.service";
const TaskList: React.FC<{ boardSection: BoardSection }> = ({
  boardSection,
}) => {
  return (
    <Container
      onDrop={async (e: React.DragEvent) => {
        e.stopPropagation();
        const task = e.dataTransfer.getData("task");
        const from = e.dataTransfer.getData("section");
        const to = boardSection._id;

        await taskService.transfer(task, from, to);
        window.location.reload();
      }}
      onDragOver={(e: React.DragEvent) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Title>{capitalize(boardSection.title)}</Title>
      {boardSection.tasks.map((task) => {
        return (
          <TaskCard
            sectionID={boardSection._id}
            task={task}
            key={task._id}
          ></TaskCard>
        );
      })}
    </Container>
  );
};

export default TaskList;
