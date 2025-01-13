import { useState } from "react";
import { Helper,sum } from "./Helper";
import Ticket from "./Ticket";

const Lottery_Game=({n=3,wincondition})=>{
    
    const [ticket,setticket]=useState(Helper(n));
    const iswinning=wincondition(ticket);

    const buyTicket=()=>{
        setticket(Helper(n));
    };

    return(
        <>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br /><br/>
            <button onClick={buyTicket}>Get a New Ticket</button>
            <h1>{iswinning?"Congratulatoin You Won Ticket!":"Try Next better Luck..!"}</h1>
        </>
    );
};

export default Lottery_Game;