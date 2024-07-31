// import { useState } from "react";
import "./SearchResultsList.css";
import "./SearchBar.jsx";

import React, { Children } from "react";

export const SearchResulstsList = ({ results }) => {
    // const [State, setState] = useState([])

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
                            // removelist();
                        }}
                    >
                        {result}
                    </div>
                );
            })}
        </div>
    );
};
 const removelist = () => {
    document.getElementById("resultslist").replaceChildren("")
 }