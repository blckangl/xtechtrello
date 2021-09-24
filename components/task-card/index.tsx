import StackedProfiles from "components/shared/stacked-profiles";
import React, { useEffect } from "react";
import { Card } from "./task-card.styles";
// @ts-ignore
import * as eva from "eva-icons";
import Image from "next/image";
import { TaskType } from "components/shared/styles";
import { Task } from "interfaces/task.model";
import { capitalize } from "utils/string_utilities";
const src = `https://via.placeholder.com/322`;
const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  useEffect(() => {
    eva.replace();
  }, []);
  console.log("task ", task);
  return (
    <Card>
      <div className="header">
        {task.picture && (
          <Image
            width="322"
            height="170"
            loader={() => (task.picture ? task.picture : src)}
            unoptimized={true}
            src={task.picture ? task.picture : src}
            alt="profile picture"
          />
        )}
        <div className="types">
          {task.taskTypes.map((type) => {
            switch (type) {
              case "Audio":
                return <TaskType key={type} color="#4339F2" />;
                break;
              case "Design":
                return <TaskType key={type} color="#FF3838" />;
                break;
              case "Development":
                return <TaskType key={type} color="#891BE8" />;
                break;
              case "Other":
                return <TaskType key={type} color="#0AAAF4" />;
                break;
            }
          })}
        </div>
      </div>
      <div className="body">
        <p className="title">{capitalize(task.title)}</p>
        <p className="description">{capitalize(task.description)}</p>
      </div>
      <div className="footer">
        <StackedProfiles
          profiles={task.users.map((user) => user.avatar)}
          maxStacked={2}
        />
        <div className="actions">
          <a href="#" className="action">
            <span>{task.comments.length}</span>

            <i
              data-eva-height="19"
              data-eva-fill="#cbcbcb"
              data-eva="message-square-outline"
              data-eva-hover="true"
            />
          </a>
          <a href="#" className="action">
            <span>{task.likes}</span>
            <i
              data-eva-height="19"
              data-eva-fill="#cbcbcb"
              data-eva="heart-outline"
              data-eva-hover="true"
            />
          </a>
          <a href="#" className="action">
            <span>{task.attachments.length}</span>
            <i
              data-eva-height="19"
              data-eva-fill="#cbcbcb"
              data-eva="attach-outline"
              data-eva-hover="true"
            />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
