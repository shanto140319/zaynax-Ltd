import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import { useProductsContext } from '../context/productContext'
import { products as AllProduct } from '../data'
const Topsection = () => {
  const { products } = useProductsContext()
  const [ShowedSerial, setShowedSerial] = useState({})
  useEffect(() => {
    let first = products[0]
    let last = products[products.length - 1]
    setShowedSerial({ first, last })
    return () => {}
  }, [products])
  const { updateSort, sort } = useFilterContext()
  return (
    <Wrapper className='section'>
      <p>
        Showing {ShowedSerial.first?.id}-{ShowedSerial.last?.id} of{'  '}
        {AllProduct.length} Products
      </p>
      <div>
        <form>
          <label htmlFor='sort'>Refine by</label>
          <select
            name='sort'
            id='sort'
            value={sort}
            onChange={updateSort}
            className='sort-input'
          >
            <option value='price-lowest'>price (lowest) </option>
            <option value='price-highest'>price (highest) </option>
            <option value='name-a'>name (a-z) </option>
            <option value='name-z'>name (z-a) </option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  letter-spacing: var(--spacing);
  form label {
    padding-right: 1rem;
    border-right: 1px solid #222;
  }
`
export default Topsection
