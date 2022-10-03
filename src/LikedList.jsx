import { useState } from "react";

export function LikedList() {
  const [likedItem, setLikeItems] = useState({
    Bugatti: "Like",
    Mercedes: "Like",
    BMW: "Like",
    Ferrari: "Like"
  });

  const liked = (key) => {
    setLikeItems((_likedItem) => ({ ...likedItem, [key]: "Liked" }));
  };

  return (
    <div className="likedList">
      <h1>Ex12: Liked List</h1>
      <div>
        {Object.keys(likedItem).map((key) => (
          <li>
            {key} <button onClick={() => liked(key)}>{likedItem[key]}</button>
          </li>
        ))}
      </div>
    </div>
  );
}
