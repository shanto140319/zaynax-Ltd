import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import { useProductsContext } from '../context/productContext'
import { products as AllProduct } from '../data'
import { BiSearch } from 'react-icons/bi'

const Topsection = () => {
  const { products } = useProductsContext()
  const [ShowedSerial, setShowedSerial] = useState({})
  useEffect(() => {
    let first = products[0]
    let last = products[products.length - 1]
    setShowedSerial({ first, last })
    return () => {}
  }, [products])
  const { updateSort, sort, text, updateFilters } = useFilterContext()
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

      <form onSubmit={(e) => e.preventDefault()}>
        {/* search */}
        <div className='form-control'>
          <input
            type='text'
            name='text'
            className='search-input'
            value={text}
            placeholder='search'
            onChange={updateFilters}
          />
          <span>
            <BiSearch />
          </span>
        </div>
      </form>

      {/* end of search */}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: space-between;
  letter-spacing: var(--spacing);
  @media (max-width: 700px) {
    padding: 1rem;
  }
  form label {
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid #222;
  }
  select {
    border: none;
  }
  select:focus {
    outline: none;
  }
  .form-control {
    position: relative;
  }
  .form-control input {
    padding: 0.4rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--clr-grey-8);
    background: var(--clr-grey-10);
    color: var(--clr-black);
  }
  span {
    position: absolute;
    top: 55%;
    right: 2%;
    transform: translateY(-50%);
  }
  .form-control input:focus {
    outline: none;
  }
`
export default Topsection
