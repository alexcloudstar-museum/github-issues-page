import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  min-height: 100vh;
}

.App {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

li {
  list-style-type: none;
}
`;

export default GlobalStyle;
