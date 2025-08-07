
import './App.css';
import Explore from './Components/Explore';
import Discounted from './Components/Discounted';
import Footer from "./Components/Footer";
import Highlights from './Components/Highlights';
import Landing from './Components/Landing';
import Nav from "./Components/Nav";
import Featured from "./Components/Featured";

function App() {
  return (
    <div className="App">
     <Nav />
     <Landing />
     <Highlights />
     <Featured />
     <Discounted />
     <Explore />
     <Footer />
    </div>
  );
}

export default App;
