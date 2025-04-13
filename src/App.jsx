import React, {useState} from "react";
import Gallery from "./components/Gallery";
import './styles/styles.css';

// Root component for app
function App() {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);

  // Function to remove tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <>
      <div>
        {tours.length === 0 && <p>No tours available</p>}
      </div>
      <main>
        <h1>Tour Explorer</h1>
        {/* Pass state and handler to children */}
        <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
      </main>
    </>
  );
 }
export default App;