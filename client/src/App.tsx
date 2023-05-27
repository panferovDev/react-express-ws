import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AppNavBAr from './components/ui/AppNavBAr';

function App(): JSX.Element {
  return (
    <Container>
      <AppNavBAr />
    </Container>
  );
}

export default App;
