import React from "react";
import { StyledCoverPage } from "../styles/CoverPage.styled";
import { StyledFullPage } from "../styles/FullPage.styled";

import { ProjectTitle } from "./ProjectTitle";
import { Logo } from "./Logo";
import { Contributors } from "./Contributors";

type CoverPageProps = {
  content: {
    title: string;
    logo: string;
    contributors: { role: string; name: string }[];
  };
};

const CoverPage = ({ content }: CoverPageProps) => {
  return (
    <StyledFullPage>
      <StyledCoverPage>
        <ProjectTitle title={content.title} />
        <Logo logo={content.logo} />
        <Contributors contributors={content.contributors} />
      </StyledCoverPage>
    </StyledFullPage>
  );
};

export default CoverPage;
