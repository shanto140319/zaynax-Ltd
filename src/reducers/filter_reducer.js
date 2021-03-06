const filter_reducer = (state, action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }

  if (action.type === 'UPDATE_SORT') {
    return { ...state, sort: action.payload }
  }

  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filtered_products } = state
    let tempProduct = [...filtered_products]
    if (sort === 'price-lowest') {
      tempProduct = tempProduct.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tempProduct = tempProduct.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tempProduct = tempProduct.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProduct = tempProduct.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_products: tempProduct }
  }

  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === 'FILTER_PRODUCTS') {
    const { all_products } = state
    const {
      text,
      category,
      brand,
      brand_search,
      country,
      size,
      color,
      price,
      shipping,
    } = state.filters

    let tempProduct = [...all_products]
    //text
    if (text) {
      tempProduct = tempProduct.filter((product) => {
        return product.name.toLowerCase().includes(text.toLowerCase())
      })
    }
    //category
    if (category !== 'all') {
      tempProduct = tempProduct.filter(
        (product) => product.category === category
      )
    }

    //Brand
    if (brand !== 'all') {
      tempProduct = tempProduct.filter((product) => product.brand === brand)
    }
    if (brand_search) {
      tempProduct = tempProduct.filter((product) => {
        return product.brand.toLowerCase().includes(brand_search.toLowerCase())
      })
    }

    //Country
    if (country !== 'all') {
      tempProduct = tempProduct.filter((product) => product.country === country)
    }

    //size
    if (size !== 'all') {
      tempProduct = tempProduct.filter((product) => {
        return product.size.find((c) => c === size)
      })
    }

    //colors
    if (color !== 'all') {
      tempProduct = tempProduct.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }
    //price
    tempProduct = tempProduct.filter((product) => product.price <= price)

    return { ...state, filtered_products: tempProduct }
  }

  //clear all filters
  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        brand: 'all',
        brand_search: '',
        category: 'all',
        country: 'all',
        size: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
