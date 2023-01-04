import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    //se llama el category para usarlo en el async
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    //Efectos secundarios, WHeN useEffect

useEffect(() => {
  getImages();
}, []);

    

  return {
    images,
    isLoading,
  };
};
