import "./App.css";

import React from 'react';
// import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>I am created via component class</h1>;
  }
}


const greatestDivEver = React.createElement(
  "div",
null,
"i am div made using React.createElement manually"
);


const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi",
};

function makeDoggy(e) {
  if (
    e.target.getAttribute("src") ===
    "https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
  ) {
    e.target.setAttribute(
      "src",
      "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
    );
    e.target.setAttribute("alt", "doggy");
  } else {
    e.target.setAttribute(
      "src",
      "https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    );
    e.target.setAttribute("alt", "kitty");
  }
}

function coinToss() {
  const flip = Math.random() < 0.5 ? "heads" : "tails";
  // alert(flip)
  return flip;
}

let headsOrTails;

if (coinToss() === "heads") {
  headsOrTails = <h2>Heads!</h2>;
} else {
  headsOrTails = <h2>Tails!</h2>;
}

const kittyOrDoggy = (
  <img
    onClick={makeDoggy}
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
  />
);

const panda = <img src={pics.panda} alt="Lazy Panda" />;

const owl = <img src={pics.owl} alt="Unimpressed Owl" />;

const owlCat = <img src={pics.owlCat} alt="Ghastly Abomination" />;

function myAlert() {
  alert("ARRGGGHHH! I AM ALTERTED!");
}

const ternaryOptions = {
  good: "That's good!",
  bad: "That's bad!",
};

const goodOrBad = (
  <p>
    This is a ternary! {ternaryOptions[coinToss() === "heads" ? "good" : "bad"]}{" "}
  </p>
);

const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <p>My favourite food will show below if the && is truthy</p>
    {!judgmental && <li>it is coins!</li>}
  </div>
);

const people = ["Rowe", "Prevost", "Gare"];

const peopleLis = people.map((person) => <li>{person}</li>);

const people2 = ['Rowe2', 'Prevost2', 'Gare2'];

const peopleLis2 = people2.map((person, i) => <li key={'person_' + i}>{person}</li>);


function App() {
  return (
    <div className="main">
      <h1 id="header">Hellor</h1>
      <h2>Click to change kitty to doggy</h2>
      {kittyOrDoggy}
      <br />
      <h2>I don't work so display alt text</h2>
      {panda}
      <br />
      <h2>We are just pictures</h2>
      {owl}
      {owlCat}
      <br />
      <h2>I am a button that alerts!</h2>
      <button type="button" onClick={myAlert}>
        Click Me!
      </button>
      <h2>Refresh for heads or tails!</h2>
      {/* <button type="button" onClick={coinToss}>
        Click Me!
      </button> */}
      {headsOrTails}
      {goodOrBad}
      {favoriteFoods}
      <h2>Below is made using .map</h2>
      <ul>{peopleLis}</ul>
      <h2>Below is made using .map but with keys</h2>
      <p>Keys help stop lists being in wrong order... sometimes you need them</p>
      <ul>{peopleLis2}</ul>
      <MyComponentClass />
      {greatestDivEver}
      
    </div>
  );
}



export default App;



