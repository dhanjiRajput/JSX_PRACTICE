import { useState } from "react";

const Ludoboard=({col})=>{
    const stl={backgroundColor:col,margin:"20px",fontSize:"25px",fontWeight:"bolder"}
    const[count,setcount]=useState({blue:0,yellow:0,green:0,red:0});

    const handlclick=(color)=>{
        setcount((prevcount)=>(
            {...prevcount,[color]:prevcount[color]+1}
        ));
    };

    return(
        <div>
            <button onClick={()=>handlclick(col)} style={stl}>+{count[col]}</button>
        </div>
    );
};

export default Ludoboard;