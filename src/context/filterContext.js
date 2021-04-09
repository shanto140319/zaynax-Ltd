import React, { useEffect, useContext, useReducer } from 'react'

import reducer from '../reducers/filter_reducer'

import { useProductsContext } from './productContext'

const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    brand: 'all',
    brand_search: '',
    category: 'all',
    country: 'all',
    size: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext()

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' })
    dispatch({ type: 'SORT_PRODUCTS' })
  }, [products, state.sort, state.filters])

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: 'UPDATE_SORT', payload: value })
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'brand') {
      value = e.target.textContent
    }
    if (name === 'country') {
      value = e.target.textContent
    }
    if (name === 'size') {
      value = e.target.dataset.type
    }

    if (name === 'color') {
      value = e.target.dataset.type
    }
    if (name === 'price') {
      value = Number(value)
    }
    dispatch({ type: 'UPDATE_FILTERS', payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
