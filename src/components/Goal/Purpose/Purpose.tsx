import React from "react";

type PurposeProps = {
  content: string;
};

const Purpose = ({ content }: PurposeProps) => {
  return <div>{content}</div>;
};

export default Purpose;
