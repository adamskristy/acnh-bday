import { Route, Routes } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Calendar from "./pages/Calendar";
import Day from "./pages/Day";
import Home from './pages/Home';
import Villager from "./pages/Villager";
import  months  from "./components/months";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calendar/:month' element={<Calendar months={months} />} />
        <Route path='/calendar/:month/:day' element={<Day  />} />
        <Route path='/calendar/:month/:day/villager/:id' element={<Villager />} />
      </Routes>
    </div>
  );
}

export default App;
