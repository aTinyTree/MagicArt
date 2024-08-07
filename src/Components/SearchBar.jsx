import "./SearchBar.css";
import "./CardGallery.jsx"
import { useState, useEffect, useLayoutEffect } from "react";

export const SearchBar = ({
    setResults,
    selectedItem,
    setGallery,
    setRenderArt
}) => {
    const [input, setInput] = useState("");
    const fetchData = async (value) => {
        try {
            const response = await fetch(
                `https://api.scryfall.com/cards/search?q=${value}`
            );
            const json = await response.json();
            //TODO for double faced cards, use card.card_faces."0+1"
            const results = json.data.map((card) => {
                return { name: card.name, art: card.image_uris?.png, card };
            });
            // results = results.slice(0,10)
            setResults(results);
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
                    if (e.key === "Enter") {setGallery(true)} {setRenderArt(false)};
                }}
            />
            <button className="searchbutton" onClick={(e) => setGallery}></button>
        </div>
    );
};
