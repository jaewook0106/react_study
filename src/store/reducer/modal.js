import { MODAL_STATUS } from '../status/modal';
import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal';
import { combineReducers } from 'rudex';

const modalControl = (state = MODAL_STATUS, action) => {
  switch(action.type) {
    case MODAL_OPEN: 
      return {
        ...state,
        isOpen: true
      }
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}



const ModalReducer = combineReducers({ modalControl });

export default ModalReducer