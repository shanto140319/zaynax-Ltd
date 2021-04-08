import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import { BiSearch } from 'react-icons/bi'
import { BsCircle } from 'react-icons/bs'

const Brands = ({ brands }) => {
  const {
    filters: { brand, brand_search },
    updateFilters,
  } = useFilterContext()
  return (
    <Wrapper>
      <div>
        <h5>Brand</h5>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search */}
          <div className='form-control'>
            <input
              type='text'
              name='brand_search'
              className='search-input'
              value={brand_search}
              placeholder='search'
              onChange={updateFilters}
            />
            <span>
              <BiSearch />
            </span>
          </div>
        </form>

        {/* end of search */}
        <div>
          {brands.map((b, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={updateFilters}
                name='brand'
                className={`${
                  brand.toLowerCase() === b.toLowerCase() ? 'active' : null
                }`}
              >
                {b}
              </button>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  button {
    border: none;
    display: block;
    background: none;
    text-transform: capitalize;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
  }
  button:focus {
    outline: none;
  }
  .active {
    color: var(--clr-black);
  }
  .form-control {
    position: relative;
    margin-bottom: 1rem;
  }
  .form-control input {
    padding: 0.4rem;
    border-radius: var(--radius);
    border: 1px solid var(--clr-grey-8);
    color: var(--clr-black);
  }
  span {
    position: absolute;
    top: 55%;
    right: 8%;
    transform: translateY(-50%);
  }
  .form-control input:focus {
    outline: none;
  }
`

export default Brands
