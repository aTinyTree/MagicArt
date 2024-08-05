import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import {
    SearchBarResultsList,
    SearchResultsList,
} from "./Components/SearchResultsList";
import { CardInformation } from "./Components/CardInformation";
import { render } from "@testing-library/react";

function App() {
    const [results, setResults] = useState([]);
    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [renderArt, setRenderArt] = useState(false);
    const [toggle, setToggle] = useState(false);

    console.log(results);
    const showArt = () => {
        console.log("inShowArt");
        if (selectedItem.card.layout == "transform")
            if (toggle)
                return selectedItem.card.card_faces[1].image_uris.png;
            else
                return selectedItem.card.card_faces[0].image_uris.png;
        else return selectedItem.card.image_uris.png;
    };
    const changeArt = () => {
        if (selectedItem.card.layout == "transform") setToggle(!toggle);
    };
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
            <div className="cardWrapper">
                {renderArt && (
                    <img
                        src={showArt()}
                        alt="art"
                        id="cardArt"
                        onClick={changeArt}
                    />
                )}
                {renderArt && <CardInformation selectedItem={selectedItem} />}
            </div>
        </div>
    );
}

export default App;
