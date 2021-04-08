import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const Categorys = ({ categories }) => {
  const {
    filters: { category },
    updateFilters,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='formControl'>
        <h5>category</h5>
        <div>
          {categories.map((c, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={updateFilters}
                name='category'
                className={`${
                  category.toLowerCase() === c.toLowerCase() ? 'active' : null
                }`}
              >
                {c}
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
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .active {
    color: var(--clr-black);
  }
`

export default Categorys
