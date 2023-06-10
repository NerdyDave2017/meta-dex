"use client";
import React, { useState } from "react";
import Card from "@/components/card";

import Dropdown from "./dropdown";

import {
  Settings,
  ArrowsUpDown,
  ArrowDown,
  ArrowUp,
  Usdt,
  Usdc,
  Dai,
} from "@/components/icons/icons";

const Swap = () => {
  const [fromTokenName, setFromTokenName] = useState("USDT");
  const [toTokenName, setToTokenName] = useState("USDC");

  const [fromTokenIcon, setFromTokenIcon] = useState(<Usdt />);
  const [toTokenIcon, setToTokenIcon] = useState(<Usdc />);

  const [tokenSelector, showTokenSelector] = useState({
    from: false,
    to: false,
  });

  const handleSelectToken = (
    name: string,
    icon: React.JSX.Element,
    type: string
  ) => {
    if (type === "from") {
      setFromTokenName(name);
      setFromTokenIcon(icon);
    } else {
      setToTokenName(name);
      setToTokenIcon(icon);
    }
  };

  const handleShowTokenSelector = (type: string) => {
    if (type === "from") {
      showTokenSelector({ from: !tokenSelector.from, to: false });
    } else {
      showTokenSelector({ from: false, to: !tokenSelector.to });
    }
  };

  const handleAlternator = () => {
    const tempName = fromTokenName;
    const tempIcon = fromTokenIcon;

    setFromTokenName(toTokenName);
    setFromTokenIcon(toTokenIcon);

    setToTokenName(tempName);
    setToTokenIcon(tempIcon);
  };

  return (
    <div className="w-full h-[calc(100vh-86px)] flex items-center justify-center">
      <Card className="w-[546px] h-auto px-5 py-8 flex-col space-y-7">
        {/* Swap heading and settings */}
        <div className="w-full flex justify-between">
          <div className="whitespace-nowrap text-2xl font-semibold text-textLight dark:text-textDark">
            Swap
          </div>

          <Settings className="w-8 text-textLight dark:text-textDark cursor-pointer" />
        </div>

        {/* Swap Tokens Container */}
        <div className="flex-col space-y-3 relative">
          {/* Swap From Token */}
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
              <div
                className="flex justify-center items-center space-x-1 cursor-pointer relative"
                onClick={() => handleShowTokenSelector("from")}
              >
                <div className="w-8">{fromTokenIcon}</div>
                <div className="text-xl text-textLight dark:text-textDark">
                  {fromTokenName}
                </div>

                {tokenSelector.from ? (
                  <ArrowUp className="w-6 text-textLight dark:text-textDark" />
                ) : (
                  <ArrowDown className="w-6 text-textLight dark:text-textDark" />
                )}

                {tokenSelector.from && (
                  <Dropdown
                    className="absolute top-[calc(100%+10px)]"
                    fromTokenName={fromTokenName}
                    toTokenName={toTokenName}
                    type="from"
                    handleSelectToken={handleSelectToken}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Swap To Token */}
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

            <div className="flex space-y-5 justify-end items-center w-auto h-full">
              {/* <div className="text-textLight dark:text-textDark font-bold cursor-pointer">
                Max
              </div> */}
              <div
                className="flex justify-center items-center space-x-1 cursor-pointer relative"
                onClick={() => handleShowTokenSelector("to")}
              >
                <div className="w-8">{toTokenIcon}</div>
                <div className="text-xl text-textLight dark:text-textDark">
                  {toTokenName}
                </div>
                {tokenSelector.to ? (
                  <ArrowUp className="w-6 text-textLight dark:text-textDark" />
                ) : (
                  <ArrowDown className="w-6 text-textLight dark:text-textDark" />
                )}
                {tokenSelector.to && (
                  <Dropdown
                    className="absolute top-[calc(100%+10px)]"
                    fromTokenName={fromTokenName}
                    toTokenName={toTokenName}
                    type="to"
                    handleSelectToken={handleSelectToken}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Alternator */}
          <div
            className="bg-accent dark:bg-accentDark rounded-xl p-4 box-content w-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] cursor-pointer"
            onClick={handleAlternator}
          >
            <ArrowsUpDown className="w-6 text-primary" />
          </div>
        </div>

        {/* Swap Button */}
        <button className="bg-primary text-textDark rounded-xl px-5 py-3 w-full">
          Swap
        </button>
      </Card>
    </div>
  );
};

export default Swap;
