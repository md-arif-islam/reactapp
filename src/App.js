// import './assets/css/dark.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';

export default function App() {
    const theme = {
        main: 'white',
    };
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Tutorial />
        </ThemeProvider>
    );
}
