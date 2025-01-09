import { useState } from "react";

const Lottery=()=>{

    const [ran,setran]=useState(null);
    const [sum,setsum]=useState('');
    
    const handleClick=()=>{
        const number=(Math.round(Math.random()*1000));
        setran(number);
        handleRemainder(number);
    };

    const handleRemainder=(number)=>{
       
        const digitSum = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        
        if(digitSum==15){
            setsum("Congratulation You Won The Ticket!");
        }else{
            setsum("oops! Try next Luck");
        }
    };
  
console.log(sum);

    
    return(
        <>
            <h1>Lottery Game</h1>
            <h2>Lottery Ticket Number</h2>
            <h1>{ran}</h1>
            <button onClick={handleClick}>Get A New Ticket</button>
            <h1>{sum}</h1>
        </>
    );
};

export default Lottery;