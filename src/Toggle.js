import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

function Toggle() {
  const [isHappy, toggleHappy] = useToggle(true);
  const [isBrokenHeart, toggleHeart] = useToggle(false);
  // const toggleHappy = () => setIsHappy(!isHappy);
  // const toggleHeart = () => setIsBrokenHeart(!isBrokenHeart);

  return (
    <div>
      <h1 onClick={toggleHappy}>{isHappy ? "😀" : "😟"}</h1>
      <h1 onClick={toggleHeart}>{isBrokenHeart ? "💔" : "❤️"}</h1>
    </div>
  );
}
export default Toggle;
