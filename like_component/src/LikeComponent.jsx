import { useState } from "react";

const LikeComponent = () => {
  const [like, setlike] = useState(false);

  const handleLike = () => {
    setlike(!like);
  };

  return (
    <div>
      <button onClick={handleLike}>
        {like ? (
          <i
            className="fa-solid fa-heart"
            style={{ fontSize: "150px", color: "red",borderRadius:"50px" }}
          ></i>
        ) : (
          <i className="fa-regular fa-heart" style={{ fontSize: "150px",borderRadius:"50px" }}></i>
        )}
      </button>
    </div>
  );
};

export default LikeComponent;
