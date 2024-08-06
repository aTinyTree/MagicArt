import { useState, useEffect } from "react";
import "./CardInformation.css";

export const CardInformation = ({ selectedItem }) => {
    return (
        <div className="cardInformation">
            <div className="artist">Artist:
            <div className="artistName"> {selectedItem.card.artist}</div></div>
            <div className=""></div>
            <div></div>
            <div></div>
            
        </div>
    );
};
