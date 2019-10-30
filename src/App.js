import React from 'react';
import './App.css';
import { Jumbotron , Container} from 'react-bootstrap';
import GalleryCard from './components/card/Card' ;

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Gallery</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
      <GalleryCard />
    </div>
  );
}

export default App;
