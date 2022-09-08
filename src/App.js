import React from 'react'
import './App.css';




function App() {
  let myRef = React.createRef()
  let winRef = React.createRef()
  let playerRef = React.createRef()
  let firstRef = React.createRef()
  let secondRef = React.createRef()
  let nameFirsRef = React.createRef()
  let nameSecondRef = React.createRef()
  let player = 'Player1'
  let xo ='X'
  let stop = ''
  let player1 = 'player1'
  let player2 = 'player2'
  const winner ={
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    h: "h",
    j: "j",
    g: "g",
  }
  function choosePlayerName (){
    if(firstRef.current.value!=''){
    player1 = firstRef.current.value
    nameFirsRef.current.innerText = player1
    playerRef.current.innerText= player1}
    firstRef.current.value =''
    if(secondRef.current.value!='')
    player2 = secondRef.current.value
    nameSecondRef.current.innerText =player2
    secondRef.current.value=''

    
  }

 function paint(event) {


  if(stop==='' && event.target.innerText === ''){
  let idElem = event.target.id
  event.target.innerText = xo
  winner[idElem] = xo
  changeXO()
  changePlayer()
  playerRef.current.innerText= player
  win()
  

}
}

function win(){
    if(winner.a === winner.b && winner.b === winner.c ||
       winner.d === winner.e && winner.e === winner.f || 
       winner.h === winner.j && winner.j === winner.g ||
       winner.a === winner.d && winner.d === winner.h ||
       winner.b === winner.e && winner.e === winner.j ||
       winner.c === winner.f && winner.f === winner.g ||
       winner.a === winner.e && winner.e === winner.g ||
       winner.c === winner.e && winner.e === winner.h ){
    console.log('WIN')
    winRef.current.innerText =`WIN ${changeXO()}`
    playerRef.current.innerText = `WIN ${changePlayer()}`
    clear()
      }
     else if (winner.a!='a' && winner.b!='b' && winner.c!='c' && winner.d!='d' && winner.e!='e' &&
              winner.f!='f' && winner.h!='h' && winner.j!='j' &&winner.g!='g' ) {
                winRef.current.innerText = 'Draw'
                playerRef.current.innerText = 'Draw'
              }
}

function clear(){
  for(let key in winner){
    winner[key] = `${key}`
  }
  stop = "stop"
  xo = 'X'
  
 
}

function clearAll (){
  clear()
  for (let i = 0; i<9; i++){
  myRef.current.children[i].innerText =''
  }
  stop = ''
  winRef.current.innerText =''
  playerRef.current.innerText = 'Player1'
  player1 = 'Player1'
  player2 = 'Player2'
  nameFirsRef.current.innerText = 'Player1'
  nameSecondRef.current.innerText = 'Player2'
 
}
function changePlayer (){
  if(xo === "X"){
    player = player1
  }
  else if (xo === "O"){
    player = player2
  }
  return player
}

function changeXO() {
  if (xo === 'X'){
    xo = 'O'
  }
  else if (xo === 'O'){
    xo = 'X'
  }
  return xo
}

  return (
    <div className="App">
      <div className="head">
      <h1>XXXXXXXXX</h1>
      <h1 className='playerChange' ref={playerRef}>Player1</h1>
      <h1>OOOOOOOOO</h1>
      </div>
      <hr />
      <div className="fildGame">
      <div className="player" >
        <div className="pictName" ref={nameFirsRef}>Player1</div>
        <p> Play to X<br /> Enter your name:</p>
        <input type="text" ref={firstRef} />
        <div className="enter" onClick={choosePlayerName}>ENTER</div>
      </div>
     <div className="net" ref={myRef}>
      <div className="cell" id="a" onClick={paint}></div>
      <div className="cell" id="b" onClick={paint}></div>
      <div className="cell" id="c" onClick={paint}></div>
      <div className="cell" id="d" onClick={paint}></div>
      <div className="cell" id="e" onClick={paint}></div>
      <div className="cell" id="f" onClick={paint}></div>
      <div className="cell" id="h" onClick={paint}></div>
      <div className="cell" id="j" onClick={paint}></div>
      <div className="cell" id="g" onClick={paint}></div>
     </div>
     <div className="player">
     <div className="pictName" ref={nameSecondRef}>Player2</div>
        <p>Play to O<br /> Enter your name:</p>
        <input type="text" ref={secondRef}/>
        <div className="enter" onClick={choosePlayerName}>ENTER</div>
     </div>
     </div>
     
     <hr />
       <div className="sp">
       <button onClick={clearAll}>Clear</button>
       <div className="win" ref={winRef}></div>
       </div>
    </div>
  );
}

export default App;
