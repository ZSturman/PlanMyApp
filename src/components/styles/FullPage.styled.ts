import styled from "styled-components";

type StyledFullPage = React.CSSProperties;

export const StyledFullPage = styled.div.attrs(() => ({
  className: "full-page",
}))<StyledFullPage>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
        
        `
