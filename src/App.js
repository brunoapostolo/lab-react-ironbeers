import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetail from './pages/BeerDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/> 
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
        <Route path="/beers/:beerId" element={<BeerDetail/>} /> 
      </Routes>
    </div>
  );
}

export default App;
