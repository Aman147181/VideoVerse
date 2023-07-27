import { useState } from "react";
import "./App.css";
import { createContext } from 'react';
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";
export const mainContext = createContext();
function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <mainContext.Provider value={{darkMode, setDarkMode, searchTerm, setSearchTerm}}>
      <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className=" bg-purple-100 dark:bg-cyan-700 h-screen">
        <MainPage /> 
        <SearchResult />
        </div>
      </div>
    </Router>
      </mainContext.Provider>
  );
}

export default App;
