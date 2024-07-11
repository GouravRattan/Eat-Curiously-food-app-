// App.js
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Data } from  "../RecipesData/Data"
import ProductPage from '../RecipesData/ProductPage';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const DiaplayRecipe = () => {
  return (
    <div>

      {
        Data.map((items, index) => (
          <ProductPage  product={items}/>
        ))
      }
     
    </div>
  );
};

export default DiaplayRecipe;
