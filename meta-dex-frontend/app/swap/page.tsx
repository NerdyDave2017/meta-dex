import React from "react";
import Card from "@/components/card";
import { Settings } from "@/components/icons/icons";

const Swap = () => {
  return (
    <div className="w-full h-[calc(100vh-86px)] flex items-center justify-center">
      <Card className="w-[546px] h-[600px] px-5 py-8 flex-col space-y-5">
        <div className="w-full flex justify-between">
          <div className="whitespace-nowrap text-2xl font-semibold text-textLight dark:text-textDark">
            Swap
          </div>

          <Settings className="w-8 text-textLight dark:text-textDark cursor-pointer" />
        </div>
        <div className="w-full h-[150px] border-grayLight dark:border-gray border-2 rounded-xl"></div>
        <div className="w-full h-[150px] border-grayLight dark:border-gray border-2 rounded-xl"></div>

        <button className="bg-primary text-textDark rounded-xl px-5 py-3 w-full">
          Swap
        </button>
      </Card>
    </div>
  );
};

export default Swap;
