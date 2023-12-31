import React from "react";

type SuccessMetricsProps = {
  metrics: string[];
};

const SuccessMetrics = ({ metrics }: SuccessMetricsProps) => {
  return (
    <ul>
      {metrics.map((metric, index) => (
        <li key={index}>{metric}</li>
      ))}
    </ul>
  );
};

export default SuccessMetrics;
