import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const Sizes = ({ sizes }) => {
  const {
    filters: { size },
    updateFilters,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='formControl'>
        <h5>size</h5>
        <div>
          {sizes.map((s, index) => {
            return (
              <button
                type='button'
                key={index}
                data-type={s}
                onClick={updateFilters}
                name='size'
                className={`${
                  size.toLowerCase() === s.toLowerCase() ? 'active' : null
                }`}
              >
                {s}
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
    border: 1px solid var(--clr-grey-9);
    margin: 0.3rem;
    background: none;
    text-transform: uppercase;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--clr-grey-5);
    font-size: 12px;
    border-radius: 2px;
  }
  button:focus {
    outline: none;
  }
  .active {
    color: var(--clr-black);
  }
`

export default Sizes
