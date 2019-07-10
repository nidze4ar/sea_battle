import React, {Component} from 'react'
import './index.css'
import {field, fillField} from './sea_battle_logic'
import {boom} from './webAudio'

let count = 0;

class App extends Component {

  state={
    player_field: field,
    cpu_field: field
  }
  
  componentDidMount(){
    const {player_field, cpu_field} = this.state;
    this.setState({
      player_field: fillField(player_field),
      cpu_field: fillField(cpu_field)
    })
    this.hideWater();
    this.cpuRound();
  }

  startRound = ({target}) => {
    boom();
    count++;
    document.getElementById('alert').classList.remove('open');
    if(target.innerHTML === '1' && target.nodeName === 'TD') {
      target.innerHTML = String.fromCharCode(42305);
      this.hideWater();
      return;
    } else if(target.nodeName !== 'TD') {
      return;
    } else {
    target.innerHTML = String.fromCharCode(8416);
    this.hideWater();
    document.getElementById('alert').classList.add('open'); 
    this.cpuRound()
    }
  }

  cpuRound = () => {
    if(count<100) {  
    let coord = [Math.round(Math.random() * 9), Math.round(Math.random() * 9)]
    let table = document.getElementById(coord[0])
    if(table.children[coord[1]].innerHTML === String.fromCharCode(8416) || table.children[coord[1]].innerHTML === String.fromCharCode(42431)) {
      this.cpuRound()
    } else { 
    if(table.children[coord[1]].innerHTML === '1') {
      table.children[coord[1]].innerHTML = String.fromCharCode(42517);
      this.cpuRound()
    }
    table.children[coord[1]].innerHTML = String.fromCharCode(8416);
      }
    } else {
      alert('GAme Over!')
    }      
  }

  hideWater = () => {
    let table = document.getElementById('player_field');
    table.querySelectorAll('td').forEach(v=>{
      if(v.innerHTML === '0' || v.innerHTML === String.fromCharCode(8416)) {
        v.classList.add('water');
        if(v.innerHTML==='0') {
          v.innerHTML = String.fromCharCode(42304)
        } 
      } else if(v.innerHTML === '1') {
        v.innerHTML = String.fromCharCode(42275)
      }
    })
    let cpu_table = document.getElementById('cpu_field');    
    cpu_table.querySelectorAll('td').forEach(v=>{
      if(v.innerHTML === '0' || v.innerHTML === '1') {
        v.classList.add('cpu_water') 
      } else {
        v.classList.remove('cpu_water') 
      }     
    })
  }
  
