// import { useState } from "react";
import "./SearchResultsList.css";
import "./SearchBar.jsx";
import { useState } from "react";

import React, { Children } from "react";

export const SearchResultsList = ({ results, setSelectedItem }) => {
    // const [selectedItem, setSelectedItem] = useState("");

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
                        }}
                    >
                        {result}
                    </div>
                );
            })}
        </div>
    );
};
