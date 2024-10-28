import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsByCategory } from '../service/newsService';
import NewsCard from '../components/NewsCard';

const Category = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  console.log("Category",category)

  useEffect(() => {
    
    fetchNewsByCategory(category).then(setNews);
  }, [category]);

  return (
    <div>
      <h1>Noticias de {category}</h1>
      <div className="news-container">
        {news.map((article) => (
          <NewsCard key={article.url} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Category;
