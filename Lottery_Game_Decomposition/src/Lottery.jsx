import { useState } from "react";
import "./Lottery.css"
import { Ticket,sum } from "./helper";
const Lottery=()=>{
    const [ticket,setticket]=useState(Ticket(3));

    const handle=()=>{
        setticket(Ticket(3));
    };

    const iswinning=sum(ticket)===15;
    
    return(
        <>
            <h1>Lottery Game!</h1>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span><br/><br/>
            <button onClick={handle}>Get a New Ticket</button>
            <h1>{iswinning?"Congratulatoin You Won Ticket!":"Try Next better Luck..!"}</h1>
        </>
    );
};

export default Lottery;