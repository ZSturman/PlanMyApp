import React from "react";
import main from "../../../utilities/ComponentRenderer";
import  ComponentsType  from "../../../utilities/types/ComponentsType";
import  ContentType  from "../../../utilities/types/ContentType";

type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
  styleName?: string;
  components? : ComponentsType[];
  contents?: ContentType[];
};

const Logo: React.FC<LogoProps> = (props) => {
  const renderedComponents = main({ data: props, ...props });

  return (
    <div>
      {/* Static content or header can go here */}
      Logo
      {/* Render dynamic components */}
      {renderedComponents}
    </div>
  );
};

export default Logo;
