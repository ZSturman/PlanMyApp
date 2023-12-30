import React from "react";
import {CompetitiveAnalysis} from "./CompetitiveAnalysis";
import Purpose from "./Purpose";
import {SuccessMetrics} from "./SuccessMetrics";
import {TargetAudience} from "./TargetAudience";
import {VisionStatement} from "./VisionStatement";

export interface IGoalProps {}

const Goal: React.FC<IGoalProps> = () => {
  return (
    <div>
      Goal
      <CompetitiveAnalysis />
      <Purpose />
      <SuccessMetrics />
      <TargetAudience />
      <VisionStatement />
    </div>
  );
};

export default Goal;
