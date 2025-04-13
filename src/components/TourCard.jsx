import React, {useState} from "react";

// TourCard renders individual details
const TourCard = ({id, name, info, price, Image, onRemove}) =>{
    // toggle read more / show less
    const [readMore, setReadMore] =useState(false);

return (
    <article className="tour-card">
        <img src={image} alt={name} className="tour-img" />

        <header className="tour-header">
            <h2>{name}</h2>
            <h4> className="tour-price">${price}</h4>
        </header>

        <p>
            //* Show full description if readMore is true *//
            {readMore ? info : '${info.substring(0, 100)}...'}
            <button
            className="read-more-btn"
            onClick={() => setReadMore(!readMore)}
            >
                //* Button Text Goes Here*//
                {readMore ? "Show Less" : "Read More"}
            </button>
        </p>

//* Button to remove*//
        <button className="btn-remove" onClick={() => {
            onRemove(id)
        }}>Remove Tour</button>
    </article>
);
};

export default TourCard;