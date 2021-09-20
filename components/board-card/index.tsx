import React from "react";
import Image from "next/image";
import { capitalize } from "utils/string_utilities";
import { Card, CardHeader, CardFooter } from "./board-card.styles";

import Path from "public/images/Path@2x.png";
const src = `https://via.placeholder.com/200`;
interface BoardCardProps {
  profiles: number;
}
const BoardCard: React.FC<BoardCardProps> = ({ profiles }: BoardCardProps) => {
  return (
    <Card>
      <CardHeader>
        <p className="title"> {capitalize("brackets")}</p>
        <p className="description">
          {capitalize("saving money - is something we would all like")}
        </p>
      </CardHeader>
      <CardFooter profiles={profiles}>
        <div className="profiles">
          <div className="profile">
            <Image
              width="30"
              height="30"
              loader={() => src}
              src={src}
              unoptimized={true}
              alt="profile picture"
            />
          </div>
          <div className="profile">
            <Image
              width={30}
              height={30}
              loader={() => src}
              src={src}
              unoptimized={true}
              alt="profile picture"
            />
          </div>
          <div className="profile">
            <Image
              width={30}
              height={30}
              loader={() => src}
              src={src}
              unoptimized={true}
              alt="profile picture"
            />
          </div>
          <div className="profile">
            <Image
              width={30}
              height={30}
              loader={() => src}
              src={src}
              unoptimized={true}
              alt="profile picture"
            />
          </div>
          <div className="profile">
            <Image
              width={30}
              height={30}
              loader={() => src}
              src={src}
              unoptimized={true}
              alt="profile picture"
            />
          </div>
        </div>
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
