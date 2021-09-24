import type { NextPage } from "next";
import Head from "next/head";
import BoardList from "components/board-list";
import { Board } from "interfaces/board.model";
import { server } from "config";
const Home: NextPage<{ boards: Board[] }> = ({ boards }) => {
  return (
    <div>
      <Head>
        <title>Home - Trello</title>
        <meta name="description" content="Trello home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BoardList boards={boards} title="Recently viewed" />;
        <BoardList boards={boards} title="New" />;
        <BoardList boards={boards} title="Process" />;
        <BoardList boards={boards} title="Completed" />;
      </main>
    </div>
  );
};
Home.getInitialProps = async () => {
  const res = await fetch(`${server}/api/boards`);
  const json = await res.json();
  return { boards: json?.success ? json.body : [] };
};
export default Home;
