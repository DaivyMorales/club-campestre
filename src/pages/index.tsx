import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { signOut, useSession } from "next-auth/react";
import React from "react";

function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  console.log(session);

  return (
    <div>
      {status === "authenticated" ? (
        <>
          {session.user.name}{" "}
          <button
            onClick={() => {
              signOut();
            }}
          >
            LogOut
          </button>
        </>
      ) : (
        <>GO auth</>
      )}
    </div>
  );
}

export default Home;
