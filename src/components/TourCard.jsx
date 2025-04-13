import React, {useState} from "react";

// TourCard renders individual details
const TourCard = ({id, name, info = "", price, image, onRemove}) => {
    info = typeof info === "string" ? info : "";
    // toggle read more / show less
    const [readMore, setReadMore] =useState(false);

return (
    <article className="tour-card">
        <img src={image} alt={name} className="tour-img" />

        <header className="tour-header">
            <h2>{name}</h2>
            <h4 className="tour-price">${price}</h4>
        </header>

        <p>
            {/*Show full description if readMore is true*/}
            {readMore ? info : info.length > 300 ? `${info.substring(0, 300)}...` : info}
            <button
                className="read-more-btn"
                onClick={() => setReadMore(!readMore)}
            >
                {readMore ? "Show Less" : "Read More"}
            </button>
        </p>

{/* Button to remove */}
        <button className="btn-remove" onClick={() => {
            if (typeof onRemove === "function") {
                onRemove(id);
            } else {
                console.error("onRemove is not a function");
            }
        }}>Remove Tour</button>
    </article>
);
};

export default TourCard;