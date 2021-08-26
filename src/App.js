import Child from './Components/child';
import Parent from './Components/parent';
import Counter from './Components/counter';
import Header from './Components/Header';
import {useState} from 'react';
import './App.css';
import Container from './Components/Container';

function App(){
  const [mainCon,mainConChange]=useState('0');
  const [txtColor,txtColorChange]=useState('black');

  return (
    <div className="App">
      <Header mainConChange={mainConChange}/>
      <div style={{padding:"2rem"}}>{mainCon}</div>
      
      <Container color={txtColor}/>
      <button onClick={()=>{txtColorChange('red')}}>color Red</button>
      <button onClick={()=>{txtColorChange('black')}}>color Black</button>
      <Parent>
        <Counter></Counter>
        <Child name="react" color="red" isSpecial={true}/>
        <Child color="pink"/>
      </Parent>
    </div>
  );
}

export default App;
