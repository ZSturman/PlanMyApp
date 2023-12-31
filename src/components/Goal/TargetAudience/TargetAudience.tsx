import React from "react";

type TargetAudienceProps = {
  content: string;
};

const TargetAudience = ({ content }: TargetAudienceProps) => {
  return <div>{content}</div>;
};

export default TargetAudience;
