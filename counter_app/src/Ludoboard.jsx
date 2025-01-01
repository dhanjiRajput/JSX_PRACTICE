import { useState } from "react";

const Ludoboard=()=>{
    const [moves,setmovs]=useState({blue:0,green:0,yellow:0,red:0});

    const updateblue=()=>{
        setmovs((premoves)=>{
            return {...premoves,blue:premoves.blue+1};
        });
    };

    const updateyellow=()=>{
        setmovs((premoves)=>{
            return {...premoves,yellow:premoves.yellow+1};
        });
    };

    const updategreen=()=>{
        setmovs((premoves)=>{
            return {...premoves,green:premoves.green+1};
        });
    };

    const updatered=()=>{
        setmovs((premoves)=>{
            return {...premoves,red:premoves.red+1};
        });
    };
   return (
    <div className="board">
        <h2>Welcome to LudoBoard</h2>
        <p>Blue Moves :{moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
        <p>Yellow Moves :{moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
        <p>Green Moves :{moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
        <p>Red Moves :{moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
    </div>
   );
};

export default Ludoboard;