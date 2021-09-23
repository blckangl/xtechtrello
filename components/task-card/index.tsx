import StackedProfiles from "components/shared/stacked-profiles";
import React, { useEffect } from "react";
import { Card } from "./task-card.styles";
// @ts-ignore
import * as eva from "eva-icons";
import Image from "next/image";
import { TaskType } from "components/shared/styles";
const src = `https://via.placeholder.com/322`;
const TaskCard: React.FC = () => {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <Card>
      <div className="header">
        <Image
          width="322"
          height="170"
          loader={() => src}
          unoptimized={true}
          src={src}
          alt="profile picture"
        />
        <div className="types">
          <TaskType color="#4339F2" />
          <TaskType color="#4339F2" />
        </div>
      </div>
      <div className="body">
        <p className="title">Title</p>
        <p className="description">
          Old fashioned recipe for preventing allergies and chemical
          sensitivities
        </p>
      </div>
      <div className="footer">
        <StackedProfiles
          profiles={["aze", "aa", "ss", "cc", "za", "az"]}
          maxStacked={2}
        />
        <div className="actions">
          <a href="#" className="action">
            <span>23</span>

            <i
              data-eva-height="19"
              data-eva-fill="#cbcbcb"
              data-eva="message-square-outline"
              data-eva-hover="true"
            />
          </a>
          <a href="#" className="action">
            <span>12</span>
            <i
              data-eva-height="19"
              data-eva-fill="#cbcbcb"
              data-eva="heart-outline"
              data-eva-hover="true"
            />
          </a>
          <a href="#" className="action">
            <span>43</span>
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
