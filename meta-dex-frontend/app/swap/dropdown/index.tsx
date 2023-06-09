import React from "react";
import Card from "@/components/card";

type props = {
  className?: string;
  handleSelectToken?: (token: string) => void;
  data: Array<token>;
};

interface token {
  icon: React.ReactNode;
  name: string;
}

const Dropdown = ({ className, handleSelectToken, data }: props) => {
  return (
    <Card
      className={
        "w-[150px] h-[auto] flex flex-col justify-between items-center  z-10 space-y-1 shadow-md shadow-slate-600 dark:shadow-black p-2" +
        " " +
        className
      }
    >
      {data?.map((token: token, key) => (
        <div
          key={key}
          className="w-full border-grayLight dark:border-gray border-2 rounded-xl flex px-1 py-2 space-x-2 text-mutedLight dark:text-mutedDark items-center justify-items-start"
        >
          {token.icon}
          <span>{token.name}</span>
        </div>
      ))}
    </Card>
  );
};

export default Dropdown;
