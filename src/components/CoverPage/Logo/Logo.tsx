import React from "react";

type LogoProps = {
  logo: string;
};

const Logo = ({ logo }: LogoProps) => {
  return <h1>{logo}</h1>;
};

export default Logo;
