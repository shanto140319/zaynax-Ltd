const products_reducer = (state, action) => {
  if (action.type === 'PAGINATION') {
    const { data, page } = state
    return { ...state, products: data[page] }
  }

  if (action.type === 'HANDLE_PAGE') {
    const { page } = state
    return { ...state, page: action.payload }
  }

  if (action.type === 'PREV_PAGE') {
    const { data } = state
    if (action.payload < 0) {
      action.payload = data.length - 1
    }
    return { ...state, page: action.payload }
  }

  if (action.type === 'NEXT_PAGE') {
    const { data } = state
    if (action.payload > data.length - 1) {
      action.payload = 0
    }
    return { ...state, page: action.payload }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
