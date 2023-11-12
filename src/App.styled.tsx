import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {margin: 0; height: 100%; overflow: hidden}

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid #957964;
  height: 100vh;
  display: flex;
  align-items: baseline;
  flex-flow: row;
`;

export const TopPanelStyle = styled.div`
  border: 1px solid #d3d57c;
  * {
    padding: 5px;
    margin: 10px;
  }
`;

export const ScrollContainer = styled.ul`
    border: 1px solid #603140;
    padding:0;
    height: 500px;
    overflow-y: scroll;

    li {
        width:120px;
        height: 50px;
        border: 1px solid;
        list-style-type: none;
        
    }
 }
`;
