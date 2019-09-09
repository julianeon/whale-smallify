import styled from 'styled-components';
import React, { useState } from 'react';
import Smallify from './Smallify';
import './App.css';

const FontsIncluded = styled.div`
font-family: 'Courgette', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Kaushan Script', cursive;
font-family: 'Cormorant Garamond', serif;
font-family: 'Great Vibes', cursive;
font-family: 'Sacramento', cursive;
font-family: 'Monoton', cursive;
font-family: 'Press Start 2P', cursive;
font-family: 'Rock Salt', cursive;
font-family: 'Hanalei', cursive;
font-family: 'Libre Barcode 128 Text', cursive;
font-family: 'Mr Bedfort', cursive;
font-family: 'Butcherman', cursive;
font-family: 'Astloch', cursive;
font-family: 'Ewert', cursive;
font-family: 'Nosifer', cursive;
`

const Centered=styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: pink;
`

const Footer=styled.div`
  position: fixed;
  bottom: 5%;
  width: 100%;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
`

const Wrapper = styled.div`
  &:hover ${Footer} {
    background-color: red;
  }
`

const HeadShrimp=styled.div`
    position: fixed;
    top: 10%;
    width: 100%;
    text-align: center;
    font-family: 'Sacramento', cursive;
`

const Buttyn = styled.button`
  font-weight: bold;
  font-family: "Benton Sans", "Courier New", helvetica, arial,     sans-serif;
  background-color: white; 
  color: black; 
  border: 2px solid #f44336;
  color: #373fff;

  &:hover {
  font-weight: bold;
  font-family: "Benton Sans", "Courier New", helvetica, arial, sans-serif;
  background-color: #f44336;
  color: #373fff;
  }
`


function App() {
    const [submitted, setSubmitted] = useState(false);            

    const handleSubmit = (event) => {
        setSubmitted(true);
        event.preventDefault();
    }

    const ButtonClick = () => {
        return (
          <>
            <HeadShrimp><h1>Smallify the Whale</h1></HeadShrimp>
            <Footer>            
              <p>Click to smallify.</p>
              <Buttyn onClick={handleSubmit}>
                Click me
              </Buttyn>
            </Footer>
            </>
        )
    }

    const beforeAfterSubmit = (didCompleteForm) => {
        if (didCompleteForm) {
            return  <Smallify/>
        } else {
            return (
                <Centered>
                  <img alt="shrimp" style={{width: '30%',height: 'auto',display:'block',margin:'auto'}} src="shrimp.svg"/>
                  <ButtonClick/>
                </Centered>
            )
        }}

    return (
        <> {beforeAfterSubmit(submitted)}
        </>
  );
}

export default App;
