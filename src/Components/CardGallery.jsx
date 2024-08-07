import "./CardGallery.css";
import "./SearchBar.jsx";
import { useState, useEffect } from "react";

export const CardGallery = ({
    results,
    setSelectedItem,
    setRenderArt,
    setGallery,
}) => {
    return (
        <div>
            {results.map((result, id) => {
                return <div>{result.png}</div>;
            })}
        </div>
    );
};
