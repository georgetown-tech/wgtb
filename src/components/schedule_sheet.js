// src/components/GoogleSheetEmbed.js
import React from "react";
import "./googlesheet.css"; // Import a separate CSS file for styling

const GoogleSheetEmbed = () => {
  return (
    <div className="google-sheet-container">
      <iframe
        title="Google Sheet Embed"
        className="google-sheet-iframe"
        src="https://docs.google.com/spreadsheets/d/1UU-dhZu0D0RkqyRYkIzQMVXrjiE8UfNwBCJc5xevrGM/"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleSheetEmbed;



