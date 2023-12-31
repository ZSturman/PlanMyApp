import React from "react";

type VisionStatementProps = {
  content: string;
};

const VisionStatement = ({ content }: VisionStatementProps) => {
  return <div>{content}</div>;
};

export default VisionStatement;
