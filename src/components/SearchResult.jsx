import React, { useContext, useEffect, useState } from 'react';
import SearchResultCard from './SearchResultCard';
import { mainContext } from '../App';
const SearchResult = () => {
  let { searchTerm } = useContext(mainContext);
  const [showItem, setShowItem] = useState([]);
  const url = searchTerm==''||null?'https://youtube138.p.rapidapi.com/home/?hl=en&gl=US':`https://youtube138.p.rapidapi.com/search/?q=${searchTerm}&hl=en&gl=US`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4ec5c61c34msh0beb9a64bd939d3p1d5de9jsn5e58624179f7',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setShowItem([...data.contents]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
        <div className="grid grid-cols-1 gap-2 p-5">
                    {showItem?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
  );
};

export default SearchResult;
