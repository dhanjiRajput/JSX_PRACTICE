
const Ticket=(arr)=>{
    let num=new Array(arr);
    for(let i=0;i<num.length;i++){
        num[i]=Math.floor(Math.random()*10);
    }
    return num;
};

const sum=(arr)=>{
    return arr.reduce((a,b)=>a+b,0)
};

export {Ticket,sum};