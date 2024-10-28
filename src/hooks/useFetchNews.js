import { useState,useEffect } from "react";
import { fetchTopNews } from "../service/newsService";

//Maneja la lógica de obtención de datos para cualquier 
//página o componente que necesite cargar noticias.
const useFetchNews= (category)=>{
    const [news,setNews]=useState([]);

    useEffect(() => {
        fetchTopNews(category).then(setNews);
      }, [category]);

      return news;
};

export default useFetchNews;