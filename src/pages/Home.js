// src/pages/Home.js
import React from "react";
import NewsCard from "../components/NewsCard";
import useFetchNews from "../hooks/useFetchNews";

const Home = () => {
    const news = useFetchNews("general");  // Cambia "general" a la categoría que desees

    return (
        <div className="home-container">
            <h1>Noticias Recientes</h1>
            <div className="news-container">
                {news.map((article) => (                    
                    <NewsCard key={article.url} {...article} />
                ))}
            </div>
        </div>
    );
};

export default Home;
