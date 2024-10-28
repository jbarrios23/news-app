// src/components/NewsCard.js
import React, { useState } from "react";

const NewsCard = ({ title, description, url, urlToImage}) => {
    //console.log("NC",imageUrl)
    const [imgSrc, setImgSrc] = useState(urlToImage);

    const handleImageError = () => {
        setImgSrc("https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjYxMTczNjg1&ixlib=rb-1.2.1&q=80&w=400"
        ); // Reemplaza por la URL de tu imagen de respaldo
    };

    return (
        <div className="news-card">
            <img src={imgSrc} alt={title} onError={handleImageError} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
        </div>
    );
};

export default NewsCard;
