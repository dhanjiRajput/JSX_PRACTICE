import "./Price.css"
const Price=({old,newer})=>{
    return (
        <div id="valuebox">
            <span id="value">Rs. <span className="old">{old}</span></span><span id="value">Rs. {newer}</span>
        </div>
    );
};

export default Price;