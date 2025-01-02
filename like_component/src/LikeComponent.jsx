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
            class="fa-solid fa-heart"
            style={{ fontSize: "150px", color: "red" }}
          ></i>
        ) : (
          <i class="fa-regular fa-heart" style={{ fontSize: "150px" }}></i>
        )}
      </button>
    </div>
  );
};

export default LikeComponent;
