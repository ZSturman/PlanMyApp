import React from "react";
import {Goal} from "../Goal";
import './styles/PmaContainer.css'

export interface IPmaContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  bgc?: string;
  color?: string;
  ref?: React.LegacyRef<HTMLDivElement>;
}

const PmaContainer: React.FC<IPmaContainerProps> = (props) => {
  const { children, bgc, color, style } = props;

  let _style: React.CSSProperties = style || {};

  /** Override Defaults here */
  if (bgc) _style.backgroundColor = bgc;
  if (color) _style.color = color;

  return (
    <div style={_style} {...props } className="number-one">
        <Goal />
      {children}
    </div>
  );
};

export default PmaContainer;
