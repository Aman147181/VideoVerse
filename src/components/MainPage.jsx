import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faSearch, faVideo } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
const MainPage = (props) => {
  const [typed, setTyped] = useState();
  return (
    <div className="flex h-[80px] items-center justify-center space-x-3 md:space-x-6 lg:space-x-10 px-4">
      <div className="flex justify-center items-center mx-2">
        <button onClick={()=>props.setSearchTerm(null)}><FontAwesomeIcon icon={faVideo} size="2xl" color={props.darkMode ? 'rgb(143, 252, 255)' : 'rgb(14, 116, 144)'} /></button>
        < button onClick={()=>window.location.reload()}><h1 className="ml-2 font-bold dark:text-purple-200 text-slate-700 text-2xl">VideoVerse</h1></button>
      </div>
      
      <input
        onChange={(event) => {
        setTyped(event.target.value);
        }}
        className="2xl:w-5/12  xl:w-1/2 lg:w-8/12 md:w-8/12 sm:flex-col sm:w-1/3 p-4 bg-slate-50 text-xl text-slate-600 rounded-3xl shadow-md focus:shadow-2xl focus:outline-none border-slate-400 placeholder:text-xl"
        placeholder="search videos... "
      ></input>
      <button
        onClick={()=>props.setSearchTerm(typed)}
        className="p-3 px-5 text-xl font-bold text-white rounded-3xl dark:bg-purple-100 bg-cyan-700 ml-2 dark:text-slate-700"
      >
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
      <button
        onClick={() => {
          props.setDarkMode(!props.darkMode);
        }}
      >
        {props.darkMode ? (
          <FontAwesomeIcon icon={faSun} size="2xl" color="white" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="2xl" />
        )}
      </button>
    </div>
  );
};

export default MainPage;
