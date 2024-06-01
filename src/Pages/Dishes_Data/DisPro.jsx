
import React from 'react';
import { PRODUCTS } from '../../Products'; // Assuming PRODUCTS is imported correctly
import Dishes from './Dishes';
import CartIcon from '../../assets/shopping-cart.png';
import { Link } from 'react-router-dom';

const DisPro = () => {
  return (
    <>
    <Link to='/cart' className="absolute w-10 right-10 top-8 z-50">
        <img src={CartIcon} alt="" />
      </Link>
    <div>
      {PRODUCTS.map((product) => (
        <Dishes key={product.id} data={product} />
      ))}
    </div>
  </>
  );
};

export default DisPro;
