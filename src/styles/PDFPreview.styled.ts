import styled from "styled-components";
import clsx from "clsx";

type PDFPreviewProps = React.CSSProperties & {
  className?: string;
};

const PDFPreview = styled.div.attrs(({ className }) => ({
  className: clsx("pma-container", className),
}))<PDFPreviewProps>`
  ${({
    fontFamily,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    backgroundColor,
    height,
    width,
    minHeight,
    boxShadow,
  }) => `

    position: relative;
    font-family: ${fontFamily || "'Roboto', sans-serif"};
    display: ${display || "flex"};
    flex-direction: ${flexDirection || "column"};
    align-items: ${alignItems || "center"};
    justify-content: ${justifyContent || "center"};
    background-color: ${backgroundColor || "red"};
    height: ${height || "100%"};
    width: ${width || "210mm"};
    min-height: ${minHeight || "297mm"};
    box-shadow: ${boxShadow || "0 0 10px 0 rgba(0, 0, 0, 0.5)"};
    `}
`;

export default PDFPreview;