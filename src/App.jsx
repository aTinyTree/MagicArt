import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import {
    SearchBarResultsList,
    SearchResultsList,
} from "./Components/SearchResultsList";

function App() {
    const [results, setResults] = useState([]);
    const [showList, setShowList] = useState(false);
    console.log(results);
    return (
        <div className="App">
            <div className="title">MagicArt :)</div>
            <div className="search-bar-container">
                <SearchBar
                    setResults={(results) => {
                        setShowList(true);
                        setResults(results);
                    }}
                />
                {/* <SearchBar setResults={setResults} /> */}
                {/* <SearchResultsList id="searchresultslist" results={results}/> */}
                {showList && (
                    <SearchResultsList
                        id="searchresultslist"
                        results={results}
                        onClick={(e) => setShowList(false)}
                    />
                )}

                {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
            </div>
        </div>
    );
}

export default App;
