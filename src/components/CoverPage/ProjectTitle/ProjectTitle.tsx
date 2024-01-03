import React from "react";
import main from "../../../utilities/ComponentRenderer";
import  ComponentsType  from "../../../utilities/types/ComponentsType";
import  ContentType  from "../../../utilities/types/ContentType";

type ProjectTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  styleName?: string;
  components? : ComponentsType[];
  contents?: ContentType[];
};

const ProjectTitle: React.FC<ProjectTitleProps> = (props) => {
  const renderedComponents = main({ data: props, ...props });

  return (
    <div>
      {/* Static content or header can go here */}
      Project Title
      {/* Render dynamic components */}
      {renderedComponents}
    </div>
  );
};

export default ProjectTitle;
