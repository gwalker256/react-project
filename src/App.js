import "./App.css";

import React from "react";
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

const people2 = ["Rowe2", "Prevost2", "Gare2"];

const peopleLis2 = people2.map((person, i) => (
  <li key={"person_" + i}>{person}</li>
));

const redPanda = {
  src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg",
  alt: "Red Panda",
  width: "200px",
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda with attributes from object</h1>
        <img src={redPanda.src} alt={redPanda.alt} width={redPanda.width} />
      </div>
    );
  }
}

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    let plan;
    if (!fiftyFifty) {
      plan = <h1>Tonight I'm going out WOOO</h1>;
    } else {
      plan = <h1>Tonight I'm going to bed WOOO</h1>;
    }

    return plan;
  }
}

class MyName extends React.Component {
  // this is a getter method
  get name() {
    return "a string returned via a getter method and 'this'";
  }

  render() {
    return <h1>My name is... {this.name}.</h1>;
  }
}

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>I am an event listener in a class component</button>;
  }
}



function App() {
  return (
    <div className="main">
      <h1 id="header">Hellor</h1>
      <h2>Click to change kitty to doggy</h2>
      {kittyOrDoggy}
      <br />
      <h2>src is broken so I display alt text</h2>
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
      <p>
        Keys help stop lists being in wrong order... sometimes you need them
      </p>
      <ul>{peopleLis2}</ul>
      <MyComponentClass />
      {greatestDivEver}
      <RedPanda />
      <h1>50/50 am I going out</h1>
      <TonightsPlan />
      <MyName />
      <Button />
    </div>
  );
}

export default App;
