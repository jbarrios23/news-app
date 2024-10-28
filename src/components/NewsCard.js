// src/components/NewsCard.js
import React from "react";

const NewsCard = ({ title, description, url, urlToImage }) => (
    <div className="news-card">
        <img 
            src={urlToImage} 
            alt={title} 
            style={{ width: "100%", maxWidth: "300px", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
    </div>
);

export default NewsCard;
