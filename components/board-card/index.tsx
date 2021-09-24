import React, { useEffect } from "react";
import Image from "next/image";

import { capitalize } from "utils/string_utilities";
import { Card, CardHeader, CardFooter } from "./board-card.styles";

import Path from "public/images/Path@2x.png";
import { BoardCardProps } from "interfaces/prop.types";
import StackedProfiles from "components/shared/stacked-profiles";
import Link from "next/link";
// @ts-ignore
import * as eva from "eva-icons";
import { server } from "config";

const BoardCard: React.FC<BoardCardProps> = ({ board }: BoardCardProps) => {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <Card>
      <CardHeader>
        <p className="title"> {capitalize(board.title)}</p>
        <p className="description">{capitalize(board.description)}</p>
      </CardHeader>
      <CardFooter>
        <StackedProfiles
          profiles={board.users.map((user) => user.avatar)}
          maxStacked={3}
        />

        <div className="action">
          <Link href={`${server}/board/${board._id}`}>
            <a>
              <i
                data-eva-height="19"
                data-eva-fill="#cbcbcb"
                data-eva="arrow-forward-outline"
                data-eva-hover="true"
              />
            </a>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
export default BoardCard;
