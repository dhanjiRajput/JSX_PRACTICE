import { useState } from "react";

const LikeComponent = () => {
  const [like, setlike] = useState(false);
  const [count, setcount] = useState(0);

  const handleLike = () => {
    setlike(!like);
    if(like==false){
        setcount(count+1);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {
            like
                ? <i className="fa-solid fa-heart" style={{ fontSize: "150px", color: "red",borderRadius:"50px" }}></i>
                : <i className="fa-regular fa-heart" style={{ fontSize: "150px" }} ></i>
        }
      </button>
      <h1>Total Likes : {count}</h1>
    </div>
  );
};

export default LikeComponent;
