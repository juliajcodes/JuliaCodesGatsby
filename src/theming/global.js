import { createGlobalStyle } from 'styled-components';
import { Heading } from '../theming/styles';
import "@fontsource/spartan/400.css" // Weight 500.
import "@fontsource/spartan/600.css" // Weight 500.
import "@fontsource/spartan/700.css" // Weight 500.
import "@fontsource/spartan/900.css" // Weight 500.


const GlobalStyles = createGlobalStyle`

    * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 99;
    position:relative;
  }
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'Spartan', sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.heading};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    font-family: 'Spartan', sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    
    ${Heading}{
      color: ${({ theme }) => theme.accent};
    }
  }
`;

export default GlobalStyles;