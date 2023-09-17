import React from 'react'
import './Price.css';

export default function Price() {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'></h2>

      <label className='sidebar-label-container'>
        <input type="radio" name="test2" id="" />
        <span  className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" id="" />
        <span  className='checkmark'></span>$0 - $50
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" id="" />
        <span  className='checkmark'></span>$50 - $100
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" id="" />
        <span  className='checkmark'></span>$100 - $150
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test2" id="" />
        <span  className='checkmark'></span>Over $150
      </label>

    </div>
  )
}
