import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { useRouter } from "next/router";
import Head from "next/head";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

const IbmPlexSans = Crimson_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const isAuthRoute = router.pathname.startsWith("/auth");

  return (
    <SessionProvider session={session}>
      <Head>
        <script
          src="//code.tidio.co/zijqki1ga0ukonzwfvii0wo5rruzqng1.js"
          async
        ></script>
      </Head>
      <div className={IbmPlexSans.className}>
        {!isAuthRoute ? (
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </SessionProvider>
  );
};

export default MyApp;
