import "./SearchBar.css";
import { useState } from "react";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
    const fetchData = async (value) => {
        try {
            const response = await fetch(
                `https://api.scryfall.com/cards/search?q=${value}`
            );
            const json = await response.json();
            setResults(json.data.map((card) => card.name));
        } catch {
            setResults([]);
        }
        // fetch(`https://api.scryfall.com/cards/search?q=${value}`)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json)
        //         setResults(json.data.map((card) => card.name));
        //     });
    };

// Change value to be searched and remove search if empty

    const handleChange = (value) => {
        if (value !== "") {
            fetchData(value);
            // setResults([]);
        }else{setResults([""])}
        setInput(value);
    };

// search bar itself
    return (
        <div className="input-wrapper">
            <input
                id="searchbar"
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onSubmit={console.log({input})}
            />
            <button></button>
        </div>
        
    );
};