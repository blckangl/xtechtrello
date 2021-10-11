import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import userService from "../services/user.service";

import Layout from "layout/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  const isAuthenticated = (url: string) => {
    const publicPaths = ["/login", "/register"];
    const path = url.split("?")[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
      });
    } else {
      setAuthorized(true);
    }
  };
  useEffect(() => {
    isAuthenticated(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", isAuthenticated);
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", isAuthenticated);
    };
  }, []);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      {authorized && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </div>
  );
}
export default MyApp;
