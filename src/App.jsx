import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import {
    SearchBarResultsList,
    SearchResultsList,
} from "./Components/SearchResultsList";
import { render } from "@testing-library/react";

function App() {
    const [results, setResults] = useState([]);
    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [renderArt, setRenderArt] = useState(false);
    console.log(results);

    return (
        <div className="App">
            <div className="title">MagicArt :)</div>
            <div className={renderArt ? "move" : "search-bar-container"}>
                <SearchBar
                    setResults={(results) => {
                        setShowList(true);
                        setResults(results);
                    }}
                    selectedItem={selectedItem}
                />
                {showList && (
                    <SearchResultsList
                        results={results}
                        setRenderArt={setRenderArt}
                        setSelectedItem={(selectedItem) => {
                            setSelectedItem(selectedItem);
                            setShowList(false);
                        }}
                    />
                )}
            </div>
            {renderArt && <img src={selectedItem.art} alt="art" id="cardArt" />}
            <cardInformation/>
        </div>
    );
}

export default App;
