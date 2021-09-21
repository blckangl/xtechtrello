import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
// @ts-ignore
import * as eva from "eva-icons";
import BoardHeader from "components/board-header";
const BoardPage: NextPage = () => {
  useEffect(() => {
    eva.replace();
  }, []);
  return (
    <div>
      <Head>
        <title>Board - Trello</title>
        <meta name="description" content="Trello home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BoardHeader />
    </div>
  );
};

export default BoardPage;
