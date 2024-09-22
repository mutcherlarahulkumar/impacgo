import React from 'react';
import map from "../assets/map.png"

const LocationMap = () => {
    return (
        <div className="">
          <a 
            href="https://maps.app.goo.gl/gHKQR8dvMK4gky1K9" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={map}
              alt="Click to view on Google Maps" 
              className="h-screen w-screen p-8  cursor-pointer" 
            />
          </a>
        </div>
      );
};

export default LocationMap;
