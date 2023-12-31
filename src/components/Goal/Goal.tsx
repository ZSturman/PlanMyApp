import React from "react";
import { CompetitiveAnalysis } from "./CompetitiveAnalysis";
import { Purpose } from "./Purpose";
import {SuccessMetrics} from "./SuccessMetrics";
import {TargetAudience} from "./TargetAudience";
import {VisionStatement} from "./VisionStatement";

type GoalProps = {
  content: {
    purpose: string;
    visionStatement: string;
    targetAudience: string;
    successMetrics: string[];
    competetiveAnalysis: string;
  };
};

const Goal = ({ content }: GoalProps) => {
  return (
    <div >
      <Purpose content={content.purpose} />
      <VisionStatement content={content.visionStatement} />
      <TargetAudience content={content.targetAudience} />
      <SuccessMetrics metrics={content.successMetrics} />
      <CompetitiveAnalysis content={content.competetiveAnalysis} />
    </div>
  );
};

export default Goal;
