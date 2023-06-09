import React from "react";
import Card from "@/components/card";

import { Usdt, Usdc, Dai } from "@/components/icons/icons";

type props = {
  className?: string;
  handleSelectToken: (
    name: string,
    icon: React.JSX.Element,
    type: string
  ) => void;
  fromToken?: string;
  toToken?: string;
  type: string;
};

interface token {
  icon: React.JSX.Element;
  name: string;
}

const data = [
  {
    icon: <Usdt />,
    name: "USDT",
  },
  {
    icon: <Usdc />,
    name: "USDC",
  },
  {
    icon: <Dai />,
    name: "DAI",
  },
];

const Dropdown = ({
  className,
  handleSelectToken,
  fromToken,
  toToken,
  type,
}: props) => {
  return (
    <Card
      className={
        "w-[150px] h-[auto] flex flex-col justify-between items-center  z-10 space-y-1 shadow-md shadow-slate-600 dark:shadow-black p-2" +
        " " +
        className
      }
    >
      {data?.map((token: token, key) => {
        if (
          (type == "from" && token.name == fromToken) ||
          (type == "to" && token.name == toToken)
        ) {
          return;
        } else {
          return (
            <div
              key={key}
              className="w-full border-grayLight dark:border-gray border-2 rounded-xl flex pl-6 py-2 space-x-2 text-mutedLight dark:text-mutedDark items-center"
              onClick={() => handleSelectToken(token.name, token.icon, type)}
            >
              <div className="w-6">{token.icon}</div>
              <span className="self-center">{token.name}</span>
            </div>
          );
        }
      })}
    </Card>
  );
};

export default Dropdown;
