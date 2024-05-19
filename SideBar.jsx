import React from 'react';
import './sidebar.css';
export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="about">
        <hr />
        About Me
        <hr />
        <div className="img">
          <img src="https://images.pexels.com/photos/20559481/pexels-photo-20559481/free-photo-of-wax-candles-and-bust-flowerpot-by-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="images" />
        </div>
      </div>
<div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. nemo maxime sed accusamus</div>
      <div className="lines">
        <hr />
        Categories
        <hr />
        </div>
      <div className="categories">
        <div className="column">
          <div className="category">Tech</div>
          <div className="category">Facts</div>
          <div className="category">Life</div>
        </div>

        <div className="column">
          <div className="category">Food</div>
          <div className="category">Trading</div>
          <div className="category">World</div>
        </div>
      </div>
    </div>
  );
}
