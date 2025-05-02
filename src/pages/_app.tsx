import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";

import "@/styles/globals.css";

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
  return (
    <SessionProvider session={session}>
      <div className={IbmPlexSans.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
