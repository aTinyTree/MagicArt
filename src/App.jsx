import "./App.css";
import { useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./Components/SearchResultsList";
import { CardInformation } from "./Components/CardInformation";
import { CardGallery } from "./Components/CardGallery";
import { render } from "@testing-library/react";
import logo from "./magnifying-glass-icon-256x256-kqku2d34.png";

function App() {
    const [results, setResults] = useState([]);
    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [renderArt, setRenderArt] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [gallery, setGallery] = useState(false);

    const showArt = () => {
        console.log("inShowArt");
        //TODO uselayouteffect or useeffect to reset toggle to false on card change
        if (
            selectedItem.card.layout == "transform" ||
            selectedItem.card.layout == "modal_dfc" ||
            selectedItem.card.layout == "reversible_card" ||
            selectedItem.card.layout == "double_faced_token" ||
            selectedItem.card.layout == "art_series"
        )
            if (toggle) {
                if (selectedItem.card.card_faces == undefined)
                    console.log(selectedItem.card.card_faces[1], "cardfaces");
                return selectedItem.card.card_faces[1].image_uris.png;
            } else {
                if (selectedItem.card.card_faces == undefined)
                    console.log(selectedItem.card.card_faces[0], "cardfaces");
                return selectedItem.card.card_faces[0].image_uris.png;
            }
        // else if (selectedItem.card.layout == "modal_dfc")
        //     if (toggle) {
        //         return selectedItem.card.card_faces[1].image_uris.png;
        //     } else {
        //         return selectedItem.card.card_faces[0].image_uris.png;
        //     }
        else {
            if (selectedItem.card.image_uris == undefined)
                console.log(selectedItem.card.name, "hi");
            return selectedItem.card.image_uris.png;
        }
    };
    const changeArt = () => {
        if (
            selectedItem.card.layout == "transform" ||
            selectedItem.card.layout == "modal_dfc" ||
            selectedItem.card.layout == "reversible_card" ||
            selectedItem.card.layout == "double_faced_token" ||
            selectedItem.card.layout == "art_series"
        )
            setToggle(!toggle);
    };
    return (
        <div className="App">
            <div className="title">MagicArt</div>
            <div
                className={
                    renderArt || gallery ? "move" : "search-bar-container"
                }
            >
                <SearchBar
                    setResults={(results) => {
                        setShowList(true);
                        setResults(results);
                    }}
                    selectedItem={selectedItem}
                    setGallery={setGallery}
                    setRenderArt={setRenderArt}
                    setShowList={setShowList}
                />
                {showList && (
                    <SearchResultsList
                        results={results}
                        setRenderArt={setRenderArt}
                        setSelectedItem={(selectedItem) => {
                            setSelectedItem(selectedItem);
                            setShowList(false);
                        }}
                        setGallery={setGallery}
                    />
                )}
            </div>
            <div className="cardWrapper">
                {gallery && (
                    <CardGallery
                        setGallery={setGallery}
                        results={results}
                        setRenderArt={setRenderArt}
                        setSelectedItem={setSelectedItem}
                        setShowList={setShowList}
                    />
                )}
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
