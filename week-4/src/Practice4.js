import React, { useState, useEffect } from "react";

const Practice4 = () => {
  /*
   * 1. Pull the fetch call out into it's own function fetchCat
   * 2. Call fetchCat on initial page load as done currently
   * 3. Add a timer using useEffect that fetches a new cat every 5 seconds
   * 4. Make sure to cancel the timer when component is unmounted
   */
  
  const fetchCat = () => {
    fetch(`https://aws.random.cat/meow`)
      .then(response => response.json())
      .then(data => setCatImg(data.file))
      .catch(error => console.error(error));
  }

  const [catImg, setCatImg] = useState(``);

  useEffect(() => {
    fetchCat();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 Second Refresh!`);
      fetchCat();
    }, 5000);
    return () => clearTimeout(timer);
  }, [catImg]);

  return (
    <>
      <h1>Random Cat Photo</h1>
      <img src={catImg} alt="Random Cat" width="500" />
    </>
  );
};

export default Practice4;
