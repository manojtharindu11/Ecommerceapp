import React from 'react'
import Category from './category/Category';
import Price from './price/Price';
import Colors from './colors/Colors';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category />
            <Price />
            <Colors />
        </section>
    </>
  )
}
