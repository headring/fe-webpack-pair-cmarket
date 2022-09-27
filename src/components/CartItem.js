import React from 'react'

export default function CartItem({
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
}) {
  return (
    <li className="cart-item-body">
      <input
        type="checkbox"
        className="cart-item-checkbox"
        onChange={(e) => {
          handleCheckChange(e.target.checked, item.id)
        }}
        checked={checkedItems.includes(item.id) ? true : false} 
        aria-label = {`${item.name} ${checkedItems.includes(item.id)?"선택됨":"선택안됨." }`} >
      </input>
      <div className="cart-item-thumbnail">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title" data-testid={`cart-${item.name}`}><strong>{item.name}</strong></div>
        <div className="cart-item-price"><strong>{item.price}원</strong></div>
      </div>
      <input
        type="number"
        min={1}
        className="cart-item-quantity"
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(Number(e.target.value), item.id)
        }}
        aria-label = {`${item.name} 수량선택`}>
      </input>
      <button className="cart-item-delete" onClick={() => { handleDelete(item.id) }}>삭제</button>
    </li >
  )
}
