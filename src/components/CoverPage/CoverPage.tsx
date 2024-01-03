import React from "react";
import main from "../../utilities/ComponentRenderer";
import  ComponentsType  from "../../utilities/types/ComponentsType";
import  ContentType  from "../../utilities/types/ContentType";

type CoverPageProps = React.HTMLAttributes<HTMLDivElement> & {
  styleName?: string;
  components? : ComponentsType[];
  contents?: ContentType[];
};

const CoverPage: React.FC<CoverPageProps> = (props) => {
  const renderedComponents = main({ data: props, ...props });

  return (
    <div>
      {/* Static content or header can go here */}
      Cover Page
      {/* Render dynamic components */}
      {renderedComponents}
    </div>
  );
};

export default CoverPage;
