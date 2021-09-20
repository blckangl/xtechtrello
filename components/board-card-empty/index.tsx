import { Card, Title } from "./board-card-empty.styles";
import React from "react";
const CardEmpty: React.FC = () => {
  return (
    <Card href="#">
      <Title>Create new board</Title>
    </Card>
  );
};

export default CardEmpty;
