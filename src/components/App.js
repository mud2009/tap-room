import React from 'react';
import Header from './Header';
import TapControl from './TapControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className='main-container'>
        <Header />
        <TapControl />
      </div>
    </React.Fragment>
  );
}

export default App;
