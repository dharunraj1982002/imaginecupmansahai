import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from '@mui/material'
import './Product.css';
import './style.css';
//import image1 from './images/cro0023.jpg';
function Product() {
  const [products] = useState([
    {
      id: 1,
      name: 'Crocin 650',
      date: 'jan 2023',
      price: 9.99,
      HXcode: 'AE18',
      imgadd: 'https://rb.gy/ltynxr',
    },
    {
      id: 2,
      name: 'Zincovit',
      price: 19.99,
      date: 'nov 2022',
      HXcode: 'AB08',
      imgadd: 'https://rb.gy/sbqgjo',
    },
    {
      id: 3,
      name: 'Injection',
      price: 29.99,
      date: 'aug 2022',
      HXcode: 'FE19',
      imgadd: 'https://rb.gy/6twf4r',
    },
    {
      id: 4,
      name: 'Benadryl',
      price: 9.99,
      date: 'jan 2023',
      HXcode: 'AD35',
      imgadd: 'https://rb.gy/k9q3sz',
    },
    {
      id: 5,
      name: 'Cofsils',
      price: 9.99,
      date: 'jan 2023',
      HXcode: 'AC76',
      imgadd:'https://rb.gy/idumur',
    },
    {
      id: 6,
      name: 'Saridon',
      price: 9.99,
      date: 'jan 2023',
      HXcode: 'CE82',
      imgadd:'https://rb.gy/ztmoqt',
    }
  ]);
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleUpdateQuantity(productId, quantity) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    //<body className="App">
    <div className="App">
      <nav className='justify-content-between'>
            <h4>Mansahaai</h4>
              <Link to="/" className="btn btn-light" >
                Home
              </Link>
        </nav>
      <h1>Healthify Mart</h1>
      <h2>Products</h2>
      <List>   
        {products.map((product) => (
          <>
          <th style={{ border: '0',alignItems:'flex-start' }}>
          <div className='products'>
            <div className='prod'>
              <img src={product.imgadd} alt="image" />
              <h5>{product.name}</h5>
              <h5>₹{product.price}</h5>
              <button
                onClick={() => handleAddToCart(product)}
                class="button-33"
              >
                add to cart
              </button>
            </div>
            </div>
          </th>
</>
        ))}
        </List>
      
      
      <h2 className='p-3'>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Mfg. Date</th>
            <th>Hex. Code</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} >
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.date}</td>
              <td>{item.HXcode}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, e.target.value)
                  }
                />
              </td>
              
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  class="button-34 p-2"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ₹{getTotal()}</h3>
    </div>
    //</body>
  );
}

export default Product;
