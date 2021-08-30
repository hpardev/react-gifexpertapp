import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['metallica']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory categories = {categories} setCategories = {setCategories}/>
      <hr/>
      {
        categories.map(category => (
          <GifGrid 
            key = {category}
            category = {category} />
        ))
      }  
    </>
  );    
}

export default GifExpertApp;