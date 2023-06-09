import React from "react";

type props = {
  children: React.ReactNode;
};

const Container = ({ children }: props) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
