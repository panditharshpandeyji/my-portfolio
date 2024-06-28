import React from "react";
import "./ProjectDetails.css";

function index({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="project-section">
      {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        {projectUrl && (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default index;
