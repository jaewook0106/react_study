import React from 'react'

const List = ({ item, deleteClick }) => {
  return (
    <li>
      <div className="desc_item">{item}</div>
      <button type="button" className="btn_del btn_item" onClick={() => {deleteClick(item)}}>삭제</button>
    </li>
  )
}

export default List