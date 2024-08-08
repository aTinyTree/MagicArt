import "./CardGallery.css";
import "./SearchBar.jsx";
import { useState, useEffect } from "react";

export const CardGallery = ({
    results,
    setSelectedItem,
    setRenderArt,
    setGallery,
    setShowList
}) => {
    const showArt = (result) => {
        console.log("inShowArt", result);
        if (
            result.card.layout == "transform" ||
            result.card.layout == "modal_dfc" ||
            result.card.layout == "reversible_card" ||
            result.card.layout == "double_faced_token" ||
            result.card.layout == "art_series"
        )
            return result.card.card_faces[0].image_uris.png;
        // else if (result.card.layout == "modal_dfc")
        //     return result.card.card_faces[0].image_uris.png;
        else return result.card.image_uris.png;
    };

    return (
        <div className="gallery">
            {results.map((result, id) => {
                return (
                    <img
                        src={showArt(result)}
                        key={id}
                        className="galleryArt"
                        onClick={(e) => {
                            setSelectedItem(result);
                            setRenderArt(true);
                            setGallery(false);
                            setShowList(false);
                        }}
                    />
                );
            })}
        </div>
    );
};
