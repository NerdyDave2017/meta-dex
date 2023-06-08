import React from "react";
import { Logo } from "@/components/icons/icons";

type props = {
  setShowWallet: (showWallet: boolean) => void;
};

const Wallet = ({ setShowWallet }: props) => {
  return (
    <div className="flex space-x-3">
      <div className="flex items-center  px-3 py-1 rounded-xl bg-grayLight dark:bg-gray text-textLight dark:text-textDark space-x-2">
        <Logo className="w-4" />
        <div className="cursor-pointer">Ethereum</div>
      </div>

      <div className="flex items-center justify-center space-x-3 px-3 pr-1 py-1 rounded-xl bg-grayLight dark:bg-gray">
        <div className="text-textLight dark:text-textDark ">0.79 ETH</div>
        <button
          onClick={() => setShowWallet(false)}
          className="bg-primary text-textDark rounded-xl px-4 py-2"
        >
          0x6c4...FFF9
        </button>
      </div>
    </div>
  );
};

export default Wallet;
