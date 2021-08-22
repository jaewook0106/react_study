import React from 'react'

const Modal = () => {
  const open = true;
  return (
    <div>
      {open && <div className="modal_wrap">
        
        <button type="button" className="btn_modal">확인</button>
      </div>}
    </div>
  )
}


export default Modal;