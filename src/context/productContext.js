import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products } from '../data'
import paginate from '../pagination'

const initialState = {
  page: 0,
  data: paginate(products),
  products: [],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'PAGINATION' })
  }, [state.page])

  // pagination start
  const handlePage = (index) => {
    dispatch({ type: 'HANDLE_PAGE', payload: index })
  }

  const prevPage = () => {
    let prevPage = state.page - 1

    dispatch({ type: 'PREV_PAGE', payload: prevPage })
  }
  const nextPage = () => {
    let nextPage = state.page + 1

    dispatch({ type: 'NEXT_PAGE', payload: nextPage })
  }
  //pagination end

  return (
    <ProductsContext.Provider
      value={{ ...state, handlePage, prevPage, nextPage }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
