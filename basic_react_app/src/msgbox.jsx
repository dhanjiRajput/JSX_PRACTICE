
const MsgBox=({username,textcolor})=>{
    let styles={color:textcolor};
    return (
        <div>
            <h3 style={styles}>Hello, {username} </h3>
        </div>
    );
};


export default MsgBox;