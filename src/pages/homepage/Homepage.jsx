import React, { useState } from "react";
import background from '../../images/homepage-bg.jpg';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  // Function to handle when the image has loaded
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="homepage page">
      {loading && <div className="loader">Loading...</div>}
      <img 
        src={background} 
        alt="Rick and Morty background" 
        onLoad={handleImageLoad} 
        style={{ display: loading ? 'none' : 'block' }} 
      />
    </div>
  );
};

export default Homepage;
