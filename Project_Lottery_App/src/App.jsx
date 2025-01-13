import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery_Game from './Lottery_Game'
import { sum } from './Helper'

const App=()=> {
  
  const wincondition =(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  };
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
          <Lottery_Game n={3} wincondition={wincondition}/>
      </div>
    </>
  )
}

export default App
