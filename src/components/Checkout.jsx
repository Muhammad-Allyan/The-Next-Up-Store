import React, { useEffect, useState } from 'react';
import '../style.css';

export default function Checkout({ onPlaceOrder }) {
    const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{
        const items = localStorage.getItem('cartItems');
        setCartItems(JSON.parse(items))
    }, [])
  const [form, setForm] = useState({
    name: '', email: '', address: '', city: '', postalCode: '', payment: 'Cash'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your order!');
    onPlaceOrder(); // Reset cart and go to product list
  };

  const total = cartItems?.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container d-flex flex-wrap gap-5">
      {/* Left Side: Form */}
      <form className="flex-grow-1" onSubmit={handleSubmit}>
        <h3>Checkout Form</h3>
        <div className="mb-2">
          <label>Name</label>
          <input name="name" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input name="email" type="email" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>Address</label>
          <input name="address" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>City</label>
          <input name="city" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-2">
          <label>Postal Code</label>
          <input name="postalCode" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Payment Method</label>
          <select name="payment" className="form-control" onChange={handleChange}>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>

      {/* Right Side: Cart Summary */}
      <div style={{ minWidth: '300px' }}>
        <h4>Cart Summary</h4>
        <ul className="list-group">
          {cartItems?.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{item.title}</span>
              <strong>${item.price}</strong>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <strong>Total</strong>
            <strong>${total}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}