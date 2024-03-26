import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';

Styles.propTypes = {
  children: PropTypes.node.isRequired,
};

function Styles({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Styles;
