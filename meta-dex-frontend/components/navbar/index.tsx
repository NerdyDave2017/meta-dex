"use client";
import React from "react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div className="w-full flex justify-between h-20 py- px-10">
      <div className="flex">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-primary">
          <Link href="/">metaDEX</Link>
        </span>
        <div className="self-center">
          <ul className="inline-flex space-x-10 mx-10 text-mutedLight dark:text-mutedDark ">
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
      <div className="flex self-center">
        <button className="bg-primary text-textDark rounded-md px-5 py-3">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default NavbarComponent;
