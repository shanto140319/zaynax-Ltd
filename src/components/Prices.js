import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const Prices = () => {
  const {
    filters: { min_price, max_price, price },
    updateFilters,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='form-control'>
        <h5>price</h5>
        <p className='price'>BDT {price}</p>
        <input
          type='range'
          name='price'
          onChange={updateFilters}
          min={min_price}
          max={max_price}
          value={price}
        />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Prices
