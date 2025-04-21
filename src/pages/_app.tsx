import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import { Crimson_Pro } from "next/font/google";

import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const IbmPlexSans = Crimson_Pro({ weight: ["400", "600", "700"], subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={IbmPlexSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
