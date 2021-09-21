import StackedProfiles from "components/shared/stacked-profiles";
import React, { useEffect } from "react";
import { Container } from "./board-header.styles";
// @ts-ignore
import * as eva from "eva-icons";
import { Divider } from "components/shared/styles";
const BoardHeader: React.FC = () => {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <Container>
      <div className="title">
        <p>Brackets</p>
      </div>
      <div className="status">
        <a href="#">
          <i
            data-eva-height="19"
            data-eva-fill="#cbcbcb"
            data-eva="heart-outline"
            data-eva-hover="true"
          />
        </a>
        <Divider margin={10} />
        <a href="#">
          <i
            data-eva-height="19"
            data-eva-fill="#cbcbcb"
            data-eva="globe-2-outline"
            data-eva-hover="true"
          />
          <small>Public</small>
        </a>
        <Divider margin={10} />
        <a href="#">
          <i
            data-eva-height="19"
            data-eva-fill="#cbcbcb"
            data-eva="hard-drive-outline"
            data-eva-hover="true"
          />
        </a>
      </div>
      <div className="actions">
        <StackedProfiles profiles={["aze", "aa", "ss", "cc"]} maxStacked={2} />
      </div>
    </Container>
  );
};
export default BoardHeader;
