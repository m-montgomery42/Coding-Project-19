import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";

// Gallery renders tour list

const Gallery = ({tours, setTours, onRemove}) => {
    // Local state manages loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch tours from API

    const fetchTours = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch("https://course-api.com/react-tours-project");
            // Map API data to the field we need only
            const data = await response.json();
            const trimmed = data.results.map((tour) => ({
                id: tour.id,
                name: tour.name,
                price: tour.price || "Unknown",
                info: `Tour Details: ${tour.info.slice(0, 50) || "No information provided."}`,
            }));
            setTours(trimmed); // Save data to global state
            setLoading(false);
        } catch (error) {
            setError(true); // Show error if fetch fails
            setLoading(false); //
        }
    };

    // Run fetchtours after the component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    // Render loading state

    if (loading) {
        return <h2>Loading...</h2>;
    };
    // Render error state
    if (error) {
        return <h2>Something went wrong...</h2>;
    };
    // Render if no tours available
    if (tours.length === 0) {
        return <h2>No Tours Available</h2>;
        <button on Click={fetchTours}>Refresh</button>
                    // Render the list of TourCards

        return(
            <section className="tour-list">
                {tours.map((tour) => {
                    return (
                        <TourCard
                            key={tour.id}
                            {...tour} // Spread operator to pass all tour properties
                            onRemove={onRemove} // Pass onRemove function
                        />
                    );
                })}
            </section>
            );
        }
    };


export default Gallery;
// Loading and Error States completed during Gallery.jsx development... for commit