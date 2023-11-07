import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Lambda Eats</h1>
    <Link id="order-pizza" to="/pizza">Order Pizza</Link>
  </div>
);

const PizzaOrderForm = () => {
  
  return (
    <form id="pizza-form">
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" required minLength="2" />
      <span className="error">name must be at least 2 characters</span>

      <label htmlFor="size-dropdown">Choose a pizza size:</label>
      <select id="size-dropdown">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <fieldset>
        <legend>Choose your toppings:</legend>
        <input type="checkbox" id="topping1" name="topping" value="pepperoni" />
        <label htmlFor="topping1">Pepperoni</label>
        <input type="checkbox" id="topping2" name="topping" value="mushrooms" />
        <label htmlFor="topping2">Mushrooms</label>
        <input type="checkbox" id="topping3" name="topping" value="onions" />
        <label htmlFor="topping3">Onions</label>
        <input type="checkbox" id="topping4" name="topping" value="sausage" />
        <label htmlFor="topping4">Sausage</label>
      </fieldset>

      <label htmlFor="special-text">Special instructions:</label>
      <input type="text" id="special-text" />

      <button type="submit" id="order-button">Add to Order</button>
    </form>
  );
};

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/pizza" element={<PizzaOrderForm />} />
  </Routes>
);

export default App;
