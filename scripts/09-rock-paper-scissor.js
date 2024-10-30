
const array_game = ['Rock','Paper','Scissor'];
let result = JSON.parse(localStorage.getItem('score')) || {
  win:0,
  lose:0,
  tie:0
};

document.getElementById('result').innerHTML = `Score Result <br/> Win = ${result.win}; Lose = ${result.lose} ; Tie = ${result.tie}`

document.body.addEventListener('keydown', (event) =>{
  if (event.key.toLowerCase() === 'r'){
    play('Rock');
  }else if (event.key.toLowerCase()  === 'p'){
    play('Paper');
  }else if (event.key.toLowerCase()  === 's '){
    play('Scissor')
  }
});

document.getElementById('rock-button').addEventListener('click', (event) =>{
  play('Rock');
} )
document.getElementById('paper-button').addEventListener('click', (event) =>{
  play('Paper');
} )
document.getElementById('scissor-button').addEventListener('click', (event) =>{
  play('Scissor');
} )
document.getElementById('reset-button').addEventListener('click', (event) =>{
  reset();
} )
document.getElementById('autoplay-button').addEventListener('click', (event) =>{
  autoplay();
} )

            
function play(userItem){
  let cpuItem = array_game[Math.floor(Math.random()*array_game.length)]
  let resultText =""

  if (userItem === cpuItem){
    result.tie += 1
    resultText="Tie!"
  } else {
    if (userItem ==='Rock'){
      if (cpuItem === 'Scissor'){
        result.win += 1
        resultText="You Win!"
      }else{
        result.lose += 1 
        resultText="You Lose!"
      }
    }else if(userItem === 'Paper'){
      if (cpuItem === 'Rock'){
        result.win += 1;
        resultText="You Win!"
      }else{
        result.lose += 1;
        resultText="You Lose!"
      }            
    }else{ //user === Scissor
      if (cpuItem === 'Paper'){
        result.win += 1;
        resultText="You Win!";
      }else{
        result.lose += 1;
        resultText="You Lose!"
      }
    }
  }
  document.getElementById('result').innerHTML = `Score Result <br/> Win = ${result.win}; Lose = ${result.lose} ; Tie = ${result.tie}`
  document.getElementById('text').innerHTML = `${resultText} <br/> User choice = <img src="images/${userItem}-emoji.jpg" class="move-icon"> <br/> Cpu choice = <img src="images/${cpuItem}-emoji.jpg" class="move-icon"> <br/>` 
  localStorage.setItem('score',JSON.stringify(result))
}

let isautoPlay = false;

function autoplay(){
  if (!isautoPlay){
      intervalControl = setInterval(()=>{
      play((array_game[Math.floor(Math.random()*array_game.length)]), 3000);
      }, 3000);

      isautoPlay = true;
  }else{
    clearInterval(intervalControl)
    isautoPlay=false;
  }
  
  //if make the function () call just once
}

function reset(){
  result.win = 0;
  result.lose = 0;
  result.tie = 0;
  document.getElementById('result').innerHTML = `Score reset! <br/> Win = ${result.win}; Lose = ${result.lose} ; Tie = ${result.tie}`
  document.getElementById('text').innerText = ""
  //alert(`Score reset! \n\n Win = ${result.win}; Lose = ${result.lose} ; Tie = ${result.tie}`);
        
  localStorage.setItem('score',JSON.stringify(result))
}
