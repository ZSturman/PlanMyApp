import styled from "styled-components";
import clsx from "clsx";

type StyledCoverPageProps = React.CSSProperties & {
  className?: string;
};

export const StyledCoverPage = styled.div.attrs(({ className }) => ({
  className: clsx("pma-container", className),
}))<StyledCoverPageProps>`
  ${({

    backgroundColor,

  }) => `
      background-color: ${backgroundColor || "green"};
    `}
`;
