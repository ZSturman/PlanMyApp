import React from "react";

type ProjectTitleProps = {
  title: string;
};

const ProjectTitle = ({ title }: ProjectTitleProps) => {
  return <h1>{title}</h1>;
};

export default ProjectTitle;
