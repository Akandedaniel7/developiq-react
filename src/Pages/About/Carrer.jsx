/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import images from '../../Components/data.js';

const Carrer = () => {

    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter((image) => image.category === selectedCategory);

  return (
    <div>
      <h1> Image Filtering App </h1>
      <div>
       <button onClick={() => handleCategoryClick('all')} > ALL </button>
       <button onClick={() => handleCategoryClick('nature')} > Nature </button>
       <button onClick={() => handleCategoryClick('food')} > Food </button>
       <button onClick={() => handleCategoryClick('animals')} > Animals </button>
      </div>
      <div>
      {filteredImages.map((image) => (
        <img
         key={image.id}
        src={image.imageUrl}
        alt={`Image ${image.id} - ${image.category}`}
        />
      )
        )}
      </div>
    </div>
  )
}

export default Carrer
