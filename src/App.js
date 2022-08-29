import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {actions,orginals,gross,comedies} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Originals'/>
      <RowPost url={actions} title='Action Movies' isSmall/>
      <RowPost url={gross} title='Most Rated ' isSmall/>
      <RowPost url={comedies} title='Comedy ' isSmall/>


      

    </div>
  );
}

export default App;
