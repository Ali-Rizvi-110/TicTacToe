import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cell from "./Cell.jsx"

function Navbar(){
  return (
    <div className="nav">
      <h1>Tic Tac Toe</h1>
    </div>
  )
}


function App() {

  const [turn, nextTurn] = React.useState(0);
  const [arr, nextArr] = React.useState([0,0,0,0,0,0,0,0,0])
  const [win, nextWin] = React.useState(0);
  function check(){
    for(let i=0; i<3; ++i){
      if(arr[i] && arr[i]===arr[i+3] && arr[i+3]===arr[i+6]){
        return 1;
      }
    }
    for(let i=0; i<9; i+=3){
      if(arr[i] && arr[i]===arr[i+1] && arr[i+1]===arr[i+2]){
        return 1;
      }
    }
    if(arr[0] && arr[0]===arr[4] && arr[4]===arr[8]){
      return 1;
    }
    if(arr[2] && arr[2]===arr[4] && arr[4]===arr[6]){
      return 1;
    }
    let ok = true;
    for(let i=0; i<9; ++i)
    {
        if(arr[i]==0)ok = false;
    }
    if(ok)return -1;
    return 0;
  }
  React.useEffect(function(){
    // console.log(check());
    if(check()==-1){
      nextWin(-1);
    }else if(check()){
      nextWin(1);
    }
  }, [flip])

  function rel(){
    window.location.reload(true);
  }
  
  function flip(id){
    // console.log(id)
    const arr1 = [0,0,0,0,0,0,0,0,0]
    for(let i=0; i<9; ++i){
      arr1[i] = arr[i]
    }
    arr1[id] = (turn? 1: 2);
    nextArr(arr1);
    nextTurn(!turn);
  }

  return (
    <div className="Appp">
      {/* {arr} */}
      <Navbar />
      <div className='App'>
        <Cell turn = {turn} fl = {flip} id = {0} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {1} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {2} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {3} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {4} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {5} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {6} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {7} win = {win} />
        <Cell turn = {turn} fl = {flip} id = {8} win = {win} />
      </div>
      <div>
      {win===-1 && <h1 style = {{color: "#d81159"}}>Draw!</h1> }
      {win===1 && <h1 style = {{color: turn? "#03045e" : "red"}}> {turn? "O" : "X"} WINS!</h1>}
      {win===0 && <h1 style={{color: "black"}}>Player {turn? "X": "O"}</h1> }

        <br />
        <button onClick = {rel}>Reset</button>
      </div>
    </div>
  )
}

export default App
