import React, {useState}from 'react';
// import Category from './Aside/Category/Category';
import Nav from './Nav/Navbar'
import Products from './products/Products';
import Recommend from './recommends/Recommend';
import Aside from './Aside/Aside';
import Card from './components/Card';
import './index.css';

//Database
import datas from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");

  //Input Filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = datas.filter(
    (data) => data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
    // Radio filter
    const handleChange = event => {
      setSelectedCategory(event.target.value);
    }
    
    // Button filter
    const handleClick = event => {
      setSelectedCategory(event.target.value);
    }

    // Main function
    function filteredData(datas, selected, query) {
      let filteredProducts=datas;

      //Filtering Input products
      if (query) {
        filteredProducts = filteredItems;
      }

      // Selected Filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
        );
    }

    return filteredProducts.map(
      ({img, title, star, reviews, prevPrice, newPrice})=>(
    <Card 
    key={Math.random()}
    img = {img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice={newPrice}
    />
    ))
 }

 const final = filteredData(datas, selectedCategory, query)

  return (
    <>
    <Aside handleChange={handleChange}/>
    <Nav query={query} handleInputChange = {handleInputChange}/>
    <Recommend handleClick={handleClick}/>
    <Products final = {final}/>
 
    {/* <Category/> */}

    </>
      );
}

export default App;
