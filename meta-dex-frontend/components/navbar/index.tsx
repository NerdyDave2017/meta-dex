import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Light, Dark } from "../icons/icons";
import Wallet from "./wallet";

type NavbarProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const NavbarComponent = ({ theme, setTheme }: NavbarProps) => {
  const [showWallet, setShowWallet] = useState(false);

  return (
    <div className="w-full flex justify-between h-20 py- px-10">
      <div className="flex space-x-10">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-primary">
          <Link href="/">metaDEX</Link>
        </span>
        <div className="self-center">
          <ul className="inline-flex space-x-10  text-mutedLight dark:text-mutedDark">
            <li className="hover:text-primary dark:hover:text-primary">
              <Link href="/swap">Swap</Link>
            </li>
            <li className="hover:text-primary dark:hover:text-primary">
              <Link href="/bridge">Bridge</Link>
            </li>
            <li className="hover:text-primary dark:hover:text-primary">
              <Link href="/pool">Pool</Link>
            </li>
            <li className="hover:text-primary dark:hover:text-primary">
              <Link href="/explorer">Explorer</Link>s
            </li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-5 self-center">
        <div className="self-center text-mutedLight dark:text-mutedDark   cursor-pointer hover:text-primary dark:hover:text-primary ">
          {theme == "dark" ? (
            <Light onClick={() => setTheme("light")} className="w-6" />
          ) : (
            <Dark onClick={() => setTheme("dark")} className="w-6" />
          )}
        </div>
        {showWallet ? (
          <Wallet />
        ) : (
          <button
            onClick={() => setShowWallet(true)}
            className="bg-primary text-textDark rounded-xl px-5 py-3"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
