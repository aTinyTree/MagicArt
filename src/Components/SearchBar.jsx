import "./SearchBar.css";
import "./CardGallery.jsx";
import { useState, useEffect, useLayoutEffect } from "react";
import logo from "../magnifying-glass-icon-256x256-kqku2d34.png";

export const SearchBar = ({
  setResults,
  selectedItem,
  setGallery,
  setRenderArt,
  setShowList,
}) => {
  const [input, setInput] = useState("");
  const fetchData = async (value) => {
    try {
      const response = await fetch(`http://localhost:3001/api/search?search=${value}`);
      const json = await response.json();
      setResults(json);
    } catch (error) {
      setResults([]);
      console.error(error);
    }
  };

  //listen for selected item change
  useEffect(() => {
    if (selectedItem && selectedItem.name) setInput(selectedItem.name);
  }, [selectedItem]);

  // Change value to be searched and remove search if empty

  const handleChange = (value) => {
    if (value !== "") {
      fetchData(value);
    } else {
      setResults([]);
      setGallery(false);
    }
    setInput(value);
  };

  // search bar itself
  return (
    <div className="input-wrapper">
      <input
        autoComplete="off"
        id="searchbar"
        placeholder="Type to search..."
        onChange={(e) => handleChange(e.target.value)}
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setGallery(true);
            setRenderArt(false);
            setShowList(false);
          }
        }}
      />
      <button
        className="searchbutton"
        onClick={(e) => {
          setGallery(true);
          setRenderArt(false);
          setShowList(false);
        }}
      >
        <img className="searchButtonIcon" src={logo} />
      </button>
    </div>
  );
};
