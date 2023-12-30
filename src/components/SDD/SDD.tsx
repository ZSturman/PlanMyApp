import React from "react";
import {Goal} from "../Goal";

export interface ISDDProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  bgc?: string;
  color?: string;
}

const SDD: React.FC<ISDDProps> = (props) => {
  const { children, bgc, color, style } = props;

  let _style: React.CSSProperties = style || {};

  /** Override Defaults here */
  if (bgc) _style.backgroundColor = bgc;
  if (color) _style.color = color;

  return (
    <button style={_style} {...props}>
        <Goal />
      {children}
    </button>
  );
};

export default SDD;
