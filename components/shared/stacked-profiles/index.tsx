import React from "react";
import { Profiles } from "./stacked-profiles.styles";
import Image from "next/image";
import { capitalize } from "utils/string_utilities";

const src = `https://via.placeholder.com/200`;

interface StackedProfiles {
  profiles: string[];
  maxStacked: number;
}
const StackedProfiles: React.FC<StackedProfiles> = ({
  profiles,
  maxStacked,
}) => {
  return (
    <Profiles
      href="#"
      profiles={
        profiles.length - maxStacked > 0 ? profiles.length - maxStacked : 0
      }
    >
      {profiles.slice(0, maxStacked + 1).map((profile) => {
        return (
          <div key={profile} className="profile">
            <Image
              width={30}
              height={30}
              loader={() => profile}
              src={profile}
              unoptimized={true}
              alt="profile picture"
            />
          </div>
        );
      })}
    </Profiles>
  );
};

export default StackedProfiles;
