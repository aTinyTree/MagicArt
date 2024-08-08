import { useState, useEffect } from "react";
import "./CardInformation.css";
export const CardInformation = ({ selectedItem }) => {
    return (
        <div className="cardInformation">
            <div className="artist">
                Artist:
                <div className="artistName"> {selectedItem.card.artist}</div>
            </div>
            <div className="cardText">
                <div className="cardName">{selectedItem.card.name} | {selectedItem.card.mana_cost}</div>
                <div className="typeLine">{selectedItem.card.type_line}</div>
                <div className="cardOracle">{selectedItem.card.oracle_text}</div>
                <div className="cardPrice">${selectedItem.card.prices.usd}</div>
            </div>
        </div>
    );
};
