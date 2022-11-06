import "./App.css";

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi",
};

const panda = <img src={pics.panda} alt="Lazy Panda" />;

const owl = <img src={pics.owl} alt="Unimpressed Owl" />;

const owlCat = <img src={pics.owlCat} alt="Ghastly Abomination" />;

function myFunc() {
  alert("Make myFunc the pFunc... omg that was horrible i am so sorry");
}

function App() {
  return (
    <div className="main">
      <h1 id="header">Hellor</h1>
      {panda}
      {owl}
      {owlCat}
      <button type="button" onClick={myFunc}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
