import React from "react";
import Image from "next/image";

import { capitalize } from "utils/string_utilities";
import { Card, CardHeader, CardFooter } from "./board-card.styles";

import Path from "public/images/Path@2x.png";
import { BoardCardProps } from "interfaces/prop.types";
import StackedProfiles from "components/shared/stacked-profiles";

const BoardCard: React.FC<BoardCardProps> = ({ profiles }: BoardCardProps) => {
  return (
    <Card>
      <CardHeader>
        <p className="title"> {capitalize("brackets")}</p>
        <p className="description">
          {capitalize("saving money - is something we would all like")}
        </p>
      </CardHeader>
      <CardFooter>
        <StackedProfiles
          profiles={["aze", "aa", "ss", "cc", "za", "az"]}
          maxStacked={3}
        />

        <div className="action">
          <a href="#">
            <Image
              src={Path}
              layout="fill"
              objectFit="contain"
              alt="arrow image"
            />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};
export default BoardCard;
