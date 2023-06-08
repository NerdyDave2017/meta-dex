import React from "react";
import Card from "@/components/card";

type props = {
  className?: string;
};

const Dropdown = ({ className }: props) => {
  return (
    <Card
      className={
        "w-[150px] h-[auto] flex flex-col justify-between items-center  z-10 space-y-1 shadow-md shadow-slate-600 dark:shadow-black p-2" +
        " " +
        className
      }
    >
      <div className="w-full border-grayLight dark:border-gray border-2 rounded-xl flex px-1 py-2 space-x-3 text-textLight dark:text-textDark items-center justify-center">
        USDT
      </div>
      <div className="w-full border-grayLight dark:border-gray border-2 rounded-xl flex px-1 py-2 space-x-3 text-textLight dark:text-textDark items-center justify-center">
        USDC
      </div>
      <div className="w-full border-grayLight dark:border-gray border-2 rounded-xl flex px-1 py-2 space-x-3 text-textLight dark:text-textDark items-center justify-center">
        DAI
      </div>
    </Card>
  );
};

export default Dropdown;
