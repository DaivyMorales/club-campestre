import { signOut, useSession } from "next-auth/react";
import React from "react";
import { TiTree } from "react-icons/ti";
import { RiUser5Fill } from "react-icons/ri";
import { TiPower } from "react-icons/ti";

import Cart from "./Cart";
import ButtonExpandReservation from "./ButtonExpandReservation";

function Navbar({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between bg-white p-4">
          <div className="z-50 flex items-center justify-center gap-1">
            <TiTree size={20} className="text-stone-400" />
            <p className="text-[20px] font-semibold text-stone-400">
              Club Campestre
            </p>
          </div>
          <ul className="flex space-x-4">
            {/* <button className="cursor-pointer rounded-md border-[1px] border-gray-300 p-2 shadow-sm">
              <RiUser5Fill size={18} className="text-stone-400" />
            </button> */}
            {status === "authenticated" ? (
              <>
               
               {/* <ButtonExpandReservation/> */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex cursor-pointer items-center gap-1 rounded-md border-[1px] border-gray-300 p-2 text-stone-400 shadow-sm"
                >
                  <RiUser5Fill size={18} className="text-stone-400" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-[150px] border-[1px] border-gray-300 shadow-sm"
                >
                  <li className="">
                  
                  </li>
                  <li className="flex items-center">
                    <a
                      className="text-red-600"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <TiPower size={17} /> Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </div>
              <Cart/>
              </>
            ) : (
              <button
                className="btn h-[28px] border-[1px] border-green-500 bg-green-300 text-sm font-light shadow-inner"
                onClick={() => {
                  window.location.href = "/auth";
                }}
              >
                Comienza ahora
              </button>
            )}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Navbar;