   render(){
     const {player_field, cpu_field} = this.state;   
       return(
          <div className='sea_battle'>
          <h1>Sea Battle</h1>
          <h2 id='alert'>ЗАЛП!</h2>
            <div  className='fields'>
              <table  className='player_field'>
                  <thead>
                  <tr>
                    <th>Player</th>     
                  </tr>
                </thead>     
                <tbody id='player_field'>                              
                  <tr id='0'>
                    <td>{player_field[0][0]}</td>
                    <td>{player_field[0][1]}</td>
                    <td>{player_field[0][2]}</td>
                    <td>{player_field[0][3]}</td>
                    <td>{player_field[0][4]}</td>
                    <td>{player_field[0][5]}</td>
                    <td>{player_field[0][6]}</td>
                    <td>{player_field[0][7]}</td>
                    <td>{player_field[0][8]}</td>
                    <td>{player_field[0][9]}</td>                  
                  </tr>
                  <tr id='1'>
                    <td>{player_field[1][0]}</td>
                    <td>{player_field[1][1]}</td>
                    <td>{player_field[1][2]}</td>
                    <td>{player_field[1][3]}</td>
                    <td>{player_field[1][4]}</td>
                    <td>{player_field[1][5]}</td>
                    <td>{player_field[1][6]}</td>
                    <td>{player_field[1][7]}</td>
                    <td>{player_field[1][8]}</td>
                    <td>{player_field[1][9]}</td>   
                  </tr>
                  <tr id='2'>
                    <td>{player_field[2][0]}</td>
                    <td>{player_field[2][1]}</td>
                    <td>{player_field[2][2]}</td>
                    <td>{player_field[2][3]}</td>
                    <td>{player_field[2][4]}</td>
                    <td>{player_field[2][5]}</td>
                    <td>{player_field[2][6]}</td>
                    <td>{player_field[2][7]}</td>
                    <td>{player_field[2][8]}</td>
                    <td>{player_field[2][9]}</td>
                  </tr>
                  <tr id='3'>
                    <td>{player_field[3][0]}</td>
                    <td>{player_field[3][1]}</td>
                    <td>{player_field[3][2]}</td>
                    <td>{player_field[3][3]}</td>
                    <td>{player_field[3][4]}</td>
                    <td>{player_field[3][5]}</td>
                    <td>{player_field[3][6]}</td>
                    <td>{player_field[3][7]}</td>
                    <td>{player_field[3][8]}</td>
                    <td>{player_field[3][9]}</td>
                  </tr>
                  <tr id='4'>
                    <td>{player_field[4][0]}</td>
                    <td>{player_field[4][1]}</td>
                    <td>{player_field[4][2]}</td>
                    <td>{player_field[4][3]}</td>
                    <td>{player_field[4][4]}</td>
                    <td>{player_field[4][5]}</td>
                    <td>{player_field[4][6]}</td>
                    <td>{player_field[4][7]}</td>
                    <td>{player_field[4][8]}</td>
                    <td>{player_field[4][9]}</td>
                  </tr>
                  <tr id='5'>
                    <td>{player_field[5][0]}</td>
                    <td>{player_field[5][1]}</td>
                    <td>{player_field[5][2]}</td>
                    <td>{player_field[5][3]}</td>
                    <td>{player_field[5][4]}</td>
                    <td>{player_field[5][5]}</td>
                    <td>{player_field[5][6]}</td>
                    <td>{player_field[5][7]}</td>
                    <td>{player_field[5][8]}</td>
                    <td>{player_field[5][9]}</td>
                  </tr>
                  <tr id='6'>
                    <td>{player_field[6][0]}</td>
                    <td>{player_field[6][1]}</td>
                    <td>{player_field[6][2]}</td>
                    <td>{player_field[6][3]}</td>
                    <td>{player_field[6][4]}</td>
                    <td>{player_field[6][5]}</td>
                    <td>{player_field[6][6]}</td>
                    <td>{player_field[6][7]}</td>
                    <td>{player_field[6][8]}</td>
                    <td>{player_field[6][9]}</td>
                    
                  </tr>
                  <tr id='7'>
                    <td>{player_field[7][0]}</td>
                    <td>{player_field[7][1]}</td>
                    <td>{player_field[7][2]}</td>
                    <td>{player_field[7][3]}</td>
                    <td>{player_field[7][4]}</td>
                    <td>{player_field[7][5]}</td>
                    <td>{player_field[7][6]}</td>
                    <td>{player_field[7][7]}</td>
                    <td>{player_field[7][8]}</td>
                    <td>{player_field[7][9]}</td>
                  </tr>
                  <tr id='8'>
                    <td>{player_field[8][0]}</td>
                    <td>{player_field[8][1]}</td>
                    <td>{player_field[8][2]}</td>
                    <td>{player_field[8][3]}</td>
                    <td>{player_field[8][4]}</td>
                    <td>{player_field[8][5]}</td>
                    <td>{player_field[8][6]}</td>
                    <td>{player_field[8][7]}</td>
                    <td>{player_field[8][8]}</td>
                    <td>{player_field[8][9]}</td>
                  </tr>
                  <tr id='9'>
                    <td>{player_field[9][0]}</td>
                    <td>{player_field[9][1]}</td>
                    <td>{player_field[9][2]}</td>
                    <td>{player_field[9][3]}</td>
                    <td>{player_field[9][4]}</td>
                    <td>{player_field[9][5]}</td>
                    <td>{player_field[9][6]}</td>
                    <td>{player_field[9][7]}</td>
                    <td>{player_field[9][8]}</td>
                    <td>{player_field[9][9]}</td>
                  </tr>
                </tbody>
              </table>

              <table  className='cpu_field'>
                  <thead>
                  <tr>
                    <th>CPU</th>     
                  </tr>
                </thead>     
                <tbody onClick={this.startRound}  id='cpu_field'>                              
                  <tr>
                    <td>{cpu_field[0][0]}</td>
                    <td>{cpu_field[0][1]}</td>
                    <td>{cpu_field[0][2]}</td>
                    <td>{cpu_field[0][3]}</td>
                    <td>{cpu_field[0][4]}</td>
                    <td>{cpu_field[0][5]}</td>
                    <td>{cpu_field[0][6]}</td>
                    <td>{cpu_field[0][7]}</td>
                    <td>{cpu_field[0][8]}</td>
                    <td>{cpu_field[0][9]}</td>                  
                  </tr>
                  <tr>
                    <td>{cpu_field[1][0]}</td>
                    <td>{cpu_field[1][1]}</td>
                    <td>{cpu_field[1][2]}</td>
                    <td>{cpu_field[1][3]}</td>
                    <td>{cpu_field[1][4]}</td>
                    <td>{cpu_field[1][5]}</td>
                    <td>{cpu_field[1][6]}</td>
                    <td>{cpu_field[1][7]}</td>
                    <td>{cpu_field[1][8]}</td>
                    <td>{cpu_field[1][9]}</td>   
                  </tr>
                  <tr>
                    <td>{cpu_field[2][0]}</td>
                    <td>{cpu_field[2][1]}</td>
                    <td>{cpu_field[2][2]}</td>
                    <td>{cpu_field[2][3]}</td>
                    <td>{cpu_field[2][4]}</td>
                    <td>{cpu_field[2][5]}</td>
                    <td>{cpu_field[2][6]}</td>
                    <td>{cpu_field[2][7]}</td>
                    <td>{cpu_field[2][8]}</td>
                    <td>{cpu_field[2][9]}</td>
                  </tr>
                  <tr>
                    <td>{cpu_field[3][0]}</td>
                    <td>{cpu_field[3][1]}</td>
                    <td>{cpu_field[3][2]}</td>
                    <td>{cpu_field[3][3]}</td>
                    <td>{cpu_field[3][4]}</td>
                    <td>{cpu_field[3][5]}</td>
                    <td>{cpu_field[3][6]}</td>
                    <td>{cpu_field[3][7]}</td>
                    <td>{cpu_field[3][8]}</td>
                    <td>{cpu_field[3][9]}</td>
                  </tr>
                  <tr>
                    <td>{cpu_field[4][0]}</td>
                    <td>{cpu_field[4][1]}</td>
                    <td>{cpu_field[4][2]}</td>
                    <td>{cpu_field[4][3]}</td>
                    <td>{cpu_field[4][4]}</td>
                    <td>{cpu_field[4][5]}</td>
                    <td>{cpu_field[4][6]}</td>
                    <td>{cpu_field[4][7]}</td>
                    <td>{cpu_field[4][8]}</td>
                    <td>{cpu_field[4][9]}</td>
                  </tr>
                  <tr>
                    <td>{cpu_field[5][0]}</td>
                    <td>{cpu_field[5][1]}</td>
                    <td>{cpu_field[5][2]}</td>
                    <td>{cpu_field[5][3]}</td>
                    <td>{cpu_field[5][4]}</td>
                    <td>{cpu_field[5][5]}</td>
                    <td>{cpu_field[5][6]}</td>
                    <td>{cpu_field[5][7]}</td>
                    <td>{cpu_field[5][8]}</td>
                    <td>{cpu_field[5][9]}</td>
                  </tr>
                  <tr>
                    <td>{cpu_field[6][0]}</td>
                    <td>{cpu_field[6][1]}</td>
                    <td>{cpu_field[6][2]}</td>
                    <td>{cpu_field[6][3]}</td>
                    <td>{cpu_field[6][4]}</td>
                    <td>{cpu_field[6][5]}</td>
                    <td>{cpu_field[6][6]}</td>
                    <td>{cpu_field[6][7]}</td>
                    <td>{cpu_field[6][8]}</td>
                    <td>{cpu_field[6][9]}</td>
                    
                  </tr>
                  <tr>
                    <td>{cpu_field[7][0]}</td>
                    <td>{cpu_field[7][1]}</td>
                    <td>{cpu_field[7][2]}</td>
                    <td>{cpu_field[7][3]}</td>
                    <td>{cpu_field[7][4]}</td>
                    <td>{cpu_field[7][5]}</td>
                    <td>{cpu_field[7][6]}</td>
                    <td>{cpu_field[7][7]}</td>
                    <td>{cpu_field[7][8]}</td>
                    <td>{cpu_field[7][9]}</td>
                  </tr>
                  <tr>
                    <td>{cpu_field[8][0]}</td>
                    <td>{cpu_field[8][1]}</td>
                    <td>{cpu_field[8][2]}</td>
                    <td>{cpu_field[8][3]}</td>
                    <td>{cpu_field[8][4]}</td>
                    <td>{cpu_field[8][5]}</td>
                    <td>{cpu_field[8][6]}</td>
                    <td>{cpu_field[8][7]}</td>
                    <td>{cpu_field[8][8]}</td>
                    <td>{cpu_field[8][9]}</td>
                  </tr>
                  <tr>
                    <td>{cpu_field[9][0]}</td>
                    <td>{cpu_field[9][1]}</td>
                    <td>{cpu_field[9][2]}</td>
                    <td>{cpu_field[9][3]}</td>
                    <td>{cpu_field[9][4]}</td>
                    <td>{cpu_field[9][5]}</td>
                    <td>{cpu_field[9][6]}</td>
                    <td>{cpu_field[9][7]}</td>
                    <td>{cpu_field[9][8]}</td>
                    <td>{cpu_field[9][9]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
   )
  }
}

export default App 

