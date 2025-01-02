import './App.css'
import Ludoboard from './Ludoboard';

const App=()=>{
  return (
    <>
    <h1>LudoBoard Counter</h1>
      <Ludoboard col="blue"/>
      <Ludoboard col="yellow"/>
      <Ludoboard col="green"/>
      <Ludoboard col="red"/>
    </>
  );
};

export default App
