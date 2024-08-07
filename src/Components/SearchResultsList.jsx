// import { useState } from "react";
import "./SearchResultsList.css";
import "./SearchBar.jsx";
import { useState } from "react";

import React, { Children } from "react";
import { renderArt } from "../App.jsx";

export const SearchResultsList = ({
    results,
    setSelectedItem,
    setRenderArt,
    setGallery
}) => {
    return (
        <div className="resultslist" id="resultslist">
            {results.map((result, id) => {
                return (
                    <div
                        className="suggestion"
                        key={id}
                        id="suggestion"
                        onClick={(e) => {
                            setSelectedItem(result);
                            setRenderArt(true);
                            setGallery(false);
                        }}
                    >
                        {result.name}
                    </div>
                );
            })}
        </div>
    );
};
