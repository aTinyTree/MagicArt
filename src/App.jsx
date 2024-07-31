import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import {SearchBarResultsList, SearchResulstsList} from "./Components/SearchResulstsList"

function App() {
    const [results, setResults] = useState([]);
    console.log(results)
    return (
        <div className="App">
          <div className="title">MagicArt</div>
            <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                <SearchResulstsList id="searchresultslist" results={results}/>

                {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
            </div>
        </div>
    );
}

export default App;