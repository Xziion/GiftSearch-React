import React, {useState} from 'react'
import { AddCategory, GifGrid } from './components';

import "./styles.css"

    const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Coding By Myown"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; 
        setCategories([newCategory, ...categories]);
    };

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory onNewCategory={(value) => onAddCategory(value)} />

    {/* Listado de Gifs */}
    {categories.map((category) => (
        <GifGrid key={category} category={category} />
     ))}
    </>
  );
};

export default GifExpertApp;