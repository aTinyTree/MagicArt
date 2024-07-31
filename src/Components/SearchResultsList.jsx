// import { useState } from "react";
import "./SearchResultsList.css";
import "./SearchBar.jsx";

import React, { Children } from "react";

export const SearchResultsList = ({ results }) => {
    return (
        <div className="resultslist" id="resultslist">
            {results.map((result, id) => {
                return (
                    <div
                        className="suggestion"
                        key={id}
                        id="suggestion"
                        onClick={(e) => {
                            document.getElementById("searchbar").value = result;
                        }}
                    >
                        {result}
                    </div>
                );
            })}
        </div>
    );
};
