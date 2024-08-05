import { useState, useEffect } from "react";
import "./CardInformation.css";

export const CardInformation = ({ selectedItem }) => {
    console.log("this is really working", selectedItem)
    return (
        <div className="cardInformation">{selectedItem.card.artist}</div>
    )
};
