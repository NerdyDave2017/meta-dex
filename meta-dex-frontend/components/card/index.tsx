import React from "react";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: props) => {
  return (
    <div
      className={"bg-cardLight dark:bg-cardDark rounded-xl" + " " + className}
    >
      {children}
    </div>
  );
};

export default Card;
