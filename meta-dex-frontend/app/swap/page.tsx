import React from "react";
import Card from "@/components/card";
import {
  Settings,
  ArrowsUpDown,
  ArrowDown,
  Usdt,
  Usdc,
  Dai,
} from "@/components/icons/icons";

const Swap = () => {
  return (
    <div className="w-full h-[calc(100vh-86px)] flex items-center justify-center">
      <Card className="w-[546px] h-auto px-5 py-8 flex-col space-y-7">
        <div className="w-full flex justify-between">
          <div className="whitespace-nowrap text-2xl font-semibold text-textLight dark:text-textDark">
            Swap
          </div>

          <Settings className="w-8 text-textLight dark:text-textDark cursor-pointer" />
        </div>

        <div className="flex-col space-y-3 relative">
          <div className="w-full h-[150px] border-grayLight dark:border-gray border-2 rounded-xl flex px-5 py-3 space-x-3">
            <div className="flex-col">
              <div className="text-mutedLight font-semibold dark:text-mutedDark">
                From
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full text-6xl font-extralight text-textLight dark:text-textDark bg-transparent  appearance-none"
                  min="0"
                />
              </div>
              <div className="text-mutedLight dark:text-mutedDark">
                Balance: <span className="">0.00</span>
              </div>
            </div>

            <div className="flex space-y-5 justify-end items-center w-auto h-full ">
              {/* <div className="text-textLight dark:text-textDark font-bold cursor-pointer">
                Max
              </div> */}
              <div className="flex justify-center items-center space-x-1 cursor-pointer">
                <Usdt className="w-8" />
                <div className="text-xl text-textLight dark:text-textDark">
                  USDT
                </div>
                <ArrowDown className="w-6 text-textLight dark:text-textDark" />
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] border-grayLight dark:border-gray border-2 rounded-xl flex px-5 py-3 space-x-3">
            <div className="flex-col">
              <div className="text-mutedLight font-semibold dark:text-mutedDark">
                To
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full text-6xl font-extralight text-textLight dark:text-textDark bg-transparent  appearance-none"
                  min="0"
                />
              </div>
              <div className="text-mutedLight dark:text-mutedDark">
                Balance: <span className="">0.00</span>
              </div>
            </div>

            <div className="flex space-y-5 justify-end items-center w-auto h-full ">
              {/* <div className="text-textLight dark:text-textDark font-bold cursor-pointer">
                Max
              </div> */}
              <div className="flex justify-center items-center space-x-1 cursor-pointer">
                <Usdc className="w-8" />
                <div className="text-xl text-textLight dark:text-textDark">
                  USDC
                </div>
                <ArrowDown className="w-6 text-textLight dark:text-textDark" />
              </div>
            </div>
          </div>

          <div className="bg-accent dark:bg-accentDark rounded-xl p-4 box-content w-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%]">
            <ArrowsUpDown className="w-6 text-primary" />
          </div>
        </div>

        <button className="bg-primary text-textDark rounded-xl px-5 py-3 w-full">
          Swap
        </button>
      </Card>
    </div>
  );
};

export default Swap;
