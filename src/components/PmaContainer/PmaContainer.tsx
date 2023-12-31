import React from "react";
import { StyledPmaContainer } from "../styles/PmaContainer.styled";
import { CoverPage } from "../CoverPage";
import { Goal } from "../Goal";
import pmaData from '../../pma.content.json'

type PmaContainerProps = React.HTMLAttributes<HTMLDivElement>;

const PmaContainer = ({ ...rest }: PmaContainerProps) => {
  return (
    <StyledPmaContainer {...rest}>
      <CoverPage content={pmaData.coverPage}/>
      <Goal content={pmaData.goal}/>
    </StyledPmaContainer>
  );
};

export default PmaContainer;
