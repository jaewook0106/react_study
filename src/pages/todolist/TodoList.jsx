import React, { useState } from 'react';
import Nav from '../../components/nav/Nav'

const TodoList = ({ location, history }) => {

  const [listData, setListData] = useState([]);
  // const [inpData, setInpData] = useState('');
  const [inpValue, setInpValue] = useState('');

  const inputListText = (ev) => {
    // console.log(ev.target.value);
    setInpValue(ev.target.value);
  }

  const handleAddListClick = () => {
    setListData((prevListData) => {
      return [...prevListData, inpValue]
    });
    setInpValue('');
    console.log(inpValue)
  }

  const handleDeleteClick = (item) => {
    setListData((prevListData) => {
      return prevListData.filter(text => text !== item);
    });
  }

  return (
    <>
      <Nav location={location} history={history} />
      <div className="todolist">
        <div className="add_list">
          <input type="text" className="inp_item" onInput={inputListText} value={inpValue} />
          <button type="button" className="btn_add btn_item" onClick={handleAddListClick}>추가</button>
        </div>
        <ul className="list_item">
          {listData.map( (item, idx) => {
            return(
              <li key={item + idx}>
                <div className="desc_item">{item}</div>
                <button type="button" className="btn_del btn_item" onClick={() => {handleDeleteClick(item)}}>삭제</button>
              </li>
            )
            
          })}
          
        </ul>
      </div>
    </>
  )
}


export default TodoList