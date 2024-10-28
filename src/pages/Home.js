// src/pages/Home.js
import React from "react";
import NewsCard from "../components/NewsCard";
import useFetchNews from "../hooks/useFetchNews";
import { Link } from "react-router-dom";

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
            <Link to="/category/tecnology">
                <button>Ver Categorías</button>
            </Link>
        </div>
    );
};

export default Home;
