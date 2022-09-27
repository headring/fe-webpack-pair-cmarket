import React from 'react'

export default function Item({ item, handleClick }) {

  return (
    <section key={item.id} className="item">
      <img className="item-img" src={item.img} alt={item.name}></img>
      <em className="item-name" data-testid={item.name}>{item.name}</em>
      <strong className="item-price">{item.price}</strong>
      <button className="item-button" onClick={(e) => handleClick(e, item.id)}>장바구니 담기</button>
    </section>
  )
}
