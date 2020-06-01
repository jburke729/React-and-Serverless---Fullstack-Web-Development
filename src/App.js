import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';
import Home from './pages/Home';

import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { GlobalStyle } from './styled/Global';
import { useAuth0 } from './auth';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled/Themes';
import useTheme from './hooks/UseTheme';
import Loader from './styled/Loader';
function App() {
  const { loading } = useAuth0();

  const [theme, toggleTheme] = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Main>
          {loading && (
            <Loader>
              <p>Loading...</p>
            </Loader>
          )}
          {!loading && (
            <Container>
              <Navbar toggleTheme={toggleTheme} />
              <Switch>
                <Route path="/game" component={Game} />
                <Route path="/highScores" component={HighScores} />
                <Route path="/gameOver" component={GameOver} />
                <Route path="/" component={Home} />
              </Switch>
            </Container>
          )}
        </Main>
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
}

export default App;
