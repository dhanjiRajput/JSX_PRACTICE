import TicketNum from "./TicketNum";

const Ticket=({ticket})=>{
    return(
        <>
            <div>
                {
                    ticket.map((num,index)=>(
                        <TicketNum num={num} key={index}/>
                    ))
                }
            </div>
        </>
    );
};

export default Ticket;