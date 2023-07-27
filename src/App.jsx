import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className=" bg-purple-100 dark:bg-cyan-700 h-screen">
        <MainPage darkMode={darkMode} setDarkMode={setDarkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
        <SearchResult searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
