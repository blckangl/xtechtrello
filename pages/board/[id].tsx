import { NextPage } from "next";
import { useRouter } from "next/router";
import { Board } from "interfaces/board.model";
import { server } from "config";

import Head from "next/head";
import BoardHeader from "components/board-header";
import TaskList from "components/task-list";
import { ErrorMessage } from "components/shared/styles";
import { Wrapper } from "components/shared/styles";
import React from "react";
const BoardPage: NextPage<{ board: Board }> = ({ board }) => {
  const router = useRouter();
  const { id } = router.query;
  if (Object.keys(board).length == 0)
    return <ErrorMessage>Board doesn&rsquo;t exist</ErrorMessage>;

  return (
    <div>
      <Head>
        <title>Board - Trello</title>
        <meta name="description" content="Trello home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoardHeader board={board} />
      <Wrapper>
        <div className="container">
          {board.sections.map((section) => {
            return <TaskList boardSection={section} key={section._id} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

BoardPage.getInitialProps = async (context) => {
  const res = await fetch(`${server}/api/boards/${context.query.id}`);
  const json = await res.json();

  return { board: json?.success ? json.body : {} };
};
export default BoardPage;
