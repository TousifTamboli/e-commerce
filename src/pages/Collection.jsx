import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';  
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = () =>{
    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(items => items !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  useEffect(() =>{
    setFilterProducts(products);
  },[])

  useEffect(() =>{
    console.log(category);
  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)} // Toggle filter visibility on click
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'MEN'} onChange={toggleCategory} />Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'WOMEN'} onChange={toggleCategory} />Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'KIDS'} onChange={toggleCategory} />Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden sm:block'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Topwear' />Topwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Bottomwear' />Bottomwear
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Winterwear' />Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap4 gap-y-6'>
          {
            filterProducts.map((items, index) =>(
              <ProductItem key={index} name={items.name} id={items._id} price={items.price} image={items.image} />
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default Collection;
