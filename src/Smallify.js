import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Centered=styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #00ffff;
`

function Imager() {
    let [count, setCount] = useState(30);
    let [percent, setPercent] = useState("30%");
    var color;

    useInterval(() => {
      setCount(count - 1);        
      setPercent(count+"%");
      console.log(percent);
  }, 1000);

    return (
        <Centered>
          <img alt="shrimp" style={{width: percent,height: 'auto',display:'block',margin:'auto',}} src="shrimp.svg"/>
        </Centered>
    )
}

const Smallify = () => {
  return (
      <Imager/>
  );
}

export default Smallify;
