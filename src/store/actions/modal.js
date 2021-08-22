export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';


export const modalOpen = () => {
  return {
    type: MODAL_OPEN
  }
}

export const modalClose = () => {
  return {
    type: MODAL_CLOSE
  }
}