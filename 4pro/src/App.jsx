import React from 'react';
import Appname from './components/Appname';
import Box from './components/box';
import ListOfWork from  './components/listofwork';
import Item2 from './components/item2';
import './APP1.css';
function App() {
  return (
    <center className='todo'>
      <Appname />
      <Box /> 
      <ListOfWork/>
      <Item2/>
    </center>
  );
}

export default App;
