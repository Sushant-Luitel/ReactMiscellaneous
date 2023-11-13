import { useState } from "react";
export const ShowText = () => {
  const [showText, setShowText] = useState(false);
  function handleClick() {
    setShowText(!showText);
  }
  return (
    <>
      <button onClick={handleClick}>Show Text</button>
      {showText && <h1>Visible Text here</h1>}
    </>
  );
};
