import "./App.css";
import Navbar from "./Navbar/Navbar";
import svg from "./assets/svg1.svg";
function App() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1>See value from social sooner</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus{" "}
          <br />
          soluta corporis enim qui vel quam quod distinctio animi repellendus
          quos?
        </p>
        <button>Request Demo</button>
      </div>
      <div className="icons">
        <div className="left">
          <img src={svg} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="left">
          <img src={svg} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="left">
          <img src={svg} alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
}

export default App;
