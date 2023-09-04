import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Jumbotron from './Components/Jumbotron';
import MyMain from './Components/MyMain';





function App() {
  return (
    <div className="App">
      <MyNav/>
      <Jumbotron/>
      <MyMain/>
      <MyFooter/>
    </div>
  );
}

export default App;
