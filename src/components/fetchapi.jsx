import React, { useState, useEffect } from "react";

export const Fetchapi = () => {
  const [catFact, setCatFact] = useState("");
  const url = "https://catfact.ninja/fact";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.fact);
        setCatFact(data.fact);
      });
  }, []);
  return <div>{catFact && <h1>{catFact}</h1>}</div>;
};
