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
  fromTokenName?: string;
  toTokenName?: string;
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
  fromTokenName,
  toTokenName,
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
        // condition to prevent rendering of already selected token
        const fromCondition = type === "from" && token.name === toTokenName;
        const toCondition = type === "to" && token.name === fromTokenName;

        if (
          (type == "from" && token.name == fromTokenName) ||
          (type == "to" && token.name == toTokenName)
        ) {
          return;
        }
        if (fromCondition || toCondition) {
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
