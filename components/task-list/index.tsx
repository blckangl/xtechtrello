import TaskCard from "components/task-card";
import React from "react";
import { Container, Title } from "./task-list.styles";

const src = `https://via.placeholder.com/300`;

const TaskList: React.FC = () => {
  return (
    <Container>
      <Title>Design</Title>
      <TaskCard></TaskCard>
    </Container>
  );
};

export default TaskList;
