import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';
import Home from './pages/Home';

import { Container } from './styled/Container';
import { Main } from './styled/Main';
import {GlobalStyle} from './styled/Global';
import { useAuth0 } from './auth';
function App() {
  const { loading } = useAuth0();
  return (
    <Router>
      <GlobalStyle />
      <Main>
        {loading && <p>Loading...</p>}
        {!loading && (
          <Container>
            <Navbar />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/highScores" component={HighScores} />
              <Route path="/gameOver" component={GameOver} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        )}
      </Main>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
