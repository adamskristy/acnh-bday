import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';


import './App.css';
import Header from './components/Header';
import Calendar from "./pages/Calendar";
import Day from "./pages/Day";
import Home from './pages/Home';
import VillagerDetails from "./components/VillagerDetails";
import  months  from "./components/months";
import NotFound404 from "./pages/NotFound404";



function App() {

  let [villagers, setVillagers] = useState([])

  const getAllVillagers = async () => {
      const response = await fetch(`https://acnhapi.com/v1a/villagers/`)
      const data = await response.json()
      setVillagers(data)
      // console.log(data)
      // console.log(data[1])
      // console.log(data[1].id)
  }

  useEffect(() => {
      getAllVillagers()
  },[])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home villagers={villagers} />} />
        <Route path='/calendar/:month' element={<Calendar months={months} villagers={villagers} />} />
        <Route path='/calendar/:month/:day' element={<Day villagers={villagers} />} />
        <Route path='/calendar/:month/:day/villager/:id' element={<VillagerDetails villagers={villagers} />} />
        <Route path='/notfound' element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
