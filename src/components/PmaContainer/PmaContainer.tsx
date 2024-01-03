import React from "react";
import main from "../../utilities/ComponentRenderer";
import pmaData from "../../pma.content.json"; 

type PmaContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  styleName?: string; // Make styleName an optional prop
};

const PmaContainer: React.FC<PmaContainerProps> = (props) => {
  // Pass all props including optional styleName to main function
  const renderedComponents = main({ data: pmaData, ...props });

  return (
    <div {...props}>
      {/* Static content or header can go here */}
      Plan My App
      {/* Render dynamic components */}
      {renderedComponents}
    </div>
  );
};

export default PmaContainer;
