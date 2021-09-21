import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import BoardList from "components/board-list";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - Trello</title>
        <meta name="description" content="Trello home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BoardList title="Recently viewed" />
        <BoardList title="process" />
      </main>
    </div>
  );
};

export default Home;
